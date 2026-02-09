"use client";

import { Heart, FlaskConical, GraduationCap, ShieldCheck } from "lucide-react";

export default function Strengths() {
    const strengths = [
        {
            icon: <Heart size={32} />,
            title: "Empathy & Active Listening",
            description: "A deep commitment to understanding others' perspectives through patient and focused listening.",
        },
        {
            icon: <FlaskConical size={32} />,
            title: "Research & Analytical Skills",
            description: "Strong foundation in psychological research methods and data-driven insights.",
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Teaching & Communication",
            description: "Proven ability to simplify complex concepts for students through effective tutoring.",
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Ethical & Compassionate",
            description: "Maintaining the highest ethical standards while providing warm, non-judgmental support.",
        },
    ];

    return (
        <section className="py-24 bg-base-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl font-bold text-neutral mb-4">Core Strengths</h2>
                    <div className="w-24 h-1.5 bg-primary/40 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strengths.map((strength, index) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="card-body items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    {strength.icon}
                                </div>
                                <h3 className="card-title text-primary font-playfair mb-2 tracking-tight">
                                    {strength.title}
                                </h3>
                                <p className="text-neutral/60 text-sm leading-relaxed">
                                    {strength.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
