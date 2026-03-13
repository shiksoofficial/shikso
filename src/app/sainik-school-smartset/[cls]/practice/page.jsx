// app/sainik-school-smartset/[cls]/practice/page.js

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
    title: `Sainik School ${label} Practice Questions — Topic-wise AISSEE Practice | Shikso`,
    description: `Unlimited topic-wise practice questions for AISSEE ${label}. AI-powered adaptive practice covering every subject and topic in the official syllabus.`,
  };
}

export default async function PracticePage({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="practice"
      title={`AISSEE ${CLASS_LABELS[cls]} — Unlimited Topic Practice`}
      description={`AI-powered topic-wise practice for every subject in Sainik School ${CLASS_LABELS[cls]} entrance exam. Adaptive difficulty, instant feedback, and progress tracking.`}
      icon="🧠"
    />
  );
}
