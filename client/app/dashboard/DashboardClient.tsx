"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import RepoListClient from './components/RepoListClient';
import ConnectRepoButton from './components/ConnectRepoButton';
import type { Session } from "next-auth";
import type { IRepository } from "../../models/User";
import AnotherGradient from "@/components/svg/anotherGradient.png";

interface DashboardClientProps {
  session: Session | null;
  repos: IRepository[];
}

export default function DashboardClient({ session, repos }: DashboardClientProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (!session) {
      router.push("/"); // Redirect to home if not logged in
    }
  }, [session, router]);

  if (!session) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-jura">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden mb-52">
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={AnotherGradient}
          alt="Dashboard gradient background"
          className="w-full h-full object-cover opacity-30"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex justify-center items-center text-white text-center font-fustat font-light rounded-full w-fit bg-white/10 border-white/10 px-5 py-2.5 border-1 mx-auto mb-6">
            Welcome back, {session.user?.name}
          </div>
          <h1 className="text-5xl font-bold font-jura text-white text-center tracking-tighter uppercase mb-4">
            Your Development <br /> Dashboard
          </h1>
          <p className="text-xl text-white/70 text-center font-fustat max-w-3xl mx-auto">
            Manage your repositories, visualize architecture, and migrate across frameworks with ease.
          </p>
        </header>

        {/* Quick Actions */}
        <div className="flex justify-center items-center mb-12 gap-4 flex-wrap">
          <ConnectRepoButton />
          <button 
            className="bg-[#211C5540] text-white px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease"
            onClick={() => router.push("/dashboard/explore")}
          >
            EXPLORE REPOS
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#68A2FF]/25 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#68A2FF] to-[#2D18FB] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-jura font-bold text-white mb-2">Repositories</h3>
              <p className="text-4xl font-bold text-[#68A2FF] mb-2">{repos.length}</p>
              <p className="text-white/60 text-sm font-fustat">Imported repos</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#68A2FF]/25 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F0D1FF] to-[#68A2FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-jura font-bold text-white mb-2">Migrations</h3>
              <p className="text-4xl font-bold text-[#F0D1FF] mb-2">0</p>
              <p className="text-white/60 text-sm font-fustat">Completed</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#68A2FF]/25 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2D18FB] to-[#F0D1FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-jura font-bold text-white mb-2">Score</h3>
              <p className="text-4xl font-bold text-[#2D18FB] mb-2">0</p>
              <p className="text-white/60 text-sm font-fustat">Total points</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Repositories Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-jura text-white uppercase tracking-tighter">
                Your Imported Repositories
              </h2>
              <div className="flex gap-3">
                <button className="bg-white/10 text-white px-4 py-2 rounded-full font-inter text-sm hover:bg-white/20 transition-colors">
                  Filter
                </button>
                <button className="bg-white/10 text-white px-4 py-2 rounded-full font-inter text-sm hover:bg-white/20 transition-colors">
                  Sort
                </button>
              </div>
            </div>
            <RepoListClient repos={repos.map(repo => ({
              id: repo.githubId?.toString() ?? "",
              name: repo.name ?? "",
              description: repo.description ?? null,
              htmlUrl: repo.htmlUrl ?? null,
            }))} />
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-3xl font-bold font-jura text-white uppercase tracking-tighter mb-8">
              Recent Activity
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-jura font-semibold text-white mb-2">No Recent Activity</h3>
                <p className="text-white/60 font-fustat">Import your first repository to get started</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
