"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TestSeriesCard from '@/common-component/TestSeriesCard/TestSeriesCard';

const testSeriesData = [
  {
    id: 1,
    img: "",
    title: "Test Series 1",
    totalTests: 782,
    freeTests: 13,
    languages: "English",
    category: "Test Series",
    startDate: "25/12/25",
    endDate: "29/12/25",
    moreTests: 429,
    text: "View More",
    page: "/test-series",
  },
  {
    id: 2,
    img: "/img/banking.png",
    title: "Test Series 2",
    totalTests: 650,
    freeTests: 20,
    languages: "English",
    category: "Test Series",
    startDate: "25/12/25",
    endDate: "29/12/25",
    moreTests: 500,
    text: "View More",
    page: "/",
  },
  {
    id: 3,
    img: "/img/railway.png",
    title: "Test Series 3",
    totalTests: 480,
    freeTests: 10,
    languages: "English",
    category: "Test Series",
    startDate: "25/12/25",
    endDate: "29/12/25",
    moreTests: 280,
    text: "View More",
    page: "/",
  },
];

const Section1 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'examInfo', label: 'Exam Info' },
    { id: 'testSeries', label: 'Test Series' },
  ];

  // Handle card button click - Navigate to page
  const handleViewMore = (page) => {
    router.push(page);
  };

  return (
    <>
    <div className="custom-container m-6 md:m-10">
      <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          SSC GD Constable 2026 Exam
        </h1>

        {/* Tabs Navigation */}
        <div className="border-b mt-8">
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 cursor-pointer transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'hover:text-blue-600'
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                SSC GD 2026 Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-7">
                <div>
                  <p>
                    The Staff Selection Commission (SSC) has released the SSC GD
                    Notification 2026 for 25487 Vacancies on 01, December 2025.
                    Aspirants interested in Central Armed Police Forces (CAPFs), NIA,
                    SSF, and Rifleman (GD) in Assam Rifles can apply for the exam.
                  </p>
                  <p className="mt-4">
                    As per the revised SSC exam calendar, the SSC GD Constable
                    application form 2026 will be available from 1st to 31st December
                    2025. The SSC GD Constable exam is scheduled to take place in
                    Feb–April 2026.
                  </p>
                </div>
                <div>
                  <p>
                    Candidates can check the complete SSC GD 2026 exam schedule,
                    eligibility, application process, syllabus, exam pattern, and
                    other key details below.
                  </p>
                  <p className="mt-4">
                    This comprehensive guide provides all the necessary information for
                    aspiring candidates to prepare effectively and stay updated with
                    the latest announcements from the commission.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Exam Info Tab */}
          {activeTab === 'examInfo' && (
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                SSC GD 2026 Exam Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">Exam Pattern</h3>
                    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                      <li>Total Questions: 80</li>
                      <li>Total Marks: 160</li>
                      <li>Duration: 60 minutes</li>
                      <li>Negative Marking: 0.50 marks</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">Syllabus</h3>
                    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                      <li>General Intelligence & Reasoning</li>
                      <li>General Knowledge & Awareness</li>
                      <li>Elementary Mathematics</li>
                      <li>English/Hindi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Test Series Tab */}
          {activeTab === 'testSeries' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testSeriesData.map((item, index) => (
                <TestSeriesCard
                  key={item.id || index}
                  img={item.img}
                  title={item.title}
                  totalTests={item.totalTests}
                  freeTests={item.freeTests}
                  languages={item.languages}
                  category={item.category}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  text={item.text}
                  onClick={() => handleViewMore(item.page)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Section1;