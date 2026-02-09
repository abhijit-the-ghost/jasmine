import Header from "../../components/Header";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { ArrowLeft, BookOpen, Clock, Tag, Download } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-32">
                <section className="py-12 bg-base-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">
                        <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-sm uppercase tracking-widest mb-12 group">
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Back to Projects
                        </Link>

                        <div className="space-y-8">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="badge badge-secondary badge-outline font-bold text-[10px] uppercase">Research</span>
                                <span className="text-neutral/40 text-xs font-bold uppercase tracking-widest">2025</span>
                            </div>

                            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral leading-tight">
                                Mindfulness Intervention for Academic Stress
                            </h1>

                            <p className="text-xl text-neutral/70 leading-relaxed italic">
                                "How a 6-week mindfulness program helped high schoolers reduce exam-related anxiety and improve focus."
                            </p>

                            <div className="h-px w-full bg-neutral/10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-primary uppercase tracking-widest text-sm flex items-center gap-2">
                                        <BookOpen size={16} /> Objective
                                    </h3>
                                    <p className="text-neutral/70">
                                        To evaluate the effectiveness of school-based mindfulness meditation
                                        in reducing perceived stress and increasing attention levels among
                                        final-year secondary students.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-primary uppercase tracking-widest text-sm flex items-center gap-2">
                                        <Clock size={16} /> Methods
                                    </h3>
                                    <p className="text-neutral/70">
                                        A quantitative study involving 25 participants, utilizing the Perceived
                                        Stress Scale (PSS) and weekly 15-minute guided sessions.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8">
                                <h2 className="font-playfair text-3xl font-bold text-neutral underline decoration-primary/30 decoration-4 underline-offset-8">Results & Findings</h2>
                                <div className="prose prose-neutral max-w-none text-neutral/70">
                                    <p>
                                        Data analysis revealed a statistically significant reduction in PSS scores
                                        following the intervention. Qualitative feedback from participants also
                                        indicated improved sleep quality and a more positive approach to study breaks.
                                    </p>
                                    <p className="mt-4">
                                        Key findings included:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 mt-4">
                                        <li>28% reduction in overall perceived stress.</li>
                                        <li>Significant increase in 'present-moment awareness' reported by 18 out of 25 students.</li>
                                        <li>Correlation found between consistent daily practice and lower pre-exam heart rates.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-secondary/5 rounded-3xl p-8 sm:p-12 border border-secondary/10 mt-12">
                                <h3 className="font-playfair text-2xl font-bold text-secondary mb-4">Reflections</h3>
                                <p className="text-neutral/70 italic leading-relaxed">
                                    "This project taught me the importance of practical, low-barrier
                                    interventions in school settings. It deepened my commitment to
                                    making mental health tools accessible to everyone, regardless of
                                    their background or schedule."
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-neutral/10">
                                <div className="flex gap-3">
                                    <span className="badge badge-lg bg-primary/10 text-primary border-none font-bold text-xs">SPSS Analysis</span>
                                    <span className="badge badge-lg bg-primary/10 text-primary border-none font-bold text-xs">Program Design</span>
                                </div>
                                <button className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20">
                                    <Download size={18} className="mr-2" />
                                    Download Full PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
