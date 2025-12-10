import Image from 'next/image';
import React from 'react';

const ContactUs2 = () => {
    return (
        <>
            <div className="custom-container py-6 md:py-10">
                <div className='justify-items-center'>
                    <div className='flex gap-2 w-fit m-auto'>
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h3 className="dm_sans responsiveheading2 flex gap-2 items-center mb-4">{`Reach Us Directly`} </h3>
                    </div>
                    <p className="dm_sans responsive-text text-[#484545]">
                        {`Sometimes, a quick call or visit says more than a thousand messages. We’d love to connect with you, virtually or in person!`} </p>
                </div>
                <div className="grid grid-cols-12 gap-7 mt-8">
                    <div className="col-span-12 sm:col-span-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/aboutus/aboutus1.webp"
                                alt="location icon"
                                width={60}
                                height={60}
                            />
                        </div>
                        <p className="dm_sans mt-3 text-[#484545] responsive-text font-medium">  {` Address :`}</p>
                        <p className="dm_sans text-[#484545]">{` FF12, SRP Arcade, E-5/48, E-5, Arera Colony, Bhopal, Madhya Pradesh 462016`} </p>
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/aboutus/aboutus1.webp"
                                alt="contact icon"
                                width={60}
                                height={60}
                            />
                        </div>
                        <p className="dm_sans mt-3 text-[#484545] responsive-text font-medium"> {` Phone: +91 7974186754`}</p>
                        <p className="dm_sans text-[#484545] responsive-text"> {` Email: info@shikso.com`}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-4 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/aboutus/aboutus1.webp"
                                alt="working hours icon"
                                width={60}
                                height={60}
                            />
                        </div>
                        <p className="dm_sans mt-3 text-[#484545] responsive-text font-medium">{` Working Hours:`} </p>
                        <p className="dm_sans text-[#484545] responsive-text"> {` Monday – Friday: 8:00 AM – 6:00 PM`} </p>
                        <p className="dm_sans text-[#484545] responsive-text"> {`Saturday: 9:00 AM – 2:00 PM`} </p>
                        <p className="dm_sans text-[#484545] responsive-text"> {` Sunday: Closed`} </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#E5FBFF]'>
                <div className="custom-container py-6 md:py-10 ">
                    <div className='flex gap-2 '>
                        <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                        <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-2">{`Get In Touch With Shikso`} </h3>
                    </div>

                    <div className="grid grid-cols-12 gap-4 mt-2">
                        <div className="col-span-12 sm:col-span-6 ">
                            <p className="dm_sans text-[#484545] responsive-text mb-3">{`At Shikso, we’re reimagining education for the future — blending technology, creativity, and compassion.`}</p>
                            <p className="dm_sans text-[#484545] responsive-text">{` If you have questions, ideas, or just want to explore how Shikso can fit into your learning journey — we’re only a message away.`}</p>
                            <p className="dm_sans text-[#484545] responsive-text"><strong className='font-bold'>{`Fill out the form`}</strong>{` , and our team will get back to you faster than your next quiz streak! `}</p>
                        </div>
                        <div className="col-span-12 sm:col-span-6 text-center"></div>
                    </div>
                </div>
            </div>

            <div className="custom-container py-6 md:py-10 justify-items-center">
                <div className='flex gap-2 w-fit m-auto'>
                    <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                    <h3 className="dm_sans responsiveheading2 flex gap-2 items-center  mb-4">{`Let’s Talk. Let’s Imagine. Let’s Build the Future of Learning.`} </h3>
                </div>

                <p className="dm_sans text-[#484545] responsive-text mb-3"><span className='text-[#00D6FF]'>{`Shikso `}</span>{` —  Practice. Play. Progress.`}</p>
                <p className="dm_sans text-[#484545] responsive-text">{`Because every great journey begins with a “Hello.”`}</p>
            </div>

        </>
    );
};

export default ContactUs2;
