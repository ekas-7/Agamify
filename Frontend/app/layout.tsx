import type { Metadata } from 'next';
import { NextAuthProvider } from '@/providers';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agamify',
  description: 'A Next.js application for Agamify with GitHub authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
