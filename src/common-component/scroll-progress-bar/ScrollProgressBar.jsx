"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar({
  color = "#f97316",
  height = 3,
  position = "top",
  zIndex = 9999,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        [position]: 0,
        left: 0,
        right: 0,
        height: `${height}px`,
        background: "rgba(0,0,0,0.02)",
        zIndex,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: color,
          borderRadius: "0 2px 2px 0",
          transition: "width 0.5s linear",
        }}
      />
    </div>
  );
}
