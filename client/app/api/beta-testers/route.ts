import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User, PreSignupEmail } from "../../../models/User";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        await dbConnect();

        // Get beta tester statistics
        const totalBetaTesters = await User.countDocuments({ isBetaTester: true });
        const recentBetaSignups = await User.countDocuments({
            isBetaTester: true,
            betaSignupDate: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } // Last 7 days
        });

        // Get pre-signup email statistics
        const totalPreSignups = await PreSignupEmail.countDocuments({});
        const pendingPreSignups = await PreSignupEmail.countDocuments({ converted: false });

        // Get all beta testers (for admin view - you might want to add admin check here)
        const betaTesters = await User.find(
            { isBetaTester: true },
            {
                name: 1,
                email: 1,
                githubUsername: 1,
                betaSignupDate: 1,
                betaNotifications: 1,
            }
        ).sort({ betaSignupDate: -1 });

        // Get pre-signup emails
        const preSignupEmails = await PreSignupEmail.find({})
            .sort({ submittedAt: -1 })
            .limit(50); // Limit to recent 50

        return NextResponse.json({
            success: true,
            statistics: {
                totalBetaTesters,
                recentBetaSignups,
                totalPreSignups,
                pendingPreSignups,
            },
            betaTesters: betaTesters.map(user => ({
                id: user._id,
                name: user.name,
                email: user.email,
                githubUsername: user.githubUsername,
                betaSignupDate: user.betaSignupDate,
                betaNotifications: user.betaNotifications,
            })),
            preSignupEmails: preSignupEmails.map(email => ({
                id: email._id,
                email: email.email,
                submittedAt: email.submittedAt,
                converted: email.converted,
                convertedAt: email.convertedAt,
            }))
        });

    } catch (error) {
        console.error("Beta testers fetch error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
