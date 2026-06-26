import type { PlacementLevel, PlacementQuestion, TestSection } from "../types";

export const ieltsSections: TestSection[] = [
  {
    "id": "grammar",
    "title": "Grammar & Vocabulary",
    "points": 20,
    "description": "20 questions checking grammar, vocabulary, academic tone, chart language, and IELTS test vocabulary."
  },
  {
    "id": "listening",
    "title": "Listening",
    "points": 20,
    "description": "20 questions across IELTS-style listening parts with form completion, detail, matching, and notes."
  },
  {
    "id": "reading",
    "title": "Reading",
    "points": 20,
    "description": "20 questions across academic passages, including T/F/NG, completion, headings, detail, and main idea."
  }
];

export const ieltsPlacementLevels: PlacementLevel[] = [
  {
    "label": "Foundation 1",
    "shortLabel": "F1",
    "range": "0–29",
    "description": "The student needs essential English and IELTS foundation support before regular IELTS task training.",
    "recommendation": "Start with Foundation 1. Focus on core grammar, vocabulary, short listening, short reading, and sentence-level writing.",
    "admissionsNote": "Recommended consultation: Foundation pathway, weekly study routine, and teacher-supported practice."
  },
  {
    "label": "Pre-IELTS",
    "shortLabel": "Pre-IELTS",
    "range": "30–44",
    "description": "The student has basic English ability but needs structured IELTS preparation before full test practice.",
    "recommendation": "Start with Pre-IELTS. Build task familiarity, paragraph writing, listening details, and reading strategy.",
    "admissionsNote": "Recommended consultation: Pre-IELTS pathway, skill support plan, and target-date feasibility."
  },
  {
    "label": "IELTS Core",
    "shortLabel": "Core",
    "range": "45–59",
    "description": "The student is ready for core IELTS training with support in accuracy, task response, and strategy.",
    "recommendation": "Start with IELTS Core. Balance skills across Listening, Reading, Writing, and Speaking with regular feedback.",
    "admissionsNote": "Recommended consultation: Core IELTS pathway, mock-test calendar, and writing/speaking review."
  },
  {
    "label": "IELTS Target",
    "shortLabel": "Target",
    "range": "60–74",
    "description": "The student shows solid readiness and should focus on band-targeted performance and error reduction.",
    "recommendation": "Start with IELTS Target. Emphasize timed practice, task accuracy, paraphrase, and feedback cycles.",
    "admissionsNote": "Recommended consultation: target band plan, weekly mock schedule, and teacher feedback package."
  },
  {
    "label": "IELTS Advanced",
    "shortLabel": "Advanced",
    "range": "75–87",
    "description": "The student is ready for advanced IELTS refinement, higher-level language control, and exam strategy.",
    "recommendation": "Start with IELTS Advanced. Focus on advanced writing quality, speaking depth, reading speed, and listening precision.",
    "admissionsNote": "Recommended consultation: advanced band plan and high-score performance tracking."
  },
  {
    "label": "IELTS Elite",
    "shortLabel": "Elite",
    "range": "88–100",
    "description": "The student demonstrates strong readiness and should work on elite-level precision and final test readiness.",
    "recommendation": "Start with IELTS Elite. Use high-level mock tests, targeted feedback, and test-day readiness coaching.",
    "admissionsNote": "Recommended consultation: elite score plan, official test timeline, and intensive feedback schedule."
  }
];

