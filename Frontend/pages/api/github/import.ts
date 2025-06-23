import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import { RepositoryService, UserService } from '../../../lib/database'
import type { ApiResponse } from '../../../types/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }
  try {    // Get the user session
    const session = await getServerSession(req, res, authOptions)
    
    if (!session?.user?.email) {
      return res.status(401).json({
        success: false,
        error: 'Not authenticated'
      })
    }

    // Check if we have an access token
    if (!session.accessToken) {
      return res.status(401).json({
        success: false,
        error: 'No access token available'
      })
    }

    const { repository } = req.body

    if (!repository || !repository.id || !repository.name) {
      return res.status(400).json({
        success: false,
        error: 'Repository data is required'
      })
    }    // Check if repository already exists
    const existingRepo = await RepositoryService.findRepositoryByGitHubId(repository.id)
    
    if (existingRepo) {
      return res.status(409).json({
        success: false,
        error: 'Repository already imported',
        data: existingRepo
      })
    }

    // Find the user in our database by email
    const user = await UserService.findUserByEmail(session.user.email)
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found in database'
      })
    }

    // Check if the user is the owner of the repository (free tier restriction)
    // In free tier, only repository owners can import repositories
    const repoDetailsResponse = await fetch(`https://api.github.com/repos/${repository.fullName}`, {
      headers: {
        'Authorization': `token ${session.accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Agamify-App'
      }
    })

    if (!repoDetailsResponse.ok) {
      return res.status(403).json({
        success: false,
        error: 'Unable to verify repository ownership'
      })
    }

    const repoDetails = await repoDetailsResponse.json()
      // Check if the current user is the owner
    if (!user.githubUsername || repoDetails.owner.login !== user.githubUsername) {
      return res.status(403).json({
        success: false,
        error: `Only repository owners can import repositories in the free tier. Repository owner: ${repoDetails.owner.login}, Current user: ${user.githubUsername || 'unknown'}. Upgrade to premium to allow collaborators to import repositories.`
      })
    }

    // Create repository in database
    const newRepository = await RepositoryService.createRepository({
      name: repository.name,
      description: repository.description,
      owner: {
        connect: { id: user.id }
      },
      githubId: repository.id,
      htmlUrl: repository.htmlUrl,
      cloneUrl: repository.cloneUrl,
      isPrivate: repository.private
    })

    // Fetch branches from GitHub API
    try {      const branchesResponse = await fetch(
        `https://api.github.com/repos/${repository.fullName}/branches`,
        {
          headers: {
            'Authorization': `token ${session.accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Agamify-App'
          }
        }
      )

      if (branchesResponse.ok) {
        const branches = await branchesResponse.json()
        
        // Import branches (limit to first 10 to avoid rate limiting)
        const branchPromises = branches.slice(0, 10).map(async (branch: any) => {
          const { BranchService } = await import('../../../lib/database')
          return BranchService.createBranch({
            name: branch.name,
            repository: {
              connect: { id: newRepository.id }
            },
            lastCommit: branch.commit.sha,
            isProtected: branch.protected || false
          })
        })

        await Promise.all(branchPromises)
        console.log(`✅ Imported ${branches.length} branches for ${repository.name}`)
      }
    } catch (branchError) {
      console.error('Failed to import branches:', branchError)
      // Continue even if branch import fails
    }

    // Try to detect and import languages
    try {      const languagesResponse = await fetch(
        `https://api.github.com/repos/${repository.fullName}/languages`,
        {
          headers: {
            'Authorization': `token ${session.accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Agamify-App'
          }
        }
      )

      if (languagesResponse.ok) {
        const languages = await languagesResponse.json()
        const { LanguageService } = await import('../../../lib/database')
        
        // Find the main branch
        const mainBranch = await RepositoryService.findRepositoryById(newRepository.id)
        const defaultBranch = mainBranch?.branches.find(b => 
          b.name === repository.defaultBranch || b.name === 'main' || b.name === 'master'
        )

        if (defaultBranch) {
          // Add detected languages to the main branch
          const languagePromises = Object.keys(languages).slice(0, 5).map(async (langName) => {
            const category = getFrameworkCategory(langName)
            return LanguageService.addLanguageToBranch(
              defaultBranch.id,
              langName,
              undefined, // version
              category
            )
          })

          await Promise.all(languagePromises)
          console.log(`✅ Imported ${Object.keys(languages).length} languages for ${repository.name}`)
        }
      }
    } catch (langError) {
      console.error('Failed to import languages:', langError)
      // Continue even if language import fails
    }

    // Refetch the repository with all relations
    const finalRepository = await RepositoryService.findRepositoryById(newRepository.id)

    return res.status(201).json({
      success: true,
      data: finalRepository,
      message: 'Repository imported successfully'
    })

  } catch (error) {
    console.error('Repository import error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to import repository'
    })
  }
}

// Helper function to categorize frameworks
function getFrameworkCategory(language: string): 'FRONTEND' | 'BACKEND' | 'FULLSTACK' | 'MOBILE' | 'DESKTOP' {
  const frontendLangs = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Less', 'React', 'Vue', 'Angular', 'Svelte']
  const backendLangs = ['Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'Node.js']
  const mobileLangs = ['Swift', 'Kotlin', 'Dart', 'Flutter', 'React Native']
  const desktopLangs = ['C++', 'C', 'Electron']

  if (frontendLangs.some(lang => language.toLowerCase().includes(lang.toLowerCase()))) {
    return 'FRONTEND'
  }
  if (backendLangs.some(lang => language.toLowerCase().includes(lang.toLowerCase()))) {
    return 'BACKEND'
  }
  if (mobileLangs.some(lang => language.toLowerCase().includes(lang.toLowerCase()))) {
    return 'MOBILE'
  }
  if (desktopLangs.some(lang => language.toLowerCase().includes(lang.toLowerCase()))) {
    return 'DESKTOP'
  }
  
  return 'FRONTEND' // Default to frontend
}
