"use client";

import React, { useState } from "react";
import Image from "next/image";

const MockTest3 = ({
    title,
    description,
    cards = [],
}) => {

    const FALLBACK_IMAGE = "/Shiksologo.png";

    const [imgSrcMap, setImgSrcMap] = useState(() =>
        Object.fromEntries(
            cards.map((item) => [item.id, item.img])
        )
    );

    return (
        <div className="custom-container py-6 md:py-10">
            <div className="flex gap-2 items-center mb-4">
                <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
                <h2 className="dm_sans responsiveheading2 text-[#1D1C1C]">
                    {title}
                </h2>
            </div>

            {description && (
                <p className="dm_sans text-[#484545] responsive-text whitespace-normal">
                    {description}
                </p>
            )}

            <div className="flex justify-center mt-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 px-3">
                    {cards.map((item) => (
                        <div
                            key={item.id}
                            className="text-center flex flex-col items-center"
                        >
                            <Image
                                src={imgSrcMap[item.id] || FALLBACK_IMAGE} 
                                alt={item.alt || "image"}
                                width={100}
                                height={100}
                                className="object-contain bg-[#0000000D]"
                                onError={() => {                          
                                    setImgSrcMap((prev) => ({
                                        ...prev,
                                        [item.id]: FALLBACK_IMAGE,
                                    }));
                                }}
                            />

                            <p className="text-[#00D6FF] responsive-heading6 mt-3">
                                {item.subtitle}
                            </p>

                            <p className="text-[#484545] responsiveheading5 mt-3">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MockTest3;
