import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <main className="bg-background text-foreground flex flex-col home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
