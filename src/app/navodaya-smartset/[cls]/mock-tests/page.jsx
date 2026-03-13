// app/navodaya-smartset/[cls]/mock-tests/page.tsx
import { notFound } from "next/navigation";
import {
  NAVODAYA_CLASSES,
  CLASS_LABELS,
  isNavodayaClass,
  normalizeNavodayaClass,
} from "@/component/navodaya/navodayaNav";
import ComingSoonPage from "@/component/navodaya/ComingSoonPage";

export function generateStaticParams() {
  return NAVODAYA_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) return {};
  const label = CLASS_LABELS[cls];
  return {
    title: `Navodaya ${label} Mock Tests 2026 — JNVST Full Mock Test Series | Shikso`,
    description: `Take full-length JNVST ${label} mock tests matching the official Navodaya exam pattern. Timed practice with instant score, analytics, and section-wise performance.`,
  };
}

export default async function MockTestsPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) notFound();
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="mock-tests"
      basePath="/navodaya-smartset"
      title={`JNVST ${CLASS_LABELS[cls]} Mock Tests`}
      description={`Full-length timed mock tests for Navodaya ${CLASS_LABELS[cls]} entrance exam. Matches official JNVST pattern — score, analytics, weak topics. Coming soon.`}
      icon="🏆"
    />
  );
}
