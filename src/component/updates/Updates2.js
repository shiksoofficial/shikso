"use client";

import React from "react";
import CustomButton from "../../common-component/CustomButton/CustomButton";
import CustomInput from "@/common-component/CustomInput";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import Image from "next/image";

const Updates2 = () => {
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
        // no API → only console + toast
        console.log("Form Submitted:", data);

        toast.success("Form submitted successfully!");
        reset();
    };

    return (
        <div>
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 gap-7 items-start">
                    <div className="col-span-12 sm:col-span-6">
                        <div className="flex justify-center bg-[#FFF68B66]">
                            <div className="w-[250px] sm:w-full max-w-[415px]">
                                <Image
                                    src="/updates/meeting.png"
                                    alt="Meeting"
                                    width={415}
                                    height={350}
                                    className="w-full h-auto object-contain -mb-18"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="flex gap-2 items-start">
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h3 className="dm_sans responsiveheading2 flex gap-2"> {`Subscribe to Shikso`} </h3>
                        </div>
                        <p className="dm_sans responsive-text text-[#484545] mt-2">{`Get a once-a-week free trial, Practice for free with Shikso.`} </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 mt-6 sm:mt-2 md:mt-6 lg:mt-8">
                                <label>{`Email Address : `}</label>
                                <CustomInput
                                    name="email"
                                    placeholder="Enter your email to subscribe"
                                    startIcon={<MdEmail size={16} />}
                                    register={register}
                                    errors={errors}
                                    validateRules={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Please enter a valid email address",
                                        },
                                    }}
                                    className="border border-gray-300 rounded-md mt-2"
                                />
                            </div>
                            <div className="mb-3 mt-5">
                                <label>{`Credit Card Information : `}</label>
                                <CustomInput
                                    name="cardNumber"
                                    placeholder="Enter your card details for the free trial"
                                    register={register}
                                    errors={errors}
                                    validateRules={{
                                        required: "Card number is required",
                                        pattern: {
                                            value: /^[0-9]{16}$/,
                                            message: "Enter a valid 16-digit card number",
                                        },
                                    }}
                                    className="border border-gray-300 rounded-md mt-2"
                                />
                            </div>

                            {/* <div className="mb-3">
                <CustomInput
                  label="Expiry (MM/YY)"
                  name="expiry"
                  placeholder="08/27"
                  register={register}
                  errors={errors}
                  validateRules={{
                    required: "Expiry date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Format must be MM/YY",
                    },
                  }}
                />
              </div> */}
                            {/* <div className="mb-3">
                <CustomInput
                  label="CVV"
                  name="cvv"
                  placeholder="123"
                  register={register}
                  errors={errors}
                  validateRules={{
                    required: "CVV is required",
                    pattern: {
                      value: /^[0-9]{3,4}$/,
                      message: "Enter a valid CVV",
                    },
                  }}
                />
              </div> */}
                            {/* <div className="mb-3">
                <CustomInput
                  name="message"
                  placeholder="Write your message..."
                  multiline
                  rows={4}
                  register={register}
                  validateRules={{
                    required: "Message is required",
                  }}
                  errors={errors}
                />
              </div> */}
                            <CustomButton
                                loading={isSubmitting}
                                type="submit"
                                className="h-[30px] md:h-[40px] px-9! mt-2 md:mt-8"
                            >
                                {` Start Free Trial`}
                            </CustomButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates2;
