"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Compass,
  HeartPulse,
  Leaf,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  ASSESSMENT_ANSWERS_STORAGE_KEY,
  ASSESSMENT_RESULT_STORAGE_KEY,
  type AssessmentResult,
  type DomainResult,
  type ProfileTier,
} from "@/lib/assessment";
import { cn } from "@/lib/utils";

const PROFILE_ACCENT: Record<
  ProfileTier,
  { dot: string; ring: string; chip: string; gradient: string }
> = {
  "well-resourced": {
    dot: "bg-rooted-green",
    ring: "stroke-rooted-green",
    chip: "border-rooted-green/40 bg-rooted-green/10 text-rooted-green",
    gradient: "from-soft-sage/30 via-ivory to-warm-sand",
  },
  "early-load": {
    dot: "bg-soft-gold",
    ring: "stroke-soft-gold-deep",
    chip: "border-soft-gold/50 bg-soft-gold/10 text-soft-gold-deep",
    gradient: "from-warm-sand via-ivory to-soft-mist",
  },
  elevated: {
    dot: "bg-clay",
    ring: "stroke-clay",
    chip: "border-clay/40 bg-clay/10 text-clay",
    gradient: "from-warm-sand via-ivory to-warm-sand",
  },
  "high-load": {
    dot: "bg-error",
    ring: "stroke-error",
    chip: "border-error/40 bg-[#FBEDEB] text-error",
    gradient: "from-[#F8EAE6] via-ivory to-warm-sand",
  },
};

const DOMAIN_ICONS: Record<string, typeof HeartPulse> = {
  stressLoad: HeartPulse,
  activation: Sparkles,
  emotionalFatigue: Leaf,
  cognitiveStrain: Compass,
  physicalExhaustion: ShieldCheck,
};

