"use client"
import Image from "next/image";
import React, { useState } from "react";

const classCard = [
    {
        id: 1,
        title: "Result Analytics Report",
        subtitle: "Instant insights on accuracy, speed, score, and strength areas.",
        img: "/aboutus/aboutus.webp",
        alt: "paper",
    },
    {
        id: 2,
        title: "Answer Key Dropdown",
        subtitle: "View correct answers with explanations.",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
    },
    {
        id: 3,
        title: "Download Test PDF",
        subtitle: "Save for offline revision.",
        img: "/aboutus/aboutus.webp",
        alt: "paper",
    },
    {
        id: 4,
        title: "AI Suggestions",
        subtitle: "Learn what to improve before the real exam.",
        img: "/aboutus/aboutus1.webp",
        alt: "paper",
    },
];

export const Mocktests2 = () => {
    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
    const [imgSrcMap, setImgSrcMap] = useState(
        () =>
            Object.fromEntries(
                classCard.map((item) => [item.id, item.img])
            )
    );
    return (
        <div className="bg-[#E5FBFF]">
            <div className="custom-container py-6 md:py-10 justify-items-center ">
                <div className="flex gap-2 items-center mb-4">
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
                    <h2 className="dm_sans responsiveheading2 text-[#1D1C1C]">{`Test Experience`}</h2>
                </div>
                <p className="dm_sans text-[#484545] responsive-text whitespace-normal mb-6">{`Upon starting your test, you will enjoy a calm and clean screen.`}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 px-4 py-6">
                    {classCard.map((item) => (
                        <div key={item.id}
                            className="relative bg-[#E8FBFF] border border-[#00D6FF] rounded-xl p-4 min-h-[217px]">
                            <div className="absolute bottom-[-28px] left-4 w-20 h-20  rounded-full flex items-center justify-center">
                                <Image
                                    src={imgSrcMap[item.id]}
                                    alt={item.alt}
                                    width={80}
                                    height={80}
                                    className="object-cover rounded-full"
                                    onError={() => {
                                        setImgSrcMap((prev) => ({
                                            ...prev,
                                            [item.id]: FALLBACK_IMAGE,
                                        }));
                                    }}
                                />
                            </div>
                            <p className="text-[#484545] responsive-text font-semibold! leading-relaxed mb-3">{item.title}</p>
                            <p className="text-[#484545]  text-[16px] mb-1 line-clamp-2"> {item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
