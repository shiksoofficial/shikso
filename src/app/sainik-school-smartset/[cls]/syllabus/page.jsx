// app/sainik-school-smartset/[cls]/syllabus/page.js

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SAINIK_CLASSES,
  CLASS_LABELS,
  sainikHref,
} from "@/component/sainik/sainikNav";

export function generateStaticParams() {
  return SAINIK_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) return {};

  const label = CLASS_LABELS[cls];

  return {
    title: `Sainik School ${label} Syllabus 2026 — AISSEE Complete Syllabus | Shikso`,
    description: `Complete AISSEE ${label} syllabus 2026 — subject-wise, topic-wise, with marks breakdown. Download syllabus PDF and start practising on Shikso.`,
  };
}

// ── Syllabus data ─────────────────────────────────────────
const SYLLABUS = {
  "class-6": [
    {
      subject: "Mathematics",
      marks: 150,
      color: "#dcfce7",
      icon: "🔢",
      topics: [
        "Natural Numbers — place value, comparison, operations",
        "Fractions — proper, improper, mixed, operations",
        "Decimals — place value, addition, subtraction, multiplication",
        "Factors and Multiples — HCF, LCM",
        "Percentage — basic percentage calculations",
        "Profit and Loss — cost price, selling price",
        "Simple Interest — principal, rate, time",
        "Measurement — length, mass, capacity (metric)",
        "Geometry — lines, angles, triangles, quadrilaterals",
        "Perimeter and Area — squares, rectangles, triangles",
        "Time — 12hr/24hr, calendar problems",
        "Data Handling — pictographs, bar graphs",
        "Patterns — number patterns, geometric patterns",
      ],
    },
    {
      subject: "General Knowledge",
      marks: 75,
      color: "#fef3c7",
      icon: "🌍",
      topics: [
        "Indian History — ancient, medieval, freedom struggle",
        "Indian Geography — states, capitals, rivers, mountains",
        "Indian Constitution — fundamental rights, duties",
        "Science — basic physics, chemistry, biology facts",
        "Current Affairs — national events, sports, awards",
        "Famous Personalities — scientists, leaders, sportspersons",
        "Defence & Armed Forces — basic facts",
        "National Symbols — anthem, flag, bird, animal",
        "Environment — pollution, conservation",
        "Sports & Games — national sports, Olympics",
      ],
    },
  ],

  "class-9": [
    {
      subject: "Mathematics",
      marks: 200,
      color: "#dcfce7",
      icon: "🔢",
      topics: [
        "Number Systems — rational, irrational numbers",
        "Algebra — linear equations, polynomials",
        "Coordinate Geometry — plotting points, distance",
        "Geometry — triangles, congruence, similarity",
        "Mensuration — area, volume of 2D and 3D shapes",
        "Ratio, Proportion & Unitary Method",
        "Percentage, Profit & Loss, Discount",
        "Simple & Compound Interest",
        "Time, Distance & Speed",
        "Statistics — mean, median, mode, bar graphs",
        "Probability — basic concepts",
        "Exponents & Powers",
      ],
    },
  ],
};

export default async function SyllabusPage({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const subjects = SYLLABUS[cls];

  return (
    <main>
      <section className="syl-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> ›
            <Link href="/sainik-school-smartset">Sainik School SmartSet</Link> ›
            <Link href={sainikHref(cls)}>{label}</Link> ›<span>Syllabus</span>
          </nav>

          <span className="syl-badge">📚 Complete Syllabus 2025–26</span>

          <h1>
            AISSEE <span className="accent">{label}</span>
            <br />
            Complete Syllabus 2026
          </h1>

          <p className="syl-sub">
            Topic-wise complete syllabus for all subjects of Sainik School{" "}
            {label} entrance exam.
          </p>
        </div>
      </section>

      <div className="container syl-body dm_sans">
        <div className="subject-chips">
          {subjects.map((s) => (
            <a
              key={s.subject}
              href={`#${s.subject.replace(/\s+/g, "-").toLowerCase()}`}
              className="subj-chip"
            >
              <span>{s.icon}</span>
              <span>{s.subject}</span>
              <span className="chip-marks">{s.marks}M</span>
            </a>
          ))}
        </div>

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
                  {s.marks} marks — {s.topics.length} main topics
                </p>
              </div>
            </div>

            <ul className="topics-grid">
              {s.topics.map((t) => (
                <li key={t} className="topic-item">
                  <span className="t-arrow">▸</span> {t}
                </li>
              ))}
            </ul>
          </section>
        ))}
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
