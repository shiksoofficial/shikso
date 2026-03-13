// app/navodaya-smartset/[cls]/previous-year-papers/page.tsx
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
    title: `Navodaya ${label} Previous Year Papers — JNVST PYQs with Solutions | Shikso`,
    description: `Solve actual JNVST ${label} previous year question papers with solutions and hints. Practice real Navodaya exam questions from past years to understand the pattern.`,
  };
}

export default async function PreviousYearPapersPage({ params }) {
  const { cls: rawCls } = await params;
  const cls = normalizeNavodayaClass(rawCls);
  if (!isNavodayaClass(cls)) notFound();
  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="previous-year-papers"
      basePath="/navodaya-smartset"
      title={`JNVST ${CLASS_LABELS[cls]} Previous Year Papers`}
      description={`Solve real JNVST ${CLASS_LABELS[cls]} papers from previous years — with solutions, hints, and concept explanations for every question. Coming soon on Shikso.`}
      icon="📄"
    />
  );
}
