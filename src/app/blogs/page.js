export const dynamic = "force-dynamic";
import HeroSection from '@/component/homepage/HeroSection'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import React from 'react'
import BlogListWithPagination from '@/common-component/Pagination/BlogListWithPagination';

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
const LIMIT = 4;

const BlogPage = async () => {
    const page = 1;
    const res = await apiClient.get(`${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published&page=${page}&limit=${LIMIT}`,
        { cache: "no-store" }
    );
    const posts = res?.data;
    const blogs = Array.isArray(posts?.blogs) ? posts.blogs : [];

    const totalFromApi =
        typeof posts?.totalBlogs === "number" ? posts.totalBlogs :
            typeof posts?.total === "number" ? posts.total :
                (posts?.pagination?.total ?? posts?.count ?? undefined);

    return (
        <div>
            <HeroSection imageurl="https://i.pinimg.com/1200x/ab/fb/b8/abfbb88b47aeca6f22df1302f6f92f64.jpg"
                title="Welcome to Shikso Blog"
                title2=" Where Smart Learning Meets Smart Thinking"
                paragraph=" Explore ideas, trends, and innovations that are shaping the future of school education. Learn how AI, gamification, and digital tools are making learning more fun, personalized, and effective."
                button={false} breadcom={[{ title: "Blogs" }]} />
            <div className="custom-container p-6 md:p-10">
                <h2 className='responsiveheading2 mb-5'>Blogs</h2>
                <div className="mt-10 flex items-center justify-center gap-5">
                    <BlogListWithPagination
                        initialBlogs={blogs}
                        totalBlogs={posts.totalpages}
                        limit={LIMIT}
                    />
                </div>
            </div>
        </div>
    )
}
export default BlogPage