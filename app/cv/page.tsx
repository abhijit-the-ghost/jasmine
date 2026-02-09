"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowLeft, Printer, Download } from "lucide-react";

export default function CVPage() {
    const personalInfo = {
        name: "Jasmine Tiwari",
        title: "Psychology Student & Tutor",
        email: "jasminetiwari@gmail.com",
        phone: "+977 9748284863",
        location: "Bhaktapur, Nepal",
        summary: "Dedicated Psychology student with a passion for mental health advocacy and child development. Experienced in tutoring and academic support, with a strong foundation in psychological research and empathetic communication."
    };

    const education = [
        {
            degree: "B.A. Psychology",
            institution: "Padmakanya Multiple Campus",
            period: "2023 – Expected 2026",
            details: "Focusing on clinical psychology, child development, and research methodologies. Actively involved in the Psychology Student Association."
        },
        {
            degree: "Higher Secondary Education (+2)",
            institution: "Kathmandu Model College, Imadol, Lalitpur",
            period: "2021 – 2023",
            details: "Completed high school with a focus on Social Sciences. Developed a foundational interest in human behavior and social dynamics."
        },
        {
            degree: "Secondary Education (Grades 6 - 10)",
            institution: "Sainik Awasiya Mahavidyalaya, Sallaghari, Bhaktapur",
            period: "2016 – 2021", // Corrected timeline
            details: "Completed SEE (Secondary Education Examination). Gained strong values in discipline, teamwork, and holistic development within a residential school environment."
        },
        {
            degree: "Primary Education (Grades 1 - 5)",
            institution: "Pathshala Nepal Foundation, Baneshwor, Nepal",
            period: "2011 – 2016", // Corrected timeline
            details: "Built a solid academic foundation through progressive and experiential learning. Developed early communication skills and a curious mindset toward learning."
        }
    ];


    const experience = [
        {
            role: "Intern",
            organization: "UCEP Nepal, Sanothimi,Bhaktapur",
            period: "April 2025 - May 2025",
            description: "Providing personalized academic support to students, helping them navigate complex subjects and improve their learning strategies. Sharpened communication and empathetic listening skills."
        }
    ];

    const skills = [
        "Empathy & Active Listening",
        "Psychological Assessment",
        "Research & Data Analysis",
        "Supportive Communication",
        "Tutoring & Teaching",
        "Ethical Decision-Making",
        "Stress Management",
        "Academic Writing"
    ];

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-50 print:bg-white pb-20">
            {/* Header / Controls - Hidden on Print */}
            <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center justify-between print:hidden">
                <Link href="/" className="btn btn-ghost gap-2 text-primary hover:text-primary">
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>
                <div className="flex gap-4">
                    <button onClick={handlePrint} className="btn btn-primary gap-2 shadow-lg shadow-primary/20">
                        <Printer size={18} />
                        Print / Save as PDF
                    </button>
                </div>
            </nav>

            {/* Resume Card */}
            <main className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none border border-slate-200 print:border-none min-h-[11in] relative overflow-hidden">
                {/* Decorative Side Bar - Subtler on print */}
                <div className="absolute top-0 left-0 w-2 h-full bg-primary print:hidden"></div>

                <div className="p-12 sm:p-16">
                    {/* Header Section */}
                    <header className="border-b-2 border-slate-100 pb-10 mb-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="font-playfair text-5xl font-bold text-primary mb-2 tracking-tight">
                                    {personalInfo.name}
                                </h1>
                                <p className="text-xl text-black font-medium tracking-wide">
                                    {personalInfo.title}
                                </p>
                            </div>
                            <div className="space-y-1 text-sm text-black font-medium">
                                <div className="flex items-center gap-2">
                                    <Mail size={14} />
                                    {personalInfo.email}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone size={14} />
                                    {personalInfo.phone}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} />
                                    {personalInfo.location}
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Summary */}
                            <section>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 border-l-4 border-secondary pl-3">
                                    Professional Summary
                                </h2>
                                <p className="text-black leading-relaxed font-medium">
                                    {personalInfo.summary}
                                </p>
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 border-l-4 border-secondary pl-3">
                                    Experience
                                </h2>
                                <div className="space-y-8">
                                    {experience.map((exp, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                                                <span className="text-sm font-mono text-black font-bold italic">{exp.period}</span>
                                            </div>
                                            <p className="text-black font-bold text-sm mb-3">{exp.organization}</p>
                                            <p className="text-black/80 text-sm leading-relaxed font-medium">
                                                {exp.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 border-l-4 border-secondary pl-3">
                                    Education
                                </h2>
                                <div className="space-y-8">
                                    {education.map((edu, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="text-lg font-bold text-black">{edu.degree}</h3>
                                                <span className="text-sm font-mono text-black font-bold italic">{edu.period}</span>
                                            </div>
                                            <p className="text-black font-bold text-sm mb-3">{edu.institution}</p>
                                            <p className="text-black/80 text-sm leading-relaxed font-medium">
                                                {edu.details}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4 space-y-10">
                            {/* Skills */}
                            <section>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 border-l-4 border-primary pl-3">
                                    Key Expertise
                                </h2>
                                <div className="flex flex-wrap lg:flex-col gap-2">
                                    {skills.map((skill, idx) => (
                                        <div key={idx} className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold text-black">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Languages */}
                            <section>
                                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 border-l-4 border-primary pl-3">
                                    Languages
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-black font-bold">English</span>
                                        <span className="text-black/70 font-medium">Fluent</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-black font-bold">Nepali</span>
                                        <span className="text-black/70 font-medium">Native</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-black font-bold">Hindi</span>
                                        <span className="text-black/70 font-medium">Intermediate</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


            </main>
        </div>
    );
}
