export const dynamic = "force-dynamic";
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
    title: " Shikso Blog | Smart Learning Insights | Modern Education & AI-Driven Learning",
    description: " Discover expert articles from Shikso on smart learning, modern school education, AI-based teaching, gamified learning, and digital classroom innovations. Stay ahead with the future of education.",
    keywords: ["Shikso blog", "smart learning", "AI-based education", "gamified learning", "modern education", "online learning India", "school education trends", "digital learning", "smart classroom", "Shikso SmartSet"],
    alternates: { canonical: getCanonicalUrl("/blogs") },
    openGraph: {
        title: " Shikso Blog | Smart Learning Insights | Modern Education & AI-Driven Learning",
        description: " Discover expert articles from Shikso on smart learning, modern school education, AI-based teaching, gamified learning, and digital classroom innovations. Stay ahead with the future of education.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Shikso Blog | Smart Learning Insights | Modern Education & AI-Driven Learning",
        description: " Discover expert articles from Shikso on smart learning, modern school education, AI-based teaching, gamified learning, and digital classroom innovations. Stay ahead with the future of education.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};
const BlogPage = async () => {
    const res = await apiClient.get(`${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published`,
        { cache: "no-store" }
    );
    const posts = res?.data;
    return (
        <div>
            <HeroSection imageurl="https://i.pinimg.com/1200x/ab/fb/b8/abfbb88b47aeca6f22df1302f6f92f64.jpg"
                title="Welcome to Shikso Blog"
                title2=" Where Smart Learning Meets Smart Thinking"
                paragraph=" Explore ideas, trends, and innovations that are shaping the future of school education. Learn how AI, gamification, and digital tools are making learning more fun, personalized, and effective."
                button={false} breadcom={[{ title: "Blogs" }]} />
            <div className="custom-container p-6 md:p-10">
                <h2 className='responsiveheading2 mb-5'>Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {posts?.blogs?.map((val) => <div key={val?._id} className='rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden 
                        shadow-md  transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow focus:scale-105 focus:shadow active:scale-105 active:shadow cursor-pointer'>
                        <div className='relative w-full h-[180px] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden    '>
                            <Image
                                src={val?.featuredImage?.url || "/placeholder.jpg"}
                                fill
                                quality={90}
                                alt={val?.featuredImage?.alt || "Blog Image"}
                                className='object-cover transition-transform duration-300     group-hover:scale-110  
                                group-focus:scale-110   
                                group-active:scale-110'
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