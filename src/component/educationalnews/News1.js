"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, } from "react-icons/fa";
import { FaPinterestP, FaTumblr } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose, IoSchoolSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import SideBarCategory from "@/common-component/SideBarCategory/SideBarCategory";
import Advertisement from "@/common-component/Advertisement/Advertisement";
import MainCards from "../blog/MainCards";

// Function to generate sidebar categories from blog data
const generateSidebarCategories = (categories) => {
    if (!categories || categories.length === 0) {
        return [
            { label: "All Blogs", icon: <MdCategory />, value: "all" }
        ];
    }

    // Start with "All Blogs" option
    const sidebarItems = [
        { label: "All Blogs", icon: <MdCategory />, value: "all" }
    ];

    // Add dynamic categories
    categories.forEach(category => {
        // Convert category string to proper format
        const categoryValue = category.toLowerCase().replace(/\s+/g, '-');
        const categoryLabel = category
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

        sidebarItems.push({
            label: categoryLabel,
            icon: <IoSchoolSharp />,
            value: category, //  Keep original category name for filtering
            displayValue: categoryValue
        });
    });

    return sidebarItems;
};

const adsData = [
    {
        image: "/tirthanvalley.png",
        href: "https://www.zentrail.in/trail/tirthan-valley-tour",
        width: 300,
        height: 250,
    },
    // {
    //     image: "/Shiksologo.png",
    //     href: "https://example.com",
    // },
    // {
    //     image: "/Shiksologo.png",
    // },
];

const News1 = ({ allBlogs = [], categories = [] }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

    //  Generate sidebar categories from dynamic data
    const sideBarCategory = generateSidebarCategories(categories);

    //  Filter blogs when category changes
    useEffect(() => {
        if (selectedCategory === "all") {
            setFilteredBlogs(allBlogs);
        } else {
            const filtered = allBlogs.filter(blog => {
                if (Array.isArray(blog.category)) {
                    return blog.category.includes(selectedCategory);
                }
                return blog.category === selectedCategory;
            });
            setFilteredBlogs(filtered);
        }
    }, [selectedCategory, allBlogs]);

    //  Handle category 
    const handleCategoryClick = (categoryValue) => {
        setSidebarOpen(false);
        setSelectedCategory(categoryValue);
    };

    /* CLOSE SIDEBAR ON LARGE SCREEN */
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

            {/* MOBILE HEADER */}
            <div className="lg:hidden flex items-center justify-between py-3 border-b mb-4">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-lg bg-gray-100" aria-label="Toggle menu" >
                    <HiMenuAlt2 className="text-xl" />
                </button>

                <div className="flex gap-2">
                    <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook"> <FaFacebookF /> </Link>
                    <Link href="https://x.com/" target="_blank" aria-label="Twitter"> <FaTwitter /></Link>
                    <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">  <FaLinkedinIn /> </Link>
                    <Link href="https://pinterest.com/" target="_blank" aria-label="Pinterest">  <FaPinterestP /> </Link>
                    <Link href="https://tumblr.com/" target="_blank" aria-label="Tumblr"> <FaTumblr /> </Link>
                    <Link href="https://instagram.com/" target="_blank" aria-label="Instagram">   <RiInstagramFill /> </Link>
                </div>
            </div>

            {/* MOBILE SIDEBAR */}
            <div role="dialog" aria-modal="true"
                className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden overflow-y-auto shadow-2xl`} >
                <div className="p-4">
                    <SideBarCategory
                        menuItems={sideBarCategory}
                        onCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                    />
                </div>
            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6 py-4">
                {/* LEFT SIDEBAR */}
                <div className="hidden lg:block">
                     <div className="sticky top-20 z-10 space-y-4">
                    <div className="flex gap-2 items-center mb-6 flex-wrap">
                        <p className="responsive-text font-semibold">{`Share : `}</p>
                        <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook"> <FaFacebookF className="hover:text-blue-600 transition-colors cursor-pointer" /></Link>
                        <Link href="https://x.com/" target="_blank" aria-label="Twitter"><FaTwitter className="hover:text-blue-400 transition-colors cursor-pointer" /></Link>
                        <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"> <FaLinkedinIn className="hover:text-blue-700 transition-colors cursor-pointer" /></Link>
                        <Link href="https://pinterest.com/" target="_blank" aria-label="Pinterest"><FaPinterestP className="hover:text-red-600 transition-colors cursor-pointer" /> </Link>
                        <Link href="https://tumblr.com/" target="_blank" aria-label="Tumblr"><FaTumblr className="hover:text-blue-900 transition-colors cursor-pointer" /> </Link>
                        <Link href="https://instagram.com/" target="_blank" aria-label="Instagram"> <RiInstagramFill className="hover:text-pink-600 transition-colors cursor-pointer" /> </Link>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg sticky top-24 border border-gray-200">
                        <SideBarCategory
                            menuItems={sideBarCategory}
                            onCategoryClick={handleCategoryClick}
                            selectedCategory={selectedCategory}
                        />
                    </div>
                </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="mb-5">
                    <MainCards
                        blogs={filteredBlogs}
                        selectedCategory={selectedCategory}
                        totalBlogs={allBlogs.length}
                    />
                </div>
                {/* RIGHT SIDEBAR */}
                <div className="sticky top-24 space-y-6 self-start">
                    <Advertisement ads={adsData} />
                </div>
            </div>
        </div>
    );
};

export default News1;