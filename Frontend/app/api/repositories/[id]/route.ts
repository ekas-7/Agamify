import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { RepositoryService, UserService } from '@/lib';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  try {
    // Get the user session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({
        success: false,
        error: 'Not authenticated'
      }, { status: 401 });
    }

    // Find the user in our database
    const user = await UserService.findUserByEmail(session.user.email);
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'User not found'
      }, { status: 404 });
    }

    // Get single repository
    const repository = await RepositoryService.findRepositoryById(id);
    
    if (!repository) {
      return NextResponse.json({
        success: false,
        error: 'Repository not found'
      }, { status: 404 });
    }

    // Check if user owns the repository
    if (repository.ownerId !== user.id) {
      return NextResponse.json({
        success: false,
        error: 'Access denied'
      }, { status: 403 });
    }

    return NextResponse.json({
      success: true,
      data: repository
    });
  } catch (error) {
    console.error('Repository API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    // Get the user session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({
        success: false,
        error: 'Not authenticated'
      }, { status: 401 });
    }

    // Find the user in our database
    const user = await UserService.findUserByEmail(session.user.email);
    
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'User not found'
      }, { status: 404 });
    }

    // Delete repository
    const repoToDelete = await RepositoryService.findRepositoryById(id);
    
    if (!repoToDelete) {
      return NextResponse.json({
        success: false,
        error: 'Repository not found'
      }, { status: 404 });
    }

    // Check if user owns the repository
    if (repoToDelete.ownerId !== user.id) {
      return NextResponse.json({
        success: false,
        error: 'Only repository owners can delete repositories'
      }, { status: 403 });
    }

    // Delete the repository (this will cascade delete branches and languages)
    await RepositoryService.deleteRepository(id);

    return NextResponse.json({
      success: true,
      message: 'Repository deleted successfully'
    });
  } catch (error) {
    console.error('Repository API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
}
