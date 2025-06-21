import React from 'react'
import type { Repository } from '../hooks/useRepositories'

interface RepositoryGridProps {
  repositories: Repository[]
  loading: boolean
  onMigrate?: (repository: Repository) => void
}

const RepositoryGrid: React.FC<RepositoryGridProps> = ({ 
  repositories, 
  loading, 
  onMigrate 
}) => {
  if (loading) {
    return (
      <div className="loading-repos">
        <div className="spinner"></div>
        <p>Loading your repositories...</p>
      </div>
    )
  }

  if (repositories.length === 0) {
    return (
      <div className="no-repos">
        <div className="empty-state">
          <h3>🚀 No repositories imported yet</h3>
          <p>Import your first repository using the importer above to get started with framework migration.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="repositories-grid">
      {repositories.map((repo) => (
        <RepositoryCard 
          key={repo.id} 
          repository={repo} 
          onMigrate={onMigrate}
        />
      ))}

      <style jsx>{`
        .loading-repos, .no-repos {
          text-align: center;
          padding: 60px 20px;
        }

        .empty-state {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 40px;
          max-width: 500px;
          margin: 0 auto;
        }

        .empty-state h3 {
          color: #333;
          margin-bottom: 10px;
        }

        .empty-state p {
          color: #666;
        }

        .repositories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
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

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .repositories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

interface RepositoryCardProps {
  repository: Repository
  onMigrate?: (repository: Repository) => void
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository, onMigrate }) => {
  return (
    <div className="repository-card">
      <div className="repo-header">
        <h3>{repository.name}</h3>
        <span className="repo-branches">{repository.branches.length} branches</span>
      </div>
      
      {repository.description && (
        <p className="repo-description">{repository.description}</p>
      )}

      <div className="repo-languages">
        {repository.branches
          .flatMap(branch => branch.languages)
          .slice(0, 3)
          .map((lang, index) => (
            <span key={index} className={`language-tag ${lang.category.toLowerCase()}`}>
              {lang.name}
            </span>
          ))}
      </div>

      <div className="repo-actions">
        {onMigrate && (
          <button 
            className="migrate-button"
            onClick={() => onMigrate(repository)}
          >
            🔄 Start Migration
          </button>
        )}
        <a 
          href={repository.htmlUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub ↗
        </a>
      </div>

      <style jsx>{`
        .repository-card {
          background: white;
          border: 1px solid #e1e5e9;
          border-radius: 12px;
          padding: 24px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .repository-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .repo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .repo-header h3 {
          color: #333;
          margin: 0;
          font-size: 1.2rem;
        }

        .repo-branches {
          background: #f0f0f0;
          color: #666;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }

        .repo-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .repo-languages {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .language-tag {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .language-tag.frontend {
          background: #e3f2fd;
          color: #1976d2;
        }

        .language-tag.backend {
          background: #f3e5f5;
          color: #7b1fa2;
        }

        .language-tag.fullstack {
          background: #e8f5e8;
          color: #388e3c;
        }

        .language-tag.mobile {
          background: #fff3e0;
          color: #f57c00;
        }

        .language-tag.desktop {
          background: #fce4ec;
          color: #c2185b;
        }

        .repo-actions {
          display: flex;
          gap: 12px;
        }

        .migrate-button {
          flex: 1;
          background: #0070f3;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .migrate-button:hover {
          background: #0051a5;
        }

        .github-link {
          background: #24292e;
          color: white;
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 6px;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .github-link:hover {
          background: #1a1e22;
        }

        @media (max-width: 768px) {
          .repo-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default RepositoryGrid
