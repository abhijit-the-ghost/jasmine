"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-base-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
                <div className="bg-primary/5 rounded-3xl p-12 sm:p-20 border border-primary/10 relative overflow-hidden group">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -ml-16 -mb-16 transition-transform duration-700 group-hover:scale-150"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-neutral">
                            Interested in collaboration, tutoring, or research assistance?
                        </h2>

                        <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
                            I'm always open to discussing new opportunities, research ideas, or just having a
                            chat about psychology and mental health. Let's connect!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="btn btn-primary btn-lg rounded-full px-12 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                            >
                                Let's Connect
                                <MessageCircle size={20} className="ml-2" />
                            </Link>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-neutral/60">
                            <span>Email me at <a href="mailto:jasminetiwari@gmail.com" className="text-primary hover:underline">jasminetiwari@gmail.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
