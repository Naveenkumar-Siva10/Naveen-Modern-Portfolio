import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { PERSONAL_INFO } from "@/lib/data";
import { MessageSquare, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Naveen — Full-Stack Developer & Digital Marketer in Chennai",
  description:
    "Get in touch with Naveen, full-stack developer & digital marketer based in New Perungalathur, Chennai. Available for projects across Chennai and remote worldwide. WhatsApp: +91 86086 04519, Email: naveenwbdigital@gmail.com.",
  openGraph: {
    title: "Contact Naveen — Full-Stack Developer & Digital Marketer in Chennai",
    description:
      "Start a project with Naveen in New Perungalathur, Chennai. Fast response within 24 hours via WhatsApp or Email.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050608] text-white overflow-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 bg-[#050608] text-white border-b border-surface-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-red/10 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase w-fit text-accent-red">
              <span>// DIRECT CONTACT & INQUIRIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              LET&apos;S TALK ABOUT YOUR PROJECT.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
              Have a web application, landing page, SEO, Google Business Profile, or paid ad requirement? Send an inquiry or reach out directly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Direct Action Sheet */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  );
}
