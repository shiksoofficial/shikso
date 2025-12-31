"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCommentDots, FaRegBookmark, FaBookmark, FaShareAlt } from "react-icons/fa";

const MainCards = ({ blogs = [] }) => {
    const [saved, setSaved] = useState({});

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("savedBlogs") || "{}");
        setSaved(stored);
    }, []);

    const toggleSave = (id) => {
        const updated = { ...saved, [id]: !saved[id] };
        setSaved(updated);
        localStorage.setItem("savedBlogs", JSON.stringify(updated));
    };

    //  Helper function to get the correct URL based on type
    const getItemUrl = (item) => {
        const id = item?.uid || item?._id;
        const type = item?.type?.toLowerCase();

        if (type === "news") {
            return `/educational-news/${id}`;
        }
        // Default to blogs
        return `/blogs/${id}`;
    };

    const handleShare = async (blog) => {
        const url = `${window.location.origin}${getItemUrl(blog)}`;
        if (navigator.share) {
            await navigator.share({
                title: blog?.title,
                url,
            });
        } else {
            navigator.clipboard.writeText(url);
            alert("Link copied");
        }
    };

    if (!blogs.length) return null;

    const [latest, ...others] = blogs;

    const getCategoryName = (category) => {
        if (!category) return "Blog";
        if (typeof category === "string") return category;
        if (typeof category === "object" && category.name) return category.name;
        return "Blog";
    };

    //  Helper function to get type label
    const getTypeLabel = (item) => {
        const type = item?.type?.toLowerCase();
        if (type === "news") return "News";
        return "Blog";
    };

    //  Helper function to get type color
    const getTypeColor = (item) => {
        const type = item?.type?.toLowerCase();
        if (type === "news") return "text-green-600";
        return "text-red-600";
    };

    /* ICON BAR */
    const ActionIcons = ({ blog }) => (
        <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
            <p className="flex items-center gap-1 m-0"><FaRegCommentDots />{blog?.commentsCount ?? "02"} </p>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleSave(blog._id);
                }}>
                {saved[blog._id] ? <FaBookmark /> : <FaRegBookmark />}
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleShare(blog);
                }}>
                <FaShareAlt />
            </button>
        </div>
    );

    return (
        <div className="grid grid-cols-1 gap-6">
            {/* FEATURED BLOG/NEWS */}
            {latest && (
                <Link href={getItemUrl(latest)}
                    className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <div className="relative h-[320px]">
                        <Image
                            src={latest?.featuredImage?.url || "/placeholder.jpg"}
                            alt={latest?.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                            <p className={`px-2 py-1 text-xs font-bold rounded m-0 ${latest?.type?.toLowerCase() === "news"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                                }`}>
                                {getTypeLabel(latest)}
                            </p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className={`text-xs font-semibold uppercase m-0 ${getTypeColor(latest)}`}>{getCategoryName(latest?.category)} </p>
                        <h2 className="text-xl font-bold mt-2 leading-snug">{latest?.title} </h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2 m-0">{latest?.meta?.description}  </p>
                        <ActionIcons blog={latest} />
                    </div>
                </Link>
            )}

            {/* SMALL BLOGS/NEWS */}
            {others.slice(0, 5).map((blog) => (
                <Link key={blog?._id} href={getItemUrl(blog)}
                    className="flex gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition">
                    <div className="relative w-28 h-20 rounded overflow-hidden">
                        <Image
                            src={blog?.featuredImage?.url || "/placeholder.jpg"}
                            alt={blog?.title}
                            fill
                            className="object-cover" />
                        {/* Small Type Badge */}
                        <div className="absolute top-1 left-1">
                            <p className={`px-1 py-0.5 text-[10px] font-bold rounded m-0 ${blog?.type?.toLowerCase() === "news"
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                                }`}>
                                {getTypeLabel(blog)}
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold uppercase m-0 ${getTypeColor(blog)}`}>{getCategoryName(blog?.category)} </p>
                        <h3 className="text-sm font-semibold leading-snug mt-1 line-clamp-2">{blog?.title} </h3>
                        <ActionIcons blog={blog} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MainCards;

{/* <MainCards blogs={filteredBlogs} type="blog" />
<MainCards blogs={filteredNews} type="news" />
<MainCards blogs={mixedContent} /> */}