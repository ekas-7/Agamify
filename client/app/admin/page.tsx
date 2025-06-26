import BetaTestersAdmin from "@/components/BetaTestersAdmin";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import { notFound } from "next/navigation";

export default async function AdminPage() {
    const session = await getServerSession(authOptions);
    
    // Only allow access for the specific admin email
    if (!session || (session.user?.email !== "sgursimranmatharu@gmail.com" && session.user?.email !== "ekaspreetatwal@gmail.com")) {
        return notFound();
    }
    
    return <BetaTestersAdmin />;
}
