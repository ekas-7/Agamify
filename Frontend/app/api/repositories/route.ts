import { RepositoryService } from '@/lib';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const githubId = searchParams.get('githubId');
    const userEmail = searchParams.get('userEmail');

    if (userId) {
      const repositories = await RepositoryService.getRepositoriesForUser(userId);
      return NextResponse.json({
        success: true,
        data: repositories
      });
    }

    if (userEmail) {      // Find user by email first, then get their repositories
      const user = await import('@/lib').then(db => db.UserService.findUserByEmail(userEmail));
      if (!user) {
        return NextResponse.json({
          success: false,
          error: 'User not found'
        }, { status: 404 });
      }
      const repositories = await RepositoryService.getRepositoriesForUser(user.id);
      return NextResponse.json({
        success: true,
        data: repositories
      });
    }

    if (githubId) {
      const repository = await RepositoryService.findRepositoryByGitHubId(parseInt(githubId));
      return NextResponse.json({
        success: true,
        data: repository
      });
    }

    // Get repositories with migration potential
    const repositories = await RepositoryService.getRepositoriesWithMigrationPotential();
    return NextResponse.json({
      success: true,
      data: repositories
    });
  } catch (error) {
    console.error('Get repositories error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch repositories'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, description, ownerId, githubId, htmlUrl, cloneUrl, isPrivate } = await request.json();

    if (!name || !ownerId) {
      return NextResponse.json({
        success: false,
        error: 'Name and ownerId are required'
      }, { status: 400 });
    }

    const repository = await RepositoryService.createRepository({
      name,
      description,
      owner: {
        connect: { id: ownerId }
      },
      githubId,
      htmlUrl,
      cloneUrl,
      isPrivate: isPrivate || false
    });

    return NextResponse.json({
      success: true,
      data: repository,
      message: 'Repository created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Create repository error:', error);
    
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json({
        success: false,
        error: 'Repository already exists'
      }, { status: 409 });
    }

    return NextResponse.json({
      success: false,
      error: 'Failed to create repository'
    }, { status: 500 });
  }
}
