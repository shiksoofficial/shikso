// components/sainik/SainikNavDropdown.js
// Drop-in replacement for the current "Sainik School" navbar dropdown.

"use client";

import Link from "next/link";
import {
  SAINIK_SECTIONS,
  CLASS_LABELS,
  SAINIK_CLASSES,
  sainikHref,
} from "./sainikNav";

export default function SainikNavDropdown() {
  return (
    <div className="sainik-dropdown">
      {/* Column per class */}
      {SAINIK_CLASSES.map((cls) => (
        <div key={cls} className="dropdown-col">
          {/* Class header */}
          <Link href={sainikHref(cls)} className="col-header">
            <span className="col-badge">
              {cls === "class-6" ? "📘" : "📗"} {CLASS_LABELS[cls]}
            </span>
            <span className="col-arrow">›</span>
          </Link>

          {/* Section links */}
          <ul className="section-links">
            {SAINIK_SECTIONS.map((sec) => (
              <li key={sec.slug}>
                <Link href={sainikHref(cls, sec.slug)} className="section-link">
                  <span className="sec-icon">{sec.icon}</span>
                  <span>{sec.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <style>{`
        .sainik-dropdown {
          display: flex;
          gap: 0;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,.12);
          overflow: hidden;
          min-width: 420px;
        }

        .dropdown-col {
          flex: 1;
          padding: 6px 0;
        }

        .dropdown-col:first-child {
          border-right: 1px solid #f1f5f9;
        }

        .col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 800;
          color: #0a1628;
          text-decoration: none;
          background: #f8fafc;
          border-bottom: 1px solid #f1f5f9;
          transition: background .15s;
        }

        .col-header:hover {
          background: #f1f5f9;
        }

        .col-badge {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .col-arrow {
          color: #94a3b8;
          font-size: 16px;
        }

        .section-links {
          list-style: none;
          padding: 4px 0;
          margin: 0;
        }

        .section-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: all .15s;
        }

        .section-link:hover {
          background: #fff7ed;
          color: #f97316;
        }

        .sec-icon {
          font-size: 15px;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
