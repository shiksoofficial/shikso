"use client"
import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';
import Image from 'next/image'
import React, { useState } from 'react'

const About1 = () => {

    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
    const [imgSrc, setImgSrc] = useState("https://res.cloudinary.com/djxgpbncu/image/upload/v1767607861/aboutus1_xnwkdc.webp");

    return (
        <div className="custom-container m-6 md:m-10 ">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6  items-center  justify-items-center lg:justify-items-start">
                    <div className='' >
                        <Image
                            src={imgSrc}
                            alt="About us picture"
                            width={540}
                            height={400}
                            onError={() => {
                                if (imgSrc !== FALLBACK_IMAGE) {
                                    setImgSrc(FALLBACK_IMAGE);
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6  md:pl-4 lg:pl-20 text-center md:text-left">
                    <h2 className='indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5 '>{` About Shikso`}</h2>
                    <h3 className='dm_sans responsiveheading2 font-light mb:2 lg:mb-4 leading-1.5 '>{` Empowering Students with Smart, Engaging, and AI-Powered Education`}</h3>
                    <p className='dm_sans responsive-text font-light text-[#6c757d] mb-1 leading-6! lg:leading-8! '>{` Shikso is an innovative AI-powered education platform designed to bridge the gap between traditional teaching and modern learning. Our mission is to make high-quality education accessible, interactive, and data-driven for every student — whether in cities or small towns.`}</p>
                    <p className='dm_sans responsive-text font-light text-[#6c757d] mb-1 leading-6! lg:leading-8! '>{`With SmartSets like Navodaya SmartSet and Sainik School SmartSet, we help students prepare for competitive school entrance exams through fun, gamified, and intelligent learning systems.`}</p>
                    <p className='dm_sans responsive-text font-light text-[#6c757d]  mb-5 lg:mb-2 leading-6! lg:leading-8! '>{`“At Shikso, we don’t just teach — we make students fall in love with learning.”`}</p>
                    <CustomLinkBtn
                        href='/about-us'
                        color="#ffc107"
                        textColor="#000"
                    >
                        {`  More About us`}
                    </CustomLinkBtn>
                </div>
            </div>

        </div>

    )
}

export default About1;

//  <div className="relative mx-auto  overflow-hidden size-[150px]">
//                     <Image
//                       src={item.featuredImage}
//                       fill
//                       quality={100}
//                       alt={item.title}
//                       className="object-cover"
//                     />
//                   </div>