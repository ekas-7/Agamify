const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test connection
    await prisma.$connect()
    console.log('✅ Database connected successfully!')
    
    // Test basic operation
    const userCount = await prisma.user.count()
    console.log(`📊 Current user count: ${userCount}`)
    
    await prisma.$disconnect()
    console.log('✅ Database disconnected properly')
    
  } catch (error) {
    console.error('❌ Database connection failed:')
    console.error(error)
    process.exit(1)
  }
}

testConnection()
