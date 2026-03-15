import React from "react";

import HeroSection from "@/component/homepage/HeroSection";
import Homepage1 from "@/component/homepage/Homepage1";
import HappyClient from "@/component/homepage/HappyClient";
import GetStarted from "@/component/homepage/GetStarted";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata = {
  title: "Shikso – Prepare for Navodaya, Sainik School, RMS & NMMS Entrance Exams",
  description:
    "Prepare for Navodaya, Sainik School, RMS and NMMS entrance exams with previous year papers, practice questions and smart learning on Shikso.",
  keywords: [
    "navodaya exam preparation",
    "sainik school entrance exam",
    "rms entrance exam",
    "nmms exam preparation",
    "navodaya previous year papers",
    "sainik school previous year papers",
    "rms military school exam",
    "school entrance exam india",
    "navodaya vidyalaya samiti",
    "jnvst preparation",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.shikso.com",
  },
  openGraph: {
    title: "Shikso – India's Top School Entrance Exam Prep",
    description:
      "Smart preparation for Navodaya, Sainik School, RMS and NMMS with previous year papers, practice tests and exam updates.",
    url: "https://www.shikso.com",
    siteName: "Shikso",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikso – India's Top School Entrance Exam Prep",
    description:
      "Smart preparation for Navodaya, Sainik School, RMS and NMMS with previous year papers and practice tests.",
  },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <Homepage1 />
      <HappyClient />
      <GetStarted />
    </>
  );
}