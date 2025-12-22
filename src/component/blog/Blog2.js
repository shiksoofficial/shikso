"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL_API } from "@/lib/common";

const Blog2 = ({ initialBlogs = [] }) => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState("");

    const categories = [
        { label: "AI & Smart Learning", value: "ai_smart_learning" },
        { label: "School Education Insights", value: "school_education" },
        { label: "Teacher & Parent Guides", value: "teacher_parent" },
        { label: "EdTech & Innovation", value: "edtech_innovation" },
    ];

    const fetchBlogs = async (categoryValue = "") => {
        setLoading(true);
        try {
            let url = `${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published&page=1&limit=4`;
            if (categoryValue) {
                url += `&category=${encodeURIComponent(categoryValue)}`;
            }

            const res = await fetch(url, { cache: "no-store" });
            const data = await res.json();
            const newBlogs = Array.isArray(data?.blogs) ? data.blogs : [];
            setBlogs(newBlogs);
        } catch (error) {
            console.error("Failed to load blogs:", error);
        } finally {
            setLoading(false);
        }
    };
    const handleCategoryChange = (category) => {
        if (category.value === activeCategory) {
            setActiveCategory("");
            fetchBlogs("");
        } else {
            setActiveCategory(category.value);
            fetchBlogs(category.value);
        }
    };

    useEffect(() => {
        if (initialBlogs.length === 0) {
            fetchBlogs();
        }
    }, []);
    

    return (
        <div className="bg-[#E5FBFF] py-4 md:py-10">
            <div className="custom-container  ">
                <div className="flex gap-2 items-center mt-4 mb-5 w-fit m-auto">
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className="responsiveheading2">{`Explore Our Blog Categories`}</h2>
                </div>
                <div className="mt-8 mx-auto max-w-4xl bg-white rounded-full p-2 flex flex-col sm:flex-row flex-wrap  md:flex-nowrap justify-between items-center shadow-sm">
                    {categories.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleCategoryChange(item)}
                            className={`flex-1 py-2 px-3 text-center text-sm font-medium transition-all rounded-full ${activeCategory === item.value
                                ? "text-white bg-[#00B0CC]"
                                : "text-[#1A2E33] hover:text-[#00B0CC]"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <div className="relative min-h-[300px]" aria-busy={loading}>
                    {loading && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl">
                            <div className="h-10 w-10 rounded-full border-2 border-[#00B0CC] border-t-transparent animate-spin" />
                        </div>
                    )}
                    <div className={loading ? "pointer-events-none select-none" : ""}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6 md:px-20">
                            {blogs.length > 0 ? (
                                blogs.map((val) => (
                                    <div
                                        key={val?._id}
                                        className="bg-white rounded-xl shadow-sm p-1 hover:shadow-md transition"
                                    >
                                        <div className="relative w-full h-56 rounded-xl overflow-hidden">
                                            <Image
                                                src={val?.featuredImage?.url || "/images/blog1.png"}
                                                fill
                                                quality={90}
                                                alt={val?.featuredImage?.alt || "Blog Image"}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center mt-4 ">
                                            <p className="text-slate-400 text-xs mt-3 px-5">
                                                {val?.createdAt?.split("T")[0]}
                                            </p>
                                            <Link href={`/blogs/${val?.uid}`}>
                                                <span className="text-xl cursor-pointer hover:text-[#00B0CC] transition">
                                                    ↗
                                                </span>
                                            </Link>
                                        </div>

                                        <h3 className="font-semibold text-lg line-clamp-2 px-5">
                                            {val?.title || "Blog Title"}
                                        </h3>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-2 text-center py-10 text-gray-500">
                                    <p className="text-lg">{`No blogs found in this category`}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog2;