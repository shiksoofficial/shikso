import CommonCard2 from '@/common-component/CommonCard2/CommonCard2';
import React from 'react'

const cardsData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    founder: "Founder",
    title: "1- Gamified Learning Platform",
    points: [
      "Earn badges and streaks for consistency.",
      "Unlock levels as you master subjects.",
      "Celebrate every milestone with rewards.",
    ],
  },
  {
    id: 2,
    icon: "/aboutus/about-3-1.svg",
    founder: "Founder",
    title: "2- AI Powered Education Platform",
    points: [
      "Detects weak areas and recommends focused topics.",
      "Adjusts difficulty levels based on performance.",
      "Data-driven insight that enhances every learning experience.",
    ],
  },
  {
    id: 3,
    icon: "/aboutus/about-3-1.svg",
    founder: "Founder",
    title: "3- Adaptive Learning Platform",
    points: [
      "Suggests quick videos to close knowledge gaps",
      "Unlimited topic-wise questions",
      "Analytics and dashboards to measure results.",
    ],
  },
];

const About2 = () => {
  return (
    <div className="bg-[#20c997] p-2">
      <div className="custom-container mt-6 md:mt-10 text-center">
        <p className="indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5">
          {`Why Choose Shikso`}  </p>
        <h2 className="dm_sans responsiveheading2 text-white font-light  leading-1.5 mb-16 ">
          {` Why Parents and Students Trust Shikso`}
        </h2>
        {/* <p className="dm_sans responsive-text font-light mb-20 leading-1.5 ">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!`}</p> */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mb-10">
          {cardsData.map((item) => (
            <CommonCard2
              key={item.id}
              icon={item.icon}
              title={item.title}
              points={item.points}
              description={item.description}
              founder={item.founder}

            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About2