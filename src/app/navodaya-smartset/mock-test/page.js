import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import { Mocktests2 } from '@/component/mocktests/Mocktests2'
import Mocktests3 from '@/component/mocktests/Mocktests3'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';
import MockTests1 from '@/component/mocktests/mocktests1'

export const metadata = {
  title: "Navodaya Exam Mock Test – Online Practice for Class 6 & 9",
  description: "Take Navodaya mock tests for Class 6 & 9 with real exam patterns, instant analytics, answer keys, and downloadable PDFs. Smart Learning Practice with Shikso",
  keywords: ["navodaya mock test", "navodaya online test", " class 6 navodaya mock test", " Sainik School mock tests", "class 9 navodaya mock test", " jnvst mock test", " navodaya test series", "navodaya exam practice", "shikso navodaya"],
  alternates: { canonical: "https://www.shikso.com/navodaya-smartset/mock-test" },
  openGraph: {
    title: "Navodaya Exam Mock Test – Online Practice for Class 6 & 9",
    description: "Take Navodaya mock tests for Class 6 & 9 with real exam patterns, instant analytics, answer keys, and downloadable PDFs. Smart Learning Practice with Shikso",
    url: "https://www.shikso.com/",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Navodaya Exam Mock Test – Online Practice for Class 6 & 9",
    description: "Take Navodaya mock tests for Class 6 & 9 with real exam patterns, instant analytics, answer keys, and downloadable PDFs. Smart Learning Practice with Shikso",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const faqData = [
  {
    question: "1. What is the best way to prepare for Navodaya?",
    answer: "Practice mock tests and previous year papers daily. It helps you understand patterns and improve confidence."
  },
  {
    question: "2. Can I give Navodaya online test Class 6 on Shikso?",
    answer: "Yes! We offer full-length navodaya online test class 6 mock tests with instant results."
  },
  {
    question: "3. Is mock test available for Class 9?",
    answer: "Yes. You can take navodaya mock test class 9 with real exam-like difficulty and analysis."
  },
  {
    question: "4. Will I receive answers after completing the test?",
    answer: "Yes. After the test, you get an answers dropdown with correct answers and explanations."
  },
  {
    question: "5. Can I download the test paper?",
    answer: "Absolutely. Each mock test comes with a download PDF option for offline practice."
  },
  {
    question: "6. Are these tests based on the real Jawahar Navodaya exam?",
    answer: "Yes. The pattern, difficulty, and structure follow the jawahar navodaya mock test style."
  },
  {
    question: "7. Do I need to create an account to give the test?",
    answer: "You can attempt one free test without login. For full analytics and unlimited tests, creating an account is recommended."
  },
];

const classes = [
  "Navodaya Mock Test Class 6",
  "Navodaya Mock Test Class 9",
];

const classCard = [
  {
    id: 1,
    title: "Questions follow the actual Jawahar Navodaya entrance pattern.",
    subtitle: "Real Exam Feel",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 2,
    title: "Easy-to-understand screen with large fonts.",
    subtitle: "Designed for Young Learners",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 3,
    title: "AI tools track weak topics and performance.",
    subtitle: "Future of Smart Learning",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 4,
    title: "No books needed. Everything is ready in one place.",
    subtitle: "Practice Anytime, Anywhere",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
];

const page = () => {
  return (
    <>
      <CommonBanner1
        title={"Navodaya Mock Test, Practice for Class 6 & 9"}
        paraghraph={"Step into smart learning with Shikso’s Navodaya mock tests — real exam practice, instant analytics, and a child-friendly platform to help every student shine."}
        breadcom={[{ title: "Mock Tests" }]} />
      <MockTests1
        title="Select Your Class"
        description="Choose the appropriate class for the mock test."
        label="Class"
        options={classes}
        buttonText="Proceed to Test"
      />
      <Mocktests2 />
      <Mocktests3
        title="Why These Navodaya Mock Tests Are Effective"
        description="Upon starting your test, you will enjoy a calm and clean screen."
        cards={classCard}
      />
      <CommonFaq faqData={faqData} />
    </>
  )
}

export default page