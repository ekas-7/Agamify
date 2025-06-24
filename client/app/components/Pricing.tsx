"use client";

const Pricing = () => {
    const pricingTiers = [
        {
            id: "free",
            name: "Free",
            price: 0,
            description: "For freelancers, indie developers or solopreneurs.",
            features: [
                "Single user license",
                "Lifetime updates",
                "5,000+ icons",
                "6 unique styles",
                "Live stroke & corners",
                "Powered by variants",
                "IconJar & SVG library",
                "Unlimited projects",
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
            popular: false,
        },
        {
            id: "premium",
            name: "Premium",
            price: 20,
            description: "For fast-growing teams, up to 6 library users.",
            features: [
                "Up to 6 users license",
                "Lifetime updates",
                "5,000+ icons",
                "6 unique styles",
                "Live stroke & corners",
                "Powered by variants",
                "IconJar & SVG library",
                "Unlimited projects",
            ],
            buttonText: "Buy now",
            buttonStyle: "bg-[#5D4EFF] hover:bg-[#4A3FE7] text-white",
            popular: true,
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: 100,
            description:
                "For large teams, an unlimited number of library users.",
            features: [
                "Unlimited library users",
                "Lifetime updates",
                "5,000+ icons",
                "6 unique styles",
                "Live stroke & corners",
                "Powered by variants",
                "IconJar & SVG library",
                "Unlimited projects",
            ],
            buttonText: "Buy now",
            buttonStyle: "bg-[#5D4EFF] hover:bg-[#4A3FE7] text-white",
            popular: false,
        },
    ];
    return (
        <section className="min-h-[1000px] flex flex-col items-center justify-center bg-black">
            <main className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-4xl font-bold text-center tracking-tighter font-jura uppercase mt-40 text-white">
                        PAY ONCE, USE FOREVER, UPGRADE FOR FREE
                    </h1>
                    <p className="text-lg text-white text-center max-w-4xl mx-auto mb-10 font-fustat font-light leading-relaxed">
                        Flexible pricing for any team size. It&apos;s a one-time
                        payment you only buy a license once, and all future
                        updates are free for you forever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 justify-center items-stretch max-w-6xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative w-full rounded-3xl p-8 transition-all duration-300 flex flex-col bg-white/10 ${
                                tier.popular
                                    ? "outline-4 outline-[#2D1AE6] drop-shadow-[0_16px_48px"
                                    : ""
                            }`}
                        >
                            <div className="text-left mb-6">
                                <div className="inline-block bg-black text-gray-300 px-3 py-1.5 rounded-full font-inter text-sm font-light mb-6">
                                    {tier.name}
                                </div>

                                <div className="flex items-baseline mb-4">
                                    <span className="text-xl text-[#5D4EFF] mr-1">
                                        $
                                    </span>
                                    <span className="text-6xl font-bold text-white">
                                        {tier.price}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {tier.description}
                                </p>
                            </div>
                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {tier.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-gray-300"
                                        >
                                            <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 text-sm ${tier.buttonStyle}`}
                            >
                                {tier.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default Pricing;
