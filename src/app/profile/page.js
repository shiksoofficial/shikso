"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/component/homepage/HeroSection";
import CustomButton from "@/common-component/CustomButton/CustomButton";
import { apiClient2 } from "@/lib/api-client";
import { toast } from "react-toastify";
import { clearAuth, getUser, getToken } from "@/lib/auth";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaIdCard,
  FaVenusMars,
  FaUserTie,
  FaCheckCircle,
  FaTimesCircle,
  FaSignOutAlt,
  FaEdit
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdDateRange } from "react-icons/md";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = getToken();
      if (!token) {
        toast.error("Please login to view your profile");
        router.push("/login");
        return;
      }

      // Try to get user data from localStorage first
      const cachedUser = getUser();
      if (cachedUser) {
        setUserData(cachedUser);
        setLoading(false);
      }

      // Fetch fresh data from API
      // Assuming the endpoint is /authsishko/profile or /authsishko/me
      // You may need to adjust this endpoint based on your API
      try {
        const response = await apiClient2.get("/authsishko/profile");
        if (response?.data?.success && response?.data?.data) {
          setUserData(response.data.data);
        }
      } catch (apiError) {
        // If API call fails, use cached data
        console.log("API fetch failed, using cached data:", apiError);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      clearAuth();
      toast.success("Logged out successfully!");
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error during logout");
    } finally {
      setLogoutLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not set";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "Never";
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <>
        <HeroSection
          imageurl="/aboutus/hero_1.jpg"
          title="Welcome to Shikso"
          title2="Your Profile"
          paragraph="Loading your profile information..."
          breadcom={[{ title: "Profile" }]}
        />
        <div className="bg-[#f5f7fb] flex items-center justify-center p-4 min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <HeroSection
          imageurl="/aboutus/hero_1.jpg"
          title="Welcome to Shikso"
          title2="Your Profile"
          paragraph="Profile not found"
          breadcom={[{ title: "Profile" }]}
        />
        <div className="bg-[#f5f7fb] flex items-center justify-center p-4 min-h-[400px]">
          <div className="text-center">
            <p className="text-gray-600 mb-4">{`No profile data found`}</p>
            <CustomButton
              onClick={() => router.push("/login")}
              color="#dc3545">
              Go to Login
            </CustomButton>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection
        imageurl="/aboutus/hero_1.jpg"
        title="Welcome to Shikso"
        title2="Your Profile"
        paragraph="Manage your account information and settings"
        breadcom={[{ title: "Profile" }]}
      />
      <div className="bg-[#f5f7fb] py-8 md:py-12">
        <div className="custom-container">
          {/* Profile Header Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 md:p-8 mb-6 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  {userData.profile_picture ? (
                    <Image
                      src={userData.profile_picture}
                      alt={userData.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span>{userData.name?.charAt(0)?.toUpperCase() || "U"}</span>
                  )}
                </div>
                <button className="absolute bottom-0 right-0 bg-white text-blue-600 rounded-full p-2.5 shadow-lg hover:bg-gray-100 transition transform hover:scale-110">
                  <FaEdit size={16} />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {userData.name || "User"}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
                    {userData.role || "Student"}
                  </span>
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border ${
                    userData.status === "active"
                      ? "bg-green-500/20 border-green-300/50"
                      : "bg-white/10 border-white/20"
                  }`}>
                    {userData.status || "Inactive"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <MdEmail className="text-lg" />
                    <span className="font-medium">{userData.email}</span>
                    {userData.email_verified ? (
                      <FaCheckCircle className="text-green-300" size={16} />
                    ) : (
                      <FaTimesCircle className="text-red-300" size={16} />
                    )}
                  </div>
                  {userData.mobile_no && (
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <MdPhone className="text-lg" />
                      <span className="font-medium">{userData.mobile_no}</span>
                      {userData.mobile_verified ? (
                        <FaCheckCircle className="text-green-300" size={16} />
                      ) : (
                        <FaTimesCircle className="text-red-300" size={16} />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Logout Button */}
              <div>
                <CustomButton
                  onClick={handleLogout}
                  loading={logoutLoading}
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition transform hover:scale-105"
                >
                  <FaSignOutAlt />
                  Logout
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaUser className="text-blue-600 text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Full Name</p>
                  <p className="text-gray-900 font-semibold text-lg">{userData.name || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 font-semibold">{userData.email || "Not set"}</p>
                    {userData.email_verified ? (
                      <FaCheckCircle className="text-green-500" size={16} title="Verified" />
                    ) : (
                      <FaTimesCircle className="text-red-500" size={16} title="Not Verified" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Mobile Number</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-900 font-semibold">{userData.mobile_no || "Not set"}</p>
                    {userData.mobile_verified !== undefined && (
                      userData.mobile_verified ? (
                        <FaCheckCircle className="text-green-500" size={16} title="Verified" />
                      ) : (
                        <FaTimesCircle className="text-red-500" size={16} title="Not Verified" />
                      )
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Date of Birth</p>
                  <p className="text-gray-900 font-semibold">{formatDate(userData.date_of_birth)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Gender</p>
                  <p className="text-gray-900 font-semibold">{userData.gender || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Class ID</p>
                  <p className="text-gray-900 font-semibold">{userData.class_id || "Not assigned"}</p>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-600 text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Address Information</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Address</p>
                  <p className="text-gray-900 font-semibold">{userData.address || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">City</p>
                  <p className="text-gray-900 font-semibold">{userData.city || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">State</p>
                  <p className="text-gray-900 font-semibold">{userData.state || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Pincode</p>
                  <p className="text-gray-900 font-semibold">{userData.pincode || "Not set"}</p>
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaUserTie className="text-purple-600 text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Parent/Guardian Information</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Parent Name</p>
                  <p className="text-gray-900 font-semibold">{userData.parent_name || "Not set"}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Parent Mobile</p>
                  <p className="text-gray-900 font-semibold">{userData.parent_mobile || "Not set"}</p>
                </div>
              </div>
            </div> */}

        
          </div>
        </div>
      </div>
    </>
  );
}


