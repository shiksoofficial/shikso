export const dynamic = "force-static";
export const revalidate = 3600;
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import BlogDescription from '@/component/blog/BlogDescription'
import LatestBlog from '@/component/blog/LatestBlog';
import SuggestedBlogs from '@/component/blog/SuggestedBlogs';
// import CommentBox from '@/component/commentBox/CommentBox';
import SubscribeBox from '@/component/subscribeBox/SubscribeBox';
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import axios from 'axios'
import React from 'react'

// Dynamic Metadata Function
export async function generateMetadata({ params }) {
  try {
    const { id } = await params
    const { data } = await axios.get(`${BASE_URL_API}blogs/${id}/ed_tech`)
    const blog = data?.blog

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.shikso.com"
    const canonicalUrl = `${baseUrl}/blogs/${id}`

    const ogImage = blog?.featuredImage?.url ||
      blog?.image ||
      "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"

    return {
      title: blog?.meta?.title || "Blog Detail",
      description: blog?.meta?.description,
      keywords: blog?.meta?.keywords || ["blog",],
      alternates: {
        canonical: canonicalUrl
      },
      openGraph: {
        title: blog?.meta?.title || "Blog Detail",
        description: blog?.meta?.description,
        images: [
          {
            url: data?.blog?.featuredImage?.url ||
              "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
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
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
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

const LIMIT = 4;

const BlogDesc = async ({ params, initialBlogs }) => {
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

  const { id } = await params
  const data = await axios.get(`${BASE_URL_API}blogs/${id}/ed_tech?type=blog&status=Published`)

  // Get the current blog data
  const currentBlog = data?.data?.blog;
  const subtitle = (
    <span className="flex gap-2">
      {`More from`}{" "}
      <span className="font-semibold text-blue-600 capitalize">
        {currentBlog?.category?.name || currentBlog?.category}
      </span>
    </span>
  );
  return (
    <div>
      <CommonBanner1
        title={currentBlog?.title}
        tagline={`${currentBlog?.authorName || ""} | ${currentBlog?.createdAt
          ? new Date(currentBlog.createdAt)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")
          : ""
          }`}
        breadcom={[
          { title: "Blogs", url: "/blogs" },
          { title: currentBlog?.meta?.title || "Blogs Detail" },
        ]}
      />
      <BlogDescription blog={currentBlog} />
      {/* <div className="custom-container py-4 md:py-8">
        {Array.isArray(currentBlog?.faq) && currentBlog?.faq?.[0]?.question?.length > 0 && (
          <CommonFaq faqData={currentBlog?.faq} />
        )}
        <CommentBox />
      </div> */}
      <SuggestedBlogs currentBlog={currentBlog} />
      <LatestBlog />
      <div className="custom-container py-4 md:py-8">
        <SubscribeBox />
      </div>
    </div>
  )
}

export default BlogDesc