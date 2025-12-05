export const dynamic = "force-dynamic";
import HeroSection from '@/component/homepage/HeroSection';
import React from 'react'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import NewsListPagination from '@/common-component/Pagination/NewsListPagination';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import CommonCard4 from '@/common-component/CommonCard4/CommonCard4';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';

export const metadata = {
  title: "Shikso News | Latest Education Updates & Exam Alerts |",
  description: "Get the latest education news, exam notifications, school updates, and government announcements on Shikso News. Stay informed with reliable education updates.",
  keywords: ["Shikso news", " educational news India", " exam alerts", "JNVST updates", "  AISSEE notifications", " school announcements", " education policy news", "edtech updates", " CBSE news", " student news India"],
  alternates: { canonical: getCanonicalUrl("/educational-news") },
  openGraph: {
    title: "Shikso News | Latest Education Updates & Exam Alerts |",
    description: "Get the latest education news, exam notifications, school updates, and government announcements on Shikso News. Stay informed with reliable education updates.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shikso News | Latest Education Updates & Exam Alerts |",
    description: "Get the latest education news, exam notifications, school updates, and government announcements on Shikso News. Stay informed with reliable education updates.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const faqData = [
  {
    question: "1. What type of news does Shikso cover?",
    answer: "We share important updates related to school education, exam notifications, government announcements, and major happenings in India’s education ecosystem."
  },
  {
    question: "2. Who is Shikso News for?",
    answer: "Students, parents, teachers, schools, and anyone who wants reliable updates about exams and education trends."
  },
  {
    question: "3. How often is Shikso News updated?",
    answer: "We publish updates regularly — anytime there’s a new circular, exam release, or important announcement."
  },
  {
    question: "4. Do you cover competitive exams?",
    answer: "Yes! We actively cover JNVST, AISSEE, CBSE, NTSE, Olympiads, and other key exams across India."
  },
  {
    question: "5. Are Shikso News articles verified?",
    answer: "Absolutely. Every update is sourced from official notifications, verified announcements, and trusted education portals."
  },
  {
    question: "6. Is Shikso News free to access?",
    answer: "Yes! All news stories are completely free for everyone."
  },
  {
    question: "7. Does Shikso provide exam reminders?",
    answer: "Yes — we highlight release dates, admit cards, results, answer keys, and important timelines."
  },
  {
    question: "8. Do you share updates on school achievements?",
    answer: "Yes, we feature success stories, events, and innovations from schools across India."
  },
  {
    question: "9. Can schools share their updates with Shikso?",
    answer: "Definitely! Schools and educators can send announcements via the Contact Shikso page."
  },
  {
    question: "10. How can I stay updated with Shikso’s latest news?",
    answer: "Visit our News section regularly or follow Shikso on social media for instant education alerts."
  },
];

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
        <div
          className="border-gray-300 border rounded-xl p-6 ">
          <h2 className='responsiveheading2 mb-5'>{`Your Daily Window Into What’s Changing in Education`}</h2>
          <p className="responsive-text text-[#1A2E33] ">{`Schools are evolving, exams are shifting, and new policies are shaping the future — Shikso News brings it all to you, fast and clear.`}</p>
          <p className="responsive-text text-[#1A2E33] mb-4">{`From government announcements to school-level updates, competitive exam alerts, and big changes in the education system, this is where information meets impact.
            Whether you’re a parent tracking updates, a student preparing for exams, or an educator staying informed — this is your trusted space for verified, timely, and easy-to-understand education news.`}</p>
          <CustomLinkBtn
            href='/about-us'
            color="#ffc107"
            textColor="#000"
          >
            {`  More About us`}
          </CustomLinkBtn>
        </div>
        <h2 className='responsiveheading2 mt-8 mb-5'>{`Educational News`}</h2>
        <div className="mt-10 flex items-center justify-center gap-5">
          <NewsListPagination
            initialBlogs={blogs}
            totalBlogs={posts.totalpages}
            limit={LIMIT}
          />
        </div>
        <CommonCard4
          title="Why Follow Shikso News?"
          description="Because the world of education changes every week — and every update matters."
          tagline="Shikso — Practice | Learn | Evolve "
          paragraph="At Shikso, we bring you accurate, clear, and timely news so students, teachers, and schools never miss important announcements."
          bgColor="#3498db"
          buttonText="Learn more"
          redirectUrl="/"
        />
        <CommonFaq faqData={faqData} />
      </div>
    </div>
  )
}

export default EducationalNewsPage;