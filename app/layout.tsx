import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

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
  title: "Naveen — Full-Stack Developer & Digital Growth Specialist",
  description: "Naveen is a Full-Stack Developer building modern web applications, responsive digital experiences, SEO architecture, and growth-focused solutions for businesses.",
  keywords: ["Naveen", "Full-Stack Developer", "Web Developer", "Next.js Developer", "React Developer", "SEO Specialist", "Digital Marketing"],
  authors: [{ name: "Naveen" }],
  openGraph: {
    title: "Naveen — Full-Stack Developer & Digital Growth Specialist",
    description: "BUILD • RANK • GROW — Full-stack web development, responsive UI engineering, and SEO strategies.",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
