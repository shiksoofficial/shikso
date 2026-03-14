// app/rms-smartset/[cls]/syllabus/page.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { RMS_CLASSES, RMS_CLASS_LABELS, rmsHref, isRMSClass, normalizeRMSClass } from "@/component/rms/rmsNav";
import { SYLLABUS } from "@/component/rms/rmsData";

export function generateStaticParams() {
  return RMS_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) return {};
  const label = RMS_CLASS_LABELS[cls];
  return {
    title: `RMS CET ${label} Syllabus 2026-27 — Complete Topic-wise | Shikso`,
    description: `Complete RMS CET ${label} syllabus 2026-27 with topic-wise breakdown for all subjects. Rashtriya Military School entrance exam preparation on Shikso.`,
  };
}

export default async function RMSSyllabusPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();

  const label    = RMS_CLASS_LABELS[cls];
  const syllabus = SYLLABUS[cls];
  const isClass6 = cls === "class-6";

  return (
    <main>
      <section className="syl-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/rms-smartset">RMS SmartSet</Link> &rsaquo;{" "}
            <Link href={rmsHref(cls)}>{label}</Link>{" "}
            &rsaquo; <span>Syllabus</span>
          </nav>
          <span className="syl-badge">📚 Complete Syllabus 2026-27</span>
          <h1>
            RMS CET <span className="accent">{label}</span>
            <br />
            Complete Topic-wise Syllabus
          </h1>
          <p className="syl-sub">
            {isClass6
              ? "4 subjects · Based on CBSE Class V curriculum · 200 marks total"
              : "5 subjects across 2 papers · Based on NCERT Class VIII curriculum · 200 marks total"}
          </p>
        </div>
      </section>

      <div className="jump-bar">
        <div className="container jump-inner">
          <span className="jump-label">Jump to:</span>
          {isClass6
            ? syllabus.map((s) => (
                <a key={s.subject} href={`#${s.subject.replace(/\s+/g, "-").toLowerCase()}`} className="jump-link">
                  {s.subject}
                </a>
              ))
            : syllabus.map((paper) => (
                <a key={paper.paper} href={`#${paper.paper.replace(/\s+/g, "-").toLowerCase()}`} className="jump-link">
                  {paper.paper}
                </a>
              ))
          }
        </div>
      </div>

      <div className="container syl-body dm_sans">

        {/* CLASS 6 */}
        {isClass6 && syllabus.map((subject) => (
          <section
            key={subject.subject}
            id={subject.subject.replace(/\s+/g, "-").toLowerCase()}
            className="syl-section"
          >
            <div className="subj-header" style={{ background: subject.bgColor, borderColor: subject.bgColor }}>
              <div className="subj-info">
                <h2 style={{ color: subject.color }}>{subject.subject}</h2>
                <p className="subj-meta">
                  {subject.questions} questions · {subject.marks} marks
                  {!subject.inMerit && (
                    <span className="not-merit"> ⚠️ Qualifying only — NOT counted in merit</span>
                  )}
                </p>
              </div>
              <div className="subj-badge" style={{ background: "#fff", border: `1px solid ${subject.bgColor}` }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: subject.color }}>{subject.marks}</span>
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700 }}>MARKS</span>
              </div>
            </div>

            {subject.note && (
              <div className="note-box">{subject.note}</div>
            )}

            <div className="topics-grid">
              {subject.topics.map((topic) => (
                <div key={topic.name} className="topic-card">
                  <div className="topic-name">{topic.name}</div>
                  <div className="topic-detail">{topic.details}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CLASS 9 */}
        {!isClass6 && syllabus.map((paper) => (
          <section
            key={paper.paper}
            id={paper.paper.replace(/\s+/g, "-").toLowerCase()}
            className="syl-section"
          >
            <div className="paper-header">
              <div>
                <h2>{paper.paper}</h2>
                <p className="subj-meta">{paper.subjects.map((s) => s.subject).join(" · ")} · {paper.totalMarks} marks</p>
              </div>
              <div className="paper-badge">{paper.totalMarks}<span>MARKS</span></div>
            </div>
            <div className="qualify-note">Min. qualifying: <strong>{paper.minQualifying}</strong></div>

            {paper.subjects.map((subject) => (
              <div key={subject.subject} className="subject-block">
                <div className="subj-header" style={{ background: subject.bgColor, borderColor: subject.bgColor }}>
                  <div className="subj-info">
                    <h3 style={{ color: subject.color }}>{subject.subject}</h3>
                    <p className="subj-meta">{subject.questions} questions · {subject.marks} marks</p>
                  </div>
                  <div className="subj-badge" style={{ background: subject.bgColor }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: subject.color }}>{subject.marks}</span>
                    <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700 }}>MARKS</span>
                  </div>
                </div>
                <div className="topics-grid">
                  {subject.topics.map((topic) => (
                    <div key={topic.name} className="topic-card">
                      <div className="topic-name">{topic.name}</div>
                      <div className="topic-detail">{topic.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}

        <div className="cta-banner dm_sans">
          <div>
            <h3>Ready to Practise? 🚀</h3>
            <p>Topic-wise practice and mock tests based on this syllabus — coming soon.</p>
          </div>
          <div className="cta-btns">
            <Link href={rmsHref(cls, "updates")} className="btn-primary">📢 View Updates &amp; Dates</Link>
            <Link href={rmsHref(cls, "practice")} className="btn-ghost">🧠 Practice (Coming Soon)</Link>
          </div>
        </div>

      </div>

      <style>{`
        .syl-hero { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%); padding: 48px 0 40px; position: relative; overflow: hidden; }
        .syl-hero::before { content: ''; position: absolute; top: -60px; right: -60px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%); border-radius: 50%; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb span { color: #cbd5e1; }
        .syl-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px; }
        .syl-hero h1 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 10px; }
        .accent { color: #F97316; }
        .syl-sub { font-size: 14px; color: #94a3b8; }
        .jump-bar { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 12px 24px; overflow-x: auto; }
        .jump-inner { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; }
        .jump-label { font-size: 12px; color: #94a3b8; font-weight: 600; white-space: nowrap; }
        .jump-link { font-size: 12px; font-weight: 700; color: #0a1628; padding: 5px 12px; border-radius: 20px; background: #f8fafc; border: 1px solid #e2e8f0; text-decoration: none; white-space: nowrap; transition: background .15s; }
        .jump-link:hover { background: #0a1628; color: #fff; }
        .syl-body { padding: 40px 24px 80px; }
        .syl-section { margin-bottom: 48px; }
        .subject-block { margin-bottom: 28px; }
        .subj-header { display: flex; align-items: center; justify-content: space-between; border-radius: 14px; padding: 18px 22px; margin-bottom: 16px; border: 1px solid; }
        .subj-info h2 { font-size: 20px; font-weight: 800; margin-bottom: 4px; font-family: inherit; }
        .subj-info h3 { font-size: 16px; font-weight: 800; margin-bottom: 4px; font-family: inherit; }
        .subj-meta { font-size: 12px; color: #94a3b8; }
        .not-merit { font-weight: 700; color: #d97706; margin-left: 8px; }
        .subj-badge { border-radius: 10px; padding: 8px 16px; text-align: center; display: flex; flex-direction: column; gap: 2px; }
        .paper-header { background: #0a1628; color: #fff; border-radius: 14px; padding: 18px 24px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
        .paper-header h2 { font-size: 20px; font-weight: 800; margin-bottom: 4px; font-family: inherit; }
        .paper-badge { background: #F97316; border-radius: 10px; padding: 10px 20px; text-align: center; font-size: 22px; font-weight: 800; display: flex; flex-direction: column; }
        .paper-badge span { font-size: 10px; font-weight: 700; }
        .qualify-note { background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 10px 16px; font-size: 13px; color: #92400e; margin-bottom: 20px; }
        .note-box { background: #fef3c7; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 10px 16px; font-size: 13px; color: #92400e; font-weight: 600; margin-bottom: 14px; }
        .topics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 12px; }
        .topic-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px 18px; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .topic-name { font-weight: 800; font-size: 13.5px; color: #0a1628; margin-bottom: 6px; }
        .topic-detail { font-size: 12.5px; color: #475569; line-height: 1.55; }
        .cta-banner { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%); border-radius: 16px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 16px; }
        .cta-banner h3 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .cta-banner p { font-size: 13px; color: #94a3b8; }
        .cta-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
        .btn-primary { padding: 11px 22px; background: #F97316; color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 800; text-decoration: none; white-space: nowrap; }
        .btn-primary:hover { background: #ea580c; }
        .btn-ghost { padding: 11px 22px; background: rgba(255,255,255,.1); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 700; text-decoration: none; border: 1px solid rgba(255,255,255,.2); white-space: nowrap; }
        @media (max-width: 768px) {
          .syl-body { padding: 24px 16px 60px; }
          .paper-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .cta-banner { flex-direction: column; }
          .cta-btns { width: 100%; }
        }
      `}</style>
    </main>
  );
}