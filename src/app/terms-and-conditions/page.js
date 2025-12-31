import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { MdCall } from 'react-icons/md';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';
import { SiWebmoney } from "react-icons/si";

export const metadata = {
    title: "Shikso Terms & Conditions| Smart Learning Platform Agreement",
    description: "  Explore Shikso’s official Terms & Conditions – understand your rights, responsibilities, and usage policies for our AI-powered Smart Learning Platform.",
    keywords: ["Shikso terms and conditions", " smart learning platform policy", " AI education terms", "online learning agreement", "student platform rules", " Shikso SmartSet policy"],
    alternates: { canonical: "https://www.shikso.com/terms-and-conditions" },
    openGraph: {
        title: "Shikso Terms & Conditions| Smart Learning Platform Agreement",
        description: "  Explore Shikso’s official Terms & Conditions – understand your rights, responsibilities, and usage policies for our AI-powered Smart Learning Platform.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Shikso Terms & Conditions| Smart Learning Platform Agreement",
        description: "  Explore Shikso’s official Terms & Conditions – understand your rights, responsibilities, and usage policies for our AI-powered Smart Learning Platform.",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Email : `}</strong>   <Link href="mailto:info@shikso.com" className='text-blue-400'>{` info@shikso.com`}</Link>   </p>
                <p className="dm_sans responsive-text text-[#1A2E33] font-normal"><strong className="font-bold">{`Website : `}</strong>    <Link href="https://www.shikso.com" className='text-blue-400' target="_blank"
                    rel="noopener noreferrer"
                    aria-label="website link">{`https://www.shikso.com`}</Link>  </p>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-2">{`1. Introduction`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className='font-bold'>{` Shikso`}</strong>{`,  your AI-powered`} <strong className='font-bold'>{`smart learning platform `}</strong>{`designed to make education smarter, more interactive, and accessible for every student.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`These `}<strong className='font-bold'>{`Terms and Conditions (“Terms”)`}</strong>{` govern your access to and use of our website, mobile app, digital learning tools, and other related services (collectively referred to as the “Platform”).`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`By visiting, registering, or using Shikso, you agree to comply with these Terms. If you do not agree, please refrain from using the platform.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Shikso is committed to providing an innovative, reliable, and secure environment for students, parents, and educators. These Terms explain how you can responsibly use our services and what we expect from you as a valued user.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Purpose of the Platform`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1 sm:mb-2  ">{`Shikso provides an integrated learning ecosystem called `}<strong className='font-bold'>{`SmartSet `}</strong>{`— a unique combination of study tools, practice tests, AI-powered analytics, and personalized learning modules.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1 sm:mb-2  ">{` The goal is to make `}<strong className='font-bold'>{` online education, exam preparation, `}</strong>{`and`} <strong className='font-bold'>{`concept understanding `}</strong>{`more efficient, fun, and measurable.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`The content available on Shikso — including text, videos, quizzes, and interactive lessons — is for`}<strong className='font-bold'>{` educational and informational purposes  `}</strong>{`only. It is not intended to replace official classroom teaching or certified academic programs.`} </p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Acceptance of Terms`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`By using Shikso, you acknowledge that :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-3  ">
                    <li>{`You have read and understood these Terms fully.`}</li>
                    <li>{`You are legally competent to agree to them.`} </li>
                    <li>{`If you are under 18 years old, you are using the Platform under the supervision of a parent, guardian, or teacher.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`If you are using Shikso on behalf of an institution (like a school or tuition center), you represent that you are authorized to bind that organization to these Terms.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Eligibility to Use`}</h2>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7    ">
                    <li>{`Shikso’s services are intended for students, parents, teachers, and institutions seeking `}<strong className='font-bold'>{`digital learning resources.`}</strong></li>
                    <li>{`Users must ensure that their use of the platform complies with all applicable laws.`} </li>
                    <li>{`Shikso reserves the right to deny access or terminate accounts if eligibility requirements are not met or if misuse is detected.`}</li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Account Creation & Responsibilities`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`To access personalized dashboards, mock tests, SmartSets, and progress analytics, you need to`}<strong className='font-bold'>{`  create a Shikso account.`}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`  During registration, you must:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3     ">
                    <li>{`Provide accurate, complete, and updated information.`}</li>
                    <li>{`Keep your login credentials private.`} </li>
                    <li>{`Notify us immediately if you suspect unauthorized activity.`} </li>
                </ul>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`You are fully responsible for all actions under your account. If we find suspicious, fraudulent, or abusive activity, we may suspend or permanently deactivate your account.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Use of the Platform`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`When using Shikso, you agree to :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3 ">
                    <li>{`Use it only for lawful, educational, and non-commercial purposes.`}</li>
                    <li>{`Respect the intellectual property of Shikso and other users.`} </li>
                    <li>{`Avoid sharing, distributing, or copying our content without permission.`} </li>
                    <li>{`Not attempt to hack, disrupt, or interfere with our systems, servers, or software.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Any violation of these rules can result in account termination and possible legal action.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Subscription, Payments & Refunds`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Some of Shikso’s features — such as `}<strong className='font-bold'>{` Premium SmartSets, Mock Tests,`}</strong>{` and`}<strong className='font-bold'>{` AI Learning Reports`}</strong>{` — are paid services.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`Payment Terms :`}</strong></p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`All fees are displayed transparently at checkout.`}</li>
                    <li>{`Payments are securely processed through verified payment gateways such as Razorpay or Stripe.`} </li>
                    <li>{`You agree to provide valid billing information and authorize payment for selected plans.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`Refund Policy :`}</strong></p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Fees once paid are`}<strong className='font-bold'>{`non-refundable `}</strong>{`, except in cases of duplicate charges or verified technical errors caused by Shikso.`}</li>
                    <li>{`Refunds, if approved, are credited to the original payment source within 7–14 working days.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`Subscription Policy :`}</strong></p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7">
                    <li>{`Subscriptions renew automatically unless canceled before the renewal date.`}</li>
                    <li>{`Any damages resulting from misuse or misinterpretation of content`} </li>
                </ul>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Intellectual Property Rights`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`All materials, including questions, videos, animations, study notes, designs, logos, and software, are the `}<strong className='font-bold'>{`  intellectual property of Shikso.`}</strong>{``}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` You are granted a `}<strong className='font-bold'>{`  limited, non-transferable, non-exclusive license `}</strong>{` to access and use the platform for your personal learning.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-3  ">{`You`}<strong className='font-bold'>{` must not : `}</strong></p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Copy, distribute, reproduce, or sell Shikso’s content.`}</li>
                    <li>{`Reverse-engineer or manipulate our software or database.`} </li>
                    <li>{`Use our name, logo, or design elements without written consent.`} </li>
                </ul>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Violation of these rights may lead to legal action under copyright and trademark laws.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. User-Generated Content`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`When you upload, post, or share content (e.g., comments, notes, feedback, or test questions), you :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Grant Shikso a`} <strong className='font-bold'>{` worldwide, non-exclusive, royalty-free license `}</strong>{`to use, display, and improve upon that content for educational or promotional purposes.`}</li>
                    <li>{`Confirm that your content does not infringe upon any third-party rights or contain offensive material.`} </li>
                </ul>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Shikso reserves the right to `}<strong className='font-bold'>{`moderate, edit, or remove `}</strong>{`any user content that violates our guidelines or legal standards.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Accuracy of Information`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Shikso makes every effort to provide accurate and up-to-date educational content. However :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3    ">
                    <li>{`We do not guarantee that all content is free from errors or omissions.`}</li>
                    <li>{`We are not responsible for academic results or exam outcomes based on our materials.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  ">{`Learning success depends on individual effort, preparation, and understanding.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` Always verify official academic details (such as syllabus or exam pattern) from your school or official authority.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Limitation of Liability`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`While we aim to deliver a smooth and reliable experience, Shikso is `}<strong className='font-bold'>{` not liable `}</strong>{` for :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Service interruptions, technical failures, or data loss.`}</li>
                    <li>{`Unauthorized access, hacking attempts, or data breaches beyond our reasonable control.`} </li>
                    <li>{`Losses or damages resulting from misuse, misunderstanding, or reliance on content provided on the platform.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`All use of Shikso is `}<strong className='font-bold'>{` at your own risk.`}</strong></p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Disclaimer of Warranties`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Shikso is provided on an`}<strong className='font-bold'>{`  “as is” and “as available” `}</strong>{` basis.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-3   ">{` We make no express or implied warranties regarding :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Continuous availability or error-free service.`}</li>
                    <li>{`Accuracy, completeness, or reliability of the content.`} </li>
                    <li>{`Compatibility of the platform with your devices.`} </li>
                    <li>{`Guaranteed academic performance or outcomes.`} </li>
                </ul>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`You acknowledge that using Shikso means accepting these inherent limitations.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`13. Data Privacy & Security`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Your privacy is extremely important to us.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-1   ">{` All personal data collected by Shikso is handled in accordance with our `}<strong className='font-bold'>{`Privacy Policy. `}</strong></p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-3   ">{`We ensure:`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Secure data storage using encryption and verified systems.`}</li>
                    <li>{`Limited access to personal information only for authorized personnel.`} </li>
                    <li>{`No selling or renting of personal data to third parties.`} </li>
                </ul>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`However, no digital platform can be 100% secure. Users are encouraged to maintain safe browsing habits and report any suspicious activity.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`14. Links to Third Parties`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium   ">{`Shikso may display or link to third-party websites, educational tools, or payment gateways.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1 sm:mb-2  ">{` These external sites are not under our control, and we are `}<strong className='font-bold'>{` not responsible `}</strong>{`for their content, policies, or security.`} </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`We advise users to review the`}<strong className='font-bold'>{` terms and privacy policies  `}</strong>{`of third-party platforms before interacting with them.`} </p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`15. Termination of Access`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Shikso reserves the right to :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Suspend or terminate user access for violations of these Terms or applicable law.`}</li>
                    <li>{`Remove accounts involved in fraudulent or harmful activities.`} </li>
                    <li>{`Refuse service or restrict features to maintain platform integrity.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Once terminated, you lose access to all services, data, and content associated with your account. `}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`16. Indemnification`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`You agree to indemnify and hold harmless Shikso, its founders, employees, and partners from any`}<strong className='font-bold'>{`claims, damages, or losses `}</strong>{`arising from :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Your use or misuse of the platform.`}</li>
                    <li>{`Violation of these Terms.`} </li>
                    <li>{`Infringement of any intellectual property or third-party rights.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`This clause protects Shikso against legal or financial damages caused by user misconduct. `}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`17. Modifications to Services`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`To keep improving, Shikso may :`}</p>
                <ul className="responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-3">
                    <li>{`Update, modify, or discontinue features or services at any time.`}</li>
                    <li>{`Change pricing, course structures, or functionalities as part of platform upgrades.`} </li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`We will make reasonable efforts to notify users of major changes, but we are not obligated to maintain legacy versions or outdated content.`}</p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`18. Updates to Terms`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium ">{`These Terms may be updated periodically to reflect new policies, services, or legal requirements.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium ">{` The revised Terms will be effective immediately once posted on this page with an updated “Effective Date.”`} </p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` Continued use of Shikso after updates signifies acceptance of the new Terms.`} </p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`19. Governing Law & Jurisdiction`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium   ">{`These Terms and all related matters shall be governed by the`}<strong className='font-bold'>{` laws of India. `}</strong></p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` All disputes shall fall under the exclusive jurisdiction of the`}<strong className='font-bold'>{`  courts of Bhopal, Madhya Pradesh.  `}</strong> </p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`20. Entire Agreement`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium   ">{`These Terms, together with our`}<strong className='font-bold'>{` Privacy Policy, Disclaimer`}</strong>{` ,and any other linked policies, form the `}<strong className='font-bold'>{` entire agreement `}</strong>{`between you and Shikso.`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` If any clause is found invalid, the remaining provisions will continue to apply in full force.`} </p>
                <h2 className="responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`21. Communication & Contact`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium mb-2  ">{`For questions, feedback, or clarification regarding these Terms, please contact us at :`}</p>
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
                    <p className="dm_sans responsive-text text-blue-500 font-medium  cursor-pointer items-center flex gap-1.5 mb-12">
                        <SiWebmoney />
                        <strong className='font-bold text-[#1A2E33]'>{`Website : `}</strong>   {`https://www.shikso.com`}  </p>
                </Link>
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