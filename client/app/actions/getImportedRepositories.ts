import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import dbConnect from "../../lib/mongoose";
import { User } from "../../models/User";

export async function getImportedRepositories() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) return [];

  await dbConnect();
  // Find the user and return their imported repositories array only
  const user = await User.findById(session.user.id).lean();
  return user?.importedRepositories || [];
}
