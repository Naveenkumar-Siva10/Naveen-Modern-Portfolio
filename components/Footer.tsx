"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050608] border-t border-surface-border pt-20 pb-12 overflow-hidden text-white">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-red/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16 relative z-10">
        {/* Top Metadata & Navigation Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent-red uppercase">
              <span>// NAVEEN FREELANCE STUDIO</span>
            </div>
            <p className="text-sm text-gray-300 max-w-md leading-relaxed font-medium">
              Full-Stack Developer & Digital Marketing Specialist based in New Perungalathur, Chennai. Combining modern web engineering, Google & Meta Ads, On-Page SEO, and local growth systems to generate business enquiries.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap justify-between items-center gap-6">
            {/* Quick Links */}
            <div className="flex flex-wrap gap-5 text-xs font-mono tracking-widest uppercase font-bold text-gray-300">
              <Link href="/" className="hover:text-accent-red transition-colors">Home</Link>
              <Link href="/about" className="hover:text-accent-red transition-colors">About</Link>
              <Link href="/services" className="hover:text-accent-red transition-colors">Services</Link>
              <Link href="/work" className="hover:text-accent-red transition-colors">Work</Link>
              <Link href="/contact" className="hover:text-accent-red transition-colors">Contact</Link>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-wider transition-colors cursor-pointer font-semibold"
            >
              <span>BACK TO TOP</span>
              <div className="p-2 rounded-full bg-white/10 group-hover:bg-accent-red group-hover:text-white transition-all">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Massive Branding Typography */}
        <div className="text-center py-4 select-none">
          <h1 className="text-[15vw] sm:text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-800/20 drop-shadow-[0_0_50px_rgba(229,9,20,0.2)]">
            NAVEEN.
          </h1>
        </div>

        {/* Direct Contact Conversion Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-red">READY TO GROW?</span>
            <span className="text-sm font-semibold text-white">Let&apos;s build your website and accelerate your customer enquiries.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red hover:bg-accent-red-dark text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-dark-900 hover:bg-gray-200 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Links & Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-gray-400 font-semibold">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-red transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-red transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 hover:text-accent-red transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-red transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
            <span>Based in New Perungalathur, Chennai, India</span>
            <span className="hidden sm:inline">•</span>
            <span>© {currentYear} NAVEEN. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
