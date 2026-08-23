"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring without triggering React component re-renders
  const springX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Check reduced motion preference or touch devices
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Disable custom cursor on touch devices for maximum performance
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    let isVisibleState = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisibleState) {
        isVisibleState = true;
        setIsVisible(true);
      }

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

    const onMouseLeave = () => {
      isVisibleState = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleState = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-red/60 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: isHovered ? -24 : -16,
          translateY: isHovered ? -24 : -16,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(229, 9, 20, 0.12)" : "rgba(229, 9, 20, 0)",
          borderColor: isHovered ? "rgba(229, 9, 20, 0.9)" : "rgba(229, 9, 20, 0.5)",
        }}
      />
      {/* Direct Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-red pointer-events-none shadow-[0_0_8px_#E50914]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: -4,
          translateY: -4,
          scale: isHovered ? 1.5 : 1,
        }}
      />
    </div>
  );
}
