"use client";

import { Heart, Activity, Microscope, MessageCircle, GraduationCap, Shield, Wind, FileText } from "lucide-react";

export default function SkillsGrid() {
    const skills = [
        { name: "Empathy & Active Listening", icon: <Heart size={24} /> },
        { name: "Psychological Assessment", icon: <Activity size={24} /> },
        { name: "Research & Data Analysis", icon: <Microscope size={24} /> },
        { name: "Supportive Communication", icon: <MessageCircle size={24} /> },
        { name: "Tutoring & Teaching", icon: <GraduationCap size={24} /> },
        { name: "Ethical Decision-Making", icon: <Shield size={24} /> },
        { name: "Stress Management", icon: <Wind size={24} /> },
        { name: "Academic Writing", icon: <FileText size={24} /> },
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl font-bold text-neutral mb-4">Skills Snapshot</h2>
                    <div className="w-24 h-1.5 bg-primary/40 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-8 bg-base-200/30 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-base-200/50 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <p className="text-sm font-semibold text-neutral/80 text-center tracking-tight">
                                {skill.name}
                            </p>
                            {/* Subtle proficiency highlight */}
                            <div className="w-12 h-1 bg-primary/20 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
