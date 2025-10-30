import CustomButton from '../../common-component/CustomButton/CustomButton'
import React from 'react'

const GetStarted = () => {
  return (
    <div className='bg-[#ffc107] py-10'>
      <div className='custom-container'>
        <div className='flex justify-between items-center'>
          <p className='dm_sans responsiveheading2 text-white'>{` Transforming Education — One Smart Student at a Time`}</p>
          <CustomButton color='#dc3545' height='35px'>{`GET STARTED`}</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default GetStarted