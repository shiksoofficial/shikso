// app/smartset-rimc/page.jsx
// RIMC — Rashtriya Indian Military College, Dehradun
// Static info page — Updates + Syllabus only. No coming soon sections.

import Link from "next/link";

export const metadata = {
  title: "RIMC Entrance Exam 2026 — Dates, Eligibility, Syllabus | Shikso",
  description:
    "Complete guide to RIMC 2026 entrance exam — Rashtriya Indian Military College, Dehradun. Exam dates, eligibility, English, Maths & GK syllabus, exam pattern, and preparation tips on Shikso.",
  keywords:
    "RIMC 2026, RIMC entrance exam, Rashtriya Indian Military College Dehradun, RIMC syllabus, RIMC eligibility, RIMC exam date",
};

// ── DATA ──────────────────────────────────────────────────────────────────────

const EXAM_INFO = {
  fullName: "Rashtriya Indian Military College Entrance Examination",
  shortName: "RIMC",
  location: "Garhi Cantt, Dehradun, Uttarakhand — 248003",
  conductedBy: "Ministry of Defence, Govt. of India",
  officialSite: "rimc.gov.in / rimc.edu.in",
  targetClass: "Admission to Class 8 — Boys & Girls aged 11½–13 years",
  examFrequency: "Twice a year — June (for January session) & December (for July session)",
  examMode: "Written exam (pen-paper) + Viva Voce + Medical",
  negativeMarking: "None",
  minQualifying: "50% in each subject (English, Maths, GK) separately",
  totalSeats: "~25 students per session — highly competitive",
  established: "1922 — one of India's oldest and most prestigious military schools",
};

const DATES_JUNE = [
  { event: "Application Form Available", detail: "Obtain from RIMC Dehradun via Speed Post or online payment", date: "February–March 2026", status: "upcoming" },
  { event: "Last Date to Apply", detail: "Submit to respective State Government (NOT to RIMC directly)", date: "April 2026", status: "upcoming" },
  { event: "Written Exam — June Session", detail: "English + Maths + GK (written, pen-paper)", date: "June 4, 2026", status: "upcoming" },
  { event: "Viva Voce (Interview)", detail: "Called for shortlisted candidates — 50 marks", date: "August–September 2026", status: "upcoming" },
  { event: "Medical Examination", detail: "At designated Army hospital — final stage", date: "After interview", status: "upcoming" },
  { event: "Merit List & Admission", detail: "State-wise merit list published", date: "October–November 2026", status: "upcoming" },
  { event: "Session Starts", detail: "January 2027 session", date: "January 2027", status: "upcoming" },
];

const DATES_DEC = [
  { event: "Application Form Available", detail: "Obtain from RIMC Dehradun via Speed Post or online payment", date: "August–September 2026", status: "upcoming" },
  { event: "Last Date to Apply", detail: "Submit to respective State Government", date: "October 2026", status: "upcoming" },
  { event: "Written Exam — December Session", detail: "English + Maths + GK (written, pen-paper)", date: "December 2026", status: "upcoming" },
  { event: "Viva Voce (Interview)", detail: "Called for shortlisted candidates — 50 marks", date: "February–March 2027", status: "upcoming" },
  { event: "Medical Examination", detail: "At designated Army hospital", date: "After interview", status: "upcoming" },
  { event: "Merit List & Admission", detail: "State-wise merit list", date: "April–May 2027", status: "upcoming" },
  { event: "Session Starts", detail: "July 2027 session", date: "July 2027", status: "upcoming" },
];

const STATUS_STYLES = {
  completed: { bg: "#dcfce7", color: "#15803d", dot: "#16a34a", label: "Completed" },
  upcoming:  { bg: "#fef3c7", color: "#b45309", dot: "#d97706", label: "Upcoming"  },
  tba:       { bg: "#f1f5f9", color: "#475569", dot: "#94a3b8", label: "Expected"  },
};

