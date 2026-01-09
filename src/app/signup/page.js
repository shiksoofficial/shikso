"use client";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import CustomInput from "@/common-component/CustomInput";
import HeroSection from "@/component/homepage/HeroSection";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiClient2 } from "@/lib/api-client";
import { toast } from "react-toastify";
import { setToken, setUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CommonBanner1 from "@/common-component/CommonBanner1/CommonBanner1";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await apiClient2.post("/authsishko/register", {
        name: data.fullName,
        email: data.email,
        password: data.password,
        mobile_no: data.mobile,
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

      toast.success("Account created successfully!");
      console.log("Registration successful:", response.data);

      // Redirect to login page or home
      router.push("/login");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <CommonBanner1 title={"Signup"} breadcom={[{ title: "Signup" }]} />
      <div className=" bg-[#f5f7fb] flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-8 border border-gray-200">
          <h2 className="dm_sans responsiveheading2  font-semibold! text-center">{`Create Account`}</h2>
          <p className="text-center text-gray-500 mt-1 responsive-text dm_sans">
            {` Already have an account?`}{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline">{`Login`} </Link>
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <label className="dm_sans responsive-text text-gray-500">{`Full Name`}</label>
            <CustomInput
              name="fullName"
              placeholder="Enter your full name"
              register={register}
              errors={errors}
              validateRules={{ required: "Full Name is required" }}
              className="border-1 border-gray-500 "
            />
            <label className="dm_sans responsive-text text-gray-500">{`Email Address`}</label>
            <CustomInput
              name="email"
              type="email"
              placeholder="Enter your email address"
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
            <div>
              <label className="dm_sans responsive-text text-gray-500">{`Mobile Number`}</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  value="+91"
                  readOnly
                  className="w-16 p-3 rounded-lg border border-gray-300 bg-gray-100 text-center"
                />
                <CustomInput
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  register={register}
                  errors={errors}
                  validateRules={{
                    required: "Mobile number is required",
                  }}
                  className="border-1 border-gray-500 flex-1"
                />
              </div>
            </div>
            {/* <CustomInput
              label="Class ID"
              name="classId"
              placeholder="Enter your class ID (optional)"
              register={register}
              errors={errors}
            /> */}
            {/* Gender field - not used in API registration */}
            {/* <div>
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
            </div> */}
            {/* Date of Birth field - not used in API registration */}
            {/* <CustomInput
              label="Date of Birth"
              name="dob"
              type="date"
              register={register}
              errors={errors}
              validateRules={{ required: "Date of Birth is required" }}
            /> */}
            <CustomButton
              type="submit"
              className="w-full  transition font-medium"
              loading={isSubmitting}
              disabled={isSubmitting}>
              {`Sign Up`}
            </CustomButton>
          </form>
          <p className="text-center text-xs text-gray-500 mt-4">
            {`By signing up, you agree to our`}{" "}
            <Link
              href="/terms-and-conditions"
              className="text-blue-600 font-medium hover:underline">
              {`Terms of Service`}{" "}</Link>
            {` and`}{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-600 font-medium hover:underline">{`Privacy Policy`}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
