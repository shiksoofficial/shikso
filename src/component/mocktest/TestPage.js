'use client'
import CommonTestList from '@/common-component/CommonTestList/CommonTestList'
import CustomButton2 from '@/common-component/CustomBotton2/CustomButton2'
import CustomButton from '@/common-component/CustomButton/CustomButton'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const TestPage = () => {
  const [testStarted, setTestStarted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1200) // 20 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showTestList, setShowTestList] = useState(true);

  const mockQuestions = [
    {
      id: 1,
      subject: 'Mathematics',
      question: 'If 15% of a number is 45, what is the number?',
      options: ['250', '300', '350', '400'],
      correct: 1
    },
    {
      id: 2,
      subject: 'Science',
      question: 'Which gas is most abundant in Earth\'s atmosphere?',
      options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
      correct: 1
    },
    {
      id: 3,
      subject: 'Mental Ability',
      question: 'Complete the series: 2, 6, 12, 20, 30, ?',
      options: ['38', '40', '42', '44'],
      correct: 2
    },
    {
      id: 4,
      subject: 'Language',
      question: 'Choose the correctly spelled word:',
      options: ['Accomodation', 'Accommodation', 'Acommodation', 'Acomodation'],
      correct: 1
    },
    {
      id: 5,
      subject: 'Mathematics',
      question: 'The average of 5 consecutive numbers is 18. What is the largest number?',
      options: ['18', '19', '20', '21'],
      correct: 2
    },
    {
      id: 6,
      subject: 'Mathematics',
      question: 'What is the square root of 144?',
      options: ['10', '11', '12', '13'],
      correct: 2
    },
    {
      id: 7,
      subject: 'Science',
      question: 'What is the chemical symbol for Gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correct: 2
    },
    {
      id: 8,
      subject: 'Mental Ability',
      question: 'What comes next: A, C, E, G, ?',
      options: ['H', 'I', 'J', 'K'],
      correct: 1
    },
    {
      id: 9,
      subject: 'Language',
      question: 'What is the plural of \'child\'?',
      options: ['Childs', 'Children', 'Childes', 'Child'],
      correct: 1
    },
    {
      id: 10,
      subject: 'Mathematics',
      question: 'What is 25% of 200?',
      options: ['40', '50', '60', '70'],
      correct: 1
    },
    {
      id: 11,
      subject: 'Science',
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Mercury', 'Earth', 'Mars'],
      correct: 1
    },
    {
      id: 12,
      subject: 'Mental Ability',
      question: 'If a train travels 60 km in 1 hour, how far will it travel in 3 hours?',
      options: ['120 km', '150 km', '180 km', '200 km'],
      correct: 2
    },
    {
      id: 13,
      subject: 'Language',
      question: 'What is the past tense of \'go\'?',
      options: ['Goed', 'Went', 'Gone', 'Going'],
      correct: 1
    },
    {
      id: 14,
      subject: 'Mathematics',
      question: 'What is the value of π (pi) to 2 decimal places?',
      options: ['3.14', '3.15', '3.16', '3.17'],
      correct: 0
    },
    {
      id: 15,
      subject: 'Science',
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correct: 2
    }
  ];

  useEffect(() => {
    let timer;
    if (testStarted && !showResults && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testStarted, showResults, timeLeft]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmitTest = () => {
    setTestStarted(false);
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    mockQuestions.forEach(question => {
      if (answers[question.id] === question.correct) {
        score++;
      }
    });
    return score;
  };

  const handleStartTest = () => {
    setTestStarted(true);
    setTimeLeft(1200); // 20 minutes
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleBackToList = () => {
    setTestStarted(false);
    setShowResults(false);
    setTimeLeft(1200);
    setCurrentQuestion(0);
    setAnswers({});
  };

  // Instructions page
  if (!testStarted && !showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl p-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{`Mock Test Instructions`}</h2>
          <div className="space-y-4 text-gray-700 mb-8">
            <div className="flex items-start space-x-3">
              <p>{`Duration 20 minutes`}</p>
            </div>
            <div className="flex items-start space-x-3">
              <p>{`Questions: ${mockQuestions.length}`}</p>
            </div>
            <div className="flex items-start space-x-3">
              <p>{`Marking:Each question carries 1 mark`}</p>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-gray-700">
              {`  Note:Once you start the test, the timer will begin. 
              You cannot pause the test. Make sure you have a stable internet connection.`}
            </p>
          </div>
          <div className="flex justify-around space-x-4">
            <Link
              href="/navodaya-smartset"
              className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >

              <CustomButton2
                onClick={handleBackToList}
                color='gray'
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Cancel
              </CustomButton2>
            </Link>
            <CustomButton2
              onClick={handleStartTest}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Start Test
            </CustomButton2>
          </div>
        </div>
      </div>
    );
  }

  // Results page
  if (showResults) {
    const score = calculateScore();
    const percentage = (score / mockQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl p-12 max-w-4xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Results</h2>
            <div className="text-6xl font-bold text-indigo-600 mb-2">{score}/{mockQuestions.length}</div>
            <div className="text-2xl text-gray-600 mb-4">{percentage.toFixed(1)}%</div>
            <div className={`text-lg font-semibold ${percentage >= 60 ? 'text-green-600' : 'text-red-600'}`}>
              {percentage >= 60 ? 'Congratulations! You Passed!' : 'Better luck next time!'}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Question Review</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {mockQuestions.map((question, idx) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correct;
                  const correctAnswer = question.options[question.correct];
                  const userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : 'Not answered';

                  return (
                    <div key={question.id} className="p-4 bg-white rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold">Q{idx + 1}</span>
                        <span className={`text-sm font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓ Correct' : '✗ Wrong'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>
                          <span className="font-medium">Your Answer:</span>
                          <span className={`ml-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                            {userAnswerText}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Correct Answer:</span>
                          <span className="ml-1 text-green-600">{correctAnswer}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">{`Performance Summary`}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-semibold">{mockQuestions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Correct Answers:</span>
                  <span className="font-semibold text-green-600">{score}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wrong Answers:</span>
                  <span className="font-semibold text-red-600">{mockQuestions.length - score}</span>
                </div>
                <div className="flex justify-between">
                  <span>Percentage:</span>
                  <span className="font-semibold">{percentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleBackToList}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Back to Tests
            </button>
            <button
              onClick={handleStartTest}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Test page
  const question = mockQuestions[currentQuestion];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-800">Mock Test</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-lg">
                <span className="font-bold text-indigo-600">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-gray-600">
                Question {currentQuestion + 1} of {mockQuestions.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {question.subject}
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {question.question}
            </h3>
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(question.id, idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${answers[question.id] === idx
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                  }`}
              >
                <span className="font-semibold text-gray-700">
                  {String.fromCharCode(65 + idx)}.
                </span>{' '}
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50 hover:bg-gray-300 transition text-sm"
              >
                ← Previous
              </button>

              {currentQuestion < mockQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition text-sm"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-sm"
                >
                  Submit Test
                </button>
              )}
            </div>

            {/* Question Navigation Grid */}
            <div className="w-full">
              <div className="text-center mb-3">
                <span className="text-sm text-gray-600">
                  Jump to Question: <span className="font-semibold">{currentQuestion + 1} of {mockQuestions.length}</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-1 max-h-32 overflow-y-auto">
                {mockQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`w-7 h-7 text-xs rounded-md font-semibold transition ${idx === currentQuestion
                        ? 'bg-indigo-600 text-white'
                        : answers[mockQuestions[idx].id] !== undefined
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h4 className="font-semibold text-gray-800 text-center sm:text-left">Progress & Navigation</h4>
              <div className="text-center sm:text-right">
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-indigo-600">
                    {Object.keys(answers).length} / {mockQuestions.length}
                  </span> answered
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                  <span className="text-gray-600">Not Answered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-600">Current</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage