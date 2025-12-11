"use client"
import CustomButton from '@/common-component/CustomButton/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { useRouter } from 'next/navigation';

const classCard = [
    {
        id: 1,
        classes: "Navodaya Previous Year Question Paper Class 6",
        pdf: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper"
    },
    {
        id: 2,
        classes: "Navodaya Previous Year Question Paper Class 9",
        pdf: "PDF Download Available",
        img: "/icons/file.png",
        alt: "paper"
    },

];

const Paper2 = () => {

    //   const router = useRouter();

    return (
        <div className='bg-[#E5FBFF]'>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 gap-2 md:gap-7 mt-2 md:mt-4 items-center">
                    <div className="col-span-12 sm:col-span-6   ">
                        <div className='flex gap-2 items-center'>
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h3 className="dm_sans responsiveheading2 text-[#1D1C1C]">{`Class-wise Papers`} </h3>
                        </div>
                        <p className="dm_sans text-[#484545] responsive-text mt-3 mb-8">{`Quick access to question papers based on your class.`}</p>
                        <CustomButton className='px-9! responsive-text'
                        //  onClick={() => router.push("/about-us")}
                        >
                            {`Download Now`}
                        </CustomButton>
                    </div>

                    <div className="col-span-12 sm:col-span-6 gap-3 flex justify-center ">
                        {classCard.map((item) => (
                            <div
                                key={item.id}
                                className=" items-center gap-4 justify-items-center text-center "
                            >
                                <Image
                                    src={item.img}
                                    alt={item.alt}
                                    width={100}
                                    height={100}
                                    className="object-contain rounded-full bg-[#0000000D]"
                                />
                                <p className="font-semibold! responsive-text mt-3">{item.classes}</p>
                                <p className="text-[#00000080] text-[16px] mt-1">{item.pdf}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Paper2