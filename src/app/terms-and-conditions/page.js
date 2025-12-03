import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { MdCall } from 'react-icons/md';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';

export const metadata = {
    title: " Shikso Terms & Conditions | Smart Learning Platform User Agreement",
    description: " Read the official Terms & Conditions of Shikso — your trusted AI-powered smart learning and gamified education platform for modern students.",
    keywords: ["Shikso terms and conditions", "smart learning platform", " AI education policy, online learning agreement", "user terms Shikso", "student learning platform rules"],
    alternates: { canonical: getCanonicalUrl("/terms-and-conditions") },
    openGraph: {
        title: " Shikso Terms & Conditions | Smart Learning Platform User Agreement",
        description: " Read the official Terms & Conditions of Shikso — your trusted AI-powered smart learning and gamified education platform for modern students.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Shikso Terms & Conditions | Smart Learning Platform User Agreement",
        description: " Read the official Terms & Conditions of Shikso — your trusted AI-powered smart learning and gamified education platform for modern students.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};
const Page = () => {
    return (
        <>
            <CommonBanner1 title={"Terms & Conditions"} breadcom={[{ title: "Terms & Conditions" }]} />
            <div className="custom-container bg-white">
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-5 sm:mb-7"><strong className='font-bold'>{`Terms & Conditions – Shikso`}</strong></h2>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Effective Date : `}</strong>{` October 2025`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Business Name : `}</strong> {` Shikso`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Address : `}</strong>
                    {` FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Phone : `}</strong>   {` +91 7974186754`}  </p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Email : `}</strong>   {` info@shikso.com`}  </p>
                <hr className='text-[#1A2E33] mt-4 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-2">{`1. Introduction`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className='font-bold'>{` Shikso`}</strong>{`, an AI-powered smart learning platform designed to make education interactive, accessible, and fun.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` By accessing or using our website, mobile app, or SmartSet learning services, you agree to comply with and be bound by these `}<strong className='font-bold'>{` Terms and Conditions.`}</strong></p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`If you do not agree to these terms, please do not use the platform.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Use of Our Services`}</h2>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]    mb-3  ">
                    <li>{`You must use Shikso only for lawful educational purposes.`}</li>
                    <li>{`Users under 18 years of age must use the platform with the consent and supervision of a parent or guardian.`}</li>
                    <li>{`You agree not to misuse, copy, or attempt to disrupt the website, learning modules, or software system.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`We reserve the right to restrict or terminate access for users violating these terms.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Account Creation`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`To access certain features (e.g., personalized dashboards, SmartSets, mock tests), you must create a `}<strong className='font-bold'>{` Shikso account.`}</strong></p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` You are responsible for:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-3  ">
                    <li>{`Keeping your login credentials confidential.`}</li>
                    <li>{`Ensuring the information you provide is accurate and updated.`} </li>
                    <li>{`All activity occurring under your account.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`If we suspect unauthorized access or misuse, your account may be suspended or permanently disabled.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Payment & Subscription`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Some services (e.g., Premium SmartSets, Mock Tests, AI Reports) require payment.`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7    ">
                    <li>{`All fees are displayed clearly before checkout.`}</li>
                    <li>{`Payments are processed through secure third-party gateways (e.g., Razorpay, Stripe).`} </li>
                    <li>{`Fees once paid are  `}<strong className='font-bold'>{` non-refundable`}</strong>{` , except in cases of proven transaction errors or technical issues from our side.`}</li>
                    <li>{`Shikso reserves the right to modify pricing or subscription terms at any time with prior notice.`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Intellectual Property Rights`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`All content on this platform — including questions, explanations, videos, software, UI design, and branding — is the exclusive property of `}<strong className='font-bold'>{` Shikso.`}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` You are `}<strong className='font-bold'>{` not allowed`}</strong>{` to copy, redistribute, sell, or modify any content without written permission.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Violation of these rights may lead to legal action under applicable copyright laws.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. User-Generated Content`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`If you upload, comment, or share feedback, you:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3     ">
                    <li>{`Grant Shikso a non-exclusive right to use that content for improvement or promotional purposes`}</li>
                    <li>{`Agree that your content does not violate any third-party rights or contain harmful material`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Shikso reserves the right to remove any inappropriate or misleading content.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Limitation of Liability`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`While we strive to provide accurate and reliable educational content, Shikso does not guarantee specific outcomes or exam results.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` We are not liable for:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3    ">
                    <li>{`Any technical interruptions, data loss, or third-party errors`}</li>
                    <li>{`Any damages resulting from misuse or misinterpretation of content`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Use of the platform is entirely at your own risk.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Data Privacy`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`We value your privacy.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` All data collection and processing are governed by our `}<strong className='font-bold'>{`  Privacy Policy `}</strong>{` , which explains how we handle personal information securely and transparently.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Links to Third Parties`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Our website or app may contain links to external websites or partners.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` We are `}<strong className='font-bold'>{` not responsible `}</strong>{` for the content, privacy, or security practices of these third-party platforms.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Termination`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Shikso reserves the right to:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3    ">
                    <li>{`Suspend or terminate access to any user violating the Terms`}</li>
                    <li>{`Remove inappropriate accounts or fraudulent activity without prior notice`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Upon termination, all rights to use our platform and content immediately cease.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Indemnification`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`You agree to indemnify and hold harmless `}<strong className='font-bold'>{` Shikso `}</strong>{` , its affiliates, and team members from any claims, damages, or expenses arising from:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7    ">
                    <li>{`Your use or misuse of the platform`}</li>
                    <li>{`Violation of these Terms or applicable laws`} </li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Changes to These Terms`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`We may update these Terms & Conditions periodically to reflect new features, policies, or legal requirements.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` All changes will be posted on this page with a revised “Effective Date.”`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` Continued use of the platform constitutes acceptance of the updated terms.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`13. Governing Law`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`These Terms are governed by the laws of `}<strong className='font-bold'>{` India `}</strong>{` , and any disputes shall be subject to the jurisdiction of the courts in `}<strong className='font-bold'>{`Bhopal, Madhya Pradesh.`}</strong></p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`14. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  ">{`For any questions or clarifications regarding these Terms & Conditions:`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong className='font-bold'>{`Shikso`}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-1  lg:items-center flex gap-1.5"><FaMapPin /><strong className='font-bold'>{`Address:`}</strong>{`SRP Co-Working Space, 48, E-5, Arera Colony, Bhopal, Madhya Pradesh, India – 462016`}</p>
                <Link href="mailto:info@shikso.com">
                    <p className="dm_sans responsive-text text-[#1A2E33] font-medium mb-1 cursor-pointer items-center text-sm md:text-sm lg:text-md flex gap-1.5"
                    >
                        <TfiEmail />
                        <strong className='font-bold'>{`Email: `}</strong>
                        {"info@shikso.com"}
                    </p>
                </Link>
                <Link href="tel:+91 7974186754">
                    <p className="dm_sans responsive-text text-[#1A2E33] font-medium mb-2 cursor-pointer items-center flex gap-1.5"
                    >
                        <MdCall />
                        <strong className='font-bold'>{"Phone: "}</strong>
                        {"+91 7974186754"}
                    </p>
                </Link>
                <div className="justify-items-center sm:justify-items-end   sm:w-full mt-5 mb-14">
                    <p className="text-[20px]  pr-12 mb-2 text-[#4D5D60]">{`Powered by-`}</p>
                    <div  >
                        <Link href="/" >
                            <Image
                                src="/Shiksologo.png"
                                alt="logo"
                                width={155}
                                height={180}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;