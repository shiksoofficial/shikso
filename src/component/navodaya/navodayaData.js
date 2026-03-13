// components/navodaya/navodayaData.ts
// All static content for Navodaya SmartSet pages.

// ── Exam Dates ──────────────────────────────────────────────────────
export const EXAM_DATES = {
  'class-6': [
    { event: 'Registration Opens',      detail: 'Online application opens at navodaya.gov.in',                        date: '2 October 2025',        status: 'completed' },
    { event: 'Registration Closes',     detail: 'Last date to submit Class 6 application form',                       date: '15 November 2025',      status: 'completed' },
    { event: 'JNVST Phase 1 Exam',      detail: 'For winter-vacation states — 11:30 AM to 1:30 PM at exam centre',   date: '13 December 2025',      status: 'completed' },
    { event: 'Admit Card — Phase 2',    detail: 'Download hall ticket from navodaya.gov.in using registration no.',   date: 'March 2026',            status: 'active'    },
    { event: 'JNVST Phase 2 Exam',      detail: 'Main exam for remaining states — 11:30 AM to 1:30 PM',              date: '11 April 2026',         status: 'upcoming'  },
    { event: 'Result Declaration',      detail: 'Merit list published at navodaya.gov.in',                            date: 'June 2026 (Expected)',  status: 'tba'       },
    { event: 'Document Verification',   detail: 'Shortlisted students must submit original documents to JNV',         date: 'After Result (TBA)',    status: 'tba'       },
    { event: 'Admission / Reporting',   detail: 'Selected students report to allotted Navodaya Vidyalaya',            date: 'July 2026 (Expected)',  status: 'tba'       },
  ],
  'class-9': [
    { event: 'Registration Opens',      detail: 'Online application at navodaya.gov.in',                              date: 'October 2025',          status: 'completed' },
    { event: 'Registration Closes',     detail: 'Last date to submit Class 9 application',                            date: 'November 2025',         status: 'completed' },
    { event: 'Admit Card Download',     detail: 'Hall ticket available at navodaya.gov.in',                           date: 'January 2026',          status: 'completed' },
    { event: 'JNVST Class 9 Exam',      detail: 'Written lateral entry exam — 2 hours at assigned centre',           date: '8 February 2026',       status: 'completed' },
    { event: 'Result Declaration',      detail: 'Results published at navodaya.gov.in',                               date: 'April 2026 (Expected)', status: 'upcoming'  },
    { event: 'Document Verification',   detail: 'Shortlisted candidates submit documents to JNV',                     date: 'After Result (TBA)',    status: 'tba'       },
    { event: 'Admission / Reporting',   detail: 'Selected students report to allotted JNV for Class 9',              date: 'July 2026 (Expected)',  status: 'tba'       },
  ],
}

// ── Exam Pattern ────────────────────────────────────────────────────
export const EXAM_PATTERN = {
  'class-6': {
    duration: '2 Hours',
    totalQ: 80,
    totalM: 100,
    rows: [
      { section: 'Section A', subject: 'Mental Ability Test (MAT)',         questions: 40, marks: 50, duration: '60 minutes', note: '50% of total marks — most important section' },
      { section: 'Section B', subject: 'Arithmetic Test',                   questions: 20, marks: 25, duration: '30 minutes' },
      { section: 'Section C', subject: 'Language Test (Hindi / Regional)',  questions: 20, marks: 25, duration: '30 minutes' },
    ],
  },
  'class-9': {
    duration: '2 Hours 30 Minutes',
    totalQ: 100,
    totalM: 100,
    rows: [
      { section: '—', subject: 'English',        questions: 15, marks: 15, duration: '—' },
      { section: '—', subject: 'Hindi',           questions: 15, marks: 15, duration: '—' },
      { section: '—', subject: 'Mathematics',     questions: 35, marks: 35, duration: '—', note: 'Highest weightage — 35% of total marks' },
      { section: '—', subject: 'Science',         questions: 20, marks: 20, duration: '—' },
      { section: '—', subject: 'Social Science',  questions: 15, marks: 15, duration: '—' },
    ],
  },
}

