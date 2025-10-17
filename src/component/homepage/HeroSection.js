import CustomButton from "@/common-component/CustomButton/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const HeroSection = ({ imageurl, title, title2, button, breadcom }) => {
  return (
    <div className="w-full h-[90vh] md:h-[120vh] relative shrink-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
      <Image
        src={imageurl}
        alt="bannerImage"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      <div className=" absolute inset-0 z-10 flex items-end pb-15 md:pb-10 lg:pb-20">
        <div className="custom-container w-full">
          <p className="text-[#dc3545]">{title}</p>
          <h1 className="text-[3rem] w-[300px] leading-[3rem] text-white">
            {title2}
          </h1>
          <p className="mt-5 mb-10 text-white">{`Amazing Playground for your kids`}</p>
          {button && <CustomButton color="#dc3545">LEARN MORE</CustomButton>}
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
                      className="dm_sans text-[15px] text-white hover:text-[#dc3545] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="dm_sans text-[15px] text-white">
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
