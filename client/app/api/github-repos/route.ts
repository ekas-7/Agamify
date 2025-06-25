import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    
    // Get user's GitHub access token to fetch repositories
    const user = await User.findById(session.user.id).lean();
    const githubToken = user?.githubAccessToken;
    
    if (!githubToken) {
      return NextResponse.json({ error: "GitHub access token not found" }, { status: 400 });
    }
    
    // Fetch repositories from GitHub API - only owned repositories
    const response = await fetch('https://api.github.com/user/repos?per_page=100&type=owner', {
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch repositories from GitHub" }, { status: response.status });
    }
    
    const githubRepos = await response.json();
    
    // Convert to the format expected by the frontend
    const formattedRepos = githubRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      clone_url: repo.clone_url,
      private: repo.private,
      language: repo.language,
      updated_at: repo.updated_at
    }));

    return NextResponse.json(formattedRepos);
  } catch (error) {
    console.error("GitHub repos API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
