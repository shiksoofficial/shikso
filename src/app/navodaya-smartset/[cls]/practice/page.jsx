// app/navodaya-smartset/[cls]/practice/page.tsx
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
    title: `Navodaya ${label} Practice Questions — JNVST Topic-wise Practice | Shikso`,
    description: `Unlimited topic-wise practice questions for JNVST ${label}. AI-powered adaptive practice covering Mental Ability, Arithmetic, and Language — every topic in the syllabus.`,
  };
}

export default async function PracticePage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) notFound();
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="practice"
      basePath="/navodaya-smartset"
      title={`JNVST ${CLASS_LABELS[cls]} — Unlimited Topic Practice`}
      description={`AI-powered topic-wise adaptive practice for every subject in Navodaya ${CLASS_LABELS[cls]} entrance exam. Instant feedback, progress tracking. Coming soon.`}
      icon="🧠"
    />
  );
}
