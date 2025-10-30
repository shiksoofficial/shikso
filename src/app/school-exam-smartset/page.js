import HeroSection from '@/component/homepage/HeroSection'
import React from 'react'

export const metadata = {
  title: "School Exam SmartSet",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/school-exam-smartset") },
  openGraph: {
    title: "School Exam SmartSet",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "School Exam SmartSet",
    description: "Reach out for any queries.",
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};

const SchoolExamSmartSet = () => {
  return (
    <div>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "School ExamSmart Set" }]} />
    </div>
  )
}

export default SchoolExamSmartSet;