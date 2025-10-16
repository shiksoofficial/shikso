import Card1 from '@/common-component/Card1/Card1';
import React from 'react';

const cardsData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    title: "Indoor Games",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
    buttonText: "Learn More",
    color: "#dc3545",
    colour: "#dc3545"
  },
  {
    id: 2,
    icon: "/aboutus/about-3-2.svg",
    title: "Outdoor Game and Event",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
    buttonText: "Learn More",
    color: "#ffc107"
  },
  {
    id: 3,
    icon: "/aboutus/about-3-3.svg",
    title: "Camping for Kids",
    description:
      "Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?",
    buttonText: "Learn More",
    color: "#71bc42"
  },
];

const About3 = () => {
  return (
    <div className="bg-[#17a2b8] p-2">
      <div className="custom-container mt-6 md:mt-10 text-center">
        <p className="indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5">
          {` Packages You Like`}  </p>
        <h2 className="dm_sans responsiveheading2 text-white font-light mb-2 lg:mb-8 leading-1.5 ">
          {` Our Packages`}
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {cardsData.map((item, index) => (
            <Card1
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              buttoncolor={item.color}
              tittlecolor={item.color}
              index={index}


            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About3;