const ELIGIBILITY = [
  { label: "Gender", value: "Boys and Girls both eligible" },
  { label: "Age (Jan Session)", value: "Born between 02 Jan 2013 – 01 Jul 2014 (for Jan 2026 session)" },
  { label: "Age (Jul Session)", value: "Born between 02 Jul 2013 – 01 Jan 2015 (for Jul 2026 session)" },
  { label: "Age in simple terms", value: "Must be between 11½ and 13 years on the first day of the session" },
  { label: "Qualification", value: "Studying in Class 7 or must have passed Class 7 from any recognised school" },
  { label: "School Type", value: "Any recognised school — government or private" },
  { label: "Nationality", value: "Indian nationals only" },
  { label: "Medical", value: "Must be physically fit — medical exam at Army hospital (final stage only)" },
  { label: "State", value: "Applications submitted to own State Government. State-wise merit lists prepared." },
  { label: "Application to", value: "State Government (NOT directly to RIMC Dehradun)" },
];

const EXAM_PATTERN = [
  { subject: "Mathematics", marks: 200, type: "Written — descriptive + objective", medium: "Hindi or English", minScore: "100 (50%)", note: "Highest weightage — most important subject" },
  { subject: "English", marks: 125, type: "Written — descriptive + objective", medium: "English only", minScore: "62.5 (50%)", note: "Grammar, comprehension, essay, letter writing" },
  { subject: "General Knowledge", marks: 75, type: "Written — descriptive + objective", medium: "Hindi or English", minScore: "37.5 (50%)", note: "History, geography, science, current affairs, defence" },
  { subject: "Viva Voce (Interview)", marks: 50, type: "Oral — personality, confidence, awareness", medium: "Hindi or English", minScore: "—", note: "Only for candidates who clear the written exam" },
];

const ENGLISH_SYLLABUS = [
  { name: "Grammar — Parts of Speech", details: "Nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections" },
  { name: "Tenses", details: "All 12 tenses — present, past, future (simple, continuous, perfect, perfect continuous)" },
  { name: "Active & Passive Voice", details: "Converting active to passive and vice versa across all tenses" },
  { name: "Direct & Indirect Speech", details: "Narration changes — statements, questions, commands, exclamations" },
  { name: "Comprehension Passages", details: "Read an unseen passage and answer questions based on it" },
  { name: "Essay Writing", details: "Structured essay on topics related to nature, society, defence, school life" },
  { name: "Letter Writing", details: "Formal and informal letters — application, complaint, invitation" },
  { name: "Precis Writing", details: "Summarise a given passage in one-third of the original length" },
  { name: "Synonyms & Antonyms", details: "Commonly tested vocabulary pairs — Class 7-8 level" },
  { name: "Sentence Correction", details: "Identify and correct grammatical errors in sentences" },
  { name: "Fill in the Blanks", details: "Articles, prepositions, tenses, subject-verb agreement" },
  { name: "One-Word Substitution", details: "Replace a phrase with the correct single word" },
  { name: "Idioms & Phrases", details: "Meaning and usage of common English idioms" },
  { name: "Ordering of Words/Sentences", details: "Arrange jumbled words into meaningful sentences" },
  { name: "Spelling", details: "Identify correctly spelled words from options" },
];

const MATHS_SYLLABUS = [
  { name: "Number System", details: "Natural numbers, whole numbers, integers, rational numbers — operations and properties, LCM, HCF" },
  { name: "Fractions and Decimals", details: "Operations on fractions and decimals, comparison, conversion between them" },
  { name: "Percentage", details: "Finding percentage, percentage increase/decrease, comparison using percentage" },
  { name: "Profit and Loss", details: "Cost price, selling price, profit%, loss%, discount, marked price" },
  { name: "Simple Interest", details: "SI formula — finding principal, rate, time given other variables" },
  { name: "Ratio and Proportion", details: "Simplifying ratios, direct proportion, inverse proportion, unitary method" },
  { name: "Exponents and Powers", details: "Laws of exponents, scientific notation, standard form" },
  { name: "Algebraic Expressions", details: "Addition, subtraction, multiplication of expressions; standard identities" },
  { name: "Linear Equations", details: "Solving single-variable linear equations; word problems" },
  { name: "Lines and Angles", details: "Types of angles, pairs of angles, transversal and parallel lines" },
  { name: "Triangles", details: "Types, properties, congruence criteria (SAS, ASA, SSS, RHS)" },
  { name: "Quadrilaterals", details: "Types of quadrilaterals — parallelogram, rhombus, rectangle, square, trapezium — properties" },
  { name: "Circles", details: "Parts of a circle, chord, arc, sector, segment — basic properties" },
  { name: "Perimeter and Area", details: "Rectangle, square, triangle, parallelogram, circle — formulas and applications" },
  { name: "Surface Area and Volume", details: "Cube, cuboid — TSA, LSA, volume; cylinder basics" },
  { name: "Data Handling", details: "Bar graphs, pie charts, pictographs, histogram, mean, median, mode" },
  { name: "Mensuration", details: "Area of irregular figures, combination shapes" },
  { name: "Symmetry", details: "Lines of symmetry, rotational symmetry, reflection" },
  { name: "Visualising Solid Shapes", details: "2D and 3D shapes, nets, views of 3D objects" },
  { name: "Word Problems", details: "Mixed word problems applying arithmetic and basic algebra — Class 6, 7, 8 level" },
];

