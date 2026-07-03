import type { PlacementLevel, PlacementQuestion, PlacementTestCard, TestSection } from "../types";

export const placementTestCards: PlacementTestCard[] = [
  {
    "id": "esl",
    "title": "ESL Placement",
    "subtitle": "Starter to B2 pathway",
    "description": "Auto-graded listening, language use, and reading with teacher-reviewed writing/speaking.",
    "duration": "35–50 min",
    "status": "active",
    "accent": "Ready"
  },
  {
    "id": "ielts",
    "title": "IELTS Placement",
    "subtitle": "Foundation to IELTS Elite",
    "description": "Auto-graded grammar/vocabulary, listening, and reading with teacher-reviewed IELTS writing/speaking.",
    "duration": "60–90 min",
    "status": "active",
    "accent": "Ready"
  },
  {
    "id": "sat",
    "title": "SAT Placement",
    "subtitle": "SAT Bridge to Elite",
    "description": "SAT pathway placement for Reading & Writing and Math readiness.",
    "duration": "Coming next",
    "status": "intake_only",
    "accent": "Advisor intake"
  },
  {
    "id": "diploma",
    "title": "American Diploma / K–12",
    "subtitle": "Grade-level pathway check",
    "description": "Academic level check for American Diploma, homeschool, transcript, and credit pathway consultation.",
    "duration": "Coming next",
    "status": "intake_only",
    "accent": "Advisor intake"
  },
  {
    "id": "chinese",
    "title": "Chinese Placement",
    "subtitle": "Mandarin Starter to Elementary",
    "description": "Auto-graded Mandarin listening, pinyin, vocabulary, grammar, and reading with teacher/advisor speaking review.",
    "duration": "35–50 min",
    "status": "active",
    "accent": "Ready"
  },
  {
    "id": "ai",
    "title": "AI Placement",
    "subtitle": "AI literacy and learning pathway",
    "description": "AI readiness and digital learning placement for age-appropriate AI learning tracks.",
    "duration": "Coming next",
    "status": "intake_only",
    "accent": "Advisor intake"
  }
] as const;

export const eslSections: TestSection[] = [
  {
    "id": "listening",
    "title": "Listening",
    "points": 15,
    "description": "15 questions. Audio should be played through the web player. Each audio group can be listened to twice in supervised testing."
  },
  {
    "id": "language",
    "title": "Language Use",
    "points": 25,
    "description": "25 questions checking grammar, vocabulary, sentence control, connectors, and academic tone."
  },
  {
    "id": "reading",
    "title": "Reading",
    "points": 30,
    "description": "30 questions across notices and short passages, including detail, inference, vocabulary, and main idea."
  }
];

