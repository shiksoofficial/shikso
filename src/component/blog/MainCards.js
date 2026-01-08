"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCommentDots, FaRegBookmark, FaBookmark, FaShareAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";

const MainCards = ({ blogs = [] }) => {
    const [saved, setSaved] = useState({});
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setSaved(JSON.parse(localStorage.getItem("savedBlogs") || "{}"));
    }, []);

    const toggleSave = (id) => {
        const updated = { ...saved, [id]: !saved[id] };
        setSaved(updated);
        localStorage.setItem("savedBlogs", JSON.stringify(updated));
    };

    const getItemUrl = (item) => {
        const id = item?.uid || item?._id;
        return item?.type?.toLowerCase() === "news" ? `/educational-news/${id}` : `/blogs/${id}`;
    };

    const getCategoryName = (category) =>
        category?.name || (typeof category === "string" ? category : "Blog");

    const getTypeLabel = (item) =>
        item?.type?.toLowerCase() === "news" ? "News" : "Blog";

    const getTypeColor = (item) =>
        item?.type?.toLowerCase() === "news" ? "text-green-600" : "text-red-600";

    // isBigCard prop to control dropdown position
    const ActionIcons = ({ blog, isBigCard = false }) => {
        const [showShare, setShowShare] = useState(false);
        const [copied, setCopied] = useState(false);
        const url = mounted ? `${window.location.origin}${getItemUrl(blog)}` : '';
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
                        className="hover:text-gray-700">
                        {saved[blog._id] ? <FaBookmark className="text-blue-600" /> : <FaRegBookmark />}
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowShare(!showShare);
                        }}
                        className="hover:text-gray-700">
                        <FaShareAlt />
                    </button>
                </div>

                {showShare && (
                    <>
                        {/* Backdrop to close menu */}
                        <div
                            className="fixed inset-0 z-10"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowShare(false);
                            }}
                        />
                        {/* opens above for big card, below for small cards */}
                        <div
                            className={`absolute z-20 bg-white border rounded-lg shadow-xl p-2 flex flex-col gap-1 min-w-[180px] left-0 ${isBigCard
                                    ? "bottom-full mb-2" // Opens ABOVE the icons for big card
                                    : "top-full mt-2"    // Opens below for small cards (default behavior)
                                }`}
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

    if (!blogs.length) return null;

    const [latest, ...others] = blogs;
    const badgeClass = (item) => item?.type?.toLowerCase() === "news" ? "bg-green-500" : "bg-red-500";

    return (
        <div className="grid grid-cols-1 gap-6">
            {/* FEATURED BLOG/NEWS */}
            {latest && (
                <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                    <Link href={getItemUrl(latest)} className="block">
                        <div className="relative h-[320px]">
                            <Image
                                src={latest?.featuredImage?.url || "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"}
                                alt={latest?.title || ""}
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute top-3 left-3">
                                <p className={`px-2 py-1 text-xs font-bold rounded m-0 ${badgeClass(latest)} text-white`}>{getTypeLabel(latest)}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="p-4">
                        <Link href={getItemUrl(latest)}>
                            <p className={`text-xs font-semibold uppercase m-0 ${getTypeColor(latest)}`}> {getCategoryName(latest?.category)} </p>
                            <h2 className="text-xl font-bold mt-2 leading-snug text-gray-900"> {latest?.title} </h2>
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2 m-0">{latest?.meta?.description}</p>
                        </Link>
                        <ActionIcons blog={latest} isBigCard={true} />
                    </div>
                </div>
            )}

            {/* SMALL BLOGS/NEWS */}
            {others.slice(0, 5).map((blog) => (
                <div key={blog?._id}
                    className="flex gap-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                    onClick={() => window.location.href = getItemUrl(blog)} >
                    <div className="relative w-28 h-20 rounded overflow-hidden flex-shrink-0">
                        <Image
                            src={blog?.featuredImage?.url || "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"}
                            alt={blog?.title || ""}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-1 left-1">
                            <p className={`px-1 py-0.5 text-[10px] font-bold rounded m-0 ${badgeClass(blog)} text-white`}>{getTypeLabel(blog)}</p>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold uppercase m-0 ${getTypeColor(blog)}`}>{getCategoryName(blog?.category)}</p>
                        <h3 className="text-sm font-semibold leading-snug mt-1 line-clamp-2 text-gray-900">{blog?.title}</h3>
                        <ActionIcons blog={blog} isBigCard={false} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainCards;

{/* <MainCards blogs={filteredBlogs} type="blog" />
<MainCards blogs={filteredNews} type="news" />
<MainCards blogs={mixedContent} /> */}