const GK_SYLLABUS = [
  { name: "Indian Defence Forces", details: "Indian Army, Navy, Air Force — ranks, structure, famous operations, chiefs, NDA, RIMC, Military schools" },
  { name: "Indian History — Ancient", details: "Indus Valley Civilisation, Vedic period, Maurya, Gupta empires, important rulers" },
  { name: "Indian History — Medieval", details: "Delhi Sultanate, Mughal Empire, Vijayanagara, Maratha Empire" },
  { name: "Indian History — Modern", details: "British rule, Freedom struggle, Gandhi, Nehru, Partition, Independence — August 15, 1947" },
  { name: "Indian Geography", details: "Rivers, mountains, states and capitals, Himalayas, Deccan Plateau, climate zones, national parks" },
  { name: "World Geography", details: "Continents, countries, capitals, major rivers and mountain ranges, oceans" },
  { name: "Indian Polity & Constitution", details: "Preamble, Fundamental Rights, Directive Principles, Parliament structure, President, PM, Judiciary" },
  { name: "General Science", details: "Basic physics (motion, light, electricity), chemistry (atoms, elements), biology (cells, plants, animals)" },
  { name: "Current Affairs", details: "National and international events of past 12 months — appointments, summits, schemes, discoveries" },
  { name: "Sports", details: "Olympics, Asian Games, Commonwealth Games — Indian medals; national sports events; famous Indian athletes" },
  { name: "Awards & Honours", details: "Bharat Ratna, Padma awards, Gallantry awards (PVC, MVC, AC), Nobel Prize winners (esp. Indian)" },
  { name: "Science & Technology", details: "ISRO missions, DRDO, important inventions, Nobel Prize science, famous scientists" },
  { name: "Books & Authors", details: "Famous Indian books and their authors; Booker Prize, Sahitya Akademi winners" },
  { name: "International Organisations", details: "UN, UNESCO, WHO, NATO, SAARC, G20, Commonwealth — headquarters, purpose, founding" },
  { name: "Countries, Capitals, Currencies", details: "Major world countries with their capitals and currencies" },
  { name: "Important Days & Events", details: "Republic Day, Independence Day, Defence Day, National holidays, Army Day, Teachers Day" },
  { name: "Environment & Ecology", details: "Climate change, global warming, endangered species, biosphere reserves, national parks" },
  { name: "Indian Culture", details: "Classical dances, folk arts, UNESCO heritage sites in India, famous temples, festivals" },
  { name: "Defence News & Achievements", details: "Recent inductions in Indian forces — new weapons, aircraft, warships, missile tests" },
];

