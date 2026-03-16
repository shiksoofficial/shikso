// app/nmms-scholarship-exam/page.jsx
// NMMS — National Means-cum-Merit Scholarship
// Static info page — Updates + Syllabus only. No coming soon sections.

import Link from "next/link";

export const metadata = {
  title: "NMMS Scholarship 2026 — Exam Dates, Eligibility, Syllabus | Shikso",
  description:
    "Complete guide to NMMS 2026 — National Means-cum-Merit Scholarship for Class 8 students. Exam dates, eligibility, MAT & SAT syllabus, exam pattern, and preparation tips on Shikso.",
  keywords:
    "NMMS 2026, NMMS scholarship, NMMS exam date, NMMS syllabus, NMMS eligibility, national means merit scholarship class 8",
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const EXAM_INFO = {
  fullName: "National Means-cum-Merit Scholarship",
  shortName: "NMMS",
  conductedBy: "State SCERTs / Ministry of Education, Govt. of India",
  officialSite: "scholarships.gov.in",
  targetClass: "Class 8 (studying in Govt / Govt-aided schools)",
  scholarshipAmount: "₹12,000 per year (₹1,000/month) for Class 9 to Class 12",
  totalScholarships: "1,00,000 scholarships awarded annually across India",
  examMode: "Offline (OMR-based MCQ)",
  examFrequency: "Once a year — state-wise (typically November–February)",
  negativeMarking: "None",
  minQualifying: "40% in MAT and 40% in SAT separately (35% for SC/ST)",
};

const DATES = [
  {
    event: "Application Form Opens",
    detail: "State-wise — check your state SCERT website",
    date: "August–September 2026",
    status: "upcoming",
  },
  {
    event: "Last Date to Apply",
    detail: "Submit via school principal",
    date: "September–October 2026",
    status: "upcoming",
  },
  {
    event: "Admit Card Release",
    detail: "Download from state SCERT portal",
    date: "October–November 2026",
    status: "upcoming",
  },
  {
    event: "NMMS Exam Date",
    detail: "State-wise — typically 2nd/3rd Sunday",
    date: "November 2026 – February 2027",
    status: "upcoming",
  },
  {
    event: "Answer Key Release",
    detail: "Published on state SCERT website",
    date: "Within 1 week of exam",
    status: "upcoming",
  },
  {
    event: "Result Declaration",
    detail: "State-wise merit list published",
    date: "February–April 2027",
    status: "upcoming",
  },
  {
    event: "Scholarship Disbursement",
    detail: "Via Direct Benefit Transfer (DBT)",
    date: "From Class 9 onwards",
    status: "upcoming",
  },
];

const STATUS_STYLES = {
  completed: {
    bg: "#dcfce7",
    color: "#15803d",
    dot: "#16a34a",
    label: "Completed",
  },
  upcoming: {
    bg: "#fef3c7",
    color: "#b45309",
    dot: "#d97706",
    label: "Upcoming",
  },
  tba: { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8", label: "Expected" },
};

const STATE_DATES = [
  { state: "Uttar Pradesh", date: "November 9, 2025 (conducted)" },
  { state: "Delhi", date: "December 7, 2025 (conducted)" },
  { state: "Tamil Nadu", date: "January 10, 2026 (conducted)" },
  { state: "Madhya Pradesh", date: "November 2026 (next cycle)" },
  { state: "Maharashtra", date: "November 2026 (next cycle)" },
  { state: "Rajasthan", date: "November–December 2026 (next cycle)" },
  { state: "Bihar", date: "November–December 2026 (next cycle)" },
  { state: "Karnataka", date: "November–December 2026 (next cycle)" },
];

const ELIGIBILITY = [
  { label: "Class", value: "Currently studying in Class 8" },
  {
    label: "School Type",
    value: "Government, Government-aided, or Local body schools only",
  },
  { label: "Previous Marks", value: "Minimum 55% in Class 7 (50% for SC/ST)" },
  {
    label: "Family Income",
    value: "Annual family income must not exceed ₹3,50,000",
  },
  { label: "Nationality", value: "Indian nationals only" },
  {
    label: "NOT Eligible",
    value:
      "Students in KVS, NVS, Sainik Schools, fully residential Govt schools",
  },
  { label: "Gender", value: "Boys and Girls both eligible" },
  {
    label: "State",
    value: "Must appear in the state where the school is located",
  },
];

const MAT_SYLLABUS = [
  {
    name: "Analogy",
    details:
      "Word, number, and figure analogies — identify the relationship and find the missing pair",
  },
  {
    name: "Classification (Odd One Out)",
    details:
      "Group objects/words by common property and identify the one that doesn't belong",
  },
  {
    name: "Numerical Series",
    details:
      "Find the next number in a sequence — arithmetic, geometric, and mixed patterns",
  },
  {
    name: "Pattern Perception",
    details:
      "Identify and complete visual patterns — similar to Navodaya MAT section",
  },
  {
    name: "Hidden Figures",
    details: "Identify a simple figure hidden within a complex figure",
  },
  {
    name: "Coding & Decoding",
    details: "Decode word or number codes based on given pattern",
  },
  {
    name: "Problem Solving",
    details:
      "Logical reasoning puzzles — blood relations, direction sense, ranking",
  },
  {
    name: "Perceptual Ability",
    details: "Mirror images, water images, paper folding, paper cutting",
  },
  {
    name: "Spatial Reasoning",
    details: "Mental rotation of figures, cube-based problems",
  },
  {
    name: "Letter Series",
    details:
      "Find the next letter or missing letter in alphabetical pattern sequences",
  },
  {
    name: "Venn Diagrams",
    details: "Identify relationships between groups using Venn diagrams",
  },
  {
    name: "Non-Verbal Reasoning",
    details:
      "Figure matrices, figure series completion — without any language dependency",
  },
];

const SAT_SCIENCE = [
  {
    name: "Food — Where Does It Come From?",
    details: "Plant parts, animal products, food components",
  },
  {
    name: "Components of Food",
    details: "Nutrients, deficiency diseases, balanced diet",
  },
  {
    name: "Fibre to Fabric",
    details: "Natural and synthetic fibres, their properties",
  },
  {
    name: "Sorting Materials into Groups",
    details: "Properties of materials: hardness, solubility, transparency",
  },
  {
    name: "Separation of Substances",
    details:
      "Methods: filtration, evaporation, distillation, magnetic separation",
  },
  {
    name: "Changes Around Us",
    details:
      "Reversible vs irreversible changes, physical and chemical changes",
  },
  {
    name: "Living Organisms and Their Surroundings",
    details: "Adaptation, habitat — aquatic, terrestrial, aerial",
  },
  {
    name: "Motion and Measurement of Distances",
    details: "Types of motion, units of measurement, standard units",
  },
  {
    name: "Light, Shadows and Reflections",
    details: "Transparent/opaque objects, shadows, reflection basics",
  },
  {
    name: "Electricity and Circuits",
    details: "Electric circuit, conductors and insulators, switches",
  },
  {
    name: "Heat",
    details: "Temperature, thermometer, conduction, convection, radiation",
  },
  {
    name: "Acids, Bases and Salts",
    details: "Properties of acids and bases, indicators, neutralisation",
  },
  {
    name: "Physical and Chemical Changes",
    details: "Rusting, burning, crystallisation — differences",
  },
  {
    name: "Weather, Climate and Adaptations",
    details: "Climate zones, animal adaptations to climate",
  },
  {
    name: "Winds, Storms and Cyclones",
    details: "Air pressure, cyclones, tornado, lightning",
  },
  {
    name: "Soil",
    details: "Soil types, soil profile, erosion, importance of soil",
  },
  {
    name: "Respiration in Organisms",
    details: "Types of respiration, breathing mechanism, aerobic vs anaerobic",
  },
  {
    name: "Transportation in Animals and Plants",
    details: "Blood, heart, transpiration, xylem and phloem",
  },
  {
    name: "Reproduction in Plants",
    details: "Vegetative, sexual and asexual reproduction in plants",
  },
  {
    name: "Motion and Time",
    details: "Speed, distance, time, graphs of motion",
  },
  {
    name: "Electric Current and Its Effects",
    details: "Heating effect, magnetic effect, fuse, MCB",
  },
  {
    name: "Light",
    details: "Reflection, plane mirror, concave, convex mirrors",
  },
  {
    name: "Water — A Precious Resource",
    details: "Water cycle, groundwater, water conservation",
  },
  {
    name: "Forests — Our Lifeline",
    details: "Importance of forests, deforestation, conservation",
  },
  {
    name: "Wastewater Story",
    details: "Sewage treatment, safe drinking water",
  },
];

const SAT_MATHS = [
  {
    name: "Rational Numbers",
    details: "Properties, operations, representation on number line",
  },
  {
    name: "Linear Equations in One Variable",
    details: "Solving equations, word problems, applications",
  },
  {
    name: "Understanding Quadrilaterals",
    details: "Types of quadrilaterals, properties, angle sum property",
  },
  {
    name: "Practical Geometry",
    details: "Construction of quadrilaterals, triangles",
  },
  {
    name: "Data Handling",
    details: "Bar graph, pie chart, probability basics, average",
  },
  {
    name: "Squares and Square Roots",
    details:
      "Perfect squares, finding square roots — prime factorisation and long division",
  },
  {
    name: "Cubes and Cube Roots",
    details: "Perfect cubes, finding cube roots by prime factorisation",
  },
  {
    name: "Comparing Quantities",
    details: "Percentage, profit and loss, simple and compound interest, VAT",
  },
  {
    name: "Algebraic Expressions and Identities",
    details:
      "Addition, subtraction, multiplication of expressions; standard identities",
  },
  {
    name: "Mensuration",
    details:
      "Area of trapezium, rhombus, polygons; surface area and volume of cuboid, cube, cylinder",
  },
  {
    name: "Exponents and Powers",
    details: "Laws of exponents, scientific notation",
  },
  {
    name: "Direct and Inverse Proportions",
    details: "Word problems — direct and inverse variation",
  },
  {
    name: "Factorisation",
    details: "Common factor method, regrouping, using identities",
  },
  {
    name: "Introduction to Graphs",
    details:
      "Bar graphs, pie charts, line graphs, reading and interpreting data",
  },
  {
    name: "Playing with Numbers",
    details:
      "Divisibility rules, puzzles with numbers, general form of numbers",
  },
];

const SAT_SOCIAL_SCIENCE = [
  {
    name: "How, When and Where",
    details: "History: how it is studied, official records, British rule",
  },
  {
    name: "From Trade to Territory",
    details: "East India Company, battles of Plassey and Buxar",
  },
  {
    name: "Ruling the Countryside",
    details: "Revenue settlements, indigo revolt, peasant movements",
  },
  {
    name: "Tribals, Dikus and the Vision of a Golden Age",
    details: "Tribal communities, Birsa Munda movement",
  },
  {
    name: "When People Rebel",
    details: "1857 revolt — causes, course, impact",
  },
  {
    name: "Colonialism and the City",
    details: "Growth of Bombay, Delhi, Calcutta during colonial rule",
  },
  {
    name: "Weavers, Iron Smelters and Factory Owners",
    details: "Indian textile industry and impact of British rule",
  },
  {
    name: "Civilising the Native, Educating the Nation",
    details: "British education policy, Macaulay's minute",
  },
  {
    name: "Women, Caste and Reform",
    details: "Social reform movements, role of women",
  },
  {
    name: "The Changing World of Visual Arts",
    details: "Indian art, Company painting, Raja Ravi Varma",
  },
  {
    name: "The Making of the National Movement",
    details: "Congress, partition of Bengal, freedom movement",
  },
  {
    name: "India After Independence",
    details: "Constitution, challenges, reorganisation of states",
  },
  {
    name: "Resources — Land, Soil, Water, Forests",
    details: "Types, distribution, conservation of natural resources",
  },
  {
    name: "Agriculture",
    details: "Types of farming, crops, cropping patterns, green revolution",
  },
  {
    name: "Industries",
    details: "Types of industries, cotton and iron & steel industry",
  },
  {
    name: "Human Resources",
    details: "Population distribution, density, growth",
  },
  {
    name: "The Indian Constitution",
    details: "Key features, preamble, fundamental rights",
  },
  {
    name: "Understanding Secularism",
    details: "Meaning, importance in Indian context",
  },
  {
    name: "Why Do We Need a Parliament?",
    details: "Role of Parliament, Lok Sabha, Rajya Sabha",
  },
  {
    name: "Judiciary",
    details: "Court system, role of judiciary, independence of judiciary",
  },
  {
    name: "Social Justice and the Marginalised",
    details: "Scheduled castes, tribes, rights protection",
  },
  {
    name: "Economic Presence of the Government",
    details: "Public sector, market, government role in economy",
  },
];

const FAQS = [
  {
    q: "What is NMMS scholarship?",
    a: "NMMS stands for National Means-cum-Merit Scholarship. It is a centrally sponsored scholarship scheme by the Ministry of Education, Govt. of India, to award ₹12,000 per year (₹1,000/month) to meritorious students from economically weaker backgrounds studying in government schools from Class 9 to Class 12.",
  },
  {
    q: "Who is eligible for NMMS 2026?",
    a: "Students currently studying in Class 8 in a government, government-aided, or local body school, with at least 55% marks (50% for SC/ST) in Class 7, and whose annual family income does not exceed ₹3,50,000 are eligible.",
  },
  {
    q: "Are students in KVS or Navodaya eligible for NMMS?",
    a: "No. Students studying in KVS, NVS, Sainik Schools, and fully residential government schools are NOT eligible for NMMS scholarship.",
  },
  {
    q: "What is the exam pattern for NMMS?",
    a: "NMMS has two papers: MAT (Mental Ability Test) — 90 questions, 90 marks, 90 minutes; and SAT (Scholastic Aptitude Test) — 90 questions, 90 marks, 90 minutes. Both are OMR-based MCQs. No negative marking.",
  },
  {
    q: "What is the minimum qualifying score?",
    a: "Candidates must score at least 40% in both MAT and SAT separately (35% for SC/ST) to qualify. Both papers must be cleared independently.",
  },
  {
    q: "When is the NMMS exam held?",
    a: "NMMS exam dates vary by state. Most states conduct it between November and February. UP typically holds it in November, Delhi in December, Tamil Nadu in January. Check your state SCERT website for exact dates.",
  },
  {
    q: "How many scholarships are given under NMMS?",
    a: "1,00,000 scholarships are awarded nationally every year — distributed state-wise based on enrollment. Each state gets an allocation proportional to its Class 7-8 enrollment in government schools.",
  },
  {
    q: "Does the NMMS scholarship continue automatically?",
    a: "No. Students must pass each class with at least 55% marks and continue studying to receive the scholarship each year. There is no separate exam after Class 8 but continuation criteria must be met.",
  },
];

export default function NMMSPage() {
  return (
    <main>
      {/* Hero */}
      <section className="nmms-hero dm_sans">
        <div className="container">
          <p className="breadcrumb-text">
            <Link href="/">Home</Link> &rsaquo; NMMS SmartSet
          </p>
          <span className="hero-badge">🎓 Scholarship Exam — Class 8</span>
          <h1>
            NMMS — <span className="accent">National Means-cum-Merit</span>
            <br />
            Scholarship Exam 2026-27
          </h1>
          <p className="hero-sub">
            ₹12,000/year scholarship for meritorious students from economically
            weaker backgrounds. 1 lakh scholarships awarded annually across
            India.
          </p>
          <div className="stat-row">
            {[
              { icon: "🏆", value: "1 Lakh", label: "Scholarships/Year" },
              { icon: "💰", value: "₹12,000", label: "Per Year" },
              { icon: "📝", value: "180 Qs", label: "Total Questions" },
              { icon: "🚫", value: "None", label: "Neg. Marking" },
              { icon: "🎯", value: "40%", label: "Min. Qualifying" },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <span>{s.icon}</span>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-body container dm_sans">
        <div className="main-col">
          {/* Exam Overview */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dbeafe" }}>
                ℹ️
              </span>
              <div>
                <h2>About NMMS</h2>
                <p>Everything you need to know about the scholarship</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-wrap">
                <table className="data-table">
                  <tbody>
                    {[
                      ["Full Name", EXAM_INFO.fullName],
                      ["Conducted By", EXAM_INFO.conductedBy],
                      ["Target Students", EXAM_INFO.targetClass],
                      ["Scholarship Amount", EXAM_INFO.scholarshipAmount],
                      ["Total Scholarships", EXAM_INFO.totalScholarships],
                      ["Exam Mode", EXAM_INFO.examMode],
                      ["Exam Frequency", EXAM_INFO.examFrequency],
                      ["Negative Marking", EXAM_INFO.negativeMarking],
                      ["Min. Qualifying Score", EXAM_INFO.minQualifying],
                      ["Official Site", EXAM_INFO.officialSite],
                    ].map(([k, v], i) => (
                      <tr
                        key={k}
                        style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}
                      >
                        <td className="td-bold">{k}</td>
                        <td className="td-muted">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Important Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fff3cd" }}>
                📅
              </span>
              <div>
                <h2>Important Dates — NMMS 2026-27</h2>
                <p>
                  Tentative schedule for next cycle — check your state SCERT for
                  exact dates
                </p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 NMMS 2026-27 — Tentative Schedule</span>
                <span className="updated-tag">State-wise — dates vary</span>
              </div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Details</th>
                      <th>Tentative Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DATES.map((d, i) => {
                      const st = STATUS_STYLES[d.status];
                      return (
                        <tr key={d.event}>
                          <td className="td-bold">{d.event}</td>
                          <td className="td-muted">{d.detail}</td>
                          <td className="td-bold td-nowrap">{d.date}</td>
                          <td>
                            <span
                              className="status-pill"
                              style={{ background: st.bg, color: st.color }}
                            >
                              <span
                                className="dot"
                                style={{ background: st.dot }}
                              />
                              {st.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="source-note">
                ⚠️ Dates are state-specific. Always check your state&apos;s
                official SCERT website for confirmed dates.
              </div>
            </div>

            {/* State-wise dates */}
            <h3 className="sub-heading">
              State-wise Exam Dates (Reference — Previous Cycle)
            </h3>
            <div className="state-grid">
              {STATE_DATES.map((s) => (
                <div key={s.state} className="state-card">
                  <div className="state-name">{s.state}</div>
                  <div className="state-date">{s.date}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>
                ✅
              </span>
              <div>
                <h2>Eligibility Criteria</h2>
                <p>Who can apply for NMMS 2026</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-wrap">
                <table className="data-table">
                  <tbody>
                    {ELIGIBILITY.map(({ label, value }, i) => (
                      <tr
                        key={label}
                        style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}
                      >
                        <td className="td-bold" style={{ width: "35%" }}>
                          {label}
                        </td>
                        <td className="td-muted">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Exam Pattern */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dbeafe" }}>
                📋
              </span>
              <div>
                <h2>Exam Pattern — MAT & SAT</h2>
                <p>Two papers — both must be cleared separately</p>
              </div>
            </div>
            <div className="pattern-grid">
              {[
                {
                  paper: "MAT — Mental Ability Test",
                  questions: 90,
                  marks: 90,
                  duration: "90 minutes",
                  desc: "Tests reasoning, logical thinking, and pattern recognition. No language or academic knowledge required.",
                  color: "#1D4ED8",
                  bg: "#EFF6FF",
                },
                {
                  paper: "SAT — Scholastic Aptitude Test",
                  questions: 90,
                  marks: 90,
                  duration: "90 minutes",
                  desc: "Science (35 Qs) + Social Science (35 Qs) + Mathematics (20 Qs). Based on Class 7 & 8 NCERT syllabus.",
                  color: "#15803D",
                  bg: "#F0FDF4",
                },
              ].map((p) => (
                <div
                  key={p.paper}
                  className="pattern-card"
                  style={{ borderTop: `4px solid ${p.color}` }}
                >
                  <h3
                    style={{
                      color: p.color,
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 800,
                      marginBottom: 12,
                    }}
                  >
                    {p.paper}
                  </h3>
                  <div className="pattern-stats">
                    <div>
                      <span className="ps-val">{p.questions}</span>
                      <span className="ps-lbl">Questions</span>
                    </div>
                    <div>
                      <span className="ps-val">{p.marks}</span>
                      <span className="ps-lbl">Marks</span>
                    </div>
                    <div>
                      <span className="ps-val">{p.duration}</span>
                      <span className="ps-lbl">Duration</span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#475569",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="imp-note">
              <strong>⚠️ Key Points</strong>
              <p>
                • Minimum 40% in both MAT and SAT separately (35% for SC/ST).
                <br />
                • No negative marking — attempt all questions.
                <br />
                • Stage I score does NOT carry forward — it only qualifies you
                for the scholarship.
                <br />• Scholarship is awarded on Stage I (state level) merit
                only.
              </p>
            </div>
          </section>

          {/* SYLLABUS — MAT */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#EFF6FF" }}>
                📚
              </span>
              <div>
                <h2>Syllabus — MAT (Mental Ability Test)</h2>
                <p>
                  90 questions · 90 marks · Based on reasoning ability — no
                  academic knowledge needed
                </p>
              </div>
            </div>
            <div className="topics-grid">
              {MAT_SYLLABUS.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SYLLABUS — SAT Science */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#F0FDF4" }}>
                🔬
              </span>
              <div>
                <h2>Syllabus — SAT: Science</h2>
                <p>35 questions · Based on Class 6, 7 & 8 NCERT Science</p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_SCIENCE.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SYLLABUS — SAT Maths */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FFF7ED" }}>
                ➗
              </span>
              <div>
                <h2>Syllabus — SAT: Mathematics</h2>
                <p>20 questions · Based on Class 7 & 8 NCERT Mathematics</p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_MATHS.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SYLLABUS — SAT Social Science */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FDF4FF" }}>
                🌍
              </span>
              <div>
                <h2>Syllabus — SAT: Social Science</h2>
                <p>
                  35 questions · History + Geography + Civics + Economics (Class
                  6-8 NCERT)
                </p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_SOCIAL_SCIENCE.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#f0fdf4" }}>
                ❓
              </span>
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about NMMS scholarship</p>
              </div>
            </div>
            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-q">
                    {faq.q}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="side-col">
          <div className="widget">
            <div className="widget-head">🔗 Official Links</div>
            <div className="widget-body">
              {[
                {
                  label: "🌐 Scholarships Portal",
                  href: "https://scholarships.gov.in",
                  ext: true,
                },
                {
                  label: "📋 NCERT NMMS Info",
                  href: "https://ncert.nic.in",
                  ext: true,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link"
                >
                  {l.label}
                  <span>›</span>
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">💰 Scholarship Details</div>
            <div className="widget-body">
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  AMOUNT PER YEAR
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 22,
                    color: "#0a1628",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  ₹12,000
                </div>
                <div style={{ fontSize: 12, color: "#475569" }}>
                  ₹1,000 per month
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  DURATION
                </div>
                <div style={{ fontWeight: 700, color: "#0a1628" }}>
                  Class 9 to Class 12
                </div>
                <div style={{ fontSize: 12, color: "#475569" }}>
                  4 years (subject to continuation)
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#94a3b8",
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  PAYMENT MODE
                </div>
                <div style={{ fontSize: 13, color: "#475569" }}>
                  Direct Benefit Transfer (DBT) to bank account
                </div>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">📊 Exam at a Glance</div>
            <div className="widget-body">
              {[
                { k: "MAT Questions", v: "90 Qs · 90 Marks" },
                { k: "SAT Questions", v: "90 Qs · 90 Marks" },
                { k: "Total", v: "180 Qs · 180 Marks" },
                { k: "Duration each", v: "90 minutes" },
                { k: "Negative Marking", v: "None" },
                { k: "Min. Score (Gen)", v: "40% in each paper" },
                { k: "Min. Score (SC/ST)", v: "35% in each paper" },
              ].map((item) => (
                <div
                  key={item.k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #f1f5f9",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#94a3b8", fontWeight: 600 }}>
                    {item.k}
                  </span>
                  <span style={{ fontWeight: 700, color: "#0a1628" }}>
                    {item.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="warn-note">
            <strong>⚠️ Important</strong>
            <p>
              Exam dates vary by state. Always check your state&apos;s SCERT
              official website for confirmed dates and notifications.
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .nmms-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px; position: relative; overflow: hidden;
        }
        .nmms-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb-text { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb-text a { color: #94a3b8; text-decoration: none; }
        .hero-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px; }
        .nmms-hero h1 { font-size: clamp(24px, 4vw, 38px); font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 14px; font-family: Nunito, sans-serif; }
        .accent { color: #F97316; }
        .hero-sub { font-size: 15px; color: #94a3b8; max-width: 560px; line-height: 1.7; margin-bottom: 24px; }
        .stat-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .stat-box { display: flex; flex-direction: column; align-items: center; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 10px; padding: 12px 18px; gap: 2px; }
        .stat-box span { font-size: 18px; }
        .stat-box strong { font-size: 17px; font-weight: 800; color: #fff; line-height: 1; font-family: Nunito, sans-serif; }
        .stat-box small { font-size: 10px; color: #64748b; text-align: center; }

        .page-body { display: grid; grid-template-columns: 1fr 296px; gap: 28px; padding: 36px 24px 80px; align-items: start; }
        .side-col { position: sticky; top: 60px; }
        .content-block { margin-bottom: 36px; }
        .block-label { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .bl-icon { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .block-label h2 { font-size: 18px; font-weight: 800; color: #0a1628; margin-bottom: 2px; font-family: Nunito, sans-serif; }
        .block-label p { font-size: 12.5px; color: #94a3b8; }

        .table-card { background: #fff; border-radius: 14px; border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,.07); overflow: hidden; }
        .table-card-head { background: linear-gradient(90deg, #0a1628 0%, #1a3a5c 100%); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; font-size: 14px; font-weight: 700; color: #fff; }
        .updated-tag { font-size: 11px; color: #94a3b8; background: rgba(255,255,255,.08); padding: 3px 10px; border-radius: 20px; }
        .table-wrap { overflow-x: auto; }
        .data-table { width: 100%; border-collapse: collapse; }
        .data-table thead tr { background: #f8fafc; border-bottom: 2px solid #e2e8f0; }
        .data-table th { padding: 11px 16px; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: #94a3b8; text-align: left; }
        .data-table tbody tr { border-bottom: 1px solid #f1f5f9; }
        .data-table tbody tr:last-child { border-bottom: none; }
        .data-table tbody tr:hover { background: #fafafa; }
        .data-table td { padding: 13px 16px; font-size: 13.5px; vertical-align: middle; }
        .td-bold { font-weight: 700; color: #0a1628; }
        .td-muted { color: #475569; }
        .td-nowrap { white-space: nowrap; }
        .status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 11.5px; font-weight: 700; white-space: nowrap; }
        .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .source-note { padding: 11px 16px; background: #eff6ff; border-top: 1px solid #bfdbfe; font-size: 12.5px; color: #1d4ed8; }

        .sub-heading { font-size: 15px; font-weight: 800; color: #0a1628; font-family: Nunito, sans-serif; margin: 20px 0 12px; }
        .state-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
        .state-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px 14px; }
        .state-name { font-weight: 700; font-size: 13px; color: #0a1628; margin-bottom: 4px; }
        .state-date { font-size: 12px; color: #475569; }

        .pattern-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .pattern-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
        .pattern-stats { display: flex; gap: 16px; margin-bottom: 12px; }
        .ps-val { display: block; font-size: 18px; font-weight: 800; color: #0a1628; font-family: Nunito, sans-serif; }
        .ps-lbl { display: block; font-size: 11px; color: #94a3b8; font-weight: 600; }

        .imp-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 14px 16px; font-size: 13.5px; color: #78350f; line-height: 1.7; }
        .imp-note strong { display: block; font-size: 13px; font-weight: 800; color: #92400e; margin-bottom: 6px; }

        .topics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
        .topic-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px 18px; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .topic-name { font-weight: 800; font-size: 13.5px; color: #0a1628; margin-bottom: 6px; font-family: Nunito, sans-serif; }
        .topic-detail { font-size: 12.5px; color: #475569; line-height: 1.55; }

        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.05); }
        .faq-q { padding: 15px 18px; font-size: 14px; font-weight: 700; color: #0a1628; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: Nunito, sans-serif; }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-icon { font-size: 18px; font-weight: 700; color: #94a3b8; flex-shrink: 0; }
        details[open] .faq-icon { color: #F97316; transform: rotate(45deg); display: inline-block; }
        .faq-a { padding: 0 18px 16px; font-size: 13.5px; color: #475569; line-height: 1.7; border-top: 1px solid #f1f5f9; }

        .widget { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,.06); overflow: hidden; margin-bottom: 16px; }
        .widget-head { background: #0a1628; color: #fff; padding: 12px 16px; font-size: 13.5px; font-weight: 700; font-family: Nunito, sans-serif; }
        .widget-body { padding: 14px 16px; }
        .quick-link { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #0a1628; text-decoration: none; transition: color .15s; }
        .quick-link:last-child { border-bottom: none; }
        .quick-link:hover { color: #F97316; }
        .quick-link span { color: #94a3b8; }
        .warn-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 12px 14px; font-size: 12.5px; color: #78350f; line-height: 1.6; }
        .warn-note strong { display: block; font-size: 12px; font-weight: 800; color: #92400e; margin-bottom: 4px; }

        @media (max-width: 1024px) { .page-body { grid-template-columns: 1fr; } .side-col { position: static; } }
        @media (max-width: 640px) { .pattern-grid { grid-template-columns: 1fr; } .stat-row { gap: 8px; } }
      `}</style>
    </main>
  );
}
