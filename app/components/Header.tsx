"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, FileText, Download } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [theme, setTheme] = useState("psychbloom");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // Load theme from localStorage
        const savedTheme = localStorage.getItem("jasmine-theme") || "psychbloom";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "psychbloom" ? "psychbloom-dark" : "psychbloom";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("jasmine-theme", newTheme);
    };

    const pathname = usePathname();
    const isLinkActive = (href: string) => pathname === href;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${isScrolled
                ? "bg-base-100/80 backdrop-blur-md shadow-sm border-b border-primary/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-primary/20">
                        <Image
                            src="/me.jpg"
                            alt="Jasmine Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-playfair text-xl sm:text-2xl font-bold text-neutral group-hover:text-primary transition-colors">
                        Jasmine
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`transition-colors relative group ${isLinkActive(link.href)
                                        ? "text-primary font-bold"
                                        : "text-neutral/80 hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${isLinkActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                                        }`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 ml-4">
                        <button
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle btn-sm text-neutral hover:text-primary transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === "psychbloom-dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link
                            href="/cv"
                            className="btn btn-outline btn-primary btn-sm rounded-full px-6 font-semibold"
                        >
                            <FileText size={16} className="mr-2" />
                            CV
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle btn-sm text-neutral"
                        aria-label="Toggle Theme"
                    >
                        {theme === "psychbloom-dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        className="btn btn-ghost btn-circle btn-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-base-100 shadow-xl border-t border-base-200 animate-slideDown">
                    <ul className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`block px-8 py-4 transition-colors text-base font-medium border-l-4 ${isLinkActive(link.href)
                                        ? "bg-primary/10 text-primary border-primary font-bold"
                                        : "hover:bg-primary/5 hover:text-primary border-transparent text-neutral/80"
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="px-8 py-4 border-t border-base-200 flex items-center justify-between">
                            <Link
                                href="/cv"
                                className="btn btn-primary btn-sm rounded-full w-full justify-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Download size={16} className="mr-2" />
                                View CV
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
