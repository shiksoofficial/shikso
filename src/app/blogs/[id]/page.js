import CommonFaq from '@/common-component/CommonFaq/CommonFaq'
import BlogDescription from '@/component/blog/BlogDescription'
import HeroSection from '@/component/homepage/HeroSection'
import { BASE_URL_API } from '@/lib/common'
import axios from 'axios'
import React, { useId } from 'react'

const BlogDesc = async ({ params }) => {
  const { id } = await params
  const data = await axios.get(`${BASE_URL_API}blogs/${id}/travel`)
  console.log(data,"dadad")
  return (
    <div>
      <HeroSection imageurl={data?.data?.blog?.featuredImage?.url} title="Welcome to Our Website" title2="Our Blogs" button={false} breadcom ={[{title: "Blogs" }, {
            id: 2,
             title:` ${data?.data?.blog?.uid}`|| "Blog Detail",
  
          },]} />
      <BlogDescription blog={data?.data?.blog} />
      <CommonFaq faqData={data?.data?.blog?.faq} />
    </div>
  )
}

export default BlogDesc