// app/rms-smartset/[cls]/mock-tests/page.jsx
import { notFound } from "next/navigation";
import { RMS_CLASSES, RMS_CLASS_LABELS, isRMSClass, normalizeRMSClass } from "@/component/rms/rmsNav";
import ComingSoonPage from "@/component/rms/ComingSoonPage";

export function generateStaticParams() {
  return RMS_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  const label = RMS_CLASS_LABELS[cls];
  return {
    title: `RMS CET ${label} Mock Tests 2026-27 — Full Length Practice | Shikso`,
    description: `Full-length timed mock tests for RMS CET ${label} matching the official exam pattern — coming soon on Shikso.`,
  };
}

export default async function RMSMockTestsPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();
  const label = RMS_CLASS_LABELS[cls];
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="mock-tests"
      title={`RMS CET ${label} — Mock Tests`}
      description={`Simulate the real RMS CET ${label} exam. Full-length timed tests — ${cls === "class-6" ? "200 marks, 4 subjects, bilingual" : "200 marks across 2 papers"}. Know your score before exam day.`}
      icon="🏆"
    />
  );
}