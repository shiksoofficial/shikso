"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TestSeriesCard from '@/common-component/TestSeriesCard/TestSeriesCard';
import { apiClient2 } from "@/lib/api-client";
import axios from 'axios'

const SmallLoader = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
};

const Section1 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  const [data, setData] = useState(null);
  const [seriesList, setSeriesList] = useState([]);
  const [allSeries, setAllSeries] = useState([]);

  const [loadingCategory, setLoadingCategory] = useState(true);
  const [loadingSeries, setLoadingSeries] = useState(false);

  const [error, setError] = useState("");

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'examInfo', label: 'Exam Info' },
    { id: 'testSeries', label: 'Test Series' },
  ];

  // Navigate to exam list page with series ID
  const handleViewMore = (seriesId, slug) => {
    const path = slug ? `/test-series` : `/test-series/${seriesId}`;
    router.push(path);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });
  };

  useEffect(() => {
    const fetchCategory = async (data) => {
      try {
        const res = await apiClient2.get("/examcategory/exam-category");
        const categories = res.data?.data;
        const categoryData = Array.isArray(categories) ? categories[0] : null;
        setData(categoryData);
      } catch (err) {
        console.error("Category fetch error:", err);
        setError("Failed to load category");
      } finally {
        setLoadingCategory(false);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    if (activeTab !== "testSeries" || allSeries.length > 0) return;

    const fetchSeries = async () => {
      setLoadingSeries(true);
      try {
        const res = await apiClient2.get("/exam-series/series-list");
        const rawData = res.data;
        const finalSeries = Array.isArray(rawData) ? rawData : [];
        setAllSeries(finalSeries);
      } catch (err) {
        console.error("Series fetch error:", err);
        setError("Failed to load test series");
      } finally {
        setLoadingSeries(false);
      }
    };

    fetchSeries();
  }, [activeTab, allSeries.length]);

  useEffect(() => {
    if (allSeries.length > 0 && data?.id) {
      const filtered = allSeries.filter(
        (series) => series.exam_category_id === data.id
      );
      setSeriesList(filtered);
    } else {
      setSeriesList(allSeries);
    }
  }, [allSeries, data?.id]);

  if (error) {
    return (
      <div className="custom-container p-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="custom-container m-6 md:m-10">
      <div className="mx-auto bg-white p-6 md:p-10 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {loadingCategory ? "Loading..." : data?.category_name || "Category"}
        </h2>

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

          {activeTab === "examInfo" && (
            <div className="border rounded-xl p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {data?.category_name || "Exam Info"}
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

          {activeTab === "testSeries" && (
            <>
              {loadingSeries ? (
                <SmallLoader />
              ) : seriesList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seriesList.map((item) => (
                    <TestSeriesCard
                      key={item.id}
                      img={item.image_url}
                      title={item.series_name}
                      totalTests={item.total_exams}
                      freeTests={item.is_free ? item.total_exams : 0}
                      languages="English"
                      category={item.category?.category_name || "Test Series"}
                      startDate={formatDate(item.start_date)}
                      endDate={formatDate(item.end_date)}
                      text="View More"
                      onClick={() => handleViewMore(item.id, item.slug)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600">{`No test series available for this category`}</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section1;