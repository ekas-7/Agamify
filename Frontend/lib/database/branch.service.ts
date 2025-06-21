import { prisma } from './prisma'
import type { 
  BranchWithLanguages, 
  CreateBranchInput, 
  UpdateBranchInput,
  GitHubBranch 
} from '../../types/database'

export class BranchService {
  /**
   * Create a new branch
   */
  static async createBranch(data: CreateBranchInput) {
    return await prisma.branch.create({
      data,
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Find branch by ID
   */
  static async findBranchById(id: string): Promise<BranchWithLanguages | null> {
    return await prisma.branch.findUnique({
      where: { id },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Find branch by name and repository
   */
  static async findBranchByNameAndRepository(name: string, repositoryId: string) {
    return await prisma.branch.findUnique({
      where: {
        name_repositoryId: {
          name,
          repositoryId
        }
      },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Get branches for repository
   */
  static async getBranchesForRepository(repositoryId: string) {
    return await prisma.branch.findMany({
      where: { repositoryId },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Create branch from GitHub data
   */
  static async createBranchFromGitHub(githubBranch: GitHubBranch, repositoryId: string) {
    return await prisma.branch.create({
      data: {
        name: githubBranch.name,
        repositoryId,
        lastCommit: githubBranch.commit.sha,
        isProtected: githubBranch.protected,
      },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Update branch
   */
  static async updateBranch(id: string, data: UpdateBranchInput) {
    return await prisma.branch.update({
      where: { id },
      data,
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Add migration target to branch
   */
  static async addMigrationTarget(branchId: string, targetFramework: string) {
    const branch = await prisma.branch.findUnique({
      where: { id: branchId }
    })

    if (!branch) {
      throw new Error('Branch not found')
    }

    const updatedMigratesTo = [...branch.migratesTo, targetFramework]

    return await prisma.branch.update({
      where: { id: branchId },
      data: {
        migratesTo: updatedMigratesTo
      },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Get branches with migration potential
   */
  static async getBranchesWithMigrationPotential() {
    return await prisma.branch.findMany({
      where: {
        languages: {
          some: {
            category: 'FRONTEND'
          }
        }
      },
      include: {
        languages: true,
        repository: {
          include: {
            owner: true
          }
        }
      }
    })
  }

  /**
   * Get migration targets for a branch
   */
  static async getMigrationTargets(branchId: string) {
    const branch = await prisma.branch.findUnique({
      where: { id: branchId },
      select: {
        migratesTo: true,
        languages: true
      }
    })

    return branch
  }

  /**
   * Delete branch
   */
  static async deleteBranch(id: string) {
    return await prisma.branch.delete({
      where: { id }
    })
  }
}
