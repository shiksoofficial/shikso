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
    title: "  Disclaimer | Shikso – Educational Information Transparency",
    description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
    keywords: ["Shikso disclaimer", "education platform terms", " online learning disclaimer", "student information disclaimer", "Shikso policy"],
    alternates: { canonical: getCanonicalUrl("/disclaimer-policy") },
    openGraph: {
        title: " Disclaimer | Shikso – Educational Information Transparency",
        description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
        url: getCanonicalUrl("/"),
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: " Disclaimer | Shikso – Educational Information Transparency",
        description: " Read Shikso’s Disclaimer to understand the terms for using our educational platform, learning content, practice resources, and skill development responsibly.",
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
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`This Disclaimer sets out important information regarding your use of our website, mobile application and the educational resources we provide. By accessing or using our website (`}  <Link href="https://www.shikso.com" className='text-blue-400' target="_blank"
                    rel="noopener noreferrer"
                    aria-label="website link">{`https://www.shikso.com`}</Link> {`) or services, you acknowledge and agree to the terms below.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`1. General Information`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 ">{`Under no circumstances shall `} <strong className="font-bold">{` Shikso, its owners, employees, or partners `}</strong>{` be held responsible for any direct, indirect, incidental, or consequential damages resulting from:`}</p>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`All content provided on the Shikso site, mobile app and affiliated channels is intended purely for general educational and informational purposes. `}</li>
                    <li>{`While we strive to keep information current and accurate, Shikso makes `}<strong className="font-bold">{` no warranties or representations `}</strong>{`, whether express or implied, regarding the completeness, reliability, suitability or accuracy of the information on this site.`}</li>
                    <li>{`Any action you take based on information on Shikso is strictly at your own risk. Shikso, its directors, employees, agents or partners will`}<strong className="font-bold">{` not be liable `}</strong>{`for any losses or damages arising from your use of (or inability to use) the website or content.`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Educational Content`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Shikso provides academic, competitive-exam and skill-based learning resources to support student preparation and knowledge building. `}</li>
                    <li>{`However, using our Platform does `}<strong className="font-bold">{` not guarantee `}</strong>{`admission, job placement, exam success, a particular grade or other specific outcome. Learner outcomes depend on individual effort, preparation, aptitude and factors beyond our control..`}</li>
                    <li>{`The Platform is designed to `}<strong className="font-bold">{` supplement `}</strong>{` learning, not to replace official curriculum, tutoring, coaching or institutional education..`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. External Links & Third-Party Content`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Our website may include links to external third-party websites or services for your convenience or additional information.`}</li>
                    <li>{`We have no control over and make no warranty or representation about the content, nature, availability or accuracy of those external sites.`}</li>
                    <li>{`Inclusion of any link does not imply endorsement or recommendation by Shikso of the linked site, product or service.`}</li>
                    <li>{`Users should review the terms and privacy policies of any third-party websites before engaging with them.`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Professional Advice Disclaimer`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`All educational materials, articles, blogs, guides and resources on Shikso are intended to `}<strong className="font-bold">{` guide and support  `}</strong>{`learners.`}</li>
                    <li>{`They `}<strong className="font-bold">{` should not `}</strong>{` be construed as professional academic counselling, educational consultancy, legal advice, or guaranteed instruction.`}</li>
                    <li>{`For institution-specific information (e.g., university admissions, government exam guidelines, board curricula), you should verify details from the relevant official authorities or sources.`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Limitation of Liability`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 ">{`Under no circumstances shall Shikso, its owners, officers, employees, affiliates or partners be liable for any direct, indirect, incidental, special, consequential or punitive damages resulting from :`}</p>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Your use of or inability to use our website, app or services. `}</li>
                    <li>{`Any errors, omissions, interruptions, delays or mis-deliveries of content. `}</li>
                    <li>{`Technical failures, system downtime, viruses, bugs, or other malicious software or third-party actions. `}</li>
                    <li>{`Any loss of data, profits, opportunities or other intangible losses arising out of your reliance on the Platform. `}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Use At Your Own Risk & “As-Is” Basis`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`The website, mobile application and all services provided by Shikso are offered on an `}<strong className="font-bold">{` “AS IS” and “AS AVAILABLE” `}</strong>{` basis.`}</li>
                    <li>{`Shikso expressly disclaims `}<strong className="font-bold">{` all warranties and conditions `}</strong>{`of any kind (whether express or implied) including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, accuracy, reliability or non-infringement.`}</li>
                    <li>{`It is your responsibility to evaluate the suitability, accuracy and completeness of all content available through the Platform for your individual purposes.`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Consent`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`By using our website or services, you indicate your consent to this Disclaimer and agree to abide by these terms. `}</li>
                    <li>{`If you do not agree with the terms of this Disclaimer, please do not use our website, mobile app or services. `}</li>
                    <li>{` `}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Updates to This Disclaimer`}</h2>
                <ul className="responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`We may revise, update or change this Disclaimer at any time without prior notice`}</li>
                    <li>{`Any such changes will be posted on this page and the `}<strong className="font-bold">{` “Last Updated” `}</strong>{` date at the top will be revised accordingly.`}</li>
                    <li>{`Your continued use of Shikso after such changes constitutes your acceptance of the updated Disclaimer.`}</li>
                </ul>
                {/* <hr className='text-[#1A2E33] mt-2 mb-5'></hr> */}
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you have any questions, concerns or require clarification regarding this Disclaimer, please reach out to us:`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  "><strong className='font-bold'>{`Shikso`}</strong></p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-medium mb-2 cursor-pointer items-center flex gap-1.5"><FaMapPin className='text-blue-500' />  <strong className='font-bold text-[#1A2E33]'>{`Address :`}</strong>{`SRP Co-Working Space, 48, E-5, Arera Colony, Bhopal, Madhya Pradesh, India – 462016`}</p>
                <Link href="mailto:info@shikso.com" >
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
                    <p className="dm_sans responsive-text text-blue-500 font-medium  cursor-pointer items-center flex gap-1.5 mb-12">
                        <SiWebmoney />
                        <strong className='font-bold text-[#1A2E33]'>{`Website : `}</strong>   {`https://www.shikso.com`}  </p>
                </Link>

                {/* <p className="responsive-text text-[#1A2E33] mt-12 mb-12">
                    <strong className="font-bold">{`Published Date : `}</strong> {` October 30, 2025`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "} {`, Shikso`}
                </p> */}
                {/* <div className="justify-items-center sm:justify-items-end   sm:w-full mt-5 mb-14">
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
                </div> */}
            </div>
        </>
    )
}

export default Page;