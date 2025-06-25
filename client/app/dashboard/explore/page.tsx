import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { getUserRepositories } from "../../actions/getUserRepositories";
import ExploreClient from "./ExploreClient";
import type { IRepository } from "../../../models/User";

export default async function ExplorePage() {
  const session = await getServerSession(authOptions);
  let repos: Array<IRepository> = [];
  
  if (session && session.user?.id) {
    const rawRepos = await getUserRepositories();
    repos = Array.isArray(rawRepos)
      ? JSON.parse(JSON.stringify(rawRepos)).map((repo: IRepository) => ({
          id: repo.githubId?.toString() ?? "",
          githubId: repo.githubId ?? "",
          name: repo.name ?? "",
          description: repo.description ?? null,
          htmlUrl: repo.htmlUrl ?? null,
          cloneUrl: repo.cloneUrl ?? "",
          isPrivate: repo.isPrivate ?? false,
        }))
      : [];
  }
  
  return <ExploreClient session={session} repos={repos} />;
}