export const ieltsPlacementVersions: Record<"A" | "B", PlacementQuestion[]> = {
  "A": [
  {
    "id": "A-GV-01",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "If students ______ regularly, they are more likely to improve their test performance.",
    "questionType": "choice",
    "options": [
      "practise",
      "practised",
      "will practise",
      "would practise"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-GV-02",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The number of online learners ______ significantly over the last decade.",
    "questionType": "choice",
    "options": [
      "increase",
      "has increased",
      "have increased",
      "increasing"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-03",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Many people believe that technology makes learning more flexible, ______ others worry about screen time.",
    "questionType": "choice",
    "options": [
      "because",
      "although",
      "so",
      "unless"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-04",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The lecture was difficult because the speaker used several terms ______ were unfamiliar to the students.",
    "questionType": "choice",
    "options": [
      "who",
      "which",
      "where",
      "what"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-05",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Students should avoid ______ full sentences from sample essays.",
    "questionType": "choice",
    "options": [
      "memorize",
      "memorized",
      "memorizing",
      "to memorize"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-GV-06",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The chart shows that public transport became ______ popular than driving in 2025.",
    "questionType": "choice",
    "options": [
      "much",
      "more",
      "most",
      "many"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-07",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "By the time the course ends, students ______ several practice tests.",
    "questionType": "choice",
    "options": [
      "complete",
      "completed",
      "will have completed",
      "are completing"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-GV-08",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "A well-organized essay should include clear topic sentences, relevant examples, and ______ conclusion.",
    "questionType": "choice",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-GV-09",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The research was conducted ______ a group of university students.",
    "questionType": "choice",
    "options": [
      "to",
      "by",
      "at",
      "from"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-10",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The school introduced a new system, ______ allowed teachers to track student progress more accurately.",
    "questionType": "choice",
    "options": [
      "that",
      "what",
      "which",
      "who"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-GV-11",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Students need to develop effective study ______ before taking high-stakes exams.",
    "questionType": "choice",
    "options": [
      "habits",
      "customs",
      "traditions",
      "manners"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-GV-12",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The data ______ a steady increase in online learning.",
    "questionType": "choice",
    "options": [
      "makes",
      "shows",
      "tells",
      "speaks"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-13",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which word is closest in meaning to “significant”?",
    "questionType": "choice",
    "options": [
      "small",
      "important",
      "temporary",
      "simple"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-14",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "A teacher should provide ______ feedback after a writing task.",
    "questionType": "choice",
    "options": [
      "heavy",
      "strong",
      "constructive",
      "crowded"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-GV-15",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Regular practice can improve students’ ______.",
    "questionType": "choice",
    "options": [
      "confident",
      "confidence",
      "confidently",
      "confide"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-16",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Many students struggle to ______ between similar answer choices in Reading.",
    "questionType": "choice",
    "options": [
      "differ",
      "different",
      "differentiate",
      "difference"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-GV-17",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which phrase is most suitable for IELTS Task 2?",
    "questionType": "choice",
    "options": [
      "I totally think this is super true.",
      "In my opinion, this issue requires careful consideration.",
      "This thing is very very good.",
      "Everyone knows this is right."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-18",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The speaker changed the booking from Monday to Wednesday, creating a common listening ______.",
    "questionType": "choice",
    "options": [
      "trap",
      "prize",
      "chance",
      "habit"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-GV-19",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which phrase is best for describing a chart?",
    "questionType": "choice",
    "options": [
      "The number went up a lot.",
      "There was a sharp increase in the number.",
      "The thing became bigger.",
      "It got more and more."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-GV-20",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "In Speaking Part 3, students need to give ______ answers, not just short personal opinions.",
    "questionType": "choice",
    "options": [
      "extended",
      "tiny",
      "copied",
      "silent"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-L-01",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Student name: Anna ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "Lewis"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "A-L-02",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Preferred course: IELTS ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "Core"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "A-L-03",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Class time: ______ evening.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "Friday"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "A-L-04",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Phone number: 0987 ______ 451.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "362"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "A-L-05",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Placement interview room: Room ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "B"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "A-L-06",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. The new study zone is mainly for students who want to ______.",
    "questionType": "choice",
    "options": [
      "practise speaking with friends",
      "study quietly on their own",
      "attend teacher-led workshops"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "A-L-07",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. Students should book the media room if they need to ______.",
    "questionType": "choice",
    "options": [
      "record speaking practice",
      "print worksheets",
      "borrow textbooks"
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "A-L-08",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. The advisor recommends that students use the progress desk to ______.",
    "questionType": "choice",
    "options": [
      "complain about classes",
      "check their study plan",
      "register for official IELTS"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "A-L-09",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. The weekly workshop this month focuses on ______.",
    "questionType": "choice",
    "options": [
      "essay planning",
      "listening maps",
      "pronunciation"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "A-L-10",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. Students who miss a live feedback session should ______.",
    "questionType": "choice",
    "options": [
      "wait until the next month",
      "email the teacher only",
      "watch the recording and complete a reflection"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "A-L-11",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Minh's opinion is that ______.",
    "questionType": "choice",
    "options": [
      "students need more model answers",
      "students should analyse mistakes after practice",
      "timed practice is useful but stressful",
      "vocabulary should be learned in context",
      "speaking practice should be more flexible"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "A-L-12",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Sofia's opinion is that ______.",
    "questionType": "choice",
    "options": [
      "students need more model answers",
      "students should analyse mistakes after practice",
      "timed practice is useful but stressful",
      "vocabulary should be learned in context",
      "speaking practice should be more flexible"
    ],
    "correctAnswerIndex": 3,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "A-L-13",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Daniel's opinion is that ______.",
    "questionType": "choice",
    "options": [
      "students need more model answers",
      "students should analyse mistakes after practice",
      "timed practice is useful but stressful",
      "vocabulary should be learned in context",
      "speaking practice should be more flexible"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "A-L-14",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Lina's opinion is that ______.",
    "questionType": "choice",
    "options": [
      "students need more model answers",
      "students should analyse mistakes after practice",
      "timed practice is useful but stressful",
      "vocabulary should be learned in context",
      "speaking practice should be more flexible"
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "A-L-15",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Omar's opinion is that ______.",
    "questionType": "choice",
    "options": [
      "students need more model answers",
      "students should analyse mistakes after practice",
      "timed practice is useful but stressful",
      "vocabulary should be learned in context",
      "speaking practice should be more flexible"
    ],
    "correctAnswerIndex": 4,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "A-L-16",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Digital learning works well when students have clear ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "instructions"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "A-L-17",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. One risk is completion without real ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "understanding"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "A-L-18",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Effective courses include regular review and ______ tracking.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "error"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "A-L-19",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Teachers use learning data to decide when ______ is needed.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "intervention"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "A-L-20",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. The main goal is measurable ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "improvement"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_A_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "A-R-01",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nRooftop gardens are becoming popular partly because open land is limited in cities.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-02",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nA single rooftop garden can significantly cool an entire city.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-R-03",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nSchools sometimes use rooftop gardens for educational purposes.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-04",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nMost rooftop gardens are maintained by professional farmers.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-R-05",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nCity governments may need to support rooftop gardening if they want it to spread.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-06",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nConcrete and asphalt contribute to the urban heat island effect because they absorb ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "heat"
    ]
  },
  {
    "id": "A-R-07",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nPlants can lower surface temperature by giving shade and releasing ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "moisture"
    ]
  },
  {
    "id": "A-R-08",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nProfessional ______ may need to inspect the building.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "engineers"
    ]
  },
  {
    "id": "A-R-09",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nSafety barriers and irrigation can make the initial ______ expensive.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "investment"
    ]
  },
  {
    "id": "A-R-10",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Rooftop Gardens in Modern Cities\nIn many large cities, unused rooftops are being transformed into small gardens, vegetable plots, and green community spaces. This trend has become especially visible in areas where land is expensive and public parks are limited. Supporters argue that rooftop gardens can improve the quality of urban life, while critics question whether they can make a meaningful difference at scale.\n\nOne common benefit is temperature reduction. Concrete and asphalt absorb heat during the day and release it slowly at night, creating what scientists call the urban heat island effect. Plants can reduce surface temperature by providing shade and releasing moisture into the air. A single rooftop garden will not cool an entire city, but a network of green roofs may help lower temperatures in dense neighbourhoods.\n\nRooftop gardens may also support local food production. Some schools and apartment buildings use rooftop spaces to grow herbs, vegetables, and small fruit plants. These projects rarely produce enough food to replace traditional agriculture, but they can help people understand where food comes from. For children, a rooftop garden can become a living classroom where science, health, and environmental responsibility are connected.\n\nHowever, rooftop gardening is not simple. Buildings must be strong enough to hold soil, water, and equipment. Drainage systems must be carefully planned so that water does not damage the building. In some cases, professional engineers must inspect the roof before planting begins. Maintenance is another challenge. Without regular care, plants may die quickly, and the space can become unsafe or unattractive.\n\nCost is also an issue. The initial investment for a rooftop garden may be high, especially if the project includes safety barriers, irrigation, and structural improvements. For this reason, rooftop gardens are more common in wealthier neighbourhoods or in buildings supported by schools, companies, or local governments. If cities want rooftop gardening to become more widespread, they may need to provide financial support or technical guidance.\n\nDespite these challenges, many urban planners see rooftop gardens as part of a broader solution. They are not a replacement for parks, clean public transport, or good housing policy. Instead, they are one practical way to use existing space more creatively. When planned carefully, rooftop gardens can bring environmental, educational, and social benefits to city communities.\n\nRooftop gardens should be part of a ______ solution.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "broader"
    ]
  },
  {
    "id": "A-R-11",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nParagraph 1 heading.",
    "questionType": "choice",
    "options": [
      "The definition of micro-credentials",
      "Why short courses appeal to learners",
      "How employers judge short qualifications",
      "The risk of disconnected learning"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-12",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nParagraph 2 heading.",
    "questionType": "choice",
    "options": [
      "The definition of micro-credentials",
      "Why short courses appeal to learners",
      "How employers judge short qualifications",
      "The risk of disconnected learning"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-R-13",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nParagraph 3 heading.",
    "questionType": "choice",
    "options": [
      "Why all degrees are no longer useful",
      "How employers judge short qualifications",
      "The risk of disconnected learning",
      "A future that combines different learning models"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-R-14",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nParagraph 4 heading.",
    "questionType": "choice",
    "options": [
      "The risk of disconnected learning",
      "Why short courses appeal to learners",
      "The definition of micro-credentials",
      "A future that combines different learning models"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-15",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nParagraph 5 heading.",
    "questionType": "choice",
    "options": [
      "How employers judge short qualifications",
      "The importance of using micro-credentials with clear goals",
      "A future that combines different learning models",
      "Why all degrees are no longer useful"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-R-16",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nMicro-credentials usually focus on ______.",
    "questionType": "choice",
    "options": [
      "one specific skill",
      "a complete university degree",
      "traditional school subjects only"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-17",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nEmployers may value a micro-credential if it ______.",
    "questionType": "choice",
    "options": [
      "is very easy to complete",
      "comes from a credible provider",
      "replaces all previous qualifications"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "A-R-18",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nOne criticism of micro-credentials is that they may ______.",
    "questionType": "choice",
    "options": [
      "take too many years to finish",
      "make education too expensive",
      "lead to disconnected knowledge"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "A-R-19",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nMicro-credentials are most useful when they ______.",
    "questionType": "choice",
    "options": [
      "are connected to larger learning goals",
      "are collected as quickly as possible",
      "replace universities completely"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "A-R-20",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Micro-Credentials and the Future of Learning\nTraditional education has often been organized around long programs: a school year, a university degree, or a professional qualification. In recent years, however, shorter forms of learning have become more common. These are sometimes called micro-credentials. They usually focus on a specific skill, such as data analysis, project management, academic writing, or digital design.\n\nOne reason micro-credentials are attractive is flexibility. A working adult may not have time to attend a two-year program, but may be able to complete a six-week online course. A high school student may use a short course to explore a future career before choosing a university major. For learners who need targeted skills, micro-credentials can offer a practical route.\n\nEmployers have also shown interest in this model. In fast-changing industries, a degree earned ten years ago may not prove that a worker has current skills. A recent micro-credential in a specific tool or method can provide more up-to-date evidence. However, employers do not value all micro-credentials equally. The reputation of the provider, the quality of assessment, and the clarity of the learning outcomes all affect credibility.\n\nCritics argue that micro-credentials may fragment education. If students collect many small certificates without a clear plan, they may end up with disconnected knowledge. Another concern is quality control. Some courses may promise career benefits but provide only shallow instruction. Without strong standards, micro-credentials can become marketing products rather than meaningful learning experiences.\n\nA balanced approach may be the most useful. Micro-credentials can support lifelong learning when they are connected to larger goals. For example, a student preparing for university might complete short courses in research skills, academic English, and presentation skills. These do not replace a full education, but they can strengthen readiness. Similarly, professionals may use micro-credentials to update specific skills while continuing to build broader expertise.\n\nThe future of learning is unlikely to be only traditional degrees or only short certificates. Instead, many learners may combine both. Long programs provide depth, structure, and recognized qualifications. Micro-credentials provide speed, focus, and flexibility. The challenge for schools, universities, and employers is to create systems that recognize short learning achievements without reducing education to a collection of badges.\n\nFuture learning may involve ______.",
    "questionType": "choice",
    "options": [
      "only traditional degrees",
      "only short online courses",
      "a combination of long and short learning"
    ],
    "correctAnswerIndex": 2
  }
],
  "B": [
  {
    "id": "B-GV-01",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Students who review their mistakes ______ better long-term progress.",
    "questionType": "choice",
    "options": [
      "make",
      "made",
      "will made",
      "making"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-GV-02",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The percentage of students using mobile learning ______ since 2020.",
    "questionType": "choice",
    "options": [
      "rise",
      "has risen",
      "have risen",
      "rising"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-03",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Online courses are convenient; ______, they require strong self-discipline.",
    "questionType": "choice",
    "options": [
      "because",
      "however",
      "therefore",
      "unless"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-04",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The students ______ completed the reflection form received extra feedback.",
    "questionType": "choice",
    "options": [
      "who",
      "which",
      "where",
      "what"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-GV-05",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Many learners are interested in ______ their speaking fluency.",
    "questionType": "choice",
    "options": [
      "improve",
      "improving",
      "improved",
      "to improving"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-06",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The second chart is ______ detailed than the first one.",
    "questionType": "choice",
    "options": [
      "most",
      "more",
      "many",
      "much"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-07",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Before the final test, the class ______ two checkpoint quizzes.",
    "questionType": "choice",
    "options": [
      "finish",
      "will finished",
      "will have finished",
      "finishing"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "B-GV-08",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Students should write ______ overview in Academic Task 1.",
    "questionType": "choice",
    "options": [
      "the",
      "an",
      "no article",
      "many"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-09",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The results were compared ______ the previous year’s data.",
    "questionType": "choice",
    "options": [
      "for",
      "by",
      "with",
      "at"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "B-GV-10",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The platform records study time, ______ helps advisors identify students who need support.",
    "questionType": "choice",
    "options": [
      "that",
      "what",
      "which",
      "who"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "B-GV-11",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Good IELTS preparation requires a clear study ______.",
    "questionType": "choice",
    "options": [
      "plan",
      "custom",
      "fashion",
      "habitual"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-GV-12",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The survey results ______ that students prefer blended learning.",
    "questionType": "choice",
    "options": [
      "speak",
      "indicate",
      "talk",
      "make"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-13",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which word is closest in meaning to “approximately”?",
    "questionType": "choice",
    "options": [
      "exactly",
      "about",
      "rarely",
      "quickly"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-14",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Choose the best collocation: Students should receive ______ guidance before a mock test.",
    "questionType": "choice",
    "options": [
      "wide",
      "clear",
      "tall",
      "hard"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-15",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "The teacher explained the task with great ______.",
    "questionType": "choice",
    "options": [
      "clear",
      "clarity",
      "clearly",
      "clarify"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-16",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Students must learn to ______ key words in a reading passage.",
    "questionType": "choice",
    "options": [
      "recognition",
      "recognize",
      "recognizable",
      "recognizing"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-17",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which phrase is most academic?",
    "questionType": "choice",
    "options": [
      "Kids nowadays use phones a lot.",
      "Many young people now rely on mobile devices for learning.",
      "Phones are super useful.",
      "Everybody is always online."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-18",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "A wrong answer designed to attract careless test-takers is called a ______.",
    "questionType": "choice",
    "options": [
      "distractor",
      "reward",
      "definition",
      "section"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-GV-19",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "Which phrase is best for a Task 1 comparison?",
    "questionType": "choice",
    "options": [
      "This one is bigger.",
      "The figure for online learning was higher than that for printed workbooks.",
      "It is very different.",
      "The number is nice."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-GV-20",
    "sectionId": "grammar",
    "sectionTitle": "Grammar & Vocabulary",
    "prompt": "In Speaking, students should support opinions with ______.",
    "questionType": "choice",
    "options": [
      "examples",
      "silence",
      "copying",
      "spelling"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-L-01",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Student name: Mark ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "Tran"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "B-L-02",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Preferred test date: ______ 18.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "July"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "B-L-03",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Course option: IELTS ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "Target"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "B-L-04",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Phone number: 0912 ______ 608.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "475"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "B-L-05",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 1. Interview location: Room ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "C"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L01.mp3",
    "audioTitle": "Listening Audio 1",
    "audioRange": "For Questions 1–5"
  },
  {
    "id": "B-L-06",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. The resource library is mainly for ______.",
    "questionType": "choice",
    "options": [
      "quiet study and borrowing materials",
      "speaking clubs only",
      "official test registration"
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "B-L-07",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. Students can use the recording booth to ______.",
    "questionType": "choice",
    "options": [
      "print essays",
      "submit speaking tasks",
      "buy textbooks"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "B-L-08",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. The weekly clinic this month focuses on ______.",
    "questionType": "choice",
    "options": [
      "grammar basics",
      "Task 1 overview",
      "map listening"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "B-L-09",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. Students should check their dashboard ______.",
    "questionType": "choice",
    "options": [
      "once a term",
      "every week",
      "only before the final test"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "B-L-10",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 2. Students who fall behind should first ______.",
    "questionType": "choice",
    "options": [
      "delete old tasks",
      "skip the module",
      "contact their advisor"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L02.mp3",
    "audioTitle": "Listening Audio 2",
    "audioRange": "For Questions 6–10"
  },
  {
    "id": "B-L-11",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Rachel believes students need ______.",
    "questionType": "choice",
    "options": [
      "more planning before writing",
      "more memorized answers",
      "less feedback",
      "shorter reading texts"
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "B-L-12",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Ken thinks the biggest problem is ______.",
    "questionType": "choice",
    "options": [
      "writing too much",
      "not understanding paraphrase",
      "having too many teachers",
      "using paper books"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "B-L-13",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Maria says speaking improves when students ______.",
    "questionType": "choice",
    "options": [
      "memorize full scripts",
      "record and review themselves",
      "avoid Part 3",
      "speak only with friends"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "B-L-14",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Tom finds mock tests useful for ______.",
    "questionType": "choice",
    "options": [
      "learning new grammar",
      "time management",
      "choosing a course",
      "finding vocabulary lists"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "B-L-15",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 3. Aisha says vocabulary is useful only when students ______.",
    "questionType": "choice",
    "options": [
      "write long lists",
      "use words in real tasks",
      "translate every word",
      "copy examples"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L03.mp3",
    "audioTitle": "Listening Audio 3",
    "audioRange": "For Questions 11–15"
  },
  {
    "id": "B-L-16",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Independent learning requires a clear ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "routine"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "B-L-17",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Students often confuse activity completion with real ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "progress"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "B-L-18",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Feedback should identify the ______ of an error.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "cause"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "B-L-19",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. Advisors can use dashboards to track student ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "consistency"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "B-L-20",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listening Part 4. The final aim is to build test readiness and learner ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "confidence"
    ],
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/ielts_B_L04.mp3",
    "audioTitle": "Listening Audio 4",
    "audioRange": "For Questions 16–20"
  },
  {
    "id": "B-R-01",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nDigital libraries allow people to access learning materials beyond normal opening hours.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-02",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nDigital libraries have completely replaced physical libraries in most cities.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-03",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nSome students use digital libraries to prepare for exams.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-04",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nAll digital libraries require users to pay a monthly fee.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "B-R-05",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nLibrary staff may need training to support digital users.",
    "questionType": "choice",
    "options": [
      "TRUE",
      "FALSE",
      "NOT GIVEN"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-06",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nDigital libraries are useful because they offer access outside normal ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "opening hours"
    ]
  },
  {
    "id": "B-R-07",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nStudents can use them to download articles, watch tutorials, and complete ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "practice tasks"
    ]
  },
  {
    "id": "B-R-08",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nA major concern is unequal access to reliable ______.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "internet"
    ]
  },
  {
    "id": "B-R-09",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nStaff training helps users find resources and avoid ______ information.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "unreliable"
    ]
  },
  {
    "id": "B-R-10",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Digital Libraries and Access to Learning\nDigital libraries are becoming an important part of modern education. Unlike traditional libraries, which depend on physical opening hours and shelf space, digital libraries allow users to access books, articles, videos, and learning tasks through an online platform. This can be especially useful for students who study at night, live far from a school, or need materials outside normal opening hours.\n\nFor exam preparation, digital libraries can offer several advantages. Students may download articles, watch tutorials, complete practice tasks, and review vocabulary lists in one place. Teachers can also recommend specific resources instead of asking students to search randomly online. When resources are well organized, students are more likely to study independently and less likely to waste time.\n\nHowever, digital access is not equal for everyone. Some students may not have a reliable internet connection or a suitable device. Others may struggle to choose appropriate materials because the amount of information online is overwhelming. A digital library that is poorly designed can create confusion rather than support learning.\n\nAnother concern is information quality. Not all online materials are accurate or suitable for academic study. Library staff and teachers may need training so they can guide students, recommend reliable sources, and teach learners how to avoid misleading or unreliable information. In this way, the role of library staff changes rather than disappears.\n\nDigital libraries should not be seen as a complete replacement for physical libraries. Many students still benefit from quiet reading spaces, printed books, and face-to-face help. The strongest model may be a blended one: physical libraries provide community and focus, while digital libraries provide flexibility and wider access.\n\nDigital libraries should work alongside, not replace, ______ libraries.",
    "questionType": "text",
    "options": [],
    "correctTextAnswers": [
      "physical"
    ]
  },
  {
    "id": "B-R-11",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParagraph 1 heading.",
    "questionType": "choice",
    "options": [
      "What citizen science means",
      "The danger of volunteer data",
      "A future without professional scientists",
      "How schools use laboratories"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-12",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParagraph 2 heading.",
    "questionType": "choice",
    "options": [
      "What citizen science means",
      "Why public participation is useful",
      "The danger of volunteer data",
      "The cost of university research"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-13",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParagraph 3 heading.",
    "questionType": "choice",
    "options": [
      "Why public participation is useful",
      "Concerns about data quality",
      "A future without professional scientists",
      "How schools use laboratories"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-14",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParagraph 4 heading.",
    "questionType": "choice",
    "options": [
      "Concerns about data quality",
      "Education benefits for participants",
      "The cost of university research",
      "The end of classroom learning"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-15",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParagraph 5 heading.",
    "questionType": "choice",
    "options": [
      "A balanced role for volunteers and experts",
      "A future without professional scientists",
      "Why public participation is useless",
      "The danger of online learning"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-16",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nCitizen science projects usually involve ______.",
    "questionType": "choice",
    "options": [
      "members of the public",
      "only professional researchers",
      "only university students"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-17",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nVolunteers can help researchers by ______.",
    "questionType": "choice",
    "options": [
      "writing all academic papers",
      "collecting large amounts of data",
      "replacing scientific training"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-18",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nOne concern is that volunteer data may be ______.",
    "questionType": "choice",
    "options": [
      "too expensive",
      "inaccurate",
      "too private"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "B-R-19",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nParticipants may benefit because they ______.",
    "questionType": "choice",
    "options": [
      "learn more about science",
      "avoid all schoolwork",
      "become examiners"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "B-R-20",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Citizen Science and Public Participation\nScientific research is often associated with universities, laboratories, and trained experts. However, some research projects also involve members of the public. This approach is known as citizen science. Volunteers may record bird sightings, measure local air quality, report weather patterns, or collect images of plants and insects.\n\nPublic participation can be useful because researchers often need large amounts of data. A small professional team may not be able to observe thousands of locations over a long period. With clear instructions, volunteers can help collect information from many places at once. This allows researchers to notice patterns that would otherwise be difficult to see.\n\nThere are concerns about data quality. Volunteers may make mistakes, misunderstand instructions, or record information inconsistently. For this reason, successful citizen science projects usually include training, simple reporting tools, and expert review. Technology can also help by checking location, time, and photo evidence.\n\nCitizen science may also have educational benefits. Participants often learn more about science, nature, and their local environment. Students who join such projects may become more curious because they can see a connection between classroom knowledge and real research. This experience can make science feel more practical and meaningful.\n\nCitizen science is not a replacement for professional research. Experts are still needed to design studies, analyse results, and draw careful conclusions. However, when volunteers and experts work together, citizen science can expand research capacity and increase public understanding of scientific issues.\n\nThe writer suggests citizen science works best when ______.",
    "questionType": "choice",
    "options": [
      "experts are removed",
      "volunteers and experts work together",
      "schools stop teaching science"
    ],
    "correctAnswerIndex": 1
  }
]
};

export const ieltsTeacherReviewPrompts: Record<"A" | "B", { sentenceTitle: string; sentencePrompt: string; paragraphTitle: string; paragraphPrompt: string; speakingPrompts: readonly string[] }> = {
  "A": {
    "sentenceTitle": "IELTS Writing Task 1",
    "sentencePrompt": "Summarize the table about study methods in 2023 and 2025. Write at least 150 words.",
    "paragraphTitle": "IELTS Writing Task 2",
    "paragraphPrompt": "Some schools are replacing printed textbooks with digital learning platforms. What are the advantages and disadvantages of this development? Write 200–250 words for placement.",
    "speakingPrompts": [
      "Why do you want to study IELTS?",
      "Which IELTS skill is hardest for you?",
      "Describe your current study routine.",
      "What target band do you want and by when?"
    ]
  },
  "B": {
    "sentenceTitle": "IELTS Writing Task 1",
    "sentencePrompt": "Summarize the chart about students’ preferred feedback types in 2022 and 2025. Write at least 150 words.",
    "paragraphTitle": "IELTS Writing Task 2",
    "paragraphPrompt": "Many students now use online courses to prepare for important exams. What are the benefits and drawbacks of this trend? Write 200–250 words for placement.",
    "speakingPrompts": [
      "Why do you want to study IELTS?",
      "Which skill do you most want to improve?",
      "Tell us about your experience with online learning.",
      "What target band do you want and by when?"
    ]
  }
};
