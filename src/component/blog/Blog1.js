"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import { useRouter } from 'next/navigation';
import React from 'react'

const Blog1 = () => {
     const router = useRouter();
    return (
        <div className="custom-container py-2 md:py-4">
            <div>
                <div className='flex gap-2'>
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className='responsiveheading2 mb-5 flex gap-2 items-center'> {`Where Smart Learning Meets Smart Thinking`}</h2>
                </div>
                <p className="responsive-text text-[#484545] ">{`Education is changing — and we’re here to tell the story.`}</p>
                <p className="responsive-text text-[#484545] mb-4">{` From smart classrooms to AI-driven learning tools, the `}<strong className='font-bold'>{` Shikso Blog `}</strong>{` brings you the latest ideas, trends, and real stories from schools across India and beyond.`}</p>
                <p className="responsive-text text-[#484545] mb-4">{`Whether you’re a teacher shaping young minds, a parent guiding your child, or a student ready to explore new learning adventures — this is your space to stay curious, inspired, and connected. `}</p>
                <div className='flex gap-3 mt-13 mb-6'>
                    <CustomButton className='px-9! responsive-text'>
                        {`Read More`}
                    </CustomButton>
                    <CustomButton className='px-9! responsive-text'  onClick={() => router.push("/about-us")}>
                        {`About Us`}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Blog1