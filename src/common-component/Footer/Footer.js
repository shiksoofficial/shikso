"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname();

  const footerData = {
    brand: {
      name: "About Shikso",
      description:
        "Shikso is a next-generation smart learning platform built to empower students, parents, and schools through AI-powered, gamified, and adaptive education systems. We make learning smarter, measurable, and accessible — for everyone.",
      // logo: "/footerlogo.png",
    },
    quickLinks1: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/about-us" },
      { label: "Contact us", url: "/contact-us" },
      { label: "Blogs", url: "/blogs" },
      { label: "News", url: "/educational-news" },
      // { label: "Gallery", url: "/gallery" },
    ],

    contactInfo: {
      phone: "+91 7974186754",
      email: "support@shikso.com",
      address: "FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016",
    },
    socialMedia: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/zentrailofficial/",
        icon: "/socialmedia/instagram.svg",
        alt: "Instagram",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61578691529317",
        icon: "/socialmedia/facebook.svg",
        alt: "Facebook",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/zentrail",
        icon: "/socialmedia/linkedln.svg",
        alt: "LinkedIn",
      },
      {
        name: "X (Twitter)",
        url: "https://x.com/Zentrail_India",
        icon: "/socialmedia/X.svg",
        alt: "X (Twitter)",
      },
    ],
    bottomLinks: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Disclaimer", url: "/disclaimer-policy" },
      { label: "Cookies", url: "/cookies-policy" },
    ],
    copyright: " Shikso.com",
  };
  return (
    <footer className="bg-[#1A2E33] ">
      <div className="custom-container px-4 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-12 border-b border-gray-500 pb-8 gap-3.5  md:gap-4 lg:gap-8">
          <div className="col-span-12 sm:col-span-12  lg:col-span-5  lg:mr:28 xl:mr-32">
            <div className="text-lg md:text-xl font-medium  text-red-500">
              <Link href="/">{footerData.brand.name}</Link>
            </div>
            <p className="mt-5 text-[16px] footer_commanText  text-white">
              {footerData.brand.description}
            </p>
          </div>
          <div className="col-span-5 sm:col-span-6  lg:col-span-3">
            <div className="mb-1 sm:mb-5 text-[20px] dm_sans text-red-500">
              Quick Links
            </div>
            <div className="flex flex-col space-y-2">
              {footerData.quickLinks1.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`text-sm md:text-base  text-white hover:text-rose-600 transition-colors ${pathname === link.url ? "text-red-500 underline" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-7 sm:col-span-6  lg:col-span-3  text-white">
            <div className=" mb-1  sm:mb-5 text-[20px] dm_sans  text-red-500">{`Contact Info`}</div>
            <div className="flex items-center gap-3.5 text-sm md:text-base">

              <div className="relative">
                <Link
                  href={`https://wa.me/${footerData.contactInfo.phone.replace(
                    /\s/g,
                    ""
                  )} `}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dm_sans hover:underline cursor-pointer"
                >
                  <IoLogoWhatsapp size={28} />
                </Link>
              </div>
              <Link
                href={`https://wa.me/${footerData.contactInfo.phone.replace(
                  /\s/g,
                  ""
                )} `}
                target="_blank"
                rel="noopener noreferrer"
                className="dm_sans hover:underline cursor-pointer"
              >
                {footerData.contactInfo.phone}
              </Link>
            </div>
            <div className="flex items-center gap-3.5 text-sm md:text-base mt-3">
              <div className="relative">
                <Link
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="dm_sans hover:underline cursor-pointer text-sm md:text-sm lg:text-base"
                >
                  <RiTelegram2Fill size={28} />
                </Link>
              </div>
              <Link
                href={`mailto:${footerData.contactInfo.email}`}
                className="dm_sans hover:underline cursor-pointer text-sm md:text-sm lg:text-base"
              >
                {footerData.contactInfo.email}
              </Link>
            </div>
            <div className="flex items-center gap-3.5 text-sm md:text-base mt-3">
              <div className="relative">
                  <Link
              href={`https://www.google.com/maps?q=${encodeURIComponent(footerData.contactInfo.address)}`}
                className="dm_sans hover:underline cursor-pointer text-sm md:text-sm lg:text-base"
                 target="_blank"
                  rel="noopener noreferrer"
                  aria-label="address link"
              >
                <FaLocationDot size={28} />
                  </Link>
              </div>
            
               <Link
              href={`https://www.google.com/maps?q=${encodeURIComponent(footerData.contactInfo.address)}`}
                className="dm_sans hover:underline cursor-pointer text-sm md:text-sm lg:text-base"
                 target="_blank"
                  rel="noopener noreferrer"
                  aria-label="address link"
              >
                {footerData.contactInfo.address}
              </Link>
            </div>
            {/* <div className="flex gap-1 sm:gap-2 mt-3.5 sm:mt-5 md:mt-6">
              {footerData.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 cursor-pointer transition-opacity relative w-[28px] h-[28px] sm:w-[33px] sm:h-[33px]"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    fill
                    className="object-contain"
                  />
                </Link>
              ))}
            </div> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row   justify-between items-center text-sm md:text-base mt-4 lg:mt-7 space-y-2 md:space-y-2 lg:space-y-0">
          <div className=" text-[16px] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[rgba(222,242,252,1)]">
            © {new Date().getFullYear()}
            <Link href="/" className="hover:underline">
              {footerData.copyright}
            </Link>
            <span className="hidden md:inline text-[#37863F]">|</span>
            <div className="flex items-center gap-2">
              <span>
                {`Developed by`}{" "}
                <Link
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-none hover:underline"
                >
                  Vyomedge
                </Link>
              </span>
              <Link
                href="https://vyomedge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/vyomedgelogo.webp"}
                  alt="Vyomedge Website"
                  width={25}
                  height={25}
                  className="rounded-full "
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap  justify-center sm:justify-end text-[rgba(232,248,225,1)]">
            {footerData.bottomLinks.map((link, i) => (
              <span key={i} className="flex items-center">
                <Link
                  href={link.url}
                  className={`hover:underline capitalize ${pathname === link.url ? "underline" : ""
                    }`}
                >
                  {link.label}
                </Link>
                {i < footerData.bottomLinks.length - 1 && (
                  <span className="mx-1 sm:mx-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
