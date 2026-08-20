import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Intro />
      <Skills />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
