import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';
import { SiWebmoney } from "react-icons/si";

export const metadata = {
    title: "  Cookies Policy | Shikso – How We Use Cookies",
    description: "Learn how Shikso uses cookies to personalize content, improve performance, and ensure a secure smart learning experience while you use our website & mobile app",
    keywords: ["Shikso cookies policy", "website cookies", "online learning cookies", "smart learning privacy", "education platform data", "education platform data", "cookies management",],
    alternates: { canonical: getCanonicalUrl("/cookies-policy") },
    openGraph: {
        title: " Cookies Policy | Shikso – How We Use Cookies",
        description: "Learn how Shikso uses cookies to personalize content, improve performance, and ensure a secure smart learning experience while you use our website & mobile app",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Cookies Policy | Shikso – How We Use Cookies",
        description: "Learn how Shikso uses cookies to personalize content, improve performance, and ensure a secure smart learning experience while you use our website & mobile app",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
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
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className="font-bold">{`Shikso `}</strong>{`(`}
                    <Link href="https://www.shikso.com" className='text-blue-400' target="_blank"
                        rel="noopener noreferrer"
                        aria-label="website link">{`https://www.shikso.com`}</Link>
                    {`).`} </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`This `}<strong className='font-bold'>{` Cookies Policy `}</strong>{` explains how we use cookies and similar technologies to improve your experience while using our website, mobile app, and online learning services.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2 ">{`  By continuing to browse or use our platform, you agree to the use of cookies as described in this policy.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{` Please read this policy along with our [`}
                    <Link href="/privacy-policy" >{`Privacy Policy]`}</Link> {`and`}  <Link href="/terms-and-conditions" >{`[Terms & Conditions].`}</Link>
                </p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`1. What Are Cookies?`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium ">{`Cookies are`} <strong className='font-bold'>{`small text files `}</strong>{` stored on your device (computer, tablet, or smartphone) when you visit a website.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` They help us recognize your device, remember preferences, and improve functionality by :`} </p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-3 ">
                    <li>{`Keeping you signed in`}</li>
                    <li>{` Saving your preferences (like language or theme)`}</li>
                    <li>{`Understanding how you use our site, and`}</li>
                    <li>{` Enhancing learning recommendations.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7">{`Cookies cannot access or read files from your computer and are safe to use.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`2. How We Use Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`At`} <strong className='font-bold'>{`Shikso, `}</strong>{` cookies help us create a smoother and more personalized experience. We use them to :`}</p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`  Ensure the website functions properly and loads quickly`}</li>
                    <li>{` Personalize content and course recommendations`}</li>
                    <li>{` Analyze user activity to improve our Smart Learning tools`}</li>
                    <li>{`  Secure your login sessions and protect your account`}</li>
                    <li>{` Show relevant promotions or offers (where applicable)`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`3. Types of Cookies We Use`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   "><strong className='font-bold'>{`a. Essential Cookies `}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Required for website performance and basic functionality.`}</li>
                    <li>{`Enable secure login, navigation, and data submission.`}</li>
                    <li>{`Cannot be disabled through site settings.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   "><strong className='font-bold'>{`b. Analytical & Performance Cookies `}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Help us understand how users interact with the platform.`}</li>
                    <li>{`Collect anonymous information about traffic, most-used features, and errors.`}</li>
                    <li>{`Used to improve overall learning experience.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   "><strong className='font-bold'>{`c. Functional Cookies `}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Store user preferences such as language, region, and interface layout.`}</li>
                    <li>{`Make your next visit faster and more personalized.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   "><strong className='font-bold'>{`d. Advertising & Targeting Cookies`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Used (with your consent) to show relevant ads and offers based on browsing behavior.`}</li>
                    <li>{`Help us measure and improve our marketing efforts.`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`4. Third-Party Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1">{`We may use trusted third-party tools that set their own cookies to provide analytics and functionality.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2">{` These include :`} </p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{`Google Analytics `}</strong>{` – to analyze site performance and visitor trends.`}</li>
                    <li><strong className='font-bold'>{`Meta (Facebook) Pixel  `}</strong>{` – for personalized ad campaigns.`}</li>
                    <li><strong className='font-bold'>{`YouTube / Vimeo `}</strong>{` – for embedded educational videos.`}</li>
                    <li><strong className='font-bold'>{`Payment Gateways `}</strong>{`  – such as Razorpay or Stripe, to process secure transactions`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2"><strong className='font-bold'>{`Note : `}</strong>{`Shikso does not control third-party cookies. We recommend checking their respective privacy and cookies policies for more details.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`5. Data Collected by Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`Cookies may collect non-personal information like :`} </p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Browser type and version`}</li>
                    <li>{`Device details (desktop or mobile)`}</li>
                    <li>{`IP address (for location-based settings)`}</li>
                    <li>{`Pages visited and time spent on site`}</li>
                    <li>{`Clicks, scrolls, or navigation paths.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`We do not use cookies to collect personal information such as names, email addresses, or passwords unless you provide them voluntarily (e.g., during signup).`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2   ">{`6. How Long We Keep Cookies`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Some cookies are `}<strong className='font-bold'>{` session-based `}</strong>{` (deleted when you close your browser), while others are `}<strong className='font-bold'>{` persistent `}</strong>{` (saved for a specific time).`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1 ">{` Persistent cookies help us remember your preferences for future visits.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`  You can delete them anytime from your browser.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2   ">{`7.  Data Security`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`We take user privacy seriously. All data collected through cookies is handled securely and in compliance with data protection regulations.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1 ">{`  We never sell or trade cookie data with any third party.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2   ">{`8. Updates to This Policy`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1">{`We may update this `}<strong className='font-bold'>{` Cookies Policy `}</strong>{` to reflect changes in technology, law, or our services.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1 ">{`The latest version will always be available on this page with a new “Last Updated” date.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`Please check periodically to stay informed.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you have questions about how cookies are used on`}<strong className='font-bold'>{` Shikso `}</strong>{`, reach out to us at :`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong className='font-bold'>{`Shikso`}</strong></p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-medium mb-2 cursor-pointer items-center flex gap-1.5"><FaMapPin className='text-blue-500' />  <strong className='font-bold text-[#1A2E33]'>{`Address :`}</strong>{`SRP Co-Working Space, 48, E-5, Arera Colony, Bhopal, Madhya Pradesh, India – 462016`}</p>
                <Link href="mailto:info@shikso.com">
                    <p className="dm_sans responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <TfiEmail />
                        <strong className='font-bold text-[#1A2E33]'>{`Email : `}</strong>
                        {"info@shikso.com"}
                    </p>
                </Link>
                <Link href="tel:+91 7974186754">
                    <p className="dm_sans responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <MdCall />
                        <strong className='font-bold text-[#1A2E33]'>{"Phone : "}</strong>
                        {"+91 7974186754"}
                    </p>
                </Link>
                <Link href="https://www.shikso.com" className='text-blue-400' target="_blank"
                    rel="noopener noreferrer"
                    aria-label="website link">
                    <p className="dm_sans responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <SiWebmoney />
                        <strong className='font-bold text-[#1A2E33]'>{`Website : `}</strong>   {`https://www.shikso.com`}  </p>
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