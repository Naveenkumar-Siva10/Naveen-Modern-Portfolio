"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="py-28 md:py-36 bg-[#f7f7f7] border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-20 text-center items-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent-red" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
              // WORKFLOW & METHODOLOGY
            </span>
            <span className="w-8 h-[2px] bg-accent-red" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-900">
            HOW I WORK.
          </h2>
          <p className="max-w-xl text-base text-gray-600 font-medium">
            A structured 4-step process driving projects from initial business discovery to high-impact digital launch.
          </p>
        </div>

        {/* Process Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gray-300" />

          {/* Animated SVG Active Progress Path */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent-red via-accent-red to-accent-red-dark shadow-[0_0_12px_#E50914] z-10"
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-20">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Timeline Node Dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-accent-red flex items-center justify-center z-30 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                  </div>

                  {/* Card Area */}
                  <div className="w-full md:w-[calc(50%-40px)] pl-16 md:pl-0">
                    <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-accent-red/50 transition-colors duration-300 shadow-md group">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-2xl font-black font-mono text-accent-red">
                          {step.step}
                        </span>
                        <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-widest">
                          STEP {idx + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-dark-900 group-hover:text-accent-red transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs font-mono font-bold text-accent-red mt-1 mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                        {step.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                        {step.deliverables.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded bg-surface border border-gray-200 text-[11px] font-mono font-semibold text-gray-700"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for grid symmetry on desktop */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
