"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Sparkles, Layers, Search, Wrench, ArrowUpRight } from "lucide-react";

interface SkillCardData {
  id: number;
  number: string;
  category: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  rotation: string;
  offset: string;
}

const CARDS_DATA: SkillCardData[] = [
  {
    id: 0,
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    icon: Layers,
    description: "Building responsive web applications across frontend UI, server-side APIs, and data-driven functionality.",
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
    rotation: "lg:rotate-[-2.5deg]",
    offset: "lg:translate-y-0",
  },
  {
    id: 1,
    number: "02",
    category: "FRONTEND & UI",
    icon: Sparkles,
    description: "Creating responsive interfaces, reusable component systems, modern layouts, and polished user experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    rotation: "lg:rotate-[2deg]",
    offset: "lg:translate-y-8",
  },
  {
    id: 2,
    number: "03",
    category: "SEO & DIGITAL GROWTH",
    icon: Search,
    description: "Improving online visibility through technical SEO architecture, keyword strategy, and digital marketing.",
    skills: [
      "SEO",
      "Technical SEO",
      "On-Page SEO",
      "Keyword Research",
      "Core Web Vitals",
      "Digital Marketing",
      "Social Media Marketing",
    ],
    rotation: "lg:rotate-[3deg]",
    offset: "lg:-translate-y-4",
  },
  {
    id: 3,
    number: "04",
    category: "TOOLS & DEPLOYMENT",
    icon: Wrench,
    description: "Working with modern software engineering, design tools, version control, and cloud deployment workflows.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Figma",
      "Canva",
      "VS Code",
      "DaVinci Resolve",
    ],
    rotation: "lg:rotate-[-3deg]",
    offset: "lg:translate-y-6",
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  // Track scroll progress exclusively through the Skills section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.3"],
  });

  // Calculate active card strictly from scroll progress (0-25%, 25-50%, 50-75%, 75-100%)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveCard(0);
    } else if (latest < 0.5) {
      setActiveCard(1);
    } else if (latest < 0.75) {
      setActiveCard(2);
    } else {
      setActiveCard(3);
    }
  });

  const headlineWords = "WHAT I BUILD WITH.".split(" ");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-[#f7f7f7] border-t border-surface-border overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header with Synchronized Typography */}
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent-red" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                [ SKILLS & EXPERTISE ]
              </span>
            </div>

            {/* Synchronized Active Category Eyebrow Tag */}
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="px-3.5 py-1 rounded-full bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-mono font-bold"
            >
              FOCUS: {CARDS_DATA[activeCard].number} — {CARDS_DATA[activeCard].category}
            </motion.div>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-dark-900 leading-[1.05]">
              {headlineWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl mt-1"
          >
            Turning ideas into performant, full-stack digital experiences. (Scroll to explore stack)
          </motion.p>
        </div>

        {/* Asymmetrical 4 Floating Skill Cards Area */}
        <div className="relative">
          {/* Background Connecting Dotted Lines (Desktop Only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 opacity-40">
            <path
              d="M 250 150 Q 550 50, 850 180"
              fill="none"
              stroke="#E50914"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 850 250 Q 600 450, 250 550"
              fill="none"
              stroke="#080808"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 250 650 Q 550 750, 850 650"
              fill="none"
              stroke="#E50914"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Cards Grid / Asymmetrical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {CARDS_DATA.map((card) => {
              const isActive = activeCard === card.id;
              const IconComp = card.icon;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 80, rotate: 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    type: "spring",
                    stiffness: 75,
                    damping: 12,
                    delay: card.id * 0.15,
                  }}
                  className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-[1.01] ${card.rotation} ${card.offset} ${
                    isActive
                      ? "bg-accent-red text-white shadow-[0_20px_50px_rgba(229,9,20,0.35)] scale-[1.03] z-20 border-2 border-accent-red"
                      : "bg-white text-dark-900 border border-gray-200 shadow-xl z-10"
                  }`}
                >
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl transition-colors ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-accent-red/10 text-accent-red"
                        }`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-surface border border-gray-200 text-dark-900"
                        }`}
                      >
                        {card.number}
                      </span>
                    </div>

                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isActive
                          ? "text-white translate-x-1 -translate-y-1"
                          : "text-gray-400"
                      }`}
                    />
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight mb-3 transition-colors ${
                      isActive ? "text-white" : "text-dark-900"
                    }`}
                  >
                    {card.category}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 font-medium transition-colors ${
                      isActive ? "text-red-100" : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Skill Items List */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-current/15">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          isActive
                            ? "bg-white/20 border border-white/30 text-white font-bold"
                            : "bg-surface border border-gray-200 text-gray-800 font-semibold"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
