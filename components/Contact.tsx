"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, SERVICES } from "@/lib/data";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, Phone, Send } from "lucide-react";

interface ContactProps {
  isStandalone?: boolean;
}

export default function Contact({ isStandalone = false }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    service: SERVICES[0]?.title || "Full-Stack Web Development",
    message: "",
    permission: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    if (!fullName || fullName.length < 2) {
      newErrors.firstName = "Name is required (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Valid email address is required.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your project (minimum 10 characters).";
    }

    if (!formData.permission) {
      newErrors.permission = "Consent is required to contact you.";
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
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          service: SERVICES[0]?.title || "Full-Stack Web Development",
          message: "",
          permission: true,
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Submission failed. Please try again or email directly.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(`Unable to connect to the server. Please email directly to ${PERSONAL_INFO.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative w-full ${isStandalone ? "pt-12 pb-24 md:pb-36" : "py-24 md:py-36"} bg-[#050608] border-t border-surface-border text-white`}
    >
      {/* Background Typography */}
      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[18vw] font-black tracking-tighter text-white/[0.03] pointer-events-none select-none uppercase leading-none z-0">
        CONTACT
      </span>

      {/* Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/10 rounded-full blur-[220px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Contact Container Sheet - Naturally Positioned & Fully Visible */}
        <div className="rounded-3xl bg-accent-red text-white p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_25px_60px_rgba(229,9,20,0.35)] border border-red-500/30 relative">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none rounded-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-start">
            {/* Left Column: Heading, Info & Conversion Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-mono font-bold tracking-widest uppercase w-fit text-white">
                  [ REACH NAVEEN ]
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.08] text-white">
                  START A PROJECT WITH NAVEEN.
                </h2>

                <p className="text-sm sm:text-base text-red-100 leading-relaxed font-medium mt-1">
                  Looking for custom full-stack web development, Google & Meta Ads lead generation, On-Page SEO, or Google Business Profile optimization? Let&apos;s discuss your business objectives and build a high-converting solution.
                </p>
              </div>

              {/* Direct Conversion Action Buttons (WhatsApp & Email) */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-red-200">
                  // FAST DIRECT CHANNELS
                </span>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Direct Action Button */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-white text-dark-900 font-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border border-white/40"
                  >
                    <MessageSquare className="w-4 h-4 text-accent-red group-hover:text-white transition-colors" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>

                  {/* Email Direct Action Button */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-black/60 text-white font-black text-xs uppercase tracking-wider hover:bg-white hover:text-dark-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border border-white/30"
                  >
                    <Mail className="w-4 h-4 text-red-300 group-hover:text-accent-red transition-colors" />
                    <span>EMAIL DIRECTLY</span>
                  </a>
                </div>
              </div>

              {/* Direct Details Display Block */}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/20">
                {/* WhatsApp Phone Info */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/15 text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-red-200 uppercase">WHATSAPP / PHONE</span>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:underline transition-all"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/15 text-white shrink-0">
                    <Mail className="w-4 h-4" />
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
              </div>

              <div className="text-xs font-mono font-bold text-red-200 uppercase tracking-wider">
                NAVEEN FREELANCE STUDIO • FAST RESPONSE WITHIN 24 HOURS
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 bg-black/20 p-6 sm:p-8 rounded-2xl border border-white/15 backdrop-blur-sm">
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="firstName" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Naveen"
                      className="w-full bg-black/30 border border-white/25 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none placeholder-white/30 transition-colors"
                    />
                    {errors.firstName && (
                      <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="lastName" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Kumar"
                      className="w-full bg-black/30 border border-white/25 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none placeholder-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-black/30 border border-white/25 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none placeholder-white/30 transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone / Mobile */}
                  <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="mobile" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                      PHONE / WHATSAPP NUMBER
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full bg-black/30 border border-white/25 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none placeholder-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Requirement */}
                <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="service" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                    PRIMARY SERVICE REQUIRED *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-dark-900 border border-white/30 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-dark-900 text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5 relative">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-white/90 uppercase tracking-wider">
                    PROJECT DETAILS & GOALS *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your business, website goals, target audience, timeline, and budget..."
                    className="w-full bg-black/30 border border-white/25 rounded-xl px-4 py-2.5 text-white text-sm focus:border-white focus:outline-none placeholder-white/30 transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-200 font-bold flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Permission Consent Checkbox */}
                <div className="flex flex-col gap-1 pt-1">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.permission}
                      onChange={(e) => setFormData({ ...formData, permission: e.target.checked })}
                      className="w-4 h-4 rounded accent-white border-white/40 focus:ring-0 cursor-pointer"
                    />
                    <span className="text-xs text-white/90 font-medium">
                      I agree to receive a response regarding this project inquiry.
                    </span>
                  </label>
                  {errors.permission && (
                    <span className="text-xs text-red-200 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.permission}
                    </span>
                  )}
                </div>

                {/* Submit Feedback Banners */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-white text-dark-900 text-sm flex items-center gap-3 font-bold shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-red shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-black/60 border border-white/30 text-white text-sm flex items-center gap-3 font-bold"
                  >
                    <AlertCircle className="w-5 h-5 text-red-300 shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-dark-900 text-dark-900 hover:text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.02] cursor-pointer disabled:opacity-50 border-2 border-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-accent-red" />
                        <span>PROCESSING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <Send className="w-4 h-4 text-accent-red group-hover:text-white transition-colors" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
