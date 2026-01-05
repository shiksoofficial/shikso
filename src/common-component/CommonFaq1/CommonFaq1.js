"use client"
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { BiSolidCircleHalf } from "react-icons/bi";

const CommonFaq1 = ({ faqData, title }) => {
    const [expanded, setExpanded] = useState(null);
    const handleChange = (index) => {
        setExpanded(expanded === index ? null : index);
    };
    return (
        <div className=" py-7 ">
            <div className='flex gap-2 w-fit m-auto'>
                <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                <h2 className="responsiveheading3 mb-5 flex w-fit m-auto items-center gap-2">{`FAQs `}{""}{title}</h2>
            </div>

            {faqData?.map((item, index) => (
                <div key={index} className="mb-1 items-center">
                    <div
                        className={`px-[15px] sm:px-[33px] md:px-[38px] py-[14px] sm:py-[15px] md:py-[17px]  cursor-pointer transition-all 
             ${expanded === index
                                ? " text-[#484545]"
                                : "bg-transparent text-[#1A2E33]"
                            }
            `}
                        onClick={() => handleChange(index)}
                    >
                        <div className="flex gap-3 ">
                            {expanded === index ? (
                                <FaMinus size="28px" className="shrink-0 transform transition-all duration-200 bg-[#00D6FF]  rounded-full p-1 text-[#FFF46C]" />
                            ) : (
                                <IoMdAdd size="28px" className="shrink-0 transform transition-all duration-200 bg-[#00D6FF]  rounded-full p-1 text-[#FFF46C]" />
                            )}
                            <h3
                                className={`responsive-text dm_sans font-medium  text-[#1A2E33] ${expanded === index ? "text-[#1D1C1C]" : "text-[#1A2E33]"
                                    }`}
                            >
                                {item.question}
                            </h3>
                        </div>
                        {expanded === index && (
                            <div className="mt-1 md:mt-1 pl-11">
                                <p className="responsive-text dm_sans">{item.answer}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default CommonFaq1;



// const faqData = [
//   {
//     question: "What is mood-based travel?",
//     answer:
//       "Mood-based travel means choosing journeys that match your state of mind—whether you seek peace, adventure, love, or healing.",
//   },
// ];

{/* <CommonFaq faqData={faqData} /> */ }