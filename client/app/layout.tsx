import type { Metadata } from "next";
import React from "react";
import { Jura, Fustat, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Providers from "@/providers";

import "@/globals.css";
import Footer from "@/components/Footer";

const jura = Jura({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-jura",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

const fustat = Fustat({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-fustat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Agamify",
    description: "A Next.js application for Agamify with GitHub authentication",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${jura.variable} ${inter.variable} ${fustat.variable}`}
            >
                <Providers>
                <Navbar />
                    {children}
                <Footer />
                </Providers>
            </body>
        </html>
    );
}
