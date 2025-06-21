import type { NextApiRequest, NextApiResponse } from 'next'
import { UserService } from '../../../lib/database/user.service'
import type { ApiResponse } from '../../../types/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  switch (req.method) {
    case 'POST':
      try {
        const user = await UserService.createUser(req.body)
        
        res.status(201).json({
          success: true,
          data: user,
          message: 'User created successfully'
        })
      } catch (error) {
        console.error('Create user error:', error)
        res.status(500).json({
          success: false,
          error: 'Failed to create user'
        })
      }
      break

    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).json({
        success: false,
        error: `Method ${req.method} Not Allowed`
      })
  }
}
