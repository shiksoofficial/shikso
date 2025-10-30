import React from 'react'
import { MdHome, MdPerson, MdSettings } from 'react-icons/md'
const data = [
  {
    id: 1,
    title: "Smart Learning Experience",
    description: "Unlock your child’s potential with a modern learning system that turns study time into playtime. Interactive lessons, daily practice sets, and quizzes make learning enjoyable while improving focus and retention.",
    icon: <MdHome color="#fff" size={30} />,
    color: "#fd4d40"
  },
  {
    id: 2,
    title: "AI-Based Personalization",
    description: "Every child learns differently — and Shikso understands that. Our AI-based personalized learning engine adapts to each student’s strengths and weaknesses, delivering customized practice and insights for smarter growth.",
    icon: <MdPerson color="#fff" size={30} />,
    color: "#fdb62f"
  },
  {
    id: 3,
    title: "Real-Time Progress Tracking",
    description: "With Shikso’s live analytics dashboard, parents and teachers can track student progress in real-time. See strengths, weak areas, and performance trends — ensuring every learner stays on the right path.",
    icon: <MdSettings color="#fff" size={30} />,
    color: "#16c3b0"
  },
]

const Homepage1 = () => {
  return (
    <div className='custom-container my-10 md:my-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 '>
        {data?.map((val) => <div key={val.id}>
          <div style={{ backgroundColor: val.color }} className='px-7 py-10'>
            <div style={{ backgroundColor: val.color }} className='size-15 justify-self-center rounded-full flex justify-center items-center mt-[-70px]'>{val.icon}</div>
            <p className='dm_sans text-white font-medium text-center mb-2'>{val.title}</p>
            <p className='dm_sans text-slate-200 text-center'>{val.description}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Homepage1