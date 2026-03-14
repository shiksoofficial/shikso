// app/rms-smartset/[cls]/updates/page.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { RMS_CLASSES, RMS_CLASS_LABELS, rmsHref, isRMSClass, normalizeRMSClass } from "@/component/rms/rmsNav";
import { EXAM_DATES, EXAM_PATTERN, ELIGIBILITY, RESERVATION, APPLICATION_FEE, NOTIFICATIONS, FAQS, RMS_SCHOOLS } from "@/component/rms/rmsData";

export function generateStaticParams() {
  return RMS_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) return {};
  const label = RMS_CLASS_LABELS[cls];
  return {
    title: `RMS CET ${label} Exam Dates 2026-27 — Updates & Information | Shikso`,
    description: `Complete RMS CET ${label} schedule — application dates, admit card, exam date, result, eligibility, and exam pattern. All Rashtriya Military School updates in one place.`,
  };
}

const STATUS_STYLES = {
  completed: { bg: "#dcfce7", color: "#15803d", dot: "#16a34a", label: "Completed" },
  active:    { bg: "#dbeafe", color: "#1d4ed8", dot: "#2563eb", label: "Available" },
  upcoming:  { bg: "#fef3c7", color: "#b45309", dot: "#d97706", label: "Upcoming"  },
  tba:       { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8", label: "Expected"  },
};

export default async function RMSUpdatesPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();

  const label   = RMS_CLASS_LABELS[cls];
  const dates   = EXAM_DATES[cls];
  const pattern = EXAM_PATTERN[cls];
  const elig    = ELIGIBILITY[cls];
  const faqs    = FAQS[cls];

  const dateRows = [
    { event: "Application Form Opens",  detail: "Online via NIELIT portal",                                                           date: dates.applicationStart,     status: "tba" },
    { event: "Last Date to Apply",      detail: "Submit form + fee online",                                                           date: dates.applicationEnd,       status: "tba" },
    { event: "Admit Card Release",      detail: "Download from NIELIT portal",                                                        date: dates.admitCard,            status: "tba" },
    { event: "CET Written Exam",        detail: cls === "class-6" ? "OMR MCQ · 200 marks · Bilingual" : "OMR MCQ · 2 Papers · English only", date: dates.examDate,   status: "tba" },
    { event: "Result Declaration",      detail: "Shortlist for interview",                                                            date: dates.result,               status: "tba" },
    { event: "Interview Rounds",        detail: `${pattern.interviewMarks} marks`,                                                   date: dates.interviews,           status: "tba" },
    { event: "Medical Fitness Exam",    detail: "Army hospital",                                                                      date: dates.medicalExam,          status: "tba" },
    { event: "Academic Session Starts", detail: "Boarding commences",                                                                 date: dates.academicSessionStart, status: "tba" },
  ];

  return (
    <main>
      <section className="upd-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/rms-smartset">RMS SmartSet</Link> &rsaquo;{" "}
            <Link href={rmsHref(cls)}>{label}</Link>{" "}
            &rsaquo; <span>Updates &amp; Information</span>
          </nav>
          <span className="upd-badge">📢 Official Updates 2026–27</span>
          <h1>
            RMS CET <span className="accent">{label}</span>
            <br />
            Exam Dates &amp; Complete Information
          </h1>
          <p className="upd-sub dm_sans">
            All RMS CET {label} exam dates, eligibility, exam pattern, and official
            notifications — updated for 2026-27 cycle.
          </p>
          <div className="stat-row">
            {[
              { icon: "🏫", value: "5",                      label: "RMS Schools"   },
              { icon: "📝", value: pattern.totalMarks,       label: "Written Marks" },
              { icon: "🎤", value: pattern.interviewMarks,   label: "Interview"     },
              { icon: "🚫", value: "None",                   label: "Neg. Marking"  },
              { icon: "📅", value: "Dec",                    label: "Exam Month"    },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <span>{s.icon}</span>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-grid container dm_sans">
        <div className="main-col">

          {/* Notifications */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fce7f3" }}>🔔</span>
              <div>
                <h2>Latest Notifications</h2>
                <p>Recent updates from Rashtriya Military Schools</p>
              </div>
            </div>
            <div className="notif-list">
              {NOTIFICATIONS.map((n, i) => (
                <div key={i} className="notif-item" style={{ borderLeft: n.important ? "4px solid #F97316" : "4px solid #e2e8f0" }}>
                  <div className="notif-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <span className="notif-tag" style={{ background: "#dbeafe", color: "#1d4ed8" }}>{n.tag}</span>
                      <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{n.date}</span>
                    </div>
                    <h4>{n.title}</h4>
                    <p>{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Important Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fff3cd" }}>📅</span>
              <div>
                <h2>Important Dates — RMS CET {label} 2026-27</h2>
                <p>Official schedule for the entire admission cycle</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 RMS CET {label} — Complete Date Schedule</span>
                <span className="updated-tag">Ref: Last CET Dec 7, 2025</span>
              </div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Details</th>
                      <th>Expected Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dateRows.map((d) => {
                      const st = STATUS_STYLES[d.status];
                      return (
                        <tr key={d.event}>
                          <td className="td-bold">{d.event}</td>
                          <td className="td-muted">{d.detail}</td>
                          <td className="td-bold td-nowrap">{d.date}</td>
                          <td>
                            <span className="status-pill" style={{ background: st.bg, color: st.color }}>
                              <span className="dot" style={{ background: st.dot }} />
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
                ℹ️ Official site:{" "}
                <a href={`https://${dates.officialSite}`} target="_blank" rel="noopener">{dates.officialSite}</a>
                {" "}· Apply at:{" "}
                <a href={`https://${dates.applicationSite}`} target="_blank" rel="noopener">{dates.applicationSite}</a>
              </div>
            </div>
          </section>

          {/* Exam Pattern */}
          <section className="content-block dm_sans">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dbeafe" }}>📋</span>
              <div>
                <h2>Exam Pattern — RMS CET {label}</h2>
                <p>Full structure — subjects, marks, duration</p>
              </div>
            </div>
            {cls === "class-6" && (
              <div className="table-card">
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Subject</th><th>Questions</th><th>Marks</th><th>Counts in Merit?</th><th>Min. Qualifying</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pattern.papers.map((p) => (
                        <tr key={p.subject}>
                          <td className="td-bold">{p.subject}</td>
                          <td className="td-muted">{p.questions} Qs</td>
                          <td><span className="marks-pill">{p.marks}M</span></td>
                          <td>
                            <span className="status-pill" style={{ background: p.inMerit ? "#dcfce7" : "#fef3c7", color: p.inMerit ? "#15803d" : "#b45309" }}>
                              <span className="dot" style={{ background: p.inMerit ? "#16a34a" : "#d97706" }} />
                              {p.inMerit ? "Yes" : "Qualifying only"}
                            </span>
                          </td>
                          <td className="td-muted">{p.minQualifying}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="td-bold">TOTAL</td>
                        <td className="td-bold">200 Qs</td>
                        <td><span className="marks-pill" style={{ background: "#0a1628" }}>200M</span></td>
                        <td className="td-bold">150M in merit</td>
                        <td className="td-bold">{pattern.duration}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
            {cls === "class-9" && pattern.papers.map((paper) => (
              <div key={paper.paperNum} className="table-card" style={{ marginBottom: 16 }}>
                <div className="table-card-head">
                  <span>{paper.paperNum} — {paper.totalMarks} marks</span>
                  <span className="updated-tag">Min. qualifying: {paper.minQualifying}</span>
                </div>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead><tr><th>Subject</th><th>Questions</th><th>Marks</th></tr></thead>
                    <tbody>
                      {paper.subjects.map((s) => (
                        <tr key={s.subject}>
                          <td className="td-bold">{s.subject}</td>
                          <td className="td-muted">{s.questions} Qs</td>
                          <td><span className="marks-pill">{s.marks}M</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            <div className="imp-note dm_sans">
              <strong>⚠️ Key Points</strong>
              <p>
                • <strong>No negative marking</strong> — attempt every question.<br />
                {cls === "class-6"
                  ? "• English (50 marks) is qualifying only — NOT counted in the merit list.\n• Minimum 40% required in each of Maths, GK, and Intelligence.\n• Exam is bilingual — Hindi and English both."
                  : "• Must score minimum 50% in Paper I AND 50% in Paper II separately.\n• Interview carries 50 marks — higher than Class 6 (20 marks).\n• All papers are in English only."}
                <br />• All 5 RMS schools are fully residential — boarders only.
              </p>
            </div>
          </section>

          {/* Eligibility */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>✅</span>
              <div>
                <h2>Eligibility Criteria — {label}</h2>
                <p>Age: {elig.ageRange}</p>
              </div>
            </div>
            <div className="elig-grid">
              <div className="elig-card">
                <h3 className="elig-yes">✅ You Are Eligible If —</h3>
                <ul className="elig-list">
                  {[elig.gender, elig.ageRange, elig.qualification, elig.schoolType, elig.medium].map((e) => (
                    <li key={e}><span className="tick">✓</span>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="elig-card">
                <h3 style={{ color: "#2563eb", fontSize: "13.5px", fontWeight: 800, marginBottom: 12 }}>ℹ️ Important Notes —</h3>
                <ul className="elig-list">
                  {[
                    `Date of birth: ${elig.ageBorn}`,
                    `Age relaxation: ${elig.ageRelaxation}`,
                    `Girls reservation: ${elig.reservationGirls}`,
                    "Boarding only — no day scholars admitted",
                    "Application fee: ₹550 general · ₹275 SC/ST",
                  ].map((e) => (
                    <li key={e}><span style={{ color: "#2563eb", fontWeight: 800, flexShrink: 0 }}>ℹ</span>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Selection Process */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#f0fdf4" }}>🏆</span>
              <div>
                <h2>Selection Process</h2>
                <p>Step-by-step from application to admission</p>
              </div>
            </div>
            <div className="steps-list">
              {pattern.selectionProcess.map((step, i) => (
                <div key={step} className="step-item">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="cta-banner dm_sans">
            <div>
              <h3>Start Your RMS CET {label} Preparation 🚀</h3>
              <p>Topic-wise syllabus, previous year papers, and mock tests — all in one place.</p>
            </div>
            <div className="cta-btns">
              <Link href={rmsHref(cls, "syllabus")} className="btn-primary">View Syllabus →</Link>
              <Link href={rmsHref(cls, "previous-year-papers")} className="btn-ghost">Previous Year Papers</Link>
            </div>
          </div>

          {/* FAQ */}
          <section className="content-block dm_sans">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#f0fdf4" }}>❓</span>
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about RMS CET {label}</p>
              </div>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">
                    {faq.q}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="side-col">
          <div className="widget">
            <div className="widget-head">⏱️ Exam Status</div>
            <div className="widget-body">
              <p className="w-note">RMS CET 2026-27 result declared Feb 9, 2026. Next cycle starts September 2026.</p>
              <div className="exam-status-box" style={{ background: "#fef3c7", border: "1px solid #fde68a", color: "#92400e" }}>
                📅 Next CET: December 2026<br />
                <small>Applications open: Sep 2026</small>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">🔗 Quick Links</div>
            <div className="widget-body">
              {[
                { label: "🌐 Official RMS Website",  href: `https://${dates.officialSite}`,     ext: true  },
                { label: "📝 Apply Online (NIELIT)", href: `https://${dates.applicationSite}`,  ext: true  },
                { label: "📄 Previous Year Papers",  href: rmsHref(cls, "previous-year-papers"), ext: false },
                { label: "🏆 Mock Tests",            href: rmsHref(cls, "mock-tests"),           ext: false },
                { label: "🧠 Topic-wise Practice",   href: rmsHref(cls, "practice"),             ext: false },
                { label: "📚 Detailed Syllabus",     href: rmsHref(cls, "syllabus"),             ext: false },
              ].map((l) => (
                <a key={l.label} href={l.href} target={l.ext ? "_blank" : undefined} rel={l.ext ? "noopener" : undefined} className="quick-link">
                  {l.label}<span>›</span>
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">💰 Application Fee</div>
            <div className="widget-body">
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginBottom: 2 }}>GENERAL / OBC</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#0a1628" }}>{APPLICATION_FEE.general}</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginBottom: 2 }}>SC / ST</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#0a1628" }}>{APPLICATION_FEE.scSt}</div>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>{APPLICATION_FEE.mode}</div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">🏫 5 RMS Schools</div>
            <div className="widget-body">
              {RMS_SCHOOLS.map((school) => (
                <div key={school.name} style={{ paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "#0a1628" }}>{school.name}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{school.location}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8" }}>Est. {school.established}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="warn-note">
            <strong>⚠️ Always Verify</strong>
            <p>Exam dates can change. Cross-check with <strong>{dates.officialSite}</strong> before taking any action.</p>
          </div>
        </aside>
      </div>

      <style>{`
        .upd-hero { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%); padding: 48px 0 40px; position: relative; overflow: hidden; }
        .upd-hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%); border-radius: 50%; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb span { color: #cbd5e1; }
        .upd-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px; }
        .upd-hero h1 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 12px; }
        .accent { color: #F97316; }
        .upd-sub { font-size: 14.5px; color: #94a3b8; max-width: 520px; margin-bottom: 24px; line-height: 1.6; }
        .stat-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .stat-box { display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 10px; padding: 12px 18px; gap: 2px; }
        .stat-box span { font-size: 18px; }
        .stat-box strong { font-size: 19px; font-weight: 800; color: #fff; line-height: 1; }
        .stat-box small { font-size: 11px; color: #64748b; text-align: center; }
        .page-grid { display: grid; grid-template-columns: 1fr 296px; gap: 28px; padding: 36px 24px 80px; align-items: start; }
        .side-col { position: sticky; top: 60px; }
        .content-block { margin-bottom: 36px; }
        .block-label { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .bl-icon { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .block-label h2 { font-size: 18px; font-weight: 800; color: #0a1628; margin-bottom: 2px; }
        .block-label p { font-size: 12.5px; color: #94a3b8; }
        .table-card { background: #fff; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,.07); overflow: hidden; }
        .table-card-head { background: linear-gradient(90deg, #0a1628 0%, #1a3a5c 100%); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; font-size: 14px; font-weight: 700; color: #fff; }
        .updated-tag { font-size: 11px; color: #94a3b8; background: rgba(255,255,255,.08); padding: 3px 10px; border-radius: 20px; }
        .table-wrap { overflow-x: auto; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-table thead tr { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
        .data-table th { padding: 11px 16px; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; text-align: left; }
        .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
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
        .elig-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .elig-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
        .elig-card h3 { font-size: 13.5px; font-weight: 800; margin-bottom: 12px; }
        .elig-yes { color: #15803d; }
        .elig-list { list-style: none; padding: 0; margin: 0; }
        .elig-list li { display: flex; gap: 8px; padding: 7px 0; font-size: 13px; color: #334155; border-bottom: 1px solid #f1f5f9; line-height: 1.5; }
        .elig-list li:last-child { border-bottom: none; }
        .tick { color: #16a34a; font-weight: 800; flex-shrink: 0; }
        .steps-list { display: flex; flex-direction: column; gap: 10px; }
        .step-item { display: flex; align-items: flex-start; gap: 14px; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px 20px; }
        .step-num { min-width: 32px; height: 32px; border-radius: 50%; background: #0a1628; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; flex-shrink: 0; }
        .step-text { font-size: 14px; font-weight: 700; color: #0a1628; padding-top: 5px; }
        .imp-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 14px 16px; margin-top: 14px; font-size: 13.5px; color: #78350f; line-height: 1.7; }
        .imp-note strong { display: block; font-size: 13px; font-weight: 800; color: #92400e; margin-bottom: 6px; }
        .notif-list { display: flex; flex-direction: column; gap: 10px; }
        .notif-item { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px 20px; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .notif-body h4 { font-size: 14px; font-weight: 700; color: #0a1628; margin-bottom: 4px; }
        .notif-body p { font-size: 13px; color: #64748b; line-height: 1.6; margin: 0; }
        .notif-tag { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 700; }
        .cta-banner { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%); border-radius: 16px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 32px; }
        .cta-banner h3 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .cta-banner p { font-size: 13px; color: #94a3b8; }
        .cta-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
        .btn-primary { padding: 11px 22px; background: #F97316; color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 800; text-decoration: none; white-space: nowrap; transition: background .2s; }
        .btn-primary:hover { background: #ea580c; }
        .btn-ghost { padding: 11px 22px; background: rgba(255,255,255,.1); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 700; text-decoration: none; border: 1px solid rgba(255,255,255,.2); white-space: nowrap; }
        .btn-ghost:hover { background: rgba(255,255,255,.18); }
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .faq-q { padding: 15px 18px; font-size: 14px; font-weight: 700; color: #0a1628; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 12px; }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-icon { font-size: 18px; font-weight: 700; color: #94a3b8; flex-shrink: 0; }
        details[open] .faq-icon { color: #F97316; transform: rotate(45deg); display: inline-block; }
        .faq-a { padding: 0 18px 16px; font-size: 13.5px; color: #475569; line-height: 1.7; border-top: 1px solid #f1f5f9; }
        .widget { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,.06); overflow: hidden; margin-bottom: 16px; }
        .widget-head { background: #0a1628; color: #fff; padding: 12px 16px; font-size: 13.5px; font-weight: 700; }
        .widget-body { padding: 14px 16px; }
        .w-note { font-size: 13px; color: #475569; margin-bottom: 10px; line-height: 1.5; }
        .exam-status-box { border-radius: 8px; padding: 12px; font-size: 13px; font-weight: 700; text-align: center; line-height: 1.6; }
        .quick-link { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #0a1628; text-decoration: none; transition: color .15s; }
        .quick-link:last-child { border-bottom: none; }
        .quick-link:hover { color: #F97316; }
        .quick-link span { color: #94a3b8; }
        .warn-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 12px 14px; font-size: 12.5px; color: #78350f; line-height: 1.6; }
        .warn-note strong { display: block; font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 4px; }
        @media (max-width: 1024px) { .page-grid { grid-template-columns: 1fr; } .side-col { position: static; } }
        @media (max-width: 640px) { .elig-grid { grid-template-columns: 1fr; } .cta-banner { flex-direction: column; } .cta-btns { width: 100%; } }
      `}</style>
    </main>
  );
}