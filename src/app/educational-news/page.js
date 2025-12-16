export const dynamic = "force-dynamic";
import HeroSection from '@/component/homepage/HeroSection';
import React from 'react'
import { apiClient } from '@/lib/api-client'
import { BASE_URL_API } from '@/lib/common'
import { getCanonicalUrl } from '@/lib/seo'
import axios from 'axios'
import NewsListPagination from '@/common-component/Pagination/NewsListPagination';
import CommonFaq from '@/common-component/CommonFaq/CommonFaq';
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import News1 from '@/component/educationalnews/News1';
import News2 from '@/component/educationalnews/News2';

export const metadata = {
  title: "Shikso News | Latest Education Updates & Exam Alerts |",
  description: "Get the latest education news, exam notifications, school updates, and government announcements on Shikso News. Stay informed with reliable education updates.",
  keywords: ["Shikso news", " educational news India", " exam alerts", "JNVST updates", "  AISSEE notifications", " school announcements", " education policy news", "edtech updates", " CBSE news", " student news India"],
  alternates: { canonical: "https://www.shikso.com/educational-news" },
  openGraph: {
    title: "Shikso News | Latest Education Updates & Exam Alerts |",
    description: "Get the latest education news, exam notifications, school updates, and government announcements on Shikso News. Stay informed with reliable education updates.",
    url: "https://www.shikso.com/",
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
      <CommonBanner1
        title={"Shikso News"}
        paraghraph={"Latest Updates • School Announcements • Education Headlines"}
        breadcom={[{ title: "News" }]} />
         <News1 />
      <div className="custom-container p-6 md:p-10">
        <h2 className='responsiveheading2 mt-8 mb-5'>{`Educational News`}</h2>
        <div className="mt-10 flex items-center justify-center gap-5">
          <NewsListPagination
            initialBlogs={blogs}
            totalBlogs={posts.totalpages}
            limit={LIMIT}
          />
        </div>
      </div>
      <News2 />
      <CommonFaq title=" – Shikso News & Education Updates" faqData={faqData} />
    </div>
  )
}

export default EducationalNewsPage;