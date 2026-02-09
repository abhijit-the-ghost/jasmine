"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Microscope, Users } from "lucide-react";

export default function ProjectsTeaser() {
    const projects = [
        {
            title: "Mindfulness Program for Students",
            summary: "Designed and implemented a 6-week mindfulness curriculum for high schoolers.",
            tags: ["Program Design", "Mental Health"],
            icon: <Brain size={20} />,
            href: "/projects/mindfulness",
        },
        {
            title: "Case Study: Attachment Styles",
            summary: "An in-depth analysis of attachment patterns in adolescent peer relationships.",
            tags: ["Research", "Developmental"],
            icon: <Users size={20} />,
            href: "/projects/attachment",
        },
        {
            title: "Positive Psychology Interventions",
            summary: "A literature review on efficacy of gratitude journaling and mood improvement.",
            tags: ["Literature Review", "Well-being"],
            icon: <Microscope size={20} />,
            href: "/projects/pos-psych",
        },
    ];

    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-playfair text-4xl font-bold text-neutral mb-4">Featured Projects</h2>
                        <div className="w-20 h-1.5 bg-secondary/40 rounded-full mb-6"></div>
                        <p className="text-neutral/70 text-lg">
                            A glimpse into my academic research, clinical case studies, and applied psychological interventions.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="btn btn-ghost text-primary hover:text-primary-dark group"
                    >
                        View All Projects
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-base-100 border border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="card-body">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="badge badge-secondary badge-outline badge-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="card-title font-playfair text-xl text-neutral mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-neutral/60 text-sm mb-6 leading-relaxed">
                                    {project.summary}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link
                                        href={project.href}
                                        className="btn btn-primary btn-sm btn-link group lowercase tracking-wide font-semibold no-underline hover:no-underline"
                                    >
                                        Read More
                                        <BookOpen size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
