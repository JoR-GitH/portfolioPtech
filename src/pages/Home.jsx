import React from 'react'
import ThemeToggle from "@/components/ThemeToggle.jsx";
import StarBackground from "@/components/StarBackground.jsx";
import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import About from "@/components/About.jsx";
import SkillsSection from "@/components/SkillsSection.jsx";
import ProjectsSection from "@/components/ProjectsSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* NavBar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <About />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}

        </div>
    )
}
export default Home
