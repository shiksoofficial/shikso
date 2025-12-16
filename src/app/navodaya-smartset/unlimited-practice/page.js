import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import PracticeSets1 from '@/component/practicesets/PracticeSets1'
import Practicesets2 from '@/component/practicesets/practicesets2'
import Practicesets3 from '@/component/practicesets/Practicesets3'
import Practicesets4 from '@/component/practicesets/Practicesets4'
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
    title: "Navodaya Unlimited Practice | Topic-Wise Learning Online |",
    description: "Practice unlimited Navodaya questions by topic and subject wise for Class 6 & 9. Get instant feedback, AI analytics, and PYQ downloads with Shikso’s SmartSet.",
    keywords: ["navodaya unlimited practice", "navodaya topic wise practice", "class 6 navodaya practice", "class 9 navodaya practice", "navodaya online practice set", "navodaya smartset", "ai analytics navodaya", "shikso navodaya practice"],
    alternates: { canonical: getCanonicalUrl("/navodaya-smartset/unlimited-practice-sets") },
    openGraph: {
        title: "Navodaya Unlimited Practice | Topic-Wise Learning Online |",
        description: "Practice unlimited Navodaya questions by topic and subject wise for Class 6 & 9. Get instant feedback, AI analytics, and PYQ downloads with Shikso’s SmartSet.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Navodaya Unlimited Practice | Topic-Wise Learning Online |",
        description: "Practice unlimited Navodaya questions by topic and subject wise for Class 6 & 9. Get instant feedback, AI analytics, and PYQ downloads with Shikso’s SmartSet.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const faqData = [
    {
        question: "1. What is the Navodaya Unlimited Practice Set on Shikso?",
        answer: "It is a smart practice system where students can solve unlimited questions for every topic, subject, and class. It supports Navodaya SmartSet, Navodaya Entrance Preparation Online, and daily improvement."
    },
    {
        question: "2. Can I practice subject-wise questions for Navodaya?",
        answer: "Yes. Students can practice using Navodaya unlimited practice test subject wise, including Maths, Mental Ability, English, GK, and Hindi."
    },
    {
        question: "3. Is this helpful for Class 6 Navodaya exam preparation?",
        answer: "Absolutely. Our Navodaya online test and unlimited topic-wise practice sets help Class 6 students prepare confidently and improve quickly."
    },
    {
        question: "4. Do you offer unlimited practice for Class 9 as well?",
        answer: "Yes. Class 9 aspirants get separate topics, patterns, and difficulty levels for deeper practice and better results."
    },
    {
        question: "5. Will I get an analytics report after each practice set?",
        answer: "Yes. After every session, Shikso gives a smart analytics report showing accuracy, time, weak topics, and AI-powered improvement tips."
    },
    {
        question: "6. Do I need to download anything to start unlimited practice?",
        answer: "No. Everything works online. However, you can also download Navodaya previous year papers for offline revision."
    },
    {
        question: "7. Is the unlimited practice set part of Navodaya SmartSet?",
        answer: "Yes. It is one of the main features of Navodaya SmartSet, offering continuous, structured, and child-friendly practice."
    },
    {
        question: "8. Are the questions based on actual Navodaya exam patterns?",
        answer: "Yes. All questions follow the latest patterns to improve real exam readiness."
    },
    {
        question: "9. Is this suitable for slow learners?",
        answer: "Yes. The platform uses simple screens, easy language, hints, and instant feedback — perfect even for Class 4 and Class 5 students."
    },
    {
        question: "10. How does Shikso make learning smarter?",
        answer: "Through the Future of Smart Learning approach — AI guidance, unlimited practice, smart suggestions, and a calm environment that helps children learn at their own pace."
    },
];

const page = () => {
    return (
        <>
            <CommonBanner1
                title={"Unlock Unlimited Navodaya Practice"}
                paraghraph={"Experience simple, smart, and student-friendly learning with endless topic-wise questions."}
                breadcom={[{ title: "Unlimited Practice Set" }]} />
            <PracticeSets1 />
            <Practicesets2 />
            <Practicesets3 />
            <Practicesets4 />
            <CommonFaq title="– Navodaya Unlimited Practice Sets" faqData={faqData} />
        </>
    )
}

export default page