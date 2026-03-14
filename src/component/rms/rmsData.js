// component/rms/rmsData.js
// All RMS SmartSet static content — dates, eligibility, exam pattern, syllabus, FAQs.
// ALWAYS edit THIS FILE to update content. Never edit page files directly.

// ── SCHOOLS ──────────────────────────────────────────────────────────────────
export const RMS_SCHOOLS = [
  { name: 'RMS Chail', location: 'Shimla Hills, Himachal Pradesh', established: 1925, note: 'Oldest RMS — originally in Jalandhar Cantt, moved to Chail in 1960' },
  { name: 'RMS Ajmer', location: 'Ajmer, Rajasthan', established: 1930, note: 'Only RMS exclusively for boys (Class VI entry only)' },
  { name: 'RMS Belgaum', location: 'Belgaum (Belagavi), Karnataka', established: 1946, note: 'Also known as RMS Belagavi' },
  { name: 'RMS Bengaluru', location: 'Museum Road, Bengaluru, Karnataka', established: 1946, note: 'Switched from ICSE to CBSE in 1967' },
  { name: 'RMS Dholpur', location: 'Dholpur, Rajasthan', established: 1962, note: 'Only RMS established after Independence' },
]

// ── EXAM DATES — UPDATE FOR NEXT CYCLE ───────────────────────────────────────
export const EXAM_DATES = {
  'class-6': {
    applicationStart: 'September 2026 (Expected)',
    applicationEnd: 'October 2026 (Expected)',
    admitCard: 'November–December 2026 (Expected)',
    examDate: 'December 2026 (Expected)',
    result: 'February 2027 (Expected)',
    interviews: 'March–April 2027 (Expected)',
    medicalExam: 'April–May 2027 (Expected)',
    academicSessionStart: 'April 2027',
    officialSite: 'rashtriyamilitaryschools.edu.in',
    applicationSite: 'apply-delhi.nielit.gov.in',
    lastCETDate: 'December 7, 2025',
    lastResultDate: 'February 9, 2026',
  },
  'class-9': {
    applicationStart: 'September 2026 (Expected)',
    applicationEnd: 'October 2026 (Expected)',
    admitCard: 'November–December 2026 (Expected)',
    examDate: 'December 2026 (Expected)',
    result: 'February 2027 (Expected)',
    interviews: 'March–April 2027 (Expected)',
    medicalExam: 'April–May 2027 (Expected)',
    academicSessionStart: 'April 2027',
    officialSite: 'rashtriyamilitaryschools.edu.in',
    applicationSite: 'apply-delhi.nielit.gov.in',
    lastCETDate: 'December 7, 2025',
    lastResultDate: 'February 9, 2026',
  },
}

// ── ELIGIBILITY ───────────────────────────────────────────────────────────────
export const ELIGIBILITY = {
  'class-6': {
    gender: 'Boys & Girls both eligible',
    ageRange: '10–12 years as on 31 March of admission year',
    ageBorn: 'Born between 1 April 2014 – 31 March 2016 (for 2026-27 session)',
    qualification: 'Passed Class V or currently studying in Class V',
    schoolType: 'Any recognised school',
    ageRelaxation: '6 months for wards of KIA (Killed in Action) personnel',
    medium: 'English medium residential school (boarders only)',
    reservationGirls: '10% seats or max 30 seats across all 5 RMSs (whichever is less)',
  },
  'class-9': {
    gender: 'Boys & Girls both eligible',
    ageRange: '13–15 years as on 31 March of admission year',
    ageBorn: 'Born between 1 April 2011 – 31 March 2013 (for 2026-27 session)',
    qualification: 'Passed Class VIII or currently studying in Class VIII',
    schoolType: 'Any recognised school',
    ageRelaxation: '6 months for wards of KIA personnel',
    medium: 'English medium residential school (boarders only)',
    reservationGirls: '10% seats across all 5 RMSs',
  },
}

