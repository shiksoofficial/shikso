"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton2 from "@/common-component/CustomBotton2/CustomButton2";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import ConnectUsModal from "@/common-component/ConnectUsModal/ConnectUsModal";

export default function HeroSection({
  breadcom = [],
  title = `Learn Smarter.<br/>Shine Brighter.<br/>With Shikso!`,
  title2 = `Fun, focused, and personalized learning for every young achiever.`,
  image = "/herobanner.webp",
  showPrimaryBtn = true,
  primaryBtnText = "Start Learning",
  onPrimaryClick,
  showSecondaryBtn = true,
  secondaryBtnText = "View Courses",
  secondaryBtnLink = "/courses",
  hideImageOnMobile = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrimary = () => {
    if (onPrimaryClick) return onPrimaryClick();
    setIsModalOpen(true);
  };

  const FALLBACK_IMAGE = "/Shiksologo.png";
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <>
      <ConnectUsModal open={isModalOpen} setOpen={setIsModalOpen} />
      <section className=" bg-[#E6F9FF] relative">
        <div className="custom-container py-6 md:py-10">
          <div className="grid sm:grid-cols-2 gap-2 pt-18 sm:pt-13 md:pt-6 items-center ">
            <div className="space-y-6">
              <h1 className="responsive-heading  font-bold! leading-tight text-gray-900"
                dangerouslySetInnerHTML={{ __html: title }} />
              <p className="text-gray-700 text-lg max-w-md flex justify-items-center items-center">{`Author : `}{title2}</p>
              <div className="flex items-center gap-4">
                {showPrimaryBtn && (
                  <CustomButton onClick={handlePrimary}>
                    {primaryBtnText}
                  </CustomButton>
                )}

                {showSecondaryBtn && (
                  <CustomButton2 variant="primary" href={secondaryBtnLink}>
                    {secondaryBtnText}
                  </CustomButton2>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className={`relative w-full max-w-[600px] aspect-[600/418] ${hideImageOnMobile ? "hidden sm:block" : ""}`} >
                <Image
                  src={imgSrc}
                  alt="Hero"
                  fill
                  className="object-cover"
                  onError={() => {
                    if (imgSrc !== FALLBACK_IMAGE) {
                      setImgSrc(FALLBACK_IMAGE);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {breadcom?.length > 0 && (
            <div className="max-w-7xl mx-auto mt-1">
              <div className="flex items-center text-gray-700 text-sm">
                <Link href="/" className="hover:text-[#00D6FF] ">  {` Home`} </Link>
                {breadcom.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="px-1">/</span>
                    {item?.url ? (
                      <Link href={item.url}
                        className="hover:text-[#00D6FF] px-1" >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="px-1 text-gray-900">{item.title}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