// ── Eligibility ─────────────────────────────────────────────────────
export const ELIGIBILITY = {
  'class-6': {
    ageRange: 'Born between 1 May 2013 and 31 July 2015 (for 2025–26)',
    eligible: [
      'Currently studying in Class 5 in a government or aided school',
      'Age between 9–13 years as on 1 May 2026',
      'Studied in Classes 3, 4, and 5 in the same district as the JNV',
      'Applying for the first time — no previous JNVST attempt',
      'School is a government, government-aided or local body school',
    ],
    notEligible: [
      'Studied in Classes 3–5 in a private unaided school',
      'Already passed Class 5 (must be currently in Class 5)',
      'Previously appeared and been selected in JNVST',
      'Does not belong to the same district as the Navodaya school',
      'Does not meet the age criteria (born before May 2013 or after July 2015)',
    ],
  },
  'class-9': {
    ageRange: 'Born between 1 May 2011 and 31 July 2013 (for 2025–26)',
    eligible: [
      'Currently studying in Class 8 in any government or recognised school',
      'Age between 13–16 years as on 1 May 2026',
      'School is in the same state as the JNV being applied to',
      'Applying for the first time under this quota',
      'Indian nationals — no domicile restriction within same state',
    ],
    notEligible: [
      'Already a student of any Jawahar Navodaya Vidyalaya',
      'Already passed Class 8 (must be currently in Class 8)',
      'Does not meet the age criteria',
      'Has appeared in this exam before and was selected',
      'School state does not match the JNV state',
    ],
  },
}

// ── Overview Stats ──────────────────────────────────────────────────
export const OVERVIEW_STATS = {
  'class-6': [
    { icon: '🏫', value: '661+', label: 'Navodaya Schools in India' },
    { icon: '🎓', value: '80',   label: 'Seats Per School (Class 6)' },
    { icon: '📝', value: '80',   label: 'Total Questions in Exam' },
    { icon: '📊', value: '100',  label: 'Total Marks' },
  ],
  'class-9': [
    { icon: '🏫', value: '661+', label: 'Navodaya Schools in India' },
    { icon: '🎓', value: '~10%', label: 'Lateral Entry Seats Available' },
    { icon: '📝', value: '100',  label: 'Total Questions in Exam' },
    { icon: '📊', value: '100',  label: 'Total Marks' },
  ],
}

// ── Class Meta ──────────────────────────────────────────────────────
export const CLASS_META = {
  'class-6': {
    title: 'Navodaya Class 6 — Updates & Information',
    subtitle: 'Complete guide for JNVST Class 6 admission 2026 — exam dates, eligibility, syllabus, and official notifications.',
    examName: 'JNVST Class 6 Phase 2 — 2026',
    examDate: '11 April 2026',
    countdownTarget: '2026-04-11T11:30:00+05:30',
  },
  'class-9': {
    title: 'Navodaya Class 9 — Updates & Information',
    subtitle: 'Complete guide for JNVST Class 9 lateral entry 2026 — exam dates, eligibility, syllabus, and official notifications.',
    examName: 'JNVST Class 9 — 2026',
    examDate: '8 February 2026',
    countdownTarget: '2026-02-08T09:00:00+05:30',
  },
}

