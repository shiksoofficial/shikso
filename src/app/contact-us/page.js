import Contact1 from '@/component/contactus/Contact1'
import HeroSection from '@/component/homepage/HeroSection'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
          <HeroSection imageurl="/aboutus/hero_1.jpg" title="Contact" title2="Get In Touch"/>
        <Contact1 />
    </div>
  )
}

export default ContactPage