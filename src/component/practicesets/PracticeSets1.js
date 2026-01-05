"use client";

import CustomButton from "@/common-component/CustomButton/CustomButton";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const classes = ["Class 6", "Class 9"];
const subjects = ["Maths", "Mental Ability", "English", "Hindi", "General Knowledge"];
const topics = ["Chapter 1", "Chapter 2", "Chapter 3"];

export default function PracticeSets1() {
    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
    const [imgSrc, setImgSrc] = useState("/aboutus/aboutus1.webp");

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const router = useRouter();
    const handleStartPractice = () => {
        // console.log("Button Clicked!"); 
        try {
            router.push("/test-series");
            // console.log("Navigation triggered");
        } catch (error) {
            console.error("Navigation error:", error);
        }
    };

    return (
        <div >
            <div className="custom-container grid grid-cols-12 gap-7 py-10">
                <div className="col-span-12 md:col-span-6">
                    <div className='flex gap-2 '>
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h2 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4 text-[#1D1C1C]">{`Select Your Practice Options`} </h2>
                    </div>
                    <p className="dm_sans text-[#484545] responsive-text whitespace-normal mb-8">{` Choose your class, subject, and topic to start practicing.`}</p>
                    <div className="mb-5">
                        <p className="text-[16px] font-bold mb-2 text-[#1d1c1c]">{`Select Your Class`}</p>
                        <div className="flex gap-3">
                            {classes.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSelectedClass(item)}
                                    className={`px-6 py-2 rounded-full border transition 
                                        ${selectedClass === item
                                            ? "bg-[#CBF3FF] border-0 text-black"
                                            : "bg-[#E5FBFF] border-0 text-[#666]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] font-bold mb-2 text-[#1d1c1c]">{`Choose Subject`}</p>
                        <div className="flex flex-wrap gap-3">
                            {subjects.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSelectedSubject(item)}
                                    className={`px-4 py-2 rounded-full border transition 
                                       ${selectedSubject === item
                                            ? "bg-[#CBF3FF] border-0 text-black"
                                            : "bg-[#E5FBFF] border-0 text-[#666]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] font-bold mb-2 text-[#1d1c1c]">{`Select Topic`}</p>
                        <div className="flex gap-3">
                            {topics.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setSelectedTopic(item)}
                                    className={`px-4 py-2 rounded-full border transition 
                                       ${selectedTopic === item
                                            ? "bg-[#CBF3FF] border-0 text-black"
                                            : "bg-[#E5FBFF] border-0 text-[#666]"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* <CustomButton className="mt-5 bg-[#FFF46C] px-6 py-2 rounded-md font-medium hover:bg-[#ffe447]"
                      onClick={() => window.location.href = "/test-series"}>
                        {` Start Practice`}
                    </CustomButton> */}

                    {/* <button
                        type="button"
                        onClick={handleStartPractice}
                        className="mt-5 bg-[#FFF46C] px-6 py-2 rounded-md font-medium hover:bg-[#ffe447] cursor-pointer transition"
                    >
                        Start Practice
                    </button> */}

                    {/* <Link href="/test-series">
                        <button
                            type="button"
                            className="mt-5 ml-3 bg-[#FFF46C] px-6 py-2 rounded-md font-medium hover:bg-[#ffe447] cursor-pointer transition"
                        >
                            Start Practice (Link)
                        </button>
                    </Link> */}

                    <CustomButton
                        type="button"
                        onClick={() => window.location.href = "/test-series"}
                        className="mt-5 ml-3 bg-[#FFF46C] px-6 py-2 rounded-md font-medium hover:bg-[#ffe447] cursor-pointer transition"

                    >
                        {`Start Practice `}
                    </CustomButton>
                </div>
                <div className="col-span-12 md:col-span-6 flex justify-center">
                    <div className="relative w-full max-w[560px] h-[480px] max-h-[480px] shrink">
                        <Image
                            src={imgSrc}
                            alt="Practice Set"
                            fill
                            className="object-cover"
                            onError={() => {
                                if (imgSrc !== FALLBACK_IMAGE) {
                                    setImgSrc(FALLBACK_IMAGE);
                                }
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
