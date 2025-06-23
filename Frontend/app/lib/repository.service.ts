import { prisma } from './prisma'
import type { 
  RepositoryWithOwner,
  CreateRepositoryInput, 
  UpdateRepositoryInput,
  GitHubRepository 
} from '@/types/database'

export class RepositoryService {
  /**
   * Create a new repository
   */
  static async createRepository(data: CreateRepositoryInput) {
    return await prisma.repository.create({
      data,
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Find repository by ID with all relationships
   */
  static async findRepositoryById(id: string): Promise<RepositoryWithOwner | null> {
    return await prisma.repository.findUnique({
      where: { id },
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Find repository by GitHub ID
   */
  static async findRepositoryByGitHubId(githubId: number) {
    return await prisma.repository.findUnique({
      where: { githubId },
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Get repositories for a user
   */
  static async getRepositoriesForUser(userId: string) {
    return await prisma.repository.findMany({
      where: {
        OR: [
          { ownerId: userId },
          { repoUsers: { some: { userId } } }
        ]
      },
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Create repository from GitHub data
   */
  static async createRepositoryFromGitHub(githubRepo: GitHubRepository, ownerId: string) {
    return await prisma.repository.create({
      data: {
        name: githubRepo.name,
        description: githubRepo.description,
        ownerId,
        githubId: githubRepo.id,
        htmlUrl: githubRepo.html_url,
        cloneUrl: githubRepo.clone_url,
        isPrivate: githubRepo.private,
      },
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Update repository
   */
  static async updateRepository(id: string, data: UpdateRepositoryInput) {
    return await prisma.repository.update({
      where: { id },
      data,
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        },
        repoUsers: {
          include: {
            user: true
          }
        }
      }
    })
  }

  /**
   * Add user to repository
   */
  static async addUserToRepository(userId: string, repositoryId: string, role: 'OWNER' | 'CONTRIBUTOR' | 'NON_CONTRIBUTOR' = 'CONTRIBUTOR') {
    return await prisma.repoUser.create({
      data: {
        userId,
        repositoryId,
        role
      },
      include: {
        user: true,
        repository: true
      }
    })
  }

  /**
   * Remove user from repository
   */
  static async removeUserFromRepository(userId: string, repositoryId: string) {
    return await prisma.repoUser.deleteMany({
      where: {
        userId,
        repositoryId
      }
    })
  }

  /**
   * Get repositories with migration potential
   */
  static async getRepositoriesWithMigrationPotential() {
    return await prisma.repository.findMany({
      where: {
        branches: {
          some: {
            languages: {
              some: {
                category: 'FRONTEND'
              }
            }
          }
        }
      },
      include: {
        owner: true,
        branches: {
          include: {
            languages: true
          }
        }
      }
    })
  }

  /**
   * Delete repository
   */
  static async deleteRepository(id: string) {
    return await prisma.repository.delete({
      where: { id }
    })
  }
}
