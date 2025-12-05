import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import ExamSection1 from '@/common-component/ExamSection1/ExamSection1';
import ExamSection2 from '@/common-component/ExamSection2/ExamSection2';
import ExamSection3 from '@/common-component/ExamSection3/ExamSection3';
import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
  title: "Shikso Sainik School SmartSet- Smart Learning for AISSEE Exam",
  description: " Prepare for the Sainik School Entrance Exam with Shikso SmartSet. Get mock tests, practice sets, PYQs, and a personalized resulting dashboard for students.",
  keywords: ["Sainik School SmartSet", "Sainik School Online Coaching", "AISSEE exam practice"," Sainik School mock tests,","smart study material for students"," Sainik School entrance exam preparation","personalized learning dashboard","Shikso Sainik School"],
  alternates: { canonical: getCanonicalUrl("/sainik-school-smartset") },
  openGraph: {
    title: "Shikso Sainik School SmartSet- Smart Learning for AISSEE Exam",
    description: " Prepare for the Sainik School Entrance Exam with Shikso SmartSet. Get mock tests, practice sets, PYQs, and a personalized resulting dashboard for students.",
    url: getCanonicalUrl("/"),
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
  { question: "1. What is Sainik School SmartSet?", 
    answer: " It is a complete online preparation system offering mock tests, practice sets, PYQs, and AI-based analytics for AISSEE." },
  { question: "2. How does SmartSet help students preparing for the Sainik School Entrance Exam?", 
    answer: " It gives structured practice, real exam-style tests, smart reports, and topic-wise improvement paths." },
  { question: "3. Is SmartSet similar to Sainik School Online Coaching?", 
    answer: " Yes — it provides digital coaching features like guided learning, instant corrections, and progress monitoring." },
  { question: "4. Can parents track their child’s preparation?", 
    answer: " Yes, the personalized learning dashboard shows daily performance and improvements clearly." },
  { question: "5. Do mock tests follow the AISSEE exam pattern??", 
    answer: " Absolutely. Every mock test is built on the latest official pattern." },
  { question: "6. Does SmartSet include study material for all subjects?", 
    answer: " Yes, students get topic-wise notes, solved examples, and concept explanations." },
  { question: "7. Are PYQs included?", 
    answer: " Yes, multiple previous year papers are available with solutions." },
  { question: "8. Is this helpful for teachers too?",
     answer: " Yes, it helps teachers plan revision, track performance, and identify weak concepts in students." },
  { question: "9. Is the platform simple for young learners?", 
    answer: " Yes, the design is child-friendly, clean, and easy to use for Class 5–9 students." },
  { question: "10. Does SmartSet improve exam confidence?",
     answer: " Yes — consistent practice and AI guidance build confidence, speed, and readiness." },
];

const SainikSchoolSmartSet = () => {
  return (
    <div>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Sainik School SmartSet – Train With Discipline, Learn With Purpose"
        title2="Give your child the right start for the Sainik School Entrance Exam with Shikso’s smart, focused, and student-friendly learning system."
        button={false} breadcom={[{ title: "Sainik School SmartSet" }]} />
      <div className="custom-container m-6 md:m-10">
        <p className='mb-3'>{`Every child who dreams of joining a Sainik School dreams of more than just passing an exam. They dream of discipline, they dream of courage, They dream of becoming something greater.`}</p>
        <p className='mb-3'>{`But the journey toward the Sainik School Entrance Exam (AISSEE) can feel confusing:`}</p>
        <p >{`Students don’t know where to begin…`}</p>
        <p >{` Parents search everywhere for trusted guidance…`}</p>
        <p className='mb-3'>{` Teachers want tools that help them track progress and support every child…`}</p>
        <p >{`That is why we built Shikso’s Sainik School SmartSet — a digital study companion designed to make preparation clear, structured, and stress-free.`}</p>
        <p className='mb-3'>{` It brings discipline to learning, clarity to planning, and confidence to every attempt.`}</p>
        <p className='mb-1'>{`Because preparing for Sainik School is not just about solving questions — it’s about shaping mindset, habits, and determination.`}</p>
      </div>
 <ExamSection1
        title="Sainik School SmartSet"
        overviewText={`Many students work hard, dreaming of joining Jawahar Navodaya Vidyalaya, yet often find themselves wondering — “Am I practicing the right way?” “Why do my mistakes repeat?” “How do toppers study so well?” Parents, too, wish for the best support for their child’s success. That’s where Shikso’s navodaya exam practice SmartSet steps in — a simple, smart, and powerful way to turn preparation into confidence. Because every child deserves a fair chance, every dream deserves the right direction, and every parent deserves peace of mind.`}

        examInfo={{
          title: "SSC GD 2026 Exam Information",
          sections: [
            {
              heading: "Exam Pattern",
              items: [
                "Total Questions: 80",
                "Total Marks: 160",
                "Duration: 60 minutes",
                "Negative Marking: 0.50 marks",
              ],
            },
            {
              heading: "Syllabus",
              items: [
                "General Intelligence & Reasoning",
                "General Knowledge & Awareness",
                "Elementary Mathematics",
                "English/Hindi",
              ],
            },
          ],
        }}

        testSeriesData={[
          {
            id: 1,
            img: "",
            title: "Test Series 1",
            totalTests: 782,
            freeTests: 13,
            languages: "English",
            category: "Test Series",
            startDate: "25/12/25",
            endDate: "29/12/25",
            text: "View More",
            page: "/test-series",
          },
          {
            id: 2,
            img: "/img/banking.png",
            title: "Test Series 2",
            totalTests: 650,
            freeTests: 20,
            languages: "English",
            category: "Test Series",
            startDate: "25/12/25",
            endDate: "29/12/25",
            text: "View More",
            page: "/",
          },
        ]}
      />
      <ExamSection3
        title="Sainik School SmartSet – Why It Matters"
        description="Sainik Schools prepare children for a life of leadership, responsibility, and discipline.
           To match that vision, preparation must be just as structured."
        pointsheading="With SmartSet – Sainik School, students get:"
        points={[
          "Simple topic-wise learning",
          "Practice that builds discipline",
          "A calm, clean digital environment",
          "Smart study material for young learners",
          "AI suggestions that correct mistakes instantly",
          "Sainik School Online Coaching–style guidance at home",
        ]}
        line="It’s more than a study tool —"
        line1=" it’s a preparation ecosystem built for India’s future cadets."
        highlightText="Practice → Analyze → Improve → Repeat → Grow"
        footerText="And SmartSet stands beside them in every step of this journey."
        aboutUsLink="/about-us"
      />
        <CommonFaq faqData={faqData} />
       <ExamSection2
        title="Want to prepare smarter for AISSEE Exams?"
        description="Subscribe to Shikso for a once-a-week free trail— Practice for free with Shikso. "
        tagline="Practice | Learn | Evolve |"
        buttonText="Get Started"
        bgColor="#3498db"
      />
    </div>
  )
}
export default SainikSchoolSmartSet;