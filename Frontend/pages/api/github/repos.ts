import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import type { ApiResponse } from '../../../types/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }  try {
    // Get the user session
    const session = await getServerSession(req, res, authOptions)
    
    if (!session?.user) {
      return res.status(401).json({
        success: false,
        error: 'Not authenticated'
      })
    }    // Check if we have an access token
    if (!session.accessToken) {
      return res.status(401).json({
        success: false,
        error: 'No access token available'
      })
    }

    // Get the current user's GitHub information to filter owned repositories
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${session.accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Agamify-App'
      }
    })

    if (!userResponse.ok) {
      throw new Error(`GitHub user API error: ${userResponse.status}`)
    }

    const currentUser = await userResponse.json()

    // Fetch user's repositories from GitHub API (only owned repositories)
    const response = await fetch('https://api.github.com/user/repos?sort=updated&per_page=100&type=owner', {
      headers: {
        'Authorization': `token ${session.accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Agamify-App'
      }
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }    const repos = await response.json()

    // Filter repositories to only include ones where the current user is the owner
    // This is a free tier restriction - only owners can import repositories
    const ownedRepos = repos.filter((repo: any) => repo.owner.login === currentUser.login)

    // Filter and format the repositories
    const formattedRepos = ownedRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      htmlUrl: repo.html_url,
      cloneUrl: repo.clone_url,
      private: repo.private,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      updatedAt: repo.updated_at,
      createdAt: repo.created_at,
      defaultBranch: repo.default_branch,
      owner: {
        login: repo.owner.login,
        avatarUrl: repo.owner.avatar_url
      }
    }))

    return res.status(200).json({
      success: true,
      data: formattedRepos
    })

  } catch (error) {
    console.error('GitHub API error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch repositories from GitHub'
    })
  }
}
