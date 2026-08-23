import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { PROJECTS, PERSONAL_INFO } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Case Studies — Real Full-Stack & Lead Generation Projects | Naveen",
  description:
    "Explore real client work and case studies: ChillFix Air Solution (website, Google Business Profile, lead generation), Masala Manufacturer (Google/Meta Ads), and full-stack web applications.",
  openGraph: {
    title: "Work & Case Studies — Real Full-Stack & Lead Generation Projects | Naveen",
    description:
      "Explore real client projects and digital growth implementations engineered by Naveen.",
  },
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen bg-white text-dark-900 overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#050608] text-white border-b border-surface-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase w-fit text-accent-red">
              <span>// REAL CLIENT WORK & PROJECTS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              VERIFIED CLIENT IMPLEMENTATIONS & RESULTS.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
              A transparent look at real client projects, digital marketing campaigns, Google Business Profile optimizations, and web engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-20 md:gap-32">
            {PROJECTS.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={project.id}
                  id={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-gray-200"
                >
                  {/* Visual Image Column */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl bg-surface border-2 border-gray-200 overflow-hidden shadow-xl hover:border-accent-red transition-colors duration-500 group">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 border border-gray-200 text-xs font-mono font-bold text-dark-900 shadow-md">
                          {project.category}
                        </span>

                        {project.isLiveVerified && (
                          <span className="px-3.5 py-1.5 rounded-full bg-accent-red text-white text-xs font-mono font-bold shadow-md flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <span>LIVE VERIFIED</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-accent-red tracking-widest uppercase">
                        0{index + 1} // CASE STUDY
                      </span>
                      <span className="text-xs font-mono font-medium text-gray-500">
                        • {project.client}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-dark-900">
                      {project.title}
                    </h2>

                    <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                      {project.description}
                    </p>

                    {/* Work Performed Checklist */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-red">
                        // WORK PERFORMED
                      </span>
                      <div className="flex flex-col gap-2">
                        {project.workPerformed.map((item, wIdx) => (
                          <div key={wIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                            <CheckCircle2 className="w-4 h-4 text-accent-red shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-surface border border-gray-200 text-xs font-mono font-bold text-dark-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Links */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      {project.link && project.link.startsWith("http") ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-red hover:bg-accent-red-dark text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                        >
                          <span>View Live Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-dark-900 hover:bg-accent-red text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                        >
                          <span>Discuss Similar Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section: Client Work & Results */}
      <section className="py-20 md:py-32 bg-[#f7f7f7] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-accent-red" />
                  <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent-red uppercase">
                    // CLIENT WORK & RESULTS EVIDENCE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-dark-900">
                  REAL EXECUTION EVIDENCE.
                </h2>
              </div>
              <p className="max-w-md text-sm text-gray-600 font-medium">
                We believe in genuine project work, transparent execution, and verifiable results rather than fabricated testimonials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ChillFix Evidence Block */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent-red uppercase">01 / LOCAL HVAC CLIENT</span>
                    <span className="px-3 py-1 rounded-full bg-surface border border-gray-200 text-[10px] font-mono font-bold text-dark-900">
                      LIVE CLIENT
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-dark-900">ChillFix Air Solution</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    Implemented an integrated digital infrastructure combining custom responsive website engineering, Google Business Profile local SEO setup, and lead capture pathways designed to generate real customer bookings and support transactions through to completed HVAC service deals.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 font-bold">VERIFIED URL</span>
                  <a
                    href="https://chillfixairsolution.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-accent-red hover:underline inline-flex items-center gap-1"
                  >
                    <span>chillfixairsolution.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Masala Manufacturer Evidence Block */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent-red uppercase">02 / FOOD & SPICE INDUSTRY</span>
                    <span className="px-3 py-1 rounded-full bg-surface border border-gray-200 text-[10px] font-mono font-bold text-dark-900">
                      PAID ADS CAMPAIGNS
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-dark-900">Masala Manufacturer</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    Structured conversion-focused Meta Ads (Facebook & Instagram) and Google Ads search campaigns targeting wholesale buyers, retailers, and consumer inquiries. Built frictionless landing experience to capture and route qualified product inquiries directly to the sales team.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 font-bold">FOCUS</span>
                  <span className="text-xs font-mono font-bold text-dark-900">Lead Generation & CRO</span>
                </div>
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
