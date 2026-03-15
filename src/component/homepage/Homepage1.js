import React from "react";
import Link from "next/link";

const exams = [
  {
    id: 1,
    name: "Navodaya",
    icon: "🏫",
    color: "#dbeafe",
    iconColor: "#2563eb",
    href: "/navodaya-smartset",
  },
  {
    id: 2,
    name: "Sainik School",
    icon: "🎖️",
    color: "#dcfce7",
    iconColor: "#16a34a",
    href: "/sainik-school-smartset",
  },
  {
    id: 3,
    name: "RMS",
    icon: "🛡️",
    color: "#f3e8ff",
    iconColor: "#7c3aed",
    href: "/rms-smartset",
  },
  {
    id: 4,
    name: "NMMS",
    icon: "🏆",
    color: "#ffedd5",
    iconColor: "#ea580c",
    href: "/exam-list",
  },
];

const steps = [
  {
    icon: "📰",
    title: "Read Exam Updates",
    desc: "Stay informed about dates and requirements.",
    bg: "#0a1629",
    color: "#fff",
  },
  {
    icon: "📝",
    title: "Solve Papers",
    desc: "Practice with real previous year questions.",
    bg: "#F97316",
    color: "#fff",
  },
  {
    icon: "✨",
    title: "Practice Daily",
    desc: "Use our smart quiz for better retention.",
    bg: "#4ED7F2",
    color: "#0a1629",
  },
];

const Homepage1 = () => {
  return (
    <>
      {/* ── SmartSets Grid ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-black text-center mb-12"
            style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
          >
            Choose Your Exam
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white p-8 rounded-3xl flex flex-col items-center text-center transition-all hover:-translate-y-2"
                style={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  border: "1px solid #f1f5f9",
                }}
              >
                <div
                  className="w-24 h-24 mb-6 rounded-full flex items-center justify-center text-5xl"
                  style={{ backgroundColor: exam.color }}
                >
                  {exam.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#0a1629" }}
                >
                  {exam.name}
                </h3>
                <Link
                  href={exam.href}
                  className="mt-auto w-full py-3 rounded-xl font-bold transition-colors text-center block bg-slate-100 text-[#0a1629] hover:bg-[#0a1629] hover:text-white"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-3xl font-black mb-12"
            style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
          >
            Simple Preparation. Smart Results.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
            {/* Dashed connector line — desktop only */}
            <div
              className="hidden md:block absolute top-10 left-[25%] right-[25%] h-px"
              style={{ borderTop: "2px dashed #cbd5e1" }}
            />
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center gap-4 relative z-10 max-w-[240px]"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg"
                  style={{ backgroundColor: step.bg, color: step.color }}
                >
                  {step.icon}
                </div>
                <h4 className="font-bold text-lg leading-tight" style={{ color: "#0a1629" }}>
                  {step.title}
                </h4>
                <p className="text-sm" style={{ color: "#64748b" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage1;