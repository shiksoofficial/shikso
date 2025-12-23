"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import { GiTrophyCup } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";

const Paper3 = ({
  title = "Smart Practice Tests",
  description = "Attempt the same PYQ as a real-time mock test.",
  buttonText = "Appear for the Online Test",
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
      <div className="grid grid-cols-12 mt-2 md:mt-4 items-center">
        <div className="col-span-12 md:col-span-6">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
            <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]">
              {title}
            </h3>
          </div>

          <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8">
            {description}
          </p>

          <CustomButton className="px-9 responsive-text"
            onClick={() => window.location.href = "/test-series"}>
            {buttonText}
          </CustomButton>
        </div>

        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#E5FBFF] bg-white shadow-sm flex flex-col"
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

                <p className="text-[#00000080] text-[16px] mt-3 px-2">
                  {item.subtitle}
                </p>
                <p className="font-semibold responsive-text mt-2 px-2">
                  {item.title}
                </p>

                <div className="mt-3 flex gap-3 px-2 mb-3">
                  <GiTrophyCup color="gold" />
                  <BsGraphUpArrow color="red" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper3;
