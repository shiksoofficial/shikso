import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import ExamSection1 from '@/common-component/ExamSection1/ExamSection1';
import ExamSection2 from '@/common-component/ExamSection2/ExamSection2';
import ExamSection3 from '@/common-component/ExamSection3/ExamSection3';
import ExamSection4 from '@/common-component/ExamSection4/ExamSection4';
import Section1 from '@/component/smartset/Section1';
import Section2 from '@/component/smartset/Section2';
import Section3 from '@/component/smartset/Section3';
import Section4 from '@/component/smartset/Section4';
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
  title: "Shikso Navodaya SmartSet – Smart Practice for Entrance Exam",
  description: "Prepare for the Navodaya Entrance Exam Preparation Online with Shikso SmartSet. mock tests, PYQs, and AI insights to Boost accuracy, speed, and confidence",
  keywords: ["Navodaya SmartSet", " JNV exam practice", "Navodaya mock tests", "Navodaya PYQs", "JNVST preparation", "smart study material", " AI test analytics", "Shikso Navodaya"],
  alternates: { canonical: getCanonicalUrl("/navodaya-smartset") },
  openGraph: {
    title: "Shikso Navodaya SmartSet – Smart Practice for Entrance Exam",
    description: "Prepare for the Navodaya Entrance Exam Preparation Online with Shikso SmartSet. mock tests, PYQs, and AI insights to Boost accuracy, speed, and confidence",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shikso Navodaya SmartSet – Smart Practice for Entrance Exam",
    description: "Prepare for the Navodaya Entrance Exam Preparation Online with Shikso SmartSet. mock tests, PYQs, and AI insights to Boost accuracy, speed, and confidence",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const faqData = [
  { question: "1. What is Navodaya SmartSet?", answer: "Navodaya SmartSet is an online preparation tool that offers Navodaya exam practice sets, mock tests, previous year papers, and smart analytics to help students prepare easily." },
  { question: "2. How does Navodaya SmartSet help in Navodaya Entrance Preparation Online?", answer: "It gives unlimited practice, AI-powered feedback, and real-exam-style tests so students learn faster and score higher." },
  { question: "3. Can Class 5 students use Navodaya SmartSet?", answer: "Yes, the platform is designed for Class 5 students preparing for the Navodaya entrance exam." },
  { question: "4. Are the practice sets based on the latest Navodaya syllabus?", answer: "Yes, all Navodaya exam practice sets follow the updated JNV exam pattern and syllabus." },
  { question: "5. Does SmartSet include previous year Navodaya papers?", answer: "Yes, students can solve multiple previous year papers with explanations." },
  { question: "6. How does AI analytics help students?", answer: "AI shows weak topics, accuracy, speed, and daily progress so students can improve smartly." },
  { question: "7. Are the mock tests similar to the real Navodaya exam?", answer: "Yes, the mock tests follow the latest pattern to give students real exam experience." },
  { question: "8. Is Navodaya SmartSet good for beginners?", answer: "Absolutely! The questions, explanations, and layout are simple enough for young learners." },
  { question: "9. Can parents track their child’s Navodaya preparation?", answer: "Yes, the Smart Analytics Dashboard is designed for easy parent monitoring." },
  { question: "10. Is Smart Study Material for Students included in Navodaya SmartSet?", answer: "Yes, students get topic-wise notes, practice questions, tips, and detailed solutions." },
];

const cardsData = [
  {
    img: "/news/news2.jpg",
    alt: "Updates & Information",
    title: "Updates & Information",
    discription: "Get all important Navodaya Smart Study Material for students, exam updates, syllabus details, notifications, and useful information in one place, so you never miss anything important.",
    buttonText: "Explore",
    buttonLink: "/updates-and-information",
  },
  {
    img: "/news/news2.jpg",
    alt: "Previous Year Papers",
    title: "Previous Year Papers",
    discription: "Learn from the past! Solve actual Navodaya Entrance Exam questions from previous years to understand trends, question types, and the smart strategies that work.",
    buttonText: "Explore",
    buttonLink: "/previous-year-paper",
  },
  {
    img: "/news/news3.jpg",
    alt: "Mock Tests",
    title: "Mock Tests",
    discription: "Simulate real exam conditions with Navodaya SmartSet Mock Tests. Each test matches the pattern and difficulty level of the official exam, helping you manage time and build confidence.",
    buttonText: "Explore",
    buttonLink: "/educational-news/updates-and-information",
  },
  {
    img: "/news/news3.jpg",
    alt: "Unlimited Practice Sets",
    title: "Unlimited Practice Sets",
    discription: "Practice without limits! Access topic-wise and difficulty-based questions from all sections of the Navodaya exam practice set.",
    buttonText: "Explore",
    buttonLink: "/educational-news/expansion",
  },
];


const NavodayaSmartSet = () => {
  return (
    <div>
      <CommonBanner1
        title={"Navodaya SmartSet – Practice Smarter, Dream Bigger"}
        paraghraph={"Get exam-ready with Shikso’s AI-powered Navodaya SmartSet — smart tests, instant insights, faster success."}
        breadcom={[{ title: "Navodaya Smart Set" }]} />
      <div className="custom-container py-6 md:py-10">
        <div className='flex gap-2 '>
          <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
          <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4 text-[#1D1C1C]">{`Explore Navodaya SmartSet Tools`} </h3>
        </div>
           <p className="dm_sans text-[#484545] responsive-text mb-8">{`Enhance your preparation with our comprehensive set of smart resources.`}</p>
        <Section2 cards={cardsData} />
      </div>
      <Section1 />
      <Section3 />
      <Section4 />
      {/* <ExamSection2
        title="Want to prepare smarter for Navodaya?"
        description="Subscribe to Shikso for a once-a-week free trial— Practice for free with Shikso."
        tagline="Practice | Learn | Evolve |"
        buttonText="Get Started"
        bgColor="#3498db"
      /> */}
      {/* <ExamSection3
        title="Navodaya SmartSet — Smart Study Made Simple"
        description="Preparing for the Navodaya Entrance should not be scary — it should feel simple, playful, and guided. With Navodaya Entrance Preparation Online, students get:"
        points={[
          "Topic-wise learning made easy",
          "Interactive questions for every chapter",
          "Gamified rewards that build daily motivation.",
          "Smart study material designed for young learners",
          "AI suggestions to fix mistakes",
        ]}
        highlightText="Practice → Analyze → Improve → Repeat → Grow"
        footerText="Every child deserves a study partner that understands them — and that’s exactly what Navodaya SmartSet does"
        aboutUsLink="/about-us"
      /> */}
      <CommonFaq faqData={faqData} />
      {/* <ExamSection4
        title="Start Your Navodaya Journey Today"
        description="Give your child the confidence, clarity, and smart guidance they deserve. Learning becomes easier when the right path is clear."
        aboutUsLink="/contact-us"
      /> */}


    </div>
  )
}

export default NavodayaSmartSet;