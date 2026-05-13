import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";
import {
  HeartPulse,
  BrainCircuit,
  Moon,
  Compass,
  Flame,
  Smile,
} from "lucide-react";

const OUTCOMES = [
  {
    icon: HeartPulse,
    title: "Steadier baseline",
    body: "Less hypervigilance. Less shut-down. A nervous system that returns to centre more easily.",
  },
  {
    icon: BrainCircuit,
    title: "Cleaner focus",
    body: "Attention that holds. Thinking that returns. Work that feels possible again.",
  },
  {
    icon: Moon,
    title: "More restorative rest",
    body: "Sleep that actually softens you, instead of leaving you wired and waiting for morning.",
  },
  {
    icon: Compass,
    title: "Aligned decisions",
    body: "Choices made from clarity, not pressure. A felt sense of what is yours to carry.",
  },
  {
    icon: Flame,
    title: "Sustainable drive",
    body: "Ambition that no longer costs you. Energy that you regulate instead of force.",
  },
  {
    icon: Smile,
    title: "Emotional safety",
    body: "Room to feel without being flooded. Self-trust that grows quietly, day by day.",
  },
];

export function TransformationSection() {
  return (
    <MotionSection
      id="outcomes"
      className="relative bg-soft-section py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>What this can look like</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            A softer way back to clarity,
            <span className="block text-rooted-green">
              safety, and sustainable performance.
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            Wellness outcomes vary between people and are not guaranteed. These
            reflect the kind of shifts members commonly notice when they
            practice consistently and gently.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-warm-sand text-rooted-green ring-1 ring-soft-gold/30">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-deep-forest">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-ink/75">
                  {body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
