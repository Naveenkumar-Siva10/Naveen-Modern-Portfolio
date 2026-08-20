"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, SERVICES } from "@/lib/data";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, User, Briefcase } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICES[0].title,
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service category.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please include a project message (at least 10 characters).";
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
        name: "",
        email: "",
        service: SERVICES[0].title,
        message: "",
      });
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent-red" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                  // CONTACT & INQUIRIES
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900">
                LET&apos;S WORK TOGETHER.
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-medium mt-2">
                Have a full-stack web application, website redesign, or search engine optimization requirement? Send a message and let&apos;s discuss your business objectives.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-gray-200">
                <div className="p-3 rounded-lg bg-accent-red/10 text-accent-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-dark-900 hover:text-accent-red transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-gray-200">
                <div className="p-3 rounded-lg bg-accent-red/10 text-accent-red">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-gray-500 uppercase">AVAILABILITY</span>
                  <span className="text-sm font-bold text-dark-900">Accepting Full-Stack Freelance Projects</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
              NAVEEN FREELANCE STUDIO • FAST RESPONSE WITHIN 24 HOURS
            </div>
          </div>

          {/* Right Column: Backend-Ready Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-xl relative">
              <h3 className="text-xl font-black text-dark-900 mb-6 flex items-center gap-2">
                <span>START A CONVERSATION</span>
                <span className="w-2 h-2 rounded-full bg-accent-red" />
              </h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-dark-900 uppercase flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-accent-red" />
                    <span>YOUR NAME *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3.5 rounded-xl bg-surface border ${
                      errors.name ? "border-red-500" : "border-gray-200 focus:border-accent-red"
                    } text-dark-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-accent-red transition-colors font-medium`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-dark-900 uppercase flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-accent-red" />
                    <span>YOUR EMAIL *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-surface border ${
                      errors.email ? "border-red-500" : "border-gray-200 focus:border-accent-red"
                    } text-dark-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-accent-red transition-colors font-medium`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-mono font-bold text-dark-900 uppercase flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-accent-red" />
                    <span>PROJECT TYPE / SERVICE *</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-gray-200 text-dark-900 text-sm focus:outline-none focus:border-accent-red transition-colors font-medium"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-white text-dark-900">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-dark-900 uppercase flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-accent-red" />
                    <span>PROJECT DETAILS / MESSAGE *</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your full-stack requirements, timeline, and goals..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-surface border ${
                      errors.message ? "border-red-500" : "border-gray-200 focus:border-accent-red"
                    } text-dark-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-accent-red transition-colors resize-none font-medium`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Notification Status */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-3 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600" />
                    <span>Inquiry received! I will review your project requirements and respond shortly.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3 font-medium"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                    <span>Submission failed. Please try sending directly to {PERSONAL_INFO.email}.</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-accent-red hover:bg-accent-red-dark disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.3)] flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>VALIDATING & SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
