'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Agamify from '@/components/icons/Agamify.png'

const steps = [
    {
        id: 1,
        title: "IMPORT YOUR REPO",
        description: "Connect your GitHub and select the project you want to migrate. AGAMIFY supports React, Vue, Angular, Svelte, and Next.js."
    },
    {
        id: 2,
        title: "VISUALIZE YOUR APP",
        description: "Get a comprehensive view of your application's structure, components, and dependencies in an interactive visual format."
    },
    {
        id: 3,
        title: "CHOOSE YOUR TARGET",
        description: "Select your desired framework or technology stack for migration. Our AI will handle the complex transformation process."
    },
    {
        id: 4,
        title: "MIGRATE YOUR CODE & PUSH ",
        description: "Download your migrated code or deploy directly to your preferred hosting platform with just a few clicks."
    }
];

const HowToUse = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000); // Increased interval for better readability

        return () => clearInterval(interval);
    }, [activeStep]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
    };

    return (
        <section className="min-h-[1000px] flex flex-col items-center justify-center">
            <main className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-4xl font-bold text-center tracking-tighter font-jura uppercase mt-40 text-white">
                        How to Use Agamify
                    </h1>
                    <p className="text-lg text-white text-center max-w-4xl mx-auto mb-10 font-fustat font-light leading-relaxed">
                        AGAMIFY isn&apos;t just for code migration. It&apos;s a versatile tool for learning, prototyping, modernizing, and comparing frontend architectures — all from a single platform.
                    </p>
                </div>
                <div className='flex items-center justify-center gap-10 py-16 h-[600px]'>                    {/* Left side - Steps */}
                    <div className='flex-1 max-w-lg h-full flex justify-center overflow-hidden'>
                        <div className='relative my-auto'>
                            {/* Purple scrollbar track */}
                            <div className='absolute left-0 top-0 w-1 h-full  rounded-full'>
                                {/* Scrollbar thumb - smooth animated indicator */}
                                <div 
                                    className='w-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/30'
                                    style={{ 
                                        height: `${100 / steps.length}%`,
                                        transform: `translateY(${activeStep * 100}%)`,
                                        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                    }}
                                />
                            </div>
                            
                            <div className='pl-8 space-y-8'>
                                {steps.map((step, index) => (
                                    <div 
                                        key={step.id}
                                        className={`relative transform transition-all duration-800 ease-out ${
                                            activeStep === index 
                                                ? 'opacity-100 translate-x-0 scale-100' 
                                                : 'opacity-70 translate-x-0 scale-95'
                                        }`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        {/* Step content */}
                                        <div className={`cursor-pointer transform transition-all duration-700 ease-out ${
                                            activeStep === index 
                                                ? 'scale-100' 
                                                : 'scale-98 hover:scale-100 hover:opacity-95'
                                        }`}>
                                            <h3 className={`text-2xl font-bold font-jura uppercase tracking-wide mb-3 transition-all duration-700 ease ${
                                                activeStep === index 
                                                    ? 'text-[#F0D1FF] scale-105 translate-x-3' 
                                                    : 'text-white scale-100 hover:scale-102 hover:translate-x-1 hover:transition-all hover:duration-500'
                                            }`}>
                                                {step.title}
                                            </h3>
                                            
                                            <div 
                                                className={`overflow-hidden transform transition-all duration-700 ease-out ${
                                                    activeStep === index 
                                                        ? 'max-h-40 opacity-100 scale-100 translate-y-0' 
                                                        : 'max-h-0 opacity-0 scale-95 translate-y-2'
                                                }`}
                                            >
                                                <p className='text-gray-300 text-base font-fustat font-light leading-relaxed pt-1 transform transition-all duration-500 ease-out'>
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className='flex-1 flex justify-center items-center my-auto h-full'>
                        <div className='relative'>
                            <Image 
                                src={Agamify} 
                                alt="Agamify Logo" 
                                width={800} 
                                height={350} 
                                className='rounded-lg shadow-2xl'
                            />
                            {/* Optional: Add a subtle animation to the image */}
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-lg animate-pulse' />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
export default HowToUse;
