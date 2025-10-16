import About1 from '@/component/aboutus/About1'
import About2 from '@/component/aboutus/About2'
import About3 from '@/component/aboutus/About3'
import HeroSection from '@/component/homepage/HeroSection'

import React from 'react'

const AboutPage = () => {
  return (
    <>
     <HeroSection imageurl="/aboutus/hero_1.jpg" title="Welcome To Our Website" title2="About Us"/>
    <About1 />
    <About2 />
    <About3 />
    </>
  )
}

export default AboutPage