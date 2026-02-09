"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Tag, ArrowRight } from "lucide-react";

export default function BlogGrid({ activeCategory = "All Posts" }: { activeCategory?: string }) {
    const posts = [
        {
            slug: "gratitude-journaling",
            title: "Why Gratitude Journaling Actually Works",
            excerpt: "Exploring the neurological and psychological benefits of daily gratitude practices and how to start today.",
            date: "Jan 15, 2026",
            readTime: "5 min read",
            category: "Mental Health",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1074&auto=format&fit=crop",
        },
        {
            slug: "attachment-adults",
            title: "Understanding Attachment Styles in Relationships",
            excerpt: "How our early childhood experiences shape how we connect, love, and communicate in adult relationships.",
            date: "Jan 08, 2026",
            readTime: "8 min read",
            category: "Relationships",
            image: "https://images.unsplash.com/photo-1516589174184-c685efb114af?q=80&w=687&auto=format&fit=crop",
        },
        {
            slug: "mindfulness-stress",
            title: "Managing Academic Stress with Mindfulness",
            excerpt: "Practical tips for students to stay grounded, focused, and resilient during high-pressure exam seasons.",
            date: "Dec 20, 2025",
            readTime: "6 min read",
            category: "Positive Psychology",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop",
        },
    ];

    const filteredPosts = activeCategory === "All Posts"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    if (filteredPosts.length === 0) {
        return (
            <div className="py-20 text-center">
                <p className="text-xl text-neutral/40 font-medium">No posts found in this category yet. Stay tuned!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
                <article key={post.slug} className="group card bg-base-100 border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={post.image || "/rose.svg"}
                            alt={post.title}
                            fill
                            className={`${post.image ? "object-cover" : "object-contain p-12 opacity-20 group-hover:opacity-40"} transition-all duration-700 group-hover:scale-110`}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="badge badge-primary font-bold text-[10px] uppercase tracking-widest px-3 py-3 border-none shadow-lg">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <div className="card-body p-8">
                        <div className="flex items-center gap-4 text-xs font-semibold text-neutral/40 mb-3">
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {post.readTime}
                            </div>
                            <div className="w-1 h-1 rounded-full bg-neutral/20"></div>
                            <span>{post.date}</span>
                        </div>

                        <h3 className="card-title font-playfair text-2xl text-neutral mb-4 group-hover:text-primary transition-colors leading-tight">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>

                        <p className="text-neutral/60 text-sm mb-6 leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="card-actions mt-auto border-t border-neutral/5 pt-6">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                            >
                                Read Article <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
