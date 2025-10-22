"use client"
import CustomButton from "@/common-component/CustomButton/CustomButton";
import { countAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import CustomLinkBtn from "@/common-component/CustomLinkBtn/CustomLinBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = ({ imageurl, title, title2, button, breadcom }) => {
    const [count, setCount] = useAtom(countAtom);
    console.log(count)

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-[600px] md:h-[600px] relative shrink-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none"></div>
      <div
        className="absolute inset-0 will-change-transform transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${offsetY * 0.5}px) scale(1.05)`,
        }}
      >
        <Image
          src={imageurl}
          alt="bannerImage"
          fill
          priority
          quality={100}
          className="object-cover"

        />
      </div>
      <div
        className=" absolute inset-0 z-10 flex items-end pb-15 "
        style={{
          transform: `translateY(-${offsetY * 0.4}px)`,
        }}
      >
        <div className="custom-container w-full">
          <p className="indie_flower text-[#dc3545] responsive-text font-medium">{title}</p>
          <h1 className="dm_sans responsive-heading text-white">
            {title2}
          </h1>
          <p className="dm_sans mt-5 mb-10 text-white responsive-text">{`Amazing Playground for your kids`}</p>
          {button && <CustomLinkBtn color="#dc3545"  href='/about-us'>{`LEARN MORE`}</CustomLinkBtn>}
          {breadcom?.length > 0 && (
            <div className="flex items-center gap-1.5 text-white text-base">
              <Link href="/" aria-label="home icon" className="dm_sans text-[15px] text-white hover:text-[#dc3545] transition-colors">
                Home
              </Link>
              {breadcom?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    /
                    {item?.url ? (
                      <Link
                        href={item?.url}
                        className="dm_sans text-[15px] text-white hover:text-[#dc3545] transition-colors responsive-text"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="dm_sans text-[15px] text-white responsive-text">
                        {item.title}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
