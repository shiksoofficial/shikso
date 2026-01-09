"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "@/common-component/CustomInput";
import HeroSection from "@/component/homepage/HeroSection";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import { apiClient2 } from "@/lib/api-client";
import { toast } from "react-toastify";
import { setToken, setUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await apiClient2.post("/authsishko/login", {
        email: data.email,
        password: data.password,
      });

      // Store token if present in response
      const token = response?.data?.token || response?.data?.access_token || response?.data?.data?.token;
      if (token) {
        setToken(token);
      }

      // Store user data if present in response
      const userData = response?.data?.user || response?.data?.data?.user || response?.data?.data;
      if (userData) {
        setUser(userData);
      }

      toast.success("Login successful!");
      console.log("Login successful:", response.data);

      // Redirect to home or dashboard
      router.push("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title=" Welcome to Shikso – Your Child’s Smart Learning Companion"
        title2=" AI-Powered Education for Modern Students"
        paragraph=" Shikso is a next-generation smart learning platform that transforms traditional education into an interactive, data-driven experience. Designed for today’s students, parents, and schools, Shikso blends AI-based personalization, gamified practice, and performance analytics to create a learning journey that’s fun, effective, and future-ready."
        // button={true}
        breadcom={[{ title: "Login" }]} />
      <div className=" bg-[#f5f7fb] flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 border border-gray-200">
          <div className="flex justify-center mb-3">
            <div className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl text-xl">
              <Link href="/" className=" hover:underline">
                {`Shikso`}
              </Link>
            </div>
          </div>
          <h2 className="dm_sans text-center responsiveheading2 font-semibold text-gray-900">{`Welcome Back`} </h2>
          <p className="dm_sans text-center text-gray-500 responsive-text mt-1">{`Sign in to continue to your account.`}  </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <label className="dm_sans responsive-text text-gray-500">{`Email`}</label>
            <CustomInput
              name="email"
              placeholder="Enter your email"
              register={register}
              errors={errors}
              validateRules={{ required: "Email is required" }}
              className="border-1 border-gray-500 "
            />
            <label className="dm_sans responsive-text text-gray-500">{`Password`}</label>
            <CustomInput
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              register={register}
              errors={errors}
              validateRules={{ required: "Password is required" }}
              className="border-1 border-gray-500 "
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
              <Link href="#" className="responsive-text dm_sans text-blue-600 hover:underline">{`Forgot Password?`} </Link>
            </div>
            <CustomButton
              type="submit"
              className="w-full   py-3 rounded-md font-medium transition"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {`Log In`}
            </CustomButton>
            <p className="dm_sans text-center responsive-text text-gray-600">
              {`Don’t have an account?`}{" "}
              <Link href="/signup" className="text-blue-600 font-medium hover:underline"> {`Sign Up`} </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