// ── EXAM PATTERN ─────────────────────────────────────────────────────────────
export const EXAM_PATTERN = {
  'class-6': {
    totalMarks: 200,
    meritMarks: 150,
    duration: '2 hours 30 minutes (9:00 AM – 11:30 AM)',
    format: 'OMR-based MCQ',
    medium: 'Bilingual — Hindi & English',
    standard: 'CBSE Class V curriculum',
    negativeMarking: 'None',
    minimumQualifying: '40% each in Maths, GK & Intelligence (individually)',
    importantNote: 'English marks (50) are qualifying only — NOT counted in final merit',
    interviewMarks: 20,
    selectionProcess: [
      'CET Written Test — 200 marks (150 counted in merit)',
      'Interview — 20 marks',
      'Medical Fitness Exam at Army hospital',
    ],
    papers: [
      { subject: 'Intelligence Test', questions: 50, marks: 50, inMerit: true, minQualifying: '40%' },
      { subject: 'Mathematics', questions: 50, marks: 50, inMerit: true, minQualifying: '40%' },
      { subject: 'General Knowledge & Current Affairs', questions: 50, marks: 50, inMerit: true, minQualifying: '40%' },
      { subject: 'English', questions: 50, marks: 50, inMerit: false, minQualifying: 'Qualifying only' },
    ],
  },
  'class-9': {
    totalMarks: 200,
    meritMarks: 200,
    duration: 'Two separate papers (timings per official schedule)',
    format: 'OMR-based MCQ — two papers',
    medium: 'English only',
    standard: 'NCERT Class VIII curriculum',
    negativeMarking: 'None',
    minimumQualifying: '50% in Paper I AND 50% in Paper II (separately)',
    importantNote: 'Both papers count in merit. Interview carries 50 marks.',
    interviewMarks: 50,
    selectionProcess: [
      'CET Paper I — 100 marks (English, Hindi, Social Science)',
      'CET Paper II — 100 marks (Maths, Science)',
      'Interview — 50 marks',
      'Medical Fitness Exam at Army hospital',
    ],
    papers: [
      {
        paperNum: 'Paper I',
        totalMarks: 100,
        minQualifying: '50% in Paper I',
        subjects: [
          { subject: 'English', questions: 50, marks: 50 },
          { subject: 'Hindi', questions: 20, marks: 20 },
          { subject: 'Social Science', questions: 30, marks: 30 },
        ],
      },
      {
        paperNum: 'Paper II',
        totalMarks: 100,
        minQualifying: '50% in Paper II',
        subjects: [
          { subject: 'Mathematics', questions: 50, marks: 50 },
          { subject: 'Science', questions: 50, marks: 50 },
        ],
      },
    ],
  },
}

// ── RESERVATION POLICY ────────────────────────────────────────────────────────
export const RESERVATION = [
  { category: 'JCOs/OR of Army, Navy & Air Force (incl. ex-servicemen)', percent: '70%' },
  { category: 'Officers of Army, Navy & Air Force (incl. retired) + Civilians', percent: '30%' },
  { category: 'Girls (within above categories)', percent: '10% or max 30 seats across all RMSs' },
  { category: 'SC (within all categories)', percent: '15%' },
  { category: 'ST (within all categories)', percent: '7.5%' },
  { category: 'OBC-NCL (within all categories)', percent: '27%' },
  { category: 'KIA (Killed in Action) earmarked seats', percent: '50 seats total across 5 RMSs' },
]

export const APPLICATION_FEE = {
  general: '₹550 (including postal charges)',
  scSt: '₹275 (SC/ST — caste certificate required)',
  mode: 'Online only via apply-delhi.nielit.gov.in',
}

