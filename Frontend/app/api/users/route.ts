import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/database/user.service';
import type { ApiResponse } from '@/types/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await UserService.createUser(body);
    
    return NextResponse.json({
      success: true,
      data: user,
      message: 'User created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to create user'
    }, { status: 500 });
  }
}
