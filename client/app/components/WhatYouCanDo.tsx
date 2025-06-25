import anotherGradient from "@/components/svg/anotherGradient.png";
import PolygonSVG from "@/components/svg/Polygon.svg";
import ComputerSVG from "@/components/svg/computer.svg";
import chip from "@/components/svg/chip.svg";
import eduaction from "@/components/svg/education.svg";
import stack from "@/components/svg/stack.svg";
import modren from "@/components/svg/modren.svg";
import team from "@/components/svg/team.svg";
import Image from "next/image";

const WhatYouCanDo = () => {
    const featureCards = [
        {
            id: "cross-migrate",
            title: "Cross-Migrate",
            description:
                "Move your existing React, Vue, Angular, or Svelte projects to any other supported framework without manual rewriting.",
            foregroundIcon: ComputerSVG,
        },
        {
            id: "rapid-prototyping",
            title: "Rapid Prototyping",
            description:
                "Build components once, then instantly generate equivalents in multiple frameworks for fast testing and iteration.",
            foregroundIcon: chip,
        },
        {
            id: "developer-education",
            title: "Developer Education",
            description:
                "Explore how different frameworks handle the same logic with side-by-side code and visual mapping.",
            foregroundIcon: eduaction,
        },
        {
            id: "framework-benchmarking",
            title: "Framework Benchmarking",
            description:
                "Compare structure, performance, and readability across implementations — helpful for teams choosing a tech stack.",
            foregroundIcon: stack,
        },
        {
            id: "modernize-legacy",
            title: "Modernize Legacy Code",
            description:
                "Refactor and migrate older projects into cleaner, more maintainable codebases in modern frameworks.",
            foregroundIcon: modren,
        },
        {
            id: "team-collaboration",
            title: "Team Collaboration",
            description:
                "Ensure clean architecture and consistency across teams by visualizing component structures and migrating shared libraries to preferred frameworks.",
            foregroundIcon: team,
        },
    ];    return (
        <section className="min-h-[1000px] flex flex-col items-center justify-center relative">
            {/* Background gradient image */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={anotherGradient}
                    alt=""
                    className="object-cover select-none pointer-events-none"
                    priority
                />
            </div>
            <main className="max-w-6xl mx-auto px-4 py-10 relative z-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-4xl font-bold text-center tracking-tighter font-jura uppercase mt-40 text-white">
                        What you can do with AGAMIFY
                    </h1>
                    <p className="text-lg text-white text-center max-w-4xl mx-auto mb-10 font-fustat font-light leading-relaxed">
                        AGAMIFY isn&apos;t just for code migration. It&apos;s a
                        versatile tool for learning, prototyping, modernizing,
                        and comparing frontend architectures — all from a single
                        platform.
                    </p>
                </div>{" "}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 justify-center items-center">
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            className="w-full h-[350px] bg-white/10 backdrop-blur-sm rounded-[40px] p-8 border border-white/10 hover:border-[#68A2FF]/25 cursor-pointer select-none transition-all duration-300 flex flex-col items-center justify-center text-center relative group"
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                            }}
                        >
                            {/* Gradient border on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[40px] bg-gradient-to-b from-[#F0D1FF]/5 via-[#68A2FF]/5 to-[#2D18FB]/5"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                                <div className="w-24 h-24 flex items-center justify-center mb-10 relative">
                                    <Image
                                        src={PolygonSVG}
                                        alt=""
                                        className="absolute w-full h-full opacity-25 group-hover:opacity-100 transition-opacity duration-300"
                                        width={96}
                                        height={96}
                                    />
                                    <Image
                                        src={card.foregroundIcon}
                                        alt=""
                                        className="relative z-10 w-8 h-8"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <h2 className="text-2xl font-semibold text-white mb-2 font-jura uppercase tracking-tighter">
                                    {card.title}
                                </h2>{" "}
                                <p className="text-white text-opacity-80 font-fustat font-light leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default WhatYouCanDo;
