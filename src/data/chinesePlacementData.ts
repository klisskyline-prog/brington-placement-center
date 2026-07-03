import type { PlacementLevel, PlacementQuestion, PlacementTestCard, TestSection } from "../types";

export const chinesePlacementCard: PlacementTestCard = {
  id: "chinese",
  title: "Chinese Placement",
  subtitle: "Mandarin Starter to Elementary",
  description:
    "Auto-graded Mandarin listening, pinyin, vocabulary, grammar, and reading with teacher/advisor speaking review.",
  duration: "35–50 min",
  status: "active",
  accent: "Ready",
};

export const chineseSections: TestSection[] = [
  {
    id: "listening",
    title: "Listening",
    points: 20,
    description:
      "10 questions. Audio is handled through the same web audio player pattern as ESL. Replace the audioUrl values when final audio links are ready.",
  },
  {
    id: "pinyin",
    title: "Pinyin & Tones",
    points: 15,
    description: "10 questions checking basic pinyin recognition and tone awareness.",
  },
  {
    id: "vocabulary",
    title: "Vocabulary & Meaning",
    points: 20,
    description: "15 questions checking core words, meanings, and simple sentence meaning.",
  },
  {
    id: "grammar",
    title: "Sentence / Grammar",
    points: 20,
    description: "15 questions checking basic word order, particles, and sentence patterns.",
  },
  {
    id: "reading",
    title: "Reading",
    points: 15,
    description: "10 questions based on short beginner Mandarin reading passages.",
  },
];

export const chinesePlacementLevels: PlacementLevel[] = [
  {
    label: "Level 0 — Mandarin Starter",
    shortLabel: "L0",
    range: "0–20",
    description:
      "The student is at the beginning stage of Mandarin learning and needs pinyin, tones, greetings, and classroom Chinese.",
    recommendation:
      "Start with Mandarin Starter to build pronunciation, pinyin, tone awareness, numbers, greetings, and simple self-introduction.",
    admissionsNote:
      "Recommended: Mandarin Starter with careful speaking support and parent-friendly review routine.",
  },
  {
    label: "Level 1 — Foundation A",
    shortLabel: "L1",
    range: "21–40",
    description:
      "The student has some early exposure but still needs a stronger pronunciation and basic sentence foundation.",
    recommendation:
      "Start with Foundation A to strengthen pinyin, tones, core vocabulary, basic questions and answers, and short speaking routines.",
    admissionsNote:
      "Recommended: Foundation A with pronunciation bridge and weekly vocabulary review.",
  },
  {
    label: "Level 2 — Foundation B",
    shortLabel: "L2",
    range: "41–60",
    description:
      "The student can understand some short words and sentences and is ready for theme-based communication.",
    recommendation:
      "Start with Foundation B to build short dialogues, sentence expansion, simple reading, and listening for key information.",
    admissionsNote:
      "Recommended: Foundation B with theme-based lessons and teacher speaking checks.",
  },
  {
    label: "Level 3 — Elementary Communication",
    shortLabel: "L3",
    range: "61–80",
    description:
      "The student has a usable beginner foundation and can move into elementary conversations, short reading, and simple writing.",
    recommendation:
      "Start with Elementary Communication to develop dialogues, short paragraphs, reading fluency, and practical language use.",
    admissionsNote:
      "Recommended: Elementary Communication with speaking review before final grouping.",
  },
  {
    label: "Level 3+ / Review Interview Required",
    shortLabel: "L3+",
    range: "81–100",
    description:
      "The student may be ready for accelerated placement, but speaking and pronunciation should be checked before final placement.",
    recommendation:
      "Schedule a teacher/advisor interview to confirm speaking fluency, pronunciation, character recognition, and the best accelerated pathway.",
    admissionsNote:
      "Recommended: review interview before confirming a higher Mandarin class.",
  },
];

