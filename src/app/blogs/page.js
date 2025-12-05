export const dynamic = "force-dynamic";
import HeroSection from '@/component/homepage/HeroSection'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import React from 'react'
import BlogListWithPagination from '@/common-component/Pagination/BlogListWithPagination';
import CommonCard4 from '@/common-component/CommonCard4/CommonCard4';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';

export const metadata = {
    title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
    description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
    keywords: ["Shikso blog", " school education trends", " AI learning", " edtech insights", " smart learning India", " gamified learning", " digital classrooms", " AI in schools", " modern teaching",],
    alternates: { canonical: getCanonicalUrl("/blogs") },
    openGraph: {
        title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
        description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
        description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India’s evolving education landscape.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};
const faqData = [
    {
        question: "1. What kind of blogs does Shikso publish?",
        answer: "We share stories and insights related to modern schooling, AI-based learning, and educational innovations happening across India and globally."
    },
    {
        question: "2. Who is the Shikso Blog for?",
        answer: "Our blog is for teachers, parents, students, and schools who want to stay updated on how technology and AI are transforming education."
    },
    {
        question: "3. How often are new blogs published?",
        answer: "We post fresh stories and updates regularly — from school, trends to inspiring educational journeys."
    },
    {
        question: "4. Do you cover topics beyond school education?",
        answer: "Yes! While our focus is on school learning, we also cover AI tools, gamified learning, and edtech innovations shaping the future of education."
    },
    {
        question: "5. Can schools or educators contribute to the blog?",
        answer: "Absolutely! Educators and school leaders can share their insights or experiences by contacting our team through the Contact Shikso page."
    },
    {
        question: "6. What makes Shikso’s blog different?",
        answer: "We blend real classroom stories with AI-driven learning ideas — making education content easy, inspiring, and practical for everyone."
    },
    {
        question: "7. Are Shikso blog articles free to read?",
        answer: "Yes! All our blogs are completely free and accessible to anyone interested in learning and education"
    },
    {
        question: "8. How does AI feature in your blog topics?",
        answer: "We often explore how artificial intelligence helps in personalized learning, smart assessments, and improving student engagement."
    },
    {
        question: "9. Do you feature school success stories?",
        answer: "Yes, we highlight schools and educators leading change with innovative teaching methods, technology, and student growth programs."
    },
    {
        question: "10. How can I stay updated with Shikso’s latest blogs?",
        answer: "Simply visit our blog section regularly or follow Shikso on social media for updates on new posts, stories, and education insights."
    },
];
const LIMIT = 8;

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
                <div
                    className="border-gray-300 border rounded-xl p-6 ">
                    <h2 className='responsiveheading2 mb-5'>{`Where Smart Learning Meets Smart Thinking`}</h2>
                    <p className="responsive-text text-[#1A2E33] ">{`Education is changing — and we’re here to tell the story.`}</p>
                    <p className="responsive-text text-[#1A2E33] mb-4">{` From smart classrooms to AI-driven learning tools, the `}<strong className='font-bold'>{` Shikso Blog `}</strong>{` brings you the latest ideas, trends, and real stories from schools across India and beyond.`}</p>
                    <p className="responsive-text text-[#1A2E33] mb-4">{`Whether you’re a teacher shaping young minds, a parent guiding your child, or a student ready to explore new learning adventures — this is your space to stay curious, inspired, and connected. `}</p>
                    <CustomLinkBtn
                        href='/about-us'
                        color="#ffc107"
                        textColor="#000"
                    >
                        {`  More About us`}
                    </CustomLinkBtn>
                </div>
                <h2 className='responsiveheading2 mt-8 mb-5'>{`Blogs`}</h2>
                <div className="mt-10 flex items-center justify-center gap-5">
                    <BlogListWithPagination
                        initialBlogs={blogs}
                        totalBlogs={posts.totalpages}
                        limit={LIMIT}
                    />
                </div>
                <CommonCard4
                    title="Why Read the Shikso Blog?"
                    description="Because the future of education is being written today — in every classroom, on every screen, and through every curious learner."
                    tagline="Shikso — Practice | Learn | Evolve "
                    paragraph=" At Shikso, we make learning fun, futuristic, and full of possibilities."
                    bgColor="#3498db"
                    buttonText="Learn more"
                    redirectUrl="/"
                />
                <CommonFaq faqData={faqData} />
            </div>
        </div>
    )
}
export default BlogPage