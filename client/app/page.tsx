"use client";
import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import WhatYouCanDo from "./components/WhatYouCanDo";
import Pricing from "./components/Pricing";
import BetaMarquee from "./components/BetaMarquee";

export default function LandingPage() {
    const [showBetaPopup, setShowBetaPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { data: session, status } = useSession();

    // Check if user is first-time visitor and show beta popup
    useEffect(() => {
        const hasVisited = localStorage.getItem('agamify-visited');
        if (!hasVisited) {
            // Show popup after 3 seconds for better UX
            const timer = setTimeout(() => {
                setShowBetaPopup(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    // Set email from session when available
    useEffect(() => {
        if (session?.user?.email && !email) {
            setEmail(session.user.email);
        }
    }, [session, email]);

    const handleBetaSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Store email before GitHub authentication for tracking
        if (status !== "authenticated") {
            try {
                // Store the email first
                await fetch('/api/pre-signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                });
                
                // Then redirect to GitHub sign-in
                await signIn("github", { 
                    callbackUrl: `${window.location.origin}?joinBeta=true&email=${encodeURIComponent(email)}` 
                });
                return;
            } catch (error) {
                console.error("Pre-signup storage failed:", error);
                // Continue with GitHub sign-in even if storage fails
                try {
                    await signIn("github", { 
                        callbackUrl: `${window.location.origin}?joinBeta=true&email=${encodeURIComponent(email)}` 
                    });
                    return;
                } catch (signInError) {
                    console.error("GitHub sign-in failed:", signInError);
                    alert("Failed to sign in with GitHub. Please try again.");
                    return;
                }
            }
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/beta-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                localStorage.setItem('agamify-visited', 'true');
                localStorage.setItem('agamify-beta-joined', 'true');
                
                // Close popup after showing success message
                setTimeout(() => {
                    setShowBetaPopup(false);
                    setSubmitted(false);
                }, 3000);
            } else {
                throw new Error(data.error || 'Failed to join beta');
            }
        } catch (error) {
            console.error("Beta signup error:", error);
            alert(`Failed to join beta: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleJoinBetaFromMarquee = () => {
        setShowBetaPopup(true);
        localStorage.removeItem('agamify-marquee-dismissed');
    };

    // Handle URL params for beta signup after GitHub auth
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const joinBeta = urlParams.get('joinBeta');
        const emailParam = urlParams.get('email');
        
        if (joinBeta === 'true' && emailParam && status === "authenticated") {
            setEmail(emailParam);
            setShowBetaPopup(true);
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, [status]);

    const handleCloseBetaPopup = () => {
        localStorage.setItem('agamify-visited', 'true');
        setShowBetaPopup(false);
        setSubmitted(false);
    };

    return (
        <main>
            <BetaMarquee onJoinBeta={handleJoinBetaFromMarquee} />
            {/* Beta Tester Popup */}
            {showBetaPopup && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div 
                        className="bg-white/10 backdrop-blur-sm rounded-[40px] p-8 max-w-md w-full mx-4 border border-white/10 relative group"
                        style={{
                            boxShadow: "0px 16px 48px rgba(240, 209, 255, 0.16), 0px 4px 12px rgba(240, 209, 255, 0.16)"
                        }}
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 opacity-100 rounded-[40px] bg-gradient-to-b from-[#F0D1FF]/10 via-[#68A2FF]/10 to-[#2D18FB]/10 pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center">
                            {/* Icon with polygon background like WhatYouCanDo cards */}
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
                                        {status === "authenticated" 
                                            ? "You're signed in! Join our beta testing program to get early access and help shape AGAMIFY's future."
                                            : "Sign in with GitHub and join our beta testing program to get early access and help shape AGAMIFY's future."
                                        }
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
                                                onClick={handleCloseBetaPopup}
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
                                                {isSubmitting 
                                                    ? 'Processing...' 
                                                    : status === "authenticated" 
                                                        ? 'JOIN BETA' 
                                                        : 'SIGN IN & JOIN'
                                                }
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🎉</div>
                                    <p className="text-white/90 font-fustat mb-4">
                                        Thanks for joining our beta testing program! You&apos;ll be notified when new features are available.
                                    </p>
                                    <p className="text-white/70 font-fustat text-sm">
                                        Check your dashboard for exclusive beta features.
                                    </p>
                                </div>
                            )}
                            
                            <button
                                onClick={handleCloseBetaPopup}
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

            <Hero />
            <HowToUse />
            <WhatYouCanDo />
            <Pricing />
        </main>
    );
}
