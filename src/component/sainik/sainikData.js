// sainikData.js
// All static content for Sainik SmartSet pages.
// When you go dynamic later, replace these exports with API calls.

// ── Exam Dates ─────────────────────────────────────────

export const EXAM_DATES = {
  "class-6": [
    {
      event: "Registration Opens",
      detail: "Online application at sainikschooladmission.in",
      date: "October 2025",
      status: "completed",
    },
    {
      event: "Registration Closes",
      detail: "Last date to submit application form",
      date: "November 2025",
      status: "completed",
    },
    {
      event: "Admit Card Download",
      detail: "Hall ticket available at sainikschooladmission.in",
      date: "December 2025",
      status: "completed",
    },
    {
      event: "AISSEE 2026 Exam",
      detail: "Main written exam — Sunday, at allotted exam centre",
      date: "9 February 2026",
      status: "completed",
    },
    {
      event: "Answer Key Release",
      detail: "Official answer key published for objections",
      date: "February 2026",
      status: "completed",
    },
    {
      event: "Result Declaration",
      detail: "Merit list published at sainikschooladmission.in",
      date: "April 2026 (Expected)",
      status: "upcoming",
    },
    {
      event: "Medical Examination",
      detail: "Shortlisted students called for medical fitness test",
      date: "May 2026 (Expected)",
      status: "tba",
    },
    {
      event: "Final Admission",
      detail: "Selected students report to allotted Sainik School",
      date: "July 2026 (Expected)",
      status: "tba",
    },
  ],

  "class-9": [
    {
      event: "Registration Opens",
      detail: "Online application at sainikschooladmission.in",
      date: "October 2025",
      status: "completed",
    },
    {
      event: "Registration Closes",
      detail: "Last date to submit application form",
      date: "November 2025",
      status: "completed",
    },
    {
      event: "Admit Card Download",
      detail: "Hall ticket available at sainikschooladmission.in",
      date: "December 2025",
      status: "completed",
    },
    {
      event: "AISSEE 2026 Exam",
      detail: "Main written exam — Sunday, at allotted exam centre",
      date: "9 February 2026",
      status: "completed",
    },
    {
      event: "Answer Key Release",
      detail: "Official answer key published for objections",
      date: "February 2026",
      status: "completed",
    },
    {
      event: "Result Declaration",
      detail: "Merit list published at sainikschooladmission.in",
      date: "April 2026 (Expected)",
      status: "upcoming",
    },
    {
      event: "Medical Examination",
      detail: "Shortlisted students called for medical fitness test",
      date: "May 2026 (Expected)",
      status: "tba",
    },
    {
      event: "Final Admission",
      detail: "Selected students report to allotted Sainik School",
      date: "July 2026 (Expected)",
      status: "tba",
    },
  ],
};

// ── Exam Pattern ───────────────────────────────────────

export const EXAM_PATTERN = {
  "class-6": {
    duration: "2 Hours 30 Minutes",
    totalQ: 125,
    totalM: 300,
    rows: [
      {
        subject: "Mathematics",
        questions: 50,
        marks: 150,
        note: "Highest weightage — 50% of total marks",
      },
      { subject: "General Knowledge", questions: 25, marks: 75 },
      { subject: "Language (English or Hindi)", questions: 25, marks: 50 },
      { subject: "Intelligence", questions: 25, marks: 25 },
    ],
  },

  "class-9": {
    duration: "3 Hours",
    totalQ: 150,
    totalM: 400,
    rows: [
      {
        subject: "Mathematics",
        questions: 50,
        marks: 200,
        note: "Highest weightage — 50% of total marks",
      },
      { subject: "General Science", questions: 25, marks: 75 },
      { subject: "Social Studies", questions: 25, marks: 50 },
      { subject: "English", questions: 25, marks: 50 },
      { subject: "Intelligence & Reasoning", questions: 25, marks: 25 },
    ],
  },
};

// ── Eligibility ───────────────────────────────────────

export const ELIGIBILITY = {
  "class-6": {
    ageRange: "Born between 1 April 2014 and 31 March 2016",

    eligible: [
      "Currently studying in Class 5 in any recognised school",
      "Age between 10–12 years as on 1 April 2026",
      "Indian nationals only",
      "Boys and Girls both eligible (co-educational from 2021)",
      "Students from any school type — government or private",
    ],

    notEligible: [
      "Age below 10 or above 12 years as on 1 April 2026",
      "Already selected in a Sainik School previously",
      "Not an Indian national",
      "Already studying in Class 6 or above",
    ],
  },

  "class-9": {
    ageRange: "Born between 1 April 2011 and 31 March 2013",

    eligible: [
      "Currently studying in Class 8 in any recognised school",
      "Age between 13–15 years as on 1 April 2026",
      "Indian nationals — Boys and Girls both eligible",
      "Students from government or private schools",
      "Must not have previously appeared and been selected",
    ],

    notEligible: [
      "Age below 13 or above 15 years as on 1 April 2026",
      "Already studying in Class 9 or above",
      "Already selected in a Sainik School previously",
      "Not an Indian national",
    ],
  },
};

// ── Overview Stats ─────────────────────────────────────

export const OVERVIEW_STATS = {
  "class-6": [
    { icon: "🏫", value: "33", label: "Sainik Schools in India" },
    { icon: "🎓", value: "~25", label: "Seats Per School (Approx)" },
    { icon: "📝", value: "125", label: "Total Questions in Exam" },
    { icon: "📊", value: "300", label: "Total Marks" },
  ],

  "class-9": [
    { icon: "🏫", value: "33", label: "Sainik Schools in India" },
    { icon: "🎓", value: "~10", label: "Seats Per School (Lateral)" },
    { icon: "📝", value: "150", label: "Total Questions in Exam" },
    { icon: "📊", value: "400", label: "Total Marks" },
  ],
};

// ── Hero content ───────────────────────────────────────

export const CLASS_META = {
  "class-6": {
    title: "Sainik School Class 6 — Updates & Information",
    subtitle:
      "Complete guide for AISSEE Class 6 entrance exam 2026 — exam dates, eligibility, syllabus, and official notifications.",
    examName: "AISSEE Class 6 — 2026",
    examDate: "9 February 2026",
    countdownTarget: "2026-02-09T09:00:00+05:30",
  },

  "class-9": {
    title: "Sainik School Class 9 — Updates & Information",
    subtitle:
      "Complete guide for AISSEE Class 9 lateral entry exam 2026 — exam dates, eligibility, syllabus, and official notifications.",
    examName: "AISSEE Class 9 — 2026",
    examDate: "9 February 2026",
    countdownTarget: "2026-02-09T09:00:00+05:30",
  },
};
