import { FormEvent, useMemo, useState } from "react";
import { BackgroundDecor } from "../components/BackgroundDecor";
import { PlacementHeroBanner } from "../components/PlacementHeroBanner";
import { TopBar } from "../components/TopBar";
import { StepIndicator, getStepOrder } from "../components/StepIndicator";
import { ContactPage } from "../pages/ContactPage";
import { IntroPage } from "../pages/IntroPage";
import { ResultPage } from "../pages/ResultPage";
import { ReviewPage } from "../pages/ReviewPage";
import { SelectTestPage } from "../pages/SelectTestPage";
import { TestPage } from "../pages/TestPage";
import { getPlacementModule } from "../modules/registry";
import type {
  AnswerMap,
  ContactInfo,
  Step,
  TeacherReview,
  TestId,
  TestVersion,
} from "../types";
import { calculateScore, getMissingQuestionIds } from "../utils/scoring";
import { resolveK12GradeBand } from "../modules/k12/report";
import {
  getInitialTestId,
  getRandomVersion,
  getVersionOverride,
} from "../utils/navigation";
import {
  buildTeacherEmailText,
  submitPlacement,
} from "../services/submitPlacement";

const initialContact: ContactInfo = {
  studentName: "",
  parentName: "",
  gradeLevel: "",
  studentAge: "",
  zaloPhone: "",
  email: "",
  programInterest: "",
  preferredContact: "Zalo",
  targetLevel: "A2 Core",
  targetDate: "",
  studyDaysPerWeek: "5",
};

const initialTeacherReview: TeacherReview = {
  sentenceWriting: "",
  paragraphWriting: "",
  speakingAvailability: "",
  notes: "",
};

