"use client";

const Pricing = () => {
    const pricingTiers = [
        {
            id: "free",
            name: "Free",
            price: 0,
            description: "For individuals exploring code migration and visualization.",
            features: [
                "Import up to 3 GitHub repositories",
                "Visualize app structure & dependencies",
                "Migrate repos you own ",
                "Manual dependency updates",
                "Access to 6 unique migration styles",
                "Unlimited visualizations",
                "Community support",
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
            popular: false,
        },
        {
            id: "premium",
            name: "Premium",
            price: 20,
            description: "For teams and professionals needing unlimited migrations and advanced features.",
            features: [
                "Unlimited GitHub repo imports & migrations",
                "Automatic dependency updates",
                "Migrate any repo you have access to",
                "AI-powered migration to multiple frameworks",
                "Priority migration queue",
                "All Free features included",
                "Email support",
            ],
            buttonText: "Buy now",
            buttonStyle: "bg-[#2D1AE6] hover:bg-[#4A3FE7] text-white",
            popular: true,
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: 100,
            description:
                "For large organizations with advanced needs and dedicated support.",
            features: [
                "Unlimited users & team management",
                "Dedicated migration engineer",
                "Custom migration rules & integrations",
                "On-premise or private cloud deployment",
                "SLA & priority support",
                "All Premium features included",
            ],
            buttonText: "Contact us",
            buttonStyle: "bg-[#2D1AE6] hover:bg-[#4A3FE7] text-white",
            popular: false,
        },
    ];
    return (
        <section className="min-h-[1000px] flex flex-col items-center justify-center bg-black mb-52">
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
                </div>                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 justify-center items-stretch max-w-6xl mx-auto">                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative w-full rounded-[40px] p-8 transition-all duration-300 flex flex-col bg-white/10 ${
                                tier.popular
                                    ? "outline-4 outline-[#2D1AE6]"
                                    : ""
                            }`}
                            style={{
                                boxShadow: tier.popular 
                                    ? "0px 16px 48px rgba(45, 24, 251, 0.16), 0px 4px 12px rgba(45, 24, 251, 0.16)"
                                    : undefined
                            }}
                        >
                            <div className="text-left mb-6">
                                <div className="inline-block bg-black text-gray-300 px-3 py-1.5 rounded-full font-inter text-sm font-light mb-6">
                                    {tier.name}
                                </div>

                                <div className="flex mb-4 font-fustat">
                                    <span className="text-2xl self-start text-[#F0D1FF] font-light mr-1">
                                        $
                                    </span>
                                    <span className="text-6xl font-light text-white">
                                        {tier.price}
                                    </span>
                                    <span className="text-2xl text-white font-light self-end -translate-y-1">
                                        /month
                                    </span>
                                </div>

                                <p className="text-gray-400 text-base leading-relaxed mb-8">
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
