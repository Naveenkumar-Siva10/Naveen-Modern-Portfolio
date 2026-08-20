"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface SkillGroup {
  number: string;
  category: string;
  description: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    description: "End-to-end web applications built across frontend, backend APIs, and data layers.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js / REST APIs",
      "Database & API Integration",
    ],
  },
  {
    number: "02",
    category: "DIGITAL GROWTH",
    description: "Search engine optimization and digital marketing strategies engineered for business reach.",
    skills: [
      "SEO",
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Core Web Vitals",
      "Digital Marketing",
      "Social Media Marketing",
    ],
  },
  {
    number: "03",
    category: "DESIGN & TOOLS",
    description: "Professional design software, version control systems, and deployment workflows.",
    skills: [
      "Figma",
      "Canva",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "DaVinci Resolve",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-white border-t border-surface-border select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent-red" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
              [ WHAT I WORK WITH ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-900">
            SKILLS & EXPERTISE.
          </h2>
          <p className="max-w-2xl text-base text-gray-600 font-medium mt-1">
            A comprehensive overview of technical capabilities across full-stack development, organic search optimization, and modern workflow tools.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
              className="group flex flex-col"
            >
              {/* Column Top Metadata Header */}
              <div className="flex items-baseline justify-between border-b-2 border-dark-900 pb-3 mb-4">
                <h3 className="text-base sm:text-lg font-black tracking-wider text-dark-900 uppercase">
                  {group.category}
                </h3>
                <span className="text-3xl font-mono font-black text-gray-300 group-hover:text-accent-red transition-colors">
                  {group.number}
                </span>
              </div>

              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
                {group.description}
              </p>

              {/* Skills Editorial List */}
              <div className="flex flex-col border-t border-gray-200">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skill}
                    className="group/item relative py-3.5 border-b border-gray-200 flex items-center justify-between transition-all duration-300 hover:pl-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-red opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      <span className="text-sm font-bold text-gray-800 group-hover/item:text-dark-900 group-hover/item:font-black transition-colors">
                        {skill}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-gray-400 group-hover/item:text-accent-red font-semibold transition-colors">
                        0{skillIdx + 1}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-accent-red opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
