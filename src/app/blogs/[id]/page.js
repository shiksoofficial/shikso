export const dynamic = "force-static";
export const revalidate = 3600;
import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import BlogDescription from '@/component/blog/BlogDescription'
import HeroSection from '@/component/homepage/HeroSection'
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
    const canonicalUrl = `${baseUrl}/blogs/${id}`

    // Default image fallback
    const ogImage = blog?.featuredImage?.url ||
      blog?.image ||
      "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"

    return {
      title: blog?.meta?.title || "Blog Detail",
      description: blog?.meta?.description,
      keywords: blog?.meta?.keywords || ["blog", "zentrail", "travel"],
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: blog?.meta?.title || "Blog Detail",
        description: blog?.meta?.description,
        images: [
          {
            url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
            width: 1200,
            height: 630,
            alt: blog?.title || "Blog Image",
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
      title: "Blog",
      description: "Read our latest blog post",
      openGraph: {
        title: "Blog",
        description: "Read our latest blog post",
        images: ["https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"],
      },
    }
  }
}
const BlogDesc = async ({ params }) => {
  const { id } = await params
  const data = await axios.get(`${BASE_URL_API}blogs/${id}/ed_tech`)
  return (
    <div>
      <HeroSection image={data?.data?.blog?.featuredImage?.url}
        title={data?.data?.blog?.title}
        title2={false}
        showPrimaryBtn={false}
        showSecondaryBtn={false}
        breadcom={[
          { title: "Blogs", url: "/blogs" },
          { title: data?.data?.blog?.uid || "Blogs Detail" },
        ]} />
      <BlogDescription blog={data?.data?.blog} />
      {Array.isArray(data?.data?.blog?.faq) && data?.data?.blog?.faq?.[0]?.question?.length > 0 && (
        <CommonFaq faqData={data?.data?.blog?.faq} />
      )}
    </div>
  )
}

export default BlogDesc