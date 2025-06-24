import Image from "next/image";
import HeroGradient from "@/components/svg/heroGradient.png";

const Hero = () => {
    return (
        <section className="min-h-[900px] flex justify-center items-center rounded-b-[40px] relative overflow-hidden">
            <main className="max-w-6xl flex gap-14 justify-center items-center flex-col relative z-10">
                <div className="flex justify-center items-center text-white text-center font-fustat font-light rounded-full w-fit bg-white/10 border-white/10 px-5 py-2.5 border-1 mx-auto">
                    Code once build everywhere visualize everything.
                </div>
                <div>
                    <div className="flex flex-col gap-5 justify-center items-center text-center">
                        <h1 className="text-6xl font-bold font-jura text-white text-center tracking-tighter uppercase flex-1 w-full">
                            Migrate frontend code <br /> across frameworks.
                            Instantly.
                        </h1>
                        <p className="max-w-3xl text-white/70 text-center font-fustat text-xl mx-auto">
                            AGAMIFY lets you import any React, Vue, Angular,
                            Svelte, or Next.js project, visualize its
                            architecture, and transform it into other frameworks
                            using one intelligent agent.
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-10 gap-5">
                        <button className="bg-white text-black px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease">
                            GET STARTED
                        </button>
                        <button className="bg-[#211C5540] text-white px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease">
                            TRY A DEMO
                        </button>
                    </div>
                </div>
            </main>
            <div className="absolute -bottom-10 left-0 w-full overflow-hidden">
                <Image
                    src={HeroGradient}
                    alt="Hero gradient background"
                    className="w-full h-screen object-cover"
                    style={{ objectFit: "cover" }}
                />
            </div>
        </section>
    );
};

export default Hero;
