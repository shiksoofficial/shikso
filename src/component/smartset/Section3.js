import Image from "next/image";
import React from "react";

const sectionData =
    [
        {
            img: "/smartset/man.png",
            label: "Accuracy",
            value: "85%",
            increment: "+5%",
        },
        {
            img: "/smartset/rocket.png",
            label: "Speed",
            value: "15 Q/hour",
            increment: "+2 Q/hour",
        },
        {
            img: "/smartset/girl.png",
            label: "Progress",
            value: "70%",
            increment: "+10%",
        },
    ];

const Section3 = () => {
    return (
        <div className="bg-[#E5FBFF]">
            <div className="custom-container py-6 md:py-10">
                <div className="justify-items-center">
                    <div className="flex gap-2 w-fit m-auto">
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h3 className="dm_sans responsiveheading2 flex gap-2 items-center mb-4"> {`Your Growth is Measurable`} </h3>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-8">
                    {sectionData.map((item, index) => (
                        <div
                            key={index} className="col-span-12 sm:col-span-4 text-center justify-items-center"  >
                            <div className="flex justify-center">
                                <Image
                                    src={item.img}
                                    alt={item.label}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="text-left">
                                <p className="dm_sans mt-1 md:mt-3 text-[#484545] text-[16px] font-medium">  {item.label} </p>
                                <p className="dm_sans responsiveheading6 text-[#1D1C1C] font-extrabold"> {item.value} </p>
                                <p className="dm_sans text-[#484545] text-[16px] font-medium">  {item.increment} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section3;
