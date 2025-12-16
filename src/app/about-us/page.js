import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import ExamSection3 from '@/common-component/ExamSection3/ExamSection3'
import About1 from '@/component/aboutus/About1'
import About2 from '@/component/aboutus/About2'
import About3 from '@/component/aboutus/About3'
import About4 from '@/component/aboutus/About4'
import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo'

import React from 'react'
export const metadata = {
  title: "About Shikso | Innovative Learning Ecosystem for Students |",
  description: " Learn about Shikso India’s first AI-powered Innovative learning ecosystem For students, parents, and teachers that helps students practice, learn, & evolve",
  keywords: ["Adaptive Learning System", "Innovative Learning ecosystem", " Adaptive Learning Platform for Schools", " AI Powered Education", "Modern School Learning", "Gamified Learning Platform, Navodaya SmartSet", "Sainik School SmartSet", " Online Exam Practice", "Personalized Learning Dashboard", "Educational Analytics", "Future of EdTech"],
  alternates: { canonical: "https://www.shikso.com/about-us" },
  openGraph: {
    title: "About Shikso | Innovative Learning Ecosystem for Students |",
    description: " Learn about Shikso India’s first AI-powered Innovative learning ecosystem For students, parents, and teachers that helps students practice, learn, & evolve",
    url: "https://www.shikso.com/",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Shikso | Innovative Learning Ecosystem for Students |",
    description: " Learn about Shikso India’s first AI-powered Innovative learning ecosystem For students, parents, and teachers that helps students practice, learn, & evolve",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};
const AboutPage = () => {
  return (
    <>
      <CommonBanner1
        title={"Welcome to Shikso"}
        paraghraph={"AI-Powered Education for Modern Students"}
        tagline={"Practice | Learn | Evolve |"}
        breadcom={[{ title: "About Us" }]} />
      <About1 />
      <About2 />
      <ExamSection3
        title="Built for Students, Teachers, and Parents"
        description="Shikso connects the entire learning ecosystem through one platform:"
        points={[
          "Students — Get personalized quizzes, mock tests, and instant feedback.",
          " Teachers — Access smart tools to assign lessons and track performance.",
          " Parents — Monitor growth through easy progress reports and analytics.",
        ]}
        line1="Together, they form a learning loop that grows stronger every day:"
        highlightText="Practice → Analyze → Improve → Repeat → Grow"

      />
      <About3 />
      <About4 />
    </>
  )
}

export default AboutPage