'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

export function HomeContent() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // Redirect to dashboard if user is logged in
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <>
      {!session ? (
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </>
  );
}
