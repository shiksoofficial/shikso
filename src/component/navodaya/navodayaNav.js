// components/navodaya/navodayaNav.ts
// Single source of truth for all Navodaya SmartSet navigation.

export const NAVODAYA_CLASSES = ['class-6', 'class-9']

export const CLASS_LABELS = {
  'class-6': 'Class 6',
  'class-9': 'Class 9',
}

export function normalizeNavodayaClass(value) {
  if (value === '6') return 'class-6'
  if (value === '9') return 'class-9'
  return value
}

export function isNavodayaClass(value) {
  return NAVODAYA_CLASSES.includes(normalizeNavodayaClass(value))
}

export const NAVODAYA_SECTIONS = [
  {
    label: 'Updates & Information',
    slug: 'updates',
    icon: '📢',
    description: 'Exam dates, form dates, admit card, result — all official JNVST info',
  },
  {
    label: 'Syllabus',
    slug: 'syllabus',
    icon: '📚',
    description: 'Complete topic-wise syllabus aligned to official JNVST pattern',
  },
  {
    label: 'Previous Year Papers',
    slug: 'previous-year-papers',
    icon: '📄',
    description: 'Solve real JNVST papers year-by-year with solutions and hints',
  },
  {
    label: 'Mock Tests',
    slug: 'mock-tests',
    icon: '🏆',
    description: 'Full-length timed mock tests matching the official JNVST pattern',
  },
  {
    label: 'Unlimited Practice',
    slug: 'practice',
    icon: '🧠',
    description: 'Topic-wise, difficulty-wise AI-powered practice questions',
  },
]

export function navodayaHref(cls, sectionSlug, routeBase = '/navodaya-smartset') {
  const normalizedCls = normalizeNavodayaClass(cls)
  const base = `${routeBase}/${normalizedCls}`
  return sectionSlug ? `${base}/${sectionSlug}` : base
}
