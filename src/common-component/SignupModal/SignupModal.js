"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../../common-component/CustomButton/CustomButton";
import CustomInput from "@/common-component/CustomInput";
import { apiClient2 } from "@/lib/api-client";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { setToken, setUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

const SignupModal = ({ open, setOpen, onSwitchToLogin }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const handleSwitchToLogin = () => {
    reset();
    setOpen(false);
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await apiClient2.post("/authsishko/register", {
        name: data.fullName,
        email: data.email,
        password: data.password,
        mobile_no: data.mobile,
      });

      // Store token if present in response
      const token =
        response?.data?.token ||
        response?.data?.access_token ||
        response?.data?.data?.token;
      if (token) {
        setToken(token);
      }

      // Store user data if present in response
      const userData =
        response?.data?.user ||
        response?.data?.data?.user ||
        response?.data?.data;
      if (userData) {
        setUser(userData);
      }

      toast.success("Account created successfully!");
      reset();
      handleClose();

      // Redirect to profile or home
      router.push("/profile");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center">
      {/* Backdrop/Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative z-50 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-3 sm:right-4 text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-100 rounded-full p-1 z-10"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>

          {/* Modal Content */}
          <div className="p-6 md:p-8">
            
            <h2 className="text-center dm_sans responsiveheading2 font-semibold text-gray-900 mb-1">
              {`Create Account`}
            </h2>
            <p className="text-center text-gray-500 dm_sans responsive-text mb-6">
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleSwitchToLogin}
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </button>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                validateRules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                }}
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
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                }
              />
              <div>
                <label className="dm_sans responsive-text font-medium text-gray-700">
                  Mobile Number
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value="+91"
                    readOnly
                    className="w-16 p-3 rounded-lg border border-gray-300 bg-gray-100 text-center dm_sans responsive-text"
                  />
                  <CustomInput
                    name="mobile"
                    placeholder="Enter your mobile number"
                    register={register}
                    errors={errors}
                    validateRules={{
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit mobile number",
                      },
                    }}
                    className="flex-1"
                  />
                </div>
              </div>
              <CustomButton
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition font-medium"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Sign Up
              </CustomButton>
            </form>
            <p className="dm_sans text-center text-xs text-gray-500 mt-4">
              By signing up, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="text-blue-600 font-medium hover:underline"
              >
                Terms of Service{" "}
              </Link>
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
