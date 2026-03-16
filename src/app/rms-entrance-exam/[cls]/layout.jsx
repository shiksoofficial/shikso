"use client";
// app/rms-smartset/[cls]/layout.jsx
// Sticky section tab bar — exact same pattern as navodaya-entrance-exam/[cls]/layout.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  RMS_SECTIONS,
  RMS_CLASS_LABELS,
  RMS_CLASSES,
  rmsHref,
  isRMSClass,
  normalizeRMSClass,
} from "@/component/rms/rmsNav";
import { use } from "react";

const NAVBAR_HEIGHT = 70;

export default function RMSClassLayout({ children, params }) {
  const { cls: rawCls } = use(params);
  const cls = normalizeRMSClass(rawCls);
  const pathname = usePathname();

  if (!isRMSClass(cls)) notFound();

  const otherClass = RMS_CLASSES.find((c) => c !== cls) || RMS_CLASSES[0];

  return (
    <>
      <div
        id="rms-tabs-sentinel"
        style={{ height: "1px", paddingTop: `${NAVBAR_HEIGHT}px` }}
      />

      <div id="rms-tabs-bar" className="section-tabs-bar">
        <div className="tabs-container">
          <div className="tabs-left">
            <span className="tabs-prefix">
              🏫 {RMS_CLASS_LABELS[cls]} &rsaquo;
            </span>
            {RMS_SECTIONS.map((sec) => {
              const href = rmsHref(cls, sec.slug);
              const isActive = pathname === href;
              return (
                <Link
                  key={sec.slug}
                  href={href}
                  className={`tab-link dm_sans${isActive ? " tab-link-active" : ""}`}
                >
                  {sec.icon} {sec.shortLabel}
                  {sec.status === "coming-soon" && (
                    <span className="tab-soon">Soon</span>
                  )}
                </Link>
              );
            })}
          </div>
          <Link href={rmsHref(otherClass)} className="switch-pill dm_sans">
            Switch to {RMS_CLASS_LABELS[otherClass]}
          </Link>
        </div>
      </div>

      {children}

      <style>{`
        .section-tabs-bar {
          background: #fff;
          border-bottom: 2px solid #f1f5f9;
          z-index: 50;
          transition: box-shadow 0.3s ease;
        }
        .section-tabs-bar.is-sticky {
          position: sticky;
          top: 0px;
          box-shadow: 0 2px 8px rgba(0,0,0,.08);
        }
        .tabs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .tabs-container::-webkit-scrollbar { display: none; }
        .tabs-left { display: flex; align-items: center; gap: 2px; }
        .tabs-prefix {
          font-size: 12px;
          font-weight: 700;
          color: #94a3b8;
          white-space: nowrap;
          padding-right: 8px;
          border-right: 1px solid #e2e8f0;
          margin-right: 4px;
        }
        .tab-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 14px 12px;
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          transition: color .15s, border-color .15s;
        }
        .tab-link:hover { color: #0a1628; border-bottom-color: #e2e8f0; }
        .tab-link-active { color: #0a1628 !important; border-bottom-color: #0a1628 !important; }
        .tab-soon {
          font-size: 9px;
          font-weight: 700;
          background: #fef3c7;
          color: #d97706;
          padding: 2px 5px;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: .04em;
        }
        .switch-pill {
          flex-shrink: 0;
          padding: 6px 14px;
          background: #0a1628;
          color: #fff;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background .2s;
        }
        .switch-pill:hover { background: var(--primaryColor, #F97316); }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var sentinel = document.getElementById('rms-tabs-sentinel');
              var bar = document.getElementById('rms-tabs-bar');
              if (!sentinel || !bar) return;
              var observer = new IntersectionObserver(function(entries) {
                bar.classList.toggle('is-sticky', !entries[0].isIntersecting);
              }, { threshold: 0 });
              observer.observe(sentinel);
            })();
          `,
        }}
      />
    </>
  );
}
