import type { PlacementSubmissionPayload } from "../types";

const apiUrl = import.meta.env.VITE_PLACEMENT_API_URL as string | undefined;

export async function submitPlacement(payload: PlacementSubmissionPayload) {
  if (!apiUrl) {
    return {
      ok: false,
      mode: "no_api" as const,
      message: "No API endpoint configured. Add VITE_PLACEMENT_API_URL to .env to send submissions automatically.",
    };
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || "Placement submission failed.");
  }

  return { ok: true, mode: "api" as const, message: "Submission sent successfully." };
}

function formatReport(report: any) {
  if (!report) return [];
  const sectionLines = Array.isArray(report.sectionDiagnostics)
    ? report.sectionDiagnostics.map((section: any) => `- ${section.title}: ${section.correct}/${section.total} (${section.percent}%) — ${section.label}\n  ${section.comment}`)
    : [];
  const priorityLines = Array.isArray(report.priorityFocus)
    ? report.priorityFocus.map((focus: any, index: number) => `${index + 1}. ${focus.title}: ${focus.reason}`)
    : [];
  const studyEstimate = report.studyEstimate;
  const studyEstimateLines = studyEstimate
    ? [
        `Current estimated hours: ${studyEstimate.currentHours}h`,
        `Target cumulative hours: ${studyEstimate.targetHours}h`,
        `Required study hours with buffer: ${studyEstimate.requiredHours}h`,
        `Study days/week: ${studyEstimate.studyDaysPerWeek}`,
        `Available study days: ${studyEstimate.availableStudyDays}`,
        `Estimated daily study load: ${studyEstimate.dailyHours}h/day`,
        `Feasibility: ${studyEstimate.feasibility}`,
        `Note: ${studyEstimate.note}`,
      ]
    : [];

  return [
    ...(sectionLines.length ? ["", "SECTION BREAKDOWN", ...sectionLines] : []),
    ...(report.skillProfile ? ["", "SKILL PROFILE", report.skillProfile] : []),
    ...(priorityLines.length ? ["", "PRIORITY FOCUS", ...priorityLines] : []),
    ...(report.placementConfidence ? ["", "PLACEMENT CONFIDENCE", `${report.placementConfidence.label}: ${report.placementConfidence.reason}`] : []),
    ...(studyEstimateLines.length ? ["", "STUDY TIME ESTIMATE", ...studyEstimateLines] : []),
  ];
}

export function buildTeacherEmailText(payload: PlacementSubmissionPayload) {
  const { contact, teacherReview, test, score } = payload;
  const moduleReport = (payload as any).moduleReport ?? (payload as any).eslReport ?? (payload as any).ieltsReport;
  const fallbackSectionLines = score?.sectionScores.map((section) => `- ${section.title}: ${section.correct}/${section.total} (${section.percent}%)`) ?? [];
  const reportLines = formatReport(moduleReport);

  return [
    "NEW PLACEMENT CENTER SUBMISSION",
    "",
    `Submitted at: ${payload.submittedAt}`,
    `Source: ${payload.source}`,
    "",
    "TEST INFORMATION",
    `Test type: ${test.title}`,
    test.version ? `Assigned version: ${test.version}` : "Assigned version: N/A",
    `Mode: ${test.status === "active" ? "Auto-grade + teacher review" : "Advisor intake / teacher review"}`,
    "",
    "CONTACT INFORMATION",
    `Student name: ${contact.studentName}`,
    `Parent name: ${contact.parentName}`,
    `Grade level: ${contact.gradeLevel || "(empty)"}`,
    `Student age: ${contact.studentAge || "(empty)"}`,
    `Zalo phone: ${contact.zaloPhone || "(empty)"}`,
    `Email: ${contact.email || "(empty)"}`,
    `Program interest: ${contact.programInterest}`,
    `Preferred contact: ${contact.preferredContact}`,
    `Target level: ${contact.targetLevel || "(empty)"}`,
    `Target date: ${contact.targetDate || "(empty)"}`,
    `Study days/week: ${contact.studyDaysPerWeek || "(empty)"}`,
    "",
    "AUTO-GRADED RESULT",
    score ? `MCQ score: ${score.correct}/${score.total} (${score.percent}%)` : "MCQ score: N/A",
    score ? `Estimated 100-point scale: ${score.estimatedTotalScale}/100` : "Estimated 100-point scale: N/A",
    score ? `Preliminary level: ${score.level.label}` : "Preliminary level: N/A",
    ...(reportLines.length ? reportLines : fallbackSectionLines.length ? ["", "SECTION BREAKDOWN", ...fallbackSectionLines] : []),
    "",
    "TEACHER REVIEW SECTION",
    `Sentence / Task 1 writing:\n${teacherReview.sentenceWriting || "(empty)"}`,
    "",
    `Paragraph / Task 2 writing:\n${teacherReview.paragraphWriting || "(empty)"}`,
    "",
    `Speaking availability: ${teacherReview.speakingAvailability || "(empty)"}`,
    `Student/parent notes: ${teacherReview.notes || "(empty)"}`,
    "",
    "Follow-up note: Writing/speaking review should be completed within 2 days and sent to the family by Zalo or Gmail.",
  ].join("\n");
}
