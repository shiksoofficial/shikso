"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Updates1 = () => {
     const FALLBACK_IMAGE = "/Shiksologo.png";
        const [imgSrc, setImgSrc] = useState("/updates/article.png");
         const [imgSrch, setImgSrch] = useState("/updates/girl1.png");
    return (
        <div className='bg-[#E5FBFF]'>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-4 items-center">
                    <div className="col-span-12 sm:col-span-5   ">
                        <div className='flex gap-2 '>
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4 text-[#1D1C1C]">{`Stay Smarter with Every Update`} </h3>
                        </div>
                        <p className="dm_sans text-[#484545] responsive-text mb-8">{`Explore our Blogs and news for updates.`}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-7 ">
                        <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-4 items-center">
                            <div className="col-span-12 sm:col-span-4   "><div className='' >
                                <Image
                                    src={imgSrc}
                                    alt="About us picture"
                                    width={140}
                                    height={140}
                                      onError={() => {
                                if (imgSrc !== FALLBACK_IMAGE) {
                                    setImgSrc(FALLBACK_IMAGE);
                                }
                            }}
                                />
                            </div>
                            </div>
                            <div className="col-span-12 sm:col-span-3 text-[#00D6FF] responsive-text  "><Link href="/blogs" >{`Read Blogs`}</Link></div>
                            <div className="col-span-12 sm:col-span-5 text-right">
                                <p className="dm_sans text-[#484545] responsive-text">{`Latest articles on your exam preparation`}</p>
                            </div>
                        </div>
                        <hr className=" text-[#484545]" />
                        <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-4 items-center">
                            <div className="col-span-12 sm:col-span-4   "><div className='' >
                                <Image
                                    src={imgSrch}
                                    alt="About us picture"
                                    width={140}
                                    height={140}
                                      onError={() => {
                                if (imgSrch !== FALLBACK_IMAGE) {
                                    setImgSrch(FALLBACK_IMAGE);
                                }
                            }}
                                />
                            </div>
                            </div>
                            <div className="col-span-12 sm:col-span-3 text-[#00D6FF] responsive-text  "><Link href="/educational-news" >{`Read News`}</Link></div>
                            <div className="col-span-12 sm:col-span-5 text-right">
                                <p className="dm_sans text-[#484545] responsive-text mb-2">{`Keep track of new updates and announcements`}</p>
                            </div>
                        </div>
                        <hr className=" text-[#484545]" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Updates1