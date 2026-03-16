"use client";

// app/sainik-school-entrance-exam/[cls]/layout.jsx

import Link from "next/link";
import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  SAINIK_CLASSES,
  SAINIK_SECTIONS,
  CLASS_LABELS,
  sainikHref,
} from "@/component/sainik/sainikNav";

const NAVBAR_HEIGHT = 70;

export default function ClassLayout({ children, params }) {
  const { cls } = use(params);
  const pathname = usePathname();

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  const label = CLASS_LABELS[cls];
  const otherClass = SAINIK_CLASSES.find((c) => c !== cls);

  useEffect(() => {
    const sentinel = document.getElementById("sainik-tabs-sentinel");
    const bar = document.getElementById("sainik-tabs-bar");
    if (!sentinel || !bar) return;

    const observer = new IntersectionObserver(
      (entries) => {
        bar.classList.toggle("is-sticky", !entries[0].isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [cls]);

  return (
    <>
      <div
        id="sainik-tabs-sentinel"
        style={{ height: "1px", paddingTop: `${NAVBAR_HEIGHT}px` }}
      />

      <div id="sainik-tabs-bar" className="section-tabs-bar">
        <div className="tabs-container">
          <div className="tabs-left">
            <span className="tabs-prefix">🎖️ {label} &rsaquo;</span>

            {SAINIK_SECTIONS.map((sec) => {
              const href = sainikHref(cls, sec.slug);
              const isActive = pathname === href;
              return (
                <Link
                  key={sec.slug}
                  href={href}
                  className={`tab-link dm_sans${isActive ? " tab-link-active" : ""}`}
                >
                  {sec.icon} {sec.label}
                </Link>
              );
            })}
          </div>

          <Link href={sainikHref(otherClass)} className="switch-class-pill">
            Switch to {CLASS_LABELS[otherClass]}
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
        .tabs-left { display: flex; align-items: center; gap: 4px; }
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
          padding: 14px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          transition: color .15s, border-color .15s;
        }
        .tab-link:hover {
          color: #0a1628;
          border-bottom-color: #e2e8f0;
        }
        .tab-link-active {
          color: #0a1628 !important;
          border-bottom-color: #0a1628 !important;
        }
        .switch-class-pill {
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
        .switch-class-pill:hover { background: var(--primaryColor); }
      `}</style>
    </>
  );
}
