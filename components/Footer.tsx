"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

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
        {/* Top Metadata Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-wrap gap-4 text-xs font-mono tracking-widest text-gray-400 uppercase font-semibold">
            <span>FULL-STACK DEVELOPMENT</span>
            <span>•</span>
            <span>SEO</span>
            <span>•</span>
            <span>DIGITAL MARKETING</span>
            <span>•</span>
            <span>DIGITAL EXPERIENCES</span>
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

        {/* Massive Branding Typography */}
        <div className="text-center py-4 select-none">
          <h1 className="text-[15vw] sm:text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-800/20 drop-shadow-[0_0_50px_rgba(229,9,20,0.2)]">
            NAVEEN.
          </h1>
        </div>

        {/* Social Links & Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-xs font-mono text-gray-400 font-semibold">
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
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent-red transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          <div>
            © {currentYear} NAVEEN. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
