"use client";

import { useState } from "react";

type Repo = {
  id: string;
  name: string;
  description: string | null;
  htmlUrl: string | null;
};

type PlantUMLParams = {
  git_url: string;
  language: string;
  code_folder: string;
  auth_token?: string;
  max_depth: number;
  include_external: boolean;
};

export default function RepoListClient({ repos }: { repos: Repo[] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [params, setParams] = useState<PlantUMLParams>({
    git_url: "",
    language: "",
    code_folder: "",
    auth_token: "",
    max_depth: 5,
    include_external: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVisualize = (repo: Repo) => {
    setSelectedRepo(repo);
    setParams({
      git_url: repo.htmlUrl || "",
      language: "",
      code_folder: "",
      auth_token: "",
      max_depth: 5,
      include_external: false,
    });
    setError(null);
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setParams((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Call PlantUML API
      const res = await fetch("http://ekas-rag-ms-unique-1750712931.eastus.azurecontainer.io:8000/plantuml_tree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          git_url: params.git_url,
          language: params.language,
          code_folder: params.code_folder,
          auth_token: params.auth_token || undefined,
          max_depth: Number(params.max_depth),
          include_external: params.include_external,
        }),
      });
      if (!res.ok) throw new Error("PlantUML API error");
      const plantumlData = await res.json();
      // Call ChatGPT API (replace with your endpoint)
      const chatRes = await fetch("/api/chtagpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plantuml: plantumlData }),
      });
      if (!chatRes.ok) throw new Error("ChatGPT API error");
      const chatData = await chatRes.json();
      // Console the JSON and close modal
      console.log("PlantUML Data:", plantumlData);
      console.log("ChatGPT Data:", chatData);
      closeModal();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRepo(null);
  };

  if (repos.length === 0) return <div>No repositories found.</div>;
  return (
    <div className="space-y-4">
      {repos.map((repo) => (
        <div key={repo.id} className="p-4 border rounded bg-gray-800 text-white">
          <h2 className="text-xl font-bold">{repo.name}</h2>
          <p>{repo.description ?? "No description"}</p>
          <a href={repo.htmlUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View on GitHub</a>
          <button
            className="ml-4 px-3 py-1 bg-green-600 rounded hover:bg-green-700"
            onClick={() => handleVisualize(repo)}
          >
            Visualize
          </button>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-2">Visualize Repo: {selectedRepo?.name}</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input name="git_url" value={params.git_url} onChange={handleChange} placeholder="Git URL" className="w-full p-1 border rounded" required />
              <input name="language" value={params.language} onChange={handleChange} placeholder="Language (e.g. javascript)" className="w-full p-1 border rounded" required />
              <input name="code_folder" value={params.code_folder} onChange={handleChange} placeholder="Code Folder (e.g. src)" className="w-full p-1 border rounded" required />
              <input name="auth_token" value={params.auth_token} onChange={handleChange} placeholder="Auth Token (optional)" className="w-full p-1 border rounded" />
              <input name="max_depth" type="number" value={params.max_depth} onChange={handleChange} placeholder="Max Depth" className="w-full p-1 border rounded" min={1} max={10} />
              <label className="flex items-center">
                <input name="include_external" type="checkbox" checked={params.include_external} onChange={handleChange} className="mr-2" />
                Include External
              </label>
              <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded" disabled={loading}>
                  {loading ? "Processing..." : "Submit"}
                </button>
                <button type="button" className="bg-gray-400 px-3 py-1 rounded" onClick={closeModal} disabled={loading}>
                  Cancel
                </button>
              </div>
            </form>
            {error && <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">{error}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
