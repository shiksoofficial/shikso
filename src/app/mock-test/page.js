import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CustomButton from '@/common-component/CustomButton/CustomButton';
import MockTestList from '@/component/mocktest/mockTestList';
import React from 'react'

const MockTest = () => {
  return (
    <>
     <CommonBanner1 title={"MOCK TEST"} breadcom={[  { title: "Mock Test" } ]}/>
        <MockTestList />
          </>
  )
}

export default MockTest;