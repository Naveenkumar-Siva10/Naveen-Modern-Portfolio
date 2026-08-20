"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t border-surface-border overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[2px] bg-accent-red" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
              // EXPERTISE & TECH STACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900">
            SKILLS & TOOLKITS.
          </h2>
        </div>
        <p className="text-sm font-mono text-gray-500 font-medium">
          HOVER / SWIPE TO EXPLORE FULL STACK
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex flex-col gap-6">
        {SKILL_CATEGORIES.map((category, catIdx) => {
          const marqueeItems = [...category.items, ...category.items, ...category.items, ...category.items];
          const isReverse = catIdx % 2 !== 0;

          return (
            <div key={category.title} className="relative flex flex-col gap-2">
              {/* Category Label */}
              <div className="max-w-7xl mx-auto px-6 md:px-10 w-full mb-1">
                <span className="text-xs font-mono font-bold text-accent-red tracking-widest uppercase">
                  [{category.title}]
                </span>
              </div>

              {/* Horizontal Marquee Row */}
              <div className="group relative w-full overflow-hidden flex py-2.5 bg-surface border-y border-surface-border">
                {/* Gradient Fades on Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                  className={`flex items-center gap-6 whitespace-nowrap ${
                    isReverse ? "animate-marquee-reverse" : "animate-marquee"
                  } group-hover:[animation-play-state:paused]`}
                >
                  {marqueeItems.map((item, itemIdx) => (
                    <div
                      key={`${item}-${itemIdx}`}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-accent-red hover:bg-accent-red/5 transition-all duration-300 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-red" />
                      <span className="text-sm md:text-base font-bold text-dark-900 tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
