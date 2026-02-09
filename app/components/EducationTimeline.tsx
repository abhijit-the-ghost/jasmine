"use client";

export default function EducationTimeline() {
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
            details: "Completed +2 in Science stream. Built a strong foundation in biology and human physiology, which sparked my early interest in understanding the mind, behavior, and emotional processes."
        }
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

    return (
        <section className="py-24 bg-base-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
                <h2 className="font-playfair text-4xl font-bold text-secondary mb-12 text-center">My Education</h2>

                <div className="max-w-4xl mx-auto">
                    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
                        {education.map((item, index) => (
                            <li key={index}>
                                <div className="timeline-middle">
                                    <div className="w-4 h-4 rounded-full bg-secondary border-4 border-base-100 shadow-md"></div>
                                </div>
                                <div className={`${index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>
                                    <time className="font-mono italic text-primary font-bold text-sm">{item.period}</time>
                                    <div className="text-2xl font-playfair font-bold text-neutral mt-1">{item.degree}</div>
                                    <div className="text-secondary font-semibold mb-3">{item.institution}</div>
                                    <p className="text-neutral/60 leading-relaxed text-sm max-w-sm ml-auto mr-0 md:mr-auto">
                                        {item.details}
                                    </p>
                                </div>
                                {index !== education.length - 1 && <hr className="bg-secondary/20" />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
