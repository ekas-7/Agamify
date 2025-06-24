"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import dbConnect from "../../lib/mongoose";
import axios from "axios";
import { User } from "../../models/User";

export async function syncGithubRepos() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.githubUsername) return;

  const githubUsername = session.user.githubUsername;

  await dbConnect();
  // Get the user's GitHub access token from the DB
  const userDoc = await User.findById(session.user.id).lean();
  const githubToken = userDoc?.githubAccessToken;
  if (!githubToken) throw new Error("Missing GitHub access token");

  // Fetch repos from GitHub
  const { data: repos } = await axios.get(
    `https://api.github.com/users/${githubUsername}/repos`,
    {
      headers: { Authorization: `token ${githubToken}` },
    }
  );

  // Upsert repos in DB using Mongoose
  for (const repo of repos) {
    await User.updateOne(
      { _id: session.user.id, "repositories.githubId": repo.id },
      {
        $set: {
          "repositories.$.name": repo.name,
          "repositories.$.description": repo.description,
          "repositories.$.htmlUrl": repo.html_url,
          "repositories.$.cloneUrl": repo.clone_url,
          "repositories.$.isPrivate": repo.private,
        },
      },
      { upsert: false }
    );
    // If repo not found, push new repo
    await User.updateOne(
      { _id: session.user.id, "repositories.githubId": { $ne: repo.id } },
      {
        $push: {
          repositories: {
            githubId: repo.id,
            name: repo.name,
            description: repo.description,
            htmlUrl: repo.html_url,
            cloneUrl: repo.clone_url,
            isPrivate: repo.private,
          },
        },
      }
    );
  }
}
