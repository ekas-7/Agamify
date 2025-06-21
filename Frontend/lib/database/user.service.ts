import { prisma } from './prisma'
import type { 
  UserWithRepositories, 
  UserWithRepoUsers, 
  CreateUserInput, 
  UpdateUserInput,
  GitHubUser 
} from '../../types/database'

export class UserService {
  /**
   * Create a new user
   */
  static async createUser(data: CreateUserInput) {
    return await prisma.user.create({
      data,
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Find user by ID with relationships
   */
  static async findUserById(id: string): Promise<UserWithRepositories | null> {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Find user by email
   */
  static async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Find user by GitHub username
   */
  static async findUserByGitHubUsername(githubUsername: string) {
    return await prisma.user.findUnique({
      where: { githubUsername },
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Create or update user from GitHub data
   */
  static async upsertUserFromGitHub(githubUser: GitHubUser) {
    return await prisma.user.upsert({
      where: { 
        githubId: githubUser.id.toString() 
      },      update: {
        name: githubUser.name,
        email: githubUser.email || undefined,
        githubUsername: githubUser.login,
        avatarUrl: githubUser.avatar_url,
      },
      create: {
        name: githubUser.name,
        email: githubUser.email || `${githubUser.login}@github.local`,
        githubId: githubUser.id.toString(),
        githubUsername: githubUser.login,
        avatarUrl: githubUser.avatar_url,
      },
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Update user
   */
  static async updateUser(id: string, data: UpdateUserInput) {
    return await prisma.user.update({
      where: { id },
      data,
      include: {
        repositories: true,
        repoUsers: {
          include: {
            repository: true
          }
        }
      }
    })
  }

  /**
   * Delete user
   */
  static async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id }
    })
  }

  /**
   * Get user's repositories with migration status
   */
  static async getUserRepositoriesWithMigrationStatus(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        repositories: {
          include: {
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
        },
        repoUsers: {
          include: {
            repository: {
              include: {
                branches: {
                  include: {
                    languages: true
                  }
                }
              }
            }
          }
        }
      }
    })
  }
}
