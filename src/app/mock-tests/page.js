import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import Mocktests1 from '@/component/mocktests/mocktests1'
import React from 'react'

const page = () => {
  return (
    <>
     <CommonBanner1
        title={"Navodaya Mock Test, Practice for Class 6 & 9"}
        paraghraph={"Step into smart learning with Shikso’s Navodaya mock tests — real exam practice, instant analytics, and a child-friendly platform to help every student shine."}
        breadcom={[{ title: "Mock Tests" }]} />
        <Mocktests1 />
    </>
  )
}

export default page