"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface BetaTester {
    id: string;
    name: string;
    email: string;
    githubUsername: string;
    betaSignupDate: string;
    betaNotifications: boolean;
}

interface PreSignupEmail {
    id: string;
    email: string;
    submittedAt: string;
    converted: boolean;
    convertedAt?: string;
}

interface BetaStats {
    totalBetaTesters: number;
    recentBetaSignups: number;
    totalPreSignups: number;
    pendingPreSignups: number;
}

const BetaTestersAdmin = () => {
    const [betaTesters, setBetaTesters] = useState<BetaTester[]>([]);
    const [preSignupEmails, setPreSignupEmails] = useState<PreSignupEmail[]>([]);
    const [stats, setStats] = useState<BetaStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'testers' | 'emails'>('testers');
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            fetchBetaTesters();
        }
    }, [status]);

    const fetchBetaTesters = async () => {
        try {
            const response = await fetch('/api/beta-testers');
            const data = await response.json();

            if (response.ok) {
                setBetaTesters(data.betaTesters);
                setPreSignupEmails(data.preSignupEmails);
                setStats(data.statistics);
            } else {
                setError(data.error || 'Failed to fetch beta testers');
            }
        } catch {
            setError('Network error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (status !== "authenticated") {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p className="font-fustat">Please sign in to view beta testers.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F0D1FF]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p className="font-fustat text-red-400">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-jura font-bold mb-8 uppercase tracking-tighter">
                    Beta Testers Dashboard
                </h1>

                {stats && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white/10 rounded-[20px] p-6 border border-white/10">
                            <h3 className="text-xl font-jura font-bold mb-2">Total Beta Testers</h3>
                            <p className="text-3xl font-bold text-[#F0D1FF]">{stats.totalBetaTesters}</p>
                        </div>
                        <div className="bg-white/10 rounded-[20px] p-6 border border-white/10">
                            <h3 className="text-xl font-jura font-bold mb-2">Recent Signups (7 days)</h3>
                            <p className="text-3xl font-bold text-[#68A2FF]">{stats.recentBetaSignups}</p>
                        </div>
                        <div className="bg-white/10 rounded-[20px] p-6 border border-white/10">
                            <h3 className="text-xl font-jura font-bold mb-2">Pre-signup Emails</h3>
                            <p className="text-3xl font-bold text-[#2D18FB]">{stats.totalPreSignups}</p>
                        </div>
                        <div className="bg-white/10 rounded-[20px] p-6 border border-white/10">
                            <h3 className="text-xl font-jura font-bold mb-2">Pending Conversions</h3>
                            <p className="text-3xl font-bold text-orange-400">{stats.pendingPreSignups}</p>
                        </div>
                    </div>
                )}

                <div className="bg-white/10 rounded-[20px] p-6 border border-white/10">
                    {/* Tab Navigation */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => setActiveTab('testers')}
                            className={`px-4 py-2 rounded-lg font-jura transition-colors ${
                                activeTab === 'testers'
                                    ? 'bg-[#F0D1FF]/20 text-[#F0D1FF] border border-[#F0D1FF]/30'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Beta Testers ({betaTesters.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('emails')}
                            className={`px-4 py-2 rounded-lg font-jura transition-colors ${
                                activeTab === 'emails'
                                    ? 'bg-[#68A2FF]/20 text-[#68A2FF] border border-[#68A2FF]/30'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Pre-signup Emails ({preSignupEmails.length})
                        </button>
                    </div>

                    {activeTab === 'testers' ? (
                        <>
                            <h2 className="text-2xl font-jura font-bold mb-6">Beta Testers List</h2>
                            
                            {betaTesters.length === 0 ? (
                                <p className="text-white/70 font-fustat">No beta testers found.</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 px-4 font-jura">Name</th>
                                                <th className="text-left py-3 px-4 font-jura">Email</th>
                                                <th className="text-left py-3 px-4 font-jura">GitHub</th>
                                                <th className="text-left py-3 px-4 font-jura">Signup Date</th>
                                                <th className="text-left py-3 px-4 font-jura">Notifications</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {betaTesters.map((tester) => (
                                                <tr key={tester.id} className="border-b border-white/10 hover:bg-white/5">
                                                    <td className="py-3 px-4 font-fustat">{tester.name}</td>
                                                    <td className="py-3 px-4 font-fustat">{tester.email}</td>
                                                    <td className="py-3 px-4 font-fustat">{tester.githubUsername}</td>
                                                    <td className="py-3 px-4 font-fustat">
                                                        {new Date(tester.betaSignupDate).toLocaleDateString()}
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                                            tester.betaNotifications 
                                                                ? 'bg-green-500/20 text-green-400' 
                                                                : 'bg-red-500/20 text-red-400'
                                                        }`}>
                                                            {tester.betaNotifications ? 'Enabled' : 'Disabled'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-jura font-bold mb-6">Pre-signup Emails</h2>
                            
                            {preSignupEmails.length === 0 ? (
                                <p className="text-white/70 font-fustat">No pre-signup emails found.</p>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 px-4 font-jura">Email</th>
                                                <th className="text-left py-3 px-4 font-jura">Submitted</th>
                                                <th className="text-left py-3 px-4 font-jura">Status</th>
                                                <th className="text-left py-3 px-4 font-jura">Converted</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {preSignupEmails.map((emailEntry) => (
                                                <tr key={emailEntry.id} className="border-b border-white/10 hover:bg-white/5">
                                                    <td className="py-3 px-4 font-fustat">{emailEntry.email}</td>
                                                    <td className="py-3 px-4 font-fustat">
                                                        {new Date(emailEntry.submittedAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                                            emailEntry.converted 
                                                                ? 'bg-green-500/20 text-green-400' 
                                                                : 'bg-orange-500/20 text-orange-400'
                                                        }`}>
                                                            {emailEntry.converted ? 'Converted' : 'Pending'}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 px-4 font-fustat">
                                                        {emailEntry.convertedAt 
                                                            ? new Date(emailEntry.convertedAt).toLocaleDateString()
                                                            : '-'
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BetaTestersAdmin;
