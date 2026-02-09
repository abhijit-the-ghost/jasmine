import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import EducationTimeline from "../components/EducationTimeline";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";
import PersonalTouch from "../components/PersonalTouch";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <AboutHero />
                <AboutIntro />
                <div className="divider mx-auto w-12 opacity-20"></div>
                <EducationTimeline />
                <ExperienceTimeline />
                <SkillsGrid />
                <PersonalTouch />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
