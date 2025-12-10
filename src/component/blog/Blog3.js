import Image from 'next/image'
import React from 'react'

const Blog3 = () => {
    return (
        <div className="bg-[#E5FBFF]">
            <div className="custom-container py-6 md:py-10">
                <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-12 sm:col-span-6 flex justify-center sm:justify-start">
                        <Image
                            src="/blog.webp"
                            alt="Blog section image"
                            width={440}
                            height={320}
                        />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <div className="flex gap-2 items-center mt-8 mb-5">
                            <div className="w-[20px] h-[35px] bg-[#FFF46C] rounded-r-full"></div>
                            <h2 className="responsiveheading2">{`Why Read the Shikso Blog?`}</h2>
                        </div>
                        <p className="dm_sans responsive-text text-[#484545]">
                            {`Why Read the Shikso Blog? Because the future of education is being written today, in every classroom, on every screen, and through every curious learner. At Shikso, we make learning fun, futuristic, and full of possibilities.`}
                        </p>
                        <p className="dm_sans responsive-text text-[#484545] mt-4"> {`Stay tuned. Stay inspired.`} </p>
                        <p className="dm_sans responsive-text text-[#484545] font-extrabold! ">{` Shikso – Practice `}<span className='text-[#FFF46C] '>{` | `}</span>  {` Learn `} <span className='text-[#FFF46C]'>{` | `}</span>  {` Evolve `}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog3;
