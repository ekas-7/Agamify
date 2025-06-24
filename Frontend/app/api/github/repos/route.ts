import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth';

interface Owner {
  login: string;
  avatar_url: string;
}

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  private: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  default_branch: string;
  owner: Owner;
}

interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface Session {
  user?: SessionUser;
  accessToken?: string;
}

export async function GET() {
  try {
    // Get the user session
    const session = (await getServerSession(authOptions)) as Session;
    
    if (!session?.user) {
      return NextResponse.json({
        success: false,
        error: 'Not authenticated'
      }, { status: 401 });
    }

    // Check if we have an access token
    if (!session.accessToken) {
      return NextResponse.json({
        success: false,
        error: 'No access token available'
      }, { status: 401 });
    }

    // Get the current user's GitHub information to filter owned repositories
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${session.accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Agamify-App'
      }
    });

    if (!userResponse.ok) {
      throw new Error(`GitHub user API error: ${userResponse.status}`);
    }

    const currentUser: Owner = await userResponse.json();

    // Fetch user's repositories from GitHub API (only owned repositories)
    const response = await fetch('https://api.github.com/user/repos?sort=updated&per_page=100&type=owner', {
      headers: {
        'Authorization': `token ${session.accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Agamify-App'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: Repo[] = await response.json();

    // Filter repositories to only include ones where the current user is the owner
    // This is a free tier restriction - only owners can import repositories
    const ownedRepos = repos.filter((repo) => repo.owner.login === currentUser.login);

    // Filter and format the repositories
    const formattedRepos = ownedRepos.map((repo) => ({
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
    }));

    return NextResponse.json({
      success: true,
      data: formattedRepos
    });

  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch repositories from GitHub'
    }, { status: 500 });
  }
}
