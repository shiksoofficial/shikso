"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TestSeriesCard from '@/common-component/TestSeriesCard/TestSeriesCard';
import { apiClient2 } from "@/lib/api-client";

const SmallLoader = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
};

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

  const [data, setData] = useState(null);
  const [seriesList, setSeriesList] = useState([]);

  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingSeries, setLoadingSeries] = useState(false);

  const [error, setError] = useState("");

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'examInfo', label: 'Exam Info' },
    { id: 'testSeries', label: 'Test Series' },
  ];

  const handleViewMore = (slug) => {
    router.push(`/test-series/${slug}`);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await apiClient2.get("/examcategory/exam-category");

        const categoryData = Array.isArray(res.data?.data)
          ? res.data.data[0]
          : res.data?.data;

        setData(categoryData || null);
      } catch (err) {
        setError("Failed to load category");
      } finally {
        setLoadingCategory(false);
      }
    };

    fetchCategory();
  }, []);

  /* ================= FETCH SERIES ONLY WHEN TAB OPENS ================= */
  useEffect(() => {
  if (activeTab !== "testSeries" || seriesList.length > 0) return;

  const fetchSeries = async () => {
    setLoadingSeries(true);
    try {
      const res = await apiClient2.get("/exam-series/series-list");
      const rawData = res.data?.data;
      const finalSeries = Array.isArray(rawData) ? rawData : [];

      setSeriesList(finalSeries);
    } catch (err) {
      setError("Failed to load test series");
    } finally {
      setLoadingSeries(false);
    }
  };

  fetchSeries();
}, [activeTab, seriesList.length]);


  /* ================= ERROR ================= */
  if (error) {
    return (
      <div className="custom-container p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="custom-container m-6 md:m-10">
        <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {loadingCategory ? "Loading..." : data?.category_name}
          </h2>

          {/* Tabs Navigation */}
          <div className="border-b mt-8">
            <ul className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 cursor-pointer transition-all duration-200 ${activeTab === tab.id
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
                  {data?.category_name || "Overview"}
                </h2>
                <p className="text-gray-700">
                  {data?.short_description || "No overview available"}
                </p>
              </div>
            )}

            {/* Exam Info Tab */}
            {activeTab === "examInfo" && (
              <div className="border rounded-xl p-6 bg-white">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {data?.category_name || "Overview"}
                </h2>
                {data?.syllabus ? (
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: data.syllabus }}
                  />
                ) : (
                  <p>{`No syllabus available`}</p>
                )}
              </div>
            )}

            {/* Test Series Tab */}
            {activeTab === "testSeries" && (
              <>
                {loadingSeries ? (
                  <SmallLoader />
                ) : seriesList.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {seriesList.map((item) => (
                      <TestSeriesCard
                        key={item.id}
                        img={item.image_url || "/img/default-series.png"}
                        title={item.series_name}
                        totalTests={item.total_exams}
                        freeTests={item.is_free ? item.total_exams : 0}
                        languages="English"
                        category={item.category?.category_name || "Test Series"}
                        startDate={item.start_date}
                        endDate={item.end_date}
                        text="View More"
                        onClick={() => handleViewMore(item.slug || item.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600">{` No test series available`} </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;