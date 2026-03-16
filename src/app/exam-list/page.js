import React from "react";
import Link from "next/link";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata = {
  title: "All Exams – Navodaya, Sainik School, RMS & NMMS | Shikso",
  description:
    "Explore all school entrance exams on Shikso — Navodaya (JNVST), Sainik School (AISSEE), RMS CET and NMMS. Get free previous year papers, syllabus, mock tests and exam updates.",
  keywords: [
    "navodaya exam",
    "sainik school exam",
    "rms entrance exam",
    "nmms scholarship exam",
    "school entrance exams india",
    "jnvst exam",
    "aissee exam",
    "rms cet",
    "navodaya vidyalaya admission",
    "sainik school admission",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.shikso.com/exam-list" },
  openGraph: {
    title:
      "All School Entrance Exams – Navodaya, Sainik School, RMS & NMMS | Shikso",
    description:
      "Free preparation resources for all major Indian school entrance exams. Previous year papers, mock tests and syllabus guides on Shikso.",
    url: "https://www.shikso.com/exam-list",
    siteName: "Shikso",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All School Entrance Exams | Shikso",
    description:
      "Navodaya, Sainik School, RMS and NMMS — free papers, mock tests and exam updates on Shikso.",
  },
};
// ─────────────────────────────────────────────────────────────────────────────

const exams = [
  {
    id: 1,
    name: "Navodaya Vidyalaya",
    shortName: "JNVST",
    tagline: "Class 6 & Class 9 Lateral Entry",
    description:
      "Jawahar Navodaya Vidyalaya Selection Test is conducted by NVS for admission to free residential schools across India. One of the most prestigious school entrance exams.",
    features: [
      "Previous Year Papers",
      "Mock Tests",
      "Syllabus Guide",
      "Exam Updates",
    ],
    eligibility: "Class 5 pass (Class 6) | Class 8 pass (Class 9)",
    examMonth: "Jan / Apr",
    difficulty: "Moderate",
    difficultyColor: "#16a34a",
    accentColor: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#bfdbfe",
    emoji: "🏫",
    href: "/navodaya-entrance-exam",
    papersHref: "/navodaya-entrance-exam/previous-year-papers",
    tag: "Most Popular",
    tagBg: "#2563eb",
  },
  {
    id: 2,
    name: "Sainik School",
    shortName: "AISSEE",
    tagline: "Class 6 & Class 9 Admission",
    description:
      "All India Sainik Schools Entrance Examination conducted by NTA. Get admitted to premier residential schools with a focus on military discipline and academic excellence.",
    features: [
      "Previous Year Papers",
      "Mock Tests",
      "Syllabus Guide",
      "Exam Updates",
    ],
    eligibility: "Age 10–12 years (Class 6) | Age 13–15 years (Class 9)",
    examMonth: "January",
    difficulty: "Moderate–High",
    difficultyColor: "#d97706",
    accentColor: "#16a34a",
    bgColor: "#f0fdf4",
    borderColor: "#bbf7d0",
    emoji: "🎖️",
    href: "/sainik-school-entrance-exam",
    papersHref: "/sainik-school-entrance-exam/previous-year-papers",
    tag: "Highly Competitive",
    tagBg: "#16a34a",
  },
  {
    id: 3,
    name: "Rashtriya Military School",
    shortName: "RMS CET",
    tagline: "Class 6 & Class 9 Admission",
    description:
      "Common Entrance Test for five Rashtriya Military Schools under the Ministry of Defence. Combines academic rigor with physical and military training.",
    features: [
      "Previous Year Papers",
      "Mock Tests",
      "Syllabus Guide",
      "Exam Updates",
    ],
    eligibility: "Age 10–12 years (Class 6) | Age 13–15 years (Class 9)",
    examMonth: "February",
    difficulty: "High",
    difficultyColor: "#dc2626",
    accentColor: "#7c3aed",
    bgColor: "#faf5ff",
    borderColor: "#e9d5ff",
    emoji: "🛡️",
    href: "/rms-entrance-exam",
    papersHref: "/rms-entrance-exam/previous-year-papers",
    tag: "Defence Track",
    tagBg: "#7c3aed",
  },
  {
    id: 4,
    name: "NMMS Scholarship",
    shortName: "NMMS",
    tagline: "Class 8 — State Level Scholarship",
    description:
      "National Means-cum-Merit Scholarship awards ₹12,000/year for 4 years to meritorious students from economically weaker sections. State-level exam, central benefit.",
    features: [
      "Previous Year Papers",
      "Practice Sets",
      "Syllabus Guide",
      "State Updates",
    ],
    eligibility: "Class 7 pass | Family income ≤ ₹3.5 lakh/year",
    examMonth: "Nov / Dec",
    difficulty: "Moderate",
    difficultyColor: "#16a34a",
    accentColor: "#ea580c",
    bgColor: "#fff7ed",
    borderColor: "#fed7aa",
    emoji: "🏆",
    href: "/exam-list",
    papersHref: "/exam-list",
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

export default function ExamListPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8fafc" }}>
      {/* ── Hero ── */}
      <section
        className="pt-28 pb-16 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1629 0%, #1a2a44 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(78,215,242,0.15), transparent 70%)",
            transform: "translate(25%, -25%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)",
            transform: "translate(-25%, 25%)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumb */}
          <div
            className="flex items-center justify-center gap-2 text-xs mb-6"
            style={{ color: "#64748b" }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "#94a3b8" }}>Exam List</span>
          </div>

          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6"
            style={{
              backgroundColor: "rgba(78,215,242,0.12)",
              color: "#4ED7F2",
              border: "1px solid rgba(78,215,242,0.25)",
            }}
          >
            All Exams
          </span>

          <h1
            className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Choose Your <span style={{ color: "#4ED7F2" }}>Exam</span>,<br />
            Start Your Journey
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            India&apos;s top school entrance exams — all in one place. Free
            previous year papers, syllabus guides, and practice sets.
          </p>
        </div>

        {/* Stats bar */}
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center py-4 px-2 rounded-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p
                className="text-2xl font-black text-white"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Exam Cards ── */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="rounded-3xl overflow-hidden bg-white transition-all duration-200 hover:-translate-y-1"
              style={{
                border: `1px solid ${exam.borderColor}`,
                boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shrink-0"
                    style={{ backgroundColor: exam.bgColor }}
                  >
                    {exam.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2
                        className="text-xl md:text-2xl font-black"
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          color: "#0a1629",
                        }}
                      >
                        {exam.name}
                      </h2>
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-extrabold text-white uppercase tracking-wide"
                        style={{ backgroundColor: exam.tagBg }}
                      >
                        {exam.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: exam.bgColor,
                          color: exam.accentColor,
                        }}
                      >
                        {exam.shortName}
                      </span>
                      <span className="text-sm" style={{ color: "#64748b" }}>
                        {exam.tagline}
                      </span>
                    </div>

                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "#475569" }}
                    >
                      {exam.description}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4 text-xs">
                      <span>
                        <span style={{ color: "#94a3b8" }}>
                          📅 Exam Month:{" "}
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: "#0a1629" }}
                        >
                          {exam.examMonth}
                        </span>
                      </span>
                      <span>
                        <span style={{ color: "#94a3b8" }}>
                          👤 Eligibility:{" "}
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: "#0a1629" }}
                        >
                          {exam.eligibility}
                        </span>
                      </span>
                      <span>
                        <span style={{ color: "#94a3b8" }}>
                          📊 Difficulty:{" "}
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: exam.difficultyColor }}
                        >
                          {exam.difficulty}
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exam.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: exam.bgColor,
                            color: exam.accentColor,
                            border: `1px solid ${exam.borderColor}`,
                          }}
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-row md:flex-col gap-3 shrink-0 md:min-w-[150px]">
                    <Link
                      href={exam.href}
                      className="flex-1 md:flex-none px-5 py-3 rounded-2xl font-extrabold text-sm text-white text-center transition-all hover:brightness-110"
                      style={{
                        backgroundColor: exam.accentColor,
                        boxShadow: `0 4px 14px ${exam.accentColor}35`,
                      }}
                    >
                      Start Preparing →
                    </Link>
                    <Link
                      href={exam.papersHref}
                      className="flex-1 md:flex-none px-5 py-3 rounded-2xl font-bold text-sm text-center transition-all hover:brightness-95"
                      style={{
                        backgroundColor: exam.bgColor,
                        color: exam.accentColor,
                        border: `1px solid ${exam.borderColor}`,
                      }}
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
      <section className="px-4 pb-16">
        <div
          className="max-w-5xl mx-auto py-14 px-6 rounded-3xl text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a1629 0%, #1a2a44 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(78,215,242,0.08) 0%, transparent 60%)",
            }}
          />
          <h2
            className="text-2xl md:text-3xl font-black text-white mb-3 relative z-10"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Not sure which exam to pick?
          </h2>
          <p className="mb-8 relative z-10" style={{ color: "#94a3b8" }}>
            All resources are free to explore. Start with any exam — switch
            anytime.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 rounded-2xl font-black text-base transition-all hover:-translate-y-1 relative z-10"
            style={{
              backgroundColor: "#F97316",
              color: "#fff",
              boxShadow: "0 8px 24px rgba(249,115,22,0.35)",
            }}
          >
            ← Go Back Home
          </Link>
        </div>
      </section>
    </div>
  );
}
