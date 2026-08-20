"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 md:py-40 bg-[#050608] border-t border-surface-border overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-red/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red/15 border border-accent-red/40 text-accent-red text-xs font-mono font-bold tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO GROW YOUR DIGITAL PRESENCE?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-4xl"
        >
          HAVE A PROJECT IN MIND?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-accent-red">
            LET&apos;S BUILD IT.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-gray-300 mt-6 mb-10 leading-relaxed font-normal"
        >
          Whether you need a modern full-stack web application, high-converting landing page, or strategic search engine optimization, let&apos;s turn your vision into a performant digital asset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-accent-red hover:bg-accent-red-dark text-white font-black text-sm md:text-base uppercase tracking-widest transition-all duration-300 shadow-[0_0_40px_rgba(229,9,20,0.5)] hover:shadow-[0_0_60px_rgba(229,9,20,0.8)] hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
