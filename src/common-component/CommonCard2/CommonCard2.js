"use client"
import Image from "next/image";
import React, { useState } from "react";

const CommonCard2 = ({ icon, title, description, founder, points = [], }) => {

  const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
  const [imgSrc, setImgSrc] = useState(icon || FALLBACK);

  return (
    <div>
      <div className="relative  max-w-xs mx-auto bg-white shadow p-7 text-center flex flex-col items-center 
   cursor-pointer  hover:bg-gray-200  focus:bg-gray-200  active:bg-gray-200  group-hover:bg-gray-200
     group-focus:bg-gray-200  group-active:bg-gray-200 sm:h-75 md:h-87" >
        <div className="absolute top-[-45px]">
          <div className=" border-3 border-amber-400 rounded-full overflow-hidden">
            <Image
              src={imgSrc}
              alt={title}
              width={96}
              height={96}
              onError={() => {
                if (imgSrc !== FALLBACK_IMAGE) {
                  setImgSrc(FALLBACK_IMAGE);
                }
              }}
            />
          </div>
        </div>
        {/* <p className="text-gray-400 text-sm mb-1 mt-8">{founder}</p> */}
        <h3 className="dm_sans mt-10 responsiveheading6 resp font-semibold mb-2">{title}</h3>
        {points?.length > 0 && (
          <ul className="w-fit responsive-text list-disc px-4 text-[#1A2E33] mb-3 text-left">
            {points.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <p className="dm_sans responsive-text font-light text-[#6c757d] mb-2   leading-6 lg:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommonCard2;