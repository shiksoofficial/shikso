"use client";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import CustomInput from "@/common-component/CustomInput";
import HeroSection from "@/component/homepage/HeroSection";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function CreateAccount() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    return (
        <>
            <HeroSection imageurl="/aboutus/hero_1.jpg"
                title=" Welcome to Shikso – Your Child’s Smart Learning Companion"
                title2=" AI-Powered Education for Modern Students"
                paragraph=" Shikso is a next-generation smart learning platform that transforms traditional education into an interactive, data-driven experience. Designed for today’s students, parents, and schools, Shikso blends AI-based personalization, gamified practice, and performance analytics to create a learning journey that’s fun, effective, and future-ready."
                // button={true}
                breadcom={[{ title: "Sign up" }]} />
            <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                    <h2 className="text-3xl font-semibold text-center">Create Account</h2>
                    <p className="text-center text-gray-500 mt-1 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <CustomInput
                            label="Full Name"
                            name="fullName"
                            placeholder="Enter your full name"
                            register={register}
                            errors={errors}
                            validateRules={{ required: "Full Name is required" }}
                        />
                        <CustomInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            register={register}
                            errors={errors}
                            validateRules={{ required: "Email is required" }}
                        />
                        <CustomInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            register={register}
                            errors={errors}
                            validateRules={{ required: "Password is required" }}
                        />
                        <div>
                            <label className="text-sm font-medium">Mobile Number</label>
                            <div className="flex gap-2 mt-1">
                                <input
                                    type="text"
                                    value="+91"
                                    readOnly
                                    className="w-16 p-3 rounded-lg border border-gray-300 bg-gray-100 text-center"
                                />
                                <CustomInput
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    register={register}
                                    errors={errors}
                                    validateRules={{
                                        required: "Mobile number is required",
                                    }}
                                    className="flex-1"
                                />
                            </div>
                        </div>
                        <CustomInput
                            label="Class ID"
                            name="classId"
                            placeholder="Enter your class ID"
                            register={register}
                            errors={errors}
                            validateRules={{ required: "Class ID is required" }}
                        />
                        <div>
                            <label className="text-sm font-medium">Gender</label>
                            <div className="grid grid-cols-3 gap-2 mt-1">
                                {["Male", "Female", "Other"].map((g) => (
                                    <button
                                        key={g}
                                        type="button"
                                        className="p-2 border rounded-lg text-gray-600 hover:bg-blue-50 hover:border-blue-500 transition"
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <CustomInput
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            register={register}
                            errors={errors}
                            validateRules={{ required: "Date of Birth is required" }}
                        />
                        <CustomButton
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition font-medium"
                        >
                            Sign Up
                        </CustomButton>
                    </form>
                    <p className="text-center text-xs text-gray-500 mt-4">
                        By signing up, you agree to our{" "}
                        <span className="text-blue-600 cursor-pointer">Terms of Service</span>{" "}
                        and{" "}
                        <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </>
    );
}
