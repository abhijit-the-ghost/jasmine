"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import { Clock, Calendar, ChevronLeft, Share2, MessageCircle, Heart } from "lucide-react";

export default function BlogDetail() {
    const params = useParams();
    const slug = params.slug;

    // Mock data for the blog post (in a real app, this would be fetched)
    const post = {
        title: "Why Gratitude Journaling Actually Works",
        category: "Mental Health",
        date: "Jan 15, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1074&auto=format&fit=crop",
        content: `
            <p>Gratitude journaling is more than just a self-help trend; it's a scientifically-backed practice that can significantly impact your mental health and overall well-being. By intentionally focusing on the positive aspects of your life, you can actually rewire your brain for happiness.</p>
            
            <h3>The Science of Gratitude</h3>
            <p>Research in neuroscience has shown that practicing gratitude can increase the production of dopamine and serotonin—the brain's natural "feel-good" chemicals. When we acknowledge what we're thankful for, our brain releases these neurotransmitters, creating a sense of pleasure and satisfaction.</p>
            
            <blockquote>"Gratitude is not only the greatest of virtues, but the parent of all others." — Cicero</blockquote>
            
            <h3>Practical Benefits</h3>
            <ul>
                <li><strong>Reduces Stress:</strong> Focusing on gratitude helps lower cortisol levels and activate the parasympathetic nervous system.</li>
                <li><strong>Improves Sleep:</strong> Reflecting on positive thoughts before bed can help you fall asleep faster and stay asleep longer.</li>
                <li><strong>Enhances Resilience:</strong> Gratitude helps you maintain perspective during difficult times, making it easier to bounce back from setbacks.</li>
            </ul>
            
            <h3>How to Start Today</h3>
            <p>The beauty of gratitude journaling is its simplicity. You don't need a fancy notebook or hours of free time. Just three to five minutes each day can make a difference. Try writing down three things you're grateful for every morning or evening. Be specific—instead of saying "I'm grateful for my friends," try "I'm grateful for the long walk I had with Sarah today."</p>
        `,
        author: {
            name: "Jasmine",
            bio: "Psychology student and mental health advocate dedicated to sharing evidence-based insights.",
            image: "/me.jpg"
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32">
                {/* Article Header */}
                <article className="max-w-4xl mx-auto px-4 sm:px-8 pb-24">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral/50 hover:text-primary transition-colors mb-8 font-semibold text-sm"
                    >
                        <ChevronLeft size={16} />
                        Back to Blog
                    </Link>

                    <div className="space-y-6 mb-12">
                        <span className="badge badge-primary font-bold text-[10px] uppercase tracking-widest px-3 py-3 border-none shadow-lg">
                            {post.category}
                        </span>
                        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-neutral leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-neutral/40">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                {post.readTime}
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl bg-base-200/50">
                        <Image
                            src={post.image || "/rose.svg"}
                            alt={post.title}
                            fill
                            className={post.image ? "object-cover" : "object-contain p-20 opacity-20"}
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar - Social Share (Desktop) */}
                        <div className="hidden lg:col-span-1 lg:block">
                            <div className="sticky top-40 flex flex-col gap-4">
                                <button className="btn btn-ghost btn-circle btn-sm text-neutral/40 hover:text-primary transition-colors">
                                    <Share2 size={20} />
                                </button>
                                <button className="btn btn-ghost btn-circle btn-sm text-neutral/40 hover:text-primary transition-colors">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-11">
                            <div
                                className="prose prose-neutral prose-lg max-w-none text-neutral/70"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Author Bio */}
                            <div className="mt-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/10 flex flex-col sm:flex-row items-center gap-8">
                                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center sm:text-left space-y-2">
                                    <h4 className="font-playfair text-xl font-bold text-neutral">Written by {post.author.name}</h4>
                                    <p className="text-neutral/60 text-sm leading-relaxed italic">
                                        {post.author.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts Teaser */}
                    <div className="mt-32 pt-16 border-t border-neutral/10">
                        <h3 className="font-playfair text-3xl font-bold text-neutral mb-12 text-center">Continue Reading</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group card bg-base-100 border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1516589174184-c685efb114af?q=80&w=1074&auto=format&fit=crop"
                                        alt="Attachment"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="card-body p-6">
                                    <h4 className="font-playfair text-xl font-bold text-neutral group-hover:text-primary transition-colors">
                                        Understanding Attachment Styles
                                    </h4>
                                    <p className="text-neutral/50 text-sm mt-2">How early experiences shape our adult connections.</p>
                                </div>
                            </div>
                            <div className="group card bg-base-100 border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1074&auto=format&fit=crop"
                                        alt="Mindfulness"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="card-body p-6">
                                    <h4 className="font-playfair text-xl font-bold text-neutral group-hover:text-primary transition-colors">
                                        Managing Academic Stress
                                    </h4>
                                    <p className="text-neutral/50 text-sm mt-2">Practical mindfulness tips for high-pressure seasons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
