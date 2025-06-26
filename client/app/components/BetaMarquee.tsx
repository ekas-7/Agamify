"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface BetaMarqueeProps {
    onJoinBeta: () => void;
}

const BetaMarquee = ({ onJoinBeta }: BetaMarqueeProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const { status } = useSession();

    useEffect(() => {
        // Check if user has dismissed the marquee or is already a beta tester
        const dismissed = localStorage.getItem("agamify-marquee-dismissed");
        const isAuthenticated = status === "authenticated";
        
        if (!dismissed && isAuthenticated) {
            // Show marquee after 10 seconds for authenticated users
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000);
            
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem("agamify-marquee-dismissed", "true");
    };

    const handleJoinBeta = () => {
        setIsVisible(false);
        onJoinBeta();
    };

    if (!isVisible || isDismissed || status !== "authenticated") {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full z-60 bg-gradient-to-r from-[#2D18FB] via-[#68A2FF] to-[#F0D1FF] py-3 px-4 shadow-lg">
            <div className="flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="font-fustat font-light text-sm md:text-base">
                        🚀 Want early access to new features? Join our beta testing program!
                    </span>
                </div>
                
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleJoinBeta}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full text-sm font-inter transition-colors duration-300 cursor-pointer select-none"
                    >
                        Join Beta
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="text-white/80 hover:text-white transition-colors duration-300 p-1"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BetaMarquee;
