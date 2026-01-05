"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL_API } from "@/lib/common";
import { FaRegCommentDots, FaRegBookmark, FaBookmark, FaShareAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

function BlogCard({
    title = "Blogs",
    subtitle = null,
    currentBlogId = null,
    filterByCategory = null,
    limit = 4,
    showCategory = false,
    initialBlogs = [],
    fetchOnMount = true,
    showActions = false, // CHANGED: New prop to show/hide action icons
}) {
    const [blogs, setBlogs] = useState(initialBlogs || []);
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState({}); // CHANGED: Added saved state
    const [mounted, setMounted] = useState(false); // CHANGED: Added mounted state

    useEffect(() => {
        setMounted(true); // CHANGED: Set mounted to true
        setSaved(JSON.parse(localStorage.getItem("savedBlogs") || "{}")); // CHANGED: Load saved blogs
    }, []);

    useEffect(() => {
        if (!fetchOnMount) {
            setBlogs(initialBlogs);
            return;
        }
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${BASE_URL_API}blogs/all/ed_tech?type=blog&status=Published`,
                    { cache: "no-store" }
                );
                const data = await res.json();
                let allBlogs = Array.isArray(data?.blogs) ? data.blogs : [];

                if (filterByCategory) {
                    allBlogs = allBlogs.filter(
                        (blog) =>
                            (blog.category?._id === filterByCategory._id ||
                                blog.category?.name === filterByCategory.name) &&
                            blog._id !== currentBlogId
                    );
                }

                if (currentBlogId && !filterByCategory) {
                    allBlogs = allBlogs.filter((blog) => blog._id !== currentBlogId);
                }

                if (filterByCategory) {
                    allBlogs = allBlogs.sort(() => 0.5 - Math.random());
                }

                setBlogs(allBlogs.slice(0, limit));
            } catch (error) {
                console.error("Failed to load blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [fetchOnMount, filterByCategory?._id, filterByCategory?.name, currentBlogId, limit]);

    const toggleSave = (id) => {
        const updated = { ...saved, [id]: !saved[id] };
        setSaved(updated);
        localStorage.setItem("savedBlogs", JSON.stringify(updated));
    };

    const ActionIcons = ({ blog }) => {
        const [showShare, setShowShare] = useState(false);
        const [copied, setCopied] = useState(false);
        const url = mounted ? `${window.location.origin}/blogs/${blog?.uid}` : '';
        const text = `Check out this: "${blog?.title}"`;

        const share = (e, link) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(link, '_blank', 'noopener,noreferrer');
        };

        const email = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const link = document.createElement('a');
            link.href = `mailto:?subject=${encodeURIComponent(blog?.title || '')}&body=${encodeURIComponent(`${text}\n\n${url}`)}`;
            link.click();
        };

        const copy = async (e) => {
            e.preventDefault();
            e.stopPropagation();
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch {
                alert("Failed to copy");
            }
        };

        const shareLinks = [
            { icon: FaWhatsapp, label: "WhatsApp", color: "hover:text-green-500", url: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}` },
            { icon: FaTwitter, label: "Twitter", color: "hover:text-blue-400", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}` },
            { icon: FaFacebookF, label: "Facebook", color: "hover:text-blue-600", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` }
        ];

        return (
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
                    <p className="flex items-center gap-1 m-0"> <FaRegCommentDots /> {blog?.commentsCount ?? "02"} </p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleSave(blog._id);
                        }}
                        className="hover:text-gray-700" >
                        {saved[blog._id] ? <FaBookmark className="text-blue-600" /> : <FaRegBookmark />}
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowShare(!showShare);
                        }}
                        className="hover:text-gray-700" >
                        <FaShareAlt />
                    </button>
                </div>

                {showShare && (
                    <>
                        <div
                            className="fixed inset-0 z-10"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowShare(false);
                            }}
                        />
                        <div
                            className="absolute z-20 mt-2 bg-white border rounded-lg shadow-xl p-2 flex flex-col gap-1 min-w-[180px] left-0"
                            onClick={(e) => e.stopPropagation()}>
                            {shareLinks.map(({ icon: Icon, label, color, url }) => (
                                <button
                                    key={label}
                                    onClick={(e) => share(e, url)}
                                    className={`flex items-center gap-3 ${color} px-3 py-2 rounded hover:bg-gray-50 text-gray-700 text-left w-full transition`}>
                                    <Icon size={18} /> {label}
                                </button>
                            ))}
                            <button
                                onClick={email}
                                className="flex items-center gap-3 hover:text-red-400 px-3 py-2 rounded hover:bg-gray-50 text-gray-700 text-left w-full transition">
                                <FaEnvelope size={18} /> Email
                            </button>
                            <hr className="my-1 border-gray-200" />
                            <button
                                onClick={copy}
                                className="flex items-center gap-3 hover:text-gray-900 px-3 py-2 rounded hover:bg-gray-50 text-left w-full transition">
                                <FaLink size={18} className={copied ? "text-green-500" : ""} />
                                <span className={copied ? "text-green-500 font-semibold" : ""}>
                                    {copied ? "✓ Copied!" : "Copy Link"}
                                </span>
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    };

    if (blogs.length === 0 && !loading) return null;

    return (
        <div className="custom-container mt-10 mb-10" aria-busy={loading}>
            <div className="mb-6">
                <div className="flex gap-2 items-center">
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className="responsiveheading2">{title}</h2>
                </div>
                {subtitle && (
                    <p className="text-gray-600 mt-2">{subtitle}</p>
                )}
            </div>
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    <div className="h-10 w-10 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                </div>
            )}
            <div className={loading ? "pointer-events-none select-none" : ""}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {blogs.map((val) => (
                        <Link key={val?._id}
                            href={`/blogs/${val?.uid}`}
                            className="rounded-[10px] overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col"> {/* CHANGED: Added flex-col */}
                            <div className="flex">
                                <div className="relative w-[100px] h-[110px] overflow-hidden m-2 shrink-0">
                                    <Image
                                        src={val?.featuredImage?.url || " https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"}
                                        fill
                                        quality={90}
                                        alt={val?.featuredImage?.alt || "Blog Image"}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-2 flex-1">
                                    {showCategory && (
                                        <p className="capitalize inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-2"> {val?.category?.name || val?.category}</p>
                                    )}
                                    <p className="text-slate-500 text-[13px]">{val?.createdAt?.split("T")[0]}</p>
                                    <h3 className="line-clamp-2 mt-1 mb-1 font-semibold text-gray-800">{val.title}</h3>
                                    {showActions && (
                                        <div className="px-3 pb-3">
                                            <ActionIcons blog={val} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;