export const eslPlacementVersions: Record<"A" | "B", PlacementQuestion[]> = {
  "A": [
    {
      "id": "A-L-01",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "How old is Anna?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L01.mp3"
    },
    {
      "id": "A-L-02",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "How does Anna go to school?",
      "options": [
        "By bus",
        "By bike",
        "By car",
        "On foot"
      ],
      "correctAnswerIndex": 3,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L01.mp3"
    },
    {
      "id": "A-L-03",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What time does Anna’s first class start?",
      "options": [
        "7:00",
        "7:30",
        "8:00",
        "8:30"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L01.mp3"
    },
    {
      "id": "A-L-04",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What is Anna’s favorite subject?",
      "options": [
        "Math",
        "Science",
        "English",
        "Art"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L01.mp3"
    },
    {
      "id": "A-L-05",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What does Anna usually do after homework?",
      "options": [
        "Watches TV",
        "Plays badminton",
        "Reads books",
        "Goes swimming"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L01.mp3"
    },
    {
      "id": "A-L-06",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Where will the class go?",
      "options": [
        "A zoo",
        "A park",
        "A museum",
        "A library"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L02.mp3"
    },
    {
      "id": "A-L-07",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "When is the trip?",
      "options": [
        "Monday",
        "Wednesday",
        "Friday",
        "Sunday"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L02.mp3"
    },
    {
      "id": "A-L-08",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What time will the bus leave?",
      "options": [
        "7:30",
        "7:45",
        "8:00",
        "8:30"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L02.mp3"
    },
    {
      "id": "A-L-09",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What should students bring?",
      "options": [
        "A notebook, water, and lunch",
        "A camera, money, and a hat",
        "A uniform and sports shoes",
        "A laptop and a dictionary"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L02.mp3"
    },
    {
      "id": "A-L-10",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What should students wear?",
      "options": [
        "School uniform only",
        "Comfortable shoes",
        "Formal clothes",
        "Winter clothes"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L02.mp3"
    },
    {
      "id": "A-L-11",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What is the project mainly about?",
      "options": [
        "School uniforms",
        "Technology and learning",
        "Sports activities",
        "Museum trips"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L03.mp3"
    },
    {
      "id": "A-L-12",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Why does Maya first disagree?",
      "options": [
        "The topic is too difficult",
        "The topic may be too common",
        "She dislikes technology",
        "They do not have enough time"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L03.mp3"
    },
    {
      "id": "A-L-13",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What will they probably do for the project?",
      "options": [
        "Interview students",
        "Build an app",
        "Make a movie",
        "Visit a company"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L03.mp3"
    },
    {
      "id": "A-L-14",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What problem do they want to include?",
      "options": [
        "Students do not have books",
        "Students get distracted",
        "Teachers give too much homework",
        "The internet is too slow"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L03.mp3"
    },
    {
      "id": "A-L-15",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Which solution is mentioned?",
      "options": [
        "Study all night",
        "Stop using all technology",
        "Turn off notifications",
        "Buy a new phone"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_A_L03.mp3"
    },
    {
      "id": "A-G-01",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "My brother ___ soccer every Saturday.",
      "options": [
        "play",
        "plays",
        "playing",
        "played"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-02",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "There ___ three books on the table.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-03",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "She ___ breakfast at 7 a.m. yesterday.",
      "options": [
        "has",
        "have",
        "had",
        "having"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-04",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "I am interested ___ learning English.",
      "options": [
        "in",
        "on",
        "at",
        "for"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-G-05",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "We ___ to the beach next weekend.",
      "options": [
        "go",
        "went",
        "are going",
        "goes"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-06",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "This bag is ___ than that one.",
      "options": [
        "heavy",
        "heavier",
        "heaviest",
        "more heavy"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-07",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "I have lived here ___ 2021.",
      "options": [
        "for",
        "since",
        "during",
        "from"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-08",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "They were watching a movie when I ___.",
      "options": [
        "arrive",
        "arrived",
        "arriving",
        "arrives"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-09",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "You ___ eat too much candy. It is not good for your teeth.",
      "options": [
        "should",
        "shouldn’t",
        "must",
        "can"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-10",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "If it rains tomorrow, we ___ at home.",
      "options": [
        "stay",
        "stayed",
        "will stay",
        "staying"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-11",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The book ___ I borrowed from you is very interesting.",
      "options": [
        "who",
        "where",
        "which",
        "when"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-12",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "She speaks English very ___.",
      "options": [
        "good",
        "well",
        "better",
        "best"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-13",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "I don’t have ___ money to buy that jacket.",
      "options": [
        "enough",
        "too",
        "many",
        "few"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-G-14",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The students finished their project ___ the deadline.",
      "options": [
        "on time",
        "in time",
        "at time",
        "by time"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-G-15",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "My teacher asked me ___ my homework again.",
      "options": [
        "check",
        "checking",
        "to check",
        "checked"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-16",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The word “improve” is closest in meaning to:",
      "options": [
        "make worse",
        "make better",
        "make longer",
        "make smaller"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-17",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the correct sentence.",
      "options": [
        "She don’t like apples.",
        "She doesn’t likes apples.",
        "She doesn’t like apples.",
        "She not like apples."
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-18",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the best connector: I was tired, ___ I finished my assignment.",
      "options": [
        "because",
        "so",
        "but",
        "or"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-19",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The opposite of “confident” is:",
      "options": [
        "nervous",
        "careful",
        "friendly",
        "active"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-G-20",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Which sentence is more formal?",
      "options": [
        "Hey, send me the file.",
        "Could you please send me the file?",
        "Give me that file now.",
        "I need file."
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-21",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Many students find online learning useful because it allows them ___ at their own pace.",
      "options": [
        "study",
        "studying",
        "to study",
        "studied"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-22",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The experiment failed; however, the students learned an important lesson. The word “however” shows:",
      "options": [
        "cause",
        "contrast",
        "example",
        "sequence"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-G-23",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the sentence with the clearest meaning.",
      "options": [
        "Because I was late.",
        "I late because traffic.",
        "I was late because the traffic was heavy.",
        "The traffic heavy I late."
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-24",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "If students manage their time well, they are more likely ___ their goals.",
      "options": [
        "achieve",
        "achieving",
        "to achieve",
        "achieved"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-G-25",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Which sentence has the best academic tone?",
      "options": [
        "Phones are bad and students should never use them.",
        "Phones are cool but sometimes annoying.",
        "Mobile phones can support learning when students use them responsibly.",
        "I think phones are super fun."
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-01",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWhen does the Art Club meet?",
      "options": [
        "Monday",
        "Tuesday",
        "Thursday",
        "Friday"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-02",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWhere does the club meet?",
      "options": [
        "Room 102",
        "Room 204",
        "The library",
        "The playground"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-03",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWhat will students learn?",
      "options": [
        "Cooking and shopping",
        "Drawing, painting, and design",
        "Singing and dancing",
        "Running and swimming"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-04",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWhat should students bring?",
      "options": [
        "A camera",
        "A pencil, eraser, and notebook",
        "Sports clothes",
        "A laptop"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-05",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWho should students talk to if they have questions?",
      "options": [
        "Mr. Brown",
        "Ms. Green",
        "The principal",
        "Their parents"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-06",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nHow long is each club meeting?",
      "options": [
        "30 minutes",
        "45 minutes",
        "1 hour",
        "2 hours"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-07",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWho can join the club?",
      "options": [
        "Only old members",
        "Only Grade 12 students",
        "New members are welcome",
        "Only teachers"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-08",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nWhen should students ask questions?",
      "options": [
        "Before Friday",
        "After the summer",
        "At 7:45",
        "On Sunday"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-09",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nThe notice is mainly for students who want to:",
      "options": [
        "join an art activity",
        "take a science test",
        "borrow books",
        "play basketball"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-10",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Art Club Notice\nThe Art Club meets every Tuesday after school from 3:30 to 4:30 in Room 204. Students will learn drawing, painting, and simple design. Please bring a pencil, an eraser, and a notebook. New members are welcome. If you have questions, please talk to Ms. Green before Friday.\n\nThe word “members” means people who:",
      "options": [
        "are late for class",
        "belong to a group",
        "work in a museum",
        "write exams"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-11",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat did Minh do at first?",
      "options": [
        "Read long books",
        "Watched videos and repeated words",
        "Took many tests",
        "Spoke with foreigners every day"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-12",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat did Minh realize after a few weeks?",
      "options": [
        "English was impossible",
        "He needed a clear plan",
        "Videos were useless",
        "He should stop studying"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-13",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nHow many days a week does Minh study English now?",
      "options": [
        "Three",
        "Four",
        "Five",
        "Seven"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-14",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat does Minh do on Monday and Wednesday?",
      "options": [
        "Practices listening",
        "Reads stories",
        "Writes a paragraph",
        "Records speaking"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-15",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat does Minh do on Thursday?",
      "options": [
        "Practices listening",
        "Reads stories",
        "Writes a paragraph",
        "Records speaking"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-16",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat does Minh do on Friday?",
      "options": [
        "Takes a grammar test",
        "Records himself speaking",
        "Watches a movie",
        "Meets a teacher"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-17",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat is an Error Log?",
      "options": [
        "A notebook for mistakes and corrections",
        "A list of movies",
        "A school timetable",
        "A reading book"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-18",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhy does Minh use an Error Log?",
      "options": [
        "To see his progress",
        "To avoid all homework",
        "To copy answers",
        "To stop making videos"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-19",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhat is the main idea of the text?",
      "options": [
        "Students should only watch English videos",
        "Learning at home works better with a clear routine",
        "Speaking is not important",
        "Minh does not like English"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-20",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Learning English at Home\nMinh started learning English at home last year. At first, he only watched videos and repeated new words. After a few weeks, he realized that watching videos was not enough. He needed a clear plan.\n\nNow Minh studies English five days a week. On Monday and Wednesday, he practices listening. On Tuesday, he reads short stories. On Thursday, he writes a short paragraph. On Friday, he records himself speaking for one minute.\n\nMinh still makes mistakes, but he keeps a small notebook called an Error Log. Every time he makes a mistake, he writes it down and corrects it. He says this helps him see his progress.\n\nWhich sentence is true?",
      "options": [
        "Minh never makes mistakes.",
        "Minh studies without a plan now.",
        "Minh corrects his mistakes.",
        "Minh only studies on weekends."
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-21",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhat is the main topic of the passage?",
      "options": [
        "Why textbooks are no longer useful",
        "How technology can support learning",
        "Why students should avoid online learning",
        "How to play educational games"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-22",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nAccording to the passage, technology gives students more:",
      "options": [
        "homework",
        "control over their learning",
        "classroom rules",
        "free time"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-23",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhat could students do online today?",
      "options": [
        "Watch explanations and complete quizzes",
        "Only read printed books",
        "Only talk to teachers",
        "Stop reviewing lessons"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-24",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhat is one problem mentioned in the passage?",
      "options": [
        "Students cannot find videos online",
        "Students may become distracted",
        "Teachers do not use books",
        "Online lessons are always too hard"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-25",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nThe phrase “click through lessons quickly” means students:",
      "options": [
        "study carefully",
        "finish without deep thinking",
        "ask many questions",
        "take notes slowly"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "A-R-26",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nSuccessful online learners need clear goals, good study habits, and:",
      "options": [
        "regular feedback",
        "more games",
        "longer screen time",
        "no teacher support"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-27",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhat should a strong online learning program do?",
      "options": [
        "Give more screen time only",
        "Remove all teacher feedback",
        "Guide students step by step",
        "Let students skip all practice"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "A-R-28",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nThe author’s attitude toward technology is:",
      "options": [
        "balanced",
        "angry",
        "completely negative",
        "uninterested"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-29",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhich result can technology support when used well?",
      "options": [
        "Independence and academic growth",
        "Less practice",
        "More distraction",
        "No need for goals"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "A-R-30",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Technology and Independent Learning\nTechnology has changed the way students learn. In the past, students depended mostly on textbooks and classroom lessons. Today, they can watch explanations, listen to audio, complete quizzes, and review lessons online. This gives students more control over their learning.\n\nHowever, technology does not automatically make learning better. Some students become distracted by games, messages, or short videos. Others click through lessons quickly without thinking deeply. For this reason, successful online learners need clear goals, good study habits, and regular feedback.\n\nA strong online learning program should not simply give students more screen time. It should guide students step by step, help them practice actively, and show them what to improve next. When technology is used in this way, it can support independence, confidence, and real academic growth.\n\nWhich title best fits the passage?",
      "options": [
        "Technology for Better Independent Learning",
        "Why Phones Are Always Bad",
        "The History of Textbooks",
        "Games in the Classroom"
      ],
      "correctAnswerIndex": 0
    }
  ],
  "B": [
    {
      "id": "B-L-01",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Where does Ben usually go on Saturday mornings?",
      "options": [
        "To the cinema",
        "To the library",
        "To the market",
        "To the museum"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L01.mp3"
    },
    {
      "id": "B-L-02",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Who goes with Ben?",
      "options": [
        "His father",
        "His sister",
        "His teacher",
        "His friend"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L01.mp3"
    },
    {
      "id": "B-L-03",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What does Ben borrow?",
      "options": [
        "Two storybooks",
        "A storybook and a science book",
        "A comic book and a dictionary",
        "Only one book"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L01.mp3"
    },
    {
      "id": "B-L-04",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What time is Ben’s swimming lesson?",
      "options": [
        "2:00",
        "3:00",
        "4:00",
        "5:00"
      ],
      "correctAnswerIndex": 2,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L01.mp3"
    },
    {
      "id": "B-L-05",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Why does Ben like swimming?",
      "options": [
        "It helps him feel strong and relaxed",
        "It helps him finish homework",
        "It is easy for everyone",
        "It is at school"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L01.mp3"
    },
    {
      "id": "B-L-06",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "When will the science fair be held?",
      "options": [
        "Next Monday",
        "Next Wednesday",
        "Next Friday",
        "Next Sunday"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L02.mp3"
    },
    {
      "id": "B-L-07",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Where will the science fair be?",
      "options": [
        "In the main hall",
        "In Room 204",
        "At the city museum",
        "In the library"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L02.mp3"
    },
    {
      "id": "B-L-08",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What time should groups arrive?",
      "options": [
        "8:00",
        "8:15",
        "9:00",
        "10:00"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L02.mp3"
    },
    {
      "id": "B-L-09",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What should students bring?",
      "options": [
        "A poster, model, and materials",
        "A uniform and lunch",
        "A notebook and water",
        "A camera and sports shoes"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L02.mp3"
    },
    {
      "id": "B-L-10",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "When may parents visit?",
      "options": [
        "Before 8:15",
        "After 10:00",
        "At 12:30 only",
        "Next Friday"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L02.mp3"
    },
    {
      "id": "B-L-11",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What survey topic do Nina and Tom choose?",
      "options": [
        "Technology habits",
        "Breakfast habits",
        "Homework time",
        "Favorite sports"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L03.mp3"
    },
    {
      "id": "B-L-12",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "Why is the topic useful?",
      "options": [
        "Some students skip breakfast",
        "The class needs a new menu",
        "Breakfast is always free",
        "Parents asked for it"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L03.mp3"
    },
    {
      "id": "B-L-13",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What will they ask students?",
      "options": [
        "How often they eat breakfast",
        "How far they live from school",
        "How many books they read",
        "How often they play games"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L03.mp3"
    },
    {
      "id": "B-L-14",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What class benefit do they mention?",
      "options": [
        "Winning competitions",
        "Concentrating in class",
        "Finishing school early",
        "Learning math faster"
      ],
      "correctAnswerIndex": 1,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L03.mp3"
    },
    {
      "id": "B-L-15",
      "sectionId": "listening",
      "sectionTitle": "Listening",
      "prompt": "What will they suggest?",
      "options": [
        "Simple healthy choices",
        "More homework",
        "Longer school days",
        "A new classroom"
      ],
      "correctAnswerIndex": 0,
      "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/ESL/placement/audio/esl_B_L03.mp3"
    },
    {
      "id": "B-G-01",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "My sister ___ music every evening.",
      "options": [
        "listen",
        "listens to",
        "listening",
        "listened"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-02",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "There ___ a pen and two notebooks in my bag.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-03",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "We ___ our grandparents last weekend.",
      "options": [
        "visit",
        "visited",
        "visits",
        "visiting"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-04",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "He is good ___ solving problems.",
      "options": [
        "in",
        "on",
        "at",
        "for"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-05",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "They ___ a new course next month.",
      "options": [
        "start",
        "started",
        "are starting",
        "starts"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-06",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "This exercise is ___ than the last one.",
      "options": [
        "easy",
        "easier",
        "easiest",
        "more easy"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-07",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "I have studied English ___ three years.",
      "options": [
        "since",
        "for",
        "during",
        "from"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-08",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "While I was reading, my phone ___.",
      "options": [
        "ring",
        "rang",
        "ringing",
        "rings"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-09",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Students ___ arrive late for the speaking test.",
      "options": [
        "should",
        "shouldn’t",
        "could",
        "may"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-10",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "If she practices every day, she ___ more confident.",
      "options": [
        "become",
        "became",
        "will become",
        "becoming"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-11",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The teacher ___ helped me was very patient.",
      "options": [
        "who",
        "which",
        "where",
        "when"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-12",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Please speak more ___ so everyone can hear you.",
      "options": [
        "clear",
        "clearly",
        "clearest",
        "clearer"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-13",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The tea is ___ hot to drink now.",
      "options": [
        "enough",
        "too",
        "many",
        "few"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-14",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "We submitted the assignment ___ the deadline.",
      "options": [
        "before",
        "between",
        "inside",
        "onto"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-15",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "My parents encouraged me ___ more books in English.",
      "options": [
        "read",
        "reading",
        "to read",
        "reads"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-16",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The word “increase” is closest in meaning to:",
      "options": [
        "go up",
        "go down",
        "stay the same",
        "stop"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-17",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the correct sentence.",
      "options": [
        "He don’t have homework.",
        "He doesn’t has homework.",
        "He doesn’t have homework.",
        "He not have homework."
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-18",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the best connector: She studied hard, ___ she passed the test.",
      "options": [
        "because",
        "but",
        "so",
        "although"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-19",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The opposite of “careful” is:",
      "options": [
        "careless",
        "friendly",
        "quiet",
        "honest"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-20",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Which sentence is more polite?",
      "options": [
        "Open the door.",
        "Could you open the door, please?",
        "Door open now.",
        "You open door."
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-G-21",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Online quizzes help students ___ what they need to review.",
      "options": [
        "know",
        "knowing",
        "to knowing",
        "known"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-22",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "The plan was simple; nevertheless, it worked well. The word “nevertheless” shows:",
      "options": [
        "contrast",
        "cause",
        "example",
        "time"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-23",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Choose the sentence with the clearest meaning.",
      "options": [
        "I was absent because I was sick.",
        "Because sick absent.",
        "I absent yesterday because sick.",
        "Sick because I absent."
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-G-24",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Students who review their mistakes are more likely ___ faster.",
      "options": [
        "improve",
        "improving",
        "to improve",
        "improved"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-G-25",
      "sectionId": "language",
      "sectionTitle": "Language Use",
      "prompt": "Which sentence has the best academic tone?",
      "options": [
        "Reading is boring and useless.",
        "Reading helps students build vocabulary and understand ideas more deeply.",
        "Books are kind of okay.",
        "I don’t like reading so nobody should read."
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-01",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhat is the library starting?",
      "options": [
        "A music contest",
        "A four-week Reading Challenge",
        "A science fair",
        "A sports club"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-02",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nHow can students join?",
      "options": [
        "By emailing the principal",
        "By writing their name on the sign-up sheet",
        "By buying a book",
        "By asking their parents to call"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-03",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhere is the sign-up sheet?",
      "options": [
        "Near the library desk",
        "In Room 204",
        "At the gym",
        "On the school bus"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-04",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nHow many books should each student read at least?",
      "options": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-05",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhat should students write for each book?",
      "options": [
        "A short review",
        "A test",
        "A poem",
        "A letter to the author"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-06",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhat will students who complete the challenge receive?",
      "options": [
        "A certificate",
        "A new bag",
        "Free lunch",
        "A phone"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-07",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhere may students share a recommendation?",
      "options": [
        "During the Friday assembly",
        "At home only",
        "In a math lesson",
        "On Monday morning"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-08",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nThe word “recommendation” means:",
      "options": [
        "a suggestion",
        "a mistake",
        "a rule",
        "a timetable"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-09",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nThe notice is mainly about:",
      "options": [
        "encouraging students to read",
        "changing library hours",
        "teaching students to paint",
        "preparing for a trip"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-10",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Library Reading Challenge\nThe school library is starting a four-week Reading Challenge. Students can join by writing their name on the sign-up sheet near the library desk. Each student should read at least two books during the challenge and write a short review for each book. Students who complete the challenge will receive a certificate and may share one book recommendation during the Friday assembly.\n\nWhich statement is true?",
      "options": [
        "Students must read ten books.",
        "The challenge lasts four weeks.",
        "Only teachers can join.",
        "Students do not need to write anything."
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-11",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhat problem did Sara have at first?",
      "options": [
        "She felt nervous when people listened",
        "She could not read English",
        "She had no teacher",
        "She disliked recording"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-12",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhat habit did her teacher suggest?",
      "options": [
        "Read one book every day",
        "Record one short answer every day",
        "Write ten sentences every day",
        "Memorize a long speech"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-13",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nHow long did Sara speak at first?",
      "options": [
        "Twenty seconds",
        "One minute",
        "Two minutes",
        "Five minutes"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-14",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhich topics did Sara use at first?",
      "options": [
        "Family, food, and school",
        "Technology and science",
        "Travel and history",
        "Sports and news"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-15",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhat two problems did Sara notice?",
      "options": [
        "She spoke too quietly and repeated words too often",
        "She spoke too fast and laughed too much",
        "She forgot her homework and lost her notebook",
        "She read too slowly and missed class"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-16",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhat did Sara start practicing?",
      "options": [
        "Useful phrases and louder speaking",
        "Only grammar rules",
        "Long essays",
        "Drawing pictures"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-17",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nBy the end of the month, Sara could speak for:",
      "options": [
        "ten seconds",
        "thirty seconds",
        "one minute",
        "five minutes"
      ],
      "correctAnswerIndex": 2
    },
    {
      "id": "B-R-18",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nHow did Sara feel at the end?",
      "options": [
        "Proud",
        "Angry",
        "Bored",
        "Afraid"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-19",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nWhat is the main idea of the passage?",
      "options": [
        "Small daily speaking practice can build confidence",
        "Students should never record themselves",
        "Speaking English is impossible",
        "Teachers should not give advice"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-20",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Building a Speaking Habit\nSara wanted to speak English more confidently, but she felt nervous when people listened to her. Her teacher suggested a simple habit: record one short answer every day. At first, Sara only spoke for twenty seconds. She used easy topics such as family, food, and school.\n\nAfter two weeks, Sara listened to her recordings and noticed two problems. She spoke too quietly, and she repeated the same words too often. She started practicing useful phrases and speaking a little louder.\n\nBy the end of the month, Sara could speak for one minute with fewer pauses. She was not perfect, but she felt proud because she could hear her own progress.\n\nThe phrase “fewer pauses” means:",
      "options": [
        "less stopping while speaking",
        "more mistakes",
        "louder music",
        "shorter homework"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-21",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nWhat does the passage say about independent learning?",
      "options": [
        "It means learning without any guidance",
        "It still needs feedback",
        "It is only for adults",
        "It works only with textbooks"
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-22",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nWhat can feedback help students know?",
      "options": [
        "What is correct and what to practice next",
        "How to avoid all tests",
        "How to skip lessons",
        "What games to play"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-23",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nFeedback can come from:",
      "options": [
        "a teacher, quiz result, checklist, or reflection",
        "only a principal",
        "only parents",
        "only classmates"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-24",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nGood feedback should be:",
      "options": [
        "specific",
        "angry",
        "very short and unclear",
        "impossible to follow"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-25",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nWhich feedback is more helpful?",
      "options": [
        "Your writing is bad.",
        "Your opinion is clear, but add one example and check verb tense.",
        "This is wrong.",
        "Try harder."
      ],
      "correctAnswerIndex": 1
    },
    {
      "id": "B-R-26",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nWhat happens when feedback is clear and kind?",
      "options": [
        "Students are more willing to revise",
        "Students stop learning",
        "Students avoid all writing",
        "Students never need teachers"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-27",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nThe word “revise” means:",
      "options": [
        "improve or change after review",
        "copy without thinking",
        "delete everything",
        "read silently"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-28",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nOver time, feedback helps students become:",
      "options": [
        "more independent and responsible",
        "more confused",
        "less careful",
        "less willing to study"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-29",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nThe author believes feedback should be:",
      "options": [
        "clear and supportive",
        "punishing",
        "secret",
        "unrelated to the task"
      ],
      "correctAnswerIndex": 0
    },
    {
      "id": "B-R-30",
      "sectionId": "reading",
      "sectionTitle": "Reading",
      "prompt": "Why Feedback Matters\nIndependent learning does not mean learning alone without guidance. Students may complete lessons by themselves, but they still need feedback to know what is correct, what is unclear, and what to practice next.\n\nFeedback can come from a teacher, a quiz result, a checklist, or even a student’s own reflection. Good feedback is specific. For example, telling a student “Your writing is bad” is not very helpful. A better comment is: “Your opinion is clear, but you need to add one example and check your verb tense.”\n\nWhen feedback is clear and kind, students are more willing to revise their work. Over time, this process helps them become more independent and more responsible for their learning.\n\nWhich title best fits the passage?",
      "options": [
        "Why Feedback Matters in Independent Learning",
        "Why Students Should Study Alone",
        "How to Avoid Writing",
        "The History of Quizzes"
      ],
      "correctAnswerIndex": 0
    }
  ]
};

export const eslPlacementLevels: PlacementLevel[] = [
  {
    "label": "Starter / Pre-A1 Support",
    "shortLabel": "Starter",
    "range": "0–24",
    "description": "The student needs strong support with basic words, simple sentences, classroom language, and confidence.",
    "recommendation": "Begin with Starter / Pre-A1 Support before regular A1 work. Teacher review should check whether the student needs extra pronunciation and sentence-building support.",
    "admissionsNote": "Recommended consultation: foundation routine, parent support, weekly schedule, and basic ESL entry pathway."
  },
  {
    "label": "A1 Foundation",
    "shortLabel": "A1",
    "range": "25–39",
    "description": "The student can recognize some common English patterns but still needs structured A1 grammar, vocabulary, listening, and speaking support.",
    "recommendation": "Start with A1 Foundation and build consistent sentence control, listening for simple details, and short speaking confidence.",
    "admissionsNote": "Recommended consultation: A1 pathway, weekly study plan, and teacher-supported practice."
  },
  {
    "label": "A2 Entry with Support",
    "shortLabel": "A2 Entry",
    "range": "40–54",
    "description": "The student shows early A2 readiness but may still have gaps in grammar accuracy, reading stamina, and listening details.",
    "recommendation": "Place into A2 Entry with Support, with grammar repair and guided reading/listening practice.",
    "admissionsNote": "Recommended consultation: A2 bridge plan, study routine, and progress check after initial units."
  },
  {
    "label": "A2 Core",
    "shortLabel": "A2 Core",
    "range": "55–69",
    "description": "The student has a workable A2 foundation and can begin more regular academic ESL lessons with teacher feedback.",
    "recommendation": "Start A2 Core and prepare for B1 entry through longer reading, clearer writing, and supported speaking.",
    "admissionsNote": "Recommended consultation: A2 Core class fit, Moodle plan, and speaking/writing support schedule."
  },
  {
    "label": "B1 Entry / B1 Core",
    "shortLabel": "B1",
    "range": "70–82",
    "description": "The student is likely ready for B1-level learning, but writing and speaking must confirm sentence control and fluency.",
    "recommendation": "Place into B1 Entry or B1 Core depending on teacher review, writing quality, and speaking confidence.",
    "admissionsNote": "Recommended consultation: B1 class placement, academic English goals, and IELTS/SAT long-term pathway if relevant."
  },
  {
    "label": "B1+ / B2 Support",
    "shortLabel": "B1+",
    "range": "83–92",
    "description": "The student shows strong multiple-choice performance and may be near B2, but teacher review should check productive skills carefully.",
    "recommendation": "Consider B1+ / B2 Support with targeted writing, speaking fluency, vocabulary expansion, and academic reading.",
    "admissionsNote": "Recommended consultation: B2 readiness check, target program selection, and advanced support plan."
  },
  {
    "label": "B2 Core",
    "shortLabel": "B2",
    "range": "93–100",
    "description": "The student performs strongly on the auto-graded sections and may be ready for B2-level academic English work.",
    "recommendation": "Proceed to B2 Core or advanced diagnostic review. Writing and speaking review should confirm final placement.",
    "admissionsNote": "Recommended consultation: B2 Core, IELTS/SAT pathway, academic writing/speaking calibration."
  }
];

export const eslTeacherReviewPrompts = {
  "A": {
    "sentenceTitle": "Sentence Writing",
    "sentencePrompt": "Write 5 complete sentences about yourself. You can write about your name, age, school, favorite subject, hobbies, and what you want to improve in English.",
    "paragraphTitle": "Paragraph Writing",
    "paragraphPrompt": "Write 80–120 words. Topic: Some students like learning English online. Other students prefer learning in a classroom. Which way do you prefer? Give reasons.",
    "speakingPrompts": [
      "Personal introduction: speak for 45–60 seconds about your name, age, grade, hobbies, favorite subject, and why you want to learn English.",
      "Describe and explain: speak for 60–90 seconds. Describe a good student. What habits does a good student have?",
      "Opinion speaking: speak for 90–120 seconds. Do you think students should use technology to study English? Why or why not?"
    ]
  },
  "B": {
    "sentenceTitle": "Sentence Writing",
    "sentencePrompt": "Write 5 complete sentences about your daily routine, school life, hobbies, and one English skill you want to improve.",
    "paragraphTitle": "Paragraph Writing",
    "paragraphPrompt": "Write 80–120 words. Topic: What is one good habit that helps students learn English better? Explain your answer with reasons or examples.",
    "speakingPrompts": [
      "Personal introduction: speak for 45–60 seconds about yourself, your school, your hobbies, and your English goal.",
      "Describe and explain: speak for 60–90 seconds. Describe a useful learning habit. Why is it helpful?",
      "Opinion speaking: speak for 90–120 seconds. Is it better to study English a little every day or a lot only before a test? Why?"
    ]
  }
} as const;
