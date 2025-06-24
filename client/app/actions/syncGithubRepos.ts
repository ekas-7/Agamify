import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../../lib/prisma";
import axios from "axios";

export async function syncGithubRepos() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.githubUsername) return;

  const githubUsername = session.user.githubUsername;
  const githubToken = process.env.GITHUB_ACCESS_TOKEN;
  if (!githubToken) throw new Error("Missing GitHub access token");

  // Fetch repos from GitHub
  const { data: repos } = await axios.get(
    `https://api.github.com/users/${githubUsername}/repos`,
    {
      headers: { Authorization: `token ${githubToken}` },
    }
  );

  // Upsert repos in DB
  for (const repo of repos) {
    await prisma.repository.upsert({
      where: { githubId: repo.id },
      update: {
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        cloneUrl: repo.clone_url,
        isPrivate: repo.private,
        owner: { connect: { id: session.user.id } },
      },
      create: {
        githubId: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        cloneUrl: repo.clone_url,
        isPrivate: repo.private,
        owner: { connect: { id: session.user.id } },
      },
    });
  }
}
