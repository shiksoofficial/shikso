// app/rms-smartset/page.jsx
// Hub page — user picks Class 6 or Class 9

import Link from "next/link";
import { RMS_SECTIONS, RMS_BASE } from "@/component/rms/rmsNav";

export const metadata = {
  title: "RMS SmartSet — Rashtriya Military School CET Preparation | Shikso",
  description:
    "Complete preparation for Rashtriya Military School Common Entrance Test (RMS CET) Class 6 and Class 9. Updates, syllabus, previous papers, mock tests, and unlimited practice on Shikso.",
};

const classes = [
  {
    cls: "class-6",
    label: "Class 6 Entry",
    badge: "RMS CET Class 6",
    examName: "Rashtriya Military School — Class VI Admission",
    seats: "5 schools · Boys & Girls eligible",
    highlights: [
      "Intelligence Test — 50 marks (counted in merit)",
      "Mathematics — 50 marks (counted in merit)",
      "GK & Current Affairs — 50 marks (counted in merit)",
      "English — 50 marks (qualifying only, NOT in merit)",
      "Interview — 20 marks · No negative marking",
    ],
    color: "#0a1628",
  },
  {
    cls: "class-9",
    label: "Class 9 Entry",
    badge: "RMS CET Class 9",
    examName: "Rashtriya Military School — Class IX Lateral Entry",
    seats: "5 schools · Boys & Girls eligible",
    highlights: [
      "Paper I: English + Hindi + Social Science — 100 marks",
      "Paper II: Mathematics + Science — 100 marks",
      "Minimum 50% in each paper separately to qualify",
      "Interview — 50 marks (higher than Class 6)",
      "No negative marking",
    ],
    color: "#1a3a5c",
  },
];

const comparisonRows = [
  { param: "Who can apply", class6: "Currently in Class 5", class9: "Currently in Class 8" },
  { param: "Gender", class6: "Boys & Girls", class9: "Boys & Girls" },
  { param: "Age limit", class6: "10–12 yrs (as on 31 Mar)", class9: "13–15 yrs (as on 31 Mar)" },
  { param: "Total written marks", class6: "200 marks", class9: "200 marks (2 papers)" },
  { param: "Merit marks", class6: "150 (English excluded)", class9: "200 (all papers count)" },
  { param: "Min. qualifying", class6: "40% per subject (excl. English)", class9: "50% in Paper I & Paper II" },
  { param: "Interview marks", class6: "20 marks", class9: "50 marks" },
  { param: "Exam medium", class6: "Hindi & English (bilingual)", class9: "English only" },
  { param: "Exam held", class6: "December every year", class9: "December every year" },
  { param: "Application fee", class6: "₹550 (₹275 SC/ST)", class9: "₹550 (₹275 SC/ST)" },
  { param: "Boarding", class6: "Residential only", class9: "Residential only" },
];

