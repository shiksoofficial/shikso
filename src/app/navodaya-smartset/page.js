import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import ExamSection1 from '@/common-component/ExamSection1/ExamSection1';
import ExamSection2 from '@/common-component/ExamSection2/ExamSection2';
import ExamSection3 from '@/common-component/ExamSection3/ExamSection3';
import ExamSection4 from '@/common-component/ExamSection4/ExamSection4';
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

const NavodayaSmartSet = () => {
  return (
    <div>
      <CommonBanner1
        title={"Navodaya Smart Set "}
        paraghraph={"Navodaya Updates & Information – Stay Prepared, Stay Confident"}
        paraghraph1={"Stay exam-ready with all Navodaya updates, syllabus details, and smart study materials in one trusted place."}
        breadcom={[{ title: "Navodaya Smart Set" }]} />
      <div className="custom-container m-6 md:m-10">
        <p>{`Many students work hard, dreaming of joining Jawahar Navodaya Vidyalaya, yet often find themselves wondering — “Am I practicing the right way?” “Why do my mistakes repeat?” “How do toppers study so well?” Parents, too, wish for the best support for their child’s success. That’s where Shikso’s navodaya exam practice SmartSet steps in — a simple, smart, and powerful way to turn preparation into confidence. Because every child deserves a fair chance, every dream deserves the right direction, and every parent deserves peace of mind.`}</p>
      </div>
      <ExamSection1
        title="Navodaya Smart Set"
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
      <ExamSection2
        title="Want to prepare smarter for Navodaya?"
        description="Subscribe to Shikso for a once-a-week free trial— Practice for free with Shikso."
        tagline="Practice | Learn | Evolve |"
        buttonText="Get Started"
        bgColor="#3498db"
      />
      <ExamSection3
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
      />
      <CommonFaq faqData={faqData} />
      <ExamSection4
        title="Start Your Navodaya Journey Today"
        description="Give your child the confidence, clarity, and smart guidance they deserve. Learning becomes easier when the right path is clear."
        aboutUsLink="/contact-us"
      />


    </div>
  )
}

export default NavodayaSmartSet;