const FAQS = [
  { q: "What is RIMC and why is it prestigious?", a: "RIMC (Rashtriya Indian Military College) in Dehradun was established in 1922. It is a Category 'A' institution under the Ministry of Defence. It provides a blend of quality public school education and military training to students from Class 8 to 12. RIMC is a direct feeder to the National Defence Academy (NDA) and has produced many chiefs of the Indian Armed Forces." },
  { q: "How many times is the RIMC exam held per year?", a: "Twice a year — June exam for January session admission, and December exam for July session admission. Students can attempt both in different years until the age limit is crossed." },
  { q: "Are girls eligible for RIMC?", a: "Yes. Both boys and girls are eligible for RIMC entrance exam. Girls have been eligible since recent years." },
  { q: "What is the age limit for RIMC?", a: "Candidates must be between 11½ and 13 years of age on the first day of the session (January 1 or July 1). For the January 2027 session, candidates must be born between July 2, 2013 and January 1, 2015." },
  { q: "What is the exam pattern for RIMC?", a: "The written exam has 3 papers: English (125 marks), Mathematics (200 marks), and General Knowledge (75 marks) — total 400 marks. Minimum 50% in each subject is required. Shortlisted candidates then face a Viva Voce (50 marks interview). Final selection = Written + Interview marks." },
  { q: "Where do I apply for RIMC?", a: "You do NOT apply to RIMC directly. Applications are submitted to your respective State Government. The prospectus-cum-application form must be obtained from RIMC Dehradun (via Speed Post or online payment at rimc.gov.in) and then submitted to your State Government." },
  { q: "What is the application fee for RIMC?", a: "₹600 for General category candidates; ₹555 for SC/ST candidates. Payment is made via Demand Draft in favour of 'THE COMMANDANT RIMC FUND' payable at HDFC Bank, Ballupur Chowk, Dehradun (Bank Code: 1399)." },
  { q: "What is the syllabus for RIMC exam?", a: "Mathematics and English are based on CBSE Class 6 and 7 curriculum with deeper understanding required. GK covers Indian history, geography, constitution, defence, current affairs, sports, and science. The exam has both descriptive (essay-type) and objective components — unlike most school entrance exams which are MCQ only." },
];

