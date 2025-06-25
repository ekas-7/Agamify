import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { getUserRepositories } from "../../../actions/getUserRepositories";
import RepoPageClient from "./RepoPageClient";
import type { IRepository } from "../../../../models/User";
import { notFound } from "next/navigation";

export default async function RepoPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return notFound();
  }

  const { id } = await params;
  const repos = await getUserRepositories();
  const repo = Array.isArray(repos) 
    ? repos.find((r: IRepository) => r.githubId?.toString() === id)
    : null;

  if (!repo) {
    return notFound();
  }

  return <RepoPageClient repo={repo} />;
}
