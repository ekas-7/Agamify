import type { NextApiRequest, NextApiResponse } from 'next'
import { UserService } from '../../../lib/database/user.service'
import type { ApiResponse } from '../../../types/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'User ID is required'
    })
  }

  switch (req.method) {
    case 'GET':
      try {
        const user = await UserService.findUserById(id)
        
        if (!user) {
          return res.status(404).json({
            success: false,
            error: 'User not found'
          })
        }

        res.status(200).json({
          success: true,
          data: user
        })
      } catch (error) {
        console.error('Get user error:', error)
        res.status(500).json({
          success: false,
          error: 'Failed to fetch user'
        })
      }
      break

    case 'PUT':
      try {
        const updatedUser = await UserService.updateUser(id, req.body)
        
        res.status(200).json({
          success: true,
          data: updatedUser,
          message: 'User updated successfully'
        })
      } catch (error) {
        console.error('Update user error:', error)
        res.status(500).json({
          success: false,
          error: 'Failed to update user'
        })
      }
      break

    case 'DELETE':
      try {
        await UserService.deleteUser(id)
        
        res.status(200).json({
          success: true,
          message: 'User deleted successfully'
        })
      } catch (error) {
        console.error('Delete user error:', error)
        res.status(500).json({
          success: false,
          error: 'Failed to delete user'
        })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).json({
        success: false,
        error: `Method ${req.method} Not Allowed`
      })
  }
}
