import { prisma } from './prisma'
import { PrismaClient } from '../../generated/prisma'

/**
 * Health check for database connection
 */
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$connect()
    // For MongoDB, we can test with a simple operation
    await prisma.user.findFirst()
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

/**
 * Initialize database with default data
 */
export async function initializeDatabase() {
  try {
    // Create default supported frameworks
    const defaultFrameworks = [
      { name: 'React', category: 'FRONTEND', version: '18.2.0' },
      { name: 'Vue', category: 'FRONTEND', version: '3.0.0' },
      { name: 'Angular', category: 'FRONTEND', version: '16.0.0' },
      { name: 'Svelte', category: 'FRONTEND', version: '4.0.0' },
      { name: 'Next.js', category: 'FULLSTACK', version: '13.0.0' },
      { name: 'Nuxt', category: 'FULLSTACK', version: '3.0.0' },
      { name: 'SvelteKit', category: 'FULLSTACK', version: '1.0.0' },
      { name: 'Node.js', category: 'BACKEND', version: '18.0.0' },
      { name: 'Express', category: 'BACKEND', version: '4.0.0' },
      { name: 'Fastify', category: 'BACKEND', version: '4.0.0' },
    ]

    for (const framework of defaultFrameworks) {
      await prisma.language.upsert({
        where: { name: framework.name },
        update: {},
        create: {
          name: framework.name,
          category: framework.category as 'FRONTEND' | 'BACKEND' | 'FULLSTACK' | 'MOBILE' | 'DESKTOP',
          version: framework.version
        }
      })
    }

    console.log('Database initialized with default frameworks')
  } catch (error) {
    console.error('Failed to initialize database:', error)
  }
}

/**
 * Clean up database connections
 */
export async function disconnectDatabase() {
  await prisma.$disconnect()
}

/**
 * Get database statistics
 */
export async function getDatabaseStats() {
  const [userCount, repoCount, branchCount, languageCount] = await Promise.all([
    prisma.user.count(),
    prisma.repository.count(),
    prisma.branch.count(),
    prisma.language.count()
  ])

  return {
    users: userCount,
    repositories: repoCount,
    branches: branchCount,
    languages: languageCount
  }
}

/**
 * Execute database transaction
 */
export async function executeTransaction<T>(
  operations: (tx: PrismaClient) => Promise<T>
): Promise<T> {
  return await prisma.$transaction(async (tx) => {
    return await operations(tx as PrismaClient)
  })
}

/**
 * Backup critical data
 */
export async function backupCriticalData() {
  try {
    const users = await prisma.user.findMany({
      include: {
        repositories: true,
        repoUsers: true
      }
    })

    const repositories = await prisma.repository.findMany({
      include: {
        branches: {
          include: {
            languages: true
          }
        }
      }
    })

    return {
      users,
      repositories,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Backup failed:', error)
    throw error
  }
}

/**
 * Search across repositories and branches
 */
export async function searchRepositories(query: string) {
  return await prisma.repository.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { owner: { name: { contains: query, mode: 'insensitive' } } },
        { branches: { some: { name: { contains: query, mode: 'insensitive' } } } }
      ]
    },
    include: {
      owner: true,
      branches: {
        include: {
          languages: true
        }
      }
    },
    take: 50
  })
}
