// component/rms/ComingSoonPage.jsx
import Link from "next/link";
import { rmsHref, RMS_SECTIONS, RMS_CLASS_LABELS } from "./rmsNav";

export default function ComingSoonPage({
  cls,
  sectionSlug,
  title,
  description,
  icon,
}) {
  const label = RMS_CLASS_LABELS[cls];
  const sectionMeta = RMS_SECTIONS.find((s) => s.slug === sectionSlug);
  if (!sectionMeta) return null;

  return (
    <main>
      <section className="cs-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link href="/">Home</Link> &rsaquo;{" "}
            <Link href="/rms-entrance-exam">RMS SmartSet</Link> &rsaquo;{" "}
            <Link href={rmsHref(cls)}>{label}</Link> &rsaquo;{" "}
            <span>{sectionMeta.label}</span>
          </nav>
          <span className="cs-badge">
            {icon} {label}
          </span>
          <h1>{title}</h1>
          <p className="cs-sub">{description}</p>
        </div>
      </section>

      <div className="container cs-body dm_sans">
        <div className="cs-card">
          <div className="cs-icon">{icon}</div>
          <div className="cs-rocket">🚧</div>
          <h2>Coming Soon!</h2>
          <p>
            We are building <strong>{sectionMeta.label}</strong> for RMS CET{" "}
            {label} right now. Be the first to know when it launches.
          </p>
          <div className="cs-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">Notify Me</button>
          </div>
        </div>

        <div className="cs-explore">
          <p>Meanwhile, explore what&apos;s ready:</p>
          <div className="cs-links">
            <Link href={rmsHref(cls, "updates")} className="cs-btn-dark">
              📢 Updates &amp; Information
            </Link>
            <Link href={rmsHref(cls, "syllabus")} className="cs-btn-outline">
              📚 Complete Syllabus
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .cs-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px;
          position: relative; overflow: hidden;
        }
        .cs-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb span { color: #cbd5e1; }
        .cs-badge {
          display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35);
          color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px;
        }
        .cs-hero h1 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 800; color: #fff; line-height: 1.25; margin-bottom: 10px; }
        .cs-sub { font-size: 14.5px; color: #94a3b8; max-width: 520px; line-height: 1.6; }

        .cs-body { padding: 48px 24px 80px; max-width: 680px; }
        .cs-card {
          background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,.08); padding: 48px 40px; text-align: center;
        }
        .cs-icon { font-size: 52px; margin-bottom: 8px; }
        .cs-rocket { font-size: 32px; margin-bottom: 16px; }
        .cs-card h2 { font-size: 24px; font-weight: 800; color: #0a1628; margin-bottom: 12px; }
        .cs-card p { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 28px; }
        .cs-form { display: flex; gap: 10px; max-width: 400px; margin: 0 auto; }
        .cs-form input {
          flex: 1; padding: 12px 16px; border-radius: 50px; border: 1.5px solid #e2e8f0;
          font-size: 13.5px; outline: none; font-family: inherit;
        }
        .cs-form input:focus { border-color: #0a1628; }
        .cs-form button {
          background: #F97316; color: #fff; border: none; border-radius: 50px;
          padding: 12px 22px; font-weight: 800; font-size: 13.5px; cursor: pointer;
          white-space: nowrap; transition: background .2s;
        }
        .cs-form button:hover { background: #ea580c; }

        .cs-explore { margin-top: 32px; text-align: center; }
        .cs-explore p { color: #94a3b8; font-size: 13px; margin-bottom: 14px; }
        .cs-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .cs-btn-dark {
          background: #0a1628; color: #fff; border-radius: 50px; padding: 11px 22px;
          font-size: 13px; font-weight: 800; text-decoration: none; transition: background .2s;
        }
        .cs-btn-dark:hover { background: #1a3a5c; }
        .cs-btn-outline {
          background: #fff; color: #0a1628; border: 1.5px solid #e2e8f0; border-radius: 50px;
          padding: 11px 22px; font-size: 13px; font-weight: 800; text-decoration: none; transition: border-color .2s;
        }
        .cs-btn-outline:hover { border-color: #0a1628; }

        @media (max-width: 640px) {
          .cs-card { padding: 32px 20px; }
          .cs-form { flex-direction: column; }
          .cs-form button { width: 100%; }
        }
      `}</style>
    </main>
  );
}
