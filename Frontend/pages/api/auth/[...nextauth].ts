import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { UserService } from "../../../lib/database";
import type { GitHubUser } from "../../../types/database";

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
    strategy: 'jwt',
  },
  callbacks: {    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === 'github' && profile) {
          // Cast profile to any to access GitHub-specific properties
          const githubProfile = profile as any;
          
          // Create GitHubUser object from profile data
          const githubUser: GitHubUser = {
            id: githubProfile.id,
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
    },    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        (session.user as any).id = token.id;
        session.user.email = token.email as string;
        (session as any).accessToken = token.accessToken;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);