import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useGitHubRepositories, type GitHubRepository } from '../hooks/useRepositories'

interface RepositoryImporterProps {
  onImport: (repo: GitHubRepository) => Promise<void>
}

const RepositoryImporter: React.FC<RepositoryImporterProps> = ({ onImport }) => {
  const { data: session } = useSession()
  const { repositories, loading, error, refetch } = useGitHubRepositories()
  const [searchTerm, setSearchTerm] = useState('')
  const [importingRepos, setImportingRepos] = useState<Set<number>>(new Set())
  // Filter repositories based on search term
  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Handle repository import
  const handleImport = async (repo: GitHubRepository) => {
    setImportingRepos(prev => new Set(prev).add(repo.id))
    
    try {
      await onImport(repo)
    } catch (error) {
      console.error('Failed to import repository:', error)
    } finally {
      setImportingRepos(prev => {
        const newSet = new Set(prev)
        newSet.delete(repo.id)
        return newSet
      })
    }
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  // Get language color
  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#239120',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'React': '#61dafb',
      'Vue': '#4FC08D',
      'Angular': '#dd0031',
      'Svelte': '#ff3e00'
    }
    return colors[language || ''] || '#858585'
  }

  if (!session) {
    return (
      <div className="repository-importer">
        <div className="auth-required">
          <h3>🔐 Authentication Required</h3>
          <p>Please sign in to import your GitHub repositories.</p>
        </div>
      </div>
    )
  }

  return (    <div className="repository-importer">
      <div className="header">
        <h2>🚀 Import Git Repository</h2>
        <p>Import any of your GitHub repositories to start migrating between frameworks.</p>
      </div>

      {/* Free Tier Notice */}
      <div className="tier-notice">
        <div className="notice-content">
          <span className="notice-icon">ℹ️</span>
          <span className="notice-text">
            <strong>Free Tier:</strong> Only repository owners can import repositories. 
            Upgrade to premium to allow collaborators to import shared repositories.
          </span>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Fetching your repositories...</p>
        </div>
      )}

      {error && (
        <div className="error">
          <p>❌ {error}</p>          <button onClick={refetch} className="retry-button">
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && repositories.length === 0 && (
        <div className="no-repos">
          <p>No repositories found. Make sure you have repositories in your GitHub account.</p>
        </div>
      )}

      {!loading && !error && filteredRepositories.length > 0 && (
        <div className="repositories-list">
          {filteredRepositories.map((repo) => (
            <div key={repo.id} className="repository-card">
              <div className="repo-info">
                <div className="repo-header">
                  <div className="repo-name">
                    <span className="repo-title">{repo.name}</span>
                    {repo.private && <span className="private-badge">Private</span>}
                  </div>
                  <div className="repo-stats">
                    <span className="stat">⭐ {repo.stargazersCount}</span>
                    <span className="stat">🍴 {repo.forksCount}</span>
                  </div>
                </div>
                
                {repo.description && (
                  <p className="repo-description">{repo.description}</p>
                )}

                <div className="repo-meta">
                  {repo.language && (
                    <span className="language-tag">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="updated-date">
                    Updated {formatDate(repo.updatedAt)}
                  </span>
                </div>
              </div>

              <div className="repo-actions">
                <button
                  onClick={() => handleImport(repo)}
                  disabled={importingRepos.has(repo.id)}
                  className="import-button"
                >
                  {importingRepos.has(repo.id) ? (
                    <>
                      <span className="spinner-small"></span>
                      Importing...
                    </>
                  ) : (
                    'Import'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .repository-importer {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
        }

        .header h2 {
          color: #333;
          margin-bottom: 10px;
        }        .header p {
          color: #666;
          font-size: 14px;
        }

        .tier-notice {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 20px;
        }

        .notice-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .notice-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .notice-text {
          font-size: 14px;
          color: #495057;
          line-height: 1.4;
        }

        .notice-text strong {
          color: #212529;
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e1e5e9;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: #0070f3;
        }

        .loading, .error, .no-repos, .auth-required {
          text-align: center;
          padding: 40px 20px;
          border: 1px solid #e1e5e9;
          border-radius: 8px;
          margin: 20px 0;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }

        .spinner-small {
          width: 16px;
          height: 16px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .retry-button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .repositories-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .repository-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border: 1px solid #e1e5e9;
          border-radius: 8px;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .repository-card:hover {
          border-color: #0070f3;
          box-shadow: 0 4px 12px rgba(0, 112, 243, 0.1);
        }

        .repo-info {
          flex: 1;
        }

        .repo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .repo-name {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .repo-title {
          font-weight: 600;
          color: #333;
          font-size: 16px;
        }

        .private-badge {
          background: #f59e0b;
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .repo-stats {
          display: flex;
          gap: 12px;
        }

        .stat {
          font-size: 12px;
          color: #666;
        }

        .repo-description {
          color: #666;
          font-size: 14px;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .repo-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 12px;
          color: #666;
        }

        .language-tag {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .language-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .repo-actions {
          margin-left: 20px;
        }

        .import-button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          min-width: 100px;
          justify-content: center;
        }

        .import-button:hover:not(:disabled) {
          background: #0051a5;
        }

        .import-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .repository-card {
            flex-direction: column;
            align-items: stretch;
          }

          .repo-actions {
            margin-left: 0;
            margin-top: 16px;
          }

          .import-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default RepositoryImporter
