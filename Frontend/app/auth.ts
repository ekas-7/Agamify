import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { UserService } from "@/lib";
import type { GitHubUser } from "@/types/database";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { User } from "next-auth";

interface GitHubProfile {
  id: string;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface GitHubAccount {
  provider: string;
  access_token: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}

interface CustomToken extends JWT {
  id: string;
  email: string;
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:user user:email repo'
        }
      }
    }),
  ],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === 'github' && profile) {
          // Cast profile to GitHubProfile to access GitHub-specific properties
          const githubProfile = profile as unknown as GitHubProfile;
          
          // Create GitHubUser object from profile data
          const githubUser: GitHubUser = {
            id: parseInt(githubProfile.id),
            login: githubProfile.login,
            name: githubProfile.name,
            email: githubProfile.email,
            avatar_url: githubProfile.avatar_url
          };

          // Create or update user in database
          const dbUser = await UserService.upsertUserFromGitHub(githubUser);
          
          // Store database user ID in the user object
          user.id = dbUser.id;
          
          console.log('✅ User stored/updated in database:', dbUser.email);
        }
        return true;
      } catch (error) {
        console.error('❌ Failed to store user in database:', error);
        // Still allow sign in even if database fails
        return true;
      }
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (account) {
        token.accessToken = (account as GitHubAccount).access_token;
      }
      return token as CustomToken;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      const customToken = token as CustomToken;
      
      if (customSession.user && customToken) {
        customSession.user.id = customToken.id;
        customSession.user.email = customToken.email;
        customSession.accessToken = customToken.accessToken;
      }
      
      return customSession;
    },
  },
};
