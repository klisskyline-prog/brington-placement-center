import type { PlacementLevel, TestSection } from "../types";
import type { PlacementQuestion } from "../types";

export type SatSectionKey = "rw" | "math";
export type SatTrack = "routing" | "lower" | "upper";

export type SatPlacementQuestion = PlacementQuestion & {
  stage: "Stage 1" | "Stage 2";
  track: SatTrack;
  satSection: SatSectionKey;
  quizCode: "S1_RW" | "S1_M" | "S2L_RW" | "S2L_M" | "S2U_RW" | "S2U_M";
  domain: string;
  subskill: string;
  difficulty: "E" | "M" | "H" | string;
};

export const satSections: TestSection[] = [
  { id: "sat_stage1_rw", title: "Stage 1 — Reading & Writing", points: 10, description: "Routing section for SAT Reading & Writing." },
  { id: "sat_stage1_math", title: "Stage 1 — Math", points: 10, description: "Routing section for SAT Math." },
  { id: "sat_stage2_rw", title: "Stage 2 — Reading & Writing", points: 10, description: "Adaptive second-stage RW section: Lower or Upper based on Stage 1." },
  { id: "sat_stage2_math", title: "Stage 2 — Math", points: 10, description: "Adaptive second-stage Math section: Lower or Upper based on Stage 1." },
];

export const satPlacementLevels: PlacementLevel[] = [
  { label: "L0 SAT Bridge", shortLabel: "L0", range: "0–3", description: "The student needs SAT Bridge support before entering the main SAT pathway.", recommendation: "Start with SAT Bridge to build academic English, grammar, math foundation, and error-log habits.", admissionsNote: "Recommended: SAT Bridge support track with advisor monitoring." },
  { label: "L1 SAT Foundation", shortLabel: "L1", range: "4–6", description: "The student is ready for foundation-level SAT skill building.", recommendation: "Start with SAT Foundation and build accuracy in core RW and Math skills.", admissionsNote: "Recommended: SAT Foundation with weekly progress checks." },
  { label: "L2 SAT Pre-Core", shortLabel: "L2", range: "7–9", description: "The student has basic readiness and can begin SAT strategy with support.", recommendation: "Start with SAT Pre-Core to strengthen inference, evidence, grammar, algebra, and data skills.", admissionsNote: "Recommended: SAT Pre-Core with mixed practice and error-log review." },
  { label: "L3 SAT Core", shortLabel: "L3", range: "10–15 / lower or 6–9 / upper", description: "The student is ready for the main SAT Core pathway.", recommendation: "Start with SAT Core, covering the main RW and Math domains with systematic practice.", admissionsNote: "Recommended: SAT Core with weekly quiz and advisor review." },
  { label: "L4 SAT Target", shortLabel: "L4", range: "10–13", description: "The student has solid readiness and should target higher accuracy under timing.", recommendation: "Start with SAT Target, focusing on harder questions, trap analysis, and module timing.", admissionsNote: "Recommended: SAT Target with timed sets and simulation practice." },
  { label: "L5 SAT Advanced", shortLabel: "L5", range: "14–16", description: "The student shows strong readiness and can work on advanced SAT optimization.", recommendation: "Start with SAT Advanced, focusing on hard items, pacing, and weakness review.", admissionsNote: "Recommended: SAT Advanced with simulation and detailed error analysis." },
  { label: "L6 SAT Elite Bootcamp", shortLabel: "L6", range: "17–20", description: "The student is ready for elite-level SAT bootcamp work.", recommendation: "Start with SAT Elite Bootcamp, focusing on full mock analysis and test-day readiness.", admissionsNote: "Recommended: SAT Elite Bootcamp with mock analysis and final checkpoint planning." },
];

