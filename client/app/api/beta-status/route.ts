import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { isBetaTester: false, authenticated: false },
                { status: 200 }
            );
        }

        await dbConnect();

        const user = await User.findOne(
            { email: session.user.email },
            { isBetaTester: 1, betaSignupDate: 1, betaNotifications: 1 }
        );

        return NextResponse.json({
            authenticated: true,
            isBetaTester: user?.isBetaTester || false,
            betaSignupDate: user?.betaSignupDate || null,
            betaNotifications: user?.betaNotifications || false,
        });

    } catch (error) {
        console.error("Beta status check error:", error);
        return NextResponse.json(
            { error: "Internal server error", isBetaTester: false },
            { status: 500 }
        );
    }
}
