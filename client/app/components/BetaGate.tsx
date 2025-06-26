"use client";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useBetaStatus } from "@/hooks/useBetaStatus";

interface BetaGateProps {
    children: React.ReactNode;
    feature?: string;
    showAsCard?: boolean;
}

const BetaGate = ({ children, feature = "feature", showAsCard = false }: BetaGateProps) => {
    const { status } = useSession();
    const { isBetaTester, loading } = useBetaStatus();
    const [showBetaPopup, setShowBetaPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // If loading, show a loading state
    if (loading || status === "loading") {
        return showAsCard ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-[40px] p-8 border border-white/10 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F0D1FF] mx-auto"></div>
                <p className="text-white/70 font-fustat mt-4">Checking access...</p>
            </div>
        ) : (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F0D1FF]"></div>
            </div>
        );
    }

    // If user is a beta tester, show the feature
    if (isBetaTester) {
        return <>{children}</>;
    }

    // Beta signup logic
    const handleBetaSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // If not authenticated, sign in with GitHub first
        if (status !== "authenticated") {
            try {
                await fetch('/api/pre-signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                });
                
                await signIn("github", { 
                    callbackUrl: `${window.location.origin}${window.location.pathname}?joinBeta=true&email=${encodeURIComponent(email)}` 
                });
                return;
            } catch (error) {
                console.error("Pre-signup storage failed:", error);
            }
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/beta-signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    window.location.reload(); // Refresh to update beta status
                }, 2000);
            } else {
                throw new Error(data.error || 'Failed to join beta');
            }
        } catch (error) {
            alert(`Failed to join beta: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Beta access required UI
    const BetaRequiredContent = () => (
        <div className="bg-white/10 backdrop-blur-sm rounded-[40px] p-8 border border-white/10 text-center">
            <div className="w-20 h-20 bg-gradient-to-b from-[#F0D1FF]/20 via-[#68A2FF]/20 to-[#2D18FB]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#F0D1FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4-4 6-6a6 6 0 016 4zm-1.8 1.2a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4zM10 4a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                </svg>
            </div>
            
            <h3 className="text-2xl font-jura font-bold text-white mb-3 uppercase tracking-tighter">
                🚧 Under Beta Development
            </h3>
            
            <p className="text-white/80 font-fustat font-light mb-6 leading-relaxed">
                This {feature} is currently available for beta testers only. Join our beta program to get early access to new features.
            </p>

            {status === "authenticated" ? (
                <button
                    onClick={() => setShowBetaPopup(true)}
                    className="bg-gradient-to-r from-[#2D18FB] to-[#68A2FF] text-white px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:from-[#4A3FE7] hover:to-[#7BB3FF] transition-all duration-300"
                >
                    JOIN BETA PROGRAM
                </button>
            ) : (
                <div className="space-y-4">
                    <p className="text-white/60 font-fustat text-sm">
                        Sign in to join the beta program
                    </p>
                    <button
                        onClick={() => signIn("github")}
                        className="bg-white text-black px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease"
                    >
                        SIGN IN WITH GITHUB
                    </button>
                </div>
            )}

            {/* Beta Signup Popup */}
            {showBetaPopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div 
                        className="bg-white/10 backdrop-blur-sm rounded-[40px] p-8 max-w-md w-full mx-4 border border-white/10 relative"
                        style={{
                            boxShadow: "0px 16px 48px rgba(240, 209, 255, 0.16), 0px 4px 12px rgba(240, 209, 255, 0.16)"
                        }}
                    >
                        <div className="absolute inset-0 opacity-100 rounded-[40px] bg-gradient-to-b from-[#F0D1FF]/10 via-[#68A2FF]/10 to-[#2D18FB]/10 pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#F0D1FF]/20 via-[#68A2FF]/20 to-[#2D18FB]/20 rounded-full opacity-80"></div>
                                <svg className="w-10 h-10 text-[#F0D1FF] relative z-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            <h2 className="text-2xl font-jura font-bold text-white mb-3 uppercase tracking-tighter">
                                {submitted ? "Welcome to Beta!" : "Join AGAMIFY Beta!"}
                            </h2>
                            
                            {!submitted ? (
                                <>
                                    <p className="text-white/80 font-fustat font-light mb-6 leading-relaxed text-base">
                                        Join our beta testing program to get early access to this feature and help shape AGAMIFY&apos;s future.
                                    </p>
                                    
                                    <form onSubmit={handleBetaSignup} className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#F0D1FF]/50 focus:ring-2 focus:ring-[#F0D1FF]/20 font-fustat transition-all duration-300"
                                            required
                                            disabled={isSubmitting}
                                        />
                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setShowBetaPopup(false)}
                                                className="flex-1 bg-[#211C5540] text-white px-4 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-white/20 transition-colors ease"
                                                disabled={isSubmitting}
                                            >
                                                Maybe Later
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting || !email}
                                                className="flex-1 bg-white text-black px-4 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? 'Processing...' : 'JOIN BETA'}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🎉</div>
                                    <p className="text-white/90 font-fustat mb-4">
                                        Thanks for joining our beta testing program! Refreshing page...
                                    </p>
                                </div>
                            )}
                            
                            <button
                                onClick={() => setShowBetaPopup(false)}
                                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return showAsCard ? <BetaRequiredContent /> : <BetaRequiredContent />;
};

export default BetaGate;
