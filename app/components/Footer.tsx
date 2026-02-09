"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MessageSquare, Instagram, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-secondary/5 pt-20 pb-12 relative overflow-hidden">
            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
                    {/* Column 1: Branding */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/me.jpg"
                                    alt="Jasmine Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-playfair text-3xl font-bold text-primary">
                                Jasmine
                            </span>
                        </Link>
                        <p className="text-secondary font-medium tracking-wide text-sm">
                            Helping minds grow with empathy & understanding
                        </p>
                        <p className="text-neutral/60 text-sm italic py-2 border-l-2 border-primary/20 pl-4">
                            "Psychology is not just a study; it's a way to connect and heal."
                        </p>
                        <div className="text-xs font-medium text-neutral/40 flex items-center gap-2">
                            <Image src="/rose.svg" alt="Pink Rose" width={16} height={16} /> Pink is my favorite color,
                            <Image src="/blueRose.svg" alt="Blue Rose" width={16} height={16} className="ml-1" /> blue is my lucky one.
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-playfair text-xl font-bold text-neutral">Navigation</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Projects", href: "/projects" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-neutral/70 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="space-y-6">
                        <h4 className="font-playfair text-xl font-bold text-neutral">Let's Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="mailto:jasminetiwari@gmail.com" className="btn btn-ghost btn-circle btn-sm bg-base-100 shadow-sm text-secondary hover:text-primary transition-colors">
                                <Mail size={20} />
                            </a>
                            <a href="https://wa.me/123456789" target="_blank" className="btn btn-ghost btn-circle btn-sm bg-base-100 shadow-sm text-secondary hover:text-primary transition-colors">
                                <MessageSquare size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="btn btn-ghost btn-circle btn-sm bg-base-100 shadow-sm text-secondary hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <div className="pt-4">
                            <Link
                                href="/cv"
                                className="btn btn-outline btn-primary btn-sm rounded-full px-6 font-semibold"
                            >
                                View CV
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-neutral/10 pt-8 gap-4 text-center">
                    <p className="text-sm text-neutral/50 font-medium">
                        © 2026 Jasmine. All rights reserved.
                    </p>
                    <p className="text-sm text-neutral/40 flex items-center gap-1.5 font-medium">
                        Made with <Heart size={14} className="text-primary fill-primary" /> by <a href="https://github.com/abhijit-the-ghost" target="_blank" className="text-secondary/70 hover:text-primary transition-colors hover:underline">Abhijit</a>
                    </p>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 btn btn-primary btn-circle shadow-xl shadow-primary/20 hover:scale-110 transition-transform z-40 sm:flex hidden"
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
}
