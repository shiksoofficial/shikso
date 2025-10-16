"use client";
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonial = ({ testimonialData }) => {
    return (
        <div className="custom-container m-6 md:m-10 text-center ">
            <p className='indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5 '>{`Testimonial`}</p>
            <h2 className='dm_sans responsiveheading2 font-light mb-6 leading-1.5 '>{`What Our Client Says About Us`}</h2>
            <div className="relative max-w-4xl mx-auto bg-[#fd4d40] shadow p-12 text-center flex flex-col items-center cursor-pointer rounded-lg overflow-hidden">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 1,
                        autoplay: true,
                        interval: 3000,
                        pauseOnHover: true,
                        gap: "1.5rem",
                        arrows: false,
                        pagination: true,
                      
                    }}
                    aria-label="Client Testimonials"
                    className="w-full"
                >
                    {testimonialData?.map(({ icon, title, partner, description }, index) => (
                        <SplideSlide key={index}>
                            <div key={index} className="flex flex-col sm:flex-row justify-between w-full mb-6">
                                <div className="w-32 flex-initial flex justify-center sm:justify-start">
                                    <img
                                        src={icon}
                                        alt={title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
                                <div className="flex-1 text-left pl-6">
                                    <h3 className="dm_sans responsiveheading6 font-semibold mb-2 text-white">
                                        {title}
                                    </h3>
                                    <p className="dm_sans responsive-text font-light text-red-300 mb-3">
                                        {partner}
                                    </p>
                                    <p className="dm_sans responsiveheading6 font-light text-gray-100 leading-10 pr-10 ">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>

    );
};

export default Testimonial;
