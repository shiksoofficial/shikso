import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';
import Image from 'next/image'
import React from 'react'

const About1 = () => {
    return (
        <div className="custom-container m-6 md:m-10 ">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6  items-center  justify-items-center md:justify-items-start">
                    <div className='' >
                        <Image
                            src="/aboutus/aboutus1.webp"
                            alt="About us picture"
                            width={540}
                            height={400}
                        />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6  md:pl-4 lg:pl-20 text-center md:text-left">
                    <p className='indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5 '>{`About Us`}</p>
                    <p className='dm_sans responsiveheading2 font-light mb:2 lg:mb-4 leading-1.5 '>{`Bring Fun Life To Your Kids`}</p>
                    <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-15 leading-6! lg:leading-8! '>{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.`}</p>
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