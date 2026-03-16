// app/rms-smartset/[cls]/practice/page.jsx
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
    title: `RMS CET ${label} Unlimited Practice Questions — Topic-wise | Shikso`,
    description: `AI-powered unlimited topic-wise practice for RMS CET ${label}. Adaptive difficulty and daily streaks — coming soon on Shikso.`,
  };
}

export default async function RMSPracticePage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeRMSClass(rawCls);
  if (!isRMSClass(cls)) notFound();
  const label = RMS_CLASS_LABELS[cls];
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="practice"
      title={`RMS CET ${label} — Unlimited Practice`}
      description={`AI-powered adaptive practice for RMS CET ${label}. Topic-wise questions across ${cls === "class-6" ? "Intelligence, Maths, GK & English" : "all 5 subjects across both papers"}. The more you practise, the smarter it gets.`}
      icon="🧠"
    />
  );
}