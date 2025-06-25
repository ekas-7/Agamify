import {NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    
    // Find the user and return their imported repositories array only
    const user = await User.findById(session.user.id).lean();
    const importedRepositories = user?.importedRepositories || [];
    
    return NextResponse.json(importedRepositories);
  } catch (error) {
    console.error("User repos API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user repositories" },
      { status: 500 }
    );
  }
}
