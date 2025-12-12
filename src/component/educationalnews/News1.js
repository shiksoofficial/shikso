"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import { useRouter } from 'next/navigation';
import React from 'react'

const News1 = () => {
    const router = useRouter();
    return (
        <div className="custom-container py-2 md:py-4">
            <div>
                <div className='flex gap-2'>
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className='responsiveheading2 mb-5 flex gap-2 items-center'> {`Your Daily Window Into What’s Changing in Education`}</h2>
                </div>
                <p className="responsive-text text-[#484545] ">{`Schools are evolving, exams are shifting, and new policies are shaping the future — Shikso News brings it all to you, fast and clear.`}</p>
                <p className="responsive-text text-[#484545] mt-4">{`From government announcements to school-level updates, competitive exam alerts, and big changes in the education system, this is where information meets impact.`}</p>
                <p className="responsive-text text-[#484545] mb-4">{` Whether you’re a parent tracking updates, a student preparing for exams, or an educator staying informed — this is your trusted space for verified, timely, and easy-to-understand education news.`}</p>
                <div className='flex gap-3 mt-13 mb-6'>
                    <CustomButton className='px-9! responsive-text ' onClick={() => router.push("/about-us")}>
                        {`Read More`}
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default News1;