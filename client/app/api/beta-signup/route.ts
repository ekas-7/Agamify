import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User, PreSignupEmail } from "../../../models/User";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session || !session.user?.email) {
            return NextResponse.json(
                { error: "Authentication required" },
                { status: 401 }
            );
        }

        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Update the user to be a beta tester
        const updatedUser = await User.findOneAndUpdate(
            { email: session.user.email },
            {
                $set: {
                    isBetaTester: true,
                    betaSignupDate: new Date(),
                    betaNotifications: true,
                    email: email, // Update email if different
                }
            },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Mark the pre-signup email as converted if it exists
        await PreSignupEmail.findOneAndUpdate(
            { email },
            {
                converted: true,
                convertedAt: new Date(),
            }
        );

        return NextResponse.json({
            success: true,
            message: "Successfully joined beta testing program!",
            user: {
                id: updatedUser._id,
                email: updatedUser.email,
                isBetaTester: updatedUser.isBetaTester,
                betaSignupDate: updatedUser.betaSignupDate,
            }
        });

    } catch (error) {
        console.error("Beta signup error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
