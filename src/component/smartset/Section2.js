"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Section2 = ({ cards = [] }) => {
    const router = useRouter();

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-8 ">
                {cards.map((item, index) => (
                    <div key={index} className="rounded-[10px] overflow-hidden  shadow-md transition-all duration-300 ease-in-out bg-[#FFFDE6CF]
                             hover:scale-105 hover:shadow cursor-pointer"  >
                        <div className="relative w-full h-[180px] rounded-tl-[20px] rounded-br-[20px] overflow-hidden">
                            <Image
                                src={item.img || "/placeholder.jpg"}
                                fill
                                quality={90}
                                alt={item.alt || "Card Image"}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="responsiveheading5 mt-2 mb-2  text-[#484545] line-clamp-2">  {item.title} </h3>
                            <p className="responsive-text text-[#484545] line-clamp-3">{item.discription}</p>
                            <button
                                onClick={() => router.push(item.buttonLink)}
                                className="bg-[#FF4D4D] text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 mt-2"
                            >
                                {item.buttonText || "Read More +"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2;