export function PlacementCenterApp() {
  const initialTestId = getInitialTestId();
  const initialModule = getPlacementModule(initialTestId);

  const [step, setStep] = useState<Step>(initialTestId ? "contact" : "intro");
  const [selectedTestId, setSelectedTestId] = useState<TestId | "">(
    initialTestId,
  );
  const [assignedVersion, setAssignedVersion] = useState<TestVersion | null>(
    getVersionOverride(),
  );
  const [contact, setContact] = useState<ContactInfo>({
    ...initialContact,
    programInterest: initialModule?.card.title ?? "",
    targetLevel:
      initialModule?.defaultTargetLevel ?? initialContact.targetLevel,
  });
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [teacherReview, setTeacherReview] =
    useState<TeacherReview>(initialTeacherReview);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "sent" | "no_api" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const module = getPlacementModule(selectedTestId);
  const isAutoGradeActive = module?.mode === "auto_grade";
  const activeVersion = assignedVersion ?? "A";
  const questions = useMemo(
    () =>
      module?.getQuestions
        ? module.getQuestions(activeVersion, { answers, contact })
        : [],
    [activeVersion, answers, contact, module],
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;
  const score = useMemo(() => {
    return questions.length && module
      ? calculateScore(questions, answers, module.id)
      : undefined;
  }, [answers, module, questions]);
  const report = useMemo(() => {
    return score && module?.buildReport
      ? module.buildReport({
          score,
          contact,
          version: activeVersion,
          answers,
          teacherReview,
        })
      : undefined;
  }, [activeVersion, answers, contact, module, score, teacherReview]);

  const answeredCount = questions.filter(
    (question) =>
      answers[question.id] !== undefined &&
      String(answers[question.id]).trim() !== "",
  ).length;
  const progressPercent = questions.length
    ? Math.round((answeredCount / questions.length) * 100)
    : 0;
  const shouldSkipReview = module?.reviewMode === "none";
  const activeStepOrder = getStepOrder(shouldSkipReview);
  const activeStepIndex = activeStepOrder.indexOf(step);
  const promptSet =
    module?.teacherReviewPrompts[activeVersion] ??
    module?.teacherReviewPrompts.A;
  const paragraphWordCount = teacherReview.paragraphWriting.trim()
    ? teacherReview.paragraphWriting.trim().split(/\s+/).length
    : 0;

  function scrollToWorkspace() {
    requestAnimationFrame(() => {
      document.getElementById("placement-workspace")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function goToStep(nextStep: Step) {
    setStep(nextStep);
    scrollToWorkspace();
  }

  function goBackStep() {
    if (activeStepIndex <= 0) return;
    setSubmitMessage("");
    const previousStep = activeStepOrder[activeStepIndex - 1];
    if (previousStep === "test" && !isAutoGradeActive) {
      goToStep("contact");
      return;
    }
    goToStep(previousStep);
  }

  function selectTest(testId: TestId) {
    const nextModule = getPlacementModule(testId);
    setSelectedTestId(testId);
    setContact((current) => ({
      ...current,
      programInterest: nextModule?.card.title ?? "",
      targetLevel: nextModule?.defaultTargetLevel ?? current.targetLevel,
    }));
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTeacherReview(initialTeacherReview);
    setSubmitMessage("");
    setSubmitStatus("idle");
    setAssignedVersion(
      nextModule?.mode === "auto_grade" ? getVersionOverride() : null,
    );
    goToStep("contact");
  }

  function updateContact<K extends keyof ContactInfo>(
    key: K,
    value: ContactInfo[K],
  ) {
    setContact((current) => ({ ...current, [key]: value }));
  }

  function updateReview<K extends keyof TeacherReview>(
    key: K,
    value: TeacherReview[K],
  ) {
    setTeacherReview((current) => ({ ...current, [key]: value }));
  }

  function validateContact() {
    if (!module) return "Please select a placement test first.";
    if (!contact.studentName.trim()) return "Please enter the student's name.";
    if (!contact.parentName.trim())
      return "Please enter the parent/guardian name.";
    if (!contact.gradeLevel.trim() && !contact.studentAge.trim())
      return "Please enter the student's grade or age.";
    if (!contact.zaloPhone.trim() && !contact.email.trim())
      return "Please enter at least Zalo phone or Gmail/email.";
    if (contact.email && !/^\S+@\S+\.\S+$/.test(contact.email))
      return "Please enter a valid email address.";
    return "";
  }

  function handleContactSubmit(event: FormEvent) {
    event.preventDefault();
    const error = validateContact();
    if (error) {
      setSubmitMessage(error);
      return;
    }
    setSubmitMessage("");
    if (module?.id === "diploma" && resolveK12GradeBand(contact) === "g1_2") {
      setAnswers({});
      setCurrentQuestionIndex(0);
      goToStep("review");
      return;
    }
    if (module?.mode === "auto_grade") {
      const version = getVersionOverride() ?? getRandomVersion();
      setAssignedVersion(version);
      setAnswers({});
      setCurrentQuestionIndex(0);
      goToStep("test");
      return;
    }
    goToStep("review");
  }

  function handleAnswer(questionId: string, answer: number | string) {
    setAnswers((current) => ({ ...current, [questionId]: answer }));
  }

  function autoFillTest(mode: "correct" | "random" = "correct") {
    const generatedAnswers: AnswerMap = {};
    questions.forEach((question) => {
      if (question.questionType === "text") {
        generatedAnswers[question.id] =
          question.correctTextAnswers?.[0] ?? "test";
        return;
      }
      generatedAnswers[question.id] =
        mode === "correct"
          ? (question.correctAnswerIndex ?? 0)
          : Math.floor(Math.random() * (question.options?.length || 1));
    });
    setAnswers(generatedAnswers);
    setCurrentQuestionIndex(Math.max(0, questions.length - 1));
    setSubmitMessage(
      mode === "correct"
        ? "Dev tool: all questions were auto-filled with correct answers."
        : "Dev tool: all questions were auto-filled with random answers.",
    );
  }

  function handleQuestionMove(
    nextIndex: number,
    options?: { source?: "button" | "map" },
  ) {
    if (nextIndex < 0 || nextIndex >= questions.length) return;

    setCurrentQuestionIndex(nextIndex);
    setSubmitMessage("");

    // Keep question navigation stable. Only a direct click on the question map
    // moves the viewport back to the question panel; Next/Previous stays in place.
    if (options?.source === "map") {
      requestAnimationFrame(() => {
        document.getElementById("question-panel")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  function goToReview() {
    const missing = getMissingQuestionIds(questions, answers);
    if (missing.length > 0) {
      const firstMissingIndex = questions.findIndex(
        (question) => question.id === missing[0],
      );
      if (firstMissingIndex >= 0) setCurrentQuestionIndex(firstMissingIndex);
      const missingNumbers = missing
        .map((id) => questions.findIndex((question) => question.id === id) + 1)
        .filter((number) => number > 0)
        .join(", ");
      setSubmitMessage(
        `Please answer all questions first. Missing questions: ${missingNumbers}`,
      );
      return;
    }
    setSubmitMessage("");

    if (module?.reviewMode === "none") {
      void finishTest();
      return;
    }

    goToStep("review");
  }

  function buildPayload() {
    return {
      test: {
        id: module?.id ?? "esl",
        title: module?.card.title ?? "ESL Placement",
        status: module?.card.status ?? "active",
        version: isAutoGradeActive ? activeVersion : undefined,
      },
      contact,
      answers,
      score,
      moduleReport: report,
      eslReport: module?.id === "esl" ? report : undefined,
      ieltsReport: module?.id === "ielts" ? report : undefined,
      satReport: module?.id === "sat" ? report : undefined,
      chineseReport: module?.id === "chinese" ? report : undefined,
      k12Report: module?.id === "diploma" ? report : undefined,
      teacherReview,
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    };
  }

  async function finishTest() {
    const payload = buildPayload();
    setSubmitStatus("sending");
    setSubmitMessage("Sending placement information to the academic team...");
    try {
      const result = await submitPlacement(payload);
      if (result.ok) {
        setSubmitStatus("sent");
        setSubmitMessage(
          "Your placement information has been submitted to the academic team.",
        );
      } else {
        setSubmitStatus("no_api");
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Could not send placement result.",
      );
    }
    goToStep("result");
  }

  function downloadBackup() {
    const blob = new Blob([JSON.stringify(buildPayload(), null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `placement-center-${contact.studentName || "student"}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function openEmailDraft() {
    const subject = encodeURIComponent(
      `Placement Center Result - ${contact.studentName}`,
    );
    const body = encodeURIComponent(buildTeacherEmailText(buildPayload()));
    window.location.href = `mailto:teacher@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="app-shell">
      <BackgroundDecor />
      <TopBar />
      <main id="top" className="main-layout">
        <section className="stage-panel">
          <PlacementHeroBanner />
          <StepIndicator
            activeStepIndex={activeStepIndex}
            onBack={goBackStep}
            skipReview={shouldSkipReview}
          />
          <div id="placement-workspace" className="placement-workspace-anchor" />
          {step === "intro" && <IntroPage onStart={() => goToStep("select")} />}
          {step === "select" && (
            <SelectTestPage
              selectedTestId={selectedTestId}
              onSelect={selectTest}
            />
          )}
          {step === "contact" && module && (
            <ContactPage
              contact={contact}
              module={module}
              submitMessage={submitMessage}
              onSelectAnother={() => goToStep("select")}
              onSubmit={handleContactSubmit}
              onUpdate={updateContact}
            />
          )}
          {step === "test" && module && currentQuestion && (
            <TestPage
              answers={answers}
              currentAnswer={currentAnswer}
              currentQuestionIndex={currentQuestionIndex}
              progressPercent={progressPercent}
              questions={questions}
              sections={module.sections}
              submitMessage={submitMessage}
              selectedTestTitle={module.card.title}
              showDevTools={import.meta.env.DEV}
              onAnswer={handleAnswer}
              onAutoFillTest={autoFillTest}
              onJump={handleQuestionMove}
              onNext={() =>
                handleQuestionMove(currentQuestionIndex + 1, {
                  source: "button",
                })
              }
              onPrevious={() =>
                handleQuestionMove(currentQuestionIndex - 1, {
                  source: "button",
                })
              }
              onSubmitSection={goToReview}
            />
          )}
          {step === "review" && module && promptSet && (
            <ReviewPage
              module={module}
              promptSet={promptSet}
              teacherReview={teacherReview}
              submitStatus={submitStatus}
              paragraphWordCount={paragraphWordCount}
              onSubmit={finishTest}
              onUpdate={updateReview}
            />
          )}
          {step === "result" && module && (
            <ResultPage
              module={module}
              contact={contact}
              score={score}
              report={report}
              submitMessage={submitMessage}
              submitStatus={submitStatus}
              onDownloadBackup={downloadBackup}
              onEmailDraft={openEmailDraft}
            />
          )}
        </section>
      </main>
    </div>
  );
}
