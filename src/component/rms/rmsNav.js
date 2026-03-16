// component/rms/rmsNav.js
// Single source of truth for RMS SmartSet navigation.
// Edit here → navbar, tabs, hub cards all update automatically.

export const RMS_BASE = "/rms-entrance-exam";

export const RMS_CLASSES = ["class-6", "class-9"];

export const RMS_CLASS_LABELS = {
  "class-6": "Class 6",
  "class-9": "Class 9",
};

export function normalizeRMSClass(value) {
  if (value === "6") return "class-6";
  if (value === "9") return "class-9";
  return value;
}

export function isRMSClass(value) {
  return RMS_CLASSES.includes(normalizeRMSClass(value));
}

export function rmsHref(cls, section) {
  if (!section) return `${RMS_BASE}/${cls}`;
  return `${RMS_BASE}/${cls}/${section}`;
}

export const RMS_SECTIONS = [
  {
    id: "updates",
    label: "Updates & Information",
    shortLabel: "Updates",
    icon: "📢",
    slug: "updates",
    description: "Exam dates, eligibility, notifications & FAQs",
    status: "live",
  },
  {
    id: "syllabus",
    label: "Syllabus",
    shortLabel: "Syllabus",
    icon: "📚",
    slug: "syllabus",
    description: "Complete topic-wise syllabus for all subjects",
    status: "live",
  },
  {
    id: "previous-year-papers",
    label: "Previous Year Papers",
    shortLabel: "PYQs",
    icon: "📄",
    slug: "previous-year-papers",
    description: "Real RMS CET papers with solutions",
    status: "coming-soon",
  },
  {
    id: "mock-tests",
    label: "Mock Tests",
    shortLabel: "Mock Tests",
    icon: "🏆",
    slug: "mock-tests",
    description: "Full-length timed mock tests with analytics",
    status: "coming-soon",
  },
  {
    id: "practice",
    label: "Unlimited Practice",
    shortLabel: "Practice",
    icon: "🧠",
    slug: "practice",
    description: "AI-powered topic-wise adaptive practice",
    status: "coming-soon",
  },
];
