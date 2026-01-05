"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const feedbackCard = [
    {
        id: 1,
        title: " Radhika Sharma – Parent, Indore",
        description: " “Shikso has completely changed the way my son studies. The gamified quizzes and progress reports make learning enjoyable and effective!”",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 5,
    },
    {
        id: 2,
        title: "Aman Verma – Class 8 Student, Lucknow",
        description: " “I used Shikso SmartSet to prepare for my Navodaya exam. The AI-based practice system helped me understand my weak areas easily.”",
        img: "/icons/file.png",
        alt: "paper",
        rating: 5,
    },
    {
        id: 3,
        title: " Principal Meenakshi Rao – Green Valley School, Bhopal",
        description: " “As an educator, I find Shikso’s platform revolutionary. It bridges the gap between classroom teaching and digital learning perfectly.”",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 5,
    },
    {
        id: 4,
        title: " Priya Gupta – Parent, Delhi",
        description: " “The Shikso Smart Learning App is intuitive, interactive, and aligned with modern education standards. Highly recommended for all parents.”",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 5,
    },
];

const Practicesets4 = () => {
    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";

    const [imgSrcMap, setImgSrcMap] = useState(() =>
        Object.fromEntries(
            feedbackCard.map((item) => [item.id, item.img])
        )
    );
    return (
        <div>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 mt-2 md:mt-4 items-start gap-6">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex gap-2 items-center">
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h2 className="dm_sans responsiveheading2 text-[#1D1C1C]">{` What Our Students Say`}</h2>
                        </div>
                        <p className="dm_sans text-[#484545] responsive-text mt-3 mb-6 md:mb-8"> {` Hear from students on how Shikso has transformed their learning.`} </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <Splide
                            options={{
                                type: "loop",
                                perPage: 2,
                                autoplay: true,
                                interval: 3000,
                                pauseOnHover: true,
                                gap: "1.5rem",
                                arrows: false,
                                pagination: true,

                                breakpoints: {
                                    640: { perPage: 1 },
                                    768: { perPage: 1 },
                                    1024: { perPage: 2 },
                                },
                            }}
                            aria-label="Client Testimonials"
                            className="w-full">
                            {feedbackCard.map((item) => (
                                <SplideSlide key={item.id}>
                                    <div className="bg-white rounded-xl shadow-md w-full max-w-[380px] mx-auto mb-9 h-[280px] p-5 flex flex-col">
                                        <div className="flex items-center justify-between">
                                            <Image
                                                src={imgSrcMap[item.id] || FALLBACK_IMAGE}
                                                alt={item.alt || "image"}
                                                width={60}
                                                height={70}
                                                className="rounded-full object-cover ring-2 ring-[#00D6FF]"
                                                onError={() => {
                                                    setImgSrcMap((prev) => ({
                                                        ...prev,
                                                        [item.id]: FALLBACK_IMAGE,
                                                    }));
                                                }}
                                            />
                                            <div className="flex gap-[2px] text-yellow-400">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <FaStar key={i} size={14} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="mt-3 font-semibold dm_sans text-[#1D1C1C] responsive-text">{item.title}</p>
                                        <p className="mt-2 text-[#484545] text-[15px] leading-relaxed flex-grow">{item.description}</p>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practicesets4;
