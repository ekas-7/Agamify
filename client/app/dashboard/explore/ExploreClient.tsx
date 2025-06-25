"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Session } from "next-auth";
import type { IRepository } from "../../../models/User";

interface ExploreClientProps {
  session: Session | null;
  repos: IRepository[];
}

type FilterType = 'all' | 'public' | 'private' | 'javascript' | 'typescript' | 'react' | 'vue';
type SortType = 'name' | 'updated' | 'created' | 'stars';

export default function ExploreClient({ session, repos }: ExploreClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('name');

  if (!session) {
    router.push("/");
    return null;
  }

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    switch (filter) {
      case 'all':
        return matchesSearch;
      case 'public':
        return matchesSearch && !repo.isPrivate;
      case 'private':
        return matchesSearch && repo.isPrivate;
      default:
        return matchesSearch;
    }
  });

  const sortedRepos = [...filteredRepos].sort((a, b) => {
    switch (sort) {
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleViewRepo = (repo: IRepository) => {
    router.push(`/dashboard/repo/${repo.githubId}`);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center text-white text-center font-fustat font-light rounded-full w-fit bg-white/10 border-white/10 px-5 py-2.5 border-1 mx-auto mb-6">
            Explore & Manage
          </div>
          <h1 className="text-5xl font-bold font-jura text-white text-center tracking-tighter uppercase mb-4">
            Your Repositories
          </h1>
          <p className="text-xl text-white/70 text-center font-fustat max-w-3xl mx-auto">
            Browse, filter, and manage all your connected repositories in one place.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Search repositories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-[#68A2FF] transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as FilterType)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:border-[#68A2FF] transition-colors"
              >
                <option value="all">All Repos</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white focus:outline-none focus:border-[#68A2FF] transition-colors"
              >
                <option value="name">Sort by Name</option>
                <option value="updated">Recently Updated</option>
                <option value="created">Recently Created</option>
                <option value="stars">Most Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Repository Grid */}
        {sortedRepos.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-jura font-bold text-white mb-4">No Repositories Found</h3>
            <p className="text-white/60 font-fustat">
              {searchTerm ? 'Try adjusting your search terms or filters.' : 'Import your GitHub repositories to get started.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRepos.map((repo) => (
              <div
                key={repo.githubId}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#68A2FF]/25 transition-all duration-300 hover:bg-white/15 cursor-pointer"
                onClick={() => handleViewRepo(repo)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-inter ${
                      repo.isPrivate ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                    }`}>
                      {repo.isPrivate ? 'Private' : 'Public'}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-jura font-bold text-white group-hover:text-[#68A2FF] transition-colors mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-white/70 font-fustat text-sm leading-relaxed line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  </div>
                  <span className="text-xs text-white/50 font-fustat">JavaScript • React • Node.js</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewRepo(repo);
                    }}
                    className="flex-1 bg-white/10 text-white px-3 py-2 rounded-full font-inter text-sm hover:bg-white/20 transition-colors text-center"
                  >
                    Analyze
                  </button>
                  <a
                    href={repo.htmlUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination or Load More could go here */}
        {sortedRepos.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-white/60 font-fustat">
              Showing {sortedRepos.length} of {repos.length} repositories
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
