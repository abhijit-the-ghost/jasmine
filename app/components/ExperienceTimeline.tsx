"use client";

import { Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
    const experiences = [
        {
            role: "Intern",
            organization: "UCEP Nepal, Sanothimi, Bhaktapur",
            period: "April 2025 – May 2025",
            description: "Gaining hands-on experience in a professional psychological and educational setting. Observing and assisting in organizational processes while applying psychological principles to real-world scenarios."
        },
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                    <div>
                        <h2 className="font-playfair text-4xl font-bold text-neutral">Experience Journey</h2>
                        <div className="w-24 h-1.5 bg-secondary/40 rounded-full mt-4"></div>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-medium italic">
                        <Briefcase size={20} />
                        Professional Growth
                    </div>
                </div>

                <div className="relative border-l-2 border-secondary/20 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative group">
                            {/* Tree Node (Dot) */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-base-100 border-4 border-secondary shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>

                            <div className="flex flex-col gap-1">
                                <time className="text-sm font-mono text-primary font-bold italic tracking-wider">
                                    {exp.period}
                                </time>
                                <h3 className="font-playfair text-2xl font-bold text-neutral group-hover:text-secondary transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="text-secondary font-semibold text-lg mb-4">
                                    {exp.organization}
                                </div>
                                <p className="text-neutral/60 leading-relaxed max-w-3xl text-lg">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Decorative bottom fade for the "tree" line */}
                    <div className="absolute bottom-0 -left-[2px] w-[2px] h-20 bg-gradient-to-t from-base-100 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
