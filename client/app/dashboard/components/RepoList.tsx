import { getUserRepositories } from "../../actions/getUserRepositories";
import RepoListClient from "./RepoListClient";
import type { IRepository } from "../../../models/User";


function toPlainRepo(repo: Pick<IRepository, 'githubId' | 'name' | 'description' | 'htmlUrl'>, idx: number) {
  // Use githubId if available, otherwise fallback to index for uniqueness
  return {
    id: repo.githubId ? repo.githubId.toString() : `repo-${idx}`,
    name: repo.name ?? "",
    description: repo.description ?? null,
    htmlUrl: repo.htmlUrl ?? null,
  };
}

export default async function RepoList() {
  const rawRepos = await getUserRepositories();
  // Convert to plain objects using JSON methods to strip all non-plain fields
  const repos = Array.isArray(rawRepos)
    ? (JSON.parse(JSON.stringify(rawRepos)) as Array<Pick<IRepository, 'githubId' | 'name' | 'description' | 'htmlUrl'>>).map(toPlainRepo)
    : [];
  return <RepoListClient repos={repos} />;
}
