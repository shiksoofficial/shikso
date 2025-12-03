import About1 from '@/component/aboutus/About1'
import About2 from '@/component/aboutus/About2'
import About3 from '@/component/aboutus/About3'
import About4 from '@/component/aboutus/About4'
import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo'

import React from 'react'
export const metadata = {
  title: " Shikso – AI-Powered Smart Learning Platform for Modern Students",
  description: " Shikso is India’s first AI-powered smart learning ecosystem that helps students learn smarter through gamified practice, personalized analytics, and modern school education tools. Explore Navodaya SmartSet, Sainik School SmartSet & more.",
  keywords: ["smart learning platform", "AI powered education", "modern school learning", "gamified learning platform", "adaptive education system"],
  alternates: { canonical: getCanonicalUrl("/about-us") },
  openGraph: {
    title: " Shikso – AI-Powered Smart Learning Platform for Modern Students",
    description: " Shikso is India’s first AI-powered smart learning ecosystem that helps students learn smarter through gamified practice, personalized analytics, and modern school education tools. Explore Navodaya SmartSet, Sainik School SmartSet & more.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: " Shikso – AI-Powered Smart Learning Platform for Modern Students",
    description: " Shikso is India’s first AI-powered smart learning ecosystem that helps students learn smarter through gamified practice, personalized analytics, and modern school education tools. Explore Navodaya SmartSet, Sainik School SmartSet & more.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};
const AboutPage = () => {
  return (
    <>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title=" Welcome to Shikso – Your Child’s Smart Learning Companion"
        title2=" AI-Powered Education for Modern Students"
        paragraph=" Shikso is a next-generation smart learning platform that transforms traditional education into an interactive, data-driven experience. Designed for today’s students, parents, and schools, Shikso blends AI-based personalization, gamified practice, and performance analytics to create a learning journey that’s fun, effective, and future-ready."
        // button={true}
        breadcom={[{ title: "About Us" }]} />
      <About1 />
      <About2 />
      <About3 />
      <About4 />
    </>
  )
}

export default AboutPage