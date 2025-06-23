import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export interface Repository {
  id: string
  name: string
  description: string | null
  htmlUrl: string
  language?: string
  branches: Array<{
    id: string
    name: string
    languages: Array<{
      name: string
      category: string
    }>
  }>
  owner: {
    name: string | null
    email: string
  }
}

export interface GitHubRepository {
  id: number
  name: string
  fullName: string
  description: string | null
  htmlUrl: string
  cloneUrl: string
  private: boolean
  language: string | null
  stargazersCount: number
  forksCount: number
  updatedAt: string
  defaultBranch: string
  owner: {
    login: string
    avatarUrl: string
  }
}

export const useRepositories = () => {
  const { data: session } = useSession()
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRepositories = async () => {
    if (!session?.user?.email) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/repositories?userEmail=' + encodeURIComponent(session.user.email))
      const data = await response.json()

      if (data.success) {
        setRepositories(data.data)
      } else {
        setError(data.error || 'Failed to fetch repositories')
      }
    } catch (err) {
      setError('Failed to fetch repositories')
      console.error('Failed to fetch repositories:', err)
    } finally {
      setLoading(false)
    }
  }

  const importRepository = async (githubRepo: GitHubRepository): Promise<Repository> => {
    const response = await fetch('/api/github/import', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ repository: githubRepo }),
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || 'Failed to import repository')
    }

    // Refresh the repositories list
    await fetchRepositories()
      return data.data
  }

  const deleteRepository = async (repositoryId: string): Promise<void> => {
    const response = await fetch(`/api/repositories/${repositoryId}`, {
      method: 'DELETE',
    })

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || 'Failed to delete repository')
    }

    // Refresh the repositories list
    await fetchRepositories()
  }

  useEffect(() => {
    if (session) {
      fetchRepositories()
    }
  }, [session])

  return {
    repositories,
    loading,
    error,
    fetchRepositories,
    importRepository,
    deleteRepository
  }
}

export const useGitHubRepositories = () => {
  const { data: session } = useSession()
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchGitHubRepositories = async () => {
    if (!session) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/github/repos')
      const data = await response.json()

      if (data.success) {
        setRepositories(data.data)
      } else {
        setError(data.error || 'Failed to fetch GitHub repositories')
      }
    } catch (err) {
      setError('Failed to fetch GitHub repositories')
      console.error('Error fetching GitHub repositories:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (session) {
      fetchGitHubRepositories()
    }
  }, [session])

  return {
    repositories,
    loading,
    error,
    refetch: fetchGitHubRepositories
  }
}