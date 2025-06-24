import { syncGithubRepos } from "../../actions/syncGithubRepos";

export default function ConnectRepoButton() {
  return (
    <form action={syncGithubRepos}>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-jura px-6 py-3 rounded-lg transition-colors">
        Connect Repository
      </button>
    </form>
  );
}
