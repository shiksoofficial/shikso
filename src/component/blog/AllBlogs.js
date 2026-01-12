"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BASE_URL_API } from "@/lib/common";

function AllBlogs({ initialBlogs }) {
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
                setBlogs(allBlogs);
            } catch (error) {
                console.error("Failed to load blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlogs();
    }, []);

    return (
        <div className="custom-container relative mb-7" aria-busy={loading}>
            <div className="mb-6">
                <div className="flex gap-2 items-center">
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h2 className="responsiveheading2">{`All Blogs`}</h2>
                </div>
            </div>
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                    <div className="h-10 w-10 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                </div>
            )}
            {!loading && blogs.length > 0 && (
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        gap: "1rem",
                        breakpoints: {
                            1024: { perPage: 2 },
                            640: { perPage: 1 },
                        },
                        pagination: false,
                        arrows: true,
                        autoplay: true,
                        interval: 3000,
                        pauseOnHover: true,
                        drag: true,
                    }}
                    className="cursor-grab px-5">
                    {blogs.map((val) => (
                        <SplideSlide key={val?._id}>
                            <Link href={`/blogs/${val?.uid}`}
                                className="rounded-[8px] overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer flex" >
                                <div className="relative w-[80px] h-[90px] overflow-hidden m-2 shrink-0">
                                    <Image
                                        src={val?.featuredImage?.url || "/placeholder.jpg"}
                                        fill
                                        quality={90}
                                        alt={val?.featuredImage?.alt || "Blog Image"}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <p className="text-slate-500 text-[12px]">{val?.createdAt?.split("T")[0]}</p>
                                    <h3 className="line-clamp-2 mt-2 mb-1 font-semibold text-gray-800 text-sm">{val.title}</h3>
                                </div>
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            )}
            {/* Custom Arrow Styling */}
            <style jsx global>{`
        .splide__arrow {
          background-color: #FFF46C !important;
          color: #000 !important;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          transition: transform 0.3s ease;
          top: 40% !important;
          z-index: 5;
        }
        .splide__arrow--prev {
          left: -1rem !important; /* further away from cards */
        }
        .splide__arrow--next {
          right: -1rem !important;
        }
        .splide__arrow:hover {
          transform: translateX(5px);
        }
        .splide__arrow--prev:hover {
          transform: translateX(-5px);
        }
        .splide__arrow svg {
          stroke: #000 !important;
        }
      `}</style>
        </div>
    );
}

export default AllBlogs;
