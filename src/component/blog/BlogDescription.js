"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from "react-icons/fa";
import { FaPinterestP, FaTumblr } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose, IoSchoolSharp } from "react-icons/io5";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import SideBarCategory from "@/common-component/SideBarCategory/SideBarCategory";
import CommentBox from "../commentBox/CommentBox";
import CommonFaq1 from "@/common-component/CommonFaq1/CommonFaq1";

/* SIDEBAR CATEGORY */
export const sideBarCategory = [
  { label: "Navodaya", icon: <IoSchoolSharp /> },
  { label: "Sainik", icon: <IoSchoolSharp /> },
  { label: "Cbsc", icon: <IoSchoolSharp /> },
  {
    label: "Other",
    icon: <IoSchoolSharp />,
    children: [
      { label: "Old papers", href: "/" },
      { label: "Exam Dates", href: "/" },
    ],
  },
];

const BlogDescription = ({ blog }) => {

  const [toc, setToc] = useState([]);
  const [html, setHtml] = useState("");
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopTocOpen, setDesktopTocOpen] = useState(false);

  /* CREATE TOC */
  useEffect(() => {
    if (!blog?.description || typeof window === "undefined") return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(blog.description, "text/html");
    const headings = Array.from(doc.querySelectorAll("h2, h3"));

    const tocItems = headings.map((heading) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-+|-+$/g, "");

      heading.id = id;

      return {
        id,
        text,
        level: heading.tagName.toLowerCase(),
      };
    });

    setToc(tocItems);
    setHtml(doc.body.innerHTML);
  }, [blog?.description]);

  /* CLOSE SIDEBAR  */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="custom-container my-5">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)} />
      )}

      {/*  MOBILE HEADER  */}
      <div className="lg:hidden flex-col sm:flex-row items-center justify-between py-3 border-b mb-4 ">
        <div className="flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg bg-gray-100">
            <HiMenuAlt2 className="text-xl" />
          </button>

          <button onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-sm font-semibold text-blue-700">
            {`Table of Contents`}
            <p className="w-5 h-5 flex items-center justify-center bg-blue-200 rounded-full">   {open ? "−" : "+"} </p>
          </button>
        </div>

        <div className="flex gap-2 mt-4 sm:mt-0 justify-end">
          <Link href="https://www.facebook.com/" target="_blank"><FaFacebookF /></Link>
          <Link href="https://x.com/" target="_blank"><FaTwitter /></Link>
          <Link href="https://linkedin.com/" target="_blank"><FaLinkedinIn /></Link>
          <Link href="https://pinterest.com/" target="_blank"><FaPinterestP /></Link>
          <Link href="https://tumblr.com/" target="_blank"><FaTumblr /></Link>
          <Link href="https://instagram.com/" target="_blank"><RiInstagramFill /></Link>
        </div>
      </div>

      {/*  MOBILE TOC  */}
      <div className={`lg:hidden transition-all overflow-y-auto  ${open ? "max-h-[250px]" : "max-h-0"} overflow-hidden `}>
        <div className="border rounded-lg bg-gray-50 ">
          <div className="p-4">
            {toc.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-1.5 px-2 rounded hover:bg-blue-50 ${item.level === "h3" ? "pl-6 text-gray-600" : "font-medium"
                  }`} >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*  MOBILE SIDEBAR  */}
      <div role="dialog"
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}>
        <div className="p-4">
          <div className="flex justify-between mb-4 border-b pb-3">
            <h3 className="font-semibold">{`Menu`}</h3>
            <button onClick={() => setSidebarOpen(false)}> <IoClose /></button>
          </div>
          <SideBarCategory menuItems={sideBarCategory} />
        </div>
      </div>

      {/*  MAIN GRID  */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6 py-4">
        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block  gap-2">
          <div className="sticky top-10 z-10 space-y-4">
            <div className="flex gap-2 items-center mb-6">
              <p className="responsive-text">{`Share`}</p>
              <Link href="https://www.facebook.com/" target="_blank"><FaFacebookF className="text-[20px]" /></Link>
              <Link href="https://x.com/" target="_blank"><FaTwitter className="text-[20px]" /></Link>
              <Link href="https://linkedin.com/" target="_blank"><FaLinkedinIn className="text-[20px]" /></Link>
              <Link href="https://pinterest.com/" target="_blank"><FaPinterestP className="text-[20px]" /></Link>
              <Link href="https://tumblr.com/" target="_blank"><FaTumblr className="text-[20px]" /></Link>
              <Link href="https://instagram.com/" target="_blank"><RiInstagramFill className="text-[25px]" /></Link>
            </div>
            <section className="border rounded-lg bg-gray-50 mb-4 shadow-sm">
              <button onClick={() => setDesktopTocOpen(!desktopTocOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors rounded-t-lg">
                <h3 className="font-semibold">{`Table of Contents`}</h3>
                {desktopTocOpen ? <IoChevronUp className="text-lg" /> : <IoChevronDown className="text-lg" />}
              </button>
              <div className={`transition-all duration-300 ease-in-out ${desktopTocOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                <div className="max-h-[450px] overflow-y-auto px-4 pb-4">
                  {toc.map((item) => (
                    <Link key={item.id} href={`#${item.id}`}
                      className={`block py-1.5 px-2 rounded hover:bg-blue-50 transition-colors ${item.level === "h3" ? "pl-6 text-gray-600" : ""}`}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-gray-100 p-4 rounded-lg">
              <SideBarCategory menuItems={sideBarCategory} />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mb-5 ">
          {/* meta description */}
          {blog?.meta?.description && (
            <div className="mb-2 "> {blog.meta.description} </div>
          )}
          {blog?.featuredImage?.url && (
            <div className="mb-2">
              {/* featured img */}
              <Image
                src={blog.featuredImage.url}
                alt={blog?.title || "Featured image"}
                width={900}
                height={450}
                priority
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}

          <div className="py-3 no-tailwind">
            <div className="discriptionContent "
              dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          {Array.isArray(blog?.faq) &&
            blog?.faq?.length > 0 &&
            blog?.faq?.[0]?.question?.length > 0 && (
              <div className="mt-8">
                <CommonFaq1 faqData={blog?.faq} />
              </div>
            )}
          <CommentBox />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block sticky top-24 space-y-6 self-start">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg bg-white">
              <p className="responsive-test dm text-center border-b py-1">{`ADVERTISEMENT`}</p>
              <div className="p-2 flex justify-center">
                <Image
                  src="/Shiksologo.png"
                  width={300}
                  height={250}
                  alt="Ad"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
