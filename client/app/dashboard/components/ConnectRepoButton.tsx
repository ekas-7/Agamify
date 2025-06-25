"use client";

import { useState, useEffect } from "react";
import { syncGithubRepos } from "../../actions/syncGithubRepos";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  private: boolean;
  language: string | null;
  updated_at: string;
}

export default function ConnectRepoButton() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [availableRepos, setAvailableRepos] = useState<GitHubRepo[]>([]);
  const [importedRepos, setImportedRepos] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [selectedRepos, setSelectedRepos] = useState<Set<number>>(new Set());

  const fetchUserImportedRepos = async () => {
    try {
      const response = await fetch('/api/user-repos');
      if (response.ok) {
        const userRepos = await response.json();
        const importedRepoIds = new Set(
          Array.isArray(userRepos) ? userRepos.map((repo: { githubId: number }) => repo.githubId) : []
        );
        setImportedRepos(importedRepoIds);
      }
    } catch {
      console.error('Failed to fetch imported repositories');
    }
  };

  const fetchGitHubRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/github-repos');
      if (response.ok) {
        const repos = await response.json();
        setAvailableRepos(repos);
      } else {
        console.error('Failed to fetch GitHub repositories');
        setAvailableRepos([]);
      }
    } catch (error) {
      console.error('Failed to fetch GitHub repositories:', error);
      setAvailableRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleImportSelected = async () => {
    if (selectedRepos.size === 0) return;
    
    setImporting(true);
    try {
      const repoIds = Array.from(selectedRepos);
      
      const response = await fetch('/api/import-repos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoIds })
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || 'Failed to import repositories');
        return;
      }
      
      // Close modal with smooth transition
      setShowImportModal(false);
      setSelectedRepos(new Set());
      
      // Refresh imported repos
      await fetchUserImportedRepos();
      
      // Refresh the page to show new repos
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch {
      alert('An error occurred while importing repositories.');
    } finally {
      setImporting(false);
    }
  };

  const toggleRepoSelection = (repoId: number) => {
    const newSelection = new Set(selectedRepos);
    if (newSelection.has(repoId)) {
      newSelection.delete(repoId);
    } else {
      // Free tier limit: check total repos after import
      const totalAfterSelection = importedRepos.size + newSelection.size + 1;
      if (totalAfterSelection > 3) {
        const remaining = 3 - importedRepos.size;
        alert(`Free tier allows up to 3 repositories total. You currently have ${importedRepos.size} imported. You can only select ${remaining} more repositories.`);
        return;
      }
      newSelection.add(repoId);
    }
    setSelectedRepos(newSelection);
  };

  const handleSyncAll = async () => {
    setImporting(true);
    try {
      await syncGithubRepos();
      await fetchUserImportedRepos();
    } finally {
      setImporting(false);
    }
  };

  const handleOpenModal = () => {
    setShowImportModal(true);
    fetchUserImportedRepos();
  };

  const handleCloseModal = () => {
    setShowImportModal(false);
    setSelectedRepos(new Set());
  };

  useEffect(() => {
    if (showImportModal && availableRepos.length === 0) {
      fetchGitHubRepos();
    }
  }, [showImportModal, availableRepos.length]);

  useEffect(() => {
    fetchUserImportedRepos();
  }, []);

  // Filter out already imported repos
  const availableForImport = availableRepos.filter(repo => !importedRepos.has(repo.id));

  if (showImportModal) {
    return (
      <>
        {/* Modal Backdrop with smooth transitions */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300 ${
            showImportModal ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div 
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col transform transition-all duration-300 ${
              showImportModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-jura font-bold text-white">Import from GitHub</h2>
                <p className="text-white/60 text-sm font-fustat mt-1">
                  Free tier: {importedRepos.size + selectedRepos.size}/3 repositories ({3 - importedRepos.size} slots remaining)
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-2 border-[#68A2FF] border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-white/80 font-fustat">Loading repositories...</span>
                </div>
              ) : availableForImport.length > 0 ? (
                <div className="space-y-3 overflow-y-auto max-h-96">
                  {availableForImport.map((repo) => (
                    <div
                      key={repo.id}
                      className={`p-4 rounded-lg border cursor-pointer select-none transition-all duration-200 ${
                        selectedRepos.has(repo.id)
                          ? 'bg-[#68A2FF]/20 border-[#68A2FF]/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div 
                              onClick={() => toggleRepoSelection(repo.id)}
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                                selectedRepos.has(repo.id)
                                  ? 'bg-[#68A2FF] border-[#68A2FF]'
                                  : 'border-white/30 hover:border-white/50'
                              }`}
                            >
                              {selectedRepos.has(repo.id) && (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                            <h3 className="font-jura font-bold text-white">{repo.name}</h3>
                            {repo.private && (
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Private</span>
                            )}
                            {repo.language && (
                              <span className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full">{repo.language}</span>
                            )}
                          </div>
                          <p className="text-white/70 text-sm font-fustat">
                            {repo.description || 'No description available'}
                          </p>
                          <p className="text-white/50 text-xs font-fustat mt-1">
                            Updated {new Date(repo.updated_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-jura font-semibold text-white mb-2">All repositories imported!</h3>
                  <p className="text-white/60 font-fustat">You&apos;ve imported all available repositories from your GitHub account.</p>
                </div>
              )}
            </div>
            
            {availableForImport.length > 0 && (
              <div className="flex gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-white/10 text-white px-4 py-3 rounded-lg font-inter hover:bg-white/20 transition-colors"
                  disabled={importing}
                >
                  Cancel
                </button>
                <button
                  onClick={handleImportSelected}
                  disabled={selectedRepos.size === 0 || importing}
                  className="flex-1 bg-[#68A2FF] text-white px-4 py-3 rounded-lg font-inter hover:bg-[#68A2FF]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {importing ? 'Importing...' : `Import ${selectedRepos.size} ${selectedRepos.size === 1 ? 'Repository' : 'Repositories'}`}
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex gap-3">
      <button 
        onClick={handleOpenModal}
        className="bg-white text-black px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        IMPORT REPO
      </button>
      
      <form action={handleSyncAll}>
        <button 
          type="submit"
          disabled={importing}
          className="bg-[#211C5540] text-white px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease flex items-center gap-2 disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          SYNC ALL
        </button>
      </form>
    </div>
  );
}
