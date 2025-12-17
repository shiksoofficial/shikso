import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import Paper1 from '@/component/previousyearpapers/Paper1'
import Paper3 from '@/component/previousyearpapers/Paper3'
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import Paper2 from '@/component/previousyearpapers/Paper2';

export const metadata = {
    title: " Sainik School Previous Year Question Papers – Download PDFs",
    description: " Download Sainik School previous year question papers for Class 6 & 9. Get year-wise PDFs, online mock tests, answer keys, and AI-powered analysis for AISSEE preparation.",
    keywords: [" sainik school previous year question paper", "sainik school previous year question paper class 9", "sainik school previous year question paper class 6", "sainik school previous year question paper class 9 pdf download", " sainik school previous year question paper class 6 pdf download", "aissee pyq", "sainik school pyq online test", "shikso sainik smartset"],
    alternates: { canonical: "https://www.shikso.com/sainik-school-smartset/previous-year-papers" },
    openGraph: {
        title: " Sainik School Previous Year Question Papers – Download PDFs",
        description: " Download Sainik School previous year question papers for Class 6 & 9. Get year-wise PDFs, online mock tests, answer keys, and AI-powered analysis for AISSEE preparation.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Sainik School Previous Year Question Papers – Download PDFs",
        description: " Download Sainik School previous year question papers for Class 6 & 9. Get year-wise PDFs, online mock tests, answer keys, and AI-powered analysis for AISSEE preparation.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const faqData = [
    {
        question: "1. Where can I download Sainik School previous year question papers?",
        answer: " You can download all AISSEE previous year papers year-wise and class-wise directly from this page, including PDF downloads."
    },
    {
        question: "2. Are papers available separately for Class 6 and Class 9?",
        answer: " Yes, both Sainik School previous year question paper Class 6 and Sainik School previous year question paper Class 9 are available with all sets."
    },
    {
        question: "3. Do these papers include answer keys?",
        answer: "Yes, both the PDF and the online test versions include answer keys for accurate checking."
    },
    {
        question: "4. Can I attempt AISSEE PYQs as online tests?",
        answer: " Yes! Shikso provides full online PYQ mock tests with OMR-style answering and real-time performance tracking."
    },
    {
        question: "5. Will I get analysis after attempting the online PYQ?",
        answer: " Yes. Students receive complete AI-powered exam analysis, including accuracy, weak topics, speed, and personalised improvement tips."
    },
];

const yearCards = [
    {
        id: 1,
        year: "2024",
        description: "Download or attempt the Sainik School  exam questions for the year 2024.",
        img: "/icons/file.png",
    },
    {
        id: 2,
        year: "2023",
        description: "Explore and practice the questions from last year to excel in your preparation.",
        img: "/icons/file.png",
    },
    {
        id: 3,
        year: "2022",
        description: "Access papers from 2022 and understand the pattern well.",
        img: "/icons/file.png",
    },
    {
        id: 4,
        year: "2021",
        description: "Review your knowledge with the past questions from 2021.",
        img: "/icons/file.png",
    },
];

const classCard = [
    {
        id: 1,
        classes: "Sainik School previous year question paper class 6",
        pdf: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper",
    },
    {
        id: 2,
        classes: "Sainik School previous year question paper class 9",
        pdf: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper",
    },
];

const testCard = [
    {
        id: 1,
        title: "Sainik school Previous Year Question Paper Class 6",
        subtitle: "PDF Download Available",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
    },
    {
        id: 2,
        title: "Sainik school Previous Year Question Paper Class 9",
        subtitle: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper",
    },
];


const page = () => {

    return (
        <>
            <CommonBanner1
                title={"Sainik School Previous Year Question Paper"}
                paraghraph={"Your AISSEE preparation begins with the right practice — download PYQs, attempt tests online, and analyse your performance instantly."}
                breadcom={[{ title: "Previous Year Paper" }]}
            />
            <Paper1
                title="Year-wise Question Papers"
                description="Select your preferred year to begin."
                cards={yearCards}
            />
            <Paper2
                title="Class-wise Papers"
                description="Quick access to question papers based on your class."
                buttonText="Download Now"
                cards={classCard}
            />
            <Paper3
                title="Smart Practice Tests"
                description="Attempt the same PYQ as a real-time mock test."
                buttonText="Appear for the Online Test"
                cards={testCard}
            />
            <CommonFaq title=" – Sainik School Previous Year Question Paper Page" faqData={faqData} />
        </>
    )
}

export default page