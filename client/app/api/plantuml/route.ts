import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import dbConnect from "../../../lib/mongoose";
import { User } from "../../../models/User";

export async function POST(request: NextRequest) {
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

    const { git_url, language, code_folder, auth_token, max_depth, include_external } = await request.json();

    // Call your existing PlantUML microservice
    const plantumlResponse = await fetch(
      "http://ekas-rag-ms-unique-1750712931.eastus.azurecontainer.io:8000/plantuml_tree",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          git_url,
          language,
          code_folder,
          auth_token: auth_token || undefined,
          max_depth: Number(max_depth),
          include_external,
        }),
      }
    );

    if (!plantumlResponse.ok) {
      throw new Error("PlantUML service error");
    }

    const plantumlData = await plantumlResponse.json();

    // Generate additional analysis using AI (placeholder)
    const analysisResult = {
      plantuml: plantumlData,
      analysis: {
        architecture_type: "Microservices", // This would be determined by AI
        complexity_score: Math.floor(Math.random() * 10) + 1,
        maintainability: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
        scalability: ["Excellent", "Good", "Needs Improvement"][Math.floor(Math.random() * 3)],
        recommendations: [
          "Consider breaking down large components",
          "Implement proper error boundaries",
          "Add comprehensive testing",
          "Optimize bundle size",
        ],
      },
      migration_ready: true,
      supported_frameworks: ["react", "vue", "angular", "svelte", "nextjs"],
    };

    return NextResponse.json(analysisResult);
  } catch (error) {
    console.error("PlantUML API error:", error);
    return NextResponse.json(
      { error: "Failed to generate PlantUML diagram" },
      { status: 500 }
    );
  }
}
