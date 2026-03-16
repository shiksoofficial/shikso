// app/sainik-school-entrance-exam/[cls]/page.js

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SAINIK_CLASSES,
  SAINIK_SECTIONS,
  CLASS_LABELS,
  sainikHref,
} from "@/component/sainik/sainikNav";
import { OVERVIEW_STATS, CLASS_META } from "@/component/sainik/sainikData";

export function generateStaticParams() {
  return SAINIK_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) return {};

  const label = CLASS_LABELS[cls];

  return {
    title: `Sainik School ${label} SmartSet — AISSEE Preparation | Shikso`,
    description: `Prepare for Sainik School AISSEE ${label} entrance exam with Shikso. Access syllabus, previous year papers, mock tests, and unlimited topic-wise practice.`,
  };
}

export default async function ClassHubPage({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const meta = CLASS_META[cls];
  const stats = OVERVIEW_STATS[cls];

  return (
    <main>
      {/* Hero */}
      <section className="cls-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/sainik-school-entrance-exam">
              Sainik School SmartSet
            </Link>{" "}
            &rsaquo; <span>{label}</span>
          </nav>

          <span className="hero-badge">
            🎖️ Sainik School SmartSet — {label}
          </span>

          <h1>
            AISSEE <span className="accent">{label}</span> — Complete
            <br />
            Preparation Zone
          </h1>

          <p className="hero-sub">
            Everything you need to crack the Sainik School {label} entrance exam
            — exam info, syllabus, previous year papers, mock tests, and daily
            practice.
          </p>

          {/* Stat strip */}
          <div className="stat-strip">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-val">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="container cls-body dm_sans">
        <h2 className="sections-title">Choose What to Study — {label}</h2>

        <p className="sections-sub">
          Each section is designed specifically for {label} AISSEE preparation.
          Start with Updates & Information to know exam dates, then move to
          practice.
        </p>

        <div className="sections-grid">
          {SAINIK_SECTIONS.map((sec, i) => (
            <Link
              key={sec.slug}
              href={sainikHref(cls, sec.slug)}
              className="section-card"
            >
              <span className="sc-num">0{i + 1}</span>
              <span className="sc-icon">{sec.icon}</span>

              <h3>{sec.label}</h3>
              <p>{sec.description}</p>

              <span className="sc-cta">Explore →</span>
            </Link>
          ))}
        </div>

        {/* Switch class banner */}
        <div className="switch-banner">
          <div>
            <p className="sw-label">Wrong class?</p>
            <p className="sw-sub">
              Switch to the other class preparation zone.
            </p>
          </div>

          {SAINIK_CLASSES.filter((c) => c !== cls).map((other) => (
            <Link key={other} href={sainikHref(other)} className="sw-btn">
              Switch to {CLASS_LABELS[other]} →
            </Link>
          ))}
        </div>
      </section>
      <style>{`
        .cls-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 48px 0 40px;
          position: relative;
          overflow: hidden;
        }
        .cls-hero::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb a:hover { color: var(--primaryColor); }
        .breadcrumb span { color: #cbd5e1; }
        .hero-badge {
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
        .cls-hero h1 { font-size: clamp(24px, 3.5vw, 36px); font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 12px; }
        .accent { color: var(--primaryColor); }
        .hero-sub { font-size: 15px; color: #94a3b8; max-width: 520px; margin-bottom: 28px; }

        .stat-strip {
          display: flex;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px;
          overflow: hidden;
          max-width: 640px;
        }
        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 8px;
          border-right: 1px solid rgba(255,255,255,.08);
        }
        .stat-item:last-child { border-right: none; }
        .stat-icon { font-size: 20px; margin-bottom: 4px; }
        .stat-val { font-size: 20px; font-weight: 800; color: #fff; line-height: 1; }
        .stat-label { font-size: 11px; color: #64748b; margin-top: 3px; text-align: center; }

        .cls-body { padding: 40px 24px 80px; }
        .sections-title { font-size: 22px; font-weight: 800; color: #0a1628; margin-bottom: 8px; }
        .sections-sub { font-size: 14px; color: #64748b; margin-bottom: 28px; max-width: 600px; }

        .sections-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
        .section-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          padding: 22px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 2px 8px rgba(0,0,0,.06);
          transition: transform .2s, box-shadow .2s, border-color .2s;
          position: relative;
          overflow: hidden;
        }
        .section-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.12); border-color: var(--primaryColor); }
        .sc-num { position: absolute; top: 16px; right: 16px; font-size: 28px; font-weight: 900; color: #f1f5f9; line-height: 1; }
        .sc-icon { font-size: 30px; margin-bottom: 10px; }
        .section-card h3 { font-size: 15px; font-weight: 800; color: #0a1628; margin-bottom: 6px; }
        .section-card p { font-size: 13px; color: #64748b; line-height: 1.6; flex: 1; }
        .sc-cta { display: inline-block; margin-top: 14px; font-size: 13px; font-weight: 700; color: var(--primaryColor); }
        .section-card:hover .sc-cta { text-decoration: underline; }

        .switch-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 24px;
        }
        .sw-label { font-size: 15px; font-weight: 800; color: #0a1628; }
        .sw-sub { font-size: 13px; color: #64748b; margin-top: 2px; }
        .sw-btn {
          padding: 10px 22px;
          background: #0a1628;
          color: #fff;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s;
        }
        .sw-btn:hover { background: var(--primaryColor); }

        @media (max-width: 900px) { .sections-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) {
          .sections-grid { grid-template-columns: 1fr; }
          .stat-strip { flex-wrap: wrap; }
          .switch-banner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
