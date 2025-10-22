import React from "react";
import CustomButton2 from "../CustomBotton2/CustomButton2";
import Image from "next/image";

const CommonCard1 = ({ icon, title, description, buttonText, buttoncolor }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow p-7 text-center flex flex-col items-center 
    cursor-pointer  hover:bg-gray-200  focus:bg-gray-200  active:bg-gray-200  group-hover:bg-gray-200
     group-focus:bg-gray-200  group-active:bg-gray-200">
      <div className="mb-6">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />

      </div>
      <h3 className="dm_sans responsiveheading6 font-semibold mb-5">{title}</h3>
      <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6! lg:leading-8!'>{description}</p>
      <CustomButton2
        color={buttoncolor}
      >
        {buttonText}
      </CustomButton2>
    </div>
  );
};

export default CommonCard1;