"use client";

import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import CustomInput from "@/common-component/CustomInput";
import Link from "next/link";

const SubscribeBox = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Subscribed Email:", data.email);
        reset();
    };

    return (
        <div className="w-full rounded-2xl bg-[#E5FBFF] px-6 py-8 md:px-10 md:py-10 my-3">
            <div className="flex flex-col gap-6 sm:flex-row items-center md:justify-between">
                <h2 className="responsiveheading2 font-bold"> {`Subscribe Shikso to get more updates`}</h2>
                <div className="">
                    <form className="flex flex-col lg:flex-row gap-3"
                        onSubmit={handleSubmit(onSubmit)} >
                        <div className="w-full">
                            <CustomInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                register={register}
                                errors={errors}
                                validateRules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter a valid email",
                                    },
                                }}
                            />
                        </div>
                        <CustomButton type="submit" className="responsive-text">{`Subscribe`}</CustomButton>
                    </form>
                    <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                        {`By clicking “Subscribe” you agree to Shikso`}{" "}
                        <Link href="/privacy-policy" className="text-blue-600 font-medium hover:underline" >
                            {` Privacy Policy`}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBox;
