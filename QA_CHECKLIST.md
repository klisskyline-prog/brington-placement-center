# QA Checklist v4.0

## Build

- [x] `npm install`
- [x] `npm run build`

## ESL preserved logic

- [x] Version A has 70 questions
- [x] Version B has 70 questions
- [x] Sections: Listening 15, Language Use 25, Reading 30 per version
- [x] Random A/B after contact form
- [x] URL override works: `?test=esl&version=A/B`
- [x] Dev auto-fill works in local only
- [x] Reading passage remains paragraph card
- [x] ESL report includes section breakdown, skill profile, priority focus, placement confidence, study estimate

## IELTS active logic

- [x] Version A has 60 questions
- [x] Version B has 60 questions
- [x] Sections: Grammar & Vocabulary 20, Listening 20, Reading 20 per version
- [x] Random A/B after contact form
- [x] URL override works: `?test=ielts&version=A/B`
- [x] IELTS report includes section breakdown, diagnostic summary, priority focus, placement confidence, study estimate
- [x] IELTS audio base is `https://skyline-esl-lessons.klis-skyline.workers.dev/assets/IELTS/placement/audio/`

## Email/API

- [x] Payload keeps `eslReport` for ESL
- [x] Payload keeps `ieltsReport` for IELTS
- [x] Payload also includes generic `moduleReport` for future modules
- [x] Backup JSON works if API is missing
