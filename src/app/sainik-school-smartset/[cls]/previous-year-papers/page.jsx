// app/sainik-school-smartset/[cls]/previous-year-papers/page.js

import { notFound } from "next/navigation";
import { SAINIK_CLASSES, CLASS_LABELS } from "@/component/sainik/sainikNav";
import ComingSoonPage from "@/component/sainik/ComingSoonPage";

export function generateStaticParams() {
  return SAINIK_CLASSES.map((cls) => ({ cls }));
}

export async function generateMetadata({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) return {};

  const label = CLASS_LABELS[cls];

  return {
    title: `Sainik School ${label} Previous Year Papers — AISSEE PYQs | Shikso`,
    description: `Solve actual AISSEE ${label} previous year question papers with solutions. Practice real exam questions from past years to understand the pattern and score better.`,
  };
}

export default async function PreviousYearPapersPage({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="previous-year-papers"
      title={`AISSEE ${CLASS_LABELS[cls]} Previous Year Papers`}
      description={`Solve real AISSEE ${CLASS_LABELS[cls]} papers from past years — with solutions, hints, and concept explanations. Coming soon on Shikso.`}
      icon="📄"
    />
  );
}
