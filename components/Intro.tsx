"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const STATEMENT = "I don't just build websites. I build digital presence.";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative py-28 md:py-40 bg-white border-t border-surface-border overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-12">
          {/* Section Sub-header */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent-red" />
            <span className="text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
              // PHILOSOPHY & CAPABILITIES
            </span>
          </div>

          {/* Large Word-by-Word Scroll Reveal Statement */}
          <div className="max-w-5xl">
            <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-gray-300">
              {words.map((word, idx) => {
                const start = idx / words.length;
                const end = start + 1 / words.length;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["#D1D5DB", idx >= 6 ? "#E50914" : "#080808"]
                );

                return (
                  <motion.span
                    key={idx}
                    style={{ opacity, color }}
                    className="inline-block mr-[0.25em] transition-colors duration-200"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </p>
          </div>

          {/* Editorial Grid Explanation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-surface border border-surface-border">
              <span className="text-xs font-mono text-accent-red font-bold tracking-widest">01 / FULL-STACK</span>
              <h3 className="text-lg font-black text-dark-900">Web Applications</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building responsive Next.js/React frontend interfaces integrated with performant backend APIs.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-surface border border-surface-border">
              <span className="text-xs font-mono text-accent-red font-bold tracking-widest">02 / UI/UX</span>
              <h3 className="text-lg font-black text-dark-900">Crafted Experience</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Creating intuitive, visually captivating interfaces with high-contrast editorial aesthetics.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-surface border border-surface-border">
              <span className="text-xs font-mono text-accent-red font-bold tracking-widest">03 / SEO</span>
              <h3 className="text-lg font-black text-dark-900">Organic Visibility</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Structuring technical and local SEO architecture to help your business rank on search engine results.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-surface border border-surface-border">
              <span className="text-xs font-mono text-accent-red font-bold tracking-widest">04 / MARKETING</span>
              <h3 className="text-lg font-black text-dark-900">Digital Growth</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aligning web platforms with social media marketing and growth strategies designed for lead conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
