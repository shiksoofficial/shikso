"use client"
import React, { useState } from "react";
import CustomButton2 from "../CustomBotton2/CustomButton2";
import Image from "next/image";
import CustomLinkBtn from "../CustomLinkBtn/CustomLinBtn";

const CommonCard3 = ({ icon, title, description, description1, buttonText, buttoncolor, link }) => {

    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
    const [imgSrc, setImgSrc] = useState(icon || FALLBACK);

    return (
        <div className="max-w-sm  bg-white rounded-2xl shadow p-4 text-center items-center 
    cursor-pointer  hover:bg-gray-200  focus:bg-gray-200  active:bg-gray-200  group-hover:bg-gray-200
     group-focus:bg-gray-200  group-active:bg-gray-200 ">
            <div className=" flex flex-nowrap mb-6 items-center gap-1.5">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={50}
                    height={50}
                    onError={() => {
                        if (imgSrc !== FALLBACK_IMAGE) {
                            setImgSrc(FALLBACK_IMAGE);
                        }
                    }}
                />
                <h4 className="dm_sans responsiveheading6 font-semibold ">{title}</h4>
            </div>

            <div className="">
                <p className='dm_sans responsive-text font-light text-[#6c757d] mb-1.5 md:mb-3 leading-6! line-clamp-2 '>{description}</p>
                {/* <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6!'>{description1}</p> */}
            </div>
            <CustomLinkBtn
                href={link}
                color={buttoncolor}>
                {buttonText}
            </CustomLinkBtn>
        </div>
    );
};

export default CommonCard3;