"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaTumblr } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose, IoSchoolSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";
import SideBarCategory from "@/common-component/SideBarCategory/SideBarCategory";
import CommentBox from "../commentBox/CommentBox";
import CommonFaq1 from "@/common-component/CommonFaq1/CommonFaq1";

export const sideBarCategory = [
  { label: "Navodaya", icon: <IoSchoolSharp /> },
  { label: "Sainik", icon: <IoSchoolSharp /> },
  { label: "Cbsc", icon: <IoSchoolSharp /> },
  { label: "Other", icon: <IoSchoolSharp />, children: [{ label: "Old papers", href: "/" }, { label: "Exam Dates", href: "/" }] },
];

const BlogDescription = ({ blog }) => {
  const [toc, setToc] = useState([]);
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopTocOpen, setDesktopTocOpen] = useState(true); // Changed to true by default
  const contentRef = useRef(null);

  // Parse TOC from blog description
  useEffect(() => {
    if (!blog?.description || typeof window === "undefined") return;

    const doc = new DOMParser().parseFromString(blog.description, "text/html");
    const tocItems = Array.from(doc.querySelectorAll("h2, h3")).map((h) => {
      const text = h.textContent || "";
      const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
      return { id, text, level: h.tagName.toLowerCase() };
    });
    setToc(tocItems);
  }, [blog?.description]);

  // Add IDs to headings after content renders
  useEffect(() => {
    if (!contentRef.current || toc.length === 0) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      headings.forEach((h) => {
        const text = h.textContent || "";
        const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "");
        h.id = id;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [toc, blog?.description]);

  // Handle TOC click - smooth scroll
  const handleTocClick = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Get the element's position and add offset for any fixed headers
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Update URL without page reload
      window.history.pushState(null, "", `#${id}`);
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setSidebarOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SocialLinks = () => (
    <div className="flex gap-2 sm:gap-3 justify-items-end">
      <Link href="https://www.facebook.com/" target="_blank" className="hover:text-blue-600"><FaFacebookF className="text-base sm:text-lg " /></Link>
      <Link href="https://x.com/" target="_blank" className="hover:text-blue-400"><FaTwitter className="text-base sm:text-lg " /></Link>
      <Link href="https://linkedin.com/" target="_blank" className="hover:text-blue-700"><FaLinkedinIn className="text-base sm:text-lg " /></Link>
      <Link href="https://pinterest.com/" target="_blank" className="hover:text-red-600"><FaPinterestP className="text-base sm:text-lg " /></Link>
      <Link href="https://tumblr.com/" target="_blank" className="hover:text-blue-500"><FaTumblr className="text-base sm:text-lg " /></Link>
      <Link href="https://instagram.com/" target="_blank" className="hover:text-pink-600"><RiInstagramFill className="text-lg sm:text-xl " /></Link>
    </div>
  );

  const AdvertisementBlock = () => (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg bg-white shadow-sm overflow-hidden">
          <p className="text-xs sm:text-sm font-semibold text-center border-b py-2 bg-gray-50">{`ADVERTISEMENT`}</p>
          <div className="p-3 flex justify-center">
            <Image src="/Shiksologo.png" width={300} height={250} alt={`Advertisement ${i}`} className="w-full h-auto max-w-[300px]" />
          </div>
        </div>
      ))}
    </>
  );

  // Fixed TocList component with proper click handler
  const TocList = ({ onItemClick }) => (
    <div className="max-h-[300px] lg:max-h-[450px] overflow-y-auto px-3 pb-3">
      {toc.length === 0 ? (
        <p className="text-sm text-gray-500 py-2">{`No headings found`}</p>
      ) : (
        toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              handleTocClick(e, item.id);
              if (onItemClick) onItemClick();
            }}
            className={`block py-1.5 px-2 rounded hover:bg-blue-50 text-sm transition-colors cursor-pointer ${item.level === "h3" ? "pl-6 text-gray-600" : "font-medium text-gray-800"
              }`}
          >
            {item.text}
          </a>
        ))
      )}
    </div>
  );

  return (
    <div className="custom-container my-3 sm:my-5 px-2 sm:px-4">
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="lg:hidden flex flex-wrap items-center justify-between gap-3 py-3 border-b mb-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <HiMenuAlt2 className="text-xl" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-sm font-semibold text-blue-700">
            {` Table of Contents`}
            <span className="w-5 h-5 flex items-center justify-center bg-blue-200 rounded-full text-xs">
              {open ? "−" : "+"}
            </span>
          </button>
        </div>
        <SocialLinks />
      </div>

      {/* Mobile TOC */}
      {open && (
        <nav className="lg:hidden border rounded-lg bg-gray-50 shadow-sm mb-4" aria-label="Table of contents">
          <TocList onItemClick={() => setOpen(false)} />
        </nav>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden overflow-y-auto`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4 border-b pb-3">
            <h3 className="font-semibold text-lg">Menu</h3>
            <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-gray-100 rounded">
              <IoClose className="text-2xl" />
            </button>
          </div>
          <SideBarCategory menuItems={sideBarCategory} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-4 lg:gap-8 py-2">
        {/* Left Sidebar */}
        <aside className="hidden lg:block" aria-label="Sidebar">
          <div className="sticky top-10 space-y-4">
            <div className="flex gap-2 items-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-sm mr-1">{`Share : `}</p>
              <SocialLinks />
            </div>
            {/* Desktop TOC */}
            <nav className="border rounded-lg bg-gray-50 shadow-sm" aria-label="Table of contents">
              <button
                onClick={() => setDesktopTocOpen(!desktopTocOpen)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-t-lg"
              >
                <h3 className="font-semibold text-sm">{`Table of Contents`}</h3>
                {desktopTocOpen ? <IoChevronUp /> : <IoChevronDown />}
              </button>
              {desktopTocOpen && <TocList />}
            </nav>
            <div className="bg-gray-100 p-3 rounded-lg">
              <SideBarCategory menuItems={sideBarCategory} />
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="min-w-0 overflow-hidden">
          {blog?.meta?.description && (
            <p className="mb-4 p-4 bg-blue-50 rounded-lg dm_sans responsive-text text-gray-700">
              {blog.meta.description}
            </p>
          )}
          {blog?.featuredImage?.url && (
            <figure className="mb-4">
              <Image
                src={blog.featuredImage.url}
                alt={blog?.title || "Featured image"}
                width={900}
                height={450}
                priority
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
            </figure>
          )}
          <article className="py-2">
            {/* IMPORTANT: Added ref={contentRef} here */}
            <div
              ref={contentRef}
              className="discriptionContent"
              dangerouslySetInnerHTML={{ __html: blog?.description || "" }}
            />
          </article>
          <aside className="lg:hidden mt-6 space-y-4">
            <AdvertisementBlock />
          </aside>
          {blog?.faq?.length > 0 && blog?.faq?.[0]?.question?.length > 0 && (
            <section className="mt-6" aria-label="FAQ">
              <CommonFaq1 faqData={blog.faq} />
            </section>
          )}
          <section className="mt-6" aria-label="Comments">
            <CommentBox />
          </section>
        </main>
        {/* Right Sidebar */}
        <aside className="hidden lg:block" aria-label="Advertisements">
          <div className="sticky top-10 space-y-4">
            <AdvertisementBlock />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDescription;