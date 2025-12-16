import HomeClientWrapper from "@/common-component/ConnectUsModal/ConnectUsModal";
import ConnectUsModal from "@/common-component/ConnectUsModal/ConnectUsModal";
import SEO from "@/common-component/Seo";
import About1 from "@/component/aboutus/About1";
import About3 from "@/component/aboutus/About3";
import GetStarted from "@/component/homepage/GetStarted";
import HappyClient from "@/component/homepage/HappyClient";
import HeroSection from "@/component/homepage/HeroSection";
import Homepage1 from "@/component/homepage/Homepage1";
import { getCanonicalUrl } from "@/lib/seo";
import React from "react";

export const metadata = {
  title: "Shikso – Smart Learning Platform for Students | AI Powered Education System",
  description: " Shikso is a global AI-powered smart learning platform that makes education intelligent, engaging, and measurable. Practice smarter with SmartSets like Navodaya and Sainik School — designed for students, parents, and modern schools.",
  keywords: [" smart learning platform", "AI powered education", " modern school learning", "gamified learning platform", "adaptive education system"],
  alternates: { canonical: 'https://www.shikso.com/' },
  openGraph: {
    title: " Shikso – The Future of Learning",
    description: "Experience AI-powered, gamified, and adaptive education with Shikso — your child’s smartest learning companion.",
    url: 'https://www.shikso.com/',
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shikso – Smart Learning Platform for Students | AI Powered Education System",
    description: " Shikso is a global AI-powered smart learning platform that makes education intelligent, engaging, and measurable. Practice smarter with SmartSets like Navodaya and Sainik School — designed for students, parents, and modern schools.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection
        title="Learn Smarter.</br> Shine Brighter.</br> With Shikso!"
        subtitle="Fun, focused, and personalized learning for every young achiever."
        primaryBtnText="Start Learning"
        secondaryBtnText="View Cources"
        secondaryBtnLink="/explore"
        image="/herobanner.webp"
      />
      <Homepage1 />
      <About1 />
      <About3 />
      <HappyClient />
      <GetStarted />
    </>
  );
}
