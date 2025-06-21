import { NextApiRequest, NextApiResponse } from 'next'
import { RepositoryService } from '../../../lib/database'
import type { ApiResponse } from '../../../types/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  switch (req.method) {
    case 'GET':
      return await getRepositories(req, res)
    case 'POST':
      return await createRepository(req, res)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      return res.status(405).json({
        success: false,
        error: `Method ${req.method} Not Allowed`
      })
  }
}

async function getRepositories(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  try {
    const { userId, githubId } = req.query

    if (userId) {
      const repositories = await RepositoryService.getRepositoriesForUser(userId as string)
      return res.status(200).json({
        success: true,
        data: repositories
      })
    }

    if (githubId) {
      const repository = await RepositoryService.findRepositoryByGitHubId(parseInt(githubId as string))
      return res.status(200).json({
        success: true,
        data: repository
      })
    }

    // Get repositories with migration potential
    const repositories = await RepositoryService.getRepositoriesWithMigrationPotential()
    return res.status(200).json({
      success: true,
      data: repositories
    })
  } catch (error) {
    console.error('Get repositories error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch repositories'
    })
  }
}

async function createRepository(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  try {
    const { name, description, ownerId, githubId, htmlUrl, cloneUrl, isPrivate } = req.body

    if (!name || !ownerId) {
      return res.status(400).json({
        success: false,
        error: 'Name and ownerId are required'
      })
    }

    const repository = await RepositoryService.createRepository({
      name,
      description,
      owner: {
        connect: { id: ownerId }
      },
      githubId,
      htmlUrl,
      cloneUrl,
      isPrivate: isPrivate || false
    })

    return res.status(201).json({
      success: true,
      data: repository,
      message: 'Repository created successfully'
    })
  } catch (error) {
    console.error('Create repository error:', error)
    
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return res.status(409).json({
        success: false,
        error: 'Repository already exists'
      })
    }

    return res.status(500).json({
      success: false,
      error: 'Failed to create repository'
    })
  }
}
