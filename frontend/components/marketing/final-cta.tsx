import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "./motion-section";

export function FinalCta() {
  return (
    <MotionSection
      id="final-cta"
      className="relative overflow-hidden bg-deep-forest py-20 text-ivory sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.20),transparent_60%)]" />
        <div className="absolute -bottom-40 left-[-15%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.18),transparent_60%)]" />
      </div>

      <div className="container-rw relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-deep-forest-soft/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold backdrop-blur">
            This is your space
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-premium text-ivory text-balance sm:text-4xl md:text-5xl">
            Return to yourself.
            <span className="block bg-gradient-to-r from-soft-gold via-[#F2DDA6] to-soft-gold bg-clip-text text-transparent">
              Quietly, deliberately, completely.
            </span>
          </h2>
          <p className="mt-5 text-pretty text-base text-ivory/80 sm:text-lg">
            Take the free assessment. Meet your nervous system as it is today.
            If the Reset feels right, the 30-Day rhythm is here, waiting.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/assessment/start"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-soft-gold px-6 py-3.5 text-sm font-semibold text-deep-forest shadow-[0_10px_30px_rgba(216,183,106,0.35)] transition-all hover:bg-[#E6C77A]"
            >
              Start your assessment
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="/30-day-high-performance-reset"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 bg-ivory/5 px-6 py-3.5 text-sm font-semibold text-ivory backdrop-blur transition-colors hover:bg-ivory/10"
            >
              Explore the 30-Day Reset
            </Link>
          </div>
          <p className="mt-7 text-xs leading-relaxed text-ivory/55">
            Wellness education. Not medical care. Results vary. Please consult a
            qualified professional for medical or mental health concerns.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
