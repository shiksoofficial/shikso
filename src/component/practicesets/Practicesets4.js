"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const feedbackCard = [
    {
        id: 1,
        title: "Aarav",
        description: "The unlimited questions helped me build my confidence!",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 5,
    },
    {
        id: 2,
        title: "Sana",
        description: "Easy to use and very effective for my exam preparations.",
        img: "/icons/file.png",
        alt: "paper",
        rating: 4,
    },
    {
        id: 3,
        title: "Kabir",
        description: "I improved so much with regular practice!",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 3,
    },
    {
        id: 4,
        title: "Anaya",
        description: "Very helpful and student-friendly interface!",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
        rating: 5,
    },
];

const Practicesets4 = () => {
    const FALLBACK_IMAGE = "/Shiksologo.png";

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
                            className="w-full"
                        >
                            {feedbackCard.map((item) => (
                                <SplideSlide key={item.id}>
                                    <div className="p-5 bg-[#EFEFEF] rounded-lg shadow-sm w-full max-w-[380px] mx-auto mb-9 ">
                                        <div className="flex items-start justify-between ">
                                            <div className="flex gap-4 items-center">
                                                <Image
                                                    src={imgSrcMap[item.id] || FALLBACK_IMAGE}
                                                    alt={item.alt || "image"}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-full object-cover"
                                                    onError={() => {
                                                        setImgSrcMap((prev) => ({
                                                            ...prev,
                                                            [item.id]: FALLBACK_IMAGE,
                                                        }));
                                                    }}
                                                />
                                                <p className="font-semibold responsive-text">{item.title}</p>
                                            </div>
                                            <div className="flex gap-[2px] text-yellow-400">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <FaStar key={i} size={14} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-[#1D1C1C] text-[16px] mt-2">{item.description}</p>
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
