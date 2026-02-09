"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-20 bg-base-100 overflow-hidden">
            {/* Background soft blobs for a "premium" feel */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[100px] animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
                {/* Bio Text */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/10 text-secondary font-medium text-sm tracking-wide">
                        EXPLORING MINDS, SUPPORTING GROWTH
                    </div>

                    <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-neutral leading-[1.1] mb-6">
                        Jasmine <span className="text-primary italic">Tiwari.</span>
                    </h1>

                    <p className="font-sans text-xl sm:text-2xl text-neutral/90 font-medium mb-4">
                        <span className="relative inline-block">
                            Psychology Student
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
                        </span>{" "}
                        | Tutor
                    </p>

                    <p className="text-lg text-neutral/70 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                        Second-year psychology student passionate about mental health, emotional resilience,
                        and positive psychology. Experienced tutor helping students understand
                        the human mind through empathy and active listening.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="/projects"
                            className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                        >
                            View My Projects
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-outline btn-secondary btn-lg rounded-full px-8 hover:scale-105 transition-transform"
                        >
                            Contact Me
                            <Mail size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Photo Container */}
                <div className="flex-1 order-1 lg:order-2">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] mx-auto group">
                        {/* Decorative frame elements */}
                        <div className="absolute top-0 right-0 w-full h-full border-2 border-primary/20 rounded-2xl transform rotate-3 -z-10 transition-transform group-hover:rotate-6"></div>
                        <div className="absolute top-0 right-0 w-full h-full border-2 border-secondary/20 rounded-2xl transform -rotate-3 -z-10 transition-transform group-hover:-rotate-6 md:group-hover:-rotate-12"></div>

                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                            <Image
                                src="/me.jpg"
                                alt="Jasmine"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating accent icon */}
                        <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 bg-base-100 rounded-full shadow-xl flex items-center justify-center">
                            <Image
                                src="/rose.svg"
                                alt="Rose"
                                width={40}
                                height={40}
                                className="animate-pulse"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
