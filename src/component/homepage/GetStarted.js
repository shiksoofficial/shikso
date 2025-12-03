import CustomLinkBtn from '@/common-component/CustomLinkBtn/CustomLinBtn'
import React from 'react'

const GetStarted = () => {
  return (
    <div className='bg-[#ffc107] py-10'>
      <div className='custom-container'>
        <div className='flex justify-between items-center'>
          <p className='dm_sans responsiveheading2 text-white'>{` Transforming Education — One Smart Student at a Time`}</p>
          <CustomLinkBtn href='/about-us' color='#dc3545' height='35px'>{`GET STARTED`}</CustomLinkBtn>
        </div>
      </div>
    </div>
  )
}

export default GetStarted