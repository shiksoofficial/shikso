import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import Section2 from '@/component/smartset/Section2';
import Updates1 from '@/component/updates/Updates1';
import Updates2 from '@/component/updates/Updates2';
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';


export const metadata = {
    title: "  Disclaimer | Shikso – Educational Information Transparency",
    description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
    keywords: ["Shikso disclaimer", "education platform terms", " online learning disclaimer", "student information disclaimer", "Shikso policy"],
    alternates: { canonical: getCanonicalUrl("/disclaimer-policy") },
    openGraph: {
        title: " Disclaimer | Shikso – Educational Information Transparency",
        description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Disclaimer | Shikso – Educational Information Transparency",
        description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const cardsData = [
    {
        img: "/news/news2.jpg",
        alt: "Understanding the syllabus",
        title: "Understanding the syllabus",
        discription: "Get detailed insights on the latest syllabus for Class 6 and 9.",
        buttonText: "Explore",
        buttonLink: "/updates-and-information",
    },
    {
        img: "/news/news2.jpg",
        alt: "Exam Preparation Tips",
        title: "Exam Preparation Tips",
        discription: "Learn effective strategies to maximize your study time.",
        buttonText: "Explore",
        buttonLink: "/educational-news/practice-learning",
    },
    {
        img: "/news/news3.jpg",
        alt: "Practice Sets",
        title: "Practice Sets",
        discription: "Access high-quality practice sets for better preparation.",
        buttonText: "Explore",
        buttonLink: "/educational-news/expansion",
    },
    {
        img: "/news/news3.jpg",
        alt: "Latest Exam Announcements",
        title: "Latest Exam Announcements",
        discription: "Stay updated with the latest exam schedule and notifications.",
        buttonText: "Explore",
        buttonLink: "/educational-news/expansion",
    },
];

const faqData = [
    {
        question: "1. Where can I find the latest Navodaya exam updates?",
        answer: "You can find all Navodaya exam updates and information on this page, including notifications for both Class 6 and Class 9."
    },
    {
        question: "2. Are the updates different for Class 6 and Class 9 exams?",
        answer: "Yes, Shikso provides dedicated sections for Navodaya exam updates for Class 6 and Navodaya exam updates for Class 9, so students get exactly what they need."
    },
    {
        question: "3. Does this page include articles and blogs for preparation?",
        answer: "Yes, you’ll find helpful blogs, guides, and articles that support Navodaya Entrance Preparation Online in a simple, easy-to-understand way."
    },
    {
        question: "4. Does Shikso provide Smart Study Material for Students here?",
        answer: "Yes, along with updates, the page includes Smart Study Material for Students, tips, insights, and learning guidance.."
    },
    {
        question: "5. How often are Navodaya updates published on this page?",
        answer: "Updates are posted regularly so students and parents get fresh, accurate information throughout the preparation journey."
    },
];

const page = () => {
    return (
        <>
            <CommonBanner1
                title={"Stay exam-ready with all Navodaya updates!"}
                paraghraph={"Navodaya SmartSet – Updates & Information page brings together the latest exam info, syllabus details, and study materials."}
                breadcom={[{ title: "Updates and Information" }]}
            />

            <div className="custom-container py-6 md:py-10 justify-items-center">
                <div className='flex gap-2 '>
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4 text-[#1D1C1C]">{`Latest Articles & Insights`}</h3>
                </div>
                <p className="dm_sans text-[#484545] responsive-text mb-8">{`Find everything you need for Navodaya Entrance Preparation Online in one place.`}</p>
                <Section2 cards={cardsData} />
            </div>
            <Updates1 />
            <Updates2 />
             <CommonFaq title=" for Navodaya Updates & Information Page" faqData={faqData} />
        </>
    )
}

export default page;