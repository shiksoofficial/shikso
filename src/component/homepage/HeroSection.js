import CustomButton from '@/common-component/customButton'
import Image from 'next/image'
import React from 'react'

const HeroSection = ({imageurl,title,title2,button}) => {
  return (
    <div className='w-full h-[90vh] md:h-[120vh] relative shrink-0'>
       <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <Image src={imageurl} alt='bannerImage' fill priority quality={100} className='object-cover'/>
        <div className=' absolute inset-0 z-10 flex items-end pb-15 md:pb-10 lg:pb-20'>
           <div className='custom-container w-full'>
             <p className='text-[#dc3545]'>{title}</p>
             <h1 className='text-[3rem] w-[300px] leading-[3rem] text-white'>{title2}</h1>
             <p className='mt-5 mb-10 text-white'>Amazing Playground for your kids</p>
             {button&&<CustomButton color='#dc3545'>LEARN MORE</CustomButton>}
           </div>
        </div>
    </div>
  )
}

export default HeroSection