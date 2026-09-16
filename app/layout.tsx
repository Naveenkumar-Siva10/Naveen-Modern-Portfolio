import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import StickyContactActions from "@/components/StickyContactActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen — Full-Stack Developer & Digital Marketing Specialist in Chennai",
  description: "Naveen is a full-stack developer and digital marketing specialist based in New Perungalathur, Chennai, working on websites, landing pages, SEO, Google Ads, Meta Ads and lead-generation projects.",
  keywords: ["Naveen", "Full-Stack Developer Chennai", "Web Developer Chennai", "New Perungalathur", "Next.js Developer", "React Developer", "SEO Specialist Chennai", "Digital Marketing Chennai"],
  authors: [{ name: "Naveen" }],
  openGraph: {
    title: "Naveen — Full-Stack Developer & Digital Marketing Specialist in Chennai",
    description: "BUILD • RANK • GROW — Full-stack web development, responsive UI engineering, SEO strategies, and digital marketing based in New Perungalathur, Chennai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-white text-dark-800 antialiased selection:bg-accent-red selection:text-white">
        <Preloader />
        <StickyContactActions />
        {children}
      </body>
    </html>
  );
}
