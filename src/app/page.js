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
  alternates: { canonical: getCanonicalUrl("/") },
  openGraph: {
    title: " Shikso – The Future of Learning",
    description: "Experience AI-powered, gamified, and adaptive education with Shikso — your child’s smartest learning companion.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shikso – Smart Learning Platform for Students | AI Powered Education System",
    description: " Shikso is a global AI-powered smart learning platform that makes education intelligent, engaging, and measurable. Practice smarter with SmartSets like Navodaya and Sainik School — designed for students, parents, and modern schools.",
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};



export default function Home() {
  return (
    <>

      <HeroSection imageurl="https://i.pinimg.com/1200x/f2/66/48/f26648e326a0cf51a5dbd8c114336886.jpg"
        title=" Welcome to Shikso – The Smart Learning Platform for Future-Ready Students"
        title2="Transform Education with Fun, Intelligence, and Real Results"
        paragraph=" At Shikso, we’re redefining how students learn. Our AI-powered learning platform blends smart technology, gamified learning, and real-time analytics to create a modern educational experience that’s engaging and effective. Whether your child is preparing for Navodaya, Sainik School, or simply wants to learn smarter — Shikso makes every step intelligent, interactive, and measurable."
        button={true}
      />
      <Homepage1 />
      <About1 />
      <About3 />
      <HappyClient />
      <GetStarted />
    </>
  );
}
