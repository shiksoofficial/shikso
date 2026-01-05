"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomButton2 from "../CustomBotton2/CustomButton2";
import { FaUsers } from "react-icons/fa";
import { MdLayers } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import CustomButton from "../CustomButton/CustomButton";
import Image from "next/image";

const TestSeriesCard = ({
  img,
  users,
  title,
  totalTests,
  freeTests,
  languages,
  category,
  startDate,
  endDate,
  moreTests,
  text,
  onClick,
  page,
}) => {

  const FALLBACK_IMAGE = "/Shiksologo.png";
  const [imgSrc, setImgSrc] = useState(img || FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(img || FALLBACK_IMAGE);
  }, [img]);


  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-5 border-gray-300 border-1">
      <div className="flex justify-between items-center">
        <h2 className="dm_sans responsiveheading2 font-semibold mt-4">{title}</h2>
      </div>
      <div className="relative w-full h-20 bg-gradient-to-r from-purple-300 to-green-300 overflow-hidden mt-1">
        <Image
          src={imgSrc}
          alt={title || "test series image"}
          fill
          className="object-cover"
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGE) {
              setImgSrc(FALLBACK_IMAGE);
            }
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="flex flex-col items-center bg-gray-50 rounded-lg py-3">
          <p className="dm_sans text-xl font-bold">{totalTests}</p>
          <p className="dm_sans text-xs text-gray-600">{`Total Tests`}</p>
        </div>
        <div className="flex flex-col items-center bg-green-50 border border-green-200 rounded-lg py-3">
          <p className="dm_sans text-xl font-bold text-green-600">{freeTests}</p>
          <p className="dm_sans text-xs text-gray-600">{`Free Tests`}</p>
        </div>
      </div>
      <p className="text-xs text-gray-700 mt-3 flex items-center gap-2"><FaEarthAmericas className="text-blue-600" /> {languages}</p>
      <div className="mt-3 space-y-2 dm_sans responsive-text text-gray-700">
        <p className="flex items-center gap-2 dm_sans responsive-text">
          <MdLayers size={16} className="text-green-600" /> {category}
        </p>
        <p className="flex items-center gap-2 dm_sans responsive-text">
          <CiCalendarDate size={16} className="text-blue-600" /> {`Start Date: `}{startDate}
        </p>
        <p className="flex items-center gap-2 dm_sans responsive-text">
          <CiCalendarDate size={16} className="text-purple-600" /> {`End Date: `}{endDate}
        </p>
      </div>
      <div className="w-fit m-auto mt-3">
        {/* Use Link if page is provided, otherwise use onClick */}
        {page ? (
          <Link href={page}>
            <CustomButton className="w-full mt-4 bg-cyan-600  py-2 rounded-lg font-semibold hover:bg-cyan-700 transition">
              {text}
            </CustomButton>
          </Link>
        ) : (
          <CustomButton
            onClick={onClick}
            className="w-full mt-4 bg-cyan-600  py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            {text}
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default TestSeriesCard;