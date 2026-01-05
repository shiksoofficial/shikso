"use client"
import Image from 'next/image';
import React, { useState } from 'react'

const ContactUs1 = () => {

    const FALLBACK_IMAGE = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
    const [imgSrc, setImgSrc] = useState("https://res.cloudinary.com/djxgpbncu/image/upload/v1767607861/aboutus1_xnwkdc.webp");

    return (
        <div className='custom-container py-6 md:py-10'>
            <div className='grid grid-cols-12 gap-8 lg:gap-3 items-center justify-items-center-safe lg:justify-items-start lg:items-start'>
                <div className='col-span-12 lg:col-span-5 items-center '>
                    <div className='' >
                        <Image
                            src={imgSrc}
                            alt="About us picture"
                            width={400}
                            height={330}
                            onError={() => {
                                if (imgSrc !== FALLBACK_IMAGE) {
                                    setImgSrc(FALLBACK_IMAGE);
                                }
                            }}
                        />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-7 items-start '>
                    <div className='flex gap-2 '>
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h3 className='dm_sans responsiveheading2  flex gap-2'>{`Welcome to Shikso`}</h3>
                    </div>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`Where Curiosity Meets Connection`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`Every great idea starts with a simple question — and at`}<strong className='font-bold'>{` Shikso `}</strong>{`, we believe every conversation can start something even bigger.`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`Somewhere, a student might be wondering, “How do I make learning fun again?”`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{` A parent might be thinking, “How can I help my child learn smarter, not harder?”`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{` And a teacher might be asking, “Is there a better way to reach every student?”`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`That’s where our story connects with yours.`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`When you reach out to us, you’re not just filling a form — you’re opening a door to the future of  `}<strong className='font-bold'>{` smart learning. `}</strong></p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`Whether you’re a  `}<strong className='font-bold'>{`school looking for AI-powered classroom tools,`}</strong>{` a `}<strong className='font-bold'>{`parent exploring learning support,`}</strong> {` or a `}<strong className='font-bold'>{`student ready to level up your practice game,`}</strong> {` we’d love to hear your story.`}</p>
                    <p className='dm_sans responsive-text text-[#484545] mt-1' >{`Because every message helps us build a better Shikso — one that understands, listens, and grows with you.`}</p>
                </div>
            </div>


        </div>
    )
}

export default ContactUs1