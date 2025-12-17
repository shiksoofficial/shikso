import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import PracticeSets1 from '@/component/practicesets/PracticeSets1'
import Practicesets2 from '@/component/practicesets/practicesets2'
import Practicesets3 from '@/component/practicesets/Practicesets3'
import Practicesets4 from '@/component/practicesets/Practicesets4'
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
    title: "Sainik School Unlimited Practice | Topic-Wise Smart Learning",
    description: "Practice unlimited Sainik School questions topic-wise for Class 6 & 9. Get AI analytics, instant feedback & PYQ downloads with Shikso’s SmartSet.",
    keywords: ["sainik school unlimited practice", "sainik school online practice se", "class 6 sainik school practice", "class 9 sainik school practice", "sainik school mock test", "sainik school smartset", "sainik school topic wise practic", " sainik school ai analytics", "shikso sainik practice", "sainik school preparation online"],
    alternates: { canonical: "https://www.shikso.com/sainik-school-smartset/unlimited-practice" },
    openGraph: {
        title: "Sainik School Unlimited Practice | Topic-Wise Smart Learning",
        description: "Practice unlimited Sainik School questions topic-wise for Class 6 & 9. Get AI analytics, instant feedback & PYQ downloads with Shikso’s SmartSet.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sainik School Unlimited Practice | Topic-Wise Smart Learning",
        description: "Practice unlimited Sainik School questions topic-wise for Class 6 & 9. Get AI analytics, instant feedback & PYQ downloads with Shikso’s SmartSet.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const faqData = [
    {
        question: "1. What is the Sainik School Unlimited Practice Set on Shikso?",
        answer: "A comprehensive system offering unlimited questions across subjects and topics to support AISSEE preparation."
    },
    {
        question: "2. Can I practice subject-wise questions for Sainik School?",
        answer: "Yes. Practice unlimited questions in Mathematics, English, General Knowledge, and Intelligence."
    },
    {
        question: "3. Is this useful for Class 6 AISSEE preparation?",
        answer: "Definitely. It supports foundational learning for confident Class 6 exam preparation."
    },
    {
        question: "4. Are unlimited practice sets available for Class 9 as well?",
        answer: "Yes. Advanced topics and difficulty levels are available to prepare Class 9 aspirants."
    },
    {
        question: "5. Will I get detailed analytics after each practice session?",
        answer: "Yes. Get instant performance reports with accuracy, timing, weak topics, and AI-guided improvement tips."
    },
    {
        question: "6. Can I practice online without downloading anything?",
        answer: "Yes. Everything works online, but previous year papers can be downloaded for offline study."
    },
    {
        question: "7. Are practice questions based on the current Sainik School entrance exam syllabus?",
        answer: "Yes. All content is aligned with the latest AISSEE guidelines to ensure exam readiness."
    },
    {
        question: "8. Is this platform suitable for all learning speeds?",
        answer: "Absolutely. Easy navigation, hints, and instant feedback make it ideal for diverse learners."
    },
    {
        question: "9. How does Shikso promote smarter learning?",
        answer: "Through unlimited practice, AI-powered guidance, and a calm, distraction-free environment, letting students learn their way."
    },
];

const page = () => {
    return (
        <>
            <CommonBanner1
                title={"Sainik School Unlimited Practice"}
                paraghraph={"Unlock unlimited Sainik School practice with Shikso — disciplined, smart, and student-friendly learning designed for every future cadet."}
                breadcom={[{ title: "Unlimited Practice Set" }]} />
            <PracticeSets1 />
            <Practicesets2 />
            <Practicesets3 />
            <Practicesets4 />
            <CommonFaq title=" – Sainik School Unlimited Practice Sets" faqData={faqData} />
        </>
    )
}

export default page