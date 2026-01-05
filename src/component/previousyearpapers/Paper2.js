"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/common-component/CustomButton/CustomButton";

const Paper2 = ({
  title = "Class-wise Papers",
  description = "Quick access to question papers based on your class.",
  buttonText = "Download Now",
  onButtonClick,
  cards = [],
  backgroundClass = "bg-[#E5FBFF]",
}) => {

  const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";

  const [imgSrcMap, setImgSrcMap] = useState(() =>
    Object.fromEntries(
      cards.map((item) => [item.id, item.img])
    )
  );

  return (
    <div className={backgroundClass}>
      <div className="custom-container py-6 md:py-10">
        <div className="grid grid-cols-12 gap-8 mt-2 md:mt-4 items-center">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex gap-2 items-center">
              <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
              <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]">
                {title}
              </h3>
            </div>

            <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8">
              {description}
            </p>

            <CustomButton
              className="px-9 responsive-text"
              onClick={onButtonClick}
            >
              {buttonText}
            </CustomButton>
          </div>

          <div className="col-span-12 sm:col-span-6 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="object-contain rounded-full bg-[#0000000D]"
                    onError={() => {
                      setImgSrcMap((prev) => ({
                        ...prev,
                        [item.id]: FALLBACK_IMAGE,
                      }));
                    }}
                  />
                  <p className="font-semibold responsive-text mt-3">
                    {item.classes}
                  </p>
                  <p className="text-[#00000080] text-[16px] mt-1">
                    {item.pdf}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paper2;
