import { syncGithubRepos } from "../../actions/syncGithubRepos";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await syncGithubRepos();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
