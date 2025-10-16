import CustomButton from '@/common-component/CustomButton/CustomButton'
import CustomInput from '@/common-component/CustomInput'
import Testimonial from '@/common-component/Testimonial/Testimonial'
import HeroSection from '@/component/homepage/HeroSection'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactUs = () => {
    return (
      <>
        <div className='bg-slate-100'>
            <HeroSection imageurl="https://i.pinimg.com/1200x/5a/a3/63/5aa3639eab9fc1a7c6efc97f98502ed9.jpg" title="Welcome To Our Website" title2="Get In Touch" button={false} />
            <div className='custom-container py-6 md:py-10'>
                <h2 className='responsiveheading2 text-center'>{`Get In Touch Using The Contact Form`}</h2>
                <p className='max-w-[700px] text-center m-auto mt-2'>{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!`}</p>
            </div>
            <div className='custom-container py-6 md:py-10'>
                <div className='grid grid-cols-12 gap-7'>
                    <div className='col-span-12 md:col-span-8 '>
                        <div className='grid grid-cols-2 gap-x-7 gap-y-4'>
                            <div>
                                <CustomInput
                                    name="firstname"
                                    placeholder="Enter your first name"
                                    // value={form.name}F
                                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    startIcon={<FaUser size={16} />}
                                />
                            </div>
                            <div>
                                <CustomInput
                                    name="lastname"
                                    placeholder="Enter your last name"
                                    // value={form.name}F
                                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    startIcon={<FaUser size={16} />}
                                />
                            </div>
                            <div className='col-span-2'>
                                <CustomInput
                                    name="email"
                                    placeholder="Enter your Email"
                                    // value={form.name}F
                                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    startIcon={<MdEmail size={16} />}
                                />
                            </div>
                            <div className='col-span-2'>
                                <CustomInput
                                    name="email"
                                    // value={form.name}F
                                    // onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Write your message..."
                                    multiline
                                    rows={8}
                                />
                            </div>
                            <CustomButton color='#dc3545' height='35px'>SEND MESSAGE</CustomButton>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-4 p-10 bg-white'>
                        <h3 className='responsiveheading2 mb-5'>{`Contact Info`}</h3>
                        <p className='mt-3'>{`Address:`}</p>
                        <p className='text-slate-500'>{`34 Street Name, City Name Here, United States`}</p>
                        <p className='mt-3'>{`Phone:`}</p>
                        <p className='text-slate-500'>{`+1 242 4942 290`}</p>
                        <p className='mt-3'>{`Email:`}</p>
                        <p className='text-slate-500'>{`info@yourdomain.com`}</p>
                    </div>
                </div>
            </div>
        </div>
        <Testimonial/>
        </>

    )
}

export default ContactUs