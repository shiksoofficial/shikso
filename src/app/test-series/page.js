"use client";
import CommonBanner1 from '@/common-component/CommonBanner1/CommonBanner1';
import CommonTestList from '@/common-component/CommonTestList/CommonTestList';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiClient2 } from "@/lib/api-client";

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
  { id: 6, name: "Practice Test 1", questions: 50, duration: "60 min", status: "Free", componentPath: "/mock-test", },
  { id: 7, name: "Practice Test 2", questions: 50, duration: "60 min", status: "Free", componentPath: "/mock-test/test1", },
  { id: 8, name: "Mock Test 1", questions: 100, duration: "120 min", status: "Premium", componentPath: "/mock-test/test1", },
  { id: 9, name: "Mock Test 2", questions: 100, duration: "120 min", status: "Premium", componentPath: "/mock-test/test1", },
  { id: 10, name: "Previous Year 2024", questions: 80, duration: "90 min", status: "Free", componentPath: "/mock-test/test1", },
];

const TestSeriesPage = ({ params }) => {
  const { id } = params;
  // const seriesData = testSeriesDetails[id] || testSeriesDetails[1];

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [seriesInfo, setSeriesInfo] = useState(null);
  const [testList, setTestList] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await apiClient2.get("/exam/exam-list", {
          params: { series_id: id },
        });

        console.log("EXAM LIST RESPONSE", res.data);

        const exams = Array.isArray(res.data?.data)
          ? res.data.data
          : [];

        setTestList(exams);

        // derive series info from first exam
        if (exams.length > 0) {
          const first = exams[0];

          setSeriesInfo({
            title: first.series?.series_name || "Test Series",
            totalTests: exams.length,
            freeTests: exams.filter((e) => e.is_free).length,
            languages: "English",
          });
        }
      } catch (err) {
        console.error("API ERROR ", err);
        setError("Failed to load exams");
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [id]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error) {
    return (
      <div className="p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <CommonBanner1
        imageurl="/aboutus/hero_1.jpg"
        title={seriesInfo?.title || "Test Series"}
        paraghraph="Attempt full-length  tests"
        breadcom={[
          // { title: "Home", path: "/" },
          { title: "Test Series" },
        ]}
      />


      <CommonTestList
        title={seriesInfo?.title}
        totalTests={seriesInfo?.totalTests}
        freeTests={seriesInfo?.freeTests}
        languages={seriesInfo?.languages}
        testList={testList.map((exam) => ({
          id: exam.id,
          name: exam.name || "Untitled Test",
          questions: exam.total_questions,
          duration: `${exam.duration_minutes} min`,
          status: exam.is_free ? "Free" : "Premium",
          componentPath: `/mock-test/${exam.id}`,
        }))}
        showingCount={testList.length}
        startTestUrl="/mock-test"
      />
    </>
  );
};

export default TestSeriesPage;