export const chineseTeacherReviewPrompts = {
  A: {
    sentenceTitle: "Speaking review pending",
    sentencePrompt:
      "The auto-graded result checks listening, pinyin, vocabulary, grammar, and reading. A teacher/advisor should confirm speaking with the prompts below.",
    paragraphTitle: "Manual speaking score / advisor note",
    paragraphPrompt:
      "Optional: after the speaking call, add the speaking score out of 10 and any pronunciation, tone, or confidence notes.",
    speakingPrompts: [
      "Q1: 你好！你叫什么名字？ Expected: 我叫… / 我的名字是…",
      "Q2: 你几岁？ Expected: 我…岁。",
      "Q3: 你是学生吗？ Expected: 是，我是学生。 / 不是…",
      "Q4: 你喜欢中文吗？为什么？ Expected: 我喜欢中文。/ 我不太会说。/ 因为…",
      "Q5: 请介绍一下你自己。 Expected: name, age, student, likes, school/family/friend.",
    ],
  },
  B: {
    sentenceTitle: "Speaking review pending",
    sentencePrompt:
      "The auto-graded result checks listening, pinyin, vocabulary, grammar, and reading. A teacher/advisor should confirm speaking with the prompts below.",
    paragraphTitle: "Manual speaking score / advisor note",
    paragraphPrompt:
      "Optional: after the speaking call, add the speaking score out of 10 and any pronunciation, tone, or confidence notes.",
    speakingPrompts: [
      "Q1: 你好！你叫什么名字？ Expected: 我叫… / 我的名字是…",
      "Q2: 你几岁？ Expected: 我…岁。",
      "Q3: 你是学生吗？ Expected: 是，我是学生。 / 不是…",
      "Q4: 你喜欢中文吗？为什么？ Expected: 我喜欢中文。/ 我不太会说。/ 因为…",
      "Q5: 请介绍一下你自己。 Expected: name, age, student, likes, school/family/friend.",
    ],
  },
} as const;

