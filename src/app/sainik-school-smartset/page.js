import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import Section2 from '@/component/smartset/Section2';
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
  title: "Shikso Sainik School SmartSet- Smart Learning for AISSEE Exam",
  description: " Prepare for the Sainik School Entrance Exam with Shikso SmartSet. Get mock tests, practice sets, PYQs, and a personalized resulting dashboard for students.",
  keywords: ["Sainik School SmartSet", "Sainik School Online Coaching", "AISSEE exam practice", " Sainik School mock tests,", "smart study material for students", " Sainik School entrance exam preparation", "personalized learning dashboard", "Shikso Sainik School"],
  alternates: { canonical: "https://www.shikso.com/sainik-school-smartset" },
  openGraph: {
    title: "Shikso Sainik School SmartSet- Smart Learning for AISSEE Exam",
    description: " Prepare for the Sainik School Entrance Exam with Shikso SmartSet. Get mock tests, practice sets, PYQs, and a personalized resulting dashboard for students.",
    url: "https://www.shikso.com/",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shikso Sainik School SmartSet- Smart Learning for AISSEE Exam",
    description: " Prepare for the Sainik School Entrance Exam with Shikso SmartSet. Get mock tests, practice sets, PYQs, and a personalized resulting dashboard for students.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const faqData = [
  {
    question: "1. What is Sainik School SmartSet?",
    answer: " It is a complete online preparation system offering mock tests, practice sets, PYQs, and AI-based analytics for AISSEE."
  },
  {
    question: "2. How does SmartSet help students preparing for the Sainik School Entrance Exam?",
    answer: " It gives structured practice, real exam-style tests, smart reports, and topic-wise improvement paths."
  },
  {
    question: "3. Is SmartSet similar to Sainik School Online Coaching?",
    answer: " Yes — it provides digital coaching features like guided learning, instant corrections, and progress monitoring."
  },
  {
    question: "4. Can parents track their child’s preparation?",
    answer: " Yes, the personalized learning dashboard shows daily performance and improvements clearly."
  },
  {
    question: "5. Do mock tests follow the AISSEE exam pattern??",
    answer: " Absolutely. Every mock test is built on the latest official pattern."
  },
  {
    question: "6. Does SmartSet include study material for all subjects?",
    answer: " Yes, students get topic-wise notes, solved examples, and concept explanations."
  },
  {
    question: "7. Are PYQs included?",
    answer: " Yes, multiple previous year papers are available with solutions."
  },
  {
    question: "8. Is this helpful for teachers too?",
    answer: " Yes, it helps teachers plan revision, track performance, and identify weak concepts in students."
  },
  {
    question: "9. Is the platform simple for young learners?",
    answer: " Yes, the design is child-friendly, clean, and easy to use for Class 5–9 students."
  },
  {
    question: "10. Does SmartSet improve exam confidence?",
    answer: " Yes — consistent practice and AI guidance build confidence, speed, and readiness."
  },
];

const cardsData = [
  {
    img: "/news/news2.jpg",
    alt: "Updates & Information",
    title: "Updates & Information",
    discription: "All important AISSEE updates, syllabus changes, exam notifications, and study material in one clean dashboard — so students, parents, and teachers stay aligned and fully informed.",
    buttonText: "Explore",
    buttonLink: "/sainik-school-smartset/updates-and-information",
  },
  {
    img: "/news/news2.jpg",
    alt: "Previous Year Papers",
    title: "Previous Year Papers",
    discription: "Solve real AISSEE papers to understand what the exam expects from a future cadet: accuracy, speed, and sharp thinking.",
    buttonText: "Explore",
    buttonLink: "/sainik-school-smartset/previous-year-papers",
  },
  {
    img: "/news/news3.jpg",
    alt: "Mock Tests",
    title: "Mock Tests",
    discription: "Experience exam discipline from home. SmartSet mock tests follow the official AISSEE pattern, building stamina, time management, and problem-solving strength.",
    buttonText: "Explore",
    buttonLink: "/sainik-school-smartset/mock-test",
  },
  {
    img: "/news/news3.jpg",
    alt: "Unlimited Practice Sets",
    title: "Unlimited Practice Sets",
    discription: "Practice without limits! Access topic-wise and difficulty-based questions from all sections of the Navodaya exam practice set.",
    buttonText: "Explore",
    buttonLink: "/sainik-school-smartset/unlimited-practice",
  },
];

const SainikSchoolSmartSet = () => {
  return (
    <div>
      <CommonBanner1
        title={"Sainik School SmartSet "}
        paraghraph={"Sainik School SmartSet – Train With Discipline, Learn With Purpose"}
        paraghraph1={" Give your child the right start for the Sainik School Entrance Exam with Shikso’s smart, focused, and student-friendly learning system."}
        breadcom={[{ title: "Sainik School SmartSet" }]} />
      {/* <div className="custom-container m-6 md:m-10">
        <p className='mb-3'>{`Every child who dreams of joining a Sainik School dreams of more than just passing an exam. They dream of discipline, they dream of courage, They dream of becoming something greater.`}</p>
        <p className='mb-3'>{`But the journey toward the Sainik School Entrance Exam (AISSEE) can feel confusing:`}</p>
        <p >{`Students don’t know where to begin…`}</p>
        <p >{` Parents search everywhere for trusted guidance…`}</p>
        <p className='mb-3'>{` Teachers want tools that help them track progress and support every child…`}</p>
        <p >{`That is why we built Shikso’s Sainik School SmartSet — a digital study companion designed to make preparation clear, structured, and stress-free.`}</p>
        <p className='mb-3'>{` It brings discipline to learning, clarity to planning, and confidence to every attempt.`}</p>
        <p className='mb-1'>{`Because preparing for Sainik School is not just about solving questions — it’s about shaping mindset, habits, and determination.`}</p>
      </div> */}
       <div className="custom-container py-6 md:py-10">
        <div className='flex gap-2 '>
          <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
          <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4 text-[#1D1C1C]">{`Explore Sainik School SmartSet Tools`} </h3>
        </div>
        <p className="dm_sans text-[#484545] responsive-text mb-8">{`Enhance your preparation with our comprehensive set of smart resources.`}</p>
        <Section2 cards={cardsData} />
      </div>
      <CommonFaq title="– Sainik School SmartSet" faqData={faqData} />
    </div>
  )
}
export default SainikSchoolSmartSet;