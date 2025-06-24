import { getUserRepositories } from "../../actions/getUserRepositories";

type Repo = {
  id: string;
  name: string;
  description: string | null;
  htmlUrl: string | null;
  // add other fields if needed
};

export default async function RepoList() {
  const repos = await getUserRepositories();
  if (!repos || repos.length === 0) return <div>No repositories found.</div>;
  return (
    <div className="space-y-4">
      {repos.map((repo: Repo) => (
        <div key={repo.id} className="p-4 border rounded bg-gray-800 text-white">
          <h2 className="text-xl font-bold">{repo.name}</h2>
          <p>{repo.description ?? "No description"}</p>
          <a href={repo.htmlUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View on GitHub</a>
        </div>
      ))}
    </div>
  );
}
