export const dynamic = "force-dynamic";
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import React from 'react'
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import Blog1 from '@/component/blog/Blog1';

export const metadata = {
    title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
    description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India's evolving education landscape.",
    keywords: ["Shikso blog", "school education trends", "AI learning", "edtech insights", "smart learning India", "gamified learning", "digital classrooms", "AI in schools", "modern teaching"],
    alternates: { canonical: "https://www.shikso.com/blogs" },
    openGraph: {
        title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
        description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India's evolving education landscape.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Explore Shikso Blog for Smart and AI driven Learning Insight",
        description: "Explore the Shikso Blog for stories and insights on school education, AI learning, and modern teaching trends. Stay updated with India's evolving education landscape.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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
        question: "6. What makes Shikso's blog different?",
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
        question: "10. How can I stay updated with Shikso's latest blogs?",
        answer: "Simply visit our blog section regularly or follow Shikso on social media for updates on new posts, stories, and education insights."
    },
];

const LIMIT = 100;

const BlogPage = async () => {
    const page = 1;

    try {
        const res = await apiClient.get(
            `${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published&page=${page}&limit=${LIMIT}`,
            { cache: "no-store" }
        );

        const posts = res?.data;
        const blogs = Array.isArray(posts?.blogs) ? posts.blogs : [];
        const categorySet = new Set();
        blogs.forEach(blog => {
            if (blog.category) {
                if (Array.isArray(blog.category)) {
                    blog.category.forEach(cat => {
                        if (cat && cat.trim()) categorySet.add(cat.trim());
                    });
                } else if (typeof blog.category === 'string' && blog.category.trim()) {
                    categorySet.add(blog.category.trim());
                }
            }
        });

        const categories = Array.from(categorySet).sort();
        const totalFromApi =
            typeof posts?.totalBlogs === "number" ? posts.totalBlogs :
                typeof posts?.total === "number" ? posts.total :
                    (posts?.pagination?.total ?? posts?.count ?? 0);

        return (
            <div>
                <CommonBanner1
                    title={"Shikso Blogs"}
                    title2={"Where Smart Learning Meets Smart Thinking"}
                    breadcom={[{ title: "Blogs" }]}
                />
                <Blog1
                    allBlogs={blogs}
                    categories={categories}
                />
                {/* <CommonFaq title=" - Shikso Blog & Education Insights" faqData={faqData} /> */}
            </div>
        );
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return (
            <div className="custom-container py-10 text-center">
                <p className="text-red-500 dm_sans">{`Failed to load blogs. Please try again later.`}</p>
            </div>
        );
    }
};

export default BlogPage;