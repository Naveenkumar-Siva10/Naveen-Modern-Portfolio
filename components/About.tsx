"use client";

import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/lib/data";
import { Layers, Server, Search, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#f7f7f7] border-t border-surface-border overflow-hidden">
      {/* Glow background */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Hanging Rope-Drop Portrait (Connected to Hero Above) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-start pt-0 sm:pt-4">
            {/* Top Anchor Ring connecting from Hero bottom */}
            <div className="relative z-20 flex flex-col items-center -mt-20 sm:-mt-32">
              <div className="w-0.5 h-16 sm:h-28 bg-dark-900 shadow-sm" />
              <div className="w-4 h-4 rounded-full bg-dark-900 border-2 border-accent-red shadow-md" />
            </div>

            {/* Hanging Motion Frame Assembly (DROP -> SWING -> SETTLE) */}
            <motion.div
              initial={{ y: -160, rotate: 14, opacity: 0 }}
              whileInView={{ y: 0, rotate: -2.5, opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 11,
                mass: 1.2,
                delay: 0.15,
              }}
              className="relative w-full max-w-sm flex flex-col items-center origin-top select-none"
            >
              {/* Vertical Rope Extension from Anchor */}
              <div className="w-0.5 h-16 sm:h-24 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 shadow-sm" />

              {/* Rope Ring Connector attached to Top of Frame */}
              <div className="w-5 h-5 rounded-full border-2 border-dark-900 bg-white flex items-center justify-center -mb-2.5 z-30 shadow-md">
                <div className="w-2 h-2 rounded-full bg-accent-red" />
              </div>

              {/* Main Editorial Portrait Frame */}
              <div className="relative group w-full">
                {/* Decorative Red Accent Glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent-red/40 via-accent-red/10 to-accent-red/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* White & Black Editorial Frame */}
                <div className="relative rounded-2xl bg-white border-2 border-dark-900 p-3.5 shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 via-dark-900 to-black text-white flex flex-col justify-between p-6">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

                    {/* Top Frame Metadata */}
                    <div className="relative z-10 flex justify-between items-center text-xs font-mono text-accent-red font-bold">
                      <span>// FULL-STACK DEV</span>
                      <span>NAVEEN</span>
                    </div>

                    {/* Editorial Graphic Center */}
                    <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-accent-red/20 border-2 border-accent-red flex items-center justify-center text-accent-red shadow-[0_0_30px_rgba(229,9,20,0.4)]">
                        <Sparkles className="w-10 h-10" />
                      </div>
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-white">NAVEEN</h4>
                        <p className="text-xs font-mono text-gray-300 tracking-widest mt-1 uppercase font-bold">
                          FULL-STACK DEVELOPER
                        </p>
                      </div>
                    </div>

                    {/* Bottom Frame Stats */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-gray-400 font-semibold">FRONTEND</span>
                        <span className="text-xs font-bold text-white">Next.js / React</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-gray-400 font-semibold">BACKEND</span>
                        <span className="text-xs font-bold text-white">APIs / Node</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-gray-400 font-semibold">GROWTH</span>
                        <span className="text-xs font-bold text-white">SEO & Mktg</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Technical Badge */}
                <div className="absolute -bottom-5 -right-2 sm:-right-4 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border-2 border-dark-900 shadow-xl text-xs font-mono text-dark-900 font-bold z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
                  <span>AVAILABLE FOR FREELANCE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6 pt-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent-red" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                // ABOUT NAVEEN
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900">
              FULL-STACK DEVELOPER & DIGITAL GROWTH SPECIALIST.
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {PERSONAL_INFO.aboutText1}
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {PERSONAL_INFO.aboutText2}
            </p>

            {/* Full-Stack Capability Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-accent-red/50 transition-colors flex flex-col gap-2 shadow-sm">
                <Layers className="w-6 h-6 text-accent-red" />
                <h4 className="text-sm font-bold text-dark-900">Frontend Stack</h4>
                <p className="text-xs text-gray-600">React, Next.js, TypeScript, Tailwind CSS responsive interfaces.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-accent-red/50 transition-colors flex flex-col gap-2 shadow-sm">
                <Server className="w-6 h-6 text-accent-red" />
                <h4 className="text-sm font-bold text-dark-900">Backend & APIs</h4>
                <p className="text-xs text-gray-600">REST APIs, server-side data handling, & backend logic.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 hover:border-accent-red/50 transition-colors flex flex-col gap-2 shadow-sm">
                <Search className="w-6 h-6 text-accent-red" />
                <h4 className="text-sm font-bold text-dark-900">SEO & Growth</h4>
                <p className="text-xs text-gray-600">Organic search optimization, keyword structure, & digital presence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
