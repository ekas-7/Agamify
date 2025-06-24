import {  NextResponse } from 'next/server';
import { checkDatabaseConnection, getDatabaseStats, initializeDatabase } from '@/lib/utils';

export async function GET() {
  try {
    const connected = await checkDatabaseConnection();
    
    if (connected) {
      const stats = await getDatabaseStats();
      return NextResponse.json({ 
        success: true, 
        connected, 
        stats,
        message: 'Database connection successful' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        connected: false, 
        error: 'Database connection failed' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to test database connection' 
    }, { status: 500 });
  }
}

export async function POST() {
  // Initialize database with default data
  try {
    await initializeDatabase();
    const stats = await getDatabaseStats();
    
    return NextResponse.json({ 
      success: true, 
      stats,
      message: 'Database initialized successfully' 
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to initialize database' 
    }, { status: 500 });
  }
}
