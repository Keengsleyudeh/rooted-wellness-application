import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

export function AssessmentCta() {
  return (
    <MotionSection id="assessment" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-rw">
        <div className="relative overflow-hidden rounded-[2rem] border border-soft-gold/20 bg-gradient-to-br from-warm-sand via-ivory to-warm-sand p-8 shadow-soft sm:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.45),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.35),transparent_60%)]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionEyebrow>This is your space</SectionEyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
                Begin with a free assessment.
                <span className="block text-rooted-green">
                  No pressure. No diagnosis.
                </span>
              </h2>
              <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/80 sm:text-lg">
                A short, reflective check-in shows where your nervous system is
                today and what kind of regulation rhythm could support you.
                Wellness framing, not medical advice.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/assessment/start"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
                >
                  Start your assessment
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/burnout-assessment"
                  className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-6 py-3.5 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
                >
                  Learn what is measured
                </Link>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-gray">
                Free. Takes about 4 minutes. Your reflections are private and
                used only to support your wellness experience.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { k: "Two beginning assessments", v: "Free" },
                { k: "One ending assessment", v: "After the 30 days" },
                { k: "Before-and-after comparison", v: "Included" },
                { k: "Results", v: "Wellness framing, never medical" },
              ].map((row) => (
                <li
                  key={row.k}
                  className="rounded-2xl border border-soft-sage/30 bg-ivory p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                    {row.k}
                  </p>
                  <p className="mt-1 text-sm font-medium text-deep-forest">
                    {row.v}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