// ── Syllabus ────────────────────────────────────────────────────────
export const SYLLABUS = {
  'class-6': [
    {
      subject: 'Mental Ability Test (MAT)',
      marks: 50,
      color: '#fff3cd',
      icon: '🧠',
      topics: [
        'Odd One Out — figures, numbers, letters',
        'Figure Matching — identify the matching pair',
        'Pattern Completion — complete the missing part',
        'Figure Series — identify the next in series',
        'Analogy (Non-Verbal) — figure-based relationships',
        'Geometrical Figure Completion',
        'Mirror Imaging — vertical and horizontal mirror',
        'Punched Hole Pattern — folding and unfolding',
        'Space Visualization — 3D figure rotation',
        'Embedded Figures — find the hidden figure',
      ],
    },
    {
      subject: 'Arithmetic',
      marks: 25,
      color: '#dcfce7',
      icon: '🔢',
      topics: [
        'Number System — 1 to 9,999,999',
        'Four Fundamental Operations — +, −, ×, ÷',
        'Fractions & Decimals — comparison, operations',
        'Factors & Multiples — HCF, LCM',
        'Percentage — basic calculations',
        'Profit & Loss — cost price, selling price',
        'Simple Interest — P, R, T calculations',
        'Distance, Time & Speed',
        'Perimeter, Area & Volume — basic shapes',
        'Approximation of Expressions',
        'Unitary Method',
        'Calendar & Time',
      ],
    },
    {
      subject: 'Language Test',
      marks: 25,
      color: '#dbeafe',
      icon: '📖',
      topics: [
        'Reading Comprehension — passage-based questions',
        'Fill in the Blanks — grammar and vocabulary',
        'Spelling Correction — identify correct spelling',
        'Sentence Completion',
        'Antonyms & Synonyms',
        'One Word Substitution',
        'Rearrangement of Sentences (Para Jumbles)',
        'Idioms & Phrases',
        'Grammar — Tenses, Articles, Prepositions',
        'Vocabulary Usage in Context',
      ],
    },
  ],
  'class-9': [
    {
      subject: 'Mathematics',
      marks: 35,
      color: '#dcfce7',
      icon: '🔢',
      topics: [
        'Number Systems — rational, irrational numbers',
        'Algebra — linear equations, polynomials, factorisation',
        'Coordinate Geometry — distance, section formula',
        'Geometry — triangles, congruence, similarity, circles',
        'Mensuration — area, volume of 2D and 3D shapes',
        'Ratio, Proportion & Unitary Method',
        'Percentage, Profit & Loss, Discount',
        'Simple & Compound Interest',
        'Time, Distance & Speed — trains, boats',
        'Statistics — mean, median, mode, bar graphs',
        'Probability — basic events',
        'Exponents & Powers',
      ],
    },
    {
      subject: 'Science',
      marks: 20,
      color: '#fce7f3',
      icon: '🔬',
      topics: [
        'Matter & Its Properties — states, changes',
        'Atoms, Molecules & Elements',
        'Cell — structure, organelles, functions',
        'Living World — classification, adaptations',
        'Human Body — organ systems, nutrition, diseases',
        'Motion, Force & Pressure — Newton\'s laws',
        'Work, Energy & Power',
        'Sound & Light — reflection, refraction',
        'Electricity & Magnetism — basic circuits',
        'Natural Resources — soil, water, air',
        'Crop Production & Micro-organisms',
        'Environmental Science basics',
      ],
    },
    {
      subject: 'English',
      marks: 15,
      color: '#dbeafe',
      icon: '📖',
      topics: [
        'Reading Comprehension — unseen passages',
        'Grammar — tenses, voice, narration, modals',
        'Vocabulary — synonyms, antonyms, idioms',
        'Sentence Correction & Transformation',
        'Error Detection',
        'Fill in the Blanks — grammar-based',
        'One Word Substitution',
        'Para Jumbles — rearranging sentences',
      ],
    },
    {
      subject: 'Hindi',
      marks: 15,
      color: '#ede9fe',
      icon: '🅷',
      topics: [
        'पठन बोध — अपठित गद्यांश',
        'व्याकरण — संज्ञा, सर्वनाम, विशेषण, क्रिया',
        'संधि एवं समास',
        'मुहावरे और लोकोक्तियाँ',
        'रिक्त स्थान — उचित शब्द भरो',
        'विलोम एवं पर्यायवाची शब्द',
        'वाक्य सुधार — त्रुटि पहचानो',
        'अलंकार — रूपक, उपमा',
      ],
    },
    {
      subject: 'Social Science',
      marks: 15,
      color: '#fef3c7',
      icon: '🌍',
      topics: [
        'History — Ancient, Medieval, and Modern India',
        'Freedom Movement — key events and leaders',
        'Indian Geography — rivers, climate, resources, maps',
        'World Geography — continents, oceans, countries',
        'Indian Constitution — Preamble, Fundamental Rights',
        'Government — Parliament, Executive, Judiciary',
        'Indian Economy — agriculture, industries, trade',
        'Disaster Management — types and prevention',
      ],
    },
  ],
}

// ── Notifications ───────────────────────────────────────────────────
export const NOTIFICATIONS = {
  'class-6': [
    {
      day: '11', month: 'APR 26', bgColor: '#16a34a',
      tag: '📋 Exam Date', tagBg: '#dcfce7', tagColor: '#166534',
      title: 'JNVST Class 6 Phase 2 — April 11, 2026 at 11:30 AM',
      body: 'Phase 2 of JNVST for Class 6 admission (2026–27 session) is scheduled for April 11, 2026 from 11:30 AM to 1:30 PM at allotted exam centres across all states.',
      links: [
        { label: '🔗 Official Notice', href: 'https://navodaya.gov.in', style: 'blue' },
        { label: '⬇ Download Admit Card', href: 'https://navodaya.gov.in', style: 'orange' },
      ],
    },
    {
      day: 'Mar', month: '2026', bgColor: '#2563eb',
      tag: '🪪 Admit Card', tagBg: '#dbeafe', tagColor: '#1e40af',
      title: 'Phase 2 Admit Card Now Available for Download',
      body: 'Students registered for JNVST Class 6 Phase 2 can now download their Admit Card from navodaya.gov.in using their registration number and date of birth.',
      links: [
        { label: '⬇ Download Admit Card', href: 'https://navodaya.gov.in', style: 'orange' },
        { label: '🔗 Official Site', href: 'https://navodaya.gov.in', style: 'blue' },
      ],
    },
    {
      day: 'Dec', month: '2024', bgColor: '#d97706',
      tag: '🏫 Big News', tagBg: '#fef3c7', tagColor: '#92400e',
      title: '28 New Navodaya Vidyalayas Approved — 15,680 More Students to Benefit',
      body: 'PM Modi\'s cabinet approved ₹2,359 crore to establish 28 new Navodaya Vidyalayas in districts that previously had none. Construction target: 2028–29.',
      links: [
        { label: '📖 Read Full News', href: '/navodaya/28-new-navodaya-vidyalayas-approved-2024', style: 'blue' },
      ],
    },
    {
      day: '13', month: 'DEC 25', bgColor: '#16a34a',
      tag: '✅ Completed', tagBg: '#dcfce7', tagColor: '#166534',
      title: 'JNVST Phase 1 Exam Conducted on December 13, 2025',
      body: 'Phase 1 of JNVST Class 6 (for winter-vacation states) was successfully conducted on December 13, 2025. Results for Phase 1 states will be declared alongside Phase 2 results.',
      links: [],
    },
  ],
  'class-9': [
    {
      day: '8', month: 'FEB 26', bgColor: '#16a34a',
      tag: '✅ Completed', tagBg: '#dcfce7', tagColor: '#166534',
      title: 'JNVST Class 9 Exam Conducted on February 8, 2026',
      body: 'The lateral entry exam for Navodaya Class 9 (session 2026–27) was held on February 8, 2026. Results are expected in April 2026 at navodaya.gov.in.',
      links: [
        { label: '🔗 Check Result Status', href: 'https://navodaya.gov.in', style: 'blue' },
      ],
    },
    {
      day: 'Apr', month: '2026', bgColor: '#d97706',
      tag: '⏳ Awaited', tagBg: '#fef3c7', tagColor: '#92400e',
      title: 'Class 9 Result Expected in April 2026',
      body: 'The result for JNVST Class 9 lateral entry exam is expected to be published in April 2026. Merit list will be available on navodaya.gov.in — bookmark the page.',
      links: [
        { label: '🔗 Official Site', href: 'https://navodaya.gov.in', style: 'blue' },
      ],
    },
    {
      day: 'Dec', month: '2024', bgColor: '#d97706',
      tag: '🏫 Big News', tagBg: '#fef3c7', tagColor: '#92400e',
      title: '28 New Navodaya Vidyalayas Approved — More Seats in Class 9 Too',
      body: '28 new JNVs sanctioned by the Cabinet will also eventually offer Class 9 lateral entry seats. Total Navodaya schools will cross 689+ across India.',
      links: [
        { label: '📖 Read Full News', href: '/navodaya/28-new-navodaya-vidyalayas-approved-2024', style: 'blue' },
      ],
    },
  ],
}
