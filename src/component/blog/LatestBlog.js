"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL_API } from "@/lib/common";

function LatestBlog({ initialBlogs }) {
    const [blogs, setBlogs] = useState(initialBlogs || []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published`,
                    { cache: "no-store" }
                );
                const data = await res.json();
                const allBlogs = Array.isArray(data?.blogs) ? data.blogs : [];
                // Limit to 4 blogs
                setBlogs(allBlogs.slice(0, 4));
            } catch (error) {
                console.error("Failed to load blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlogs();
    }, []);

    return (
        <div className="custom-container  mt-10 mb-10" aria-busy={loading}>
            <div className="mb-6">
                <div className="flex gap-2 items-center">
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className="responsiveheading2">{`Latest Blogs`}</h2>
                </div>
            </div>
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    <div className="h-10 w-10 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                </div>
            )}
            <div className={loading ? "pointer-events-none select-none" : ""}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {blogs.map((val) => (
                        <Link key={val?._id} href={`/blogs/${val?.uid}`}
                            className="rounded-[10px] overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer flex">
                            <div className="relative w-[100px] h-[110px] overflow-hidden m-2 shrink-0">
                                <Image
                                    src={val?.featuredImage?.url || "/placeholder.jpg"}
                                    fill
                                    quality={90}
                                    alt={val?.featuredImage?.alt || "Blog Image"}
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <p className="text-slate-500 text-[13px]">{val?.createdAt?.split("T")[0]}</p>
                                <h3 className="line-clamp-2 mt-3 mb-1 font-semibold text-gray-800">{val.title} </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LatestBlog;