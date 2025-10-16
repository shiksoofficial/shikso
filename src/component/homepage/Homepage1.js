import React from 'react'
import { MdHome, MdPerson, MdSettings } from 'react-icons/md'
const data = [
  {
    id: 1,
    title: "Indoor Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.",
    icon: <MdHome color="#fff" size={30} />,
    color:"#fd4d40"
  },
  {
    id: 2,
    title: "Indoor Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.",
    icon: <MdPerson color="#fff" size={30} />,
    color:"#fdb62f"
  },
  {
    id: 3,
    title: "Indoor Games",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.",
    icon: <MdSettings color="#fff" size={30} />,
    color:"#16c3b0"
  },
]

const Homepage1 = () => {
  return (
    <div className='custom-container my-10 md:my-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 '>
        {data?.map((val) => <div key={val.id}>
          <div style={{backgroundColor:val.color}} className='px-7 py-10'>
            <div style={{backgroundColor:val.color}} className='size-15 justify-self-center rounded-full flex justify-center items-center mt-[-70px]'>{val.icon}</div>
            <p className='text-white font-medium text-center mb-2'>{val.title}</p>
            <p className='text-slate-200 text-center'>{val.description}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Homepage1