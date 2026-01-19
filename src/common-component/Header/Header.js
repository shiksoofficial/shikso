"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import { getToken } from "@/lib/auth";
import LoginModal from "@/common-component/LoginModal/LoginModal";
import SignupModal from "@/common-component/SignupModal/SignupModal";

const Header = () => {
  const FALLBACK_IMAGE =
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
  const [imgSrc, setImgSrc] = useState(
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"
  );

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // GOOGLE TRANSLATE INTEGRATION (Desktop + Mobile)
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (!window.google || !window.google.translate) return;

      // Desktop language selector
      const desktopEl = document.getElementById("google_translate_element");
      if (desktopEl && !desktopEl.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,de,fr,it,hi,bn,te,mr,ta,gu,kn,ml,pa,ur,ja,zh-CN,zh-TW",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }

      // Mobile language selector
      const mobileEl = document.getElementById("google_translate_element_mobile");
      if (mobileEl && !mobileEl.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,de,fr,it,hi,bn,te,mr,ta,gu,kn,ml,pa,ur,ja,zh-CN,zh-TW",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element_mobile"
        );
      }
    };

    // Global callback for Google script
    window.googleTranslateElementInit = initGoogleTranslate;

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already loaded (e.g., on route change)
      initGoogleTranslate();
    }
  }, []);
  // ---------------------------------------------------------

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
    { title: "Blog", href: "/blogs" },
    { title: "News", href: "/educational-news" },
  ];

  const menuItems1 = [
    {
      title: "Navodaya",
      href: "/navodaya-smartset",
      subtitles: [
        {
          title: "Syllabus",
          href: "/navodaya-smartset/updates-and-information",
        },
        {
          title: "Old Paper",
          href: "/navodaya-smartset/previous-year-papers",
        },
        { title: "Mock Tests", href: "/navodaya-smartset/mock-test" },
        {
          title: "Unlimited Practice",
          href: "/navodaya-smartset/unlimited-practice",
        },
      ],
    },
    {
      title: "Sainik School",
      href: "/sainik-school-smartset",
      subtitles: [
        {
          title: "Syllabus",
          href: "/sainik-school-smartset/updates-and-information",
        },
        {
          title: "Old Paper",
          href: "/sainik-school-smartset/previous-year-papers",
        },
        { title: "Mock Tests", href: "/sainik-school-smartset/mock-test" },
        {
          title: "Unlimited Practice",
          href: "/sainik-school-smartset/unlimited-practice",
        },
      ],
    },
  ];

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
      <style jsx global>{`
        /* Google branding / logo completely hide */
        .goog-logo-link,
        .goog-te-gadget-icon,
        .goog-te-gadget img,
        .goog-te-menu2 img {
          display: none !important;
        }

        /* Upar ka banner/frame hide */
        body {
          top: 0px !important;
        }
        .skiptranslate > iframe,
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        /* Tooltip/popup hide */
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* Simple wrapper */
        .language-dropdown-wrapper {
          display: inline-block;
        }

        /* LIST KO ONE LINE ME (Horizontal scrollable) */
        .goog-te-menu2 {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          overflow-x: auto !important;
          max-width: 90vw !important;
          max-height: 50px !important;
          border-radius: 12px !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15) !important;
          padding: 8px !important;
          background: #fff !important;
        }
        .goog-te-menu2-item {
          flex: 0 0 auto !important;
          white-space: nowrap !important;
          min-width: auto !important;
        }
        .goog-te-menu2-item div {
          padding: 8px 12px !important;
          font-size: 13px !important;
        }
        .goog-te-menu2-item:hover div {
          background: #f3f4f6 !important;
        }
      `}</style>

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
          <div className="flex justify-between items-center py-2 lg:py-1">
            {/* LEFT MENU (Desktop) */}
            <ul className="dm_sans hidden md:flex md:gap-16 lg:gap-35 text-black font-medium responsive-text md:pr-3 lg:pr-10">
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
                    className={`relative ${
                      isActive(item)
                        ? "text-black font-extrabold before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-4 before:bg-[#FFF46C] before:rounded-b-full flex flex-nowrap"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.subtitles && dropdownOpen === item.title && (
                    <div
                      className="absolute left-0 top-full pt-2 w-[200px] bg-white shadow-lg rounded-xl p-3 z-[200] border-1 border-gray-500"
                      onMouseEnter={() => setDropdownOpen(item.title)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <ul className="flex flex-col gap-3">
                        {item.subtitles.map((sub, index) => (
                          <li key={index}>
                            <Link
                              href={sub.href}
                              className={`relative pl-5 block ${
                                isSubtitleActive(sub.href)
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

            {/* LOGO */}
            <Link href="/">
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

            {/* RIGHT MENU (Desktop) */}
            <ul className="dm_sans responsive-text hidden md:flex justify-items-end-safe md:gap-3 lg:gap-8 text-black font-medium items-center">
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
                    className={`relative ${
                      isActive(item)
                        ? "text-black font-extrabold before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-4 before:bg-[#FFF46C] before:rounded-b-full"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/* TRANSLATE DROPDOWN (Desktop) */}
              <li className="relative">
                <div className="language-dropdown-wrapper">
                  <div id="google_translate_element"></div>
                </div>
              </li>
            </ul>

            {/* MOBILE TOGGLE */}
            <div className="flex items-center gap-5">
              <button
                aria-label="menu-btn"
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center"
              >
                <MdMenu size={28} color="#000" />
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-[100] p-6 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <p className="responsiveheading2 dm_sans font-semibold"></p>
            <button aria-label="close-btn" onClick={() => setIsOpen(false)}>
              <MdClose size={28} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="dm_sans flex flex-col gap-3 text-lg text-gray-800">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  aria-label="menus"
                  href={item.href}
                  className={`relative pl-5 block ${
                    pathname === item.href
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
                  className={`relative pl-5 block ${
                    isActive(item)
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

          {/* Mobile Language Selector */}
          {/* <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2 font-medium">Language</p>
            <div className="language-dropdown-wrapper">
              <div id="google_translate_element_mobile"></div>
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;