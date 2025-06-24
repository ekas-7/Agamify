"use client";

import Image from "next/image";
import FooterGradient from "@/components/svg/footerGradient.png";
import Logo from "@/components/icons/Logo.png";
import Navbar from "./Navbar";

const Footer = () => {
    return (
        <footer className="min-h-[500px] flex flex-col relative rounded-t-[40px] overflow-hidden bg-black">
            {/* Background gradient image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={FooterGradient}
                    alt="Footer gradient background"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="flex-1 flex flex-col justify-between relative z-10">
                <main className="max-w-[1400px] px-4 py-16 flex mx-auto justify-between items-center w-full">
                    <div className="flex justify-between items-center h-full w-full">
                        <div className="flex flex-col gap-2">
                            <a href="#pricing" className="text-white/80 hover:text-white transition-colors font-fustat text-base font-light">
                                PRICING
                            </a>
                            <a href="#usecase" className="text-white/80 hover:text-white transition-colors font-fustat text-base font-light">
                                USE CASE
                            </a>
                            <a href="#howitworks" className="text-white/80 hover:text-white transition-colors font-fustat text-base font-light">
                                HOW IT WORKS
                            </a>
                        </div>

                        <div className="flex flex-col justify-between items-center gap-4">
                            <div className="flex gap-6">
                                <a href="#" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-white/70 hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                    </svg>
                                </a>
                            </div>
                            <a href="#terms" className="text-white/80 hover:text-white transition-colors font-fustat text-sm">
                                TERMS AND CONDITIONS
                            </a>
                        </div>
                    </div>
                    
                </main>

                {/* Bottom section with reused Navbar component */}
                <div className="relative z-10 pb-16">
                    <Navbar />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
