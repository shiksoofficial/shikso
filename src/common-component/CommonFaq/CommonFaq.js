"use client";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
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
        <h2 className="responsiveheading2 flex items-center">
          FAQs {title}
        </h2>
      </div>

      {/* FAQ LIST */}
      {faqData?.map((item, index) => (
        <div key={index} className="mb-2.5 w-full max-w-3xl">
          <div
            onClick={() => handleChange(index)}
            className={`px-[15px] sm:px-[33px] md:px-[38px] py-[14px] sm:py-[15px] md:py-[17px] cursor-pointer transition-all
              ${expanded === index ? "text-[#484545]" : "text-[#1A2E33]"}
            `}
          >
            {/* Question */}
            <div className="flex gap-3 items-start">
              {expanded === index ? (
                <FaMinus className="w-8 h-8 shrink-0 bg-[#00D6FF] rounded-full p-1 text-[#FFF46C]" />
              ) : (
                <IoMdAdd className="w-8 h-8 shrink-0 bg-[#00D6FF] rounded-full p-1 text-[#FFF46C]" />
              )}

              <h3 className="responsiveheading6 dm_sans font-medium">
                {item.question}
              </h3>
            </div>

            {/* Answer */}
            {expanded === index && (
              <div className="mt-2 md:mt-3 pl-11">
                <p className="responsive-text dm_sans">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonFaq;




// const faqData = [
//   {
//     question: "What is mood-based travel?",
//     answer:
//       "Mood-based travel means choosing journeys that match your state of mind—whether you seek peace, adventure, love, or healing.",
//   },
// ];

{/* <CommonFaq faqData={faqData} /> */ }