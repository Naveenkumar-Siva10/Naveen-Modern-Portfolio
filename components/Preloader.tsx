"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check reduced motion preference safely on client
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsLoading(false);
      return;
    }

    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808] select-none pointer-events-auto"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

          {/* Glowing ambient light */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-red/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter">
              {/* Background Dark Text */}
              <span className="text-gray-800/80 block select-none">
                NAVEEN.
              </span>

              {/* Animated Foreground Fill Text */}
              <motion.span
                initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                animate={{
                  clipPath: [
                    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                  ],
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.2,
                }}
                className="absolute inset-0 block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-accent-red drop-shadow-[0_0_20px_rgba(229,9,20,0.6)] select-none"
              >
                NAVEEN.
              </motion.span>
            </div>

            {/* Tagline Shutter Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 flex items-center gap-3 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gray-400"
            >
              <span>BUILD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              <span>RANK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              <span>GROW</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
