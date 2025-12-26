export const dynamic = "force-static";
export const revalidate = 3600;
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import BlogDescription from '@/component/blog/BlogDescription'
import CommentBox from '@/component/commentBox/CommentBox';
import AllNews from '@/component/educationalnews/AllNews';
import { BASE_URL_API } from '@/lib/common'
import axios from 'axios'
import React, { useId } from 'react'

// Dynamic Metadata Function
export async function generateMetadata({ params }) {
  try {
    const { id } = await params
    const { data } = await axios.get(`${BASE_URL_API}blogs/${id}/ed_tech`)

    const blog = data?.blog

    // Base URL for canonical and images
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.shikso.com"
    const canonicalUrl = `${baseUrl}/educational-news/${id}`

    // Default image fallback
    const ogImage = blog?.featuredImage?.url ||
      blog?.image ||
      "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"

    return {
      title: blog?.meta?.title || "News Detail",
      description: blog?.meta?.description,
      keywords: blog?.meta?.keywords || ["news"],
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: blog?.meta?.title || "News Detail",
        description: blog?.meta?.description,
        images: [
          {
            url: data?.blog?.featuredImage?.url ||
              "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
            width: 1200,
            height: 630,
            alt: blog?.title || "News Image",
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog?.meta?.title,
        description: blog?.meta?.description,
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)

    // Fallback metadata agar API fail ho jaye
    return {
      title: "News",
      description: "Read our latest news post",
      openGraph: {
        title: "News",
        description: "Read our latest news post",
        images: ["https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"],
      },
    }
  }
}

const EducationalNewsDesc = async ({ params }) => {
  const { id } = await params
  const data = await axios.get(`${BASE_URL_API}blogs/${id}/ed_tech`)
  generateMetadata({ params })
  return (
    <div>
      <CommonBanner1
        title={data?.data?.blog?.title}
        tagline={`${data?.data?.blog?.authorName || ""} | ${data?.data?.blog?.createdAt
          ? new Date(data.data.blog.createdAt)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")
          : ""
          }`}
        breadcom={[
          { title: "Blogs", url: "/blogs" },
          { title: data?.data?.blog?.meta?.title || "Blogs Detail" },
        ]} />
      <BlogDescription blog={data?.data?.blog} />
      {Array.isArray(data?.data?.blog?.faq) && data?.data?.blog?.faq?.[0]?.question?.length > 0 && (
        <CommonFaq faqData={data?.data?.blog?.faq} />
      )}
      <CommentBox />
      <AllNews />
    </div>
  )
}

export default EducationalNewsDesc;