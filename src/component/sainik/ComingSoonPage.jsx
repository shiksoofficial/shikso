// components/sainik/ComingSoonPage.js
// Reusable shell for pages that are planned but not yet built.

import Link from "next/link";
import { CLASS_LABELS, SAINIK_SECTIONS, sainikHref } from "./sainikNav";

export default function ComingSoonPage({
  cls,
  sectionSlug,
  title,
  description,
  icon,
}) {
  const label = CLASS_LABELS[cls];
  const sectionMeta = SAINIK_SECTIONS.find((s) => s.slug === sectionSlug);

  return (
    <main>
      <section className="cs-hero dm_sans">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> ›{" "}
            <Link href="/sainik-school-smartset">Sainik School SmartSet==</Link>{" "}
            › <Link href={sainikHref(cls)}>{label}</Link> ›{" "}
            <span>{sectionMeta?.label}</span>
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

          <h2>Coming Soon — We're Building This!</h2>

          <p>
            {sectionMeta?.label} for Sainik School {label} is currently being
            prepared by our content team. Join the waitlist to be notified when
            it goes live.
          </p>

          <div className="cs-waitlist">
            <input
              type="email"
              placeholder="Enter your email address"
              className="cs-email"
            />

            <button className="cs-btn">Notify Me →</button>
          </div>

          <p className="cs-note">
            No spam. One email when this section goes live.
          </p>
        </div>

        {/* Other sections available */}
        <div className="cs-other dm_sans">
          <h3>Available Now — Start Here</h3>

          <div className="cs-other-grid">
            {SAINIK_SECTIONS.filter(
              (s) =>
                s.slug !== sectionSlug &&
                ["updates", "syllabus"].includes(s.slug),
            ).map((sec) => (
              <Link
                key={sec.slug}
                href={sainikHref(cls, sec.slug)}
                className="cs-other-card"
              >
                <span>{sec.icon}</span>

                <div>
                  <strong>{sec.label}</strong>
                  <p>{sec.description}</p>
                </div>

                <span className="cs-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .cs-hero { background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%); padding: 44px 0 36px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 14px; }
        .breadcrumb a { color: #94a3b8; text-decoration: none; }
        .breadcrumb span { color: #cbd5e1; }
        .cs-badge {
          display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35);
          color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700;
          letter-spacing: .05em; text-transform: uppercase; margin-bottom: 12px;
        }
        .cs-hero h1 { font-size: clamp(22px, 3vw, 32px); font-weight: 800; color: #fff; margin-bottom: 10px; }
        .cs-sub { font-size: 14px; color: #94a3b8; max-width: 500px; line-height: 1.6; }

        .cs-body { padding: 40px 24px 80px; }
        .cs-card {
          background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0,0,0,.08); padding: 40px; text-align: center;
          max-width: 600px; margin: 0 auto 36px;
        }
        .cs-icon { font-size: 52px; margin-bottom: 16px; }
        .cs-card h2 { font-size: 22px; font-weight: 800; color: #0a1628; margin-bottom: 10px; }
        .cs-card > p { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 24px; }
        .cs-waitlist { display: flex; gap: 8px; margin-bottom: 10px; }
        .cs-email { flex: 1; padding: 11px 16px; border: 1.5px solid #e2e8f0; border-radius: 50px; font-size: 14px; outline: none; transition: border-color .2s; }
        .cs-email:focus { border-color: #f97316; }
        .cs-btn { padding: 11px 22px; background: var(--primaryColor); color: #fff; border: none; border-radius: 50px; font-size: 13.5px; font-weight: 800; cursor: pointer; white-space: nowrap; transition: background .2s; }
        .cs-btn:hover { background: #ea580c; }
        .cs-note { font-size: 12px; color: #94a3b8; }

        .cs-other h3 { font-size: 16px; font-weight: 800; color: #0a1628; margin-bottom: 14px; }
        .cs-other-grid { display: flex; flex-direction: column; gap: 10px; max-width: 600px; margin: 0 auto; }
        .cs-other-card { display: flex; align-items: center; gap: 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; text-decoration: none; color: inherit; transition: all .2s; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .cs-other-card:hover { border-color: #f97316; box-shadow: 0 4px 16px rgba(249,115,22,.12); }
        .oc-icon { font-size: 24px; flex-shrink: 0; }
        .cs-other-card strong { font-size: 14px; font-weight: 800; color: #0a1628; display: block; margin-bottom: 2px; }
        .cs-other-card p { font-size: 12.5px; color: #64748b; margin: 0; }
        .oc-arrow { font-size: 16px; color: #94a3b8; margin-left: auto; flex-shrink: 0; }
        .cs-other-card:hover .oc-arrow { color: #f97316; }

        @media (max-width: 640px) {
          .cs-waitlist { flex-direction: column; }
          .cs-card { padding: 24px 20px; }
        }
      `}</style>
    </main>
  );
}
