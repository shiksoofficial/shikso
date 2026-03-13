// sainikNav.js
// Single source of truth for all Sainik SmartSet navigation.

export const SAINIK_CLASSES = ["class-6", "class-9"];

export const CLASS_LABELS = {
  "class-6": "Class 6",
  "class-9": "Class 9",
};

export const SAINIK_SECTIONS = [
  {
    label: "Updates & Information",
    slug: "updates",
    icon: "📢",
    description:
      "Exam dates, form dates, admit card, result — all official info",
  },
  {
    label: "Syllabus",
    slug: "syllabus",
    icon: "📚",
    description: "Complete subject-wise syllabus aligned to AISSEE pattern",
  },
  {
    label: "Previous Year Papers",
    slug: "previous-year-papers",
    icon: "📄",
    description: "Solve real AISSEE papers year-by-year with solutions",
  },
  {
    label: "Mock Tests",
    slug: "mock-tests",
    icon: "🏆",
    description: "Full-length timed mock tests matching AISSEE pattern",
  },
  {
    label: "Unlimited Practice",
    slug: "practice",
    icon: "🧠",
    description: "Topic-wise, difficulty-wise AI-powered practice questions",
  },
];

// Build full href for any class + section combo
export function sainikHref(cls, sectionSlug) {
  const base = `/sainik-school-smartset/${cls}`;
  return sectionSlug ? `${base}/${sectionSlug}` : base;
}
