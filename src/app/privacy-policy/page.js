import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import Link from 'next/link';
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import { getCanonicalUrl } from '@/lib/seo';
import { FaMapPin } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";

export const metadata = {
    title: " Shikso Privacy Policy | Data Protection Information Security",
    description: "Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
    keywords: ["Shikso privacy policy", " data protection", "user information security", "education data privacy", " online learning safety", "student data policy"],
    alternates: { canonical: "https://www.shikso.com/privacy-policy" },
    openGraph: {
        title: "Shikso Privacy Policy | Data Protection Information Security",
        description: "Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
        url: "https://www.shikso.com/",
        images: [{ url: "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Shikso Privacy Policy | Data Protection Information Security",
        description: "Read Shikso’s Privacy Policy to learn how we collect, use, and protect your personal data while delivering secure, AI-powered smart learning experiences.",
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
            <CommonBanner1
                title={"Privacy Policy - Shikso"}
                breadcom={[{ title: "Privacy Policy" }]} />

            <div className="custom-container bg-white">
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mt-10 mb-2">{`1. Introduction`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`Welcome to `}<strong className='font-bold'>{` Shikso`}</strong>{` , an AI-powered smart learning platform dedicated to making education engaging, affordable, and accessible.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`This Privacy Policy explains how we collect, use, disclose, retain and protect your personal information when you :`}</p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-1 ">
                    <li>{`visit our website,`}</li>
                    <li>{`use our mobile application, or`}</li>
                    <li>{`otherwise interact with our services (“Platform”).`}</li>
                </ul>

                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`By accessing or using our Platform, you accept the practices described in this policy. If you do not agree with this policy, please do not use or access the Platform.`}</p>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`We are committed to protecting your privacy and securing your personal data in compliance with applicable laws and best practices (for example as seen in comparable policies such as those of established edtech providers).`}</p>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`2. Information We Collect`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`We collect information from and about you in a range of ways. The types of data we collect include :`}</p>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`2.1 Personal Information (provided by you)`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Your name, email address, phone number.`}</li>
                    <li>{`Age and grade level (especially for student accounts).`}</li>
                    <li>{`Location details (city/state/country) when voluntarily provided.`}</li>
                    <li>{`Information you provide in registration forms, contact forms, surveys or correspondence.`}</li>
                    <li>{`Information entered by you when using the Platform (for example in chat, forums, tests or uploads).`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`2.2 Account & Profile Information`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Your login credentials (username/email and password).`}</li>
                    <li>{`Profile settings, preferences and customisation choices.`}</li>
                    <li>{`Learning progress data (courses enrolled, tests attempted, scores, completion status).`}</li>
                    <li>{`Activity logs such as time spent, modules accessed, interactive features used.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`2.3 Payment & Subscription Data`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Billing information and transaction details provided when you subscribe to paid services (via trusted third-party payment gateways).`}</li>
                    <li>{`Payment gateway references, invoices, refund records where applicable.`}</li>
                    <li>{`Note: We do `}<strong className='font-bold'>{` not`}</strong> {` store full payment card details – such sensitive payment data is processed by secure third-party services on our behalf.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`2.4 Usage Data & Technical Information`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Device identifiers and technical details (device model, operating system, browser type).`}</li>
                    <li>{`IP address, geographic location derived from IP, session timestamps.`}</li>
                    <li>{`Pages you visit, clicks, interactions with content, how you navigate through our Platform.`}</li>
                    <li>{`Error logs, crash reports, performance data for improving stability and user experience.`}</li>
                </ul>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium  mb-1   "><strong className='font-bold'>{`2.5 Cookies and Tracking Technologies`}</strong></p>
                <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
                    <li>{`Use of cookies, web beacons, pixels and similar technologies to :`}
                        <ul className="dm_san responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-1 ">
                            <li>{`Remember your preferences`}</li>
                            <li>{`Personalise your experience`}</li>
                            <li>{`Measure Platform performance and usage`}</li>
                            <li>{`Deliver relevant communications.`}</li>
                        </ul>
                    </li>
                    <li>{`You may control cookies via your browser or device settings, but disabling some may affect features and functionality.`}</li>
                </ul>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. How We Use Your Information`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-2  ">{`We use your information for a variety of business and operational purposes. Key uses include :`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`To provide, operate and maintain our Platform (including registration, authentication, course delivery).`}</li>
                    <li>{`To process subscriptions and payments, manage renewals, refunds, cancellations.`}</li>
                    <li>{`To tailor learning experiences and recommendations based on your profile and progress (personalised content).`}</li>
                    <li>{`To communicate with you: account updates, course announcements, service notifications, with your consent for marketing/promotions.`}</li>
                    <li>{`To monitor, analyse and improve Platform performance, content quality, user interface and engagement.`}</li>
                    <li>{`To detect, prevent or investigate fraud, misuse or security incidents.`}</li>
                    <li>{`To comply with legal obligations, respond to lawful requests from authorities, enforce our terms and protect our rights`}</li>
                    <li>{`To perform internal research and analytics (e.g., aggregated use-trends) so we can continuously enhance educational outcomes.`}</li>
                </ul>
                <h2 className="dm_sans dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Data Security & Retention`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`We implement industry-standard security measures, including encryption, access-controls, regular audits and secure development practices, to safeguard your personal data.`}</li>
                    <li>{`All transactions are processed via secure SSL (or equivalent) connections.`}</li>
                    <li>{`We restrict access to your data to only those employees, contractors or service providers who need it for legitimate business purposes.`}</li>
                    <li>{`Though we strive for sound security, no method of transmission over the internet or electronic storage is completely secure; we cannot guarantee absolute protection.`}</li>
                    <li>{`We retain your personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. When no longer needed, we securely delete or anonymise your data.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Sharing & Disclosure of Information `}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`We respect your privacy and do not sell or rent your personal data to third parties. We may share or disclose information only under the conditions described below :`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`With our trusted service providers (hosting, payment gateways, analytics) who perform services on our behalf under confidentiality obligations.`}</li>
                    <li>{`With law enforcement or regulatory authorities when required by applicable law, court order or to protect our rights, your safety or the safety of others.`}</li>
                    <li>{`With institutional or educational partners (such as schools or coaching centres) only with your explicit consent, and `}<strong className='font-bold'>{` only `}</strong>{` to facilitate delivery of educational services.`}</li>
                    <li>{`In the event of a business reorganisation (merger, acquisition, sale of assets), information may be transferred in whole or part under the condition that the recipient applies this policy or equivalent protections.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Cookies Policy & Similar Tracking `}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`We use first-party and third-party cookies and tracking technologies to enhance your experience, remember your preferences and analyse Platform use.`}</li>
                    <li>{`Examples include session cookies, persistent cookies, analytic cookies and advertising/retargeting cookies.`}</li>
                    <li>{`You may opt to delete or disable cookies through your browser or device settings. Please note: disabling cookies may reduce functionality – certain features may not be available.`}</li>
                    <li>{`Third-party cookies (from analytics, advertising networks) may track users across websites; you may review their privacy policies separately.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Third-Party Services & External Integrations`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`Our Platform may integrate with or include links to external services, APIs or embedded content (for example, analytics tools, video-hosting platforms, social sharing, chat functions).`}</li>
                    <li>{`These third-party services may collect information about you independently; we are not responsible for their data practices.`}</li>
                    <li>{`We encourage you to review the privacy policies of any third-party services you access via our Platform.`}</li>
                    <li>{`In some cases, your data may be transferred to these third parties under contractual arrangements for specified purposes (e.g., Google Analytics, Mixpanel) — always under regulated and secure processes.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Children’s Privacy `}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`We recognise the importance of safeguarding children’s privacy, especially in the educational context.`}</li>
                    <li>{`For students under the age of 18 (or as defined under your jurisdiction), we collect limited data only with parental or institutional consent and for the explicit purpose of providing educational services.`}</li>
                    <li>{`We do not knowingly collect unnecessary personal data of minors. If you believe we have inadvertently collected data from a child without lawful consent, please contact us (info@shikso.com) and we will promptly delete the data.`}</li>
                    <li>{`Parents or legal guardians are encouraged to monitor and supervise their child’s interaction with the Platform.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Your Rights & Choices`}</h2>
                <p className="dm_sans  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`Depending on applicable laws and subject to bona-fide verification, you may have the following rights with respect to your personal data :`}</p>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{`Right to access : `}</strong> {` You may request a copy of the personal information we hold about you.`}</li>
                    <li><strong className='font-bold'>{`Right to correct or update : `}</strong>{` You may request that incorrect or incomplete information be corrected.`}</li>
                    <li><strong className='font-bold'>{`Right to data deletion or anonymisation : `}</strong>{` You may request deletion of your data when it is no longer required for its original purpose and no legal obligation prevents us from deleting it.`}</li>
                    <li><strong className='font-bold'>{`Right to data portability : `}</strong>{` You may request your data in a structured, commonly-used format, where technically feasible.`}</li>
                    <li><strong className='font-bold'>{`Right to object or restrict processing : `}</strong>{` You may opt out of certain processing (for example, marketing communications) where permitted by law.`}</li>
                    <li><strong className='font-bold'>{`Right to withdraw consent : `}</strong>{` Where processing is based on your consent, you may withdraw it at any time; this will not affect the lawfulness of processing before withdrawal.`}</li>
                    <li>{`To exercise any of these rights, please contact us at : `} <Link href="mailto:info@shikso.com" className='text-blue-400'>{` info@shikso.com`}</Link> {`. We will respond within the timeframe required by applicable law.`}</li>
                    <li>{`If you object to or restrict a particular use of your data, be aware that certain features of our Platform may become unavailable.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. International Data Transfers`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`Because we provide services globally or via cloud-based infrastructure, your personal data may be transferred, stored or processed in countries outside your own jurisdiction (such as within or outside India).`}</li>
                    <li>{`Where such transfers occur, we will ensure appropriate safeguards are in place (for example standard contractual clauses, equivalent protections) to maintain data security and rights.`}</li>
                    <li>{`By using our Platform, you consent to such transfers and the storage of your data in locations that may have different data protection laws.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Retention & Deletion Policy`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`We retain your personal data only for as long as it is reasonably necessary for the purposes we collected it for (including legal, regulatory, tax, accounting or audit obligations).`}</li>
                    <li>{`Once data is no longer required, we either securely delete it or anonymise it so it can no longer be associated with you.`}</li>
                    <li>{`For educational progress data, we may retain aggregated or anonymised versions to support product improvement, analytics and historical performance tracking, even after individual account closure.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Security Incident Response & Breach Notification`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`In the event of a data breach or security incident affecting your personal information, we will follow applicable incident-response protocols, promptly notify affected individuals and relevant authorities where required by law.`}</li>
                    <li>{`We maintain logs, review our processes and periodically test our systems to reduce the risk of incidents and continuously improve our security posture.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`13. Changes to This Privacy Policy`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`We may update this Privacy Policy from time to time in response to changes in our practices, service enhancements, new functionality or legal/regulatory developments.`}</li>
                    <li>{`When we make changes, we will revise the “Effective Date” at the top of this page. We encourage you to review the Policy periodically.`}</li>
                    <li>{`Your continued use of the Platform after the new version becomes effective will constitute your acceptance of the revised Policy.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`14. Additional Provisions (Miscellaneous)`}</h2>
                <ul className="dm_san responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li><strong className='font-bold'>{`Consent : `}</strong>{`By registering or using our Platform, you consent to the collection, use and disclosure of your information as described in this Policy.`}</li>
                    <li><strong className='font-bold'>{`Accuracy :`}</strong>{` You agree to provide accurate, complete and true information and to keep it updated as necessary.`}</li>
                    <li><strong className='font-bold'>{`Account Security : `}</strong>{` You are responsible for safeguarding your login credentials and any actions taken via your account.`}</li>
                    <li><strong className='font-bold'>{`Governing Law : `}</strong>{` This Policy shall be governed in accordance with the laws of India (or the jurisdiction in which Shikso operates). Any disputes will be subject to the competent courts in that jurisdiction.`}</li>
                    <li><strong className='font-bold'>{`Severability : `}</strong>{` If any provision of this Policy is found invalid or unenforceable, the remaining provisions will continue in full force and effect.`}</li>
                    <li><strong className='font-bold'>{`Entire Agreement :`}</strong>{` This Privacy Policy, together with any other terms and conditions or agreements referenced, constitutes the entire agreement between you and Shikso regarding data-protection matters.`}</li>
                </ul>
                <h2 className="dm_sans responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`15. Contact Us`}</h2>
                <p className="responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`For any privacy-related concerns, please reach out:`}</p>
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

                 <p className="responsive-text text-[#1A2E33] mt-12 mb-12">
                    <strong className="font-bold">{`Published Date : `}</strong> {` October 30, 2025`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "} {`, Shikso`}
                </p>
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