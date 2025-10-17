import About1 from '@/component/aboutus/About1'
import About2 from '@/component/aboutus/About2'
import About3 from '@/component/aboutus/About3'
import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo'

import React from 'react'
export const metadata = {
  title: "About Us",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/about-us") },
  openGraph: {
    title: "About Us",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
    twitter: {
    card: 'summary_large_image',
    title: "About Us",
    description:"Reach out for any queries.",
    images:[{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};
const AboutPage = () => {
  return (
    <>
     <HeroSection imageurl="/aboutus/hero_1.jpg" title="Welcome To Our Website" title2="About Us" breadcom ={[{title: "About Us"}]}/>
    <About1 />
    <About2 />
    <About3 />
    </>
  )
}

export default AboutPage