export const satLevelDuration = {
  "L0 SAT Bridge": { duration: "30 days", moodleHours: 40, dailyStudy: "1–1.5h/day" },
  "L1 SAT Foundation": { duration: "40 days", moodleHours: 60, dailyStudy: "1.5h/day" },
  "L2 SAT Pre-Core": { duration: "40 days", moodleHours: 70, dailyStudy: "1.5–2h/day" },
  "L3 SAT Core": { duration: "50 days", moodleHours: 100, dailyStudy: "2h/day" },
  "L4 SAT Target": { duration: "45 days", moodleHours: 90, dailyStudy: "2h/day" },
  "L5 SAT Advanced": { duration: "40 days", moodleHours: 90, dailyStudy: "2–2.5h/day" },
  "L6 SAT Elite Bootcamp": { duration: "25 days", moodleHours: 70, dailyStudy: "2.5–3h/day" },
} as const;

export const satCommentBank = {
  "L0 SAT Bridge": { strength: "The student has started becoming familiar with SAT-style questions and can grow with step-by-step support.", growth: "Build academic English reading, basic grammar, and math-in-English foundations before full SAT practice.", encouragement: "This is a normal starting point. The key is to build the right foundation instead of rushing into difficult practice." },
  "L1 SAT Foundation": { strength: "The student can handle some foundation-level items and is beginning to understand SAT question patterns.", growth: "Strengthen main idea, vocabulary, grammar boundaries, linear equations, percentages, and rates.", encouragement: "The student is building the base. With consistent study, progress should become clear within a few weeks." },
  "L2 SAT Pre-Core": { strength: "The student has basic readiness and can answer some medium-level questions.", growth: "Reduce errors in inference, evidence, transitions, systems, data, and light timing work.", encouragement: "The student is ready for more strategic SAT learning. The goal is stable accuracy before speed." },
  "L3 SAT Core": { strength: "The student has a fairly balanced SAT foundation and can study by domain and skill.", growth: "Work on mixed practice, answer traps, timing control, and repeated error correction.", encouragement: "This is a strong level for building score momentum. Regular error review can lead to visible growth." },
  "L4 SAT Target": { strength: "The student has solid readiness and can handle many medium and some hard questions.", growth: "Focus on trap analysis, hard items, rhetoric, nonlinear/geometry skills, and module timing.", encouragement: "The student has a good base. The next step is deeper accuracy and better time management." },
  "L5 SAT Advanced": { strength: "The student shows strong ability and is suitable for an advanced SAT pathway.", growth: "Optimize small errors, hard-level questions, pacing, and module strategy.", encouragement: "The student has high-score potential. From here, every small error is worth careful analysis." },
  "L6 SAT Elite Bootcamp": { strength: "The student shows very strong readiness and can enter intensive bootcamp/mock-test preparation.", growth: "Maintain consistency, full mock readiness, final weakness review, and test-day control.", encouragement: "The student has a very strong base. The goal is not only learning more, but performing consistently under pressure." },
} as const;

