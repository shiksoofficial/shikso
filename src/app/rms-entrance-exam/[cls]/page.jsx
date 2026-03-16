// app/rms-smartset/[cls]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { RMS_CLASSES, RMS_SECTIONS, RMS_CLASS_LABELS, rmsHref, isRMSClass, normalizeRMSClass, RMS_BASE } from "@/component/rms/rmsNav";
import { EXAM_DATES, EXAM_PATTERN } from "@/component/rms/rmsData";

export function generateStaticParams() {
  return RMS_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) return {};
  const label = RMS_CLASS_LABELS[cls];
  return {
    title: `RMS CET ${label} SmartSet — Rashtriya Military School Preparation | Shikso`,
    description: `Complete RMS CET ${label} preparation — exam dates, syllabus, previous year papers, mock tests, and unlimited practice on Shikso.`,
  };
}

export default async function RMSClassHubPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();

  const label = RMS_CLASS_LABELS[cls];
  const dates = EXAM_DATES[cls];
  const pattern = EXAM_PATTERN[cls];
  const otherClass = RMS_CLASSES.find((c) => c !== cls) || RMS_CLASSES[0];

  const quickDates = [
    { label: "Application Opens", value: dates.applicationStart },
    { label: "Admit Card", value: dates.admitCard },
    { label: "CET Exam Date", value: dates.examDate },
    { label: "Result", value: dates.result },
    { label: "Interview", value: dates.interviews },
    { label: "Medical Exam", value: dates.medicalExam },
  ];

  return (
    <main>
      <section className="cls-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href={RMS_BASE}>RMS SmartSet</Link> &rsaquo;{" "}
            <span>{label}</span>
          </nav>
          <span className="hero-badge">🏫 RMS SmartSet — {label}</span>
          <h1>
            RMS CET <span className="accent">{label}</span> — Complete
            <br />
            Preparation Zone
          </h1>
          <p className="hero-sub">
            Everything you need to crack the Rashtriya Military School CET {label} —
            exam info, syllabus, previous papers, mock tests, and daily practice.
          </p>

          <div className="stat-row">
            <div className="stat-item">
              <span className="stat-val">{pattern.totalMarks}</span>
              <span className="stat-lbl">Total Marks</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-val">{pattern.interviewMarks}</span>
              <span className="stat-lbl">Interview Marks</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-val">5</span>
              <span className="stat-lbl">RMS Schools</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-val">Dec</span>
              <span className="stat-lbl">Exam Month</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-val">None</span>
              <span className="stat-lbl">Negative Marking</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container cls-body dm_sans">

        <h2 className="section-title">Your 5 Preparation Zones</h2>
        <div className="sec-grid">
          {RMS_SECTIONS.map((sec) => (
            <Link key={sec.slug} href={rmsHref(cls, sec.slug)} className="sec-card">
              <div className="sc-icon">{sec.icon}</div>
              <div className="sc-right">
                <div className="sc-top">
                  <h3>{sec.label}</h3>
                  {sec.status === "coming-soon" ? (
                    <span className="badge-soon">Coming Soon</span>
                  ) : (
                    <span className="badge-live">Live</span>
                  )}
                </div>
                <p>{sec.description}</p>
                <span className="sc-cta">
                  {sec.status === "coming-soon" ? "Join Waitlist →" : "Explore →"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="dates-card">
          <h2 className="dates-title">📅 Key Dates — {label} (Next Cycle)</h2>
          <div className="dates-grid">
            {quickDates.map((d) => (
              <div key={d.label} className="date-item">
                <div className="date-label">{d.label}</div>
                <div className="date-val">{d.value}</div>
              </div>
            ))}
          </div>
          <p className="dates-note">
            Official site: <strong>{dates.officialSite}</strong> · Apply at:{" "}
            <strong>{dates.applicationSite}</strong>
          </p>
        </div>

        <div className="pattern-card">
          <h2 className="section-title" style={{ marginBottom: 20 }}>Exam Pattern — {label}</h2>
          <div className="pattern-meta">
            {[
              { k: "Format", v: pattern.format },
              { k: "Medium", v: pattern.medium },
              { k: "Standard", v: pattern.standard },
              { k: "Min. Qualifying", v: pattern.minimumQualifying },
              { k: "Negative Marking", v: pattern.negativeMarking },
            ].map((m) => (
              <div key={m.k} className="meta-item">
                <div className="meta-key">{m.k}</div>
                <div className="meta-val">{m.v}</div>
              </div>
            ))}
          </div>
          {pattern.importantNote && (
            <div className="important-note">⚠️ {pattern.importantNote}</div>
          )}
        </div>

      </section>

      <style>{`
        .cls-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px; position: relative; overflow: hidden; color: #fff;
        }
        .cls-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb span { color: #fff; }
        .hero-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 16px; }
        .cls-hero h1 { font-size: clamp(24px, 4vw, 36px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 12px; }
        .accent { color: #F97316; }
        .hero-sub { font-size: 15px; color: #94a3b8; max-width: 560px; line-height: 1.7; margin-bottom: 24px; }
        .stat-row { display: flex; align-items: center; background: rgba(255,255,255,.07); border-radius: 12px; padding: 14px 20px; width: fit-content; flex-wrap: wrap; gap: 8px; }
        .stat-item { text-align: center; padding: 0 16px; }
        .stat-val { display: block; font-size: 18px; font-weight: 800; color: #fff; }
        .stat-lbl { display: block; font-size: 11px; color: #94a3b8; font-weight: 600; margin-top: 2px; }
        .stat-sep { width: 1px; height: 32px; background: rgba(255,255,255,.15); }

        .cls-body { padding: 40px 24px 80px; }
        .section-title { font-size: 20px; font-weight: 800; color: #0a1628; margin-bottom: 20px; }

        .sec-grid { display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
        .sec-card { display: flex; align-items: flex-start; gap: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px 22px; text-decoration: none; color: inherit; box-shadow: 0 2px 8px rgba(0,0,0,.05); transition: box-shadow .2s, transform .2s; }
        .sec-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.1); transform: translateY(-2px); }
        .sc-icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
        .sc-right { flex: 1; }
        .sc-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
        .sc-top h3 { font-size: 15px; font-weight: 800; color: #0a1628; margin: 0; }
        .badge-live { font-size: 10px; font-weight: 700; background: #dcfce7; color: #16a34a; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; white-space: nowrap; }
        .badge-soon { font-size: 10px; font-weight: 700; background: #fef3c7; color: #d97706; padding: 3px 8px; border-radius: 20px; text-transform: uppercase; white-space: nowrap; }
        .sc-right p { font-size: 13px; color: #475569; line-height: 1.5; margin: 0 0 8px; }
        .sc-cta { font-size: 12px; font-weight: 800; color: #F97316; }

        .dates-card { background: #0a1628; border-radius: 16px; padding: 28px 28px 24px; color: #fff; margin-bottom: 28px; }
        .dates-title { font-size: 17px; font-weight: 800; margin-bottom: 20px; }
        .dates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
        .date-item { background: rgba(255,255,255,.07); border-radius: 10px; padding: 12px 14px; }
        .date-label { font-size: 11px; color: #94a3b8; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; }
        .date-val { font-size: 13px; font-weight: 800; }
        .dates-note { margin-top: 16px; font-size: 12px; color: #94a3b8; }
        .dates-note strong { color: #F97316; }

        .pattern-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
        .pattern-meta { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-bottom: 16px; }
        .meta-item { background: #f8fafc; border-radius: 10px; padding: 12px 14px; }
        .meta-key { font-size: 11px; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-bottom: 4px; }
        .meta-val { font-size: 13px; font-weight: 700; color: #0a1628; }
        .important-note { background: #fef3c7; border: 1px solid #fde68a; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: #92400e; font-weight: 600; }

        @media (max-width: 640px) {
          .stat-row { justify-content: center; }
          .stat-sep { display: none; }
          .cls-body { padding: 24px 16px 60px; }
        }
      `}</style>
    </main>
  );
}