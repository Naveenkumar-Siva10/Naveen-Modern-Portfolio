import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { SERVICES, PERSONAL_INFO } from "@/lib/data";
import { CheckCircle2, ArrowRight, ArrowUpRight, MessageSquare, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Full-Stack Development, Paid Ads, SEO & Lead Generation | Naveen",
  description:
    "Explore Naveen's 7 core digital services: Google Ads, Meta Ads, Lead Generation, Full-Stack Web Development, On-Page SEO, Google Business Profile, and High-Converting Landing Pages.",
  openGraph: {
    title: "Services — Full-Stack Development, Paid Ads, SEO & Lead Generation | Naveen",
    description:
      "Comprehensive digital growth solutions engineered for qualified business inquiries and conversion.",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-dark-900 overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#050608] text-white border-b border-surface-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase w-fit text-accent-red">
              <span>// SERVICES & CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              DIGITAL SOLUTIONS CRAFTED FOR ENQUIRIES & CONVERSIONS.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
              From full-stack web applications and high-converting landing pages to Google Ads, Meta Ads, On-Page SEO, and Google Business Profile optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-16 md:gap-24">
            {SERVICES.map((service, idx) => (
              <div
                key={service.number}
                id={`service-${service.number}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-gray-200 items-start"
              >
                {/* Service Header & Identifier */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-mono font-black text-accent-red">
                      {service.number}
                    </span>
                    <span className="w-12 h-[2px] bg-accent-red" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-dark-900 leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mt-2">
                    {service.fullDesc}
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-900 hover:bg-accent-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Service Features & Deliverables Grid */}
                <div className="lg:col-span-7 flex flex-col gap-4 bg-surface p-6 sm:p-8 rounded-3xl border border-gray-200">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-red">
                    // KEY DELIVERABLES & EXPERTISE
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-dark-900 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Contact Quick Link */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-600">
                    <span className="font-bold uppercase text-dark-900">Need quick discussion?</span>
                    <div className="flex items-center gap-4">
                      <a
                        href={PERSONAL_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-accent-red hover:underline inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Chat</span>
                      </a>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-bold text-dark-900 hover:underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email Direct</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Strategy Block */}
      <section className="py-20 md:py-32 bg-[#f7f7f7] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent-red" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                  // UNIFIED GROWTH ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900 leading-tight">
                HOW THESE SERVICES WORK TOGETHER.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Rather than treating web development, advertising, and search engine optimization as separate tasks, we align them into a unified pipeline:
              </p>
              <div className="flex flex-col gap-3 text-sm font-semibold text-gray-800">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-mono font-bold text-accent-red">STEP 1</span>
                  <span>High-speed full-stack web application or landing page build.</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-mono font-bold text-accent-red">STEP 2</span>
                  <span>On-page SEO architecture and Google Business Profile optimization for organic discovery.</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-mono font-bold text-accent-red">STEP 3</span>
                  <span>Targeted Google & Meta Ads to capture high-intent buyers ready to inquire.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 p-8 sm:p-12 rounded-3xl bg-[#050608] text-white border border-white/10 shadow-2xl">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-red">
                // PROJECT INITIATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                READY TO ELEVATE YOUR DIGITAL INQUIRIES?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                Send your project details or chat directly on WhatsApp to get tailored recommendations for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-red hover:bg-accent-red-dark text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-200 text-dark-900 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Fill Contact Form</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
