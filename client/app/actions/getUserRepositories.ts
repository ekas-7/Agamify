import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../../lib/prisma";

export async function getUserRepositories() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) return [];

  const repos = await prisma.repository.findMany({
    where: { ownerId: session.user.id },
    orderBy: { createdAt: "desc" },
  });
  return repos;
}
