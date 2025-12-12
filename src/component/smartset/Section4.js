import Image from "next/image";
import React from "react";

const sectionData =
    [
        {
            img: "/smartset/man.png",
            label: "Interactive Learning",
            value: "Topic-wise learning easy.",
        },
        {
            img: "/smartset/rocket.png",
            label: "Gamified Rewards",
            value: "Building daily motivation.",
        },
        {
            img: "/smartset/girl.png",
            label: "AI Suggestions",
            value: "Fixing mistakes effectively.",
        },
        {
            img: "/smartset/man.png",
            label: "Daily Progress Tracking",
            value: "Stay on top of your studies.",
        },
    ];

const Section4 = () => {
    return (
        <div >
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-4">
                    <div className="col-span-12 sm:col-span-6 text-center justify-items-center flex gap-2">
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h3 className="dm_sans responsiveheading2 flex gap-2 items-center mb-4">  {`Smart Study Made Simple`}</h3>
                    </div >
                    <div className="col-span-12 md:col-span-6 text-left">
                        <p className="dm_sans responsive-text text-[#484545]"> {`With our tools, preparing for the Navodaya Entrance becomes engaging and effective.`}</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3 md:gap-7 mt-8">
                    {sectionData.map((item, index) => (
                        <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3 text-center justify-items-center" >
                            <div className="flex justify-center">
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div>
                                <p className="dm_sans mt-2 md:mt-4 text-[#484545] responsive-text font-medium"> {item.label}</p>
                                <p className="dm_sans responsiveheading6 text-[#1D1C1C] font-extrabold mt-2 md:mt-4">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section4;
