import Testimonial from '@/common-component/Testimonial/Testimonial'
import ContactForm from '@/component/contactus/ContactForm'
import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo'
import React from 'react'


export const metadata = {
  title: "Contact us",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/contact-us") },
  openGraph: {
    title: "Contact us",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact us",
    description: "Reach out for any queries.",
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};

const testimonialData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    title: "Rohan",
    partner: "Partner",

    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur."
  },
  {
    id: 2,
    icon: "/aboutus/about-3-1.svg",
    title: "Anna",
    partner: "Partner",

    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur."
  },
  {
    id: 3,
    icon: "/aboutus/about-3-1.svg",
    title: "Punit",
    partner: "Partner",

    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur."
  },
  {
    id: 4,
    icon: "/aboutus/about-3-1.svg",
    title: "john",
    partner: "Partner",

    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur."
  },
]

const ContactUs = () => {


  return (
    <>
      <div>
        <HeroSection imageurl="https://i.pinimg.com/1200x/5a/a3/63/5aa3639eab9fc1a7c6efc97f98502ed9.jpg" title="Welcome To Our Website" title2="Get In Touch" button={false} breadcom={[{ title: "Contact Us" }]} />
        <ContactForm />
        <Testimonial testimonialData={testimonialData} />
      </div>
    </>
  )
}

export default ContactUs