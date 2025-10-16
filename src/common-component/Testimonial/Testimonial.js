import React from 'react'

const Testimonial = ({ icon, title, partner, description }) => {
    return (
        <div className="max-w-4xl mx-auto bg-[#fd4d40]  shadow p-7 text-center flex flex-col items-center hover:shadow cursor-pointer">
            <div className='flex justify-between'>
                <div className='w-32 flex-initial justify-items-start'>
                    <img src={icon} alt={title} className="w-25 h-25 object-contain" />
                </div>
                <div className='w-64 flex-initial'>
                    <h3 className="dm_sans responsiveheading6 font-semibold mb-5">{title}</h3>
                    <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6! lg:leading-8!'>{partner}</p>
                    <p className='dm_sans responsive-text font-light text-[#6c757d] mb-2 md:mb-3 lg:mb-8 leading-6! lg:leading-8!'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial