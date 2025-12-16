import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo';
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
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "School Exam SmartSet",
    description: "Reach out for any queries.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const SchoolExamSmartSet = () => {
  return (
    <div>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "School ExamSmart Set" }]} />
      <div className="custom-container min-h-[60vh] flex items-center justify-center m-6 md:m-10">
        <div className="text-center bg-[#E8FBFF] border border-[#00D6FF] rounded-2xl px-8 py-10 max-w-md w-full shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-[#FFF46C] rounded-full flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <h1 className="dm_sans text-2xl md:text-3xl font-bold text-[#1D1C1C] mb-3">{`Coming Soon`}</h1>
          <p className="dm_sans text-[#484545] text-sm md:text-base mb-6">{` We’re working hard to bring you something amazing.Stay tuned!`}</p>
          <div className="w-20 h-[3px] bg-[#00D6FF] mx-auto rounded-full mb-6" />
          <p className="text-[#00D6FF] font-medium text-sm">{`Launching shortly 🚧`} </p>
          
        </div>
      </div>
    </div>
  )
}

export default SchoolExamSmartSet;