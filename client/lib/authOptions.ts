import dbConnect from "./mongoose";
import { User } from "../models/User";
import GitHubProvider from "next-auth/providers/github";
import { Session } from "next-auth";
import mongoose from "mongoose";
import axios from "axios";
import type { IRepository } from "../models/User";
import type { Account, Profile, User as NextAuthUser } from "next-auth";

// Extend the Session user type to include id and githubUsername
// Use a type alias instead of interface

type ExtendedSessionUser = Session["user"] & {
  id?: string;
  githubUsername?: string;
};

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          githubId: profile.id.toString(),
          githubUsername: profile.login,
          avatarUrl: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    async signIn(params: { user: NextAuthUser; account: Account | null; profile?: Profile }) {
      const { user, account } = params;
      await dbConnect();
      let repositories: IRepository[] = [];
      try {
        // Use the OAuth token from GitHub login
        const githubToken = account?.access_token;
        if (githubToken && typeof user === "object" && user !== null && "githubUsername" in user) {
          const githubUsername = (user as { githubUsername?: string }).githubUsername;
          if (githubUsername) {
            const { data: repos } = await axios.get(
              `https://api.github.com/users/${githubUsername}/repos`,
              { headers: { Authorization: `token ${githubToken}` } }
            );
            repositories = (repos as Array<{ id: number; name: string; description?: string; html_url?: string; clone_url?: string; private?: boolean }> ).map((repo) => ({
              githubId: repo.id,
              name: repo.name,
              description: repo.description ?? "",
              htmlUrl: repo.html_url ?? "",
              cloneUrl: repo.clone_url ?? "",
              isPrivate: repo.private ?? false,
            }));
          }
        }
      } catch {
        // Ignore repo fetch errors, still allow login
      }
      // Upsert user in MongoDB with repos
      await User.findOneAndUpdate(
        { githubId: (user as { id: string }).id },
        {
          $set: {
            name: (user as { name?: string }).name,
            email: (user as { email?: string }).email,
            image: (user as { image?: string }).image,
            githubId: (user as { id: string }).id,
            githubUsername: (user as { githubUsername?: string }).githubUsername,
            avatarUrl: (user as { avatarUrl?: string }).avatarUrl,
            repositories,
            githubAccessToken: account?.access_token,
          },
        },
        { upsert: true, new: true }
      );
      return true;
    },
    async session({ session }: { session: Session }) {
      await dbConnect();
      if (session.user?.email) {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          (session.user as ExtendedSessionUser).id = (dbUser._id as mongoose.Types.ObjectId).toString();
          (session.user as ExtendedSessionUser).githubUsername = dbUser.githubUsername;
        }
      }
      return session;
    },
  },
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};
