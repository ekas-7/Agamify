import type { NextApiRequest, NextApiResponse } from 'next'
import { checkDatabaseConnection, getDatabaseStats, initializeDatabase } from '../../../lib/database/utils'

type Data = {
  success: boolean
  connected?: boolean
  stats?: any
  error?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const connected = await checkDatabaseConnection()
      
      if (connected) {
        const stats = await getDatabaseStats()
        res.status(200).json({ 
          success: true, 
          connected, 
          stats,
          message: 'Database connection successful' 
        })
      } else {
        res.status(500).json({ 
          success: false, 
          connected: false, 
          error: 'Database connection failed' 
        })
      }
    } catch (error) {
      console.error('Database test error:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Failed to test database connection' 
      })
    }
  } else if (req.method === 'POST') {
    // Initialize database with default data
    try {
      await initializeDatabase()
      const stats = await getDatabaseStats()
      
      res.status(200).json({ 
        success: true, 
        stats,
        message: 'Database initialized successfully' 
      })
    } catch (error) {
      console.error('Database initialization error:', error)
      res.status(500).json({ 
        success: false, 
        error: 'Failed to initialize database' 
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`
    })
  }
}
