"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const TECH_BADGES = ["FULL-STACK", "NEXT.JS", "SEO & GROWTH", "DIGITAL MARKETING"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Continuous playback fallback handling
      });
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMutedState = !isMuted;
    videoRef.current.muted = nextMutedState;
    setIsMuted(nextMutedState);
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

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("about");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-[100svh] lg:h-screen lg:min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* 1. Fullscreen Video Background Layer (Single Video for Desktop & Mobile) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-[65%_18%] sm:object-[75%_22%] lg:object-[82%_center] transition-opacity duration-1000"
          >
            <source src="/videos/hero-reel.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Fallback Dark Background Pattern when video is pending or error */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#121212] to-[#080808] bg-grid-pattern-dark opacity-90" />
        )}

        {/* 2. Soft Directional Overlay: Dark Shield on Left for Text, Clear on Right for Face */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent z-[1]" />

        {/* 3. Subtle Red Ambient Lighting Accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/15 rounded-full blur-[160px] pointer-events-none z-[1]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-20 pb-16 flex flex-col justify-between h-full min-h-[100svh] lg:min-h-0">
        {/* Top spacer for navbar */}
        <div className="h-12 md:h-16" />

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative">
          {/* Left Column: Typography & CTAs (Strictly Constrained to Left 45% on Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 max-w-[320px] sm:max-w-[480px] lg:max-w-[620px]">
            {/* Intro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/25 backdrop-blur-md w-fit shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-white uppercase drop-shadow">
                HI, I&apos;M {PERSONAL_INFO.name.toUpperCase()} — FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <div className="flex flex-col max-w-[320px] sm:max-w-[480px] lg:max-w-[580px]">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
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
                className="mt-3 flex items-center gap-3 text-sm md:text-lg font-mono font-bold tracking-[0.25em] text-accent-red drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                <span>BUILD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>RANK</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>GROW</span>
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-xl text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
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
                className="px-8 py-4 rounded-full bg-accent-red hover:bg-accent-red-dark text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(229,9,20,0.9)] hover:scale-[1.02]"
              >
                VIEW MY WORK
              </a>

              {/* Secondary CTA (White with Red Hover) */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-8 py-4 rounded-full bg-white hover:bg-white text-dark-900 hover:text-accent-red font-bold text-xs md:text-sm uppercase tracking-wider border border-white hover:border-accent-red transition-all duration-300 backdrop-blur-md hover:scale-[1.02] shadow-md"
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
                  className="px-3 py-1 rounded-md bg-black/50 border border-white/30 text-[10px] md:text-xs font-mono font-bold text-white tracking-wider backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Circular Interactive Mute/Unmute Control */}
          <div className="absolute top-0 right-0 sm:right-2 lg:relative lg:top-0 lg:right-0 z-30 lg:col-span-5 flex justify-end items-center">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.8 }}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
              className="group relative w-12 h-12 sm:w-14 sm:h-14 lg:w-40 lg:h-40 rounded-full bg-black/60 border border-white/30 backdrop-blur-xl flex flex-col items-center justify-center gap-0.5 lg:gap-2 text-white hover:border-accent-red transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,9,20,0.5)] hover:scale-105 select-none cursor-pointer shadow-xl"
            >
              {/* Outer Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-accent-red/30 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

              <div className="p-1.5 lg:p-3 rounded-full bg-accent-red/20 text-accent-red group-hover:scale-110 group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                {isMuted ? <VolumeX className="w-5 h-5 lg:w-6 lg:h-6" /> : <Volume2 className="w-5 h-5 lg:w-6 lg:h-6" />}
              </div>

              <span className="hidden lg:block text-[11px] font-mono font-bold tracking-widest uppercase text-gray-200 group-hover:text-white">
                {isMuted ? "UNMUTE" : "MUTE"}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-between pt-6 border-t border-white/20 text-xs font-mono text-gray-300 relative"
        >
          <div className="flex items-center gap-2">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="group flex items-center gap-2 text-gray-200 hover:text-white transition-colors drop-shadow"
            >
              <span className="uppercase tracking-widest font-semibold text-[11px] md:text-xs">SCROLL TO EXPLORE ABOUT</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 text-accent-red transition-transform" />
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-300 font-bold drop-shadow">
            <span>FULL-STACK STUDIO</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
