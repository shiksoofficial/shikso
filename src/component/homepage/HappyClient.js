import React from "react";
import Link from "next/link";

const papers = [
  { exam: "Navodaya", label: "Navodaya", title: "Navodaya 2023 Solved Paper", tagBg: "#dbeafe", tagColor: "#1d4ed8", href: "/navodaya-smartset" },
  { exam: "Sainik", label: "Sainik", title: "Sainik School Entrance 2022", tagBg: "#dcfce7", tagColor: "#15803d", href: "/sainik-school-smartset" },
  { exam: "RMS", label: "RMS", title: "RMS Military Academy 2023", tagBg: "#f3e8ff", tagColor: "#6d28d9", href: "/rms-smartset" },
  { exam: "NMMS", label: "NMMS", title: "NMMS State Scholarship 2021", tagBg: "#ffedd5", tagColor: "#c2410c", href: "/exam-list" },
];

const benefits = [
  { icon: "✅", title: "Clear Syllabus", desc: "Simplified topics easy for kids.", accent: "#4ED7F2" },
  { icon: "📋", title: "Solved Papers", desc: "Step-by-step video solutions.", accent: "#F97316" },
  { icon: "🧠", title: "Smart Practice", desc: "Daily micro-learning sessions.", accent: "#4ED7F2" },
  { icon: "📣", title: "Exam Updates", desc: "Instant alerts for new notices.", accent: "#F97316" },
];

const HappyClient = () => {
  return (
    <>
      {/* ── Previous Papers ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2
              className="text-3xl font-black mb-4 md:mb-0"
              style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
            >
              Practice Real Exam Papers
            </h2>
            <Link
              href="/exam-list"
              className="font-bold flex items-center gap-1 hover:gap-2 transition-all text-sm"
              style={{ color: "#0a1629" }}
            >
              View All Papers →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {papers.map((p) => (
              <div
                key={p.title}
                className="bg-white p-6 rounded-2xl flex items-center justify-between"
                style={{ border: "1px solid #f1f5f9" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                    style={{ backgroundColor: p.tagBg, color: p.tagColor }}
                  >
                    {p.label}
                  </span>
                  <p className="font-semibold text-gray-800 text-sm">{p.title}</p>
                </div>
                <Link
                  href={p.href}
                  className="font-bold text-sm whitespace-nowrap"
                  style={{ color: "#F97316" }}
                >
                  View Paper
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0a1629" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-12 text-white"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Why Students Love Shikso
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-3xl transition-colors hover:bg-white/20"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-4xl mb-4" style={{ color: b.accent }}>
                  {b.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 leading-tight text-white">
                  {b.title}
                </h4>
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HappyClient;