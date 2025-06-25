"use client";

import { useRouter } from "next/navigation";

type Repo = {
  id: string;
  name: string;
  description: string | null;
  htmlUrl: string | null;
};

export default function RepoListClient({ repos }: { repos: Repo[] }) {
  const router = useRouter();

  const handleViewRepo = (repo: Repo) => {
    // Navigate to individual repo page
    router.push(`/dashboard/repo/${repo.id}`);
  };

  if (repos.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-jura font-bold text-white mb-4">No Repositories Imported</h3>
        <p className="text-white/60 font-fustat mb-6">
          Get started by importing your GitHub repositories. Your free tier includes up to 3 repositories.
        </p>
        <div className="bg-white/5 rounded-lg p-4 mb-8">
          <p className="text-white/40 font-fustat text-sm">
            💡 <strong>Pro tip:</strong> Click "IMPORT REPO" above to browse and select your GitHub repositories for analysis and migration.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 text-white/30 text-sm font-fustat">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#68A2FF] rounded-full"></div>
            <span>Free Tier: 3 repos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F0D1FF] rounded-full"></div>
            <span>Architecture Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2D18FB] rounded-full"></div>
            <span>Framework Migration</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#68A2FF]/25 transition-all duration-300 hover:bg-white/15"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-jura font-bold text-white group-hover:text-[#68A2FF] transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-fustat">
                    <span>Repository</span>
                    <span>•</span>
                    <span>Public</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80 font-fustat text-base leading-relaxed mb-4">
                {repo.description || "No description available"}
              </p>
              
              {/* Tech Stack Placeholder */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-white/60 font-fustat">TECH STACK:</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 font-inter">JavaScript</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 font-inter">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 font-inter">Node.js</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 ml-6">
              <button
                onClick={() => handleViewRepo(repo)}
                className="bg-white text-black px-6 py-2.5 rounded-full font-inter text-sm cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                ANALYZE
              </button>
              
              <a
                href={repo.htmlUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#211C5540] text-white px-6 py-2.5 rounded-full font-inter text-sm cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease text-center flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                </svg>
                GITHUB
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
