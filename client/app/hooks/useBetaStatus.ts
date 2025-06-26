"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface BetaStatus {
    isBetaTester: boolean;
    loading: boolean;
    error: string | null;
}

export const useBetaStatus = (): BetaStatus => {
    const { data: session, status } = useSession();
    const [betaStatus, setBetaStatus] = useState<BetaStatus>({
        isBetaTester: false,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const checkBetaStatus = async () => {
            if (status === "loading") return;
            
            if (status !== "authenticated" || !session?.user?.email) {
                setBetaStatus({
                    isBetaTester: false,
                    loading: false,
                    error: null,
                });
                return;
            }

            try {
                const response = await fetch('/api/beta-status');
                if (response.ok) {
                    const data = await response.json();
                    setBetaStatus({
                        isBetaTester: data.isBetaTester || false,
                        loading: false,
                        error: null,
                    });
                } else {
                    setBetaStatus({
                        isBetaTester: false,
                        loading: false,
                        error: 'Failed to check beta status',
                    });
                }
            } catch (error) {
                setBetaStatus({
                    isBetaTester: false,
                    loading: false,
                    error: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        };

        checkBetaStatus();
    }, [session, status]);

    return betaStatus;
};
