"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import LoginModal from "@/common-component/LoginModal/LoginModal";
import SignupModal from "@/common-component/SignupModal/SignupModal";

// ── Language list ──────────────────────────────────────────
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "te", label: "Telugu" },
  { code: "mr", label: "Marathi" },
  { code: "ta", label: "Tamil" },
  { code: "gu", label: "Gujarati" },
  { code: "kn", label: "Kannada" },
  { code: "ml", label: "Malayalam" },
  { code: "pa", label: "Punjabi" },
  { code: "ur", label: "Urdu" },
  { code: "de", label: "German" },
  { code: "fr", label: "French" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
];

function setGoogleTranslateLang(langCode) {
  if (langCode === "en") {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    window.location.reload();
    return;
  }
  const value = `/en/${langCode}`;
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`;
  window.location.reload();
}

// ── Custom Language Switcher ───────────────────────────────
function LanguageSwitcher({ mobile = false }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const ref = useRef(null);

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) setCurrent(match[1]);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLabel =
    LANGUAGES.find((l) => l.code === current)?.label ?? "Language";

  return (
    <div
      ref={ref}
      className="notranslate"
      translate="no"
      style={{
        position: "relative",
        display: "inline-block",
        width: mobile ? "100%" : "auto",
      }}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          background: "#f8fafc",
          border: "1.5px solid #e2e8f0",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: 600,
          color: "#334155",
          cursor: "pointer",
          whiteSpace: "nowrap",
          outline: "none",
          width: mobile ? "100%" : "auto",
          justifyContent: "space-between",
          transition: "border-color 0.2s",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>🌐</span>
          <span>{currentLabel}</span>
        </span>
        <span
          style={{
            display: "inline-block",
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "5px solid #94a3b8",
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: mobile ? "static" : "absolute",
            marginTop: "8px",
            right: mobile ? "auto" : 0,
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            padding: "8px",
            zIndex: 9999,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            width: mobile ? "100%" : "260px",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang.code);
                setOpen(false);
                setGoogleTranslateLang(lang.code);
              }}
              style={{
                padding: "9px 12px",
                background: current === lang.code ? "#fff7ed" : "transparent",
                color: current === lang.code ? "#f97316" : "#334155",
                fontWeight: current === lang.code ? 700 : 500,
                fontSize: "13px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              onMouseEnter={(e) => {
                if (current !== lang.code)
                  e.currentTarget.style.background = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                if (current !== lang.code)
                  e.currentTarget.style.background = "transparent";
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────
const Header = () => {
  const FALLBACK_IMAGE =
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png";
  const [imgSrc, setImgSrc] = useState(
    "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
  );
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Load Google Translate script silently (hidden element, drives translation via cookie)
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      const el = document.getElementById("google_translate_element_hidden");
      if (el && !el.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element_hidden",
        );
      }
    };
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

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
        { title: "class 6", href: "/navodaya-smartset/class-6" },
        { title: "class 9", href: "/navodaya-smartset/class-9" },
      ],
    },
    {
      title: "Sainik School",
      href: "/sainik-school-smartset",
      subtitles: [
        { title: "class 6", href: "/sainik-school-smartset/class-6" },
        { title: "class 9", href: "/sainik-school-smartset/class-9" },
      ],
    },
    // ── RMS SmartSet ──────────────────────────────────────────
    {
      title: "RMS",
      href: "/rms-smartset",
      subtitles: [
        { title: "class 6", href: "/rms-smartset/class-6" },
        { title: "class 9", href: "/rms-smartset/class-9" },
      ],
    },
  ];

  const isActive = (item) =>
    pathname === item.href ||
    (item.subtitles && item.subtitles.some((sub) => pathname === sub.href));
  const isSubtitleActive = (subHref) => pathname === subHref;

  return (
    <>
      <style jsx global>{`
        /* Hide all native Google Translate UI */
        #google_translate_element_hidden {
          display: none !important;
        }
        .goog-te-gadget,
        .goog-logo-link {
          display: none !important;
        }
        .goog-te-banner-frame.skiptranslate,
        .skiptranslate > iframe {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        .goog-text-highlight {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <div id="google_translate_element_hidden" />

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

      <header className="absolute w-full z-[1000] bg-white/98 py-3">
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
                  if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
                }}
              />
            </Link>

            {/* RIGHT MENU (Desktop) */}
            <ul className="dm_sans responsive-text hidden md:flex justify-items-end-safe md:gap-3 lg:gap-8 text-black font-medium items-center">
              {menuItems.map((item, i) => (
                <li key={i} className="relative group">
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
              {/* Custom language switcher */}
              <li>
                <LanguageSwitcher />
              </li>
            </ul>

            {/* MOBILE TOGGLE */}
            <div className="flex items-center gap-5 md:hidden">
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
          className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar (Mobile) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-[100] p-6 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <p className="responsiveheading2 dm_sans font-semibold" />
            <button aria-label="close-btn" onClick={() => setIsOpen(false)}>
              <MdClose size={28} />
            </button>
          </div>

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

          {/* Mobile language switcher */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2 font-medium">Language</p>
            <LanguageSwitcher mobile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;