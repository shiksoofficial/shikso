"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import Image from 'next/image'
import React, { useState } from 'react'

const testCard = [
    {
        id: 1,
        subtitle: "Class 6 Previous Year Papers",
        pdf: "/pdfs/class6.pdf",
        img: "/aboutus/aboutus1.webp",
        alt: "paper"
    },
    {
        id: 2,
        subtitle: "Class 9 Previous Year Papers",
        pdf: "/pdfs/class9.pdf",
        img: "/icons/file.png",
        alt: "paper"
    },
];

const Practicesets3 = () => {

    const FALLBACK_IMAGE = "/Shiksologo.png";

    const [imgSrcMap, setImgSrcMap] = useState(() =>
        Object.fromEntries(
           testCard.map((item) => [item.id, item.img])
        )
    );

    const handleDownload = (fileUrl) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop(); // auto file name
        link.click();
    };

    return (
        <div>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 mt-2 md:mt-4 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <div className='flex gap-2 items-center'>
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h2 className="dm_sans responsiveheading2 text-[#1D1C1C]"> {` Free Downloads`}</h2>
                        </div>
                        <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8">  {` Download previous year papers for Class 6 and Class 9 to connect practice with real exam patterns.`} </p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {testCard.map((item) => (
                                <div
                                    key={item.id}
                                    className="border-2 border-[#E5FBFF] bg-white shadow-sm flex flex-col rounded-xl items-start"
                                >
                                    <div className="relative w-full h-[200px] max-h-[250px]">
                                        <Image
                                            src={imgSrcMap[item.id] || FALLBACK_IMAGE}
                                            alt={item.alt || "image"}
                                            fill
                                            className="object-cover rounded-xl"
                                            onError={() => {
                                                setImgSrcMap((prev) => ({
                                                    ...prev,
                                                    [item.id]: FALLBACK_IMAGE,
                                                }));
                                            }}
                                        />
                                    </div>

                                    <p className="text-[#00000080] text-[16px] mt-3 px-2">  {item.subtitle}  </p>
                                    <button
                                        onClick={() => handleDownload(item.pdf)}
                                        className="text-[#00D6FF] text-[16px] mt-3 px-2 underline "
                                    >
                                        {`PDF Download`}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Practicesets3;
