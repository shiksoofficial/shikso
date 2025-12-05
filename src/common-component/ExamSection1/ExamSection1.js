"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TestSeriesCard from "@/common-component/TestSeriesCard/TestSeriesCard";

const ExamSection1 = ({
  title = "Exam Title",
  overviewText = "",
  examInfo = {},
  testSeriesData = [],
  tabs = [
    { id: "overview", label: "Overview" },
    { id: "examInfo", label: "Exam Info" },
    { id: "testSeries", label: "Test Series" },
  ],
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  const handleViewMore = (page) => {
    router.push(page);
  };

  return (
    <div className="custom-container m-6 md:m-10">
      <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h1>
        {/* Tabs Navigation */}
        <div className="border-b border-gray-300 mt-8">
          <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`pb-2 cursor-pointer transition-all duration-200 ${activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-600"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
              <p>{overviewText}</p>
            </div>
          )}
          {/* Exam Info */}
          {activeTab === "examInfo" && (
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {examInfo.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {examInfo.sections?.map((section, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 border-gray-300"
                  >
                    <h3 className="font-semibold text-gray-800">{section.heading}</h3>
                    <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Test Series */}
          {activeTab === "testSeries" && (
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
  );
};

export default ExamSection1;
