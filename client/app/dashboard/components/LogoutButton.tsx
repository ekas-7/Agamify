"use client";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  const { status } = useSession();
  if (status !== "authenticated") return null;
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-600 hover:bg-red-700 text-white font-jura px-6 py-3 rounded-lg transition-colors"
    >
      Logout
    </button>
  );
}
