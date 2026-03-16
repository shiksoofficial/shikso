// app/rms-smartset/[cls]/previous-year-papers/page.jsx
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
    title: `RMS CET ${label} Previous Year Papers — PYQs | Shikso`,
    description: `Practice RMS CET ${label} previous year papers with solutions. Rashtriya Military School entrance exam PYQs — coming soon on Shikso.`,
  };
}

export default async function RMSPreviousYearPapersPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();
  const label = RMS_CLASS_LABELS[cls];
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="previous-year-papers"
      title={`RMS CET ${label} — Previous Year Papers`}
      description={`Practice real RMS CET ${label} question papers from previous years. Understand question patterns, difficulty levels, and score better on exam day.`}
      icon="📄"
    />
  );
}