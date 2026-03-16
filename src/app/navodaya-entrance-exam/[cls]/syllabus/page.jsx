// app/navodaya-entrance-exam/[cls]/syllabus/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  NAVODAYA_CLASSES,
  CLASS_LABELS,
  navodayaHref,
  isNavodayaClass,
  normalizeNavodayaClass,
} from "@/component/navodaya/navodayaNav";
import { SYLLABUS } from "@/component/navodaya/navodayaData";

export function generateStaticParams() {
  return NAVODAYA_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) return {};
  const label = CLASS_LABELS[cls];
  return {
    title: `Navodaya ${label} Syllabus 2026 — JNVST Complete Topic-wise Syllabus | Shikso`,
    description: `Complete JNVST ${label} syllabus 2026 — subject-wise and topic-wise breakdown with marks. Aligned to the official Navodaya Vidyalaya exam pattern.`,
  };
}

export default async function SyllabusPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const subjects = SYLLABUS[cls];

  return (
    <main>
      <section className="syl-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/navodaya-entrance-exam">Navodaya SmartSet</Link>{" "}
            &rsaquo;{" "}
            <Link
              href={navodayaHref(cls, undefined, "/navodaya-entrance-exam")}
            >
              {label}
            </Link>{" "}
            &rsaquo; <span>Syllabus</span>
          </nav>
          <span className="syl-badge">📚 Complete Syllabus 2025–26</span>
          <h1>
            JNVST <span className="accent">{label}</span> — Complete Syllabus
            2026
          </h1>
          <p className="syl-sub">
            Topic-wise complete syllabus for all sections of the Navodaya{" "}
            {label} entrance exam. Aligned to the official JNVST exam pattern.
          </p>
        </div>
      </section>

      <div className="container syl-body dm_sans">
        {/* Subject chips - jump links */}
        <div className="subject-chips">
          {subjects.map((s) => (
            <a
              key={s.subject}
              href={`#${s.subject.replace(/\s+/g, "-").toLowerCase()}`}
              className="subj-chip"
            >
              {s.icon} {s.subject}
              <span className="chip-marks">{s.marks}M</span>
            </a>
          ))}
        </div>

        {/* Subject sections */}
        {subjects.map((s) => (
          <section
            key={s.subject}
            id={s.subject.replace(/\s+/g, "-").toLowerCase()}
            className="subject-section"
          >
            <div className="subj-head" style={{ background: s.color }}>
              <span className="subj-icon">{s.icon}</span>
              <div>
                <h2>{s.subject}</h2>
                <p>
                  {s.marks} marks · {s.topics.length} topics
                </p>
              </div>
              <span className="marks-badge">{s.marks} Marks</span>
            </div>
            <ul className="topics-grid">
              {s.topics.map((t) => (
                <li key={t} className="topic-item">
                  <span className="t-arrow">▸</span>
                  {t}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* CTA */}
        <div className="cta-banner dm_sans">
          <div>
            <h3>Now Practice Every Topic on Shikso 🚀</h3>
            <p>
              Every topic in this syllabus has dedicated practice questions —
              easy to hard.
            </p>
          </div>
          <div className="cta-btns">
            <Link
              href={navodayaHref(cls, "practice", "/navodaya-entrance-exam")}
              className="btn-primary"
            >
              Start Topic Practice →
            </Link>
            <Link
              href={navodayaHref(cls, "mock-tests", "/navodaya-entrance-exam")}
              className="btn-ghost"
            >
              Take a Mock Test
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .syl-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 44px 0 36px;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 14px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb a:hover { color: var(--primaryColor); }
        .breadcrumb span { color: #cbd5e1; }
        .syl-badge {
          display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35);
          color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase; margin-bottom: 12px;
        }
        .syl-hero h1 { font-size: clamp(22px, 3vw, 32px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 10px; }
        .accent { color: var(--primaryColor); }
        .syl-sub { font-size: 14px; color: #94a3b8; max-width: 500px; line-height: 1.6; }

        .syl-body { padding: 32px 24px 80px; }

        .subject-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
        .subj-chip {
          display: inline-flex; align-items: center; gap: 7px;
          background: #fff; border: 1px solid #e2e8f0; border-radius: 50px;
          padding: 8px 16px; font-size: 13px; font-weight: 700; color: #0a1628;
          text-decoration: none; transition: all .2s; box-shadow: 0 1px 4px rgba(0,0,0,.05);
        }
        .subj-chip:hover { border-color: var(--primaryColor); color: var(--primaryColor); }
        .chip-marks { background: #0a1628; color: #fff; border-radius: 20px; padding: 1px 8px; font-size: 11px; font-weight: 800; }

        .subject-section { background: #fff; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0,0,0,.06); overflow: hidden; margin-bottom: 20px; }
        .subj-head { display: flex; align-items: center; gap: 14px; padding: 18px 20px; }
        .subj-icon { font-size: 28px; flex-shrink: 0; }
        .subj-head h2 { font-size: 17px; font-weight: 800; color: #0a1628; margin-bottom: 2px; }
        .subj-head p { font-size: 12.5px; color: #64748b; }
        .marks-badge { margin-left: auto; background: #0a1628; color: #fff; border-radius: 20px; padding: 4px 14px; font-size: 13px; font-weight: 800; flex-shrink: 0; }

        .topics-grid { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #f1f5f9; }
        .topic-item { display: flex; align-items: flex-start; gap: 8px; padding: 11px 18px; font-size: 13.5px; color: #334155; border-bottom: 1px solid #f8fafc; border-right: 1px solid #f8fafc; line-height: 1.5; }
        .t-arrow { color: var(--primaryColor); font-size: 11px; flex-shrink: 0; margin-top: 3px; }

        .cta-banner { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%); border-radius: 16px; padding: 28px 32px; display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 8px; }
        .cta-banner h3 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .cta-banner p { font-size: 13px; color: #94a3b8; }
        .cta-btns { display: flex; gap: 10px; flex-shrink: 0; flex-wrap: wrap; }
        .btn-primary { padding: 11px 22px; background: var(--primaryColor); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 800; text-decoration: none; white-space: nowrap; transition: background .2s; }
        .btn-primary:hover { background: #ea580c; }
        .btn-ghost { padding: 11px 22px; background: rgba(255,255,255,.1); color: #fff; border-radius: 50px; font-size: 13.5px; font-weight: 700; text-decoration: none; border: 1px solid rgba(255,255,255,.2); white-space: nowrap; }
        .btn-ghost:hover { background: rgba(255,255,255,.18); }

        @media (max-width: 768px) {
          .topics-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; }
          .cta-btns { width: 100%; }
        }
      `}</style>
    </main>
  );
}
