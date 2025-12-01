"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "@/common-component/CustomInput";
import HeroSection from "@/component/homepage/HeroSection";
import CustomButton from "@/common-component/CustomButton/CustomButton";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login:", data);
  };

  return (
    <>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title=" Welcome to Shikso – Your Child’s Smart Learning Companion"
        title2=" AI-Powered Education for Modern Students"
        paragraph=" Shikso is a next-generation smart learning platform that transforms traditional education into an interactive, data-driven experience. Designed for today’s students, parents, and schools, Shikso blends AI-based personalization, gamified practice, and performance analytics to create a learning journey that’s fun, effective, and future-ready."
        // button={true}
        breadcom={[{ title: "Login" }]} />
      <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc]">
        <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-center mb-3">
            <div className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl text-xl">
              Shikso
            </div>
          </div>
          <h2 className="text-center text-2xl font-semibold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 text-sm mt-1">
            Sign in to continue to your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <CustomInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              register={register}
              errors={errors}
              validateRules={{ required: "Email is required" }}
            />
            <CustomInput
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              register={register}
              errors={errors}
              validateRules={{ required: "Password is required" }}
              endIcon={
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              }
            />
            <div className="flex justify-end -mt-3">
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <CustomButton
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
            >
              Log In
            </CustomButton>
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-blue-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
