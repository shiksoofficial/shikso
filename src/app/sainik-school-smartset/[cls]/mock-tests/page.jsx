// app/sainik-school-smartset/[cls]/mock-tests/page.js

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
    title: `Sainik School ${label} Mock Tests 2026 — AISSEE Full Mock Test Series | Shikso`,
    description: `Take full-length AISSEE ${label} mock tests matching the official exam pattern. Timed practice, instant analytics, and subject-wise performance reports.`,
  };
}

export default async function MockTestsPage({ params }) {
  const { cls } = await params;

  if (!SAINIK_CLASSES.includes(cls)) notFound();

  return (
    <ComingSoonPage
      cls={cls}
      sectionSlug="mock-tests"
      title={`AISSEE ${CLASS_LABELS[cls]} Mock Tests`}
      description={`Full-length timed mock tests for Sainik School ${CLASS_LABELS[cls]} entrance exam. Matches official AISSEE pattern. Coming soon on Shikso.`}
      icon="🏆"
    />
  );
}
