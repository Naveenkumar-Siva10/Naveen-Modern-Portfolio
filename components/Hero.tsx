"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Pause, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const TECH_BADGES = ["FULL-STACK", "NEXT.JS", "SEO", "DIGITAL MARKETING"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current || videoError) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setVideoError(true);
          setIsPlaying(false);
        });
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* 1. True Fullscreen Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            playsInline
            loop
            muted
            preload="metadata"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          >
            <source src="/videos/hero-reel.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Fallback Dark Background Pattern when video is pending */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#121212] to-[#080808] bg-grid-pattern-dark opacity-90" />
        )}

        {/* 2. Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-90 z-[1]" />

        {/* 3. Red Ambient Lighting Accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/20 rounded-full blur-[160px] pointer-events-none z-[1]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-20 pb-16 flex flex-col justify-between h-full">
        {/* Top spacer for navbar */}
        <div className="h-12 md:h-16" />

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Intro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-white uppercase">
                HI, I&apos;M {PERSONAL_INFO.name.toUpperCase()} — FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* Main Animated Headline */}
            <div className="flex flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]"
              >
                I BUILD DIGITAL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-accent-red">
                  EXPERIENCES.
                </span>
              </motion.h1>

              {/* Identity Phrase */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-3 flex items-center gap-3 text-sm md:text-lg font-mono font-bold tracking-[0.25em] text-accent-red"
              >
                <span>BUILD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>RANK</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>GROW</span>
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl text-base md:text-lg text-gray-200 leading-relaxed font-normal"
            >
              {PERSONAL_INFO.subTitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA (Red) */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-full bg-accent-red hover:bg-accent-red-dark text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.5)] hover:shadow-[0_0_40px_rgba(229,9,20,0.8)] hover:scale-[1.02]"
              >
                VIEW MY WORK
              </a>

              {/* Secondary CTA (White / Light with Red Hover) */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full bg-white hover:bg-white text-dark-900 hover:text-accent-red font-bold text-xs md:text-sm uppercase tracking-wider border border-white hover:border-accent-red transition-all duration-300 backdrop-blur-md hover:scale-[1.02]"
              >
                LET&apos;S WORK TOGETHER
              </a>
            </motion.div>

            {/* Floating Technical Labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-2.5 pt-4"
            >
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-md bg-white/10 border border-white/20 text-[10px] md:text-xs font-mono font-bold text-white tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Circular Interactive Play Reel Control (Red Accent) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-center mt-6 lg:mt-0">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.8 }}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause showreel video" : "Play showreel video"}
              className="group relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/60 border border-white/30 backdrop-blur-xl flex flex-col items-center justify-center gap-2 text-white hover:border-accent-red transition-all duration-500 hover:shadow-[0_0_40px_rgba(229,9,20,0.5)] hover:scale-105 select-none"
            >
              {/* Outer Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-accent-red/30 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

              <div className="p-3 rounded-full bg-accent-red/20 text-accent-red group-hover:scale-110 group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </div>

              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-200 group-hover:text-white">
                {isPlaying ? "PAUSE" : "PLAY REEL"}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-between pt-6 border-t border-white/20 text-xs font-mono text-gray-300"
        >
          <div className="flex items-center gap-2">
            <a
              href="#intro"
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="uppercase tracking-widest font-semibold">SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 text-accent-red transition-transform" />
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-400 font-bold">
            <span>FULL-STACK STUDIO</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
