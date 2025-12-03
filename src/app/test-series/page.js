import CustomButton from '@/common-component/CustomButton/CustomButton';
import HeroSection from '@/component/homepage/HeroSection';
import Link from 'next/link';
import React from 'react';

// Sample data - In real app, fetch from API based on id
const testSeriesDetails = {
  1: { title: "Test Series 1", totalTests: 782, freeTests: 13, languages: "English" },
  2: { title: "Test Series 2", totalTests: 650, freeTests: 20, languages: "English" },
  3: { title: "Test Series 3", totalTests: 480, freeTests: 10, languages: "English" },
};

const testList = [
  { id: 1, name: "Practice Test 1", questions: 50, duration: "60 min", status: "Free" },
  { id: 2, name: "Practice Test 2", questions: 50, duration: "60 min", status: "Free" },
  { id: 3, name: "Mock Test 1", questions: 100, duration: "120 min", status: "Premium" },
  { id: 4, name: "Mock Test 2", questions: 100, duration: "120 min", status: "Premium" },
  { id: 5, name: "Previous Year 2024", questions: 80, duration: "90 min", status: "Free" },
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
    <div className="custom-container m-6 md:m-10">
      <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
        <Link
          href="/navodaya-smartset"
          className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Test Series
        </Link>

        <div className="border rounded-xl p-6 bg-white mt-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {seriesData?.title || "Test Series"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {seriesData?.totalTests} Total Tests • {seriesData?.freeTests} Free Tests
              </p>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {seriesData?.languages}
            </span>
          </div>
          {/* List */}
          <div className="space-y-3">
            {testList.map((test) => (
              <div
                key={test.id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{test.id}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{test.name}</h3>
                    <p className="text-sm text-gray-500">
                      {test.questions} Questions • {test.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      test.status === "Free"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {test.status}
                  </span>
                  <CustomButton color="#71bc42">
                    Start Test
                  </CustomButton>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing 5 of {seriesData?.totalTests} tests
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Load More Tests →
            </button>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default TestSeriesPage;