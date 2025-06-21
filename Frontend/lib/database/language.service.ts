import { prisma } from './prisma'
import type { CreateLanguageInput } from '../../types/database'

export class LanguageService {
  /**
   * Create a new language/framework entry
   */
  static async createLanguage(data: CreateLanguageInput) {
    return await prisma.language.create({
      data,
      include: {
        branch: {
          include: {
            repository: {
              include: {
                owner: true
              }
            }
          }
        }
      }
    })
  }

  /**
   * Find language by ID
   */
  static async findLanguageById(id: string) {
    return await prisma.language.findUnique({
      where: { id },
      include: {
        branch: {
          include: {
            repository: {
              include: {
                owner: true
              }
            }
          }
        }
      }
    })
  }

  /**
   * Find language by name
   */
  static async findLanguageByName(name: string) {
    return await prisma.language.findUnique({
      where: { name }
    })
  }

  /**
   * Get all supported frameworks by category
   */
  static async getFrameworksByCategory(category: 'FRONTEND' | 'BACKEND' | 'FULLSTACK' | 'MOBILE' | 'DESKTOP') {
    return await prisma.language.findMany({
      where: { category },
      orderBy: { name: 'asc' }
    })
  }

  /**
   * Get languages for a specific branch
   */
  static async getLanguagesForBranch(branchId: string) {
    return await prisma.language.findMany({
      where: { branchId },
      include: {
        branch: {
          include: {
            repository: {
              include: {
                owner: true
              }
            }
          }
        }
      }
    })
  }

  /**
   * Add language to branch
   */
  static async addLanguageToBranch(
    branchId: string, 
    name: string, 
    version?: string, 
    category: 'FRONTEND' | 'BACKEND' | 'FULLSTACK' | 'MOBILE' | 'DESKTOP' = 'FRONTEND'
  ) {
    return await prisma.language.create({
      data: {
        name,
        version,
        category,
        branchId
      },
      include: {
        branch: {
          include: {
            repository: {
              include: {
                owner: true
              }
            }
          }
        }
      }
    })
  }

  /**
   * Update language version
   */
  static async updateLanguageVersion(id: string, version: string) {
    return await prisma.language.update({
      where: { id },
      data: { version }
    })
  }

  /**
   * Get migration compatibility matrix
   */
  static async getMigrationCompatibilityMatrix() {
    return await prisma.language.findMany({
      where: {
        category: 'FRONTEND'
      },
      select: {
        name: true,
        version: true,
        category: true
      }
    })
  }

  /**
   * Get popular frameworks for migration suggestions
   */
  static async getPopularFrameworks() {
    return await prisma.language.groupBy({
      by: ['name', 'category'],
      _count: {
        name: true
      },
      orderBy: {
        _count: {
          name: 'desc'
        }
      },
      take: 10
    })
  }

  /**
   * Remove language from branch
   */
  static async removeLanguageFromBranch(languageId: string) {
    return await prisma.language.delete({
      where: { id: languageId }
    })
  }
  /**
   * Get framework statistics
   */
  static async getFrameworkStatistics() {
    const stats = await prisma.language.groupBy({
      by: ['category'],
      _count: {
        category: true
      }
    })

    const uniqueFrameworks = await prisma.language.findMany({
      select: { name: true },
      distinct: ['name']
    })

    const totalProjects = await prisma.language.count()

    return {
      stats,
      totalFrameworks: uniqueFrameworks.length,
      totalProjects
    }
  }
}
