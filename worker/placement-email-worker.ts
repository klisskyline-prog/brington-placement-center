export interface Env {
  RESEND_API_KEY: string;
  TEACHER_EMAIL: string;
  FROM_EMAIL: string;
  ALLOWED_ORIGIN?: string;
}

function corsHeaders(env: Env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildSectionScoreHtml(score: any) {
  const sections = Array.isArray(score?.sectionScores) ? score.sectionScores : [];
  if (!sections.length) return "";
  return `
    <h3>Section Breakdown</h3>
    <ul>
      ${sections.map((section: any) => `<li><strong>${escapeHtml(section.title)}:</strong> ${escapeHtml(section.correct)}/${escapeHtml(section.total)} (${escapeHtml(section.percent)}%)</li>`).join("")}
    </ul>
  `;
}

function buildHtml(payload: any) {
  const test = payload.test || {};
  const contact = payload.contact || {};
  const score = payload.score || null;
  const level = score?.level || {};
  const review = payload.teacherReview || {};
  const answers = payload.answers || {};

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#152033">
      <h2>New Placement Center Submission</h2>
      <p><strong>Submitted at:</strong> ${escapeHtml(payload.submittedAt)}</p>
      <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>

      <h3>Test Information</h3>
      <ul>
        <li><strong>Test type:</strong> ${escapeHtml(test.title)}</li>
        <li><strong>Assigned version:</strong> ${escapeHtml(test.version || "N/A")}</li>
        <li><strong>Mode:</strong> ${escapeHtml(test.status === "active" ? "Auto-grade + teacher review" : "Advisor intake / teacher review")}</li>
      </ul>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>Student:</strong> ${escapeHtml(contact.studentName)}</li>
        <li><strong>Parent/Guardian:</strong> ${escapeHtml(contact.parentName)}</li>
        <li><strong>Grade:</strong> ${escapeHtml(contact.gradeLevel)}</li>
        <li><strong>Age:</strong> ${escapeHtml(contact.studentAge)}</li>
        <li><strong>Zalo:</strong> ${escapeHtml(contact.zaloPhone)}</li>
        <li><strong>Email:</strong> ${escapeHtml(contact.email)}</li>
        <li><strong>Program:</strong> ${escapeHtml(contact.programInterest)}</li>
        <li><strong>Preferred contact:</strong> ${escapeHtml(contact.preferredContact)}</li>
      </ul>

      <h3>Auto-Graded Result</h3>
      ${score ? `
        <ul>
          <li><strong>MCQ score:</strong> ${escapeHtml(score.correct)}/${escapeHtml(score.total)} (${escapeHtml(score.percent)}%)</li>
          <li><strong>Estimated 100-point scale:</strong> ${escapeHtml(score.estimatedTotalScale)}/100</li>
          <li><strong>Preliminary level:</strong> ${escapeHtml(level.label)}</li>
          <li><strong>Band range:</strong> ${escapeHtml(level.range)}</li>
          <li><strong>Recommendation:</strong> ${escapeHtml(level.recommendation)}</li>
        </ul>
        ${buildSectionScoreHtml(score)}
      ` : `<p>No MCQ score for this intake-only pathway.</p>`}

      <h3>Teacher Review</h3>
      <p><strong>Sentence writing / goal:</strong></p>
      <pre style="white-space:pre-wrap;background:#f5f7fb;padding:12px;border-radius:8px">${escapeHtml(review.sentenceWriting)}</pre>
      <p><strong>Paragraph writing / academic notes:</strong></p>
      <pre style="white-space:pre-wrap;background:#f5f7fb;padding:12px;border-radius:8px">${escapeHtml(review.paragraphWriting)}</pre>
      <p><strong>Speaking availability:</strong> ${escapeHtml(review.speakingAvailability)}</p>
      <p><strong>Notes:</strong> ${escapeHtml(review.notes)}</p>

      <h3>Raw MCQ Answers</h3>
      <pre style="white-space:pre-wrap;background:#f5f7fb;padding:12px;border-radius:8px">${escapeHtml(JSON.stringify(answers, null, 2))}</pre>

      <p style="margin-top:24px;color:#647084">
        Action required: Review writing/speaking or advisor notes and contact the family within 2 days by Zalo or Gmail.
      </p>
    </div>
  `;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(env) });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders(env) });
    }

    try {
      const payload = await request.json();
      const studentName = payload?.contact?.studentName || "Unknown Student";
      const testTitle = payload?.test?.title || "Placement Center";
      const version = payload?.test?.version ? ` - Version ${payload.test.version}` : "";
      const parentEmail = payload?.contact?.email;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: env.FROM_EMAIL,
          to: [env.TEACHER_EMAIL],
          reply_to: parentEmail ? parentEmail : undefined,
          subject: `${testTitle}${version} - ${studentName}`,
          html: buildHtml(payload)
        })
      });

      if (!emailResponse.ok) {
        const text = await emailResponse.text();
        return new Response(text || "Email provider error", { status: 502, headers: corsHeaders(env) });
      }

      return Response.json({ ok: true }, { headers: corsHeaders(env) });
    } catch (error) {
      return new Response(error instanceof Error ? error.message : "Invalid request", { status: 400, headers: corsHeaders(env) });
    }
  }
};