// ── NOTIFICATIONS — add new ones at TOP ──────────────────────────────────────
export const NOTIFICATIONS = [
  {
    date: 'Feb 9, 2026',
    title: 'RMS CET 2026-27 Result Declared',
    body: 'Results for Class 6 and Class 9 CET (held Dec 7, 2025) are out. Shortlisted candidates will receive interview call letters. Check at rashtriyamilitaryschools.edu.in.',
    tag: 'Result',
    important: true,
  },
  {
    date: 'Dec 7, 2025',
    title: 'RMS CET 2026-27 Successfully Conducted',
    body: 'The Common Entrance Test for Class 6 and Class 9 admissions (session 2026-27) was held on December 7, 2025 from 9:00 AM to 11:30 AM across exam centres.',
    tag: 'Exam',
    important: false,
  },
  {
    date: 'Dec 1, 2025',
    title: 'Admit Card Released',
    body: 'RMS CET 2026-27 admit cards were released at 4 PM on December 1, 2025. Candidates could download from the official NIELIT portal.',
    tag: 'Admit Card',
    important: false,
  },
  {
    date: 'Sep 10, 2025',
    title: 'Application Window Opened for Session 2026-27',
    body: 'Online applications for RMS CET 2026-27 opened September 10, 2025. Closed October 9, 2025. Next cycle expected September 2026.',
    tag: 'Application',
    important: false,
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────────────
export const FAQS = {
  'class-6': [
    { q: 'What is RMS CET Class 6?', a: 'RMS CET (Common Entrance Test) Class 6 is an OMR-based entrance exam by the Ministry of Defence to admit students into Class VI at the 5 Rashtriya Military Schools. It covers Intelligence, Maths, GK & English.' },
    { q: 'Are girls eligible for RMS Class 6?', a: 'Yes. Both boys and girls are eligible. 10% of seats (or max 30 seats across all 5 RMSs, whichever is less) are reserved for girls.' },
    { q: 'What is the age limit for Class 6 RMS CET?', a: 'Candidates must be between 10–12 years of age as on 31 March of the admission year. Wards of KIA personnel get 6 months upper age relaxation.' },
    { q: 'How many marks is the RMS CET Class 6 exam?', a: 'The exam is 200 marks total (50 marks each for Intelligence, Maths, GK, and English). English marks are qualifying only — NOT counted in the final merit list.' },
    { q: 'Is there negative marking in RMS CET?', a: 'No. There is no negative marking. Attempt every question.' },
    { q: 'What is the minimum passing score?', a: 'Candidates must score at least 40% each in Mathematics, GK, and Intelligence sections individually. English is qualifying only.' },
    { q: 'What happens after the written exam?', a: 'Shortlisted candidates are called for an Interview (20 marks) at a designated RMS. Final selection is based on written + interview score, followed by a Medical Fitness Test at an Army hospital.' },
    { q: 'Are RMS schools boarding schools?', a: 'Yes. All 5 RMSs are fully residential — boarders only, no day scholars. Annual fees range from ₹25,000–₹90,000 depending on category.' },
  ],
  'class-9': [
    { q: 'What is RMS CET Class 9?', a: 'RMS CET Class 9 is an entrance exam for admission into Class IX at Rashtriya Military Schools. It has two papers: Paper I (English, Hindi, Social Science — 100 marks) and Paper II (Maths, Science — 100 marks).' },
    { q: 'What is the eligibility for Class 9 RMS CET?', a: 'Candidates must be 13–15 years of age as on 31 March of the admission year and must have passed or be studying in Class VIII from any recognised school.' },
    { q: 'What syllabus is the Class 9 exam based on?', a: 'The Class 9 RMS CET is based on NCERT Class VIII curriculum for all subjects.' },
    { q: 'How many interview marks are there for Class 9?', a: 'The interview carries 50 marks for Class 9 (vs 20 marks for Class 6). Final merit = written test + interview.' },
    { q: 'What is the minimum qualifying score for Class 9?', a: 'Candidates must score at least 50% in Paper I (English + Hindi + Social Science) AND at least 50% in Paper II (Maths + Science) separately.' },
    { q: 'When is the RMS CET held every year?', a: 'The RMS CET is held annually in December. Applications open in September. The last exam was December 7, 2025.' },
  ],
}

// ── SYLLABUS — CLASS 6 ────────────────────────────────────────────────────────
export const SYLLABUS = {
  'class-6': [
    {
      subject: 'Intelligence Test',
      marks: 50,
      questions: 50,
      inMerit: true,
      color: '#1D4ED8',
      bgColor: '#EFF6FF',
      topics: [
        { name: 'Analogy (Relationship)', details: 'Identify similar relationships between pairs of objects, words or concepts' },
        { name: 'Odd One Out', details: 'Find the element that does not belong to the group' },
        { name: 'Sequence & Series', details: 'Number, letter, and figure sequences — find the next or missing term' },
        { name: 'Coding & Decoding', details: 'Decode patterns in word/number coding' },
        { name: 'Verbal Reasoning', details: 'Word relationships, classification, assertion problems' },
        { name: 'Non-Verbal Reasoning', details: 'Figure patterns, mirror images, embedded figures, paper folding' },
        { name: 'Pattern Completion', details: 'Complete visual matrix patterns — similar to Navodaya MAT' },
        { name: 'Direction & Distance', details: 'Solve direction-based problems with shortest path logic' },
        { name: 'Ranking & Arrangement', details: 'Arrange objects/people by given conditions' },
        { name: 'Blood Relations', details: 'Family tree reasoning problems' },
      ],
    },
    {
      subject: 'Mathematics',
      marks: 50,
      questions: 50,
      inMerit: true,
      color: '#15803D',
      bgColor: '#F0FDF4',
      topics: [
        { name: 'Number System', details: 'Natural numbers, whole numbers, integers, fractions, decimals, LCM, HCF' },
        { name: 'Basic Operations', details: 'Addition, subtraction, multiplication, division with fractions and decimals' },
        { name: 'Percentage', details: 'Percentage calculation, increase/decrease, word problems' },
        { name: 'Profit & Loss', details: 'Cost price, selling price, profit%, loss%' },
        { name: 'Simple Interest', details: 'SI formula, finding principal, rate, time' },
        { name: 'Ratio & Proportion', details: 'Simplifying ratios, direct/inverse proportion, unitary method' },
        { name: 'Time & Work', details: 'Work done, time taken — basic word problems' },
        { name: 'Time, Speed & Distance', details: 'Speed-distance-time formula, average speed' },
        { name: 'Geometry Basics', details: 'Lines, angles, triangles — types and properties, quadrilaterals' },
        { name: 'Perimeter & Area', details: 'Rectangle, square, triangle, circle — perimeter and area formulas' },
        { name: 'Mensuration', details: 'Volume and surface area of cube, cuboid (Class 5 level)' },
        { name: 'Data Handling', details: 'Bar graphs, pie charts, pictographs; simple averages' },
      ],
    },
    {
      subject: 'General Knowledge & Current Affairs',
      marks: 50,
      questions: 50,
      inMerit: true,
      color: '#C2410C',
      bgColor: '#FFF7ED',
      topics: [
        { name: 'Indian Defence Forces', details: 'Army, Navy, Air Force — structure, ranks, famous operations, NDA, RMS history' },
        { name: 'History of India', details: 'Ancient India highlights, freedom movement, important dates and personalities' },
        { name: 'Indian Geography', details: 'Rivers, mountains, states, capitals, physical features' },
        { name: 'Civics & Constitution', details: 'Indian Constitution basics, fundamental rights, government structure' },
        { name: 'Science & Technology', details: 'Basic science facts, space missions (ISRO), important inventions' },
        { name: 'Sports', details: 'Olympic medals, national sports, famous Indian sportspersons' },
        { name: 'Awards & Honours', details: 'Bharat Ratna, Padma awards, Gallantry awards (PVC, MVC), Nobel Prize' },
        { name: 'Current Affairs', details: 'National events of past 6–12 months — schemes, summits, appointments' },
        { name: 'International Organisations', details: 'UN, WHO, UNESCO, NATO, SAARC — headquarters and purpose' },
        { name: 'Countries, Capitals, Currencies', details: 'Major world countries, their capitals and currencies' },
        { name: 'Environment & Ecology', details: 'National parks, wildlife sanctuaries, endangered species, climate' },
        { name: 'Important Days & Dates', details: 'National days, international observances, birthdays of leaders' },
      ],
    },
    {
      subject: 'English',
      marks: 50,
      questions: 50,
      inMerit: false,
      color: '#9333EA',
      bgColor: '#FDF4FF',
      note: 'Qualifying only — marks NOT counted in final merit',
      topics: [
        { name: 'Grammar — Parts of Speech', details: 'Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions' },
        { name: 'Antonyms & Synonyms', details: 'Commonly tested pairs at Class 5 vocabulary level' },
        { name: 'Fill in the Blanks', details: 'Articles (a/an/the), prepositions, correct form of verb' },
        { name: 'Comprehension Passages', details: 'Read a passage and answer MCQ questions' },
        { name: 'Sentence Construction', details: 'Arrange jumbled words into correct sentences' },
        { name: 'Spelling Check', details: 'Identify correctly/incorrectly spelled words' },
        { name: 'Error Correction', details: 'Identify and correct grammatical errors in sentences' },
        { name: 'One-Word Substitution', details: 'Replace a phrase with a single word' },
      ],
    },
  ],
  'class-9': [
    {
      paper: 'Paper I — 100 Marks',
      minQualifying: '50% in Paper I overall',
      subjects: [
        {
          subject: 'English',
          questions: 50,
          marks: 50,
          color: '#1D4ED8',
          bgColor: '#EFF6FF',
          topics: [
            { name: 'Grammar & Structure', details: 'Tenses, active/passive voice, direct/indirect speech, clauses' },
            { name: 'Comprehension', details: 'Unseen passages with analytical MCQs — Class 8 level' },
            { name: 'Vocabulary', details: 'Antonyms, synonyms, idioms, one-word substitution' },
            { name: 'Fill in the Blanks', details: 'Grammar and vocabulary-based MCQs' },
            { name: 'Error Correction', details: 'Find and fix grammatical errors in sentences' },
            { name: 'Para Jumbles', details: 'Rearrange jumbled sentences into a coherent paragraph' },
          ],
        },
        {
          subject: 'Hindi',
          questions: 20,
          marks: 20,
          color: '#B91C1C',
          bgColor: '#FEF2F2',
          topics: [
            { name: 'व्याकरण (Grammar)', details: 'संज्ञा, सर्वनाम, विशेषण, क्रिया, वचन, लिंग, कारक' },
            { name: 'अपठित गद्यांश', details: 'Unseen passages in Hindi with MCQ answers' },
            { name: 'मुहावरे और लोकोक्तियाँ', details: 'Common idioms and proverbs' },
            { name: 'पर्यायवाची/विलोम शब्द', details: 'Synonyms and antonyms in Hindi' },
            { name: 'वाक्य शुद्धि', details: 'Correct the incorrect Hindi sentences' },
          ],
        },
        {
          subject: 'Social Science',
          questions: 30,
          marks: 30,
          color: '#C2410C',
          bgColor: '#FFF7ED',
          topics: [
            { name: 'Modern Indian History', details: 'Revolt of 1857, Nationalist movement, Gandhi, Independence — Class 8 NCERT' },
            { name: 'World History', details: 'French Revolution, World Wars, United Nations' },
            { name: 'Indian Geography', details: 'Resources, land use, agriculture, industries, transport' },
            { name: 'Civics & Indian Polity', details: 'Parliament, Judiciary, Fundamental Rights, Directive Principles' },
            { name: 'Economics Basics', details: 'Agriculture, industries, poverty, unemployment — Class 8 economics' },
            { name: 'Defence & Security', details: 'Indian Armed Forces, border issues, strategic importance' },
          ],
        },
      ],
    },
    {
      paper: 'Paper II — 100 Marks',
      minQualifying: '50% in Paper II overall',
      subjects: [
        {
          subject: 'Mathematics',
          questions: 50,
          marks: 50,
          color: '#15803D',
          bgColor: '#F0FDF4',
          topics: [
            { name: 'Rational Numbers', details: 'Properties, operations, representation on number line' },
            { name: 'Linear Equations', details: 'One-variable equations, word problems, simple simultaneous equations' },
            { name: 'Algebraic Identities', details: 'Expansion, factorisation, standard identities (a+b)², (a-b)², (a²-b²)' },
            { name: 'Squares, Cubes & Roots', details: 'Perfect squares/cubes, finding square root by factorisation & long division' },
            { name: 'Comparing Quantities', details: 'Percent, profit/loss, simple interest, compound interest (basic)' },
            { name: 'Mensuration', details: 'Area of quadrilaterals, trapezium; surface area & volume of cube, cuboid, cylinder' },
            { name: 'Data Handling', details: 'Mean, median, mode; bar graphs, pie charts, histograms, probability basics' },
            { name: 'Exponents & Powers', details: 'Laws of exponents, scientific notation, negative exponents' },
            { name: 'Direct & Inverse Proportion', details: 'Word problems on direct/inverse variation' },
          ],
        },
        {
          subject: 'Science',
          questions: 50,
          marks: 50,
          color: '#0369A1',
          bgColor: '#F0F9FF',
          topics: [
            { name: 'Force & Pressure', details: 'Types of forces, pressure formula, atmospheric pressure, buoyancy, Archimedes principle' },
            { name: 'Sound', details: 'Vibration, loudness/pitch, noise vs music' },
            { name: 'Chemical Effects of Electric Current', details: 'Good/poor conductors, electrolysis, electroplating' },
            { name: 'Light', details: 'Reflection laws, real/virtual images, kaleidoscope' },
            { name: 'Coal & Petroleum', details: 'Formation, uses, fossil fuels, refining process' },
            { name: 'Combustion & Flame', details: 'Types of combustion, ignition temperature, fire extinguishers' },
            { name: 'Cell Structure', details: 'Cell organelles, plant vs animal cell, nucleus' },
            { name: 'Microorganisms', details: 'Types, uses, harmful effects, food preservation, antibiotics' },
            { name: 'Conservation of Plants & Animals', details: 'Deforestation, endangered species, biosphere reserves, national parks' },
            { name: 'Stars & Solar System', details: 'Sun, planets, moons, asteroids, comets, ISRO missions' },
            { name: 'Pollution', details: 'Causes, effects, prevention of air and water pollution' },
          ],
        },
      ],
    },
  ],
}