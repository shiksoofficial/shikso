"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import Image from 'next/image'
import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
// import { useRouter } from 'next/navigation';

const testCard = [
    {
        id: 1,
        title: "Navodaya Previous Year Question Paper Class 6",
        subtitle: "PDF Download Available",
        img: "/aboutus/aboutus1.webp",
        alt: "paper"
    },
    {
        id: 2,
        title: "Navodaya Previous Year Question Paper Class 9",
        subtitle: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper"
    },
];

const Paper3 = () => {
    return (
        <div>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 v mt-2 md:mt-4 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <div className='flex gap-2 items-center'>
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]"> {`Smart Practice Tests`}</h3>
                        </div>
                        <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8"> {` Attempt the same PYQ as a real-time mock test.`} </p>
                        <CustomButton className="px-9 responsive-text">
                            {` Appear for the Online Test`}
                        </CustomButton>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {testCard.map((item) => (
                                <div
                                    key={item.id}
                                    className="border-2 border-[#E5FBFF] bg-white shadow-sm flex flex-col "
                                >
                                    <div className="relative w-full h-[200px] max-h-[250px]">
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <p className="text-[#00000080] text-[16px] mt-3 px-2">  {item.subtitle}</p>
                                    <p className="font-semibold responsive-text mt-2  px-2">  {item.title}</p>
                                    <div className='mt-3 flex gap-3 px-2 mb-3'>
                                        <GiTrophyCup color='gold' />
                                        <BsGraphUpArrow color='red' />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Paper3;
