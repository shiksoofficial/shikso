import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import Testimonial from '@/common-component/Testimonial/Testimonial'
import ContactForm from '@/component/contactus/ContactForm'
import ContactUs1 from '@/component/contactus/ContactUs1'
import ContactUs2 from '@/component/contactus/ContactUs2'
import { getCanonicalUrl } from '@/lib/seo'
import React from 'react'


export const metadata = {
  title: "Contact Shikso | Smart Learning Platform | Get in Touch",
  description: "Connect with Shikso — India’s modern education and AI-powered smart learning platform for schools, students, and parents. Reach us today for learning beyond.",
  keywords: ["contact Shikso", " Shikso learning app", " AI learning platform", " smart education support", "connect Shikso team", "AI in education India", " Shikso contact form",],
  alternates: { canonical: "https://www.shikso.com/contact-us" },
  openGraph: {
    title: "Contact Shikso | Smart Learning Platform | Get in Touch",
    description: "Connect with Shikso — India’s modern education and AI-powered smart learning platform for schools, students, and parents. Reach us today for learning beyond.",
    url: "https://www.shikso.com/",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Shikso | Smart Learning Platform | Get in Touch",
    description: "Connect with Shikso — India’s modern education and AI-powered smart learning platform for schools, students, and parents. Reach us today for learning beyond.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const testimonialData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    title: " Radhika Sharma – Parent, Indore",
    rating: 5,
    description: " “Shikso has completely changed the way my son studies. The gamified quizzes and progress reports make learning enjoyable and effective!”"
  },
  {
    id: 2,
    icon: "/aboutus/about-3-1.svg",
    title: "Aman Verma – Class 8 Student, Lucknow",
    rating: 5,
    description: " “I used Shikso SmartSet to prepare for my Navodaya exam. The AI-based practice system helped me understand my weak areas easily.”"
  },
  {
    id: 3,
    icon: "/aboutus/about-3-1.svg",
    title: " Principal Meenakshi Rao – Green Valley School, Bhopal",
    rating: 5,
    description: " “As an educator, I find Shikso’s platform revolutionary. It bridges the gap between classroom teaching and digital learning perfectly.”"
  },
  {
    id: 4,
    icon: "/aboutus/about-3-1.svg",
    title: " Priya Gupta – Parent, Delhi",
    rating: 5,
    description: " “The Shikso Smart Learning App is intuitive, interactive, and aligned with modern education standards. Highly recommended for all parents.”"
  },
]

const ContactUs = () => {


  return (
    <>
      <div>
        <CommonBanner1
          title={"Contact Shikso"}
          paraghraph={"Let’s Build the Future of Smart Learning Together"}
          breadcom={[{ title: "Contact Us" }]} />
        <ContactUs1 />
        <ContactForm />
        <ContactUs2 />
        <Testimonial testimonialData={testimonialData} />
      </div>
    </>
  )
}

export default ContactUs