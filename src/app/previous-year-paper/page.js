import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1'
import Paper1 from '@/component/previousyearpapers/Paper1'
import Paper2 from '@/component/previousyearpapers/Paper2'
import React from 'react'

const page = () => {
   
  return (
    <>
            <CommonBanner1
                title={"Navodaya Vidyalaya Previous Year Question Paper"}
                paraghraph={"Every great result starts with smart preparation. Solving Navodaya previous year question papers builds confidence."}
                breadcom={[{ title: "Previous Year Paper" }]}
            />
            {/* <Paper1 />
            <Paper2 /> */}
            </>
  )
}

export default page