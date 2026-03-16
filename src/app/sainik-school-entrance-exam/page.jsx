// app/sainik-school-entrance-exam/page.js
// Hub page — user lands here and chooses Class 6 or Class 9.

import Link from "next/link";
import { SAINIK_SECTIONS } from "@/component/sainik/sainikNav";

export const metadata = {
  title: "Sainik School SmartSet — AISSEE Preparation Class 6 & 9 | Shikso",
  description:
    "Prepare for Sainik School AISSEE 2026 with Shikso SmartSet. Choose Class 6 or Class 9 for exam dates, syllabus, previous year papers, mock tests and unlimited practice.",
};

const classes = [
  {
    cls: "class-6",
    label: "Class 6 Entrance",
    badge: "AISSEE Class 6",
    examName: "All India Sainik Schools Entrance Exam",
    seats: "~25 seats per school",
    subjects: [
      "Mathematics (150 marks)",
      "General Knowledge (75 marks)",
      "Language — English/Hindi (50 marks)",
      "Intelligence (25 marks)",
    ],
    color: "#1a3a5c",
  },
  {
    cls: "class-9",
    label: "Class 9 Lateral Entry",
    badge: "AISSEE Class 9",
    examName: "Lateral Entry — All India Sainik Schools",
    seats: "~10 seats per school",
    subjects: [
      "Mathematics (200 marks)",
      "General Science (75 marks)",
      "Social Studies (50 marks)",
      "English (50 marks)",
      "Intelligence (25 marks)",
    ],
    color: "#0a1628",
  },
];

