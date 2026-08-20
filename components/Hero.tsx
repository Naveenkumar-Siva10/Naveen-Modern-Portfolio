"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const TECH_BADGES = ["FULL-STACK", "NEXT.JS", "SEO & GROWTH", "DIGITAL MARKETING"];

export default function Hero() {
  const videoRefDesktop = useRef<HTMLVideoElement | null>(null);
  const videoRefMobile = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileViewport(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const activeVideo = isMobileViewport ? videoRefMobile.current : videoRefDesktop.current;
    if (activeVideo) {
      activeVideo.muted = isMuted;
      activeVideo.play().catch(() => {
        // Continuous playback fallback handling
      });
    }
  }, [isMuted, isMobileViewport]);

  const toggleMute = () => {
    const activeVideo = isMobileViewport ? videoRefMobile.current : videoRefDesktop.current;
    const nextMutedState = !isMuted;
    if (activeVideo) activeVideo.muted = nextMutedState;
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
    <section id="hero" className="relative w-full overflow-hidden bg-dark-900">
      {/* ================================================== */}
      {/* MOBILE HERO (Rendered strictly for viewport < 1024px) */}
      {/* ================================================== */}
      <div className="block lg:hidden relative w-full h-auto min-h-[100svh] flex flex-col justify-between overflow-hidden">
        {/* Mobile Dedicated Video Background Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {!videoError ? (
            <div className="absolute inset-0 w-full h-full transform scale-[1.3] origin-[65%_15%] translate-x-[8%] -translate-y-[2%]">
              <video
                ref={videoRefMobile}
                autoPlay
                playsInline
                loop
                muted
                preload="auto"
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover object-[65%_12%] sm:object-[72%_18%]"
              >
                <source src="/videos/hero-reel.mp4" type="video/mp4" />
              </video>
            </div>
          ) : null}

          {/* Fallback Pattern */}
          {videoError && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#121212] to-[#080808] bg-grid-pattern-dark opacity-90" />
          )}

          {/* Directional Overlay: Dark on Top for Text, Transparent Center-Right for Face */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-black/70 z-[1]" />

          {/* Ambient Lighting */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-red/15 rounded-full blur-[120px] pointer-events-none z-[1]" />
        </div>

        {/* Mobile Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pt-20 pb-12 flex flex-col justify-between min-h-[100svh]">
          {/* Top spacer for navbar */}
          <div className="h-10" />

          {/* Mobile Main Content */}
          <div className="flex flex-col gap-5 my-auto relative pt-4">
            {/* Intro Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/25 backdrop-blur-md w-fit shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-white uppercase drop-shadow">
                HI, I&apos;M {PERSONAL_INFO.name.toUpperCase()} — FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* Mobile H1 Headline: Constrained width so text overlays shoulder/body, not eyes */}
            <div className="flex flex-col max-w-[320px] sm:max-w-[440px]">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[38px] sm:text-[54px] font-black tracking-tight text-white leading-[1.04] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
              >
                I BUILD DIGITAL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-accent-red">
                  EXPERIENCES.
                </span>
              </motion.h1>

              {/* Identity Phrase */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-2.5 flex items-center gap-2.5 text-xs sm:text-base font-mono font-bold tracking-[0.2em] text-accent-red drop-shadow"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="max-w-md text-sm sm:text-base text-white font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
            >
              {PERSONAL_INFO.subTitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-full bg-accent-red text-center hover:bg-accent-red-dark text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.6)]"
              >
                VIEW MY WORK
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-full bg-white text-center text-dark-900 hover:text-accent-red font-bold text-xs uppercase tracking-wider border border-white transition-all duration-300 backdrop-blur-md shadow-md"
              >
                LET&apos;S WORK TOGETHER
              </a>
            </motion.div>

            {/* Technical Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md bg-black/60 border border-white/30 text-[10px] font-mono font-bold text-white tracking-wider backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Floating Mobile Mute Button */}
          <div className="absolute top-18 right-4 sm:top-22 sm:right-6 z-30">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.6 }}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
              className="group relative w-12 h-12 rounded-full bg-black/60 border border-white/30 backdrop-blur-xl flex items-center justify-center text-white hover:border-accent-red transition-all duration-300 shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 rounded-full border border-accent-red/30 pointer-events-none" />
              <div className="p-1.5 rounded-full bg-accent-red/20 text-accent-red">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </div>
            </motion.button>
          </div>

          {/* Mobile Bottom Scroll Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-between pt-4 border-t border-white/20 text-[11px] font-mono text-gray-300 relative"
          >
            <a
              href="#about"
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors drop-shadow font-semibold uppercase tracking-widest"
            >
              <span>SCROLL TO EXPLORE ABOUT</span>
              <ArrowDown className="w-3.5 h-3.5 text-accent-red" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================================================== */}
      {/* DESKTOP HERO (Rendered strictly for viewport >= 1024px) */}
      {/* ================================================== */}
      <div className="hidden lg:flex relative w-full h-screen min-h-[100svh] items-center justify-center overflow-hidden">
        {/* Desktop Video Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {!videoError ? (
            <div className="absolute inset-0 w-full h-full transform scale-[1.22] origin-right translate-x-[16%]">
              <video
                ref={videoRefDesktop}
                autoPlay
                playsInline
                loop
                muted
                preload="auto"
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover object-[98%_center] transition-opacity duration-1000"
              >
                <source src="/videos/hero-reel.mp4" type="video/mp4" />
              </video>
            </div>
          ) : null}

          {/* Desktop Overlay: Left Dark Shield for Text, Transparent Right Zone for Face */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-[1]" />

          {/* Desktop Ambient Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-red/15 rounded-full blur-[160px] pointer-events-none z-[1]" />
        </div>

        {/* Desktop Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full pt-20 pb-16 flex flex-col justify-between h-full">
          <div className="h-16" />

          <div className="grid grid-cols-12 gap-8 items-center my-auto relative">
            {/* Left 45% Text Zone */}
            <div className="col-span-7 flex flex-col gap-6 max-w-[620px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/25 backdrop-blur-md w-fit shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
                <span className="text-sm font-bold tracking-widest text-white uppercase drop-shadow">
                  HI, I&apos;M {PERSONAL_INFO.name.toUpperCase()} — FULL-STACK DEVELOPER
                </span>
              </motion.div>

              <div className="flex flex-col max-w-[580px]">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-8xl font-black tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                >
                  I BUILD DIGITAL
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-accent-red">
                    EXPERIENCES.
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-3 flex items-center gap-3 text-lg font-mono font-bold tracking-[0.25em] text-accent-red drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                >
                  <span>BUILD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>RANK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span>GROW</span>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-xl text-lg text-white font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
              >
                {PERSONAL_INFO.subTitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 pt-2"
              >
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="px-8 py-4 rounded-full bg-accent-red hover:bg-accent-red-dark text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_rgba(229,9,20,0.9)] hover:scale-[1.02]"
                >
                  VIEW MY WORK
                </a>

                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-full bg-white hover:bg-white text-dark-900 hover:text-accent-red font-bold text-sm uppercase tracking-wider border border-white hover:border-accent-red transition-all duration-300 backdrop-blur-md hover:scale-[1.02] shadow-md"
                >
                  LET&apos;S WORK TOGETHER
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-wrap gap-2.5 pt-4"
              >
                {TECH_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-md bg-black/50 border border-white/30 text-xs font-mono font-bold text-white tracking-wider backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Desktop Mute Control Column */}
            <div className="col-span-5 flex justify-end items-center">
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.8 }}
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute showreel audio" : "Mute showreel audio"}
                className="group relative w-40 h-40 rounded-full bg-black/60 border border-white/30 backdrop-blur-xl flex flex-col items-center justify-center gap-2 text-white hover:border-accent-red transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,9,20,0.5)] hover:scale-105 select-none cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 rounded-full border border-accent-red/30 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

                <div className="p-3 rounded-full bg-accent-red/20 text-accent-red group-hover:scale-110 group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </div>

                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-200 group-hover:text-white">
                  {isMuted ? "UNMUTE" : "MUTE"}
                </span>
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-between pt-6 border-t border-white/20 text-xs font-mono text-gray-300 relative"
          >
            <a
              href="#about"
              onClick={scrollToAbout}
              className="group flex items-center gap-2 text-gray-200 hover:text-white transition-colors drop-shadow"
            >
              <span className="uppercase tracking-widest font-semibold">SCROLL TO EXPLORE ABOUT</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 text-accent-red transition-transform" />
            </a>

            <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-gray-300 font-bold drop-shadow">
              <span>FULL-STACK STUDIO</span>
              <span>•</span>
              <span>2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
