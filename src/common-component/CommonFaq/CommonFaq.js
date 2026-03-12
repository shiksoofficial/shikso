"use client";
import { useState } from "react";

const CommonFaq = ({ faqData, title }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="custom-container py-7 flex flex-col items-center">
      {/* Title */}
      <div className="flex gap-2 w-fit mb-5">
        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
        <h2 className="dm_sans responsiveheading2 flex items-center">
          {`FAQs`} {title}
        </h2>
      </div>

      {/* FAQ LIST */}
      {faqData?.map((item, index) => (
        <div
          key={index}
          className="mb-2.5 w-full max-w-3xl rounded-lg border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          {/* Question Button */}
          <div
            onClick={() => handleChange(index)}
            className={`px-[15px] sm:px-[33px] md:px-[38px] py-[14px] sm:py-[15px] md:py-[17px] cursor-pointer
              ${expanded === index ? "text-[#484545]" : "text-[#1A2E33]"}
            `}
          >
            <div className="flex gap-3 items-start">
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00D6FF]">
                <span className="absolute h-[2px] w-3 rounded-full bg-[#FFF46C]" />
                <span
                  className={`absolute h-3 w-[2px] rounded-full bg-[#FFF46C] transition-all duration-300 ease-in-out ${
                    expanded === index
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                />
              </span>
              <h3 className="responsiveheading4 dm_sans font-medium">
                {item.question}
              </h3>
            </div>
          </div>

          {/* Animated Answer */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              expanded === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-[15px] sm:px-[33px] md:px-[38px] pb-[14px] sm:pb-[15px] md:pb-[17px] pl-[60px] responsive-text dm_sans text-[#484545] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonFaq;