export default function SainikHubPage() {
  return (
    <main>
      {/* Hero */}
      <section className="sainik-hub-hero dm_sans">
        <div className="container">
          <p className="breadcrumb-text dm_sans">
            <Link href="/">Home</Link> &rsaquo; Sainik School SmartSet
          </p>

          <span className="hub-badge">🎖️ Sainik School SmartSet</span>

          <h1>
            Sainik School — <span className="accent">AISSEE 2026</span>
            <br />
            Choose Your Class
          </h1>

          <p className="hero-sub">
            Train with discipline, learn with purpose. Select your target class
            below to access exam dates, syllabus, previous year papers, and
            unlimited practice.
          </p>
        </div>
      </section>

      {/* Class chooser */}
      <section className="container hub-body dm_sans">
        <p className="section-intro">
          Sainik School entrance exam (AISSEE) is conducted for two classes.
          Select the one you are preparing for.
        </p>

        <div className="class-chooser-grid">
          {classes.map(
            ({ cls, label, badge, examName, seats, subjects, color }) => (
              <Link
                key={cls}
                href={`/sainik-school-entrance-exam/${cls}`}
                className="class-chooser-card"
                style={{ "--card-color": color }}
              >
                <div className="cc-header">
                  <span className="cc-badge">{badge}</span>
                  <h2>{label}</h2>
                  <p>{examName}</p>
                  <p className="cc-seats">🎓 {seats}</p>
                </div>

                <div className="cc-body">
                  <p className="cc-subjects-label">Subjects covered:</p>
                  <ul>
                    {subjects.map((s) => (
                      <li key={s}>
                        <span className="cc-tick">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cc-footer">
                  <div className="cc-tools-label">What's inside:</div>

                  <div className="cc-tools-row">
                    {SAINIK_SECTIONS.map((sec) => (
                      <span key={sec.slug} className="cc-tool-chip">
                        {sec.icon} {sec.label}
                      </span>
                    ))}
                  </div>

                  <div className="cc-cta">Explore {label} Preparation →</div>
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Comparison */}
        <div className="comparison-card dm_sans">
          <h2 className="comp-title ">Class 6 vs Class 9 — Quick Comparison</h2>

          <div className="comp-table-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Class 6 (AISSEE)</th>
                  <th>Class 9 (Lateral Entry)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Who can apply</td>
                  <td>Currently in Class 5</td>
                  <td>Currently in Class 8</td>
                </tr>
                <tr>
                  <td>Age (as on 1 Apr 2026)</td>
                  <td>10–12 years</td>
                  <td>13–15 years</td>
                </tr>
                <tr>
                  <td>Total questions</td>
                  <td>125 questions</td>
                  <td>150 questions</td>
                </tr>
                <tr>
                  <td>Total marks</td>
                  <td>300 marks</td>
                  <td>400 marks</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2 hrs 30 mins</td>
                  <td>3 hours</td>
                </tr>
                <tr>
                  <td>Seats (approx)</td>
                  <td>~25 per school</td>
                  <td>~10 per school</td>
                </tr>
                <tr>
                  <td>Difficulty</td>
                  <td>Class 5 level</td>
                  <td>Class 8 level (NCERT)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <style>{`
        .sainik-hub-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px;
          position: relative;
          overflow: hidden;
        }
        .sainik-hub-hero::before {
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
          display: inline-block;
          background: rgba(249,115,22,.18);
          border: 1px solid rgba(249,115,22,.35);
          color: #fdba74;
          padding: 4px 14px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .sainik-hub-hero h1 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .accent { color: var(--primaryColor); }
        .hero-sub { font-size: 15px; color: #94a3b8; max-width: 540px; }

        .hub-body { padding: 40px 24px 80px; }
        .section-intro { font-size: 15px; color: #475569; margin-bottom: 28px; max-width: 680px; line-height: 1.7; }

        .class-chooser-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
        .class-chooser-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0,0,0,.08);
          text-decoration: none;
          color: inherit;
          background: #fff;
          transition: transform .2s, box-shadow .2s;
        }
        .class-chooser-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.14); }

        .cc-header { background: var(--card-color, #0a1628); padding: 24px; color: #fff; }
        .cc-badge {
          display: inline-block;
          background: rgba(249,115,22,.22);
          border: 1px solid rgba(249,115,22,.4);
          color: #fdba74;
          padding: 3px 12px;
          border-radius: 30px;
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .05em;
          margin-bottom: 10px;
        }
        .cc-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
        .cc-exam { font-size: 13px; color: #94a3b8; }
        .cc-seats { margin-top: 8px; font-size: 13px; color: #fbbf24; font-weight: 600; }

        .cc-body { padding: 20px 24px; flex: 1; border-bottom: 1px solid #f1f5f9; }
        .cc-subjects-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-body ul { list-style: none; padding: 0; margin: 0; }
        .cc-body li { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #334155; padding: 5px 0; border-bottom: 1px dashed #f1f5f9; }
        .cc-body li:last-child { border-bottom: none; }
        .cc-tick { color: #16a34a; font-weight: 800;  flex-shrink: 0; }

        .cc-footer { padding: 16px 24px 20px; }
        .cc-tools-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-tools-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .cc-tool-chip { background: #f8fafc; border: 1px solid #e2e8f0; color: #334155; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .cc-cta {
          display: block;
          background: var(--primaryColor);
          color: #fff;
          text-align: center;
          padding: 12px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 800;
          transition: background .2s;
        }
        .class-card:hover .cc-cta { background: #ea580c; }

        .comparison-card { background: #fff; border-radius: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,.08); overflow: hidden; }
        .comp-title { font-size: 18px; font-weight: 800; color: #0a1628; padding: 20px 24px 0; }
        .table-wrap { overflow-x: auto; }
        .comp-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
        .comp-table thead tr { background: #0a1628; }
        .comp-table th { padding: 12px 20px; color: #fff; font-size: 13px; font-weight: 700; text-align: left; }
        .comp-table tbody tr { border-bottom: 1px solid #f1f5f9; }
        .comp-table tbody tr:last-child { border-bottom: none; }
        .comp-table tbody tr:nth-child(even) { background: #f8fafc; }
        .comp-table td { padding: 12px 20px; font-size: 13.5px; color: #334155; }
        .comp-table td:first-child { font-weight: 700; color: #0a1628; }

        @media (max-width: 768px) {
          .class-chooser-grid { grid-template-columns: 1fr; }
          .hub-body { padding: 24px 0 60px; }
        }
      `}</style>
    </main>
  );
}
