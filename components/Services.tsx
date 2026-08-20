"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "@/lib/data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>("01");

  const toggleService = (num: string) => {
    setActiveService(activeService === num ? null : num);
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-[#f7f7f7] border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent-red" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
              // SERVICES & SOLUTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-900">
            WHAT I CAN DO FOR YOUR BUSINESS.
          </h2>
          <p className="max-w-2xl text-base text-gray-600 mt-2 font-medium">
            Tailored digital services combining full-stack web application development, search engine optimization, and digital growth marketing.
          </p>
        </div>

        {/* Horizontal Service Rows */}
        <div className="flex flex-col border-t border-gray-300">
          {SERVICES.map((service) => {
            const isOpen = activeService === service.number;

            return (
              <div
                key={service.number}
                className={`group relative border-b border-gray-300 transition-colors duration-300 ${
                  isOpen ? "bg-white" : "hover:bg-white/60"
                }`}
              >
                {/* Main Interactive Header Row */}
                <button
                  onClick={() => toggleService(service.number)}
                  onMouseEnter={() => setActiveService(service.number)}
                  className="w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none px-4"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span
                      className={`text-sm md:text-base font-mono font-extrabold transition-colors ${
                        isOpen ? "text-accent-red" : "text-gray-400 group-hover:text-accent-red"
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight transition-colors ${
                        isOpen ? "text-dark-900" : "text-gray-700 group-hover:text-dark-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 justify-between md:justify-end w-full md:w-auto">
                    <span className="text-xs md:text-sm font-medium text-gray-600 hidden sm:inline-block max-w-xs text-right">
                      {service.shortDesc}
                    </span>

                    <div
                      className={`p-3 rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-accent-red border-accent-red text-white shadow-md rotate-45"
                          : "border-gray-300 text-gray-500 group-hover:border-accent-red group-hover:text-accent-red"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Animated Expanded Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-4 px-4 md:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-gray-100">
                        <div className="md:col-span-6 flex flex-col gap-4">
                          <p className="text-base text-gray-700 leading-relaxed font-medium">
                            {service.fullDesc}
                          </p>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-red hover:underline uppercase tracking-wider mt-2"
                          >
                            <span>REQUEST THIS SERVICE</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>

                        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-gray-200 text-xs font-semibold text-dark-900 shadow-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
