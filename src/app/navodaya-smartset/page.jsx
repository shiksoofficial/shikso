// app/navodaya-smartset/page.tsx
// Hub page — user lands here and chooses Class 6 or Class 9.

import Link from "next/link";
import { NAVODAYA_SECTIONS } from "@/component/navodaya/navodayaNav";

export const metadata = {
  title: "Navodaya SmartSet — JNVST Preparation Class 6 & 9 | Shikso",
  description:
    "Prepare for Navodaya Vidyalaya JNVST 2026 with Shikso SmartSet. Choose Class 6 or Class 9 for exam dates, syllabus, previous year papers, mock tests and unlimited practice.",
};

const classes = [
  {
    cls: "class-6",
    label: "Class 6 Entrance",
    badge: "JNVST Class 6",
    examName: "Jawahar Navodaya Vidyalaya Selection Test",
    seats: "80 seats per school · 661+ schools",
    highlights: [
      "Mental Ability Test — 50 marks (most important)",
      "Arithmetic — 25 marks",
      "Language Test — 25 marks",
      "Total: 80 questions in 2 hours",
      "No negative marking",
    ],
    color: "#0a1628",
  },
  {
    cls: "class-9",
    label: "Class 9 Lateral Entry",
    badge: "JNVST Class 9",
    examName: "Navodaya Lateral Entry — Class 9",
    seats: "~10% seats · limited availability",
    highlights: [
      "Mathematics — 35 marks (highest)",
      "Science — 20 marks",
      "English & Hindi — 15 marks each",
      "Social Science — 15 marks",
      "Total: 100 questions in 2.5 hours",
    ],
    color: "#1a3a5c",
  },
];

export default function NavodayaHubPage() {
  return (
    <main>
      <section className="hub-hero">
        <div className="container">
          <p className="breadcrumb-text">
            <Link href="/">Home</Link> &rsaquo; Navodaya SmartSet
          </p>
          <span className="hub-badge dm_sans">🏫 Navodaya SmartSet</span>
          <h1 className="dm_sans">
            Navodaya — <span className="accent dm_sans">JNVST 2026</span>
            <br />
            Choose Your Class
          </h1>
          <p className="hero-sub dm_sans">
            Practice smarter, dream bigger. Select your target class below to
            access exam dates, syllabus, previous year papers, and unlimited
            daily practice.
          </p>
        </div>
      </section>

      <section className="container hub-body dm_sans">
        <p className="section-intro">
          JNVST is conducted for two different classes with different syllabi,
          exam patterns, and eligibility criteria. Select the class you are
          preparing for — each has its own complete preparation zone.
        </p>

        <div className="class-grid">
          {classes.map(
            ({ cls, label, badge, examName, seats, highlights, color }) => (
              <Link
                key={cls}
                href={`/navodaya-smartset/${cls}`}
                className="class-card"
                style={{ "--card-color": color }}
              >
                <div className="cc-header">
                  <span className="cc-badge">{badge}</span>
                  <h2>{label}</h2>
                  <p className="cc-exam">{examName}</p>
                  <p className="cc-seats">🎓 {seats}</p>
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
                    {NAVODAYA_SECTIONS.map((s) => (
                      <span key={s.slug} className="chip">
                        {s.icon} {s.label}
                      </span>
                    ))}
                  </div>
                  <span className="cc-cta">Explore {label} Preparation →</span>
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Quick comparison */}
        <div className="compare-card dm_sans">
          <h2 className="compare-title">
            Class 6 vs Class 9 — Quick Comparison
          </h2>
          <div className="table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Class 6 (JNVST)</th>
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
                  <td>Age criteria</td>
                  <td>9–13 yrs (as on 1 May 2026)</td>
                  <td>13–16 yrs (as on 1 May 2026)</td>
                </tr>
                <tr>
                  <td>School type</td>
                  <td>Government / aided schools only</td>
                  <td>Any recognised school</td>
                </tr>
                <tr>
                  <td>Total questions</td>
                  <td>80 questions</td>
                  <td>100 questions</td>
                </tr>
                <tr>
                  <td>Total marks</td>
                  <td>100 marks</td>
                  <td>100 marks</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2 hours</td>
                  <td>2 hours 30 minutes</td>
                </tr>
                <tr>
                  <td>Seats</td>
                  <td>80 per school</td>
                  <td>~10% of Class 9 strength</td>
                </tr>
                <tr>
                  <td>Phase 2 exam date</td>
                  <td>11 April 2026</td>
                  <td>8 Feb 2026 (conducted)</td>
                </tr>
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
        .hub-hero h1 {
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

        .class-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
        .class-card {
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
        .class-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.14); }

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
        .cc-sub-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-body ul { list-style: none; padding: 0; margin: 0; }
        .cc-body li { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: #334155; padding: 5px 0; border-bottom: 1px dashed #f1f5f9; }
        .cc-body li:last-child { border-bottom: none; }
        .tick { color: #16a34a; font-weight: 800; flex-shrink: 0; }

        .cc-footer { padding: 16px 24px 20px; }
        .cc-tools-label { font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; margin-bottom: 10px; }
        .cc-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .chip { background: #f8fafc; border: 1px solid #e2e8f0; color: #334155; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
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
