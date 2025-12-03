import HeroSection from '@/component/homepage/HeroSection'
import { getCanonicalUrl } from '@/lib/seo';
import React from 'react'

export const metadata = {
  title: "Sainik School SmartSet",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/sainik-school-smartset") },
  openGraph: {
    title: "Sainik School SmartSet",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sainik School SmartSet",
    description: "Reach out for any queries.",
    images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
  },
};

const SainikSchoolSmartSet = () => {
  return (
    <div>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "Sainik School SmartSet" }]} />
    </div>
  )
}
export default SainikSchoolSmartSet;