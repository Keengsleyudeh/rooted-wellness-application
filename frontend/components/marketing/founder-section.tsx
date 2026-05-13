import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";
import { Quote } from "lucide-react";

export function FounderSection() {
  return (
    <MotionSection
      id="founder"
      className="relative bg-ivory py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <FadeIn>
            <div className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-soft-sage/30 bg-gradient-to-br from-warm-sand via-soft-mist to-warm-sand shadow-soft">
                <FounderPortrait />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-soft-gold/15"
                />
              </div>
              <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-soft-sage/30 bg-ivory/95 px-4 py-3 shadow-soft backdrop-blur sm:block">
                <p className="font-display text-sm font-semibold text-deep-forest">
                  Founded with care
                </p>
                <p className="text-xs text-muted-gray">
                  Neuroscience-informed wellness
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionEyebrow>From the founder</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.5rem]">
              Built for those who have been carrying a lot,
              <span className="block text-rooted-green">quietly, for a long time.</span>
            </h2>
            <div className="mt-6 rounded-3xl border border-soft-sage/30 bg-card-glow p-6 shadow-soft sm:p-8">
              <Quote className="h-6 w-6 text-soft-gold" aria-hidden />
              <p className="mt-3 text-pretty text-base leading-relaxed text-charcoal-ink/85 sm:text-lg">
                Rooted Wellness exists to be a sanctuary for people ready to
                return to themselves. The Reset is not about adding another
                discipline to your life. It is about giving your nervous system
                a structured, beautiful way to come home.
              </p>
              <p className="mt-4 text-sm font-semibold text-deep-forest">
                Rooted in me. Rising for me. Abundant in all I am.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionSection>
  );
}

function FounderPortrait() {
  return (
    <svg
      role="img"
      aria-label="Calm portrait illustration representing the Rooted Wellness founder"
      viewBox="0 0 400 500"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F4EFE6" />
          <stop offset="100%" stopColor="#EEF3ED" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E6C8A6" />
          <stop offset="100%" stopColor="#C98863" />
        </linearGradient>
        <linearGradient id="dressGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2F6B4F" />
          <stop offset="100%" stopColor="#1F3A2E" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="32%" r="40%">
          <stop offset="0%" stopColor="#D8B76A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D8B76A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#bgGrad)" />
      <circle cx="200" cy="160" r="160" fill="url(#halo)" />
      <path
        d="M40 500 C 60 380, 140 340, 200 340 C 260 340, 340 380, 360 500 Z"
        fill="url(#dressGrad)"
      />
      <ellipse cx="200" cy="180" rx="74" ry="86" fill="url(#skinGrad)" />
      <path
        d="M126 158 C 130 90, 200 70, 274 158 C 286 200, 256 210, 232 200 C 220 170, 180 170, 168 200 C 144 210, 114 200, 126 158 Z"
        fill="#1F3A2E"
      />
      <path
        d="M120 320 C 150 300, 180 296, 200 296 C 220 296, 250 300, 280 320 L 280 360 L 120 360 Z"
        fill="url(#skinGrad)"
        opacity="0.92"
      />
      <g stroke="#D8B76A" strokeWidth="1.4" fill="none" opacity="0.6">
        <path d="M40 460 C 120 420, 280 420, 360 460" />
        <path d="M40 480 C 120 440, 280 440, 360 480" />
      </g>
    </svg>
  );
}