export default function RMSHubPage() {
  return (
    <main>
      <section className="hub-hero">
        <div className="container">
          <p className="breadcrumb-text">
            <Link href="/">Home</Link> &rsaquo; RMS SmartSet
          </p>
          <span className="hub-badge dm_sans">🏫 RMS SmartSet</span>
          <h1 className="dm_sans">
            Rashtriya Military School —{" "}
            <span className="accent dm_sans">RMS CET 2026-27</span>
            <br />
            Choose Your Class
          </h1>
          <p className="hero-sub dm_sans">
            India&apos;s 5 most prestigious military residential schools under the Ministry of Defence.
            Train smarter. Dream bigger. Select your target class below.
          </p>
          <div className="schools-strip dm_sans">
            🏔️ Chail, HP &nbsp;·&nbsp; 🏜️ Ajmer, RJ &nbsp;·&nbsp; 🌿 Belgaum, KA &nbsp;·&nbsp; 🌆 Bengaluru, KA &nbsp;·&nbsp; 🏞️ Dholpur, RJ
          </div>
        </div>
      </section>

      <section className="container hub-body dm_sans">
        <p className="section-intro">
          RMS CET is conducted annually in December for two entry levels. Each class has
          a different exam pattern, eligibility, and syllabus. Select the class you are
          preparing for — each has its own complete preparation zone.
        </p>

        <div className="class-grid">
          {classes.map(({ cls, label, badge, examName, seats, highlights, color }) => (
            <Link
              key={cls}
              href={`${RMS_BASE}/${cls}`}
              className="class-card"
              style={{ "--card-color": color }}
            >
              <div className="cc-header">
                <span className="cc-badge">{badge}</span>
                <h2>{label}</h2>
                <p className="cc-exam">{examName}</p>
                <p className="cc-seats">🎖️ {seats}</p>
              </div>
              <div className="cc-body">
                <p className="cc-sub-label">Exam highlights:</p>
                <ul>
                  {highlights.map((h) => (
                    <li key={h}>
                      <span className="tick">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cc-footer">
                <p className="cc-tools-label">What&apos;s inside:</p>
                <div className="cc-chips">
                  {RMS_SECTIONS.map((s) => (
                    <span key={s.slug} className="chip">
                      {s.icon} {s.shortLabel}
                    </span>
                  ))}
                </div>
                <span className="cc-cta">Explore {label} Preparation →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="compare-card dm_sans">
          <h2 className="compare-title">Class 6 vs Class 9 — Quick Comparison</h2>
          <div className="table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Class 6 (RMS CET)</th>
                  <th>Class 9 (RMS CET)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.param}>
                    <td>{row.param}</td>
                    <td>{row.class6}</td>
                    <td>{row.class9}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style>{`
        .hub-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px;
          position: relative;
          overflow: hidden;
        }
        .hub-hero::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb-text { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb-text a { color: #94a3b8; text-decoration: none; }
        .hub-badge {
          display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35);
          color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase; margin-bottom: 16px;
        }
        .hub-hero h1 { font-size: clamp(26px, 4vw, 38px); font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 14px; }
        .accent { color: #F97316; }
        .hero-sub { font-size: 15px; color: #94a3b8; max-width: 560px; line-height: 1.7; }
        .schools-strip { margin-top: 16px; font-size: 12px; color: #64748b; font-weight: 600; }

        .hub-body { padding: 40px 24px 80px; }
        .section-intro { font-size: 15px; color: #475569; margin-bottom: 28px; max-width: 680px; line-height: 1.7; }

        .class-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
        .class-card {
          display: flex; flex-direction: column; border-radius: 16px; overflow: hidden;
          border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,.08);
          text-decoration: none; color: inherit; background: #fff; transition: transform .2s, box-shadow .2s;
        }
        .class-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.14); }
        .cc-header { background: var(--card-color, #0a1628); padding: 24px; color: #fff; }
        .cc-badge { display: inline-block; background: rgba(249,115,22,.22); border: 1px solid rgba(249,115,22,.4); color: #fdba74; padding: 3px 12px; border-radius: 30px; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; margin-bottom: 10px; }
        .cc-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
        .cc-exam { font-size: 13px; color: #94a3b8; }
        .cc-seats { margin-top: 8px; font-size: 13px; color: #fbbf24; font-weight: 600; }
        .cc-body { padding: 20px 24px; flex: 1; border-bottom: 1px solid #f1f5f9; }
        .cc-sub-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-body ul { list-style: none; padding: 0; margin: 0; }
        .cc-body li { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #334155; padding: 5px 0; border-bottom: 1px dashed #f1f5f9; }
        .cc-body li:last-child { border-bottom: none; }
        .tick { color: #16a34a; font-weight: 800; flex-shrink: 0; }
        .cc-footer { padding: 16px 24px 20px; }
        .cc-tools-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .chip { background: #f8fafc; border: 1px solid #e2e8f0; color: #334155; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .cc-cta { display: block; background: #F97316; color: #fff; text-align: center; padding: 12px; border-radius: 50px; font-size: 14px; font-weight: 800; transition: background .2s; }
        .class-card:hover .cc-cta { background: #ea580c; }

        .compare-card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,.08); overflow: hidden; }
        .compare-title { font-size: 18px; font-weight: 800; color: #0a1628; padding: 20px 24px 0; }
        .table-wrap { overflow-x: auto; }
        .compare-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        .compare-table thead tr { background: #0a1628; }
        .compare-table th { padding: 12px 20px; color: #fff; font-size: 13px; font-weight: 700; text-align: left; }
        .compare-table tbody tr { border-bottom: 1px solid #f1f5f9; }
        .compare-table tbody tr:last-child { border-bottom: none; }
        .compare-table tbody tr:nth-child(even) { background: #f8fafc; }
        .compare-table td { padding: 12px 20px; font-size: 13.5px; color: #334155; }
        .compare-table td:first-child { font-weight: 700; color: #0a1628; }

        @media (max-width: 768px) {
          .class-grid { grid-template-columns: 1fr; }
          .hub-body { padding: 24px 0 60px; }
        }
      `}</style>
    </main>
  );
}