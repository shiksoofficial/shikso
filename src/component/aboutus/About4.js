import CustomInput from '@/common-component/CustomInput'
import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn'
import React from 'react'

const About4 = () => {
    return (
        <div >
            <div className="custom-container mt-6 md:mt-10 text-left">
                <div className='mb-10'>
                    <h2 className="dm_sans responsiveheading2 text-black font-light mb-2  leading-1.5 text-center">
                        {`Empowering Every Student with Intelligent Education`}
                    </h2>
                    <p className="dm_sans font-light responsive-text text-black mb-1 leading-1.5 text-left">
                        {`Our mission is to make modern education accessible, data-driven, and enjoyable. Shikso bridges the gap between rural and urban learning by offering a platform that works on mobile, supports low-internet speeds, and encourages consistent growth through daily practice and real-time AI insights.`}  </p>
                    <p className="dm_sans font-light responsive-text text-black mb-1 leading-1.5 text-center">
                        {`“From small towns to big cities, Shikso is shaping the future of learning.”`}
                    </p>
                </div>

                <div className='mb-10'>
                    <h2 className="dm_sans responsiveheading2 text-black font-light mb-2  leading-1.5 text-center">
                        {` Practice. Analyze. Succeed – with Shikso`}
                    </h2>
                    <p className="dm_sans font-light responsive-text text-black mb-1 leading-1.5 text-left">
                        {`Join thousands of students and parents who trust Shikso for smarter education.Start with a free SmartSet and unlock a world of intelligent, engaging, and measurable learning.`}</p>
                    <div className='w-fit m-auto'>
                        <CustomLinkBtn href="/" >{`Get Started Free`}</CustomLinkBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About4