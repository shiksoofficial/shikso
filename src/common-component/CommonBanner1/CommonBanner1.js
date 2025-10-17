import { IoMdArrowBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import React from 'react'
import Link from "next/link";

const CommonBanner1 = ({ title, breadcom }) => {
   
    return (
        <div className="bg-[#364d59] items-center">
            <div className="custom-container flex  h-[350px] items-end">
                <div className="w-full p-2">
                    <h1 className="text-[#DEF2FC] text-center responsive-heading font-medium leading-tight">
                        {title}
                    </h1>
                </div>
               
            </div>
             {breadcom?.length > 0 && (
                    <div className="flex text-center w-fit m-auto   gap-1.5 text-white pb-2">
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
    )
}

export default CommonBanner1