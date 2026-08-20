"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, SERVICES } from "@/lib/data";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: SERVICES[0].title,
    message: "",
    permission: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim() || formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is required (min 2 chars).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Valid email address is required.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Project details required (min 10 chars).";
    }

    if (!formData.permission) {
      newErrors.permission = "Permission consent is required to contact you.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Backend integration handler placeholder
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        service: SERVICES[0].title,
        message: "",
        permission: true,
      });
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-[#050608] border-t border-surface-border overflow-hidden select-none text-white"
    >
      {/* Oversized Background Typography */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[20vw] font-black tracking-tighter text-white/[0.03] pointer-events-none select-none uppercase leading-none z-0">
        CONTACT
      </span>

      {/* Red Ambient Glow behind container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Large Red Contact Panel (Asymmetric Editorial Sheet) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-accent-red text-white p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_rgba(229,9,20,0.35)] border border-red-500/30 overflow-hidden relative"
        >
          {/* Subtle Background Pattern inside Panel */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 items-start">
            {/* Left Column: Reach Us Invitation */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-mono font-bold tracking-widest uppercase w-fit text-white">
                  [ REACH US ]
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] text-white">
                  START A PROJECT WITH NAVEEN.
                </h2>

                <p className="text-base text-red-100 leading-relaxed font-medium mt-1">
                  Have a full-stack web application, website redesign, or organic search optimization requirement? Send a message and let&apos;s discuss your business objectives.
                </p>
              </div>

              {/* Direct Info Blocks */}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/15 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-red-200 uppercase">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:underline transition-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/15 text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-red-200 uppercase">AVAILABILITY</span>
                    <span className="text-sm font-bold text-white">Accepting Full-Stack Freelance Projects</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block text-xs font-mono font-bold text-red-200 uppercase tracking-wider">
                NAVEEN FREELANCE STUDIO • FAST RESPONSE WITHIN 24 HOURS
              </div>
            </div>

            {/* Right Column: Integrated Form with Editorial Underlines */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="flex flex-col gap-1.5 relative group">
                    <label htmlFor="firstName" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Naveen"
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none placeholder-white/30 transition-colors"
                    />
                    {errors.firstName && (
                      <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1.5 relative group">
                    <label htmlFor="lastName" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Kumar"
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none placeholder-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5 relative group">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none placeholder-white/30 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="flex flex-col gap-1.5 relative group">
                    <label htmlFor="mobile" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                      MOBILE / PHONE
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none placeholder-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label htmlFor="service" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                    PROJECT TYPE / SERVICE *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-dark-900 text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5 relative group">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-white/80 uppercase tracking-widest">
                    PROJECT DETAILS / MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project requirements, timeline, and business goals..."
                    className="w-full bg-transparent border-b border-white/40 focus:border-white text-white text-base font-medium py-2.5 focus:outline-none placeholder-white/30 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Permission Consent Checkbox */}
                <div className="flex flex-col gap-2 pt-2">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.permission}
                      onChange={(e) => setFormData({ ...formData, permission: e.target.checked })}
                      className="w-4 h-4 rounded accent-white border-white/40 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-white/90 font-medium">
                      I give permission to contact me regarding this inquiry.
                    </span>
                  </label>
                  {errors.permission && (
                    <span className="text-xs text-red-200 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.permission}
                    </span>
                  )}
                </div>

                {/* Submit Status Alerts */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-white/20 border border-white/30 text-white text-sm flex items-center gap-3 font-bold"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Inquiry received! I will review your project requirements and respond shortly.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-black/30 border border-white/20 text-white text-sm flex items-center gap-3 font-bold"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-200" />
                    <span>Submission failed. Please try sending directly to {PERSONAL_INFO.email}.</span>
                  </motion.div>
                )}

                {/* Send Button (White Outlined Capsule Pill) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-4 px-8 py-3.5 rounded-full border-2 border-white bg-transparent hover:bg-white text-white hover:text-accent-red font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
