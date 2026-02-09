import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutIntro from "./components/AboutIntro";
import Strengths from "./components/Strengths";
import ProjectsTeaser from "./components/ProjectsTeaser";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutIntro />
        <Strengths />
        <ProjectsTeaser />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