export function AssessmentResult() {
  const reduce = useReducedMotion();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.sessionStorage.getItem(ASSESSMENT_RESULT_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AssessmentResult;
        if (parsed && typeof parsed === "object" && Array.isArray(parsed.domains)) {
          setResult(parsed);
        }
      }
    } catch {
      // intentional: corrupt data is ignored, empty state will render
    }
    setHydrated(true);
  }, []);

  const handleRetake = () => {
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.removeItem(ASSESSMENT_RESULT_STORAGE_KEY);
        window.sessionStorage.removeItem(ASSESSMENT_ANSWERS_STORAGE_KEY);
      } catch {
        // best effort
      }
    }
  };

  if (!hydrated) {
    return <ResultSkeleton />;
  }

  if (!result) {
    return <EmptyState />;
  }

  const accent = PROFILE_ACCENT[result.profile.tier];

  return (
    <main id="main" className="bg-soft-section pb-24 pt-8 sm:pb-32 sm:pt-12">
      <div className="container-rw">
        <header className="mx-auto max-w-3xl text-center">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
              accent.chip
            )}
          >
            <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", accent.dot)} />
            Your nervous system profile
          </span>
          <h1 className="mt-5 font-display text-3xl font-medium leading-[1.1] text-deep-forest sm:text-4xl md:text-[2.6rem]">
            {result.profile.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-pretty text-base leading-relaxed text-charcoal-ink/75 sm:text-lg">
            {result.profile.description}
          </p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-[2rem] border border-soft-sage/30 bg-gradient-to-br p-6 shadow-soft sm:p-10",
              accent.gradient
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.35),transparent_60%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.3),transparent_60%)]"
            />

            <div className="relative grid items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
              <ProfileRing
                percent={result.totalPercent}
                ringClass={accent.ring}
                label={result.profile.label}
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                  Overall load
                </p>
                <p className="mt-2 font-display text-2xl font-medium leading-snug text-deep-forest sm:text-3xl">
                  {result.profile.label}
                </p>
                <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed text-charcoal-ink/80 sm:text-base">
                  {result.profile.reassurance}
                </p>
                <p className="mt-5 text-xs leading-relaxed text-muted-gray">
                  Total reflection score: {result.totalScore} of {result.maxScore} ·{" "}
                  {result.totalPercent}% intensity. Wellness framing only, not a
                  diagnosis.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <section
          aria-labelledby="domain-heading"
          className="mx-auto mt-12 max-w-5xl sm:mt-14"
        >
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
              Domain breakdown
            </p>
            <h2
              id="domain-heading"
              className="mt-3 font-display text-2xl font-medium text-deep-forest sm:text-3xl"
            >
              Where the load is sitting today.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-ink/75 sm:text-base">
              Higher percentages signal where your nervous system is asking for
              attention. Lower percentages show where you still have capacity to
              draw from.
            </p>
          </header>

          <ul role="list" className="mt-8 grid gap-4 sm:grid-cols-2">
            {result.domains.map((d) => (
              <DomainCard key={d.domain.id} domain={d} />
            ))}
          </ul>
        </section>

        {result.topQuestions.length > 0 ? (
          <section
            aria-labelledby="signals-heading"
            className="mx-auto mt-14 max-w-4xl"
          >
            <div className="rounded-[2rem] border border-soft-sage/30 bg-ivory p-6 shadow-soft sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                Strongest signals
              </p>
              <h2
                id="signals-heading"
                className="mt-3 font-display text-2xl font-medium leading-snug text-deep-forest sm:text-3xl"
              >
                These were loudest in your reflections.
              </h2>
              <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
                {result.topQuestions.map((q, idx) => (
                  <li
                    key={`${q.prompt}-${idx}`}
                    className="rounded-2xl border border-soft-sage/30 bg-warm-sand/40 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rooted-green">
                      {q.domain}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-snug text-deep-forest sm:text-base">
                      {q.prompt}
                    </p>
                    <p className="mt-2 text-xs font-medium text-muted-gray">
                      You answered: {q.label.toLowerCase()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section
          aria-labelledby="next-heading"
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-soft-gold/30 bg-deep-forest p-6 text-ivory shadow-soft sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.22),transparent_60%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.15),transparent_60%)]"
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold/90">
                Your next gentle step
              </p>
              <h2
                id="next-heading"
                className="mt-3 font-display text-2xl font-medium leading-snug text-ivory sm:text-3xl"
              >
                A quiet, supported way forward.
              </h2>

              <ul role="list" className="mt-6 grid gap-3 sm:grid-cols-1">
                {result.nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-2xl border border-ivory/15 bg-ivory/5 p-4 backdrop-blur"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-soft-gold/20 text-soft-gold"
                    >
                      <Leaf className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-relaxed text-ivory/85 sm:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/sign-up"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-soft-gold px-6 py-3.5 text-sm font-semibold text-deep-forest shadow-[0_10px_30px_rgba(216,183,106,0.35)] transition-all hover:bg-[#E6C77A]"
                >
                  Create my account
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/30-day-high-performance-reset"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-6 py-3.5 text-sm font-semibold text-ivory backdrop-blur transition-colors hover:bg-ivory/10"
                >
                  Explore the 30-Day Reset
                </Link>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ivory/70">
                Rooted Wellness is a wellness and educational platform. It does
                not provide medical diagnosis, treatment, therapy, or emergency
                care. If you feel unsafe or unwell, please contact a qualified
                professional.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-3 rounded-2xl border border-soft-sage/30 bg-ivory/70 p-4 text-xs leading-relaxed text-muted-gray sm:flex-row">
          <p>
            Reflections stay in your browser session only. Closing this tab will
            clear your profile.
          </p>
          <Link
            href="/assessment/start"
            onClick={handleRetake}
            className="inline-flex items-center gap-2 rounded-full border border-soft-sage/40 bg-ivory px-4 py-2 font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
          >
            <RefreshCw className="h-3.5 w-3.5" aria-hidden />
            Retake the assessment
          </Link>
        </div>
      </div>
    </main>
  );
}

function ProfileRing({
  percent,
  ringClass,
  label,
}: {
  percent: number;
  ringClass: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      className="relative mx-auto h-40 w-40 sm:mx-0"
      role="img"
      aria-label={`${label}, ${percent}% nervous system load`}
    >
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#EEF3ED"
          strokeWidth="10"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          className={ringClass}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: (1 - percent / 100) * circumference,
          }}
          transition={{
            duration: reduce ? 0 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-3xl font-semibold text-deep-forest">
            {percent}%
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-gray">
            Load
          </p>
        </div>
      </div>
    </div>
  );
}

function DomainCard({ domain }: { domain: DomainResult }) {
  const Icon = DOMAIN_ICONS[domain.domain.id] ?? HeartPulse;
  const tierLabel: Record<DomainResult["tier"], string> = {
    low: "Resourced",
    mild: "Mild signal",
    moderate: "Moderate load",
    high: "High load",
  };
  const tierAccent: Record<DomainResult["tier"], string> = {
    low: "border-rooted-green/40 bg-rooted-green/10 text-rooted-green",
    mild: "border-soft-gold/40 bg-soft-gold/10 text-soft-gold-deep",
    moderate: "border-clay/40 bg-clay/10 text-clay",
    high: "border-error/30 bg-[#FBEDEB] text-error",
  };
  const barColor: Record<DomainResult["tier"], string> = {
    low: "from-rooted-green to-soft-sage",
    mild: "from-soft-gold to-clay",
    moderate: "from-clay to-soft-gold-deep",
    high: "from-error to-clay",
  };

  return (
    <li className="rounded-2xl border border-soft-sage/30 bg-ivory p-5 shadow-soft sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-warm-sand text-rooted-green"
          >
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-gray">
              Section {domain.domain.letter}
            </p>
            <h3 className="mt-1 font-display text-lg font-medium leading-snug text-deep-forest sm:text-xl">
              {domain.domain.name}
            </h3>
          </div>
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
            tierAccent[domain.tier]
          )}
        >
          {tierLabel[domain.tier]}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-muted-gray">
          <span>{domain.score} / {domain.max}</span>
          <span>{domain.percent}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-soft-mist">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${domain.percent}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "h-full rounded-full bg-gradient-to-r",
              barColor[domain.tier]
            )}
          />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-charcoal-ink/80">
        {domain.insight}
      </p>
    </li>
  );
}

function EmptyState() {
  return (
    <main id="main" className="bg-soft-section py-20 sm:py-28">
      <div className="container-rw">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-soft-sage/30 bg-ivory p-8 text-center shadow-soft sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            No result yet
          </span>
          <h1 className="mt-5 font-display text-2xl font-medium leading-snug text-deep-forest sm:text-3xl">
            Your nervous system profile is not ready yet.
          </h1>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-charcoal-ink/75 sm:text-base">
            Take the short, reflective assessment and a personalised wellness
            profile will appear here. It only takes a few minutes.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/assessment/start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-6 py-3 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
            >
              Start the assessment
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-6 py-3 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
            >
              Learn what it measures
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function ResultSkeleton() {
  return (
    <main id="main" className="bg-soft-section py-20">
      <div className="container-rw">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto h-7 w-56 animate-pulse rounded-full bg-soft-mist" />
          <div className="mx-auto mt-5 h-10 w-3/4 animate-pulse rounded-2xl bg-soft-mist" />
          <div className="mx-auto mt-3 h-4 w-full animate-pulse rounded-full bg-soft-mist" />
        </div>
      </div>
    </main>
  );
}
