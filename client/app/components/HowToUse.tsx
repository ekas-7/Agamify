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
        title: "DEPLOY & MIGRATE",
        description: "Download your migrated code or deploy directly to your preferred hosting platform with just a few clicks."
    }
];

const HowToUse = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[1000px] flex flex-col items-center justify-center">
            <main className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="text-4xl font-bold text-center tracking-tighter font-jura uppercase mt-40 text-white">
                        How to Use Agamify
                    </h1>
                    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-10">
                        AGAMIFY isn&apos;t just for code migration. It&apos;s a versatile tool for learning, prototyping, modernizing, and comparing frontend architectures — all from a single platform.
                    </p>
                </div>
                <div className='flex items-center justify-center gap-10 py-16 h-[600px]'>                    {/* Left side - Steps */}
                    <div className='flex-1 max-w-lg h-full flex justify-center overflow-hidden'>
                        <div className='relative my-auto'>
                            {/* Purple scrollbar track */}
                            <div className='absolute left-0 top-0 w-1 h-full rounded-full'>
                                {/* Scrollbar thumb - fixed height that moves to active step position */}
                                <div 
                                    className='w-full bg-purple-500 rounded-full transition-all duration-1000 ease-in-out'
                                    style={{ 
                                        height: `${100 / steps.length}%`,
                                        transform: `translateY(${activeStep * 100}%)`,
                                        transition: 'transform 1s ease-in-out'
                                    }}
                                />
                            </div>
                            
                            <div className='pl-8 space-y-8'>
                                {steps.map((step, index) => (
                                    <div 
                                        key={step.id}
                                        className={`relative transition-all duration-500 ease-in-out ${
                                            activeStep === index ? 'opacity-100' : 'opacity-50'
                                        }`}
                                    >
                                        {/* Step content */}
                                        <div className={`cursor-pointer transition-all duration-500 ${
                                            activeStep === index ? 'transform scale-105' : ''
                                        }`}>
                                            <h3 className={`text-2xl font-bold font-jura uppercase tracking-wide mb-2.5 transition-colors duration-300 ${
                                                activeStep === index ? 'text-[#F0D1FF]' : 'text-white'
                                            }`}>
                                                {step.title}
                                            </h3>
                                            
                                            <div 
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                    activeStep === index 
                                                        ? 'max-h-32 opacity-100' 
                                                        : 'max-h-0 opacity-0'
                                                }`}
                                            >
                                                <p className='text-gray-300 text-md font-fustat font-light leading-relaxed'>
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
