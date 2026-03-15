// app/smartset-ntse/page.jsx
// NTSE — National Talent Search Examination
// Static info page — Updates + Syllabus only. No coming soon sections.

import Link from "next/link";

export const metadata = {
  title: "NTSE 2026 — Exam Dates, Eligibility, Syllabus Stage 1 & 2 | Shikso",
  description:
    "Complete guide to NTSE 2026 — National Talent Search Examination for Class 10 students. Stage 1 & Stage 2 exam dates, eligibility, MAT & SAT syllabus, pattern, and preparation tips on Shikso.",
  keywords:
    "NTSE 2026, NTSE exam date, NTSE syllabus, NTSE eligibility, national talent search examination class 10, NTSE stage 1 stage 2",
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const EXAM_INFO = {
  fullName: "National Talent Search Examination",
  shortName: "NTSE",
  conductedBy: "NCERT (National Council of Educational Research and Training)",
  officialSite: "ncert.nic.in",
  targetClass: "Class 10 (studying in any recognised school in India)",
  scholarshipAmount: "₹1,250/month for Class 11-12 · ₹2,000/month for UG & PG · As per UGC norms for PhD",
  totalScholarships: "2,000 scholarships awarded annually at national level",
  examMode: "Offline — pen and paper (OMR-based MCQ)",
  examStages: "Two stages: Stage 1 (State Level) → Stage 2 (National Level by NCERT)",
  negativeMarking: "None in either stage",
  minQualifying: "Separate qualifying marks in both MAT and SAT (state-prescribed cut-offs)",
};

const STAGE1_DATES = [
  { event: "Notification Released", detail: "By state SCERTs / State Liaison Officers", date: "August 2026 (Expected)", status: "upcoming" },
  { event: "Application Form Opens", detail: "Through school or state SCERT portal", date: "August–September 2026", status: "upcoming" },
  { event: "Last Date to Apply", detail: "Submit through school principal", date: "September–October 2026", status: "upcoming" },
  { event: "Admit Card — Stage 1", detail: "1–2 weeks before exam date", date: "October–November 2026", status: "upcoming" },
  { event: "Stage 1 Exam", detail: "State-level — MAT + SAT", date: "November 2026 (Expected)", status: "upcoming" },
  { event: "Stage 1 Result", detail: "State-wise merit list for Stage 2 qualification", date: "January–February 2027", status: "upcoming" },
];

const STAGE2_DATES = [
  { event: "Stage 2 Registration", detail: "By NCERT — for Stage 1 qualifiers", date: "February–March 2027", status: "upcoming" },
  { event: "Admit Card — Stage 2", detail: "Available on ncert.nic.in", date: "April 2027", status: "upcoming" },
  { event: "Stage 2 Exam", detail: "National level — conducted by NCERT", date: "May 2027 (2nd Sunday)", status: "upcoming" },
  { event: "Stage 2 Result", detail: "Final merit list — national scholarship", date: "July–August 2027", status: "upcoming" },
  { event: "Scholarship Disbursement", detail: "Via DBT to selected candidates", date: "From Class 11 onwards", status: "upcoming" },
];

const STATUS_STYLES = {
  completed: { bg: "#dcfce7", color: "#15803d", dot: "#16a34a", label: "Completed" },
  upcoming:  { bg: "#fef3c7", color: "#b45309", dot: "#d97706", label: "Upcoming"  },
  tba:       { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8", label: "Expected"  },
};

const ELIGIBILITY = [
  { label: "Class", value: "Currently studying in Class 10" },
  { label: "School Type", value: "Any recognised school — government or private" },
  { label: "Nationality", value: "Indian nationals (studying in India or abroad)" },
  { label: "Age Limit", value: "Below 18 years as on July 1, 2026" },
  { label: "Previous Marks", value: "Minimum 60% in Class 9 (relaxation for SC/ST as per state norms)" },
  { label: "Open School (ODL)", value: "Eligible if below 18 years, unemployed, and appearing for Class 10 first time" },
  { label: "Overseas Students", value: "Indian students studying abroad are EXEMPT from Stage 1 — directly appear for Stage 2" },
  { label: "Gender", value: "Boys and Girls both eligible" },
  { label: "State Restriction", value: "No domicile restriction — can appear from any state" },
];

const MAT_SYLLABUS = [
  { name: "Analogy", details: "Identify relationships between word pairs, number pairs, or figure pairs" },
  { name: "Series (Number & Letter)", details: "Find the next term in number or letter sequences — arithmetic, geometric, mixed" },
  { name: "Classification (Odd One Out)", details: "Group items by a common property and identify the exception" },
  { name: "Coding & Decoding", details: "Decode coded words or numbers based on given patterns" },
  { name: "Pattern Perception", details: "Identify and complete visual matrix patterns" },
  { name: "Hidden Figures", details: "Identify a given simple figure hidden within a complex one" },
  { name: "Blood Relations", details: "Decode family tree relationships through logical deduction" },
  { name: "Direction Sense", details: "Solve problems based on direction and distance" },
  { name: "Ranking & Arrangement", details: "Arrange people or objects by given conditions" },
  { name: "Venn Diagrams", details: "Identify relationships between sets using Venn diagram logic" },
  { name: "Mathematical Operations", details: "Perform coded mathematical operations on numbers" },
  { name: "Paper Folding & Cutting", details: "Identify the result of folding and cutting paper" },
  { name: "Mirror & Water Images", details: "Identify mirror images or water reflections of given figures" },
  { name: "Cube & Dice Problems", details: "Problems based on faces of a cube, unfolding cubes" },
  { name: "Calendar & Clock", details: "Find days/dates using calendar logic; clock angle problems" },
];

const SAT_SCIENCE_PHYSICS = [
  { name: "Motion", details: "Distance, displacement, speed, velocity, acceleration, equations of motion, graphs" },
  { name: "Force & Laws of Motion", details: "Newton's three laws, inertia, momentum, action-reaction" },
  { name: "Gravitation", details: "Universal law of gravitation, g, free fall, mass vs weight, Kepler's laws" },
  { name: "Work, Energy & Power", details: "Work done, kinetic & potential energy, conservation of energy, power" },
  { name: "Sound", details: "Wave properties, speed of sound, echo, SONAR, human ear" },
  { name: "Light — Reflection & Refraction", details: "Laws of reflection, mirror formula, lenses, refractive index, total internal reflection" },
  { name: "The Human Eye", details: "Structure of eye, defects of vision, correction using lenses, dispersion of light" },
  { name: "Electricity", details: "Electric charge, Ohm's law, resistance, combination of resistors, power" },
  { name: "Magnetic Effects of Current", details: "Magnetic field, Fleming's rules, electric motor, electromagnetic induction, generator" },
  { name: "Sources of Energy", details: "Conventional vs non-conventional sources, fossil fuels, nuclear energy, solar energy" },
];

const SAT_SCIENCE_CHEMISTRY = [
  { name: "Matter — Its Nature & Behaviour", details: "States of matter, interconversion, evaporation, Brownian motion" },
  { name: "Is Matter Around Us Pure?", details: "Mixtures, solutions, colloids, suspensions, separation methods" },
  { name: "Atoms & Molecules", details: "Dalton's theory, symbols, formulae, molecular mass, mole concept" },
  { name: "Structure of the Atom", details: "Thomson, Rutherford, Bohr models; electrons, protons, neutrons; valence electrons" },
  { name: "Chemical Reactions & Equations", details: "Types of reactions: combination, decomposition, displacement, redox" },
  { name: "Acids, Bases & Salts", details: "Properties, pH scale, common salts, baking soda, washing soda, bleaching powder" },
  { name: "Metals & Non-Metals", details: "Physical and chemical properties, reactivity series, corrosion, alloys" },
  { name: "Carbon & Its Compounds", details: "Covalent bonding, organic compounds, saturated vs unsaturated, functional groups, soaps & detergents" },
  { name: "Periodic Classification", details: "Dobereiner's triads, Newlands, Mendeleev, Modern periodic table, trends" },
];

const SAT_SCIENCE_BIOLOGY = [
  { name: "The Fundamental Unit of Life", details: "Cell structure, cell organelles, plant vs animal cell, cell division" },
  { name: "Tissues", details: "Plant tissues (meristematic, permanent); animal tissues (epithelial, connective, muscular, nervous)" },
  { name: "Life Processes", details: "Nutrition, respiration, transportation, excretion in plants and animals" },
  { name: "Control & Coordination", details: "Nervous system, reflex arc, brain, endocrine glands, hormones in plants and animals" },
  { name: "How Do Organisms Reproduce?", details: "Asexual and sexual reproduction; reproductive health; STDs; contraception" },
  { name: "Heredity & Evolution", details: "Mendel's laws, DNA, variation, natural selection, Darwin's theory" },
  { name: "Our Environment", details: "Ecosystem, food chains and webs, ozone depletion, waste management" },
  { name: "Management of Natural Resources", details: "Conservation of forests, water, coal, petroleum; sustainable development" },
];

const SAT_MATHS = [
  { name: "Number Systems", details: "Real numbers — irrational numbers, Euclid's division lemma, fundamental theorem of arithmetic" },
  { name: "Polynomials", details: "Zeroes of polynomial, relationship between zeroes and coefficients, division algorithm" },
  { name: "Pair of Linear Equations in Two Variables", details: "Graphical and algebraic methods, cross-multiplication, word problems" },
  { name: "Quadratic Equations", details: "Solution by factorisation and quadratic formula, nature of roots, word problems" },
  { name: "Arithmetic Progressions (AP)", details: "General term, sum of n terms, applications" },
  { name: "Triangles", details: "Similarity criteria, Pythagoras theorem, Basic Proportionality theorem" },
  { name: "Coordinate Geometry", details: "Distance formula, section formula, area of triangle, midpoint" },
  { name: "Introduction to Trigonometry", details: "Trigonometric ratios, identities, complementary angles" },
  { name: "Applications of Trigonometry", details: "Heights and distances — angle of elevation and depression" },
  { name: "Circles", details: "Tangent properties, angle subtended, chord properties" },
  { name: "Constructions", details: "Division of line segment, tangents to a circle" },
  { name: "Areas Related to Circles", details: "Area of circle, sector, segment; combination problems" },
  { name: "Surface Areas and Volumes", details: "Sphere, cylinder, cone, frustum — combination and conversion" },
  { name: "Statistics", details: "Mean, median, mode for grouped data; cumulative frequency" },
  { name: "Probability", details: "Classical definition, simple problems on probability" },
];

const SAT_SOCIAL_HISTORY = [
  { name: "The Rise of Nationalism in Europe", details: "French Revolution, Romanticism, unification of Germany and Italy" },
  { name: "Nationalism in India", details: "Non-Cooperation Movement, Civil Disobedience, Quit India, Gandhi" },
  { name: "The Making of a Global World", details: "Silk routes, trade, colonialism, Great Depression, post-war recovery" },
  { name: "The Age of Industrialisation", details: "Proto-industrialisation, factory system, labour in India and Britain" },
  { name: "Print Culture and the Modern World", details: "Gutenberg, print revolution, nationalism and print in India" },
];

const SAT_SOCIAL_GEO = [
  { name: "Resources and Development", details: "Types of resources, resource planning, soil erosion and conservation" },
  { name: "Forest and Wildlife Resources", details: "Biodiversity, types of forests, conservation, protected areas" },
  { name: "Water Resources", details: "Sources, scarcity, multipurpose river projects, rainwater harvesting" },
  { name: "Agriculture", details: "Types of farming, major crops, food security" },
  { name: "Minerals and Energy Resources", details: "Types, distribution, non-conventional energy" },
  { name: "Manufacturing Industries", details: "Location, types, textiles, iron and steel, chemical industries" },
  { name: "Lifelines of National Economy", details: "Transport — road, rail, waterway, airways; communication; trade" },
];

const SAT_SOCIAL_POLITY = [
  { name: "Power Sharing", details: "Forms of power sharing, Belgium vs Sri Lanka models" },
  { name: "Federalism", details: "Features of Indian federalism, decentralisation, local self-government" },
  { name: "Democracy and Diversity", details: "Social divisions, politics of social divisions" },
  { name: "Gender, Religion and Caste", details: "Gender and politics, communalism, caste and politics" },
  { name: "Popular Struggles and Movements", details: "Nepal democracy, Bolivia water wars, role of pressure groups" },
  { name: "Political Parties", details: "Functions, types, national parties, challenges" },
  { name: "Outcomes of Democracy", details: "Quality of democracy, accountability, economic outcomes" },
  { name: "Challenges to Democracy", details: "Deepening democracy, political reform" },
];

const SAT_SOCIAL_ECONOMICS = [
  { name: "Development", details: "Different goals of development, national development, HDI" },
  { name: "Sectors of the Indian Economy", details: "Primary, secondary, tertiary sectors; organised vs unorganised" },
  { name: "Money and Credit", details: "Forms of money, credit, banking system, SHG" },
  { name: "Globalisation and the Indian Economy", details: "MNCs, trade liberalisation, WTO, impact of globalisation" },
  { name: "Consumer Rights", details: "Consumer rights, RTI, consumer protection act, consumer courts" },
];

const FAQS = [
  { q: "What is NTSE and who should appear for it?", a: "NTSE (National Talent Search Examination) is India's most prestigious scholarship exam conducted by NCERT for Class 10 students. It identifies talented students and awards 2,000 scholarships for higher studies. Any student studying in Class 10 from any recognised school in India can appear for it." },
  { q: "What is the difference between Stage 1 and Stage 2?", a: "Stage 1 is conducted at the state/UT level by respective SCERTs in November. Students who qualify Stage 1 appear for Stage 2 conducted by NCERT in May. Only Stage 2 scores determine the final scholarship. Stage 1 scores are NOT counted for the scholarship — they only qualify you for Stage 2." },
  { q: "What is the exam pattern for NTSE?", a: "Both Stage 1 and Stage 2 have two papers: MAT (100 questions, 100 marks, 2 hours) and SAT (100 questions, 100 marks, 2 hours). SAT includes Science (40 Qs), Mathematics (20 Qs), and Social Science (40 Qs). No negative marking in either stage." },
  { q: "Are private school students eligible for NTSE?", a: "Yes. NTSE is open to students from ALL recognised schools — government, private, CBSE, ICSE, or state board. There is no restriction on school type." },
  { q: "How much is the NTSE scholarship amount?", a: "₹1,250/month for Class 11 and 12; ₹2,000/month for undergraduate and postgraduate students; as per UGC norms for PhD students. The scholarship continues throughout higher education if continuation conditions are met." },
  { q: "Can Indian students studying abroad appear for NTSE?", a: "Yes. Indian students studying abroad are EXEMPT from Stage 1 and can directly appear for Stage 2. They must be below 18 years, have 60% in Class 9, and appear for the exam in India. They must also send their Class 9 marksheet to NCERT before December 31 of the previous year." },
  { q: "Is there negative marking in NTSE?", a: "No. There is no negative marking in NTSE — neither in Stage 1 nor Stage 2. Attempt every question." },
  { q: "What is the NTSE syllabus based on?", a: "NTSE syllabus is based on Classes 9 and 10 NCERT curriculum. MAT tests reasoning and logical ability (no specific syllabus). SAT covers Physics, Chemistry, Biology, Mathematics, and Social Science (History, Geography, Civics, Economics) from NCERT Class 9-10 textbooks." },
];

export default function NTSEPage() {
  return (
    <main>
      {/* Hero */}
      <section className="ntse-hero dm_sans">
        <div className="container">
          <p className="breadcrumb-text">
            <Link href="/">Home</Link> &rsaquo; NTSE SmartSet
          </p>
          <span className="hero-badge">🌟 Prestigious Scholarship — Class 10</span>
          <h1>
            NTSE — <span className="accent">National Talent Search</span>
            <br />
            Examination 2026-27
          </h1>
          <p className="hero-sub">
            India&apos;s most prestigious scholarship exam conducted by NCERT. 2,000 scholarships
            awarded annually through a two-stage process for Class 10 students.
          </p>
          <div className="stat-row">
            {[
              { icon: "🏆", value: "2,000", label: "Scholarships/Year" },
              { icon: "🎯", value: "2 Stages", label: "State + National" },
              { icon: "📝", value: "200 Qs", label: "Per Stage" },
              { icon: "🚫", value: "None", label: "Neg. Marking" },
              { icon: "🏫", value: "Any School", label: "Govt or Private" },
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

          {/* About */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dbeafe" }}>ℹ️</span>
              <div>
                <h2>About NTSE</h2>
                <p>Key facts about the examination</p>
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
                      ["Exam Stages", EXAM_INFO.examStages],
                      ["Negative Marking", EXAM_INFO.negativeMarking],
                      ["Min. Qualifying", EXAM_INFO.minQualifying],
                      ["Official Site", EXAM_INFO.officialSite],
                    ].map(([k, v], i) => (
                      <tr key={k} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td className="td-bold">{k}</td>
                        <td className="td-muted">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Stage 1 Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fff3cd" }}>📅</span>
              <div>
                <h2>Stage 1 Dates — State Level (2026-27)</h2>
                <p>Conducted by state SCERTs — dates vary by state</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 NTSE Stage 1 — Tentative Schedule</span>
                <span className="updated-tag">November 2026 (Expected)</span>
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
                    {STAGE1_DATES.map((d) => {
                      const st = STATUS_STYLES[d.status];
                      return (
                        <tr key={d.event}>
                          <td className="td-bold">{d.event}</td>
                          <td className="td-muted">{d.detail}</td>
                          <td className="td-bold td-nowrap">{d.date}</td>
                          <td>
                            <span className="status-pill" style={{ background: st.bg, color: st.color }}>
                              <span className="dot" style={{ background: st.dot }} />
                              {st.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Stage 2 Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>🏆</span>
              <div>
                <h2>Stage 2 Dates — National Level (2027)</h2>
                <p>Conducted by NCERT — only for Stage 1 qualifiers</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>🏆 NTSE Stage 2 — Tentative Schedule</span>
                <span className="updated-tag">May 2027 (Expected)</span>
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
                    {STAGE2_DATES.map((d) => {
                      const st = STATUS_STYLES[d.status];
                      return (
                        <tr key={d.event}>
                          <td className="td-bold">{d.event}</td>
                          <td className="td-muted">{d.detail}</td>
                          <td className="td-bold td-nowrap">{d.date}</td>
                          <td>
                            <span className="status-pill" style={{ background: st.bg, color: st.color }}>
                              <span className="dot" style={{ background: st.dot }} />
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
                ℹ️ Stage 1 scores are NOT used for scholarship. Only Stage 2 determines the final merit list.
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>✅</span>
              <div>
                <h2>Eligibility Criteria</h2>
                <p>Who can appear for NTSE 2026</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-wrap">
                <table className="data-table">
                  <tbody>
                    {ELIGIBILITY.map(({ label, value }, i) => (
                      <tr key={label} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td className="td-bold" style={{ width: "35%" }}>{label}</td>
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
              <span className="bl-icon" style={{ background: "#dbeafe" }}>📋</span>
              <div>
                <h2>Exam Pattern — Both Stages</h2>
                <p>Same pattern for Stage 1 and Stage 2</p>
              </div>
            </div>
            <div className="pattern-grid">
              {[
                {
                  paper: "Paper 1 — MAT",
                  full: "Mental Ability Test",
                  questions: 100,
                  marks: 100,
                  duration: "2 hours",
                  desc: "Tests reasoning, logical thinking, and analytical ability. No specific syllabus — based on reasoning patterns.",
                  color: "#1D4ED8",
                },
                {
                  paper: "Paper 2 — SAT",
                  full: "Scholastic Aptitude Test",
                  questions: 100,
                  marks: 100,
                  duration: "2 hours",
                  desc: "Science: 40 Qs · Social Science: 40 Qs · Mathematics: 20 Qs. Based on NCERT Class 9 & 10 curriculum.",
                  color: "#15803D",
                },
              ].map((p) => (
                <div key={p.paper} className="pattern-card" style={{ borderTop: `4px solid ${p.color}` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: p.color, marginBottom: 4, letterSpacing: "0.06em" }}>{p.full}</div>
                  <h3 style={{ color: "#0a1628", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 12 }}>{p.paper}</h3>
                  <div className="pattern-stats">
                    <div><span className="ps-val">{p.questions}</span><span className="ps-lbl">Questions</span></div>
                    <div><span className="ps-val">{p.marks}</span><span className="ps-lbl">Marks</span></div>
                    <div><span className="ps-val">{p.duration}</span><span className="ps-lbl">Duration</span></div>
                  </div>
                  <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="imp-note">
              <strong>⚠️ Key Points</strong>
              <p>
                • No negative marking in Stage 1 or Stage 2.<br />
                • Must qualify separately in both MAT and SAT (state-prescribed cut-offs).<br />
                • Stage 1 scores are NOT counted for final scholarship — only Stage 2 matters.<br />
                • Total time per stage: 4 hours (MAT + SAT, both papers in one day).
              </p>
            </div>
          </section>

          {/* Syllabus — MAT */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#EFF6FF" }}>🧠</span>
              <div>
                <h2>Syllabus — MAT (Mental Ability Test)</h2>
                <p>100 questions · 100 marks · No specific syllabus — reasoning based</p>
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

          {/* Syllabus — SAT Physics */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#EFF6FF" }}>⚡</span>
              <div>
                <h2>Syllabus — SAT: Physics</h2>
                <p>Based on NCERT Class 9 & 10 Physics</p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_SCIENCE_PHYSICS.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — SAT Chemistry */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FFF7ED" }}>🧪</span>
              <div>
                <h2>Syllabus — SAT: Chemistry</h2>
                <p>Based on NCERT Class 9 & 10 Chemistry</p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_SCIENCE_CHEMISTRY.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — SAT Biology */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#F0FDF4" }}>🌿</span>
              <div>
                <h2>Syllabus — SAT: Biology</h2>
                <p>Based on NCERT Class 9 & 10 Biology</p>
              </div>
            </div>
            <div className="topics-grid">
              {SAT_SCIENCE_BIOLOGY.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — SAT Maths */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FEF2F2" }}>➗</span>
              <div>
                <h2>Syllabus — SAT: Mathematics</h2>
                <p>20 questions · Based on NCERT Class 9 & 10 Mathematics</p>
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

          {/* Syllabus — SAT Social Science */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FDF4FF" }}>🌍</span>
              <div>
                <h2>Syllabus — SAT: Social Science</h2>
                <p>40 questions · History + Geography + Civics + Economics (NCERT Class 9-10)</p>
              </div>
            </div>
            <h3 className="sub-heading">History</h3>
            <div className="topics-grid" style={{ marginBottom: 20 }}>
              {SAT_SOCIAL_HISTORY.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
            <h3 className="sub-heading">Geography</h3>
            <div className="topics-grid" style={{ marginBottom: 20 }}>
              {SAT_SOCIAL_GEO.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
            <h3 className="sub-heading">Civics (Political Science)</h3>
            <div className="topics-grid" style={{ marginBottom: 20 }}>
              {SAT_SOCIAL_POLITY.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
            <h3 className="sub-heading">Economics</h3>
            <div className="topics-grid">
              {SAT_SOCIAL_ECONOMICS.map((t) => (
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
              <span className="bl-icon" style={{ background: "#f0fdf4" }}>❓</span>
              <div>
                <h2>Frequently Asked Questions</h2>
                <p>Common questions about NTSE 2026</p>
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
                { label: "🌐 NCERT Official Site", href: "https://ncert.nic.in", ext: true },
                { label: "📋 NTSE Notifications", href: "https://ncert.nic.in", ext: true },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="quick-link">
                  {l.label}<span>›</span>
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">💰 Scholarship Amount</div>
            <div className="widget-body">
              {[
                { stage: "Class 11 & 12", amount: "₹1,250/month" },
                { stage: "UG & PG", amount: "₹2,000/month" },
                { stage: "PhD", amount: "As per UGC norms" },
              ].map((s) => (
                <div key={s.stage} style={{ paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700 }}>{s.stage}</div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>{s.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">📊 Exam at a Glance</div>
            <div className="widget-body">
              {[
                { k: "MAT", v: "100 Qs · 100 Marks · 2 hrs" },
                { k: "SAT", v: "100 Qs · 100 Marks · 2 hrs" },
                { k: "Science (SAT)", v: "40 Questions" },
                { k: "Social Science (SAT)", v: "40 Questions" },
                { k: "Mathematics (SAT)", v: "20 Questions" },
                { k: "Neg. Marking", v: "None" },
                { k: "Stages", v: "Stage 1 (State) + Stage 2 (NCERT)" },
              ].map((item) => (
                <div key={item.k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                  <span style={{ color: "#94a3b8", fontWeight: 600 }}>{item.k}</span>
                  <span style={{ fontWeight: 700, color: "#0a1628", textAlign: "right" }}>{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">📅 Key Timelines</div>
            <div className="widget-body">
              {[
                { k: "Stage 1 Exam", v: "November 2026" },
                { k: "Stage 1 Result", v: "Jan–Feb 2027" },
                { k: "Stage 2 Exam", v: "May 2027" },
                { k: "Stage 2 Result", v: "July–Aug 2027" },
              ].map((item) => (
                <div key={item.k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                  <span style={{ color: "#94a3b8", fontWeight: 600 }}>{item.k}</span>
                  <span style={{ fontWeight: 700, color: "#0a1628" }}>{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="warn-note">
            <strong>⚠️ Remember</strong>
            <p>Stage 1 scores are NOT counted for scholarship. Only Stage 2 performance determines the final merit list.</p>
          </div>
        </aside>
      </div>

      <style>{`
        .ntse-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px; position: relative; overflow: hidden;
        }
        .ntse-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb-text { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb-text a { color: #94a3b8; text-decoration: none; }
        .hero-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px; }
        .ntse-hero h1 { font-size: clamp(24px, 4vw, 38px); font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 14px; font-family: Nunito, sans-serif; }
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