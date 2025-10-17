import SEO from "@/common-component/Seo";
import About1 from "@/component/aboutus/About1";
import About3 from "@/component/aboutus/About3";
import GetStarted from "@/component/homepage/GetStarted";
import HappyClient from "@/component/homepage/HappyClient";
import HeroSection from "@/component/homepage/HeroSection";
import Homepage1 from "@/component/homepage/Homepage1";
import { getCanonicalUrl } from "@/lib/seo";
import React from "react";

export const metadata = {
  title: "Contact Us - Zentrail",
  description: "Get in touch with us for inquiries or collaborations.",
  keywords: ["contact", "zentrail", "support"],
  alternates: { canonical: getCanonicalUrl("/") },
  openGraph: {
    title: "Contact Zentrail",
    description: "Reach out for any queries.",
    url: getCanonicalUrl("/"),
    images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection imageurl="https://i.pinimg.com/1200x/f2/66/48/f26648e326a0cf51a5dbd8c114336886.jpg" title="Welcome To Our Website" title2="Bring Fun Life To Your Kids" button={true} />
      <Homepage1 />
      <About1 />
      <About3 />
      <HappyClient />
      <GetStarted />
    </>
  );
}
