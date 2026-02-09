"use client";

import { useState } from "react";
import Header from "../components/Header";
import BlogGrid from "../components/BlogGrid";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Sparkles } from "lucide-react";

export default function BlogPage() {
    const categories = ["All Posts", "Mental Health", "Positive Psychology", "Relationships", "Study Tips"];
    const [activeCategory, setActiveCategory] = useState("All Posts");

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32">
                {/* Page Hero */}
                <section className="py-20 bg-primary/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                        <div className="flex items-center gap-4 mb-6 text-secondary">
                            <Sparkles size={32} />
                            <div className="h-0.5 w-12 bg-secondary/30"></div>
                        </div>
                        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-neutral mb-6">
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-neutral/70 max-w-2xl leading-relaxed">
                            Thoughts on the mind, mental health strategies, and reflections
                            from my journey as a psychology student and advocate.
                        </p>
                    </div>
                </section>

                {/* Filters and Grid */}
                <section className="py-24 bg-base-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                        <div className="flex flex-wrap items-center gap-4 mb-16 border-b border-neutral/10 pb-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 transition-all relative font-semibold text-sm ${activeCategory === cat
                                        ? "text-primary"
                                        : "text-neutral/40 hover:text-neutral/70"
                                        }`}
                                >
                                    {cat}
                                    {activeCategory === cat && (
                                        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <BlogGrid activeCategory={activeCategory} />
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
