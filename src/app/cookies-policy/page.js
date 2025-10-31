import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';

export const metadata = {
    title: " Cookies Policy | Shikso – How We Use Cookies",
    description: " Learn how Shikso uses cookies to improve user experience, personalize content, and ensure secure browsing across our educational platform.",
    keywords: ["Shikso cookies policy", "website cookies", "online learning cookies", "education platform privacy", "Shikso data usage"],
    alternates: { canonical: getCanonicalUrl("/cookies-policy") },
    openGraph: {
        title: " Cookies Policy | Shikso – How We Use Cookies",
        description: " Learn how Shikso uses cookies to improve user experience, personalize content, and ensure secure browsing across our educational platform.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Cookies Policy | Shikso – How We Use Cookies",
        description: " Learn how Shikso uses cookies to improve user experience, personalize content, and ensure secure browsing across our educational platform.",
        images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
    },
};

const Page = () => {
    return (
        <>
            <CommonBanner1 title={"Cookies Policy"} breadcom={[{ title: "Cookies Policy" }]} />

            <div className="custom-container bg-white">
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-5"><strong className='font-bold'>{`Cookies Policy  – Shikso`}</strong></h2>
                <p className="responsive-text text-[#1A2E33] mt-4 mb-7">
                    <strong className="font-bold">{`Published Date : `}</strong> {` October 30, 2025`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}

                </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className="font-bold">{`Shikso `}</strong>{` (https://www.shikso.com).`} </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` This Cookies Policy explains how and why we use cookies and similar tracking technologies when you visit our website, mobile application, or use our online learning services.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`  They help websites recognize your device, store preferences, and enhance user experience by remembering information such as login details, browsing activity, and site preferences.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2   ">{` 1. What Are Cookies?`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Cookies are small text files placed on your computer, smartphone, or tablet when you visit a website.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`Cookies are small text files stored on your browser or device when you visit a website. They help websites function properly, enhance user experience, and collect data for analytics and personalization.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`2. How We Use Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`At`} <strong className='font-bold'>{`Shikso, `}</strong>{` we use cookies to:`}</p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{` Enhance website performance `}</strong>{` and load speed.`}</li>
                    <li><strong className='font-bold'>{` Personalize user experience `}</strong>{` and recommend relevant educational content.`}</li>
                    <li><strong className='font-bold'>{` Analyze traffic patterns `}</strong>{` and improve platform usability.`}</li>
                    <li><strong className='font-bold'>{`Ensure secure login sessions `}</strong>{` for registered users.`}</li>
                    <li><strong className='font-bold'>{` Display relevant ads and promotions `}</strong>{` based on your interests (where applicable).`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`3. Types of Cookies We Use`}</h2>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{` Essential Cookies: `}</strong>{`  Necessary for website functionality (e.g., logging in, saving form entries). Without these, our site may not operate correctly.`}</li>
                    <li><strong className='font-bold'>{` Analytical & Performance Cookies: `}</strong>{`  Help us understand how visitors interact with our platform and which areas need improvement.`}</li>
                    <li><strong className='font-bold'>{`Functional Cookies: `}</strong>{`  Remember user preferences (like language, location, and theme settings).`}</li>
                    <li><strong className='font-bold'>{`Advertising & Targeting Cookies: `}</strong>{`  Used to display personalized ads and measure marketing effectiveness.`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`4. Third-Party Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`Some cookies on our site are set by third-party services, such as:`} </p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{` Google Analytics`}</li>
                    <li>{` Meta (Facebook) Pixel`}</li>
                    <li>{` YouTube embeds or other educational video platforms`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`These cookies track anonymous user data for analytics and ad personalization.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` We do`}<strong className='font-bold'>{`  not control `}</strong>{`third-party cookies and recommend reviewing their privacy policies.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`5. Managing Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`You have full control over cookie preferences. You can:`} </p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{` Modify browser settings to block or delete cookies.`}</li>
                    <li>{` Decline non-essential cookies when prompted on your first visit.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   "><strong className='font-bold'>{`Note:  `}</strong>{`Disabling cookies may limit certain features or functions of Shikso’s platform.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2   ">{`6. Updates to This Policy`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`We may update this Cookies Policy periodically to reflect changes in technology, law, or our operations.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{` The revised version will be posted on this page with an updated “Last Updated” date.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you have any questions about this Disclaimer, please reach out to us at:`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong className='font-bold'>{`Shikso`}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-1  lg:items-center flex gap-1.5"><FaMapPin /><strong className='font-bold'>{`Address:`}</strong>{`SRP Co-Working Space, 48, E-5, Arera Colony, Bhopal, Madhya Pradesh, India – 462016`}</p>
                <Link href="mailto: info@shikso.com">
                    <p className="dm_sans responsive-text text-[#1A2E33] font-medium mb-1 cursor-pointer items-center text-sm md:text-sm lg:text-md flex gap-1.5"
                    >
                        <TfiEmail />
                        <strong className='font-bold'>{`Email: `}</strong>
                        {" info@shikso.com"}
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
                                src="/privacyLogo.png"
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