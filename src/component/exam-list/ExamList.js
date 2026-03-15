import React from "react";
import Link from "next/link";

const exams = [
  {
    id: 1,
    slug: "navodaya",
    name: "Navodaya Vidyalaya",
    shortName: "JNVST",
    tagline: "Class 6 & Class 9 Lateral Entry",
    description:
      "Jawahar Navodaya Vidyalaya Selection Test is conducted by NVS for admission to free residential schools across India. One of the most prestigious school entrance exams.",
    features: ["Previous Year Papers", "Mock Tests", "Syllabus Guide", "Exam Updates"],
    eligibility: "Class 5 pass (for Class 6) | Class 8 pass (for Class 9)",
    examMonth: "Jan / Apr",
    difficulty: "Moderate",
    difficultyColor: "#16a34a",
    accentColor: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#bfdbfe",
    emoji: "🏫",
    href: "/navodaya-smartset",
    tag: "Most Popular",
    tagBg: "#2563eb",
  },
  {
    id: 2,
    slug: "sainik-school",
    name: "Sainik School",
    shortName: "AISSEE",
    tagline: "Class 6 & Class 9 Admission",
    description:
      "All India Sainik Schools Entrance Examination conducted by NTA. Get admitted to premier residential schools with a focus on military discipline and academic excellence.",
    features: ["Previous Year Papers", "Mock Tests", "Syllabus Guide", "Exam Updates"],
    eligibility: "Age 10–12 years (Class 6) | Age 13–15 years (Class 9)",
    examMonth: "January",
    difficulty: "Moderate–High",
    difficultyColor: "#d97706",
    accentColor: "#16a34a",
    bgColor: "#f0fdf4",
    borderColor: "#bbf7d0",
    emoji: "🎖️",
    href: "/sainik-school-smartset",
    tag: "Highly Competitive",
    tagBg: "#16a34a",
  },
  {
    id: 3,
    slug: "rms",
    name: "Rashtriya Military School",
    shortName: "RMS CET",
    tagline: "Class 6 & Class 9 Admission",
    description:
      "Common Entrance Test for five Rashtriya Military Schools under the Ministry of Defence. Combines academic rigor with physical and military training.",
    features: ["Previous Year Papers", "Mock Tests", "Syllabus Guide", "Exam Updates"],
    eligibility: "Age 10–12 years (Class 6) | Age 13–15 years (Class 9)",
    examMonth: "February",
    difficulty: "High",
    difficultyColor: "#dc2626",
    accentColor: "#7c3aed",
    bgColor: "#faf5ff",
    borderColor: "#e9d5ff",
    emoji: "🛡️",
    href: "/rms-smartset",
    tag: "Defence Track",
    tagBg: "#7c3aed",
  },
  {
    id: 4,
    slug: "nmms",
    name: "NMMS Scholarship",
    shortName: "NMMS",
    tagline: "Class 8 — State Level Scholarship",
    description:
      "National Means-cum-Merit Scholarship is a centrally sponsored scheme to award scholarships to meritorious students of economically weaker sections. ₹12,000/year for 4 years.",
    features: ["Previous Year Papers", "Practice Sets", "Syllabus Guide", "State Updates"],
    eligibility: "Class 7 pass, family income ≤ ₹3.5 lakh/year",
    examMonth: "Nov / Dec",
    difficulty: "Moderate",
    difficultyColor: "#16a34a",
    accentColor: "#ea580c",
    bgColor: "#fff7ed",
    borderColor: "#fed7aa",
    emoji: "🏆",
    href: "/exam-list",
    tag: "Scholarship",
    tagBg: "#ea580c",
  },
];

const stats = [
  { value: "4", label: "Exams Covered" },
  { value: "500+", label: "Practice Papers" },
  { value: "10K+", label: "Students Preparing" },
  { value: "Free", label: "Resources Available" },
];

