export const dynamic = "force-dynamic";
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';
import HeroSection from '@/component/homepage/HeroSection';
import Image from 'next/image';
import React from 'react'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import Link from 'next/link';

export const metadata = {
    title: "Shikso News | Educational Updates | Smart Learning & AI in Education",
    description: "Stay informed with Shikso News — your trusted source for educational updates, AI in education, digital classrooms, and smart learning innovations in India and beyond.",
    keywords: ["Shikso news", " educational news India", " smart learning news", "AI education updates", " modern school news", "gamified learning", "Shikso SmartSet updates", "digital education trends", " online learning news"],
    alternates: { canonical: getCanonicalUrl("/educational-news") },
    openGraph: {
        title: "Shikso News | Educational Updates | Smart Learning & AI in Education",
        description: "Stay informed with Shikso News — your trusted source for educational updates, AI in education, digital classrooms, and smart learning innovations in India and beyond.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Shikso News | Educational Updates | Smart Learning & AI in Education",
        description: "Stay informed with Shikso News — your trusted source for educational updates, AI in education, digital classrooms, and smart learning innovations in India and beyond.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};
const LIMIT = 8;

const EducationalNewsPage = async ({ searchParams }) => {
   const page = Math.max(1, Number(searchParams?.page) || 1);
    const res = await apiClient.get(`${BASE_URL_API}blogs/all/ed_tech?type=news&status=Published&page=${page}&limit=${LIMIT}`,
        { cache: "no-store" }
    );
    const posts = res?.data;
     const blogs = Array.isArray(posts?.blogs) ? posts.blogs : []; 

    const totalFromApi =
        typeof posts?.totalBlogs === "number" ? posts.totalBlogs : 
        typeof posts?.total === "number" ? posts.total :           
        (posts?.pagination?.total ?? posts?.count ?? undefined);   

    const totalPages = totalFromApi ? Math.ceil(totalFromApi / LIMIT) : undefined; 
    const hasPrev = page > 1; 
    const hasNext = totalPages ? page < totalPages : blogs.length === LIMIT; 

    return (
        <div>
            <HeroSection imageurl="https://i.pinimg.com/1200x/ab/fb/b8/abfbb88b47aeca6f22df1302f6f92f64.jpg"
                title="Welcome to Shikso Educational News"
                title2="Latest Updates from the World of Smart Learning"
                paragraph="Explore the latest happenings in modern education — from AI-based learning systems to digital classroom transformation, all brought to you by Shikso."
                button={false} breadcom={[{ title: "News" }]} />
            <div className="custom-container p-6 md:p-10">
                <h2 className='responsiveheading2 mb-5'>{`Educational News`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {posts?.blogs?.map((val) => <div key={val?._id} className=' rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden
                    shadow-md  transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow focus:scale-105 focus:shadow active:scale-105 active:shadow cursor-pointer'>
                        <div className='relative w-full h-[180px] rounded-tl-[20px] rounded-tr-[0px] rounded-br-[20px] rounded-bl-[0px] overflow-hidden'>
                            <Image
                                src={val?.featuredImage?.url || "/placeholder.jpg"}
                                fill
                                quality={90}
                                alt={val?.featuredImage?.alt || "Blog Image"}
                                className='object-cover transition-transform duration-300  
                                group-hover:scale-110  
                                group-focus:scale-110   
                                group-active:scale-110'
                            />
                        </div>
                        <div className='p-3'>
                            <p className='text-slate-500 text-[13px]'>{val?.createdAt.split("T")[0]}</p>
                            <h3 className='line-clamp-2 mt-3 mb-4 h-[50px]'>{val.title}</h3>
                            <CustomLinkBtn color='red' height="30px" href={`educational-news/${val?.uid}`}>{`Read More +`}</CustomLinkBtn>
                        </div>
                    </div>)}

                </div>
               <div className="mt-10 flex items-center justify-center gap-5">
                    <Link
                        href={{ pathname: "/educational-news", query: { page: Math.max(1, page - 1) } }} 
                        scroll={false} 
                        className={`px-4 py-2 rounded bg-gray-200 text-black text-sm ${!hasPrev ? "pointer-events-none opacity-50" : ""}`} 
                        aria-disabled={!hasPrev} 
                        prefetch 
                    >
                        ← Previous
                    </Link>

                    <Link
                        href={{ pathname: "/educational-news", query: { page: page + 1 } }} 
                        scroll={false}
                        className={`px-4 py-2 rounded bg-gray-200 text-black text-sm ${!hasNext ? "pointer-events-none opacity-50" : ""}`} 
                        aria-disabled={!hasNext} 
                        prefetch 
                    >
                        Next →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EducationalNewsPage;