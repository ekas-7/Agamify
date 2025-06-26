import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    await dbConnect();

    // Check if user is a beta tester
    const user = await User.findOne(
      { email: session.user.email },
      { isBetaTester: 1 }
    );

    if (!user?.isBetaTester) {
      return NextResponse.json(
        { error: "Under Beta Development. Sign in to get notified when this feature becomes available." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Feature under development. Coming soon for beta testers!" },
      { status: 503 }
    );

  } catch (error) {
    console.error("Analyze repo error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