const ExamList = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }}>

      {/* ── Page Hero ── */}
      <section
        className="pt-28 pb-16 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1629 0%, #1a2a44 100%)" }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4ED7F2, transparent)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F97316, transparent)", transform: "translate(-30%, 30%)" }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6"
            style={{ backgroundColor: "rgba(78,215,242,0.15)", color: "#4ED7F2", border: "1px solid rgba(78,215,242,0.3)" }}
          >
            All Exams
          </span>
          <h1
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Choose Your <span style={{ color: "#4ED7F2" }}>Exam</span>,<br />
            Start Your Journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            India's top school entrance exams — all in one place. Get free previous year papers, syllabus guides, and practice sets.
          </p>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-4 px-2 rounded-2xl"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-2xl font-black text-white" style={{ fontFamily: "Nunito, sans-serif" }}>{s.value}</p>
              <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Exam Cards ── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {exams.map((exam, i) => (
            <div
              key={exam.id}
              className="rounded-3xl overflow-hidden transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${exam.borderColor}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">

                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                    style={{ backgroundColor: exam.bgColor }}
                  >
                    {exam.emoji}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2
                        className="text-2xl font-black"
                        style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
                      >
                        {exam.name}
                      </h2>
                      <span
                        className="px-3 py-0.5 rounded-full text-xs font-extrabold text-white uppercase tracking-wide"
                        style={{ backgroundColor: exam.tagBg }}
                      >
                        {exam.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: exam.bgColor, color: exam.accentColor }}
                      >
                        {exam.shortName}
                      </span>
                      <span className="text-sm" style={{ color: "#64748b" }}>{exam.tagline}</span>
                    </div>

                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "#475569" }}>
                      {exam.description}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-4 mb-5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span style={{ color: "#94a3b8" }}>📅 Exam Month:</span>
                        <span className="font-semibold" style={{ color: "#0a1629" }}>{exam.examMonth}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span style={{ color: "#94a3b8" }}>👤 Eligibility:</span>
                        <span className="font-semibold" style={{ color: "#0a1629" }}>{exam.eligibility}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span style={{ color: "#94a3b8" }}>📊 Difficulty:</span>
                        <span className="font-semibold" style={{ color: exam.difficultyColor }}>{exam.difficulty}</span>
                      </div>
                    </div>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {exam.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: exam.bgColor, color: exam.accentColor, border: `1px solid ${exam.borderColor}` }}
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3 shrink-0 md:min-w-[160px]">
                    <Link
                      href={exam.href}
                      className="px-6 py-3 rounded-2xl font-extrabold text-sm text-white text-center transition-all hover:brightness-110 hover:-translate-y-0.5"
                      style={{ backgroundColor: exam.accentColor, boxShadow: `0 4px 14px ${exam.accentColor}40` }}
                    >
                      Start Preparing →
                    </Link>
                    <Link
                      href={`${exam.href}/previous-year-papers`}
                      className="px-6 py-3 rounded-2xl font-bold text-sm text-center transition-all hover:brightness-95"
                      style={{ backgroundColor: exam.bgColor, color: exam.accentColor, border: `1px solid ${exam.borderColor}` }}
                    >
                      View Papers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-16 px-4 mx-4 mb-12 rounded-3xl max-w-5xl md:mx-auto text-center"
        style={{ background: "linear-gradient(135deg, #0a1629 0%, #1a2a44 100%)" }}
      >
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-4"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          Not sure which exam to pick?
        </h2>
        <p className="mb-8 text-lg" style={{ color: "#94a3b8" }}>
          All exams are free to explore. Start with any — switch anytime.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-4 rounded-2xl font-black text-lg transition-all hover:-translate-y-1"
          style={{ backgroundColor: "#F97316", color: "#fff", boxShadow: "0 8px 24px rgba(249,115,22,0.35)" }}
        >
          Go Back Home
        </Link>
      </section>

    </div>
  );
};

export default ExamList;