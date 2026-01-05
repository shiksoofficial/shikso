"use client";

import CommonBanner1 from "@/common-component/CommonBanner1/CommonBanner1";
import CommonTestList from "@/common-component/CommonTestList/CommonTestList";
import React, { useEffect, useState } from "react";
import { apiClient2 } from "@/lib/api-client";

const TestSeriesPage = ({ params }) => {
  const { id } = params; 

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

        console.log("EXAM LIST RESPONSE:", res.data);

        //  API returns object OR array (NO data wrapper)
        const rawData = res.data;
        const exams = Array.isArray(rawData) ? rawData : [rawData];

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
        console.error("API ERROR:", err);
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
        paraghraph="Attempt full-length tests"
        breadcom={[
          { title: "Test Series" },
        ]}
      />

      <CommonTestList
        title={seriesInfo?.title}
        totalTests={seriesInfo?.totalTests}
        freeTests={seriesInfo?.freeTests}
        languages={seriesInfo?.languages}
        testList={testList.map((exam) => ({
          // id: exam.id,
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
