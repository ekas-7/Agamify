import { PrismaClient } from '../../generated/prisma'

declare global {
  // Allow global `prisma` instance to be cached across hot reloads in development
  var prisma: PrismaClient | undefined
}

// Singleton pattern to prevent multiple instances in development
export const prisma = globalThis.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default prisma
