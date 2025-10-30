"use client"
import React from 'react'
import CustomButton from '../../common-component/CustomButton/CustomButton'
import CustomInput from '@/common-component/CustomInput'
import { apiClient } from '@/lib/api-client'
import { useForm } from 'react-hook-form'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactForm = () => {
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
      alert(res?.data?.message)
      reset();
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
    }
  };
  return (
    <div className='bg-slate-100'>
      <div className='custom-container py-6 md:py-10'>
        <h2 className='dm_sans responsiveheading2 text-center'>{`Get In Touch With Shikso`}</h2>
        <p className='max-w-[700px] text-center m-auto mt-2'>{`At Shikso, we believe education should be fun, futuristic, and accessible to every learner. Whether you’re a parent, student, or school, our team is here to assist you with personalized solutions and guidance.`}</p>
        <p className='max-w-fit text-center m-auto mt-2'>{` Please fill out the contact form below — we’ll get back to you as soon as possible.`}</p>
      </div>
      <div className='custom-container py-6 md:py-10'>
        <div className='grid grid-cols-12 gap-7'>
          <div className='col-span-12 lg:col-span-8 '>
            <form
              onSubmit={handleSubmit(onSubmit)}
            // className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md space-y-5"
            >
              <div className='grid grid-cols-2 gap-x-7 gap-y-4'>
                <div>
                  <CustomInput
                    name="firstname"
                    placeholder="Enter your first name"
                    // value={form.name}F
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                    // value={form.name}F
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                    startIcon={<FaUser size={16} />}
                    register={register}
                    validateRules={{
                      required: "Lastname is required",
                    }}
                    errors={errors}
                  />
                </div>
                <div className='col-span-2'>
                  <CustomInput
                    name="email"
                    placeholder="Enter your Email"
                    // value={form.name}F
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                <div className='col-span-2'>
                  <CustomInput
                    name="message"
                    // value={form.name}F
                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                <CustomButton loading={isSubmitting} type='submit' color='#dc3545' height='35px'>SEND MESSAGE</CustomButton>
              </div>
            </form>
          </div>

          <div className='col-span-12 lg:col-span-4 p-10 bg-white'>
            <h3 className='dm_sans responsiveheading2 mb-5'>{`Contact Info`}</h3>
            <p className='mt-3'>{`Address:`}</p>
            <p className='dm_sans text-slate-500'>{` FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016`}</p>
            <p className='mt-3'>{`Phone:`}</p>
            <p className='dm_sans text-slate-500'>{` +91 7974186754`}</p>
            <p className='mt-3'>{`Email:`}</p>
            <p className='dm_sans text-slate-500'>{` info@shikso.com (you can update when finalized)`}</p>
            <p className='mt-3'>{`Working Hours:`}</p>
            <p className='dm_sans text-slate-500'>{` Monday – Friday: 8:00 AM – 6:00 PM
                                Saturday: 9:00 AM – 2:00 PM
                                  Sunday: Closed`}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactForm