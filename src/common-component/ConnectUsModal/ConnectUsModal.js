"use client"
import React from 'react'
import CustomButton from '../../common-component/CustomButton/CustomButton'
import CustomInput from '@/common-component/CustomInput'
import { apiClient } from '@/lib/api-client'
import { useForm } from 'react-hook-form'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { toast } from 'react-toastify'

const ConnectUsModal = ({ open, setOpen }) => {
    const handleClose = () => {
        reset();
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const onSubmit = async (data) => {
        const payload = {
            fullName: `${data.firstname} ${data.lastname}`,
            phoneNo: "",
            email: data.email,
            message: data.message,
            sourcePage: "travel",
        }
        console.log(payload)
        try {
            const res = await apiClient.post("inquiryform/ed_tech", payload);
            console.log(res)
            toast.success(res?.data?.message)
            reset();
            handleClose();
        } catch (error) {
            console.log(error?.response?.data?.message);
            toast.error(error?.response?.data?.message);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-500 flex items-center justify-center">
            {/* Backdrop/Overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Container */}
            <div className="relative z-50 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                <div className="bg-slate-100 rounded-lg shadow-2xl">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-3 sm:right-4 text-gray-600 hover:text-gray-900 transition-colors   hover:bg-white z-10"
                        aria-label="Close modal"
                    >
                        <IoClose size={24} />
                    </button>

                    {/* Modal Content */}
                    <div className="p-6 md:p-8 w-fit m-auto">
                        <h2 className="dm_sans  responsiveheading6 text-center mb-1 ">
                            {`Get In Touch Using The Contact Form`}
                        </h2>

                        <div className="custom-container py-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-4">
                                    <div>
                                        <CustomInput
                                            name="firstname"
                                            placeholder="Enter your first name"
                                            startIcon={<FaUser size={16} />}
                                            register={register}
                                            validateRules={{
                                                required: "Firstname is required",
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            name="lastname"
                                            placeholder="Enter your last name"
                                            startIcon={<FaUser size={16} />}
                                            register={register}
                                            validateRules={{
                                                required: "Lastname is required",
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-span-1 sm:col-span-2">
                                        <CustomInput
                                            name="email"
                                            placeholder="Enter your Email"
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
                                        />
                                    </div>
                                    <div className="col-span-1 sm:col-span-2">
                                        <CustomInput
                                            name="message"
                                            placeholder="Write your message..."
                                            multiline
                                            rows={8}
                                            register={register}
                                            validateRules={{
                                                required: "Message is required",
                                            }}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-span-1 sm:col-span-2">
                                        <CustomButton
                                            loading={isSubmitting}
                                            type="submit"
                                            color="#dc3545"
                                            height="35px"
                                        >
                                            SEND MESSAGE
                                        </CustomButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectUsModal