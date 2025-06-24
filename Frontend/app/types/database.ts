import { Prisma } from '../generated/prisma'

// User types
export type UserWithRepositories = Prisma.UserGetPayload<{
  include: {
    repositories: true
    repoUsers: {
      include: {
        repository: true
      }
    }
  }
}>

export type UserWithRepoUsers = Prisma.UserGetPayload<{
  include: {
    repoUsers: {
      include: {
        repository: {
          include: {
            branches: true
          }
        }
      }
    }
  }
}>

// Repository types
export type RepositoryWithOwner = Prisma.RepositoryGetPayload<{
  include: {
    owner: true
    branches: {
      include: {
        languages: true
      }
    }
    repoUsers: {
      include: {
        user: true
      }
    }
  }
}>

export type RepositoryWithBranches = Prisma.RepositoryGetPayload<{
  include: {
    branches: {
      include: {
        languages: true
      }
    }
  }
}>

// Branch types
export type BranchWithLanguages = Prisma.BranchGetPayload<{
  include: {
    languages: true
    repository: {
      include: {
        owner: true
      }
    }
  }
}>

// RepoUser types
export type RepoUserWithDetails = Prisma.RepoUserGetPayload<{
  include: {
    user: true
    repository: {
      include: {
        owner: true
        branches: true
      }
    }
  }
}>

// Database operation types
export type CreateUserInput = Prisma.UserCreateInput
export type CreateRepositoryInput = Prisma.RepositoryCreateInput
export type CreateBranchInput = Prisma.BranchCreateInput
export type CreateLanguageInput = Prisma.LanguageCreateInput

export type UpdateUserInput = Prisma.UserUpdateInput
export type UpdateRepositoryInput = Prisma.RepositoryUpdateInput
export type UpdateBranchInput = Prisma.BranchUpdateInput

// GitHub integration types
export interface GitHubUser {
  id: number
  login: string
  name: string | null
  email: string | null
  avatar_url: string
}

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  clone_url: string
  private: boolean
  owner: GitHubUser
}

export interface GitHubBranch {
  name: string
  commit: {
    sha: string
    url: string
  }
  protected: boolean
}

// Framework migration types
export interface MigrationRequest {
  repositoryId: string
  sourceBranch: string
  targetFrameworks: string[]
  preserveStructure: boolean
  migrationConfig?: Record<string, unknown>
}

export interface MigrationResult {
  success: boolean
  targetBranches: string[]
  errors?: string[]
  warnings?: string[]
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
