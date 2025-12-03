import ConnectUsModal from '@/common-component/ConnectUsModal/ConnectUsModal';
import TestSeriesCard from '@/common-component/TestSeriesCard/TestSeriesCard';
import HeroSection from '@/component/homepage/HeroSection'
import Navodaya1 from '@/component/navodaya/Navodaya1';
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
  title: "Navodaya SmartSet",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/navodaya-smartset") },
  openGraph: {
    title: "Navodaya SmartSet",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Navodaya SmartSet",
    description: "Reach out for any queries.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};


const NavodayaSmartSet = () => {
  return (
    <div>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "Novadaya SmartSet" }]} />
      <Navodaya1 />
    </div>
  )
}

export default NavodayaSmartSet;