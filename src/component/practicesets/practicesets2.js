
"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import Image from 'next/image'
import React, { useState } from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
// import { useRouter } from 'next/navigation';

const testCard = [
    {
        id: 1,
        title: "Instant Feedback",
        subtitle: "Receive immediate analytics to improve your understanding.",
        img: "/aboutus/aboutus1.webp",
        alt: "paper"
    },
    {
        id: 2,
        title: "Unlimited Questions",
        subtitle: "Every topic has hundreds of practice items to reinforce learning.",
        img: "/aboutus/aboutus.webp",
        alt: "paper"
    },
    {
        id: 3,
        title: "Unlimited Attempts",
        subtitle: "Practice without limits to achieve excellence.",
        img: "/aboutus/aboutus1.webp",
        alt: "paper"
    },
];

const Practicesets2 = () => {

    const FALLBACK_IMAGE = "/Shiksologo.png";

    const [imgSrcMap, setImgSrcMap] = useState(() =>
        Object.fromEntries(
            testCard.map((item) => [item.id, item.img])
        )
    );

    return (
        <div className='bg-[#E5FBFF]'>
            <div className="custom-container py-6 md:py-10 justify-items-center">
                <div className='flex gap-2 items-center'>
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]"> {`Smart Practice Tests`}</h3>
                </div>
                <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8"> {` Attempt the same PYQ as a real-time mock test.`} </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                    {testCard.map((item) => (
                        <div
                            key={item.id}
                            className="border-2 border-[#00D6FF] rounded-lg bg-white shadow-sm flex flex-col p-4"
                        >
                            <div className="relative w-full h-[200px] max-h-[250px]">
                                <Image
                                    src={imgSrcMap[item.id] || FALLBACK_IMAGE}
                                    alt={item.alt || "image"}
                                    fill
                                    className="object-cover"
                                    onError={() => {
                                        setImgSrcMap((prev) => ({
                                            ...prev,
                                            [item.id]: FALLBACK_IMAGE,
                                        }));
                                    }}
                                />
                            </div>
                            <p className="font-semibold responsive-text mt-2  px-2">  {item.title}</p>
                            <p className="text-[#00000080] text-[16px] mt-3 px-2">  {item.subtitle}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>

    )
}

export default Practicesets2;
