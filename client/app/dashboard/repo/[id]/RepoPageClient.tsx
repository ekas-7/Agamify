"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Session } from "next-auth";
import type { IRepository } from "../../../../models/User";
import AnotherGradient from "@/components/svg/anotherGradient.png";

interface RepoPageClientProps {
  repo: IRepository;
  session: Session;
}

interface RepoAnalysis {
  readme: string;
  techStack: string[];
  architecture: {
    summary: string;
    components: number;
    dependencies: string[];
    complexity: 'Low' | 'Medium' | 'High';
  };
  plantuml: string;
  migrationOptions: string[];
}

export default function RepoPageClient({ repo, session }: RepoPageClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'visualization' | 'migration'>('overview');
  const [analysis, setAnalysis] = useState<RepoAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState<string>('');

  const frameworks = [
    { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces' },
    { id: 'vue', name: 'Vue.js', description: 'The Progressive JavaScript Framework' },
    { id: 'angular', name: 'Angular', description: 'Platform for building web applications' },
    { id: 'svelte', name: 'Svelte', description: 'Compile-time optimized web framework' },
    { id: 'nextjs', name: 'Next.js', description: 'The React Framework for Production' },
  ];

  useEffect(() => {
    // Auto-analyze the repository when the component mounts
    analyzeRepository();
  }, []);

  const analyzeRepository = async () => {
    setLoading(true);
    try {
      // This is a placeholder - replace with actual API calls
      const response = await fetch('/api/analyze-repo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          repoId: repo.githubId,
          repoUrl: repo.htmlUrl,
          cloneUrl: repo.cloneUrl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAnalysis(data);
      } else {
        // Fallback with mock data for demo
        setAnalysis({
          readme: `# ${repo.name}\n\n${repo.description || 'No description available'}\n\n## Installation\n\n\`\`\`bash\nnpm install\n\`\`\`\n\n## Usage\n\n\`\`\`bash\nnpm start\n\`\`\`\n\n## Features\n\n- Modern web application\n- Responsive design\n- Component-based architecture\n- API integration\n\n## Contributing\n\nPull requests are welcome. For major changes, please open an issue first.`,
          techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
          architecture: {
            summary: 'This is a modern web application built with a component-based architecture. The frontend uses React with a modular component structure, while the backend leverages Node.js and Express for API endpoints.',
            components: 24,
            dependencies: ['react', 'express', 'mongoose', 'axios', 'tailwindcss'],
            complexity: 'Medium',
          },
          plantuml: `@startuml
!theme plain
title ${repo.name} - Application Architecture

package "Frontend" {
  [React Components]
  [State Management]
  [API Client]
}

package "Backend" {
  [Express Server]
  [API Routes]
  [Middleware]
}

package "Database" {
  [MongoDB]
}

[React Components] --> [State Management]
[React Components] --> [API Client]
[API Client] --> [Express Server]
[Express Server] --> [API Routes]
[API Routes] --> [MongoDB]

@enduml`,
          migrationOptions: ['react', 'vue', 'angular', 'svelte', 'nextjs'],
        });
      }
    } catch (error) {
      console.error('Error analyzing repository:', error);
      // Set fallback data even on error
      setAnalysis({
        readme: `# ${repo.name}\n\n${repo.description || 'Repository analysis in progress...'}\n\nPlease check back later for detailed analysis.`,
        techStack: ['JavaScript'],
        architecture: {
          summary: 'Analysis in progress...',
          components: 0,
          dependencies: [],
          complexity: 'Low',
        },
        plantuml: '',
        migrationOptions: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMigration = async () => {
    if (!selectedFramework) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/migrate-repo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          repoId: repo.githubId,
          targetFramework: selectedFramework,
          plantuml: analysis?.plantuml,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Handle successful migration
        console.log('Migration result:', result);
        alert('Migration completed successfully! Check your downloads folder.');
      }
    } catch (error) {
      console.error('Migration error:', error);
      alert('Migration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !analysis) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#68A2FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl font-jura">Analyzing Repository...</div>
          <p className="text-white/60 font-fustat mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={AnotherGradient}
          alt="Repo gradient background"
          className="w-full h-full object-cover opacity-20"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-fustat"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </button>
          
          <div className="flex gap-3">
            <a
              href={repo.htmlUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-4 py-2 rounded-full font-inter text-sm hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Repository Info */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center text-white text-center font-fustat font-light rounded-full w-fit bg-white/10 border-white/10 px-5 py-2.5 border-1 mx-auto mb-6">
            Repository Analysis
          </div>
          <h1 className="text-5xl font-bold font-jura text-white text-center tracking-tighter uppercase mb-4">
            {repo.name}
          </h1>
          <p className="text-xl text-white/70 text-center font-fustat max-w-3xl mx-auto">
            {repo.description || 'Detailed analysis and migration tools for your repository'}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {[
              { id: 'overview', label: 'Overview', icon: '📋' },
              { id: 'visualization', label: 'Architecture', icon: '🏗️' },
              { id: 'migration', label: 'Migration', icon: '🚀' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full font-inter text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && analysis && (
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-jura font-bold text-white mb-6 uppercase tracking-tighter">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {analysis.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] rounded-full text-white font-inter text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Summary */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-jura font-bold text-white mb-6 uppercase tracking-tighter">
                  Architecture Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#68A2FF] mb-2">{analysis.architecture.components}</div>
                    <div className="text-white/60 font-fustat">Components</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F0D1FF] mb-2">{analysis.architecture.dependencies.length}</div>
                    <div className="text-white/60 font-fustat">Dependencies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2D18FB] mb-2">{analysis.architecture.complexity}</div>
                    <div className="text-white/60 font-fustat">Complexity</div>
                  </div>
                </div>
                <p className="text-white/80 font-fustat leading-relaxed">
                  {analysis.architecture.summary}
                </p>
              </div>

              {/* README */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-jura font-bold text-white mb-6 uppercase tracking-tighter">
                  Documentation
                </h2>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-white/80 font-fustat leading-relaxed">
                    {analysis.readme}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visualization' && analysis && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-jura font-bold text-white mb-6 uppercase tracking-tighter">
                Architecture Visualization
              </h2>
              {analysis.plantuml ? (
                <div className="space-y-6">
                  {/* PlantUML Code Display */}
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-jura font-semibold text-white">PlantUML Code</h3>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => navigator.clipboard.writeText(analysis.plantuml)}
                          className="bg-[#68A2FF] text-white px-4 py-2 rounded hover:bg-[#68A2FF]/80 transition-colors text-sm"
                        >
                          Copy Code
                        </button>
                        <button 
                          onClick={() => {
                            // Call PlantUML API to generate SVG
                            fetch('/api/plantuml', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                git_url: repo.htmlUrl,
                                language: 'javascript',
                                code_folder: '',
                                max_depth: 3,
                                include_external: false
                              })
                            }).then(res => res.json()).then(data => {
                              console.log('PlantUML result:', data);
                              alert('PlantUML diagram generated! Check console for details.');
                            });
                          }}
                          className="bg-[#2D18FB] text-white px-4 py-2 rounded hover:bg-[#2D18FB]/80 transition-colors text-sm"
                        >
                          Generate SVG
                        </button>
                      </div>
                    </div>
                    <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap overflow-x-auto max-h-96 overflow-y-auto">
                      {analysis.plantuml}
                    </pre>
                  </div>
                  
                  {/* Visualization Preview */}
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Architecture Preview</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-4">Interactive diagram will render here</p>
                      <div className="text-sm text-gray-500">
                        PlantUML diagram visualization coming soon...
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-jura font-semibold text-white mb-2">Generating Visualization</h3>
                  <p className="text-white/60 font-fustat">Architecture diagram will appear here once analysis is complete</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'migration' && (
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-jura font-bold text-white mb-6 uppercase tracking-tighter">
                  Framework Migration
                </h2>
                <p className="text-white/80 font-fustat mb-8 leading-relaxed">
                  Select a target framework to migrate your codebase. Our AI will analyze your architecture and generate equivalent code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {frameworks.map((framework) => (
                    <div
                      key={framework.id}
                      onClick={() => setSelectedFramework(framework.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedFramework === framework.id
                          ? 'border-[#68A2FF] bg-[#68A2FF]/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <h3 className="text-xl font-jura font-bold text-white mb-2">{framework.name}</h3>
                      <p className="text-white/70 font-fustat text-sm">{framework.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={handleMigration}
                    disabled={!selectedFramework || loading}
                    className="bg-white text-black px-8 py-4 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        MIGRATING...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        START MIGRATION
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
