"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  const FALLBACK_IMAGE =
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
  const [imgSrc, setImgSrc] = useState(
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
  );

  const [isQuickLinks1Open, setIsQuickLinks1Open] = useState(false);
  const [isQuickLinks2Open, setIsQuickLinks2Open] = useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false);

  const footerData = {
    brand: {
      name: "About Shikso",
      description:
        "Shikso is a next-generation smart learning platform built to empower students, parents, and schools through AI-powered, gamified, and adaptive education systems. We make learning smarter, measurable, and accessible — for everyone.",
    },
    quickLinks: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/about-us" },
      { label: "Contact us", url: "/contact-us" },
      { label: "Blogs", url: "/blogs" },
      { label: "News", url: "/educational-news" },
      { label: "Exams", url: "/exams" },
    ],
    quickLinksSet: [
      { label: "Navodaya", url: "/navodaya-smartset" },
      { label: "Sainik School", url: "/sainik-school-smartset" },
      { label: "RMS", url: "/rms-smartset" },
      { label: "NMMS", url: "/smartset-nmms" },   // ── NMMS added
      { label: "NTSE", url: "/smartset-ntse" },   // ── NTSE added
      { label: "RIMC", url: "/smartset-rimc" },   // ── RIMC added
    ],
    contactInfo: {
      phone: "+91 7974186754",
      email: "support@shikso.com",
      address:
        "FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016",
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
    <footer className="bg-[#15686E]">
      <div className="custom-container px-4 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-12 border-b border-gray-500 pb-8 gap-3.5 md:gap-4 lg:gap-8">
          {/* Quick Links 1 */}
          <div className="col-span-5 sm:col-span-3 lg:col-span-3 lg:mr:28 xl:mr-32">
            <div
              className="mb-1 sm:mb-5 text-[20px] dm_sans text-[#FFF46C] flex items-center justify-between sm:cursor-default cursor-pointer"
              onClick={() => setIsQuickLinks1Open(!isQuickLinks1Open)}
            >
              <p>Quick Links</p>
              <span className="sm:hidden">
                {isQuickLinks1Open ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </span>
            </div>

            <div
              className={`flex-col space-y-2 ${isQuickLinks1Open ? "flex" : "hidden"} sm:flex`}
            >
              {footerData.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`dm_sans responsive-text text-white hover:text-[#FFF46C] transition-colors ${
                    pathname === link.url ? "text-red-500 underline" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links 2 — SmartSets */}
          <div className="col-span-5 sm:col-span-3 lg:col-span-3 lg:mr:28 xl:mr-32">
            <div
              className="mb-1 sm:mb-5 text-[20px] dm_sans text-[#FFF46C] flex items-center justify-between sm:cursor-default cursor-pointer"
              onClick={() => setIsQuickLinks2Open(!isQuickLinks2Open)}
            >
              <p>SmartSets</p>
              <span className="sm:hidden">
                {isQuickLinks2Open ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </span>
            </div>

            <div
              className={`flex-col space-y-2 ${isQuickLinks2Open ? "flex" : "hidden"} sm:flex`}
            >
              {footerData.quickLinksSet.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`dm_sans responsive-text text-white hover:text-[#FFF46C] transition-colors ${
                    pathname === link.url ? "text-red-500 underline" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 text-white">
            <div
              className="mb-1 sm:mb-5 text-[20px] dm_sans text-[#FFF46C] flex items-center gap-6 sm:cursor-default cursor-pointer"
              onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}
            >
              <p>Contact Info</p>
              <span className="sm:hidden">
                {isContactInfoOpen ? (
                  <FaChevronUp size={16} />
                ) : (
                  <FaChevronDown size={16} />
                )}
              </span>
            </div>

            <div
              className={`${isContactInfoOpen ? "block" : "hidden"} sm:block`}
            >
              <div className="flex items-center gap-3.5 dm_sans responsive-text">
                <Link
                  href={`https://wa.me/${footerData.contactInfo.phone.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <IoLogoWhatsapp size={28} />
                </Link>
                <Link
                  href={`https://wa.me/${footerData.contactInfo.phone.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {footerData.contactInfo.phone}
                </Link>
              </div>

              <div className="flex items-center gap-3.5 dm_sans responsive-text mt-3">
                <Link
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="hover:opacity-80"
                >
                  <RiTelegram2Fill size={28} />
                </Link>
                <Link
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="hover:underline dm_sans responsive-text"
                >
                  {footerData.contactInfo.email}
                </Link>
              </div>

              <div className="flex items-center gap-3.5 dm_sans responsive-text mt-3">
                <Link
                  href={`https://www.google.com/maps?q=${encodeURIComponent(footerData.contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="address link"
                  className="hover:opacity-80 flex-shrink-0"
                >
                  <FaLocationDot size={28} />
                </Link>
                <Link
                  href={`https://www.google.com/maps?q=${encodeURIComponent(footerData.contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="address link"
                  className="hover:underline dm_sans responsive-text"
                >
                  {footerData.contactInfo.address}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap justify-center sm:justify-start text-[#FFF46C] pt-4">
          {footerData.bottomLinks.map((link, i) => (
            <span key={i} className="flex items-center">
              <Link
                href={link.url}
                className={`hover:underline capitalize ${pathname === link.url ? "underline" : ""}`}
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

      {/* Copyright bar */}
      <div className="bg-white">
        <div className="custom-container flex flex-col md:flex-col lg:flex-row justify-between items-center dm_sans responsive-text py-6 space-y-2 md:space-y-2 lg:space-y-0">
          <div>
            <Link href="/">
              <Image
                src={imgSrc}
                alt="Shikso Website"
                width={200}
                height={25}
                onError={() => {
                  if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
                }}
              />
            </Link>
          </div>
          <div className="text-[16px] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-black">
            © {new Date().getFullYear()}
            <Link href="/" className="hover:underline">
              {footerData.copyright}
            </Link>
            <span className="hidden md:inline text-[#37863F]">|</span>
            <div className="flex items-center gap-2">
              <span>
                Developed by{" "}
                <Link
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
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
                  src="/vyomedgelogo.webp"
                  alt="Vyomedge Website"
                  width={25}
                  height={25}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;