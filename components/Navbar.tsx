"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isDarkPageHeader = pathname === "/" && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || pathname !== "/"
            ? "bg-white/90 backdrop-blur-md border-b border-surface-border py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`group flex items-center gap-1.5 text-2xl font-black tracking-tighter transition-colors select-none ${
              isDarkPageHeader ? "text-white" : "text-dark-900"
            }`}
          >
            <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            <span className="w-2 h-2 rounded-full bg-accent-red group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#E50914]" />
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className={`hidden md:flex items-center gap-8 px-6 py-2.5 rounded-full border backdrop-blur-md transition-colors ${
              isDarkPageHeader
                ? "bg-black/40 border-white/20 text-white shadow-lg"
                : "bg-surface/90 border-surface-border text-dark-900 shadow-sm"
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? isDarkPageHeader
                        ? "text-white font-extrabold"
                        : "text-accent-red font-extrabold"
                      : isDarkPageHeader
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-accent-red"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-red rounded-full shadow-[0_0_8px_#E50914]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-900 hover:bg-accent-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`md:hidden p-2.5 rounded-xl border transition-colors ${
              isDarkPageHeader
                ? "bg-black/40 border-white/20 text-white hover:text-accent-red"
                : "bg-surface border-surface-border text-dark-900 hover:text-accent-red"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Slide-Down Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-white flex flex-col justify-between p-8 pt-28 md:hidden select-none"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono text-accent-red tracking-widest uppercase">
                // NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-black tracking-tight flex items-center justify-between border-b border-gray-100 pb-3 transition-colors ${
                        isActive ? "text-accent-red" : "text-dark-900 hover:text-accent-red"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-sm font-mono text-gray-400">0{idx + 1}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-accent-red text-white text-center font-bold uppercase tracking-wider shadow-lg"
              >
                Let&apos;s Work Together
              </Link>
              <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>NAVEEN FREELANCE STUDIO</span>
                <span>BUILD • RANK • GROW</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
