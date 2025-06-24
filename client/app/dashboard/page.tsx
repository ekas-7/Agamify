import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { getUserRepositories } from "../actions/getUserRepositories";
import DashboardClient from "./DashboardClient";
import type { IRepository } from "../../models/User";

export default async function DashboardPage() {
  // Get session on the server
  const session = await getServerSession(authOptions);
  let repos: IRepository[] = [];
  if (session && session.user?.id) {
    repos = await getUserRepositories();
  }
  return <DashboardClient session={session} repos={repos} />;
}
