import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { PERSONAL_INFO, CORPORATE_EXPERIENCE } from "@/lib/data";
import { CheckCircle2, Building2, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Naveen — Full-Stack Developer & Digital Marketing Specialist",
  description:
    "Learn about Naveen's background: 2+ years of corporate experience at Cognizant combined with full-stack web engineering, Google Ads, Meta Ads, SEO, and lead generation.",
  openGraph: {
    title: "About Naveen — Full-Stack Developer & Digital Marketing Specialist",
    description:
      "I don't only build websites. I understand how websites, advertising, SEO, local search and conversion work together to help businesses generate enquiries and customers.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white text-dark-900 overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#050608] text-white border-b border-surface-border overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase w-fit text-accent-red">
              <span>// ABOUT NAVEEN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              ENGINEERING WEBSITES THAT GENERATE REAL BUSINESS ENQUIRIES.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
              {PERSONAL_INFO.positioningStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Core Positioning & Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent-red" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                  // THE INTEGRATED APPROACH
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900 leading-tight">
                MORE THAN CODE. A COMPLETE GROWTH SYSTEM.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
              <p>
                Many businesses make the mistake of separating web development from marketing. A beautiful website that receives no traffic won&apos;t generate revenue, and high ad spend pointing to a poorly structured landing page results in wasted budget.
              </p>
              <p>
                My approach bridges both worlds: developing clean, performant full-stack applications while simultaneously structuring paid search campaigns, meta advertising, local search visibility, and frictionless conversion pathways.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-surface border border-gray-200 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-accent-red">01 / DEVELOPMENT</span>
                  <h3 className="text-base font-bold text-dark-900">Modern Full-Stack Apps</h3>
                  <p className="text-xs text-gray-600">Fast Next.js & React architectures, secure APIs, and responsive UI.</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface border border-gray-200 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-accent-red">02 / ACQUISITION</span>
                  <h3 className="text-base font-bold text-dark-900">Google & Meta Ads</h3>
                  <p className="text-xs text-gray-600">Targeted search and social campaigns engineered around active customer intent.</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface border border-gray-200 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-accent-red">03 / VISIBILITY</span>
                  <h3 className="text-base font-bold text-dark-900">SEO & Local Search</h3>
                  <p className="text-xs text-gray-600">On-page technical structure and Google Business Profile optimization.</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface border border-gray-200 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-accent-red">04 / CONVERSION</span>
                  <h3 className="text-base font-bold text-dark-900">Lead Generation</h3>
                  <p className="text-xs text-gray-600">Frictionless forms, direct WhatsApp pathways, and conversion optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Corporate Experience Section (Cognizant 2+ Years) */}
      <section className="py-20 md:py-32 bg-[#080808] text-white border-y border-surface-border relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-accent-red/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/15">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-accent-red" />
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                    // PROFESSIONAL BACKGROUND & CREDIBILITY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                  CORPORATE EXPERIENCE.
                </h2>
              </div>
              <p className="max-w-md text-sm text-gray-400 font-medium">
                Grounded in structured enterprise processes, professional communication standards, and accountable delivery.
              </p>
            </div>

            {/* Experience Spotlight Card */}
            {CORPORATE_EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-accent-red text-white shadow-md">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-black text-white">{exp.company}</span>
                        <span className="text-xs font-mono font-bold text-accent-red uppercase">{exp.duration}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase text-gray-300 w-fit mt-2">
                      <Briefcase className="w-3.5 h-3.5 text-accent-red" />
                      <span>{exp.role}</span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-medium mt-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-red">
                      // PROFESSIONAL COMPETENCIES & DELIVERY STANDARDS
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Visual Professional Journey Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
                <span className="text-2xl font-black text-white">2+ YEARS</span>
                <span className="text-xs font-mono font-bold text-accent-red uppercase">Corporate Experience</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Enterprise rigor, disciplined teamwork, business communication, and structured delivery at Cognizant.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
                <span className="text-2xl font-black text-white">FULL-STACK</span>
                <span className="text-xs font-mono font-bold text-accent-red uppercase">Engineering Stack</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Next.js, React, TypeScript, APIs, database architectures, and high-performance frontend interfaces.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3">
                <span className="text-2xl font-black text-white">GROWTH</span>
                <span className="text-xs font-mono font-bold text-accent-red uppercase">Digital Marketing</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Google Ads, Meta Ads, Google Business Profile, On-Page SEO, and conversion optimization for real deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent-red" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                  // HOW WE WORK TOGETHER
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900">
                CLEAR PROCESS. DIRECT ACCOUNTABILITY.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface border border-gray-200">
                <span className="text-xs font-mono font-bold text-accent-red">01 / DISCOVERY & INTENT</span>
                <h3 className="text-xl font-bold text-dark-900">Understanding Objectives</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We determine what your business actually needs: a website build, lead generation, local SEO ranking, or conversion-focused advertising.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface border border-gray-200">
                <span className="text-xs font-mono font-bold text-accent-red">02 / FOCUSED EXECUTION</span>
                <h3 className="text-xl font-bold text-dark-900">Crafted Implementation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clean engineering, disciplined communication, and targeted marketing assets designed to drive qualified customer inquiries.
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface border border-gray-200">
                <span className="text-xs font-mono font-bold text-accent-red">03 / CONVERSION SUPPORT</span>
                <h3 className="text-xl font-bold text-dark-900">Supporting Growth</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tracking inquiries, refining ads, and optimizing workflows to ensure marketing spend converts into completed business deals.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-dark-900 hover:bg-accent-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>View Real Projects & Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-gray-200 border border-gray-300 text-dark-900 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
