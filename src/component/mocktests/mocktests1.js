"use client";

import React, { useState } from "react";
import CustomButton from "@/common-component/CustomButton/CustomButton";

const MockTests1 = ({
  title = "Select Your Class",
  description = "Choose the appropriate class for the mock test.",
  label = "Class",
  options = [],
  buttonText = "Proceed to Test",
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="custom-container py-6 md:py-10">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-6">
          <div className="flex gap-2 items-center mb-4">
            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full" />
            <h2 className="dm_sans responsiveheading2 text-[#1D1C1C]">
              {title}
            </h2>
          </div>

          <p className="dm_sans text-[#484545] responsive-text whitespace-normal">
            {description}
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center">
          <div>
            <p className="text-[16px] font-bold mb-2 text-[#1d1c1c]">
              {label}
            </p>

            <div className="flex gap-3 flex-wrap">
              {options.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedOption(item)}
                  className={`px-6 py-2 rounded-sm transition
                    ${selectedOption === item
                      ? "bg-[#CBF3FF] text-black"
                      : "bg-[#E5FBFF] text-[#666]"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <CustomButton
              className="mt-5 bg-[#FFF46C] px-6 py-2 font-medium hover:bg-[#ffe447]"
              disabled={!selectedOption}
              onClick={() => window.location.href = "/test-series"}
            >
              {buttonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTests1;
