"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Linkedin, Mail, MessageSquare, Phone, Heart } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32">
                <section className="py-20 bg-secondary/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
                            <Heart size={32} className="fill-primary/20" />
                        </div>
                        <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-neutral mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-neutral/70 max-w-2xl mx-auto leading-relaxed px-4">
                            I’d love to hear from you! Whether it's about research, tutoring,
                            or mental health projects, feel free to reach out.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-base-100">
                    <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
                        <div className="space-y-12">
                            <div className="bg-base-200/50 rounded-3xl p-12 border border-base-200">
                                <h3 className="font-playfair text-3xl font-bold text-neutral mb-8">Let's Connect</h3>
                                <div className="flex flex-col items-center gap-8">
                                    <a href="mailto:jasminetiwari@gmail.com" className="flex flex-col items-center gap-4 group">
                                        <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
                                            <Mail size={32} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral/40 uppercase tracking-widest mb-1">Send an Email</p>
                                            <p className="text-xl text-neutral font-semibold border-b-2 border-primary/20 group-hover:border-primary transition-colors">jasminetiwari@gmail.com</p>
                                        </div>
                                    </a>

                                    <div className="h-px w-24 bg-neutral/10"></div>

                                    <div className="flex items-center gap-4 opacity-50 cursor-not-allowed" title="LinkedIn Coming Soon">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                                            <Linkedin size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] font-bold text-neutral/40 uppercase tracking-widest">LinkedIn</p>
                                            <p className="text-neutral font-medium italic">Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/10 rounded-3xl p-8 border border-primary/20 backdrop-blur-sm">
                                <p className="font-caveat text-2xl text-neutral leading-relaxed flex items-center justify-center gap-3 flex-wrap">
                                    "Pink is my favorite color, blue is my lucky one — so if you see both
                                    in my replies, you know it's me!
                                    <span className="inline-flex items-center gap-1.5 ml-1">
                                        <Image src="/rose.svg" alt="Pink Rose" width={24} height={24} className="inline-block" />
                                        <Image src="/blueRose.svg" alt="Blue Rose" width={24} height={24} className="inline-block" />
                                    </span>"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
