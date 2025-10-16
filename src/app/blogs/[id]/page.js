import BlogDescription from '@/component/blog/BlogDescription'
import HeroSection from '@/component/homepage/HeroSection'
import { BASE_URL_API } from '@/lib/common'
import axios from 'axios'
import React from 'react'

const BlogDesc = async ({ params }) => {
  const { id } = await params
  const data = await axios.get(`${BASE_URL_API}blogs/${id}/travel`)
  return (
    <div>
      <HeroSection imageurl={data?.data?.blog?.featuredImage?.url} title="Welcome to Our Website" title2="Our Blogs" button={false} />
      <BlogDescription blog={data?.data?.blog} />
      {/* <FAQ faqData={data?.faqData} /> */}
    </div>
  )
}

export default BlogDesc