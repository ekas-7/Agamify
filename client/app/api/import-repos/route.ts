import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { repoIds } = await request.json();
    
    if (!Array.isArray(repoIds) || repoIds.length === 0) {
      return NextResponse.json({ error: "Invalid repository IDs" }, { status: 400 });
    }

    await dbConnect();
    
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check free tier limit
    const currentImportedCount = user.importedRepositories?.length || 0;
    if (currentImportedCount + repoIds.length > 3) {
      return NextResponse.json({ 
        error: `Free tier allows up to 3 repositories. You currently have ${currentImportedCount} imported.` 
      }, { status: 400 });
    }

    // Find repositories to import from user's GitHub repositories
    // If not found in user.repositories, fetch from GitHub API
    let reposToImport = user.repositories.filter(repo => 
      repoIds.includes(repo.githubId)
    );

    // If we couldn't find all repos in user.repositories, fetch them from GitHub API
    if (reposToImport.length < repoIds.length) {
      try {
        const githubToken = user.githubAccessToken;
        if (!githubToken) {
          console.error('No GitHub access token found for user');
          return NextResponse.json({ error: 'No GitHub access token found for user' }, { status: 400 });
        }
        const response = await fetch('https://api.github.com/user/repos?per_page=100', {
          headers: {
            'Authorization': `token ${githubToken}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error('GitHub API error:', response.status, errorText);
          return NextResponse.json({ error: `GitHub API error: ${response.status}` }, { status: 500 });
        }
        const githubRepos = await response.json();
        const missingRepoIds = repoIds.filter(id => 
          !user.repositories.some(repo => repo.githubId === id)
        );
        const additionalRepos = githubRepos
          .filter((repo: any) => missingRepoIds.includes(repo.id))
          .map((repo: any) => ({
            githubId: repo.id,
            name: repo.name,
            description: repo.description || "",
            htmlUrl: repo.html_url,
            cloneUrl: repo.clone_url,
            isPrivate: repo.private
          }));
        reposToImport = [...reposToImport, ...additionalRepos];
      } catch (apiError) {
        console.error('Failed to fetch from GitHub API:', apiError);
        return NextResponse.json({ error: 'Failed to fetch from GitHub API' }, { status: 500 });
      }
    }

    if (reposToImport.length === 0) {
      return NextResponse.json({ error: "No valid repositories found to import" }, { status: 400 });
    }

    // Add to imported repositories (avoid duplicates)
    const existingImportedIds = new Set(
      user.importedRepositories.map(repo => repo.githubId)
    );
    
    const newReposToImport = reposToImport.filter(repo => 
      !existingImportedIds.has(repo.githubId)
    );

    if (newReposToImport.length === 0) {
      return NextResponse.json({ error: "All selected repositories are already imported" }, { status: 400 });
    }

    // Update user's imported repositories
    user.importedRepositories.push(...newReposToImport);
    await user.save();

    return NextResponse.json({ 
      message: `Successfully imported ${newReposToImport.length} repositories`,
      importedRepos: newReposToImport
    });
    
  } catch (error) {
    console.error("Import repos API error:", error);
    return NextResponse.json(
      { error: "Failed to import repositories" },
      { status: 500 }
    );
  }
}
