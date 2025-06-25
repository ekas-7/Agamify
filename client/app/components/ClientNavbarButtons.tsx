"use client";

import { signIn, useSession } from "next-auth/react";
import LogoutButton from "../dashboard/components/LogoutButton";

export default function ClientNavbarButtons() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <LogoutButton />
      ) : (
        <button
          className="bg-white text-black px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          TRY A DEMO
        </button>
      )}
    </>
  );
}
