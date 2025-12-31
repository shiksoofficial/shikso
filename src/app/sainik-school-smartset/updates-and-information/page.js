import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import Section2 from '@/component/smartset/Section2';
import Updates1 from '@/component/updates/Updates1';
import Updates2 from '@/component/updates/Updates2';
import React from 'react'
import { getCanonicalUrl } from '@/lib/seo';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';


export const metadata = {
    title: " Sainik School Updates & Information – Latest AISSEE Exam News",
    description: " Get the latest from Shikso for Sainik School exam updates & information, AISSEE syllabus details, smart study materials, preparation insights for Class 6 & 9.",
    keywords: [" sainik school exam updates", "sainik school exam updates and information", " sainik school exam updates for class 6 ", " sainik school exam updates for class 9", " aissee updates", "sainik school notifications", "sainik school syllabus"," shikso sainik smartset"," sainik exam news","aissee preparation tips"],
    alternates: { canonical: "https://www.shikso.com/sainik-school-smartset/updates-and-information" },
    openGraph: {
        title: " Sainik School Updates & Information – Latest AISSEE Exam News",
        description: " Get the latest from Shikso for Sainik School exam updates & information, AISSEE syllabus details, smart study materials, preparation insights for Class 6 & 9.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Sainik School Updates & Information – Latest AISSEE Exam News",
        description: " Get the latest from Shikso for Sainik School exam updates & information, AISSEE syllabus details, smart study materials, preparation insights for Class 6 & 9.",
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

const cardsData = [
    {
        img: "/news/news2.jpg",
        alt: "Understanding the syllabus",
        title: "Understanding the syllabus",
        discription: "Get detailed insights on the latest syllabus for Class 6 and 9.",
        buttonText: "Explore",
        buttonLink: "/blogs",
    },
    {
        img: "/news/news2.jpg",
        alt: "Exam Preparation Tips",
        title: "Exam Preparation Tips",
        discription: "Learn effective strategies to maximize your study time.",
        buttonText: "Explore",
        buttonLink: "/blogs",
    },
    {
        img: "/news/news3.jpg",
        alt: "Practice Sets",
        title: "Practice Sets",
        discription: "Access high-quality practice sets for better preparation.",
        buttonText: "Explore",
        buttonLink: "/",
    },
    {
        img: "/news/news3.jpg",
        alt: "Latest Exam Announcements",
        title: "Latest Exam Announcements",
        discription: "Stay updated with the latest exam schedule and notifications.",
        buttonText: "Explore",
        buttonLink: "/educational-news",
    },
];

const faqData = [
    {
        question: "1. Where can I find the latest Sainik School exam updates?",
        answer: " All AISSEE exam updates and information — including Class 6 and Class 9 notifications — are available right here on this page."
    },
    {
        question: "2. Are the updates different for Class 6 and Class 9?",
        answer: " Yes, Shikso provides dedicated updates for Sainik School Class 6 and Sainik School Class 9, including syllabus, pattern, and practice guidance."
    },
    {
        question: "3. Does this page include study articles and preparation guides?",
        answer: " Absolutely. You’ll find blogs, guides, strategy articles, and preparation tips specially designed for AISSEE students."
    },
     {
        question: "4. Does Shikso offer smart study material for the Sainik School entrance exam?",
        answer: " Yes. Along with updates, the page provides Smart Study Material, topic-wise practice insights, and exam-specific learning guidance."
    },
     {
        question: "5. How often are Sainik School updates published?",
        answer: " Updates are shared regularly so students, parents, and teachers always have the latest and most accurate AISSEE information."
    },
];

const page = () => {
    return (
        <>
            <CommonBanner1
                title={"Sainik School Exam Updates & Information "}
                paraghraph={"Your trusted place for every Sainik School exam update, syllabus detail, notification, and preparation insight."}
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
            <CommonFaq title=" for Sainik School Updates & Information Page" faqData={faqData} />
        </>
    )
}

export default page;