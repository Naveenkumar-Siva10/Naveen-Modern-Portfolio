"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 bg-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent-red" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                // PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-900">
              SELECTED WORK.
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-600 font-medium">
            Real full-stack web solutions engineered for business growth, application craftsmanship, and digital performance.
          </p>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Project Image Frame */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-2xl bg-surface border border-gray-200 overflow-hidden group-hover:border-accent-red transition-colors duration-500 shadow-lg">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Light Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>

                    {/* Category Floating Badge */}
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 border border-gray-200 backdrop-blur-md text-xs font-mono font-bold text-accent-red shadow-sm">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-accent-red tracking-widest uppercase">
                      0{index + 1} / FEATURED PROJECT
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-dark-900 group-hover:text-accent-red transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {project.shortDescription}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-surface border border-gray-200 text-xs font-mono font-bold text-dark-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <a
                      href={project.link || "#contact"}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-dark-900 hover:bg-accent-red text-white text-xs font-bold uppercase tracking-wider border border-dark-900 hover:border-accent-red transition-all duration-300 shadow-md group-hover:shadow-[0_0_25px_rgba(229,9,20,0.3)]"
                    >
                      <span>VIEW PROJECT DETAILS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
