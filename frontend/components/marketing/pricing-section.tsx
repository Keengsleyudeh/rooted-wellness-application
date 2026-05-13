import Link from "next/link";
import { Check, Lock, ArrowRight } from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

const INCLUDES = [
  "Two free beginning assessments",
  "30 daily morning sessions (10 to 15 minutes)",
  "Guided somatic audio and EFT scripts (unlocked weekly)",
  "Evening tracker and weekly insight reports",
  "Final ending assessment + before-and-after comparison",
  "Completion certificate with secure verification",
];

export function PricingSection() {
  return (
    <MotionSection
      id="pricing"
      className="relative bg-ivory py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            One thoughtful investment.
            <span className="block text-rooted-green">
              A rhythm you can keep for life.
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            One simple price for the full 30-Day High Performance Reset and the
            tools that unlock with it. Pricing on the pricing page is the source
            of truth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <article className="relative h-full overflow-hidden rounded-[2rem] border border-soft-gold/30 bg-card-glow p-8 shadow-soft sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.35),transparent_60%)]"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold-deep">
                  The Reset
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-deep-forest sm:text-3xl">
                  30-Day High Performance Reset
                </h3>
                <p className="mt-2 text-sm text-charcoal-ink/75">
                  Full program access for one quiet, transformational arc.
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold text-deep-forest sm:text-5xl">
                    See pricing page
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-gray">
                  One-time payment. Secure hosted checkout. No card details stored on our servers.
                </p>

                <ul role="list" className="mt-7 space-y-3 text-sm text-charcoal-ink/85">
                  {INCLUDES.map((row) => (
                    <li key={row} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rooted-green text-ivory">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span>{row}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-6 py-3.5 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
                  >
                    View pricing details
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                  <Link
                    href="/assessment/start"
                    className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-6 py-3.5 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
                  >
                    Start with the free assessment
                  </Link>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-muted-gray">
                  This is a wellness and educational program. It does not provide
                  medical diagnosis, treatment, therapy, or emergency care.
                  Please consult a qualified professional for medical or mental
                  health concerns.
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid h-full grid-cols-1 gap-4">
              <article className="rounded-3xl border border-soft-sage/30 bg-soft-mist p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-lg font-semibold text-deep-forest">
                  Quiet by design
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-ink/75">
                  No upsells, no surprise add-ons, no manipulative urgency. One
                  price. Full access. Your rhythm, your way.
                </p>
              </article>
              <article className="rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-lg font-semibold text-deep-forest">
                  Private and secure
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-charcoal-ink/80">
                  <li className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4 text-rooted-green" aria-hidden />
                    Payments processed by trusted providers
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4 text-rooted-green" aria-hidden />
                    We never store your full card details
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4 text-rooted-green" aria-hidden />
                    Private dashboard, signed media, audited admin actions
                  </li>
                </ul>
              </article>
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionSection>
  );
}
