"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  ANSWER_OPTIONS,
  ASSESSMENT_ANSWERS_STORAGE_KEY,
  ASSESSMENT_RESULT_STORAGE_KEY,
  DOMAINS,
  QUESTIONS,
  TOTAL_QUESTIONS,
  type AnswerLevel,
  type AssessmentAnswers,
  answersAreComplete,
  countAnswered,
  scoreAssessment,
} from "@/lib/assessment";
import { cn } from "@/lib/utils";

type Step = { domainIndex: number };

const STEPS: Step[] = DOMAINS.map((_, idx) => ({ domainIndex: idx }));

export function AssessmentForm() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [showError, setShowError] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(ASSESSMENT_ANSWERS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AssessmentAnswers;
        if (parsed && typeof parsed === "object") {
          setAnswers(parsed);
        }
      }
    } catch {
      // intentional: corrupt session data should not block the form
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(
        ASSESSMENT_ANSWERS_STORAGE_KEY,
        JSON.stringify(answers)
      );
    } catch {
      // intentional: storage may be unavailable in private modes
    }
  }, [answers, hydrated]);

  const currentDomain = DOMAINS[STEPS[stepIndex].domainIndex];
  const currentQuestions = useMemo(
    () => QUESTIONS.filter((q) => q.domainId === currentDomain.id),
    [currentDomain]
  );

  const answeredCount = countAnswered(answers);
  const overallProgress = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  const sectionComplete = currentQuestions.every((q) => Boolean(answers[q.id]));
  const isLastStep = stepIndex === STEPS.length - 1;
  const isFirstStep = stepIndex === 0;

  const setAnswer = (questionId: string, value: AnswerLevel) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowError(false);
  };

  const goNext = () => {
    if (!sectionComplete) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (isLastStep) {
      submit();
      return;
    }
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    scrollToTop();
  };

  const goBack = () => {
    setShowError(false);
    if (isFirstStep) return;
    setStepIndex((i) => Math.max(i - 1, 0));
    scrollToTop();
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const submit = () => {
    if (!answersAreComplete(answers)) {
      setShowError(true);
      const firstIncomplete = STEPS.findIndex((s) => {
        const d = DOMAINS[s.domainIndex];
        return QUESTIONS.filter((q) => q.domainId === d.id).some(
          (q) => !answers[q.id]
        );
      });
      if (firstIncomplete >= 0) {
        setStepIndex(firstIncomplete);
        scrollToTop();
      }
      return;
    }

    const result = scoreAssessment(answers);
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.setItem(
          ASSESSMENT_RESULT_STORAGE_KEY,
          JSON.stringify(result)
        );
      } catch {
        // best effort only
      }
    }
    router.push("/assessment/result");
  };

  return (
    <main id="main" className="bg-soft-section pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div ref={topRef} aria-hidden />
      <div className="container-rw">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Rooted nervous system assessment
          </span>
          <h1 className="mt-5 font-display text-3xl font-medium leading-[1.1] text-deep-forest sm:text-4xl md:text-[2.5rem]">
            A quiet check-in.
            <span className="block text-rooted-green">
              No diagnosis. No pressure.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-pretty text-base leading-relaxed text-charcoal-ink/75 sm:text-lg">
            Twenty short reflections across five nervous system domains. Take a
            slow breath, answer honestly, and a personalised wellness profile
            will be ready at the end.
          </p>
        </header>

        <ProgressBar
          step={stepIndex + 1}
          totalSteps={STEPS.length}
          currentDomainName={currentDomain.name}
          answeredCount={answeredCount}
          progress={overallProgress}
        />

        <StepDots
          stepIndex={stepIndex}
          answers={answers}
          onJump={(idx) => {
            setShowError(false);
            setStepIndex(idx);
            scrollToTop();
          }}
        />

        <motion.section
          key={currentDomain.id}
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="rounded-[2rem] border border-soft-sage/30 bg-ivory/95 p-6 shadow-soft sm:p-8 lg:p-10">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                Section {currentDomain.letter} of E
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium leading-snug text-deep-forest sm:text-3xl">
                {currentDomain.name}
              </h2>
              <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-charcoal-ink/75 sm:text-base">
                {currentDomain.description}
              </p>
            </header>

            <ol
              role="list"
              className="mt-7 space-y-7"
              aria-label={`${currentDomain.name} questions`}
            >
              {currentQuestions.map((q, idx) => (
                <li
                  key={q.id}
                  className="rounded-2xl border border-soft-sage/25 bg-warm-sand/40 p-5 sm:p-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                      Q{idx + 1}
                    </span>
                    <p className="text-base font-medium leading-snug text-deep-forest sm:text-lg">
                      {q.prompt}
                    </p>
                  </div>

                  <fieldset className="mt-5">
                    <legend className="sr-only">
                      How often does this feel true for you?
                    </legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                      {ANSWER_OPTIONS.map((opt) => {
                        const selected = answers[q.id] === opt.id;
                        return (
                          <label
                            key={opt.id}
                            className={cn(
                              "group flex cursor-pointer flex-col items-center gap-1.5 rounded-2xl border px-3 py-3 text-center text-xs font-medium transition-all duration-200",
                              "focus-within:outline focus-within:outline-2 focus-within:outline-rooted-green",
                              selected
                                ? "border-rooted-green/60 bg-rooted-green/10 text-deep-forest shadow-[0_8px_24px_rgba(47,107,79,0.15)]"
                                : "border-soft-sage/30 bg-ivory text-charcoal-ink/80 hover:border-rooted-green/40 hover:bg-warm-sand/70"
                            )}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt.id}
                              checked={selected}
                              onChange={() => setAnswer(q.id, opt.id)}
                              className="sr-only"
                            />
                            <span
                              aria-hidden
                              className={cn(
                                "grid h-7 w-7 place-items-center rounded-full border text-[0.7rem] font-semibold transition-colors",
                                selected
                                  ? "border-rooted-green bg-rooted-green text-ivory"
                                  : "border-soft-sage/60 bg-ivory text-charcoal-ink/60 group-hover:border-rooted-green/60"
                              )}
                            >
                              {selected ? (
                                <Check className="h-3.5 w-3.5" />
                              ) : (
                                String(opt.value)
                              )}
                            </span>
                            <span className="text-[0.78rem] leading-snug sm:text-xs">
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                </li>
              ))}
            </ol>

            {showError && !sectionComplete ? (
              <p
                role="alert"
                className="mt-6 rounded-2xl border border-error/30 bg-[#FBEDEB] px-4 py-3 text-sm text-error"
              >
                Please answer each reflection in this section before continuing.
              </p>
            ) : null}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={isFirstStep}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors",
                  isFirstStep
                    ? "cursor-not-allowed border-soft-sage/30 text-muted-gray"
                    : "border-soft-sage/40 text-deep-forest hover:bg-warm-sand"
                )}
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back
              </button>

              <button
                type="button"
                onClick={goNext}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-6 py-3 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green disabled:cursor-not-allowed disabled:bg-muted-gray"
              >
                {isLastStep ? "See my result" : "Continue"}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-soft-sage/30 bg-ivory/70 p-4 text-xs leading-relaxed text-muted-gray sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-rooted-green" aria-hidden />
              <span>
                Reflections stay in your browser. No account required to see
                your result. Rooted Wellness is educational, not medical care.
              </span>
            </p>
            <Link
              href="/assessment"
              className="self-start text-rooted-green underline-offset-4 hover:underline sm:self-auto"
            >
              What does this measure?
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function ProgressBar({
  step,
  totalSteps,
  currentDomainName,
  answeredCount,
  progress,
}: {
  step: number;
  totalSteps: number;
  currentDomainName: string;
  answeredCount: number;
  progress: number;
}) {
  return (
    <div
      className="mx-auto mt-10 max-w-3xl"
      role="group"
      aria-label="Assessment progress"
    >
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
        <span>
          Section {step} of {totalSteps}
        </span>
        <span>
          {answeredCount}/{TOTAL_QUESTIONS} reflections
        </span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-soft-mist">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-soft-gold via-clay to-rooted-green"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p className="mt-3 text-sm text-charcoal-ink/70">
        Currently exploring{" "}
        <span className="font-semibold text-deep-forest">
          {currentDomainName.toLowerCase()}
        </span>
        .
      </p>
    </div>
  );
}

function StepDots({
  stepIndex,
  answers,
  onJump,
}: {
  stepIndex: number;
  answers: AssessmentAnswers;
  onJump: (idx: number) => void;
}) {
  return (
    <ol
      role="list"
      aria-label="Sections"
      className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-2"
    >
      {DOMAINS.map((d, idx) => {
        const questionsInDomain = QUESTIONS.filter((q) => q.domainId === d.id);
        const completed = questionsInDomain.every((q) => Boolean(answers[q.id]));
        const active = idx === stepIndex;
        const reachable =
          idx <= stepIndex ||
          DOMAINS.slice(0, idx).every((dom) =>
            QUESTIONS.filter((q) => q.domainId === dom.id).every((q) =>
              Boolean(answers[q.id])
            )
          );
        return (
          <li key={d.id}>
            <button
              type="button"
              onClick={() => (reachable ? onJump(idx) : undefined)}
              disabled={!reachable}
              aria-current={active ? "step" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "border-rooted-green bg-rooted-green/10 text-deep-forest"
                  : completed
                    ? "border-rooted-green/40 bg-ivory text-deep-forest hover:bg-warm-sand"
                    : reachable
                      ? "border-soft-sage/40 bg-ivory text-charcoal-ink/70 hover:bg-warm-sand"
                      : "cursor-not-allowed border-soft-sage/25 bg-ivory/60 text-muted-gray"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "grid h-5 w-5 place-items-center rounded-full text-[0.65rem] font-semibold",
                  active
                    ? "bg-rooted-green text-ivory"
                    : completed
                      ? "bg-rooted-green/15 text-rooted-green"
                      : "bg-soft-mist text-muted-gray"
                )}
              >
                {completed ? <Check className="h-3 w-3" /> : d.letter}
              </span>
              <span className="hidden sm:inline">{d.name}</span>
              <span className="sm:hidden">{d.letter}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
