"use client";

import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BASE_URL_API } from "@/lib/common";
import Link from "next/link";

const capitalizeFirst = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const SideBarCategory = ({ width = "240px", onCategorySelect, selectedCategory }) => {
    const [categoriesWithBlogs, setCategoriesWithBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openCategories, setOpenCategories] = useState({});

    useEffect(() => {
        const fetchCategoriesWithBlogs = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${BASE_URL_API}blogs/all/ed_tech?status=Published`,
                    { cache: "no-store" }
                );
                const data = await res.json();
                const allBlogs = Array.isArray(data?.blogs) ? data.blogs : [];
                const categoryMap = new Map();
                allBlogs.forEach((blog) => {
                    const cat = blog?.category;
                    if (cat?._id && cat?.name) {
                        if (!categoryMap.has(cat._id)) {
                            categoryMap.set(cat._id, {
                                _id: cat._id,
                                name: cat.name,
                                count: 1,
                                blogs: [blog],
                            });
                        } else {
                            const existing = categoryMap.get(cat._id);
                            existing.count += 1;
                            existing.blogs.push(blog);
                        }
                    }
                });

                setCategoriesWithBlogs(Array.from(categoryMap.values()));
            } catch (error) {
                console.error("Failed to load categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoriesWithBlogs();
    }, []);

    const toggleCategory = (categoryId) => {
        setOpenCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    const handleCategorySelect = (category) => {
        if (onCategorySelect) {
            onCategorySelect(category);
        }
        toggleCategory(category._id);
    };

    return (
        <div className="h-screen overflow-y-auto   mt-4">
            <div className="px-3 py-2 mb-2 border-b border-gray-200">
                <h3 className="dm_sans responsiveheading5 font-bold text-gray-800">{`Categories`}</h3>
            </div>
            {loading && (
                <div className="flex justify-center py-4">
                    <div className="h-6 w-6 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                </div>
            )}
            {!loading && (
                <button onClick={() => onCategorySelect?.(null)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition ${selectedCategory === null
                        ? "bg-blue-500 text-white shadow-md"
                        : "hover:bg-white"
                        }`}>
                    <div className="flex items-center gap-3">
                        <p className={`dm_sans w-8 h-8 flex items-center shrink-0 justify-center rounded-full shadow responsiveheading6 m-0 ${selectedCategory === null
                            ? "bg-white text-blue-500"
                            : "bg-white text-gray-600"
                            }`}>
                            <MdCategory />
                        </p>
                        <p className="dm_sans responsive-text font-medium m-0">{`All`}</p>
                    </div>
                    <p className={`dm_sans shrink-0 px-2 py-1 text-xs rounded-full m-0 ${selectedCategory === null
                        ? "bg-white text-blue-500"
                        : "bg-gray-200"
                        }`}>
                        {categoriesWithBlogs.reduce((sum, cat) => sum + cat.count, 0)}
                    </p>
                </button>
            )}
            {/* Category List with Expandable Blogs */}
            {!loading &&
                categoriesWithBlogs.map((category) => {
                    const isOpen = openCategories[category._id];
                    const isSelected = selectedCategory?._id === category._id;
                    return (
                        <div key={category._id} className="overflow-hidden">
                            {/* Category Header */}
                            <button onClick={() => handleCategorySelect(category)}
                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition ${isSelected
                                    ? "bg-blue-500 text-white shadow-md"
                                    : "hover:bg-white"
                                    }`}>
                                <div className="flex items-center gap-3 text-left">
                                    <p className={`dm_sans responsiveheading6 w-8 h-8 shrink-0 flex items-center justify-center rounded-full shadow m-0 ${isSelected
                                        ? "bg-white text-blue-500"
                                        : "bg-white text-gray-600"
                                        }`} >
                                        <MdCategory />
                                    </p>
                                    <p className="dm_sans text-[16px] font-medium m-0">{capitalizeFirst(category.name)}</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    {/* Blog Count */}
                                    <p className={`dm_sans px-2 py-1 text-xs rounded-full m-0 ${isSelected
                                        ? "bg-white text-blue-500"
                                        : "bg-gray-200"
                                        }`} >
                                        {category.count} </p>

                                    {/* Expand/Collapse Arrow */}
                                    {isOpen ? (
                                        <FaChevronDown size={12} className={isSelected ? "text-white" : "text-gray-500"} />
                                    ) : (
                                        <FaChevronRight size={12} className={isSelected ? "text-white" : "text-gray-500"} />
                                    )}
                                </div>
                            </button>
                            {/* Expandable Blog List */}
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
                                }`} >
                                <div className="ml-6 mt-1 space-y-1 border-l-2 border-blue-200 pl-4 py-2">
                                    {category.blogs.map((blog) => (
                                        <Link key={blog._id} href={`/blogs/${blog.uid || blog._id}`}
                                            className="flex items-center gap-2 dm_sans text-[16px] text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1.5 rounded-md transition-colors group" >
                                            <IoDocumentTextOutline className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                                            <p className="dm_sans line-clamp-1 m-0">{blog.title}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            {/* No Categories */}
            {!loading && categoriesWithBlogs.length === 0 && (
                <p className="text-center text-gray-500 dm_sans responsive-text py-4 m-0"> {` No categories found`} </p>
            )}
        </div>
    );
};

export default SideBarCategory;