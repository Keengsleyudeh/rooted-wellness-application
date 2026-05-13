import Link from "next/link";
import {
  Sunrise,
  Headphones,
  Notebook,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

const STEPS = [
  {
    icon: Sunrise,
    title: "Morning reset",
    body: "A 10 to 15 minute guided somatic exercise, paired with a short neuroscience lesson to anchor the day.",
  },
  {
    icon: Headphones,
    title: "Guided audio practice",
    body: "Breathwork, EFT tapping, and gentle nervous system regulation. Designed for calm, not performance.",
  },
  {
    icon: Notebook,
    title: "Evening tracker",
    body: "A two minute reflection on stress, energy, sleep, focus, and emotion. Quiet, structured, kind.",
  },
  {
    icon: LineChart,
    title: "Weekly insight",
    body: "See your gentle trends, completion rhythm, and supportive insight, framed as wellness, never as a diagnosis.",
  },
];

export function ProgramSection() {
  return (
    <MotionSection
      id="program"
      className="relative bg-ivory py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <SectionEyebrow>The 30-Day High Performance Reset</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
              A daily rhythm that returns you
              <span className="block text-rooted-green">to clarity, energy, and steadiness.</span>
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
              The Reset is a 30-day, neuroscience-informed wellness program built
              for professionals who do not have time for fluff. Twice a day. A
              few quiet minutes. A noticeable shift in how you meet your life.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/30-day-high-performance-reset"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-5 py-3 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
              >
                Explore the program
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/assessment/start"
                className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-5 py-3 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
              >
                Start your assessment
              </Link>
            </div>
          </div>

          <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.05}>
                <li className="group relative h-full rounded-3xl border border-soft-sage/30 bg-card-glow p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <span className="absolute right-5 top-5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-soft-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-deep-forest text-soft-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-deep-forest">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-ink/75">
                    {body}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  );
}
