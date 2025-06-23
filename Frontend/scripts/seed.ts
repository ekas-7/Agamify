import { prisma } from '../lib/prisma'
import { initializeDatabase } from '../lib/utils'

async function main() {
  console.log('🌱 Starting database seed...')
  
  try {
    // Initialize with default frameworks
    await initializeDatabase()
    
    // Create sample data for development
    console.log('📝 Creating sample data...')
    
    // Create a sample user
    const sampleUser = await prisma.user.upsert({
      where: { email: 'demo@agamify.com' },
      update: {},
      create: {
        name: 'Demo User',
        email: 'demo@agamify.com',
        githubUsername: 'agamify-demo',
        owner: 'OWNER'
      }
    })    // Create a sample repository
    const existingRepo = await prisma.repository.findFirst({
      where: { 
        name: 'sample-react-app',
        ownerId: sampleUser.id 
      }
    })

    const sampleRepo = existingRepo || await prisma.repository.create({
      data: {
        name: 'sample-react-app',
        description: 'A sample React application for testing migrations',
        ownerId: sampleUser.id,
        isPrivate: false
      }
    })

    // Create sample branches
    const mainBranch = await prisma.branch.upsert({
      where: {
        name_repositoryId: {
          name: 'main',
          repositoryId: sampleRepo.id
        }
      },
      update: {},
      create: {
        name: 'main',
        repositoryId: sampleRepo.id,
        isProtected: true,
        migratesTo: ['vue-migration', 'angular-migration']
      }
    })

    // Add React framework to main branch
    await prisma.language.upsert({
      where: { name: 'React' },
      update: {},
      create: {
        name: 'React',
        version: '18.2.0',
        category: 'FRONTEND',
        branchId: mainBranch.id
      }
    })

    console.log('✅ Database seeded successfully!')
    console.log(`📊 Sample user: ${sampleUser.email}`)
    console.log(`📦 Sample repository: ${sampleRepo.name}`)
    console.log(`🌿 Sample branch: ${mainBranch.name}`)
    
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Execute the seed function
main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
