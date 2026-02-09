"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Microscope, Users, Heart, ClipboardCheck } from "lucide-react";

export default function ProjectGrid({ activeCategory = "All" }) {
    const projects = [
        {
            id: "mindfulness",
            title: "Mindfulness Intervention for Academic Stress",
            category: "Research",
            year: "2025",
            summary: "Designed and implemented a 6-week mindfulness curriculum for high schoolers. Measured impact on stress levels.",
            outcome: "28% reduction in reported stress levels.",
            tags: ["Program Design", "Mental Health"],
            icon: <Brain size={20} />,
        },
        {
            id: "attachment",
            title: "Case Study: Attachment Styles in Adolescents",
            category: "Case Studies",
            year: "2024",
            summary: "An in-depth analysis of attachment patterns in adolescent peer relationships and their impact on self-esteem.",
            outcome: "Identified key correlation between secure attachment and academic resilience.",
            tags: ["Research", "Developmental"],
            icon: <Users size={20} />,
        },
        {
            id: "pos-psych",
            title: "Positive Psychology Interventions",
            category: "Research",
            year: "2024",
            summary: "A literature review on the efficacy of gratitude journaling and mood improvement in college students.",
            outcome: "Proposed a new framework for daily micro-interventions.",
            tags: ["Literature Review", "Well-being"],
            icon: <Microscope size={20} />,
        },
        {
            id: "tutoring",
            title: "Curriculum for Class 10 Psychology",
            category: "Tutoring",
            year: "2023",
            summary: "Developed a simplified curriculum to help students grasp core psychological concepts effectively.",
            outcome: "Adopted by two local tutoring centers with positive feedback.",
            tags: ["Education", "Communication"],
            icon: <ClipboardCheck size={20} />,
        },
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
                <div key={project.id} className="card bg-base-100 border border-primary/10 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group">
                    <div className="card-body p-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {project.icon}
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{project.category}</span>
                                <span className="text-xs font-medium text-neutral/40">{project.year}</span>
                            </div>
                        </div>

                        <h3 className="card-title font-playfair text-2xl text-neutral mb-3 leading-tight group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-neutral/60 text-sm mb-4 leading-relaxed line-clamp-2">
                            {project.summary}
                        </p>

                        <div className="bg-secondary/5 rounded-xl p-4 mb-6 border border-secondary/10">
                            <p className="text-xs font-bold text-secondary uppercase mb-1 tracking-wider flex items-center gap-1.5">
                                <Heart size={12} className="fill-secondary" /> Key Outcome
                            </p>
                            <p className="text-neutral/70 font-medium text-sm italic italic">
                                "{project.outcome}"
                            </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-neutral/5">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-0.5 rounded-full bg-base-200 text-neutral/40 text-[10px] font-bold uppercase tracking-tighter">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={`/projects/${project.id}`}
                                className="btn btn-primary btn-link btn-sm no-underline hover:no-underline font-bold text-xs uppercase p-0 h-auto min-h-0"
                            >
                                Read Details
                                <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
