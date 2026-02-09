"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

export default function AboutIntro() {
    return (
        <section className="py-20 bg-base-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="relative max-w-4xl mx-auto">
                    {/* Decorative quote mark background */}
                    <div className="absolute -top-10 -left-10 text-primary/10 select-none">
                        <Quote size={120} />
                    </div>

                    <div className="relative z-10 text-center lg:text-left space-y-8">
                        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-secondary flex flex-col sm:flex-row items-center gap-4">
                            Why Psychology?
                            <span className="h-0.5 w-24 bg-primary/40 hidden sm:block"></span>
                        </h2>

                        <p className="text-xl sm:text-2xl leading-relaxed text-neutral/80 font-medium">
                            "I’ve always been fascinated by how our minds work, how experiences shape us, and how small acts of care can create big change."
                        </p>

                        <div className="space-y-6 text-lg text-neutral/70 max-w-3xl">
                            <p>
                                I am currently pursuing a <span className="text-secondary font-semibold">B.A. in Psychology</span> at my university,
                                where I am exploring the complexities of human behavior and emotional well-being. My core
                                interests lie in mental health awareness, child and adolescent development, and the
                                practical application of positive psychology.
                            </p>
                            <p>
                                Beyond my studies, I have gained valuable experience as a <span className="text-primary font-semibold italic">tutor</span>,
                                helping students navigate their own learning journeys. This role has sharpened my
                                communication skills and deepened my belief that understanding the mind is the first
                                step toward supporting growth in others.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-primary font-sans font-medium text-lg italic">
                            <Image
                                src="/blueRose.svg"
                                alt="Blue Rose"
                                width={24}
                                height={24}
                            />
                            <span>Rooted in empathy, growing through knowledge.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
