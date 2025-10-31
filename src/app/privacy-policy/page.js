import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import Link from 'next/link';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';
import { FaMapPin } from "react-icons/fa6";

export const metadata = {
    title: " Shikso Privacy Policy | Data Protection & User Information Security",
    description: " Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
    keywords: ["Shikso privacy policy", "data protection", "user information security", "education data privacy", " online learning safety", "student data policy"],
    alternates: { canonical: getCanonicalUrl("/privacy-policy") },
    openGraph: {
        title: " Shikso Privacy Policy | Data Protection & User Information Security",
        description: " Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Shikso Privacy Policy | Data Protection & User Information Security",
        description: " Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
        images: [{ url: "https://zentrail-delta.vercel.app/_next/image?url=%2Fzantraillogo.png&w=1920&q=100" }],
    },
};
const Page = () => {
    return (
        <>
            <CommonBanner1 title={"Privacy Policy"} breadcom={[{ title: "Privacy Policy" }]} />

            <div className="custom-container bg-white">
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-5 sm:mb-7"><strong className='font-bold'>{`Privacy Policy – Shikso`}</strong></h2>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Effective Date : `}</strong>{` October 2025`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Business Name : `}</strong> {` Shikso`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Address : `}</strong>
                    {` FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Phone : `}</strong>   {` +91 7974186754`}  </p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Email : `}</strong>   {` info@shikso.com`}  </p>
                <hr className='text-[#1A2E33] mt-4 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-2">{`1. Introduction`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className='font-bold'>{` Shikso`}</strong>{` , an AI-powered smart learning platform dedicated to making education engaging, affordable, and accessible.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, mobile app, or interact with our services.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`By using`}<strong className='font-bold'>{` Shikso`}</strong> {`, you agree to the practices described in this policy.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`2. Information We Collect`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`We may collect the following types of information:`}</p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{`Personal Information: `}</strong>{` Name, email address, phone number, age (for student accounts), and location details voluntarily provided through sign-up forms or contact requests.`}</li>
                    <li><strong className='font-bold'>{`Account Information: `}</strong>{` Login credentials, preferences, progress reports, and activity data within your learning dashboard.`}</li>
                    <li><strong className='font-bold'>{`Payment Details: `}</strong>{`Limited billing data processed securely through trusted third-party gateways (e.g., Razorpay, Stripe).`}</li>
                    <li><strong className='font-bold'>{`Usage Data: `}</strong>{`Browser type, IP address, device identifiers, pages visited, and interaction logs for analytics and improvement.`}</li>
                    <li><strong className='font-bold'>{`Cookies & Tracking Tools: `}</strong>{` To personalize your experience, remember preferences, and monitor website performance.`}</li>
                </ul>

                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. How We Use Your Information`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2  ">{`Shikso uses your data to:`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`Deliver personalized learning experiences`}</li>
                    <li>{`Process payments and manage subscriptions`}</li>
                    <li>{`Communicate updates, course information, and promotions (with consent)`}</li>
                    <li>{`Improve content accuracy and platform performance`}</li>
                    <li>{`Ensure account safety and prevent fraudulent activities`}</li>
                    <li>{`Analyze usage trends to enhance user engagement`}</li>

                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Data Security`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1  ">{`We apply advanced security measures — encryption, access control, and periodic audits — to protect your personal data from unauthorized access, alteration, or disclosure.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7  ">{`All transactions are processed via `}<strong className='font-bold'>{`secure SSL connections.`}</strong></p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Sharing of Information `}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`We `}<strong className='font-bold'>{`do not sell or rent`}</strong> {` your personal data.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1 ">{` Information may only be shared with:`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`Trusted service providers (hosting, payment, analytics) under strict confidentiality agreements`}</li>
                    <li>{`Legal authorities, if required by law or to protect user safety`}</li>
                    <li>{`Institutional partners (schools/coaching centers) only with your consent`}</li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Cookies Policy `}</h2>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium  mb-1 ">{`Cookies help us remember user preferences and enhance functionality.`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{` You can control or delete cookies through your browser settings; however, disabling them may limit certain features of the platform.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Third-Party Services`}</h2>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-1  ">{`Our platform may integrate APIs or links from external tools such as `}<strong className='font-bold'>{` Google Analytics, Mixpanel, `}</strong> {`or `}<strong className='font-bold'>{`YouTube.`}</strong></p>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7  ">{` These services have their own privacy practices, and we encourage you to review their policies separately.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Children’s Privacy `}</h2>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-1   ">{`Shikso is designed for school-age learners, and we take children’s privacy seriously.`}</p>
                <p className="dm_sans responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7   ">{` We collect limited data only with `}<strong className='font-bold'>{` parental or institutional consent`}</strong> {` , and we do not knowingly store unnecessary personal information of minors.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Your Rights`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1   ">{` You may:`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5  ">
                    <li>{`Access, update, or correct your personal information`}</li>
                    <li>{`Request data deletion or portability`}</li>
                    <li>{`Opt-out of marketing communications at any time`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7   ">{`To exercise these rights, email us at`}<strong className='font-bold'>{` info@shikso.com.`}</strong></p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Policy Updates`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1   ">{` We may modify this Privacy Policy from time to time to reflect improvements or legal changes.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1   ">{` Updated versions will carry a revised “Effective Date.”`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7   ">{`  Continued use of Shikso constitutes acceptance of the updated terms.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`For any privacy-related concerns, please reach out:`}</p>
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