"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check reduced motion preference or touch devices
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive-hover"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-red/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(229, 9, 20, 0.12)" : "rgba(229, 9, 20, 0)",
          borderColor: isHovered ? "rgba(229, 9, 20, 0.9)" : "rgba(229, 9, 20, 0.5)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.5,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-red pointer-events-none shadow-[0_0_8px_#E50914]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.1,
        }}
      />
    </div>
  );
}
