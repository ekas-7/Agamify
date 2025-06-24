import { getUserRepositories } from "../../actions/getUserRepositories";
import RepoListClient from "./RepoListClient";
import type { IRepository } from "../../../models/User";


function toPlainRepo(repo: IRepository) {
  return {
    id: repo.githubId?.toString() ?? "",
    name: repo.name ?? "",
    description: repo.description ?? null,
    htmlUrl: repo.htmlUrl ?? null,
  };
}

export default async function RepoList() {
  const rawRepos = await getUserRepositories();
  // Convert to plain objects using JSON methods to strip all non-plain fields
  const repos = Array.isArray(rawRepos)
    ? (JSON.parse(JSON.stringify(rawRepos)) as IRepository[]).map(toPlainRepo)
    : [];
  return <RepoListClient repos={repos} />;
}
