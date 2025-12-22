"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaPinterestP } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { getToken } from "@/lib/auth";
import LoginModal from "@/common-component/LoginModal/LoginModal";
import SignupModal from "@/common-component/SignupModal/SignupModal";

const Header = () => {

  const FALLBACK_IMAGE = "/Shiksologo.png";
  const [imgSrc, setImgSrc] = useState("/Shiksologo.png");

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const pathname = usePathname(); // current path
  const router = useRouter();

  const handleProfileClick = (e) => {
    e.preventDefault();
    const token = getToken();
    if (token) {
      router.push("/profile");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const menuItems = [
    // { title: "Home", href: "/" },
    // { title: "About", href: "/about-us" },
    { title: "Blog", href: "/blogs" },
    { title: "News", href: "/educational-news" },
    // { title: "Contact", href: "/contact-us" },

  ];
  const menuItems1 = [
    {
      title: "Navodaya", href: "/navodaya-smartset",
      subtitles: [
        { title: "Syllabus", href: "/navodaya-smartset/updates-and-information" },
        { title: "Old Paper", href: "/navodaya-smartset/previous-year-papers" },
        { title: "Mock Tests", href: "/navodaya-smartset/mock-test" },
        { title: "Unlimited Practice", href: "/navodaya-smartset/unlimited-practice" },
      ],
    },
    {
      title: "Sainik School", href: "/sainik-school-smartset",
      subtitles: [
        { title: "Syllabus", href: "/sainik-school-smartset/updates-and-information" },
        { title: "Old Paper", href: "/sainik-school-smartset/previous-year-papers" },
        { title: "Mock Tests", href: "/sainik-school-smartset/mock-test" },
        { title: "Unlimited Practice", href: "/sainik-school-smartset/unlimited-practice" },
      ],
    },
  ]
  const isActive = (item) => {
    return (
      pathname === item.href ||
      (item.subtitles && item.subtitles.some((sub) => pathname === sub.href))
    );
  };

  const isSubtitleActive = (subHref) => {
    return pathname === subHref;
  };

  return (
    <>
      <LoginModal
        open={isLoginModalOpen}
        setOpen={setIsLoginModalOpen}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupModal
        open={isSignupModalOpen}
        setOpen={setIsSignupModalOpen}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <header className="absolute w-full z-[1000]">
        <div className="custom-container">
          {/* <div className="flex justify-between py-5 items-center">
            <div className="hidden md:flex gap-5 text-sm">
              <div className="w-[350px] flex gap-5 items-center">
                <div>
                  <MdLocationPin size={30} color="#fdb62f" />
                </div>
                <span className="dm_sans text-white">{` FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016`}</span>
              </div>
              <div className="w-[250px] flex gap-5 items-center">
              <div><FaRegClock size={30} color="#dc3545" /></div> <span className="dm_sans text-white">{`Sunday - Friday 8:00AM - 4:00PM 
              Saturday CLOSED`}</span>
            </div>
            </div>
          </div> */}

          <div className="flex justify-between items-center py-2 lg:py-1">
            <ul className="dm_sans hidden md:flex  md:gap-16 lg:gap-35 text-black font-medium responsive-text md:pr-3 lg:pr-10">
              {menuItems1.map((item, i) => (
                <li
                  key={i}
                  className="relative group"
                  onMouseEnter={() =>
                    item.subtitles && setDropdownOpen(item.title)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    aria-label="menu"
                    href={item.href}
                    className={`relative ${isActive(item)
                      ? "text-black font-extrabold before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-4 before:bg-[#FFF46C] before:rounded-b-full flex flex-nowrap"
                      : ""
                      }`}
                  >
                    {item.title}
                  </Link>
                  {item.subtitles && dropdownOpen === item.title && (
                    <div
                      className="absolute left-0 top-full pt-2 w-[200px] bg-white shadow-lg rounded-xl p-3 z-[200]  border-1 border-gray-500  "
                      onMouseEnter={() => setDropdownOpen(item.title)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <ul className="flex flex-col gap-3 ">
                        {item.subtitles.map((sub, index) => (
                          <li key={index}>
                            <Link
                              href={sub.href}
                              className={`relative pl-5 block ${isSubtitleActive(sub.href)
                                ? "text-black font-extrabold before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-4 before:bg-[#FFF46C] before:rounded-r-full"
                                : "text-gray-700 hover:text-black"
                                }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/">
              {" "}
              <Image
                src={imgSrc}
                alt="Shikso Logo"
                width={200}
                height={25}
                className="flex justify-items-end-safe md:px-4 lg:px-7"
                onError={() => {
                  if (imgSrc !== FALLBACK_IMAGE) {
                    setImgSrc(FALLBACK_IMAGE);
                  }
                }}
              />
            </Link>
            <ul className="dm_sans hidden md:flex justify-items-end-safe md:gap-3 lg:gap-8 text-black font-medium  ">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className="relative group"
                  onMouseEnter={() =>
                    item.subtitles && setDropdownOpen(item.title)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    aria-label="menu"
                    href={item.href}
                    className={`relative ${isActive(item)
                      ? "text-black font-extrabold before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-4 before:bg-[#FFF46C] before:rounded-b-full"
                      : ""
                      }`}
                  >
                    {item.title}
                  </Link>
                  {item.subtitles && dropdownOpen === item.title && (
                    <div
                      className="absolute left-0 top-full pt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-[200]"
                      onMouseEnter={() => setDropdownOpen(item.title)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <ul className="flex flex-col gap-2">
                        {item.subtitles.map((sub, index) => (
                          <li key={index}>
                            <Link
                              href={sub.href}
                              className={`relative pl-5 block ${isSubtitleActive(sub.href)
                                ? "text-black font-extrabold before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-4 before:bg-[#FFF46C] before:rounded-r-full"
                                : "text-gray-700 hover:text-black"
                                }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <button
                aria-label="menu-btn"
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center"
              >
                <MdMenu size={28} color="#000" />
              </button>

              {/* <ul className="flex gap-2 items-center ">
                <li className="text-blue-600">
                  <Link
                    href="https://www.facebook.com/people/Shikso/61582800338789/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="facebook link"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="text-green-500">
                  <Link
                    href="https://x.com/shiksoofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter link"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li className="text-blue-900">
                  <Link
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin link"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="text-red-700">
                  <Link
                    href="https://in.pinterest.com/shiksoofficial/?actingBusinessId=1094515653098162404"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest link"
                  >
                    <FaPinterestP color="error" />
                  </Link>
                </li>
                <li className="text-[#35465C]">
                  <Link
                    href="https://www.tumblr.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tumblr link"
                  >
                    <FaTumblr />
                  </Link>
                </li>
                <li className="text-[#C71585]">
                  <Link
                    href="https://www.instagram.com/shikso_official?igsh=MTU0c2liODFxdTJqeg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram link"
                  >
                    <RiInstagramFill />
                  </Link>
                </li>
                |
                <li className="text-gray-500" >
                  <button
                    onClick={handleProfileClick}
                    className="cursor-pointer"
                    aria-label="Profile link"
                  >
                    <CgProfile size={30} />
                  </button>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-[100] p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-between items-center mb-6">
            <p className="text-2xl font-semibold"></p>
            <button aria-label="close-btn" onClick={() => setIsOpen(false)}>
              <MdClose size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-3 text-lg text-gray-800">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  aria-label="menus"
                  href={item.href}
                  className={`relative pl-5 block ${pathname === item.href
                    ? "text-black font-extrabold before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-4 before:bg-[#FFF46C] before:rounded-r-full"
                    : "text-gray-700 hover:text-black"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 text-lg text-gray-800 mt-3">
            {menuItems1.map((item, i) => (
              <li key={i}>
                <Link
                  aria-label="menus"
                  href={item.href}
                  className={`relative pl-5 block ${isActive(item)
                    ? "text-black font-extrabold before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-4 before:bg-[#FFF46C] before:rounded-r-full"
                    : "text-gray-700 hover:text-black"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>

              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
