import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  HeartPulse,
  Leaf,
  Compass,
  Sparkles,
  ShieldCheck,
  Brain,
  Activity,
} from "lucide-react";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SectionEyebrow } from "@/components/marketing/section-eyebrow";
import { DOMAINS, TOTAL_QUESTIONS } from "@/lib/assessment";

export const metadata: Metadata = {
  title: `Rooted Nervous System Assessment | ${SITE_NAME}`,
  description:
    "A free, two-to-three minute nervous system check-in across five wellness domains. Reflective, non-diagnostic, and built to guide your next gentle step.",
  alternates: {
    canonical: "/assessment",
  },
  openGraph: {
    type: "article",
    title: `Rooted Nervous System Assessment | ${SITE_NAME}`,
    description:
      "A reflective nervous system self-check across stress load, activation, emotional fatigue, cognitive strain, and physical exhaustion.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Rooted Nervous System Assessment | ${SITE_NAME}`,
    description:
      "A reflective nervous system self-check, free and wellness-focused.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const DOMAIN_ICONS = [HeartPulse, Activity, Leaf, Brain, Compass];

const EXPECTATIONS = [
  {
    label: "Time",
    value: "About 2–3 minutes",
    icon: Clock,
  },
  {
    label: "Questions",
    value: `${TOTAL_QUESTIONS} short reflections`,
    icon: Sparkles,
  },
  {
    label: "Outcome",
    value: "Personalised wellness profile",
    icon: HeartPulse,
  },
  {
    label: "Privacy",
    value: "Stays in your browser",
    icon: ShieldCheck,
  },
];

export default function AssessmentOverviewPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="relative isolate overflow-hidden bg-hero-gradient text-ivory">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.18),transparent_60%)]" />
            <div className="absolute -bottom-40 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.18),transparent_60%)]" />
          </div>

          <div className="container-rw relative px-5 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
            <SectionEyebrow tone="dark">
              Rooted nervous system assessment
            </SectionEyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.05] text-balance sm:text-4xl md:text-5xl">
              Your nervous system has been listening.
              <span className="block text-soft-gold">
                This is a quiet way to listen back.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
              Your nervous system influences how you think, feel, rest, and
              respond to everyday life, often without your conscious awareness.
              This short, reflective assessment helps you notice how your body
              is currently adapting to stress, responsibility, and recovery.
              Rather than focusing on symptoms or labels, it explores patterns
              of regulation and energy within you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/assessment/start"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-soft-gold px-6 py-3.5 text-sm font-semibold text-deep-forest shadow-[0_10px_30px_rgba(216,183,106,0.35)] transition-all hover:bg-[#E6C77A] hover:shadow-[0_14px_40px_rgba(216,183,106,0.45)]"
              >
                Start the assessment
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="#what-it-explores"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-6 py-3.5 text-sm font-semibold text-ivory backdrop-blur transition-colors hover:bg-ivory/10"
              >
                See what it explores
              </Link>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-ivory"
          />
        </section>

        <section
          aria-labelledby="expectations-heading"
          className="relative -mt-12 sm:-mt-16"
        >
          <div className="container-rw">
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-soft-sage/30 bg-ivory p-6 shadow-soft sm:p-8">
              <h2 id="expectations-heading" className="sr-only">
                What to expect
              </h2>
              <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {EXPECTATIONS.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start gap-3 rounded-2xl border border-soft-sage/25 bg-warm-sand/30 p-4"
                  >
                    <span
                      aria-hidden
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-rooted-green/10 text-rooted-green"
                    >
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                        {row.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-deep-forest">
                        {row.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="what-it-explores"
          aria-labelledby="explores-heading"
          className="relative bg-gradient-to-b from-ivory to-warm-sand py-20 sm:py-24 lg:py-28"
        >
          <div className="container-rw">
            <header className="mx-auto max-w-3xl text-center">
              <SectionEyebrow>What this assessment explores</SectionEyebrow>
              <h2
                id="explores-heading"
                className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl"
              >
                Five quiet domains of your nervous system.
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-charcoal-ink/75 sm:text-lg">
                You will reflect on twenty short statements grouped into the
                five areas below. There are no right answers. Only honest ones.
              </p>
            </header>

            <ul role="list" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOMAINS.map((domain, idx) => {
                const Icon = DOMAIN_ICONS[idx] ?? HeartPulse;
                return (
                  <li
                    key={domain.id}
                    className="group rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(15,31,26,0.08)]"
                  >
                    <span
                      aria-hidden
                      className="grid h-11 w-11 place-items-center rounded-2xl bg-rooted-green/10 text-rooted-green"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                      Section {domain.letter}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium leading-snug text-deep-forest">
                      {domain.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-ink/75">
                      {domain.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="how-heading"
          className="relative bg-ivory py-20 sm:py-24"
        >
          <div className="container-rw">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-soft-sage/30 bg-card-glow p-8 shadow-soft sm:p-12">
              <SectionEyebrow>How it works</SectionEyebrow>
              <h2
                id="how-heading"
                className="mt-5 font-display text-2xl font-medium leading-snug text-deep-forest sm:text-3xl"
              >
                Slow, simple, and yours alone.
              </h2>
              <ol role="list" className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  {
                    n: "01",
                    title: "Soften, then begin",
                    body: "Take a slow breath. Move through twenty short reflections at your own pace.",
                  },
                  {
                    n: "02",
                    title: "Answer honestly",
                    body: "Choose how often each statement feels true for you. There is no correct answer.",
                  },
                  {
                    n: "03",
                    title: "See your profile",
                    body: "A personalised wellness reflection appears at the end. Wellness framing, never diagnosis.",
                  },
                ].map((step) => (
                  <li
                    key={step.n}
                    className="rounded-2xl border border-soft-sage/30 bg-ivory/90 p-5 sm:p-6"
                  >
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold-deep">
                      {step.n}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-medium text-deep-forest">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-ink/75">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/assessment/start"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
                >
                  Begin the assessment
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/30-day-high-performance-reset"
                  className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-6 py-3.5 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
                >
                  About the 30-Day Reset
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="disclaimer-heading"
          className="bg-warm-sand py-16 sm:py-20"
        >
          <div className="container-rw">
            <div className="mx-auto max-w-3xl rounded-3xl border border-soft-gold/30 bg-ivory p-6 shadow-soft sm:p-8">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-soft-gold/15 text-soft-gold-deep"
                >
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h2
                    id="disclaimer-heading"
                    className="font-display text-lg font-medium text-deep-forest sm:text-xl"
                  >
                    A gentle wellness boundary.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-ink/75 sm:text-base">
                    Rooted Wellness provides educational wellness resources and
                    self-regulation practices. It does not provide medical
                    diagnosis, treatment, therapy, or emergency care. If you
                    have any health concerns, please consult a qualified
                    professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
