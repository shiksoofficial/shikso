import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SAINIK_CLASSES,
  CLASS_LABELS,
  sainikHref,
} from "@/component/sainik/sainikNav";
import {
  EXAM_DATES,
  EXAM_PATTERN,
  ELIGIBILITY,
  CLASS_META,
  OVERVIEW_STATS,
} from "@/component/sainik/sainikData";

export function generateStaticParams() {
  return SAINIK_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls } = await params;
  if (!SAINIK_CLASSES.includes(cls)) return {};
  const label = CLASS_LABELS[cls];
  return {
    title: `Sainik School ${label} Exam Dates 2026 — AISSEE Updates & Information | Shikso`,
    description: `Complete AISSEE ${label} exam schedule 2026 — form filling dates, admit card, exam date, result date, eligibility criteria, and exam pattern.`,
  };
}

const STATUS_STYLES = {
  completed: { bg: "#dcfce7", color: "#15803d", label: "Completed" },
  active: { bg: "#dbeafe", color: "#1d4ed8", label: "Active" },
  upcoming: { bg: "#fef3c7", color: "#b45309", label: "Upcoming" },
  tba: { bg: "#f1f5f9", color: "#64748b", label: "Awaited" },
};

export default async function UpdatesPage({ params }) {
  const { cls } = await params;
  if (!SAINIK_CLASSES.includes(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const dates = EXAM_DATES[cls];
  const pattern = EXAM_PATTERN[cls];
  const elig = ELIGIBILITY[cls];
  const stats = OVERVIEW_STATS[cls];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="upd-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> ›{" "}
            <Link href="/sainik-school-smartset">Sainik School SmartSet</Link> ›{" "}
            <Link href={sainikHref(cls)}>{label}</Link> ›{" "}
            <span>Updates &amp; Information</span>
          </nav>

          <span className="upd-badge">📢 Official Updates 2025–26</span>

          <h1>
            Sainik School <span className="accent">{label}</span>
            <br />
            Exam Dates &amp; Complete Information
          </h1>

          <p className="upd-sub">
            All AISSEE {label} exam dates, eligibility, exam pattern and
            official notifications.
          </p>

          {/* Stat boxes */}
          <div className="stat-row">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <span className="sb-icon">{s.icon}</span>
                <strong className="sb-val">{s.value}</strong>
                <small className="sb-label">{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="page-body container dm_sans">
        {/* Important Dates */}
        <section className="content-section">
          <h2 className="section-title">
            <span className="section-title-bar" /> Important Dates — AISSEE{" "}
            {label}
          </h2>

          <div className="table-card">
            <div className="table-wrap">
              <table className="dates-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Details</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((d) => {
                    const st = STATUS_STYLES[d.status];
                    return (
                      <tr key={d.event}>
                        <td className="td-bold">{d.event}</td>
                        <td className="td-muted">{d.detail}</td>
                        <td className="td-nowrap">{d.date}</td>
                        <td>
                          <span
                            className="status-pill"
                            style={{ background: st.bg, color: st.color }}
                          >
                            ● {st.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Exam Pattern */}
        <section className="content-section">
          <h2 className="section-title">
            <span className="section-title-bar" /> Exam Pattern — AISSEE {label}
          </h2>

          <div className="table-card">
            <div className="table-wrap">
              <table className="dates-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Questions</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {pattern.rows.map((r) => (
                    <tr key={r.subject}>
                      <td
                        className="td-bold"
                        dangerouslySetInnerHTML={{ __html: r.subject }}
                      />
                      <td>{r.questions}</td>
                      <td>
                        <span className="marks-pill">{r.marks}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="content-section">
          <h2 className="section-title">
            <span className="section-title-bar" /> Eligibility — {label}
          </h2>

          <div className="elig-card">
            <h3 className="elig-yes">✓ Who is Eligible</h3>
            <ul className="elig-list">
              {elig.eligible.map((e) => (
                <li key={e}>
                  <span className="tick">✓</span> {e}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-banner">
          <div className="cta-text">
            <h3>Ready to start preparing?</h3>
            <p>
              Practice with full-length mock tests tailored for AISSEE {label}.
            </p>
          </div>
          <div className="cta-btns">
            <Link href={sainikHref(cls, "practice")} className="btn-primary">
              Start Practising →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Hero ── */
        .upd-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 48px 0 40px;
          position: relative;
          overflow: hidden;
        }
        .upd-hero::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb a:hover { color: var(--primaryColor); }
        .breadcrumb span { color: #cbd5e1; }

        .upd-badge {
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
          margin-bottom: 14px;
        }

        .upd-hero h1 {
          font-size: clamp(22px, 3.5vw, 34px);
          font-weight: 800;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 12px;
        }
        .accent { color: var(--primaryColor); }

        .upd-sub {
          font-size: 14.5px;
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        /* ── Stat boxes ── */
        .stat-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 12px;
          padding: 16px 22px;
          min-width: 130px;
        }
        .sb-icon { font-size: 22px; line-height: 1; }
        .sb-val  { font-size: 22px; font-weight: 800; color: #fff; line-height: 1.2; }
        .sb-label { font-size: 11.5px; color: #94a3b8; text-align: center; line-height: 1.4; }

        /* ── Page body ── */
        .page-body {
          padding: 40px 24px 80px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Sections ── */
        .content-section { margin-bottom: 40px; }

        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 17px;
          font-weight: 800;
          color: #0a1628;
          margin-bottom: 16px;
        }
        .section-title-bar {
          display: inline-block;
          width: 4px;
          height: 20px;
          background: var(--primaryColor);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── Table card ── */
        .table-card {
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0,0,0,.07);
          overflow: hidden;
        }
        .table-wrap { overflow-x: auto; }

        .dates-table { width: 100%; border-collapse: collapse; }
        .dates-table thead tr {
          background: #f8fafc;
          border-bottom: 2px solid #e2e8f0;
        }
        .dates-table th {
          padding: 12px 16px;
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .05em;
          color: #94a3b8;
          text-align: left;
        }
        .dates-table tbody tr {
          border-bottom: 1px solid #f1f5f9;
          transition: background .12s;
        }
        .dates-table tbody tr:last-child { border-bottom: none; }
        .dates-table tbody tr:hover { background: #fafafa; }
        .dates-table td { padding: 13px 16px; font-size: 13.5px; vertical-align: middle; color: #334155; }

        .td-bold   { font-weight: 700; color: #0a1628; }
        .td-muted  { color: #64748b; }
        .td-nowrap { white-space: nowrap; }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .marks-pill {
          display: inline-block;
          background: #0a1628;
          color: #fff;
          border-radius: 20px;
          padding: 3px 14px;
          font-size: 12.5px;
          font-weight: 800;
        }

        /* ── Eligibility ── */
        .elig-card {
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0,0,0,.07);
          padding: 20px 24px;
        }
        .elig-card h3 {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .elig-yes { color: #15803d; }
        .elig-no  { color: #dc2626; }

        .elig-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .elig-list li {
          display: flex;
          gap: 10px;
          padding: 10px 0;
          font-size: 13.5px;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
          line-height: 1.5;
          align-items: flex-start;
        }
        .elig-list li:last-child { border-bottom: none; }
        .tick  { color: #16a34a; font-weight: 800; flex-shrink: 0; margin-top: 1px; }
        .cross { color: #dc2626; font-weight: 800; flex-shrink: 0; margin-top: 1px; }

        /* ── CTA Banner ── */
        .cta-banner {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%);
          border-radius: 16px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 32px;
        }
        .cta-text h3 {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }
        .cta-text p {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }
        .cta-btns {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .btn-primary {
          padding: 11px 22px;
          background: var(--primaryColor);
          color: #fff;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s;
        }
        .btn-primary:hover { background: #ea580c; }
        .btn-ghost {
          padding: 11px 22px;
          background: rgba(255,255,255,.1);
          color: #fff;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,.2);
          white-space: nowrap;
          transition: background .2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,.18); }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .stat-box { min-width: 110px; padding: 12px 14px; }
          .cta-banner { flex-direction: column; align-items: flex-start; }
          .cta-btns { width: 100%; }
          .btn-primary, .btn-ghost { flex: 1; text-align: center; }
          .page-body { padding: 28px 16px 60px; }
        }
      `}</style>
    </main>
  );
}
