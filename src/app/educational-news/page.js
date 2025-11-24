export const dynamic = "force-dynamic";
import HeroSection from '@/component/homepage/HeroSection';
import React from 'react'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import NewsListPagination from '@/common-component/Pagination/NewsListPagination';

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

const EducationalNewsPage = async () => {
  const page = 1;
  const res = await apiClient.get(`${BASE_URL_API}blogs/all/ed_tech?type=news&status=Published&page=${page}&limit=${LIMIT}`,
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
        title="Welcome to Shikso Educational News"
        title2="Latest Updates from the World of Smart Learning"
        paragraph="Explore the latest happenings in modern education — from AI-based learning systems to digital classroom transformation, all brought to you by Shikso."
        button={false} breadcom={[{ title: "News" }]} />
      <div className="custom-container p-6 md:p-10">
        <h2 className='responsiveheading2 mb-5'>{`Educational News`}</h2>
        <div className="mt-10 flex items-center justify-center gap-5">
          <NewsListPagination
            initialBlogs={blogs}
            totalBlogs={posts.totalpages}
            limit={LIMIT}
          />
        </div>
      </div>
    </div>
  )
}

export default EducationalNewsPage;