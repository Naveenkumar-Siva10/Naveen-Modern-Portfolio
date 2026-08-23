"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function StickyContactActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show actions once user has scrolled past top initial fold (120px)
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 select-none pointer-events-auto"
        >
          {/* WhatsApp Action Button */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Naveen on WhatsApp"
            className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#080808]/90 hover:bg-accent-red border border-white/20 hover:border-accent-red text-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105"
          >
            <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 text-white transition-colors">
              <MessageSquare className="w-4 h-4 text-accent-red group-hover:text-white transition-colors" />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono font-bold tracking-wider uppercase pr-1 text-gray-200 group-hover:text-white">
              WhatsApp
            </span>
          </a>

          {/* Call Action Button */}
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            aria-label="Call Naveen directly"
            className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#080808]/90 hover:bg-white border border-white/20 hover:border-white text-white hover:text-dark-900 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105"
          >
            <div className="p-1 rounded-full bg-white/10 group-hover:bg-dark-900 text-white transition-colors">
              <Phone className="w-4 h-4 text-white group-hover:text-accent-red transition-colors" />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono font-bold tracking-wider uppercase pr-1 text-gray-200 group-hover:text-dark-900">
              Call Now
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
