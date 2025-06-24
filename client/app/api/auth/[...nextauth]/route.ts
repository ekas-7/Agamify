import { prisma } from "../../../../lib/prisma";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Session, User } from "next-auth";

// Extend the Session user type to include id and githubUsername
// Use a type alias instead of interface

type ExtendedSessionUser = Session["user"] & {
  id?: string;
  githubUsername?: string;
};

export const authOptions = {
  adapter: PrismaAdapter(prisma),
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
    async session({ session, user }: { session: Session; user: User }) {
      if (session.user) {
        (session.user as ExtendedSessionUser).id = user.id;
        (session.user as ExtendedSessionUser).githubUsername = (user as User & { githubUsername?: string }).githubUsername;
      }
      return session;
    },
  },
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
