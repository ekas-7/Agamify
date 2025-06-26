import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongoose";
import { PreSignupEmail } from "../../../models/User";

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Store or update the pre-signup email
        const preSignupEmail = await PreSignupEmail.findOneAndUpdate(
            { email },
            { 
                email,
                submittedAt: new Date(),
                // Don't reset converted status if already true
            },
            { 
                upsert: true, 
                new: true,
                setDefaultsOnInsert: true 
            }
        );

        return NextResponse.json({
            success: true,
            message: "Email stored for beta signup",
            emailId: preSignupEmail._id,
        });

    } catch (error) {
        console.error("Pre-signup email storage error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
