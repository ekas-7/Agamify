import React from 'react';
import RepoList from './components/RepoList';
import LogoutButton from './components/LogoutButton';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-jura text-center mb-2">
            Dashboard
          </h1>
          <p className="text-gray-400 text-center font-fustat">
            Welcome to your Agamify dashboard
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-jura font-semibold mb-2">Repositories</h3>
            <p className="text-3xl font-bold text-blue-400">0</p>
            <p className="text-gray-400 text-sm">Connected repos</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-jura font-semibold mb-2">Commits</h3>
            <p className="text-3xl font-bold text-green-400">0</p>
            <p className="text-gray-400 text-sm">This week</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-jura font-semibold mb-2">Score</h3>
            <p className="text-3xl font-bold text-purple-400">0</p>
            <p className="text-gray-400 text-sm">Total points</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-jura font-semibold mb-4">Recent Activity</h3>
            <div className="text-gray-400">
              <p>No recent activity to display.</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-jura font-semibold mb-4">Achievements</h3>
            <div className="text-gray-400">
              <p>Start coding to unlock achievements!</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-jura px-6 py-3 rounded-lg transition-colors">
            Connect Repository
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-jura px-6 py-3 rounded-lg transition-colors">
            View Profile
          </button>
          <LogoutButton />
        </div>

        {/* Repositories List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Your GitHub Repositories
          </h2>
          <RepoList />
        </div>
      </div>
    </div>
  );
}
