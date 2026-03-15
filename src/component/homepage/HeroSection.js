"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConnectUsModal from "@/common-component/ConnectUsModal/ConnectUsModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ConnectUsModal open={isModalOpen} setOpen={setIsModalOpen} />

      {/* Hero — pt-24/pt-28 accounts for sticky header height */}
      <section
        className="text-white pt-24 md:pt-28 pb-20 px-4 overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #0a1629 0%, #1a2a44 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-black leading-tight font-display">
              Prepare for India's <br />
              <span style={{ color: "#4ED7F2" }}>Top School</span> Entrance Exams
            </h1>
            <p className="text-lg md:text-xl font-medium" style={{ color: "#cbd5e1" }}>
              Navodaya • Sainik School • RMS • NMMS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-lg transition-all hover:brightness-110"
                style={{ backgroundColor: "#F97316", boxShadow: "0 10px 30px rgba(249,115,22,0.2)" }}
              >
                Start Learning Free
              </button>
              <Link
                href="/exam-list"
                className="px-8 py-4 rounded-2xl font-extrabold text-lg shadow-lg transition-all hover:brightness-110 text-center"
                style={{ backgroundColor: "#4ED7F2", color: "#0a1629", boxShadow: "0 10px 30px rgba(78,215,242,0.2)" }}
              >
                Explore Exams
              </Link>
            </div>
          </div>

          {/* Right — decorative illustration placeholder */}
          <div className="relative flex justify-center items-center">
            <div
              className="w-full max-w-[500px] aspect-square rounded-full absolute animate-pulse"
              style={{ backgroundColor: "rgba(78,215,242,0.08)" }}
            />
            <img
              src="https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png"
              alt="Students preparing for exams"
              className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-3xl object-contain aspect-[4/3]"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-y py-8 px-4" style={{ borderColor: "#f1f5f9" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "📄", label: "Previous Year Papers" },
            { icon: "🔔", label: "Exam Updates" },
            { icon: "⚡", label: "Smart Practice" },
            { icon: "💡", label: "Simple Explanations" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: "#f1f5f9" }}
              >
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}