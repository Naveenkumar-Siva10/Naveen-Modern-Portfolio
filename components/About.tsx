"use client";

import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "@/lib/data";
import { Layers, Server, Search, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#f7f7f7] border-t border-surface-border overflow-hidden">
      {/* Glow background */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group mx-auto max-w-md">
              {/* Outer Decorative Glow Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent-red/30 via-accent-red/10 to-accent-red/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portrait Frame Container */}
              <div className="relative rounded-2xl bg-white border border-gray-200 p-4 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-between p-6">
                  {/* Background grid */}
                  <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

                  {/* Top Frame Metadata */}
                  <div className="relative z-10 flex justify-between items-center text-xs font-mono text-accent-red font-bold">
                    <span>// FULL-STACK DEV</span>
                    <span>NAVEEN</span>
                  </div>

                  {/* Editorial Graphic Center */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-accent-red/20 border border-accent-red/50 flex items-center justify-center text-accent-red shadow-[0_0_30px_rgba(229,9,20,0.4)]">
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black tracking-tight text-white">NAVEEN</h4>
                      <p className="text-xs font-mono text-gray-300 tracking-widest mt-1 uppercase">
                        FULL-STACK DEVELOPER
                      </p>
                    </div>
                  </div>

                  {/* Bottom Frame Stats */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-gray-400">FRONTEND</span>
                      <span className="text-xs font-bold text-white">Next.js/React</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-gray-400">BACKEND</span>
                      <span className="text-xs font-bold text-white">APIs / Node</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-gray-400">GROWTH</span>
                      <span className="text-xs font-bold text-white">SEO & Mktg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Technical Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-xl text-xs font-mono text-dark-900 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
                <span>AVAILABLE FOR FREELANCE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
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
