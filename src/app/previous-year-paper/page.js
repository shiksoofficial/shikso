import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import Paper1 from '@/component/previousyearpapers/Paper1'
import Paper2 from '@/component/previousyearpapers/Paper2'
import Paper3 from '@/component/previousyearpapers/Paper3'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';

export const metadata = {
    title: "Navodaya Previous Year Question Papers – Download PDFs",
    description: "Download Navodaya previous year question papers for Class 6 & 9. Get year-wise PDFs, online tests, answer keys, and AI analysis for smarter exam preparation.",
    keywords: [" navodaya previous year question paper", " navodaya class 6 pyq", " navodaya class 9 pyq", "navodaya pyq pdf download", " jnvst previous papers", " navodaya exam practice set", "navodaya pyq online test","shikso navodaya"],
    alternates: { canonical: getCanonicalUrl("/previous-year-paper") },
    openGraph: {
        title: "Navodaya Previous Year Question Papers – Download PDFs",
        description: "Download Navodaya previous year question papers for Class 6 & 9. Get year-wise PDFs, online tests, answer keys, and AI analysis for smarter exam preparation.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Navodaya Previous Year Question Papers – Download PDFs",
        description: "Download Navodaya previous year question papers for Class 6 & 9. Get year-wise PDFs, online tests, answer keys, and AI analysis for smarter exam preparation.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const faqData = [
    {
        question: "1. Where can I download Navodaya previous year question papers?",
        answer: "You can download all Navodaya previous year question papers year-wise and class-wise directly from this page, including PDF download options."
    },
   {
        question: "2. Are papers available separately for Class 6 and Class 9?",
        answer: "Yes. You can access Navodaya previous year question paper Class 6 and Navodaya previous year question paper Class 9 section-wise for better clarity."
    },
     {
        question: "3. Can I download the Navodaya previous year question paper Class 6 PDF?",
        answer: "Absolutely. Each year’s Class 6 papers include a PDF download option with clean formatting."
    },
    {
        question: "4. Can I download the Navodaya previous year question paper Class 9 PDF?",
        answer: "Yes, students can access navodaya previous year question paper class 9 pdf download for every year from 2020 to 2024 and beyond."
    },
     {
        question: "5. Do you provide answer keys for previous year papers?",
        answer: "Yes. Both PDFs and online tests include answers and explanations for better understanding."
    },
    {
        question: "6. Can I attempt Navodaya PYQs as online tests?",
        answer: "Yes! Shikso allows you to take the PYQ as a timed mock test with real exam-style experience."
    },
   {
        question: "7. Will I get an analysis after completing the PYQ test?",
        answer: "Yes. Students receive AI-powered test analysis, including weak areas, accuracy, speed, and improvement suggestions."
    },
];

const page = () => {
   
  return (
    <>
            <CommonBanner1
                title={"Navodaya Vidyalaya Previous Year Question Paper"}
                paraghraph={"Every great result starts with smart preparation. Solving Navodaya previous year question papers builds confidence."}
                breadcom={[{ title: "Previous Year Paper" }]}
            />
            <Paper1 />
            <Paper2 />
            <Paper3 />
            </>
  )
}

export default page