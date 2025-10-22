import CustomButton from '../../common-component/CustomButton/CustomButton'
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn'
import HeroSection from '@/component/homepage/HeroSection'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Blog",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/blogs") },
  openGraph: {
    title: "Blog",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
    twitter: {
    card: 'summary_large_image',
    title: "Blog",
    description:"Reach out for any queries.",
    images:[{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};
const BlogPage = async () => {
    const res = await apiClient.get(`${BASE_URL_API}blogs/all/ed_tech`);
    const posts = res?.data;
    return (
        <div>
            <HeroSection imageurl="https://i.pinimg.com/1200x/ab/fb/b8/abfbb88b47aeca6f22df1302f6f92f64.jpg" title="Welcome to Our Website" title2="Our Blogs" button={false} breadcom ={[{title: "Blogs"}]}/>
            <div className="custom-container p-6 md:p-10">
                <h2 className='responsiveheading2 mb-5'>Blogs</h2>
                <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {posts?.blogs?.map((val) => <div key={val?._id} className='shadow-md rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden'>
                        <div className='relative w-full h-[180px] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden'>
                            <Image
                                src={val?.featuredImage?.url || "/placeholder.jpg"}
                                fill
                                quality={90}
                                alt={val?.featuredImage?.alt || "Blog Image"}
                                className='object-cover'
                            />
                        </div>
                        <div className='p-3'>
                            <p className='text-slate-500 text-[13px]'>{val?.createdAt.split("T")[0]}</p>
                            <h3 className='line-clamp-2 mt-3 mb-4 h-[50px]'>{val.title}</h3>
                            <CustomLinkBtn color='red' height="30px" href={`blogs/${val?.uid}`}>Read More +</CustomLinkBtn>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default BlogPage