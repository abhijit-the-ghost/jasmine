"use client";

import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-base-100 overflow-hidden pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-secondary font-medium tracking-widest text-sm mb-4">ABOUT ME</h2>
                    <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-neutral mb-6">
                        Jasmine <span className="text-primary italic">Tiwari.</span>
                    </h1>
                    <p className="font-sans text-xl text-primary font-medium mb-8">
                        Psychology Student | Tutor & Learner
                    </p>
                    <div className="w-20 h-1 bg-primary/30 rounded-full mb-8 mx-auto lg:mx-0"></div>
                    <p className="text-lg text-neutral/70 leading-relaxed max-w-2xl">
                        Exploring the human mind with empathy and curiosity. I believe that understanding
                        ourselves is the first step toward a more compassionate world.
                    </p>
                </div>

                <div className="flex-1 order-1 lg:order-2">
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                        <div className="absolute inset-0 bg-secondary/10 rounded-full scale-105 blur-2xl"></div>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl skew-y-3 group transition-transform hover:skew-y-0 duration-500">
                            <Image
                                src="/aboutPic.jpg"
                                alt="Jasmine"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Subtle rose icon */}
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-base-100 rounded-full shadow-lg flex items-center justify-center overflow-hidden p-2">
                            <Image
                                src="/rose.svg"
                                alt="Rose"
                                width={32}
                                height={32}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
