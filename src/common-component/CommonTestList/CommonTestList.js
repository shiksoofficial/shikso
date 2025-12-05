"use client";

import Link from "next/link";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import TestPage from "@/component/mocktest/TestPage";

const CommonTestList = ({
  title = "Test Series",
  totalTests = 0,
  freeTests = 0,
  languages = "",
  testList = [],
  showingCount = 0,
}) => {
  const [currentPage, setCurrentPage] = useState('list')
  const [testStarted, setTestStarted] = useState(false)

  const handleStartTest = () => {
    setCurrentPage('test')
    setTestStarted(false)
  }

  if (currentPage === 'test') {
    return <TestPage />
  }
  return (
     <div className="custom-container m-6 md:m-10">
        <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow ">
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
            {`  Back to Test Series`}
          </Link>
    <div className="border-gray-300 border-1  rounded-xl p-6 bg-white mt-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {totalTests} {`Total Tests •`} {freeTests} {`Free Tests`}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {languages}
        </span>
      </div>
      <div className="space-y-3 ">
        {testList.map((test) => (
          <div
            key={test.id}
            className=" border-1 border-gray-300 flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4 ">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{test.id}</span>
              </div>

              <div>
                <h3 className="font-medium text-gray-800">{test.name}</h3>
                <p className="text-sm text-gray-500">
                  {test.questions}{` Questions •`} {test.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 sm:mt-0">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${test.status === "Free"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                  }`}
              >
                {test.status}
              </span>
              <CustomButton onClick={handleStartTest}>{`START TEST`}</CustomButton>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-300   flex justify-between items-center">
        <p className="text-sm text-gray-500">
         {`Showing `} {showingCount} {` of `} {totalTests} {` tests`}
        </p>

        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Load More Tests →
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CommonTestList;