export const chinesePlacementQuestions: PlacementQuestion[] = [
  {
    "id": "ch-a01",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q01 and choose the correct meaning.",
    "options": [
      "Goodbye",
      "Hello",
      "Thank you",
      "Sorry"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q01.mp3",
    "audioTitle": "Mandarin Listening Audio Q01",
    "audioRange": "Question 1"
  },
  {
    "id": "ch-a02",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q02 and choose the correct meaning.",
    "options": [
      "My name is An.",
      "I am ten years old.",
      "I like apples.",
      "I go to school."
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q02.mp3",
    "audioTitle": "Mandarin Listening Audio Q02",
    "audioRange": "Question 2"
  },
  {
    "id": "ch-a03",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q03 and choose the correct meaning.",
    "options": [
      "Where are you from?",
      "How old are you?",
      "What is your name?",
      "What do you like?"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q03.mp3",
    "audioTitle": "Mandarin Listening Audio Q03",
    "audioRange": "Question 3"
  },
  {
    "id": "ch-a04",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q04 and choose the correct meaning.",
    "options": [
      "I like Chinese.",
      "I speak English.",
      "I do not like school.",
      "I am Chinese."
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q04.mp3",
    "audioTitle": "Mandarin Listening Audio Q04",
    "audioRange": "Question 4"
  },
  {
    "id": "ch-a05",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q05 and choose the correct meaning.",
    "options": [
      "Today is Monday.",
      "Today is Friday.",
      "Tomorrow is Monday.",
      "Yesterday was Monday."
    ],
    "correctAnswerIndex": 0,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q05.mp3",
    "audioTitle": "Mandarin Listening Audio Q05",
    "audioRange": "Question 5"
  },
  {
    "id": "ch-a06",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q06. What number do you hear?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q06.mp3",
    "audioTitle": "Mandarin Listening Audio Q06",
    "audioRange": "Question 6"
  },
  {
    "id": "ch-a07",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q07. What number do you hear?",
    "options": [
      "10",
      "11",
      "12",
      "20"
    ],
    "correctAnswerIndex": 2,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q07.mp3",
    "audioTitle": "Mandarin Listening Audio Q07",
    "audioRange": "Question 7"
  },
  {
    "id": "ch-a08",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q08. What word do you hear?",
    "options": [
      "Student",
      "Teacher",
      "Friend",
      "Mother"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q08.mp3",
    "audioTitle": "Mandarin Listening Audio Q08",
    "audioRange": "Question 8"
  },
  {
    "id": "ch-a09",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q09. What word do you hear?",
    "options": [
      "Home",
      "School",
      "Book",
      "Class"
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q09.mp3",
    "audioTitle": "Mandarin Listening Audio Q09",
    "audioRange": "Question 9"
  },
  {
    "id": "ch-a10",
    "sectionId": "listening",
    "sectionTitle": "Listening",
    "prompt": "Listen to Audio Q10. What does the speaker want?",
    "options": [
      "The speaker wants to eat.",
      "The speaker wants to drink water.",
      "The speaker wants to sleep.",
      "The speaker wants to study."
    ],
    "correctAnswerIndex": 1,
    "audioUrl": "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/Chinese/placement/audio/mandarin-placement-q10.mp3",
    "audioTitle": "Mandarin Listening Audio Q10",
    "audioRange": "Question 10"
  },
  {
    "id": "ch-b11",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 你.",
    "options": [
      "nǐ",
      "hǎo",
      "wǒ",
      "tā"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-b12",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 好.",
    "options": [
      "hǎo",
      "hào",
      "hé",
      "hē"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-b13",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 学生.",
    "options": [
      "xuésheng",
      "lǎoshī",
      "péngyou",
      "zhōngwén"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-b14",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 中文.",
    "options": [
      "yīngwén",
      "zhōngwén",
      "xuéxiào",
      "jiātíng"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-b15",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 谢谢.",
    "options": [
      "zàijiàn",
      "duìbuqǐ",
      "xièxie",
      "qǐng"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-b16",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Which tone is \"mā\"?",
    "options": [
      "First tone",
      "Second tone",
      "Third tone",
      "Fourth tone"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-b17",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Which tone is \"mǎ\"?",
    "options": [
      "First tone",
      "Second tone",
      "Third tone",
      "Fourth tone"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-b18",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Which word means \"mother\"?",
    "options": [
      "mā",
      "má",
      "mǎ",
      "mà"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-b19",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 我.",
    "options": [
      "wō",
      "wó",
      "wǒ",
      "wò"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-b20",
    "sectionId": "pinyin",
    "sectionTitle": "Pinyin & Tones",
    "prompt": "Choose the correct pinyin for 是.",
    "options": [
      "shī",
      "shí",
      "shǐ",
      "shì"
    ],
    "correctAnswerIndex": 3
  },
  {
    "id": "ch-c21",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 我.",
    "options": [
      "I / me",
      "You",
      "He",
      "We"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c22",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 你.",
    "options": [
      "I",
      "You",
      "He",
      "She"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c23",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 他.",
    "options": [
      "He",
      "She",
      "They",
      "We"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c24",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 老师.",
    "options": [
      "Student",
      "Teacher",
      "Friend",
      "Classmate"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c25",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 学生.",
    "options": [
      "Teacher",
      "Student",
      "School",
      "Family"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c26",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 朋友.",
    "options": [
      "Friend",
      "Book",
      "Water",
      "Food"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c27",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 家.",
    "options": [
      "School",
      "Home / family",
      "Class",
      "Country"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c28",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 水.",
    "options": [
      "Rice",
      "Water",
      "Tea",
      "Milk"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c29",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 书.",
    "options": [
      "Pen",
      "Book",
      "Chair",
      "Bag"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c30",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 喜欢.",
    "options": [
      "To like",
      "To eat",
      "To go",
      "To write"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c31",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 我是学生。",
    "options": [
      "I am a student.",
      "I am a teacher.",
      "I like school.",
      "I have a book."
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c32",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 她是我的朋友。",
    "options": [
      "He is my brother.",
      "She is my friend.",
      "They are my friends.",
      "I am her teacher."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c33",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 我有一本书。",
    "options": [
      "I have one book.",
      "I like one book.",
      "I read a book.",
      "I want a book."
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-c34",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 我不喜欢茶。",
    "options": [
      "I like tea.",
      "I do not like tea.",
      "I drink tea.",
      "I want tea."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-c35",
    "sectionId": "vocabulary",
    "sectionTitle": "Vocabulary & Meaning",
    "prompt": "Choose the correct meaning of 你会说中文吗？",
    "options": [
      "Do you speak Chinese?",
      "Do you like Chinese?",
      "Are you Chinese?",
      "Do you study Chinese?"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d36",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我 ___ 学生。",
    "options": [
      "是",
      "有",
      "喜欢",
      "在"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d37",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 你 ___ 什么名字？",
    "options": [
      "是",
      "叫",
      "有",
      "去"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-d38",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我今年 ___ 岁。",
    "options": [
      "十",
      "是",
      "有",
      "叫"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d39",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 他 ___ 老师。",
    "options": [
      "是",
      "有",
      "不",
      "吗"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d40",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我喜欢 ___ 中文。",
    "options": [
      "学",
      "是",
      "有",
      "叫"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d41",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我 ___ 喜欢咖啡。",
    "options": [
      "不",
      "吗",
      "很",
      "也"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d42",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 你是学生 ___？",
    "options": [
      "不",
      "吗",
      "很",
      "和"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-d43",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我有 ___ 朋友。",
    "options": [
      "一个",
      "是",
      "吗",
      "不"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d44",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 今天 ___ 星期三。",
    "options": [
      "是",
      "有",
      "叫",
      "喜欢"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d45",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the correct word: 我在学校 ___ 中文。",
    "options": [
      "学",
      "是",
      "有",
      "叫"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d46",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the best Chinese sentence for: I am Vietnamese.",
    "options": [
      "我是越南人。",
      "我有越南人。",
      "我喜欢越南人。",
      "我叫越南人。"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d47",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the best Chinese sentence for: She likes Chinese.",
    "options": [
      "她是中文。",
      "她有中文。",
      "她喜欢中文。",
      "她叫中文。"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-d48",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the best Chinese sentence for: Do you have a book?",
    "options": [
      "你是书吗？",
      "你有书吗？",
      "你喜欢书吗？",
      "你叫书吗？"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-d49",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the best Chinese sentence for: I do not drink coffee.",
    "options": [
      "我不喝咖啡。",
      "我是咖啡。",
      "我有咖啡。",
      "我叫咖啡。"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-d50",
    "sectionId": "grammar",
    "sectionTitle": "Sentence / Grammar",
    "prompt": "Choose the best Chinese sentence for: Today I study Chinese at school.",
    "options": [
      "今天我在学校学中文。",
      "今天我是学校中文。",
      "今天我有学校中文。",
      "今天我叫学校中文。"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-e51",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 1: 你好！我叫安。我十岁。我是学生。我在学校学中文。我喜欢中文，也喜欢英语。我的老师很好。我有一个朋友，他叫明。\n\nWhat is the student’s name?",
    "options": [
      "明",
      "安",
      "老师",
      "中文"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-e52",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 1: 你好！我叫安。我十岁。我是学生。我在学校学中文。我喜欢中文，也喜欢英语。我的老师很好。我有一个朋友，他叫明。\n\nHow old is An?",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-e53",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 1: 你好！我叫安。我十岁。我是学生。我在学校学中文。我喜欢中文，也喜欢英语。我的老师很好。我有一个朋友，他叫明。\n\nWhat does An study at school?",
    "options": [
      "Chinese",
      "Math",
      "Music",
      "Art"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-e54",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 1: 你好！我叫安。我十岁。我是学生。我在学校学中文。我喜欢中文，也喜欢英语。我的老师很好。我有一个朋友，他叫明。\n\nWhat languages does An like?",
    "options": [
      "Chinese only",
      "English only",
      "Chinese and English",
      "Vietnamese and Chinese"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-e55",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 1: 你好！我叫安。我十岁。我是学生。我在学校学中文。我喜欢中文，也喜欢英语。我的老师很好。我有一个朋友，他叫明。\n\nWho is Ming?",
    "options": [
      "An’s teacher",
      "An’s friend",
      "An’s brother",
      "An’s father"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-e56",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 2: 今天是星期六。小美不去学校。她在家看书，也听中文歌。下午，她和妈妈去公园。她很开心。\n\nWhat day is today?",
    "options": [
      "Monday",
      "Wednesday",
      "Saturday",
      "Sunday"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": "ch-e57",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 2: 今天是星期六。小美不去学校。她在家看书，也听中文歌。下午，她和妈妈去公园。她很开心。\n\nDoes Xiaomei go to school today?",
    "options": [
      "Yes",
      "No",
      "Not clear",
      "She goes in the afternoon"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-e58",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 2: 今天是星期六。小美不去学校。她在家看书，也听中文歌。下午，她和妈妈去公园。她很开心。\n\nWhat does she do at home?",
    "options": [
      "Reads books and listens to Chinese songs",
      "Eats lunch and sleeps",
      "Studies math",
      "Plays basketball"
    ],
    "correctAnswerIndex": 0
  },
  {
    "id": "ch-e59",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 2: 今天是星期六。小美不去学校。她在家看书，也听中文歌。下午，她和妈妈去公园。她很开心。\n\nWhere does she go in the afternoon?",
    "options": [
      "School",
      "Park",
      "Library",
      "Restaurant"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": "ch-e60",
    "sectionId": "reading",
    "sectionTitle": "Reading",
    "prompt": "Read Passage 2: 今天是星期六。小美不去学校。她在家看书，也听中文歌。下午，她和妈妈去公园。她很开心。\n\nHow does she feel?",
    "options": [
      "Sad",
      "Tired",
      "Happy",
      "Angry"
    ],
    "correctAnswerIndex": 2
  }
];

export const chinesePlacementVersions: Record<"A" | "B", PlacementQuestion[]> = {
  A: chinesePlacementQuestions,
  B: chinesePlacementQuestions,
};
