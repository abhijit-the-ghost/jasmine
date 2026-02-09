"use client";

import { useState } from "react";
import Header from "../components/Header";
import ProjectGrid from "../components/ProjectGrid";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { FolderOpen } from "lucide-react";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Research", "Case Studies", "Tutoring", "Applied Work"];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32">
                {/* Page Hero */}
                <section className="py-20 bg-secondary/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                        <div className="flex items-center gap-4 mb-6 text-primary">
                            <FolderOpen size={32} />
                            <div className="h-0.5 w-12 bg-primary/30"></div>
                        </div>
                        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-neutral mb-6">
                            Projects & Case Studies
                        </h1>
                        <p className="text-xl text-neutral/70 max-w-2xl leading-relaxed">
                            A selection of academic research, research papers, case studies, and
                            applied psychological work from my studies and practical experience.
                        </p>
                    </div>
                </section>

                {/* Filters and Grid */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <div className="flex flex-wrap items-center gap-4 mb-16">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`btn btn-sm rounded-full px-6 transition-all ${activeCategory === cat
                                            ? "btn-primary shadow-lg shadow-primary/20 scale-105"
                                            : "btn-ghost text-neutral/40 hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <ProjectGrid activeCategory={activeCategory} />
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
