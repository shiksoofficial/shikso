import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Crack Navodaya 2024",
    date: "March 12, 2024",
    readTime: "5 min read",
    href: "/blogs",
    emoji: "📚",
  },
  {
    id: 2,
    title: "Sainik School Preparation Guide",
    date: "March 10, 2024",
    readTime: "8 min read",
    href: "/blogs",
    emoji: "🎖️",
  },
];

const news = [
  {
    id: 1,
    tag: "Update",
    title: "Navodaya Result 2024 for Class 6 out today!",
    tagColor: "#4ED7F2",
    tagBg: "rgba(78,215,242,0.08)",
    border: "rgba(78,215,242,0.15)",
    href: "/educational-news",
  },
  {
    id: 2,
    tag: "Announcement",
    title: "RMS Exam dates rescheduled for April session",
    tagColor: "#64748b",
    tagBg: "#f8fafc",
    border: "transparent",
    href: "/educational-news",
  },
];

const GetStarted = () => {
  return (
    <>
      {/* ── Blog & News ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Blogs */}
          <div>
            <h3
              className="text-2xl font-black mb-8 flex items-center gap-2"
              style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
            >
              <span style={{ color: "#F97316" }}>📰</span> Latest Blogs
            </h3>
            <div className="space-y-6">
              {blogs.map((blog) => (
                <Link
                  href={blog.href}
                  key={blog.id}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div
                    className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center text-4xl"
                    style={{ backgroundColor: "#f1f5f9" }}
                  >
                    {blog.emoji}
                  </div>
                  <div>
                    <h4
                      className="font-bold group-hover:text-orange-500 transition-colors"
                      style={{ color: "#0a1629" }}
                    >
                      {blog.title}
                    </h4>
                    <p className="text-xs mt-2" style={{ color: "#94a3b8" }}>
                      {blog.date} • {blog.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Education News */}
          <div>
            <h3
              className="text-2xl font-black mb-8 flex items-center gap-2"
              style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
            >
              <span style={{ color: "#4ED7F2" }}>ℹ️</span> Education News
            </h3>
            <div className="space-y-4">
              {news.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className="block p-4 rounded-2xl"
                  style={{
                    backgroundColor: item.tagBg,
                    border: `1px solid ${item.border}`,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase mb-1"
                    style={{ color: item.tagColor }}
                  >
                    {item.tag}
                  </p>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-black mb-8"
            style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
          >
            Trusted Learning for Students
          </h2>
          <div
            className="bg-white p-8 rounded-3xl shadow-sm"
            style={{ border: "1px solid #f1f5f9" }}
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
              style={{ backgroundColor: "rgba(78,215,242,0.15)" }}
            >
              🛡️
            </div>
            <p
              className="text-lg italic mb-6"
              style={{ color: "#475569" }}
            >
              &quot;Shikso has made my son&apos;s Navodaya preparation so much easier. The previous year papers and simple explanations are exactly what we needed.&quot;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: "#f1f5f9" }}
              >
                👨
              </div>
              <div className="text-left">
                <h5 className="font-bold leading-none text-gray-900">Rajesh Kumar</h5>
                <p className="text-xs" style={{ color: "#94a3b8" }}>Parent, Punjab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "rgba(78,215,242,0.08)" }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "Nunito, sans-serif", color: "#0a1629" }}
          >
            Start Your Preparation Today
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Join thousands of students and get ready for your dream school entrance exam with Shikso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/exam-list"
              className="px-10 py-5 rounded-2xl font-black text-xl text-white transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#F97316",
                boxShadow: "0 10px 30px rgba(249,115,22,0.3)",
              }}
            >
              Explore Free Resources
            </Link>
            <Link
              href="/about-us"
              className="px-10 py-5 rounded-2xl font-black text-xl text-white transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#0a1629",
                boxShadow: "0 10px 30px rgba(10,22,41,0.3)",
              }}
            >
              Learn About Shikso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;