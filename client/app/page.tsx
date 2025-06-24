import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import WhatYouCanDo from "./components/WhatYouCanDo";
import Pricing from "./components/Pricing";

export default function LandingPage() {
    return (
        <main>
            <Hero />
            <HowToUse />
            <WhatYouCanDo />
            <Pricing />
        </main>
    );
}
