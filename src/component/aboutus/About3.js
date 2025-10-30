import CommonCard1 from '@/common-component/CommonCard1/CommonCard1';
import React from 'react';

const cardsData = [
  {
    id: 1,
    icon: "/aboutus/about-3-1.svg",
    title: "Navodaya SmartSet",
    description: "Prepare smarter for the Jawahar Navodaya Vidyalaya Entrance Exam (JNVST) with Shikso’s advanced SmartSet.",
    description1: " Includes previous papers, topic-wise practice, AI analytics, and gamified tests to make preparation easy, engaging, and result-oriented.",
    buttonText: "Explore Navodaya SmartSet",
    link: "/navodaya-smartset",
    color: "#dc3545",
    colour: "#dc3545"
  },
  {
    id: 2,
    icon: "/aboutus/about-3-2.svg",
    title: "Sainik School SmartSet",
    description: "Get exam-ready for AISSEE 2026 using interactive tests, live performance tracking, and daily practice.",
    description1: " Perfect for Class 6 & 9 aspirants — designed to make disciplined learning exciting and measurable.",
    buttonText: "Explore Sainik School SmartSet",
    link: "/sainik-school-smartset",
    color: "#ffc107"
  },
  {
    id: 3,
    icon: "/aboutus/about-3-3.svg",
    title: " School Exam SmartSet",
    description: "Shikso goes beyond entrance exams — our School Exam SmartSet helps CBSE & ICSE students master subjects through personalized question banks, concept quizzes, and analytics-driven improvement.",
    // description1: "“Better learning. Better scores. Better future.”",
    buttonText: "Explore School SmartSet",
    link: "/school-exam-smartset",
    color: "#71bc42"
  },
];

const About3 = () => {
  return (
    <div className="bg-[#17a2b8] p-2">
      <div className="custom-container mt-6 md:mt-10 text-center">
        <h2 className="indie_flower font-light responsiveheading6 text-[#fd4d40] mb-1 leading-1.5">
          {`  Our Smart Learning Bundles`}  </h2>
        <h3 className="dm_sans responsiveheading2 text-white font-light mb-2 lg:mb-8 leading-1.5 ">
          {`  Choose the SmartSet That Fits Your Child’s Goals`}
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {cardsData.map((item, index) => (
            <CommonCard1
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              description1={item.description1}
              buttonText={item.buttonText}
              buttoncolor={item.color}
              tittlecolor={item.color}
              index={index}
              link={item.link}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default About3;
