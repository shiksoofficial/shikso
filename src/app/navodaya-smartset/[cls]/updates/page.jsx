// app/navodaya-smartset/[cls]/updates/page.tsx
// Full content page — exam dates, exam pattern, eligibility, notifications, FAQ.

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  NAVODAYA_CLASSES,
  CLASS_LABELS,
  navodayaHref,
  isNavodayaClass,
  normalizeNavodayaClass,
} from "@/component/navodaya/navodayaNav";
import {
  EXAM_DATES,
  EXAM_PATTERN,
  ELIGIBILITY,
  OVERVIEW_STATS,
  NOTIFICATIONS,
} from "@/component/navodaya/navodayaData";

export function generateStaticParams() {
  return NAVODAYA_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) return {};
  const label = CLASS_LABELS[cls];
  return {
    title: `Navodaya ${label} Exam Dates 2026 — JNVST Updates & Information | Shikso`,
    description: `Complete JNVST ${label} schedule 2026 — form filling dates, admit card, exam date, result, eligibility, and exam pattern. Updated from navodaya.gov.in.`,
  };
}

const STATUS_STYLES = {
  completed: {
    bg: "#dcfce7",
    color: "#15803d",
    dot: "#16a34a",
    label: "Completed",
  },
  active: {
    bg: "#dbeafe",
    color: "#1d4ed8",
    dot: "#2563eb",
    label: "Available",
  },
  upcoming: {
    bg: "#fef3c7",
    color: "#b45309",
    dot: "#d97706",
    label: "Upcoming",
  },
  tba: { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8", label: "Awaited" },
};

export default async function UpdatesPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const dates = EXAM_DATES[cls];
  const pattern = EXAM_PATTERN[cls];
  const elig = ELIGIBILITY[cls];
  const stats = OVERVIEW_STATS[cls];
  const notifications = NOTIFICATIONS[cls];

  return (
    <main>
      {/* Hero */}
      <section className="upd-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/navodaya-smartset">Navodaya SmartSet</Link> &rsaquo;{" "}
            <Link href={navodayaHref(cls, undefined, "/navodaya-smartset")}>
              {label}
            </Link>{" "}
            &rsaquo; <span>Updates &amp; Information</span>
          </nav>
          <span className="upd-badge">📢 Official Updates 2025–26</span>
          <h1>
            Navodaya <span className="accent">{label}</span>
            <br />
            Exam Dates &amp; Complete Information
          </h1>
          <p className="upd-sub dm_sans">
            All JNVST {label} exam dates, eligibility, exam pattern, and
            official notifications — updated regularly from navodaya.gov.in.
          </p>
          <div className="stat-row">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <span>{s.icon}</span>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="page-grid container dm_sans">
        <div className="main-col">
          {/* ── Important Dates ── */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fff3cd" }}>
                📅
              </span>
              <div>
                <h2>Important Dates — JNVST {label} 2025–26</h2>
                <p>Official schedule for the entire admission cycle</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 JNVST {label} — Complete Date Schedule</span>
                <span className="updated-tag">Updated: March 2026</span>
              </div>
              <div className="table-wrap">
                <table className="data-table">
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
                          <td className="td-bold td-nowrap">{d.date}</td>
                          <td>
                            <span
                              className="status-pill"
                              style={{ background: st.bg, color: st.color }}
                            >
                              <span
                                className="dot"
                                style={{ background: st.dot }}
                              />
                              {st.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="source-note">
                ℹ️ Source:{" "}
                <a
                  href="https://navodaya.gov.in"
                  target="_blank"
                  rel="noopener"
                >
                  navodaya.gov.in
                </a>{" "}
                — Always verify from the official site before taking any action.
              </div>
            </div>
          </section>

          {/* ── Exam Pattern ── */}
          <section className="content-block dm_sans">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dbeafe" }}>
                📋
              </span>
              <div>
                <h2>Exam Pattern — JNVST {label}</h2>
                <p>Full structure — subjects, marks, duration</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      {cls === "class-6" && <th>Section</th>}
                      <th>Subject</th>
                      <th>Questions</th>
                      <th>Marks</th>
                      {cls === "class-6" && <th>Time</th>}
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pattern.rows.map((r) => (
                      <tr key={r.subject}>
                        {cls === "class-6" && (
                          <td className="td-muted">{r.section}</td>
                        )}
                        <td className="td-bold">{r.subject}</td>
                        <td className="td-muted">{r.questions} Qs</td>
                        <td>
                          <span className="marks-pill">{r.marks}M</span>
                        </td>
                        {cls === "class-6" && (
                          <td className="td-muted">{r.duration}</td>
                        )}
                        <td className="td-muted">{r.note ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      {cls === "class-6" && <td className="td-bold">—</td>}
                      <td className="td-bold ">TOTAL</td>
                      <td className="td-bold">{pattern.totalQ} Qs</td>
                      <td>
                        <span
                          className="marks-pill"
                          style={{ background: "#0a1628" }}
                        >
                          {pattern.totalM}M
                        </span>
                      </td>
                      {cls === "class-6" && (
                        <td className="td-bold">{pattern.duration}</td>
                      )}
                      <td className="td-bold">{pattern.duration}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="imp-note dm_sans">
              <strong>⚠️ Key Points</strong>
              <p>
                • <strong>No negative marking</strong> — attempt every question,
                even if unsure.
                <br />
                {cls === "class-6"
                  ? "• Mental Ability (MAT) carries 50% of total marks — prioritise this section daily.\n                • Exam is bilingual — question paper in Hindi and English both."
                  : "• Mathematics carries 35% of total marks — practise this every day.\n                • Syllabus is based on NCERT Class 6, 7, and 8 curriculum."}
                <br />• Exam is conducted at a government school near you — not
                at your own school.
              </p>
            </div>
          </section>

          {/* ── Eligibility ── */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>
                ✅
              </span>
              <div>
                <h2>Eligibility Criteria — {label}</h2>
                <p>Age: {elig.ageRange}</p>
              </div>
            </div>
            <div className="elig-grid">
              <div className="elig-card">
                <h3 className="elig-yes">✅ You Are Eligible If —</h3>
                <ul className="elig-list">
                  {elig.eligible.map((e) => (
                    <li key={e}>
                      <span className="tick">✓</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="elig-card">
                <h3 className="elig-no">❌ You Are NOT Eligible If —</h3>
                <ul className="elig-list">
                  {elig.notEligible.map((e) => (
                    <li key={e}>
                      <span className="cross">✗</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Notifications ── */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fce7f3" }}>
                🔔
              </span>
              <div>
                <h2>Official Notifications</h2>
                <p>Latest notices from Navodaya Vidyalaya Samiti</p>
              </div>
            </div>
            <div className="notif-list">
              {notifications.map((n) => (
                <div key={n.title} className="notif-item">
                  <div className="notif-date" style={{ background: n.bgColor }}>
                    <span className="nd-day">{n.day}</span>
                    <span className="nd-mon">{n.month}</span>
                  </div>
                  <div className="notif-body">
                    <span
                      className="notif-tag"
                      style={{ background: n.tagBg, color: n.tagColor }}
                    >
                      {n.tag}
                    </span>
                    <h4>{n.title}</h4>
                    <p>{n.body}</p>
                    {n.links.length > 0 && (
                      <div className="notif-links">
                        {n.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className={
                              l.style === "orange"
                                ? "btn-orange-sm"
                                : "btn-blue-sm"
                            }
                            target={
                              l.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              l.href.startsWith("http") ? "noopener" : undefined
                            }
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="cta-banner dm_sans">
            <div>
              <h3>Start Your {label} Preparation on Shikso 🚀</h3>
              <p>
                Topic-wise practice, mock tests, and previous year papers — free
                to start.
              </p>
            </div>
            <div className="cta-btns">
              <Link
                href={navodayaHref(cls, "practice", "/navodaya-smartset")}
                className="btn-primary"
              >
                Start Practising →
              </Link>
              <Link
                href={navodayaHref(
                  cls,
                  "previous-year-papers",
                  "/navodaya-smartset",
                )}
                className="btn-ghost"
              >
                Previous Year Papers
              </Link>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section className="content-block dm_sans">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#f0fdf4" }}>
                ❓
              </span>
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about JNVST {label}</p>
              </div>
            </div>
            <div className="faq-list">
              {getFaqs(cls).map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">
                    {faq.q}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div
                    className="faq-a"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* ── Sidebar ── */}
        <aside className="side-col">
          {/* Countdown / Status */}
          <div className="widget">
            <div className="widget-head">⏱️ Exam Status</div>
            <div className="widget-body">
              {cls === "class-6" ? (
                <>
                  <p className="w-note">JNVST Class 6 Phase 2 is coming up:</p>
                  <div className="exam-status-box">
                    📅 <strong>April 11, 2026</strong>
                    <br />
                    <small>11:30 AM at your exam centre</small>
                  </div>
                </>
              ) : (
                <>
                  <p className="w-note">
                    JNVST Class 9 exam was held on Feb 8, 2026. Awaiting
                    results.
                  </p>
                  <div
                    className="exam-status-box"
                    style={{
                      background: "#fef3c7",
                      border: "1px solid #fde68a",
                      color: "#92400e",
                    }}
                  >
                    📊 Result Expected: April 2026
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="widget">
            <div className="widget-head">🔗 Quick Links</div>
            <div className="widget-body">
              {[
                {
                  label: "🌐 Official NVS Website",
                  href: "https://navodaya.gov.in",
                  ext: true,
                },
                {
                  label: "⬇ Download Admit Card",
                  href: "https://navodaya.gov.in",
                  ext: true,
                },
                {
                  label: "📄 Previous Year Papers",
                  href: navodayaHref(
                    cls,
                    "previous-year-papers",
                    "/navodaya-smartset",
                  ),
                  ext: false,
                },
                {
                  label: "📝 Free Mock Tests",
                  href: navodayaHref(cls, "mock-tests", "/navodaya-smartset"),
                  ext: false,
                },
                {
                  label: "🧠 Topic-wise Practice",
                  href: navodayaHref(cls, "practice", "/navodaya-smartset"),
                  ext: false,
                },
                {
                  label: "📚 Detailed Syllabus",
                  href: navodayaHref(cls, "syllabus", "/navodaya-smartset"),
                  ext: false,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.ext ? "_blank" : undefined}
                  rel={l.ext ? "noopener" : undefined}
                  className="quick-link"
                >
                  {l.label}
                  <span>›</span>
                </a>
              ))}
            </div>
          </div>

          <div className="warn-note">
            <strong>⚠️ Always Verify</strong>
            <p>
              Exam dates can change. Cross-check with{" "}
              <strong>navodaya.gov.in</strong> before taking any action.
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .upd-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 48px 0 40px;
          position: relative; overflow: hidden;
        }
        .upd-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb a:hover { color: var(--primaryColor); }
        .breadcrumb span { color: #cbd5e1; }
        .upd-badge {
          display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35);
          color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px;
        }
        .upd-hero h1 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 12px; }
        .accent { color: var(--primaryColor); }
        .upd-sub { font-size: 14.5px; color: #94a3b8; max-width: 520px; margin-bottom: 24px; line-height: 1.6; }

        .stat-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .stat-box {
          display: flex; flex-direction: column; align-items: center;
          background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
          border-radius: 10px; padding: 12px 18px; gap: 2px;
        }
        .stat-box span { font-size: 18px; }
        .stat-box strong { font-size: 19px; font-weight: 800; color: #fff; line-height: 1; }
        .stat-box small { font-size: 11px; color: #64748b; text-align: center; }

        /* Layout */
        .page-grid { display: grid; grid-template-columns: 1fr 296px; gap: 28px; padding: 36px 24px 80px; align-items: start; }
        .side-col { position: sticky; top: 60px; }

        /* Section blocks */
        .content-block { margin-bottom: 36px; }
        .block-label { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .bl-icon { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .block-label h2 { font-size: 18px; font-weight: 800; color: #0a1628; margin-bottom: 2px; }
        .block-label p { font-size: 12.5px; color: #94a3b8; }

        /* Table card */
        .table-card { background: #fff; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,.07); overflow: hidden; }
        .table-card-head {
          background: linear-gradient(90deg, #0a1628 0%, #1a3a5c 100%);
          padding: 14px 20px; display: flex; align-items: center; justify-content: space-between;
          font-size: 14px; font-weight: 700; color: #fff;
        }
        .updated-tag { font-size: 11px; color: #94a3b8; background: rgba(255,255,255,.08); padding: 3px 10px; border-radius: 20px; }
        .table-wrap { overflow-x: auto; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-table thead tr { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
        .data-table th { padding: 11px 16px; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; text-align: left; }
        .data-table tbody tr { border-bottom: 1px solid #f1f5f9; transition: background .12s; }
        .data-table tbody tr:last-child { border-bottom: none; }
        .data-table tbody tr:hover { background: #fafafa; }
        .data-table tfoot tr { background: #fff7ed; border-top: 2px solid #fed7aa; }
        .data-table td { padding: 13px 16px; font-size: 13.5px; vertical-align: middle; }
        .td-bold { font-weight: 700; color: #0a1628; }
        .td-muted { color: #475569; }
        .td-nowrap { white-space: nowrap; }

        .status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 11.5px; font-weight: 700; white-space: nowrap; }
        .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .marks-pill { display: inline-block; background: #1a3a5c; color: #fff; border-radius: 20px; padding: 2px 12px; font-size: 12px; font-weight: 800; }
        .source-note { padding: 11px 16px; background: #eff6ff; border-top: 1px solid #bfdbfe; font-size: 12.5px; color: #1d4ed8; }
        .source-note a { font-weight: 700; }

        /* Eligibility */
        .elig-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .elig-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
        .elig-card h3 { font-size: 13.5px; font-weight: 800; margin-bottom: 12px; }
        .elig-yes { color: #15803d; }
        .elig-no  { color: #dc2626; }
        .elig-list { list-style: none; padding: 0; margin: 0; }
        .elig-list li { display: flex; gap: 8px; padding: 7px 0; font-size: 13px; color: #334155; border-bottom: 1px solid #f1f5f9; line-height: 1.5; }
        .elig-list li:last-child { border-bottom: none; }
        .tick  { color: #16a34a; font-weight: 800; flex-shrink: 0; }
        .cross { color: #dc2626; font-weight: 800; flex-shrink: 0; }

        /* Imp note */
        .imp-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 14px 16px; margin-top: 14px; font-size: 13.5px; color: #78350f; line-height: 1.7; }
        .imp-note strong { display: block; font-size: 13px; font-weight: 800; color: #92400e; margin-bottom: 6px; }

        /* Notifications */
        .notif-list { display: flex; flex-direction: column; gap: 10px; }
        .notif-item { display: flex; gap: 14px; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px; box-shadow: 0 1px 4px rgba(0,0,0,.05); transition: box-shadow .2s; }
        .notif-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,.1); }
        .notif-date { text-align: center; color: #fff; border-radius: 8px; padding: 8px 12px; min-width: 56px; flex-shrink: 0; }
        .nd-day { display: block; font-size: 20px; font-weight: 800; line-height: 1; }
        .nd-mon { display: block; font-size: 10px; font-weight: 600; opacity: .8; margin-top: 2px; }
        .notif-body { flex: 1; }
        .notif-tag { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 700; margin-bottom: 6px; }
        .notif-body h4 { font-size: 14px; font-weight: 700; color: #0a1628; margin-bottom: 4px; }
        .notif-body p { font-size: 13px; color: #64748b; line-height: 1.6; }
        .notif-links { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
        .btn-orange-sm { padding: 5px 14px; background: var(--primaryColor); color: #fff; border-radius: 20px; font-size: 12px; font-weight: 700; text-decoration: none; transition: background .2s; }
        .btn-orange-sm:hover { background: #ea580c; }
        .btn-blue-sm { padding: 5px 14px; background: #eff6ff; color: #1d4ed8; border-radius: 20px; font-size: 12px; font-weight: 700; text-decoration: none; transition: background .2s; }
        .btn-blue-sm:hover { background: #bfdbfe; }

        /* CTA */
        .cta-banner { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%); border-radius: 16px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 32px; }
        .cta-banner h3 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .cta-banner p { font-size: 13px; color: #94a3b8; }
        .cta-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
        .btn-primary { padding: 11px 22px; background: var(--primaryColor); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 800; text-decoration: none; white-space: nowrap; transition: background .2s; }
        .btn-primary:hover { background: #ea580c; }
        .btn-ghost { padding: 11px 22px; background: rgba(255,255,255,.1); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 700; text-decoration: none; border: 1px solid rgba(255,255,255,.2); white-space: nowrap; }
        .btn-ghost:hover { background: rgba(255,255,255,.18); }

        /* FAQ */
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .faq-q { padding: 15px 18px; font-size: 14px; font-weight: 700; color: #0a1628; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-icon { font-size: 18px; font-weight: 700; color: #94a3b8; flex-shrink: 0; }
        details[open] .faq-icon { color: var(--primaryColor); transform: rotate(45deg); display: inline-block; }
        .faq-a { padding: 0 18px 16px; font-size: 13.5px; color: #475569; line-height: 1.7; border-top: 1px solid #f1f5f9; }

        /* Sidebar */
        .widget { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,.06); overflow: hidden; margin-bottom: 16px; }
        .widget-head { background: #0a1628; color: #fff; padding: 12px 16px; font-size: 13.5px; font-weight: 700; }
        .widget-body { padding: 14px 16px; }
        .w-note { font-size: 13px; color: #475569; margin-bottom: 10px; line-height: 1.5; }
        .exam-status-box { background: #dcfce7; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px; font-size: 13px; font-weight: 700; color: #15803d; text-align: center; line-height: 1.6; }
        .quick-link { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #0a1628; text-decoration: none; transition: color .15s; }
        .quick-link:last-child { border-bottom: none; }
        .quick-link:hover { color: var(--primaryColor); }
        .quick-link span { color: #94a3b8; }
        .warn-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 12px 14px; font-size: 12.5px; color: #78350f; line-height: 1.6; }
        .warn-note strong { display: block; font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 4px; }

        @media (max-width: 1024px) { .page-grid { grid-template-columns: 1fr; } .side-col { position: static; } }
        @media (max-width: 640px) {
          .elig-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; }
          .cta-btns { width: 100%; }
        }
      `}</style>
    </main>
  );
}

// ── FAQ content per class ──────────────────────────────────────────
function getFaqs(cls) {
  const shared = [
    {
      q: "Is Navodaya Vidyalaya education really free?",
      a: "Yes — completely free up to Class 8. From Class 9, a small fee of <strong>₹600 per month</strong> applies for General and OBC students. <strong>Girls, SC/ST students, and BPL families pay nothing</strong> throughout Class 6 to 12. This includes hostel, food, books, uniform, and tuition — all free.",
    },
    {
      q: "Is there negative marking in JNVST?",
      a: "<strong>No. There is no negative marking in JNVST.</strong> Attempt every question — leaving blank gives you 0, but guessing might give you the correct answer. Always attempt all questions.",
    },
    {
      q: "Can students from private schools apply for Navodaya?",
      a: "For Class 6: <strong>No</strong> — only students who studied in government or government-aided schools in Classes 3, 4, and 5 in the same district are eligible. For Class 9: <strong>Yes</strong> — any recognised school is acceptable, but the school must be in the same state as the JNV.",
    },
    {
      q: "How many seats are available in each Navodaya school?",
      a: "Each JNV selects <strong>80 students for Class 6</strong> every year. Of these, 75% are reserved for rural students. Reservations also apply: SC (15%), ST (7.5%), and 1/3rd seats are reserved for girls.",
    },
  ];

  if (cls === "class-6") {
    return [
      {
        q: "When is the JNVST Class 6 Phase 2 exam date 2026?",
        a: "<strong>April 11, 2026</strong> from 11:30 AM to 1:30 PM at the allotted exam centre. Phase 1 (for winter-vacation states) was conducted on December 13, 2025 and is already complete.",
      },
      {
        q: "Which section is most important in JNVST Class 6?",
        a: "<strong>Mental Ability Test (MAT)</strong> — it carries 50 out of 100 marks. It uses non-verbal (image-based) questions to test pattern recognition and logical thinking. Students who practise MAT questions daily have the highest chance of clearing the cutoff.",
      },
      {
        q: "What is the expected cutoff for JNVST Class 6?",
        a: "JNVST has no fixed cutoff — it is <strong>merit-based per district</strong>. Generally, scoring <strong>75+ out of 100</strong> gives a strong chance. In competitive districts, the cutoff can reach 80–85. In less competitive districts, 65–70 may be sufficient.",
      },
      ...shared,
    ];
  }

  return [
    {
      q: "When was the JNVST Class 9 exam conducted in 2026?",
      a: "The JNVST Class 9 lateral entry exam was conducted on <strong>February 8, 2026</strong>. Results are expected in <strong>April 2026</strong> at navodaya.gov.in.",
    },
    {
      q: "Which subject carries the most marks in JNVST Class 9?",
      a: "<strong>Mathematics carries 35 out of 100 marks</strong> — the highest of any subject. After that: Science (20 marks), English (15 marks), Hindi (15 marks), and Social Science (15 marks). Focus on Maths every day.",
    },
    {
      q: "What is the syllabus for JNVST Class 9?",
      a: 'The Class 9 exam is based on the <strong>NCERT syllabus of Classes 6, 7, and 8</strong>. It covers Mathematics, Science, English, Hindi, and Social Science. Visit the <a href="/navodaya-smartset/class-9/syllabus" style="color:var(--primaryColor);font-weight:700;">Syllabus page</a> for the full topic-wise breakdown.',
    },
    ...shared,
  ];
}
