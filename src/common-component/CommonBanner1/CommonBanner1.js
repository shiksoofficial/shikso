import React from 'react'
import Link from "next/link";

const CommonBanner1 = ({ title, title2, breadcom = [], paraghraph, tagline }) => {

    return (
        <div className="bg-[#FFFDEB] ">
            <div className="custom-container flex  h-[380px] sm:h-[290px] items-end pb-7">
                <div className="w-full p-2">
                    <h1 className="text-[#0A0C0C] dm_sans text-center responsive-heading font-medium leading-tight">{title}</h1>
                    <h2 className="text-[#484545] dm_sans text-center responsiveheading2 font-medium leading-tight mt-3">{title2}</h2>
                    <p className="text-[#484545] dm_sans text-center responsive-text font-medium leading-tight mt-3">{paraghraph}</p>
                    <p className="text-red-500 dm_sans text-center responsive-text font-medium leading-tight mt-3">{tagline}</p>
                    {breadcom?.length > 0 && (
                        <div className="flex text-center w-fit m-auto mt-3 ">
                            <Link href="/" aria-label="home icon" className="dm_sans text-[15px]  hover:text-[#00D6FF] transition-colors px-2">
                                {` Home`}
                            </Link>
                            {breadcom?.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        /
                                        {item?.url ? (
                                            <Link
                                                href={item?.url}
                                                className="dm_sans text-[15px]  hover:text-[#00D6FF] transition-colors px-2 "
                                            >
                                                {item.title}
                                            </Link>
                                        ) : (
                                            <span className="dm_sans text-[15px] px-2 ">
                                                {item.title}
                                            </span>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommonBanner1