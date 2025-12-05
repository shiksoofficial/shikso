"use client";

import CustomButton2 from "@/common-component/CustomBotton2/CustomButton2";
import React from "react";
import { useRouter } from "next/navigation";

const CommonCard4 = ({
  title,
  description,
  paragraph,
  tagline,
  buttonText = "Get Started",
  bgColor = "#3498db",
  redirectUrl = "/",     
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(redirectUrl);
  };

  return (
    <div className="custom-container m-6 md:m-10">
      <div
        className="border-gray-300 border rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <h3 className="responsiveheading2 font-semibold text-white mb-1">{title}</h3>

         <p className="responsive-text text-white">{description}</p>
          <p className="responsive-text text-white">{paragraph}</p>

          {tagline && <p className="text-white mt-3">{tagline}</p>}
        </div>

        <div className="mt-3">
          <CustomButton2 borderColor="#3498db" onClick={handleRedirect}>
            {buttonText}
          </CustomButton2>
        </div>
      </div>
    </div>
  );
};

export default CommonCard4;
