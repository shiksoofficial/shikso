import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import { Mocktests2 } from '@/component/mocktests/Mocktests2'
import Mocktests3 from '@/component/mocktests/Mocktests3'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';
import MockTests1 from '@/component/mocktests/mocktests1'

export const metadata = {
  title: "Sainik School Mock Test Online AISSEE Practice- Class 6 & 9",
  description: "Attempt Sainik School mock tests for Class 6 & 9 with AISSEE-like patterns, instant analytics, answer keys, and downloadable PDFs. Smart learning practice with Shikso.",
  keywords: ["sainik school mock test", " AISSEE mock test", " sainik school online test", "class 6 sainik mock test", "class 9 sainik mock test", "Sainik School entrance practice", "AISSEE test series", "Shikso Sainik SmartSet"],
  alternates: { canonical: "https://www.shikso.co/sainik-school-smartset/mock-test" },
  openGraph: {
    title: "Sainik School Mock Test Online AISSEE Practice- Class 6 & 9",
    description: "Attempt Sainik School mock tests for Class 6 & 9 with AISSEE-like patterns, instant analytics, answer keys, and downloadable PDFs. Smart learning practice with Shikso.",
    url: "https://www.shikso.com/",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sainik School Mock Test Online AISSEE Practice- Class 6 & 9",
    description: "Attempt Sainik School mock tests for Class 6 & 9 with AISSEE-like patterns, instant analytics, answer keys, and downloadable PDFs. Smart learning practice with Shikso.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const faqData = [
  {
    question: "1. Are these Sainik School mock tests based on the real AISSEE exam?",
    answer: "Yes, all tests follow the official AISSEE pattern, marking scheme, and difficulty level."
  },
  {
    question: "2. Can I give the Sainik School mock test for Class 6?",
    answer: "Absolutely. Students can take full-length Class 6 mock tests with instant analytics."
  },
  {
    question: "3. Is mock test available for Class 9 admission?",
    answer: "Yes, Class 9 AISSEE mock tests are available with real exam-style questions."
  },
  {
    question: "4. Will I get the answer key after the test?",
    answer: "Yes. You get an answer dropdown with explanations for all questions."
  },
  {
    question: "5. Can I download the mock test PDF?",
    answer: "Yes, every mock test comes with a downloadable PDF for offline practice."
  },
  {
    question: "6. Do I need an account to attempt the mock test?",
    answer: "You can try one test free. For unlimited mock tests and full analytics, account creation is recommended."
  },
  {
    question: "7. How does AI improve my preparation?",
    answer: "AI analyses mistakes, speed, accuracy, and topic weakness — guiding you to improve smarter."
  },
];

const classes = [
  "Sainik School Mock Test Class 6",
  "Sainik School Mock Test Class 9",
];

const classCard = [
  {
    id: 1,
    title: "Questions closely mimic the Sainik School entrance exam style and difficulty.",
    subtitle: "True-to-Exam Pattern",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 2,
    title: " Clear instructions and layouts accessible to young learners preparing for tough competition.",
    subtitle: "User-Friendly Interface",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 3,
    title: "AI tools track performance trends and recommend precise study areas to maximize improvement.",
    subtitle: "Next-Gen Learning",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 4,
    title: "No need for physical books or scattered test papers—everything is available online.",
    subtitle: "Anytime, Anywhere Access",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
  {
    id: 5,
    title: " Immediate feedback helps students quickly identify mistakes and correct them efficiently.",
    subtitle: "Instant Insights",
    img: "/aboutus/aboutus1.webp",
    alt: "paper",
  },
];

const page = () => {
  return (
    <>
      <CommonBanner1
        title={"Sainik School Mock Test – Practice for Classes 6 to 9"}
        paraghraph={"Smart Sainik School mock tests with real exam practice and instant insights — only on Shikso."}
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
        title="Why Choose Sainik School Mock Tests by Shikso?"
        description="Shikso’s tests are thoughtfully designed to motivate and guide students through progressive learning, similar to a mentor helping them every step of the way. Benefits include:"
        cards={classCard}
      />
      <CommonFaq title="– Sainik School Mock Test" faqData={faqData} />
    </>
  )
}

export default page