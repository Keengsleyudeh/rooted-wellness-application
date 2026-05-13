import {
  AlertCircle,
  BatteryLow,
  CloudFog,
  Moon,
  Eye,
  TrendingDown,
  Waves,
} from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

const SIGNALS = [
  {
    icon: AlertCircle,
    title: "Chronic stress",
    body: "A nervous system stuck in high alert long after the moment has passed.",
  },
  {
    icon: BatteryLow,
    title: "Decision fatigue",
    body: "Choices feel heavier. Even small ones drain capacity you used to take for granted.",
  },
  {
    icon: CloudFog,
    title: "Emotional exhaustion",
    body: "Outwardly composed. Inwardly hollow. Showing up takes more than it gives.",
  },
  {
    icon: Moon,
    title: "Restless sleep",
    body: "Tired all day, wired at night. Rest no longer feels restorative.",
  },
  {
    icon: Eye,
    title: "Reduced focus",
    body: "Attention scatters. Clarity blurs. The work you love feels harder to inhabit.",
  },
  {
    icon: TrendingDown,
    title: "Performance volatility",
    body: "Good days followed by collapse. Inconsistent output, despite real discipline.",
  },
  {
    icon: Waves,
    title: "Quiet burnout",
    body: "Functioning, producing, succeeding, yet quietly running on empty.",
  },
];

export function ProblemAwareness() {
  return (
    <MotionSection
      id="problem"
      className="relative bg-ivory py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>The signals you have been carrying</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            Burnout is not a character flaw.
            <span className="block text-rooted-green">
              It is your biology asking for repair.
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            High performers rarely lack discipline. They lack regulation. When
            the nervous system has been running in overdrive for years, it does
            not need more effort. It needs a structured, gentle return to
            steadiness.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SIGNALS.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-soft-sage/25 bg-card-glow p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-warm-sand text-rooted-green ring-1 ring-soft-gold/30 transition-colors group-hover:bg-rooted-green group-hover:text-ivory">
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