export const satStage1RwQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S1_RW_Q1",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "A city library began lending tools — drills, ladders, sewing machines — alongside books.\nWithin a year, residents who could not afford such items for occasional use borrowed them\nregularly, and staff reported that many first-time visitors later returned to borrow books too.\n\nWhich choice best states the main idea?",
    "questionType": "choice",
    "options": [
      "The library stopped lending books to focus on tools.",
      "Lending practical tools drew new users to the library and broadened its role.",
      "Most residents already owned the tools the library offered.",
      "Tool lending is more popular than book lending in all libraries."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Information & Ideas",
    "subskill": "Central Ideas",
    "difficulty": "E"
  },
  {
    "id": "sat_S1_RW_Q2",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "A researcher recorded minutes spent reading for pleasure each day.\n\n| Student | Minutes |\n|---|---:|\n| Anh | 15 |\n| Bao | 40 |\n| Chi | 25 |\n| Dung | 10 |\n\nWhich statement is best supported by the table?",
    "questionType": "choice",
    "options": [
      "Bao read more than twice as long as Anh.",
      "Chi read the least.",
      "Dung read longer than Anh.",
      "Every student read at least 20 minutes."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Information & Ideas",
    "subskill": "Evidence: Quantitative",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_RW_Q3",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "Some plants release chemical signals when insects begin feeding on their leaves. Nearby\nuntouched plants of the same species often begin producing defensive compounds shortly afterward.\nResearchers have found no physical contact between the plants in these cases.\n\nWhich inference is best supported?",
    "questionType": "choice",
    "options": [
      "Plants can signal a threat through means other than physical contact.",
      "Insects entirely avoid plants that produce defensive compounds.",
      "Defensive compounds are harmful to the plants that make them.",
      "Untouched plants produce more compounds than damaged ones."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Information & Ideas",
    "subskill": "Inference",
    "difficulty": "H"
  },
  {
    "id": "sat_S1_RW_Q4",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "The committee's report was praised for its candor; it acknowledged the program's failures\nas openly as its successes.\n\nAs used in the text, \"candor\" most nearly means:",
    "questionType": "choice",
    "options": [
      "brevity",
      "honesty",
      "caution",
      "complexity"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Craft & Structure",
    "subskill": "Words in Context",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_RW_Q5",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "The article first describes how rising temperatures have shortened the growing season for\na common wheat variety. It then introduces a newly developed strain that matures more quickly,\nletting farmers harvest before the hottest weeks arrive.\n\nWhat is the main purpose of the second part of the article?",
    "questionType": "choice",
    "options": [
      "To present a development that responds to the problem described first",
      "To argue that wheat farming should be abandoned",
      "To question whether temperatures are truly rising",
      "To compare wheat with unrelated crops"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Craft & Structure",
    "subskill": "Text Structure & Purpose",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_RW_Q6",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "Text 1: Advocates of remote work emphasize autonomy: employees who control their own schedules\nreport higher satisfaction and often greater productivity.\nText 2: Autonomy matters, but its benefits depend on structure. Without shared deadlines and\nregular check-ins, the same freedom that motivates some workers leaves others isolated and behind.\n\nHow would the author of Text 2 most likely characterize the view in Text 1?",
    "questionType": "choice",
    "options": [
      "As entirely mistaken about employee satisfaction",
      "As correct but incomplete, since autonomy's benefits depend on supporting structure",
      "As proof that remote work should be eliminated",
      "As evidence that deadlines reduce productivity"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Craft & Structure",
    "subskill": "Cross-Text Connections",
    "difficulty": "H"
  },
  {
    "id": "sat_S1_RW_Q7",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "The new filtration system removed nearly all visible particles from the water. ______,\nlaboratory tests showed that several dissolved contaminants remained.\n\nWhich choice completes the text with the most logical transition?",
    "questionType": "choice",
    "options": [
      "Therefore,",
      "For example,",
      "However,",
      "Similarly,"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Expression of Ideas",
    "subskill": "Transitions",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_RW_Q8",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "A student wants to emphasize a practical advantage of a new bridge's design for the city.\nNotes:\n- The new bridge uses a modular design.\n- Modular sections were built off-site.\n- Off-site construction reduced road closures during installation.\n- Shorter closures lowered disruption to daily traffic.\n\nWhich choice best uses the notes to accomplish the goal?",
    "questionType": "choice",
    "options": [
      "The new bridge, admired for its appearance, spans a wide river near the city center.",
      "Because its modular sections were built off-site, the new bridge required shorter road closures, reducing disruption to the city's daily traffic.",
      "Modular designs, which involve building sections separately, are used in many modern structures.",
      "The bridge has several sections, and each section is part of the overall design."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Expression of Ideas",
    "subskill": "Rhetorical Synthesis",
    "difficulty": "H"
  },
  {
    "id": "sat_S1_RW_Q9",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "The students finished their experiment ______ they recorded the results in a shared\nspreadsheet.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "experiment they",
      "experiment, and they",
      "experiment, they",
      "experiment; and they"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Standard English",
    "subskill": "Boundaries",
    "difficulty": "E"
  },
  {
    "id": "sat_S1_RW_Q10",
    "sectionId": "sat_stage1_rw",
    "sectionTitle": "Stage 1 — Reading & Writing",
    "prompt": "The collection of rare manuscripts ______ kept in a climate-controlled room to prevent\ndamage.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "are",
      "is",
      "were",
      "have been"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "rw",
    "quizCode": "S1_RW",
    "domain": "Standard English",
    "subskill": "Form, Structure & Sense",
    "difficulty": "M"
  }
];
export const satStage1MathQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S1_M_Q11",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "Solve for x: 5x − 4 = 26",
    "questionType": "choice",
    "options": [
      "5",
      "6",
      "10",
      "30"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Algebra",
    "subskill": "Linear equation",
    "difficulty": "E"
  },
  {
    "id": "sat_S1_M_Q12",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "For the system below, what is the value of x?\nx + y = 7\n2x − y = 8",
    "questionType": "choice",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Algebra",
    "subskill": "Systems",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_M_Q13",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "The equation x² − 5x + 6 = 0 has two solutions. What is the **greater** solution?",
    "questionType": "text",
    "correctTextAnswers": [
      "3"
    ],
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Advanced Math",
    "subskill": "Quadratic",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_M_Q14",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "A 200 mg sample decays so that **20% of it remains** after each day. Which expression\ngives the amount, in mg, remaining after d days?",
    "questionType": "choice",
    "options": [
      "200(0.2)^d",
      "200(0.8)^d",
      "200 − 0.2d",
      "200(1.2)^d"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Advanced Math",
    "subskill": "Exponential",
    "difficulty": "H"
  },
  {
    "id": "sat_S1_M_Q15",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "A shirt priced at $40 is marked up by 15%. What is the new price?",
    "questionType": "choice",
    "options": [
      "$6",
      "$34",
      "$46",
      "$55"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "PSDA",
    "subskill": "Percentages",
    "difficulty": "E"
  },
  {
    "id": "sat_S1_M_Q16",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "Monthly unit sales were:\n\n| Month | Units |\n|---|---:|\n| Jan | 120 |\n| Feb | 150 |\n| Mar | 135 |\n| Apr | 180 |\n\nBetween which two consecutive months was the **increase** in units the greatest?",
    "questionType": "choice",
    "options": [
      "Jan to Feb",
      "Feb to Mar",
      "Mar to Apr",
      "The increase was equal in every interval"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "PSDA",
    "subskill": "Data interpretation",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_M_Q17",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "A drawer contains 4 red, 6 blue, and 5 green pens. If one pen is chosen at random, what\nis the probability that it is **not** blue?",
    "questionType": "choice",
    "options": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "PSDA",
    "subskill": "Probability",
    "difficulty": "M"
  },
  {
    "id": "sat_S1_M_Q18",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "In a triangle, two angles measure 50° and 60°. What is the third angle?",
    "questionType": "choice",
    "options": [
      "60°",
      "70°",
      "80°",
      "110°"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Geometry & Trig",
    "subskill": "Triangle angles",
    "difficulty": "E"
  },
  {
    "id": "sat_S1_M_Q19",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "In right triangle ABC, angle C = 90°, the hypotenuse AB = 17, and BC = 8.\nWhat is the length of AC?",
    "questionType": "text",
    "correctTextAnswers": [
      "15"
    ],
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Geometry & Trig",
    "subskill": "Right triangles",
    "difficulty": "H"
  },
  {
    "id": "sat_S1_M_Q20",
    "sectionId": "sat_stage1_math",
    "sectionTitle": "Stage 1 — Math",
    "prompt": "For x ≠ −3, which expression is equivalent to (2x² + 5x − 3) / (x + 3)?",
    "questionType": "choice",
    "options": [
      "2x − 1",
      "2x + 1",
      "2x − 3",
      "x − 1"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 1",
    "track": "routing",
    "satSection": "math",
    "quizCode": "S1_M",
    "domain": "Advanced Math",
    "subskill": "Rational expression",
    "difficulty": "H"
  }
];
export const satStage2LowerRwQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S2L_RW_RW1",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A community center began offering free evening classes in basic computer skills. Many\nolder residents who had never used email signed up, and several said they could now stay in touch\nwith family more easily.\n\nWhich choice best states the main idea?",
    "questionType": "choice",
    "options": [
      "The center stopped offering daytime classes.",
      "Free computer classes helped older residents connect with family.",
      "Most residents already knew how to use email.",
      "Email is the only useful computer skill."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Information & Ideas",
    "subskill": "Central Ideas",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW2",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "When a school replaced its old water fountains with refill stations, students began\ncarrying reusable bottles. Over one semester, the school recorded a sharp drop in the number of\nplastic bottles thrown away.\n\nAccording to the text, what happened after the refill stations were installed?",
    "questionType": "choice",
    "options": [
      "Students stopped drinking water.",
      "The number of discarded plastic bottles dropped.",
      "The school removed all water fountains permanently.",
      "Students bought more plastic bottles."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Information & Ideas",
    "subskill": "Detail",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW3",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The directions were so clear that even first-time users could follow them without\ndifficulty.\n\nAs used in the text, \"clear\" most nearly means:",
    "questionType": "choice",
    "options": [
      "transparent",
      "easy to understand",
      "bright",
      "empty"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Craft & Structure",
    "subskill": "Words in Context",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW4",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A bakery began posting its daily list of unsold bread on a community board each evening,\noffering it free to anyone in need. Within weeks, far less bread was thrown away at closing time.\n\nWhich inference is best supported?",
    "questionType": "choice",
    "options": [
      "The bakery started baking much less bread overall.",
      "Offering unsold bread to the community reduced food waste.",
      "The bakery's sales decreased sharply.",
      "People preferred the free bread to fresh bread."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Information & Ideas",
    "subskill": "Inference",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_RW_RW5",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The road was closed for repairs. ______, drivers had to take a longer route to reach the\ncity center.\n\nWhich choice completes the text with the most logical transition?",
    "questionType": "choice",
    "options": [
      "However,",
      "As a result,",
      "For example,",
      "In contrast,"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Expression of Ideas",
    "subskill": "Transitions",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW6",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The first part of the article explains why honeybee populations have been declining. The\nsecond part describes simple steps homeowners can take to support local bees, such as planting\nnative flowers.\n\nWhat is the purpose of the second part?",
    "questionType": "choice",
    "options": [
      "To suggest actions readers can take in response to the problem",
      "To argue that honeybees are not important",
      "To describe how to start a business",
      "To explain why flowers are expensive"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Craft & Structure",
    "subskill": "Text Structure & Purpose",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_RW_RW7",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The team practiced for several hours ______ they were ready for the competition.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "hours they",
      "hours, and they",
      "hours, they",
      "hours; and they"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Standard English",
    "subskill": "Boundaries",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW8",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "Each of the students ______ a notebook for the class.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "need",
      "needs",
      "were needing",
      "have needed"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Standard English",
    "subskill": "Form, Structure & Sense",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_RW_RW9",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "Last summer, the volunteers ______ a small garden behind the library, and it is still\ngrowing today.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "plant",
      "planted",
      "will plant",
      "are planting"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Standard English",
    "subskill": "Verb Tense",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_RW_RW10",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A student claims that reading aloud helps young children learn new words. Which finding\nwould best support the claim?",
    "questionType": "choice",
    "options": [
      "Children who were read to daily knew more new words after a month than children who were not.",
      "Many parents enjoy reading to their children.",
      "Some children prefer picture books to chapter books.",
      "Libraries often hold story-time events."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "rw",
    "quizCode": "S2L_RW",
    "domain": "Information & Ideas",
    "subskill": "Command of Evidence",
    "difficulty": "M"
  }
];
export const satStage2LowerMathQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S2L_M_M1",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "Solve for x: x + 9 = 17",
    "questionType": "choice",
    "options": [
      "6",
      "8",
      "17",
      "26"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "Algebra",
    "subskill": "Linear equation",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_M_M2",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "Solve for x: 2x − 5 = 11",
    "questionType": "choice",
    "options": [
      "3",
      "6",
      "8",
      "16"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "Algebra",
    "subskill": "Linear equation",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_M_M3",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "What is 30% of 60?",
    "questionType": "choice",
    "options": [
      "12",
      "18",
      "20",
      "30"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "PSDA",
    "subskill": "Percentages",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_M_M4",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "What is 3/4 of 20?",
    "questionType": "text",
    "correctTextAnswers": [
      "15"
    ],
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "PSDA",
    "subskill": "Fractions",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_M_M5",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A printer prints 24 pages in 3 minutes. At this rate, how many pages does it print in\n5 minutes?",
    "questionType": "choice",
    "options": [
      "30",
      "36",
      "40",
      "48"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "PSDA",
    "subskill": "Rates / proportion",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_M_M6",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A rectangle has length 7 and width 5. What is its area?",
    "questionType": "choice",
    "options": [
      "12",
      "24",
      "35",
      "70"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "Geometry & Trig",
    "subskill": "Area",
    "difficulty": "E"
  },
  {
    "id": "sat_S2L_M_M7",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A square has a perimeter of 36. What is the length of one side?",
    "questionType": "choice",
    "options": [
      "6",
      "9",
      "12",
      "18"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "Geometry & Trig",
    "subskill": "Perimeter",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_M_M8",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "The test scores 80, 85, and 90 have what mean (average)?",
    "questionType": "text",
    "correctTextAnswers": [
      "85"
    ],
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "PSDA",
    "subskill": "Statistics (mean)",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_M_M9",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "Two notebooks cost $6 in total. At the same price each, how much do five notebooks cost?",
    "questionType": "choice",
    "options": [
      "$12",
      "$15",
      "$18",
      "$30"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "PSDA",
    "subskill": "Proportional reasoning",
    "difficulty": "M"
  },
  {
    "id": "sat_S2L_M_M10",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A taxi charges $4 plus $2 per mile. What is the cost of a 6-mile trip?",
    "questionType": "choice",
    "options": [
      "$12",
      "$14",
      "$16",
      "$18"
    ],
    "correctAnswerIndex": 2,
    "stage": "Stage 2",
    "track": "lower",
    "satSection": "math",
    "quizCode": "S2L_M",
    "domain": "Algebra",
    "subskill": "Linear model",
    "difficulty": "M"
  }
];
export const satStage2UpperRwQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S2U_RW_RW1",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "Far from being ______, the committee's recommendations were tentative, hedged at every\nturn with conditions and caveats.\n\nAs used in the text, \"categorical\" most nearly means:",
    "questionType": "choice",
    "options": [
      "unconditional",
      "disorganized",
      "unpopular",
      "lengthy"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Craft & Structure",
    "subskill": "Words in Context",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW2",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "In an experiment, participants told a task was \"difficult\" persisted longer than those\ntold it was \"easy,\" though the tasks were identical. The researchers suggested the \"easy\" label\nmay have led participants to interpret ordinary struggle as a sign of personal failure.\n\nWhich inference is best supported?",
    "questionType": "choice",
    "options": [
      "Framing a task as difficult can make people more willing to persist through normal struggle.",
      "The two groups were actually given tasks of different difficulty.",
      "People always perform better when a task is labeled easy.",
      "Persistence is unrelated to how a task is described."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Information & Ideas",
    "subskill": "Inference",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW3",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A historian argues that the city's rapid growth in the 1880s was driven less by its new\nrailway than by its expanding harbor.\n\nWhich finding, if true, would most strongly support the historian's claim?",
    "questionType": "choice",
    "options": [
      "Most new businesses in the 1880s were established near the harbor rather than the railway depot.",
      "The railway carried more passengers each year than in the previous decade.",
      "The harbor and the railway were completed in the same year.",
      "Other cities with railways also grew during the 1880s."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Information & Ideas",
    "subskill": "Evidence: Textual",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW4",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A study measured plant growth under three light colors. A researcher claims red light\nproduced the greatest average growth.\n\n| Light | Mean growth (cm) |\n|---|---:|\n| Red | 14 |\n| Blue | 18 |\n| Green | 9 |\n\nWhich statement about the data is accurate?",
    "questionType": "choice",
    "options": [
      "The data contradict the claim; blue light produced the greatest mean growth.",
      "The data support the claim; red produced the greatest growth.",
      "The data show red and green produced equal growth.",
      "The data are insufficient to compare the colors."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Information & Ideas",
    "subskill": "Evidence: Quantitative",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW5",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "Text 1: Economists who favor minimum-wage increases argue that higher pay boosts consumer\nspending, which in turn supports local businesses.\nText 2: Whether higher wages help or harm local businesses depends on the size of the increase.\nModest raises may be absorbed easily; sharp ones can force small firms to cut staff, offsetting\nany gain in spending.\n\nBased on the texts, the author of Text 2 would most likely argue that the claim in Text 1 is:",
    "questionType": "choice",
    "options": [
      "valid only when the wage increase is large",
      "true in general but dependent on how large the increase is",
      "false, because higher wages never help businesses",
      "irrelevant to local businesses"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Craft & Structure",
    "subskill": "Cross-Text Connections",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW6",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The two studies used different methods and sample sizes. Their conclusions, ______,\nwere remarkably similar.\n\nWhich choice completes the text with the most logical transition?",
    "questionType": "choice",
    "options": [
      "therefore",
      "nevertheless",
      "for instance",
      "consequently"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Expression of Ideas",
    "subskill": "Transitions",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW7",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "A writer wants to underscore the limitation of a study's findings for a skeptical\nscientific audience.\nNotes:\n- The study surveyed 80 participants.\n- All participants were university students.\n- Results showed a strong correlation between sleep and mood.\n- The authors caution that the sample may not represent the general population.\n\nWhich choice best accomplishes the goal?",
    "questionType": "choice",
    "options": [
      "The study found a strong correlation between sleep and mood among its participants.",
      "Although the study found a strong sleep–mood correlation, its sample of 80 university students may not represent the general population, limiting how broadly the findings apply.",
      "The study, which surveyed 80 university students, found that sleep and mood are strongly correlated.",
      "Sleep and mood were strongly correlated in the study's participants, all university students."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Expression of Ideas",
    "subskill": "Rhetorical Synthesis",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW8",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The expedition relied on three instruments ______ a barometer, a sextant, and a\nchronometer, each calibrated before departure.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "instruments,",
      "instruments:",
      "instruments;",
      "instruments"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Standard English",
    "subskill": "Boundaries",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW9",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "The novelist's first book ______ went unnoticed for years, is now considered a classic.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "which",
      ", which",
      ", which,",
      "which,"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Standard English",
    "subskill": "Boundaries",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_RW_RW10",
    "sectionId": "sat_stage2_rw",
    "sectionTitle": "Stage 2 — Reading & Writing",
    "prompt": "Among the most significant developments of the past century ______ the mapping of the\nhuman genome and the rise of digital computing.\n\nWhich choice conforms to Standard English conventions?",
    "questionType": "choice",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "rw",
    "quizCode": "S2U_RW",
    "domain": "Standard English",
    "subskill": "Form, Structure & Sense",
    "difficulty": "H"
  }
];
export const satStage2UpperMathQuestions: SatPlacementQuestion[] = [
  {
    "id": "sat_S2U_M_M1",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "The function f is defined by f(x) = 2x² − 8x + 3. What is the **minimum value** of f(x)?",
    "questionType": "choice",
    "options": [
      "−5",
      "−13",
      "2",
      "3"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Advanced Math",
    "subskill": "Quadratic (vertex)",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M2",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "At a sale, 3 notebooks and 2 pens cost $13, and 2 notebooks and 4 pens cost $14.\nWhat is the cost, in dollars, of one notebook?",
    "questionType": "text",
    "correctTextAnswers": [
      "3"
    ],
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Algebra",
    "subskill": "Systems (word)",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M3",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A population is modeled by P(t) = 400·(1.5)^t, where t is in hours. Which statement is\ntrue?",
    "questionType": "choice",
    "options": [
      "The population increases by 50% each hour.",
      "The population increases by 150% each hour.",
      "The population increases by 400 each hour.",
      "The population decreases over time."
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Advanced Math",
    "subskill": "Exponential",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M4",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "If g(x) = 2x − 1 and h(x) = x² + 3, what is h(g(2))?",
    "questionType": "choice",
    "options": [
      "7",
      "12",
      "13",
      "19"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Advanced Math",
    "subskill": "Function composition",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M5",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A price is increased by 20%, then the new price is decreased by 20%. The final price is\nwhat percent of the original price?",
    "questionType": "choice",
    "options": [
      "100%",
      "96%",
      "98%",
      "104%"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "PSDA",
    "subskill": "Percent change",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M6",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A set of 5 numbers has a mean of 12. When a sixth number is added, the mean\nbecomes 13. What is the sixth number?",
    "questionType": "text",
    "correctTextAnswers": [
      "18"
    ],
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "PSDA",
    "subskill": "Statistics (mean)",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M7",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A line of best fit for study hours (x) versus test score (y) is ŷ = 52 + 6x. Which is\nthe best interpretation of the slope?",
    "questionType": "choice",
    "options": [
      "A student who studies 0 hours is predicted to score 52.",
      "Each additional hour of study is associated with a predicted 6-point increase in score.",
      "The maximum possible score is 6.",
      "Studying 6 hours guarantees a perfect score."
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "PSDA",
    "subskill": "Linear model / slope",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M8",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "A circle in the xy-plane has equation (x − 3)² + (y + 2)² = 25. Which point lies on the\ncircle?",
    "questionType": "choice",
    "options": [
      "(8, −2)",
      "(3, 2)",
      "(0, 0)",
      "(−2, 3)"
    ],
    "correctAnswerIndex": 0,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Geometry & Trig",
    "subskill": "Circles (coordinate)",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M9",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "In right triangle ABC, angle B = 90°. If sin A = 3/5 and the hypotenuse AC = 20,\nwhat is the length of side BC (opposite angle A)?",
    "questionType": "text",
    "correctTextAnswers": [
      "12"
    ],
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Geometry & Trig",
    "subskill": "Right-triangle trig",
    "difficulty": "H"
  },
  {
    "id": "sat_S2U_M_M10",
    "sectionId": "sat_stage2_math",
    "sectionTitle": "Stage 2 — Math",
    "prompt": "If (x + 6) / (x − 2) = 3, what is the value of x?",
    "questionType": "choice",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correctAnswerIndex": 1,
    "stage": "Stage 2",
    "track": "upper",
    "satSection": "math",
    "quizCode": "S2U_M",
    "domain": "Algebra",
    "subskill": "Rational equation",
    "difficulty": "H"
  }
];

export const satStage1Questions: SatPlacementQuestion[] = [
  ...satStage1RwQuestions,
  ...satStage1MathQuestions,
];

export const satAllQuestions: SatPlacementQuestion[] = [
  ...satStage1RwQuestions,
  ...satStage1MathQuestions,
  ...satStage2LowerRwQuestions,
  ...satStage2LowerMathQuestions,
  ...satStage2UpperRwQuestions,
  ...satStage2UpperMathQuestions,
];
