"use client";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  const { status } = useSession();
  if (status !== "authenticated") return null;
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-[#211C5540] text-white px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-red-600 hover:text-white transition-colors ease flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
      </svg>
      LOGOUT
    </button>
  );
}
