"use client";

import { useState } from "react";
import CustomButton2 from "@/common-component/CustomBotton2/CustomButton2";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import Image from "next/image";
import ConnectUsModal from "@/common-component/ConnectUsModal/ConnectUsModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <ConnectUsModal open={isModalOpen} setOpen={setIsModalOpen} />
      <section className="w-full bg-[#E6F9FF] py-20">
        <div className="max-w-7xl mx-auto px-6 sm:flex items-center justify-between gap-20">
          <div className="sm:w-1/2 space-y-6">
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              dangerouslySetInnerHTML={{
                __html: `Learn Smarter.<br/>Shine Brighter.<br/>With Shikso!`,
              }}
            />
            <p className="text-gray-700 text-lg max-w-md">
              {` Fun, focused, and personalized learning for every young achiever.`}
            </p>
            <div className="flex items-center gap-4">
              <CustomButton onClick={handleOpen}>
                {`Start Learning`}
              </CustomButton>

              <CustomButton2 variant="primary">
                {`View Courses`}
              </CustomButton2>
            </div>
          </div>
          <div className="sm:w-1/2 flex items-center justify-center mt-10 sm:mt-0">
            <div className="relative w-full max-w-[600px] aspect-[600/418]">
              <Image
                src="/herobanner.webp"
                alt="Mascot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
