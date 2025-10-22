'use client'
import CustomButton from '@/common-component/CustomButton/CustomButton'
import React, { useState } from 'react'
import TestPage from './TestPage'

const MockTestList = () => {
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
    <div className="custom-container">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition cursor-pointer"
             onClick={handleStartTest}
          >
          <div className="flex items-center space-x-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dm-sans">{`Mock Test`}</h3>
              <p className="text-gray-600 dm-sans">{`Full length test - 20 minutes`}</p>
            </div>
          </div>
          <CustomButton onClick={handleStartTest}>{`START TEST`}</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default MockTestList