export default function RIMCPage() {
  return (
    <main>
      {/* Hero */}
      <section className="rimc-hero dm_sans">
        <div className="container">
          <p className="breadcrumb-text">
            <Link href="/">Home</Link> &rsaquo; RIMC SmartSet
          </p>
          <span className="hero-badge">🎖️ Military School — Class 8 Admission</span>
          <h1>
            RIMC — <span className="accent">Rashtriya Indian Military College</span>
            <br />
            Entrance Exam 2026
          </h1>
          <p className="hero-sub">
            Est. 1922 · Dehradun · Ministry of Defence. One of India&apos;s most prestigious
            military schools — feeder to NDA and Indian Armed Forces.
          </p>
          <div className="stat-row">
            {[
              { icon: "📅", value: "2×/Year", label: "Exam Frequency" },
              { icon: "📝", value: "400 Marks", label: "Written Exam" },
              { icon: "🎤", value: "50 Marks", label: "Viva Voce" },
              { icon: "🚫", value: "None", label: "Neg. Marking" },
              { icon: "🏆", value: "50%", label: "Min. Per Subject" },
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
                <h2>About RIMC</h2>
                <p>Key facts about the institution and exam</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-wrap">
                <table className="data-table">
                  <tbody>
                    {[
                      ["Full Name", EXAM_INFO.fullName],
                      ["Established", EXAM_INFO.established],
                      ["Location", EXAM_INFO.location],
                      ["Conducted By", EXAM_INFO.conductedBy],
                      ["Target", EXAM_INFO.targetClass],
                      ["Total Seats", EXAM_INFO.totalSeats],
                      ["Exam Frequency", EXAM_INFO.examFrequency],
                      ["Exam Mode", EXAM_INFO.examMode],
                      ["Negative Marking", EXAM_INFO.negativeMarking],
                      ["Min. Score Required", EXAM_INFO.minQualifying],
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

          {/* June Session Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>📅</span>
              <div>
                <h2>June 2026 Exam — January 2027 Session</h2>
                <p>For students seeking admission in January 2027</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 RIMC June 2026 Exam Schedule</span>
                <span className="updated-tag">Written Exam: June 4, 2026</span>
              </div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Details</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DATES_JUNE.map((d) => {
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

          {/* December Session Dates */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#fff3cd" }}>📅</span>
              <div>
                <h2>December 2026 Exam — July 2027 Session</h2>
                <p>For students seeking admission in July 2027</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📅 RIMC December 2026 Exam Schedule</span>
                <span className="updated-tag">December 2026 (Expected)</span>
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
                    {DATES_DEC.map((d) => {
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

          {/* Eligibility */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#dcfce7" }}>✅</span>
              <div>
                <h2>Eligibility Criteria</h2>
                <p>Who can apply for RIMC 2026</p>
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
                <h2>Exam Pattern</h2>
                <p>Written exam + Interview + Medical — 3 stages of selection</p>
              </div>
            </div>
            <div className="table-card">
              <div className="table-card-head">
                <span>📋 RIMC Exam Pattern — Written + Interview</span>
                <span className="updated-tag">Total: 450 marks</span>
              </div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject / Stage</th>
                      <th>Marks</th>
                      <th>Type</th>
                      <th>Medium</th>
                      <th>Min. Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EXAM_PATTERN.map((p, i) => (
                      <tr key={p.subject} style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                        <td className="td-bold">{p.subject}</td>
                        <td><span className="marks-pill">{p.marks}M</span></td>
                        <td className="td-muted">{p.type}</td>
                        <td className="td-muted">{p.medium}</td>
                        <td className="td-muted">{p.minScore}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="td-bold">TOTAL</td>
                      <td><span className="marks-pill" style={{ background: "#0a1628" }}>450M</span></td>
                      <td className="td-muted" colSpan={3}>Written (400M) + Interview (50M)</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="imp-note">
              <strong>⚠️ Key Points</strong>
              <p>
                • Minimum 50% marks required in each of English, Maths, and GK separately to qualify for interview.<br />
                • Exam is descriptive + objective (NOT purely MCQ like other school entrance exams).<br />
                • Maths and GK papers can be answered in Hindi or English; English paper is in English only.<br />
                • Final merit list is prepared state-wise — about 25 students per session across all states.<br />
                • Applications must be submitted to STATE GOVERNMENT — NOT directly to RIMC.
              </p>
            </div>

            {/* Selection Process */}
            <h3 className="sub-heading">Selection Process</h3>
            <div className="steps-list">
              {[
                { num: 1, step: "Apply to State Government — obtain form from RIMC, fill and submit to your state" },
                { num: 2, step: "Written Exam — English (125M) + Mathematics (200M) + GK (75M)" },
                { num: 3, step: "Viva Voce (Interview) — 50 marks — personality, confidence, general awareness" },
                { num: 4, step: "Medical Fitness Exam — Army hospital — final stage" },
                { num: 5, step: "State-wise Merit List — based on Written + Interview marks" },
              ].map((s) => (
                <div key={s.num} className="step-item">
                  <div className="step-num">{s.num}</div>
                  <div className="step-text">{s.step}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — English */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#EFF6FF" }}>📖</span>
              <div>
                <h2>Syllabus — English (125 Marks)</h2>
                <p>Based on Class 6 & 7 CBSE — includes descriptive components</p>
              </div>
            </div>
            <div className="topics-grid">
              {ENGLISH_SYLLABUS.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — Mathematics */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#F0FDF4" }}>➗</span>
              <div>
                <h2>Syllabus — Mathematics (200 Marks)</h2>
                <p>Based on Class 6, 7 & 8 CBSE — highest weightage in the exam</p>
              </div>
            </div>
            <div className="topics-grid">
              {MATHS_SYLLABUS.map((t) => (
                <div key={t.name} className="topic-card">
                  <div className="topic-name">{t.name}</div>
                  <div className="topic-detail">{t.details}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Syllabus — GK */}
          <section className="content-block">
            <div className="block-label">
              <span className="bl-icon" style={{ background: "#FFF7ED" }}>🌐</span>
              <div>
                <h2>Syllabus — General Knowledge (75 Marks)</h2>
                <p>History, geography, defence, current affairs, sports, science</p>
              </div>
            </div>
            <div className="topics-grid">
              {GK_SYLLABUS.map((t) => (
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
                <p>Common questions about RIMC entrance exam</p>
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
                { label: "🌐 RIMC Official Site", href: "https://rimc.gov.in", ext: true },
                { label: "🏫 RIMC Edu Site", href: "https://rimc.edu.in", ext: true },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="quick-link">
                  {l.label}<span>›</span>
                </a>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">📊 Exam at a Glance</div>
            <div className="widget-body">
              {[
                { k: "Mathematics", v: "200 marks" },
                { k: "English", v: "125 marks" },
                { k: "GK", v: "75 marks" },
                { k: "Total Written", v: "400 marks" },
                { k: "Interview", v: "50 marks" },
                { k: "Grand Total", v: "450 marks" },
                { k: "Min. Per Subject", v: "50%" },
                { k: "Neg. Marking", v: "None" },
                { k: "Exam Frequency", v: "Twice/year" },
              ].map((item) => (
                <div key={item.k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                  <span style={{ color: "#94a3b8", fontWeight: 600 }}>{item.k}</span>
                  <span style={{ fontWeight: 700, color: "#0a1628" }}>{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">💰 Application Fee</div>
            <div className="widget-body">
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginBottom: 2 }}>GENERAL</div>
                <div style={{ fontWeight: 800, fontSize: 22, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>₹600</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, marginBottom: 2 }}>SC / ST</div>
                <div style={{ fontWeight: 800, fontSize: 22, color: "#0a1628", fontFamily: "Nunito, sans-serif" }}>₹555</div>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 8 }}>DD in favour of "THE COMMANDANT RIMC FUND" — HDFC Bank, Dehradun</div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-head">📅 Exam Calendar</div>
            <div className="widget-body">
              {[
                { k: "June Exam", v: "For Jan session" },
                { k: "December Exam", v: "For Jul session" },
                { k: "Age at admission", v: "11½ – 13 years" },
                { k: "Class admitted", v: "Class 8" },
                { k: "Classes offered", v: "Class 8 to 12" },
              ].map((item) => (
                <div key={item.k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9", fontSize: 13 }}>
                  <span style={{ color: "#94a3b8", fontWeight: 600 }}>{item.k}</span>
                  <span style={{ fontWeight: 700, color: "#0a1628" }}>{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="warn-note">
            <strong>⚠️ Critical</strong>
            <p>Submit application to your STATE GOVERNMENT — NOT directly to RIMC Dehradun. Check rimc.gov.in for exact state-wise instructions.</p>
          </div>
        </aside>
      </div>

      <style>{`
        .rimc-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #1e4080 100%);
          padding: 52px 0 44px; position: relative; overflow: hidden;
        }
        .rimc-hero::before {
          content: ''; position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .breadcrumb-text { font-size: 13px; color: #64748b; margin-bottom: 16px; }
        .breadcrumb-text a { color: #94a3b8; text-decoration: none; }
        .hero-badge { display: inline-block; background: rgba(249,115,22,.18); border: 1px solid rgba(249,115,22,.35); color: #fdba74; padding: 4px 14px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 14px; }
        .rimc-hero h1 { font-size: clamp(22px, 4vw, 36px); font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 14px; font-family: Nunito, sans-serif; }
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
        .data-table tfoot tr { background: #fff7ed; border-top: 2px solid #fed7aa; }
        .data-table td { padding: 13px 16px; font-size: 13.5px; vertical-align: middle; }
        .td-bold { font-weight: 700; color: #0a1628; }
        .td-muted { color: #475569; }
        .td-nowrap { white-space: nowrap; }
        .status-pill { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 11.5px; font-weight: 700; white-space: nowrap; }
        .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .marks-pill { display: inline-block; background: #1a3a5c; color: #fff; border-radius: 20px; padding: 2px 12px; font-size: 12px; font-weight: 800; }

        .sub-heading { font-size: 15px; font-weight: 800; color: #0a1628; font-family: Nunito, sans-serif; margin: 20px 0 12px; }

        .steps-list { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
        .step-item { display: flex; align-items: flex-start; gap: 14px; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 16px 20px; }
        .step-num { min-width: 32px; height: 32px; border-radius: 50%; background: #0a1628; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; flex-shrink: 0; font-family: Nunito, sans-serif; }
        .step-text { font-size: 14px; font-weight: 600; color: #334155; padding-top: 5px; }

        .imp-note { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #f59e0b; border-radius: 10px; padding: 14px 16px; margin-top: 14px; font-size: 13.5px; color: #78350f; line-height: 1.7; }
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
        .warn-note { background: #fef2f2; border: 1px solid #fecaca; border-left: 4px solid #dc2626; border-radius: 10px; padding: 12px 14px; font-size: 12.5px; color: #7f1d1d; line-height: 1.6; }
        .warn-note strong { display: block; font-size: 12px; font-weight: 800; color: #991b1b; margin-bottom: 4px; }

        @media (max-width: 1024px) { .page-body { grid-template-columns: 1fr; } .side-col { position: static; } }
        @media (max-width: 640px) { .stat-row { gap: 8px; } }
      `}</style>
    </main>
  );
}