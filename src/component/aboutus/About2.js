import CommonCard2 from '@/common-component/CommonCard2/CommonCard2';
import React from 'react'

const cardsData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
 {
    id: 2,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
  {
    id: 3,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
  {
    id: 4,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
  {
    id: 5,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
  {
    id: 6,
    icon: "/aboutus/about-3-1.svg",
    founder:"Founder",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
  },
];

const About2 = () => {
    return (
        <div className="bg-[#20c997] p-2">
            <div className="custom-container mt-6 md:mt-10 text-center">
                <p className="indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5">
                    {` The Team`}  </p>
                <h2 className="dm_sans responsiveheading2 text-white font-light mb-2 leading-1.5 ">
                    {` Meet The Team`}
                </h2>
                <p className="dm_sans responsive-text font-light mb-20 leading-1.5 ">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!`}</p>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mb-10">
                    {cardsData.map((item) => (
                        <CommonCard2
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
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