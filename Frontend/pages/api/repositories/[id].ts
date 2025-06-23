import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { RepositoryService, UserService } from '../../../lib/database'
import type { ApiResponse } from '../../../types/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  const { id } = req.query
  
  if (typeof id !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid repository ID'
    })
  }

  try {
    // Get the user session
    const session = await getServerSession(req, res, authOptions)
    
    if (!session?.user?.email) {
      return res.status(401).json({
        success: false,
        error: 'Not authenticated'
      })
    }

    // Find the user in our database
    const user = await UserService.findUserByEmail(session.user.email)
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      })
    }

    switch (req.method) {
      case 'GET':
        // Get single repository
        const repository = await RepositoryService.findRepositoryById(id)
        
        if (!repository) {
          return res.status(404).json({
            success: false,
            error: 'Repository not found'
          })
        }

        // Check if user owns the repository
        if (repository.ownerId !== user.id) {
          return res.status(403).json({
            success: false,
            error: 'Access denied'
          })
        }

        return res.status(200).json({
          success: true,
          data: repository
        })

      case 'DELETE':
        // Delete repository
        const repoToDelete = await RepositoryService.findRepositoryById(id)
        
        if (!repoToDelete) {
          return res.status(404).json({
            success: false,
            error: 'Repository not found'
          })
        }

        // Check if user owns the repository
        if (repoToDelete.ownerId !== user.id) {
          return res.status(403).json({
            success: false,
            error: 'Only repository owners can delete repositories'
          })
        }

        // Delete the repository (this will cascade delete branches and languages)
        await RepositoryService.deleteRepository(id)

        return res.status(200).json({
          success: true,
          message: 'Repository deleted successfully'
        })

      default:
        return res.status(405).json({
          success: false,
          error: 'Method not allowed'
        })
    }

  } catch (error) {
    console.error('Repository API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}
