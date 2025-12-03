import CommonTestList from '@/common-component/CommonTestList/CommonTestList';
import CustomButton from '@/common-component/CustomButton/CustomButton';
import HeroSection from '@/component/homepage/HeroSection';
import Link from 'next/link';
import React from 'react';

const testSeriesDetails = {
  1: { title: "Test Series 1", totalTests: 782, freeTests: 13, languages: "English" },
  2: { title: "Test Series 2", totalTests: 650, freeTests: 20, languages: "English" },
  3: { title: "Test Series 3", totalTests: 480, freeTests: 10, languages: "English" },
};

const testList = [
  { id: 1, name: "Practice Test 1", questions: 50, duration: "60 min", status: "Free", componentPath: "/mock-test", },
  { id: 2, name: "Practice Test 2", questions: 50, duration: "60 min", status: "Free", componentPath: "/mock-test/test1", },
  { id: 3, name: "Mock Test 1", questions: 100, duration: "120 min", status: "Premium", componentPath: "/mock-test/test1", },
  { id: 4, name: "Mock Test 2", questions: 100, duration: "120 min", status: "Premium", componentPath: "/mock-test/test1", },
  { id: 5, name: "Previous Year 2024", questions: 80, duration: "90 min", status: "Free", componentPath: "/mock-test/test1", },
];

const TestSeriesPage = ({ params }) => {
  const { id } = params;
  const seriesData = testSeriesDetails[id] || testSeriesDetails[1];

  return (
    <>
      <HeroSection imageurl="/aboutus/hero_1.jpg"
        title="Welcome To Our Website"
        title2="Get In Touch"
        button={false} breadcom={[{ title: "Novadaya SmartSet" }]} />
     

          <CommonTestList
            title={seriesData.title}
            totalTests={seriesData.totalTests}
            freeTests={seriesData.freeTests}
            languages={seriesData.languages}
            testList={testList}
            showingCount={testList.length}
            startTestUrl="/mock-test"
          />
    </>
  );
};

export default TestSeriesPage;