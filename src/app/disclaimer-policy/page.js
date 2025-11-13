import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';

export const metadata = {
    title: "Disclaimer | Shikso – Educational Information Transparency",
    description: "Read Shikso’s official Disclaimer to understand the terms of using our educational content, resources, and website responsibly.",
    keywords: ["Shikso disclaimer", "education platform terms", " online learning disclaimer", "student information disclaimer", "Shikso policy"],
    alternates: { canonical: getCanonicalUrl("/disclaimer-policy") },
    openGraph: {
        title: "Disclaimer | Shikso – Educational Information Transparency",
        description: "Read Shikso’s official Disclaimer to understand the terms of using our educational content, resources, and website responsibly.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Disclaimer | Shikso – Educational Information Transparency",
        description: "Read Shikso’s official Disclaimer to understand the terms of using our educational content, resources, and website responsibly.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
};

const Page = () => {
    return (
        <>
            <CommonBanner1 title={"Disclaimer"} breadcom={[{ title: "Disclaimer" }]} />

            <div className="custom-container bg-white">
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-5"><strong className='font-bold'>{`Disclaimer  – Shikso`}</strong></h2>
                <p className="responsive-text text-[#1A2E33] mt-4 mb-7">
                    <strong className="font-bold">{`Published Date : `}</strong> {` October 30, 2025`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}

                </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className="font-bold">{`Shikso!`}</strong> </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{` This Disclaimer outlines important information regarding the use of our website and the educational resources we provide. By accessing or using this website, you acknowledge and agree to the terms stated below.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`1. General Information`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`The information available on `} <strong className="font-bold">{`Shikso `}</strong>{` (https://www.shikso.com) is intended solely for general educational and informational purposes.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{` While we strive to keep the information accurate and up to date, `} <strong className="font-bold">{`Shikso makes no warranties or representations `}</strong>{` —express or implied—about the completeness, reliability, or accuracy of the information on this site.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`Any action you take based on the information found on Shikso is strictly at your own risk. `} <strong className="font-bold">{`Shikso will not be liable for any losses or damages `}</strong>{` arising from the use of our website or content.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Educational Content`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Shikso provides academic, competitive exam, and skill-based learning resources designed to enhance student knowledge and preparation.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{` However, our platform `} <strong className="font-bold">{`does not guarantee admission, job placement, or examination success. `}</strong>{` The outcomes depend on the learner’s individual effort, preparation, and other external factors beyond our control.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. External Links`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Our website may contain links to third-party websites or services. These links are provided for user convenience and additional information.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`We have  `} <strong className="font-bold">{`no control over the content, nature, or availability `}</strong>{` of those external sites and do not endorse any information, product, or service offered through them. Users are advised to review the privacy policies and terms of such third-party websites before engaging with them.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Professional Advice Disclaimer`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`All educational materials, blogs, and resources on Shikso are meant to guide and support learners.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` They should `} <strong className="font-bold">{` not be considered as professional academic advice or official educational consultancy. `}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{` For institution-specific details or government exam guidelines, users should verify information directly from official authorities or sources.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Limitation of Liability`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 ">{`Under no circumstances shall `} <strong className="font-bold">{` Shikso, its owners, employees, or partners `}</strong>{` be held responsible for any direct, indirect, incidental, or consequential damages resulting from:`}</p>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li><strong>{`Use or inability to use our website or services. `}</strong></li>
                    <li><strong>{`Errors, omissions, or delays in content. `}</strong></li>
                    <li><strong>{`Technical failures or website downtime. `}</strong></li>
                </ul>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Consent`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">{`By using our website, you consent to this Disclaimer and agree to its terms.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Updates to This Disclaimer`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium   mb-5 sm:mb-7">{`We may update, revise, or change this Disclaimer at any time without prior notice. All updates will be reflected on this page with a new “Last Updated” date.`}</p>
                <hr className='text-[#1A2E33] mt-2 mb-5'></hr>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Contact Us`}</h2>
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