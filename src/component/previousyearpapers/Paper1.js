"use client";

import React from "react";
import Image from "next/image";

const Paper1 = ({
  title = "Year-wise Question Papers",
  description = "Select your preferred year to begin.",
  cards = [],
}) => {
  return (
    <div className="custom-container py-6 md:py-10 justify-items-center">
      <div className="flex gap-2 items-center">
        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
        <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]">
          {title}
        </h3>
      </div>

      <p className="dm_sans text-[#484545] responsive-text mt-1 mb-8">
        {description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-12 items-center">
        {cards.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-5 border border-[#4845454D] shadow-sm bg-white"
          >
            <Image
              src={item.img}
              alt={item.year}
              width={50}
              height={50}
              className="object-contain bg-[#E5FBFF]"
            />

            <div>
              <p className="font-semibold responsive-text">{item.year}</p>
              <p className="text-[#1D1C1C] text-[16px] mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paper1;
