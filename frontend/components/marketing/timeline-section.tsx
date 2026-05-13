"use client";

import { motion, useReducedMotion } from "motion/react";
import { Sprout, Layers, Link as LinkIcon, Sparkles } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";

const WEEKS = [
  {
    label: "Week 1",
    title: "Foundation",
    icon: Sprout,
    unlocks: "Basic regulation tools",
    points: [
      "Daily morning somatic exercise",
      "Short neuroscience lessons",
      "Evening tracker introduction",
    ],
  },
  {
    label: "Week 2",
    title: "Build",
    icon: Layers,
    unlocks: "Rapid Reset Protocol",
    points: [
      "Deeper breathwork patterns",
      "Stress response micro-practices",
      "Decision-fatigue check-ins",
    ],
  },
  {
    label: "Week 3",
    title: "Integration",
    icon: LinkIcon,
    unlocks: "EFT tapping scripts",
    points: [
      "Emotional release sequences",
      "Self-trust reflection practices",
      "Weekly insight refinement",
    ],
  },
  {
    label: "Week 4",
    title: "Transformation",
    icon: Sparkles,
    unlocks: "Maintenance + ending assessment",
    points: [
      "Personal regulation rhythm",
      "Beginning-to-end comparison",
      "Certificate of completion",
    ],
  },
];

export function TimelineSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="timeline"
      className="relative bg-gradient-to-b from-warm-sand via-ivory to-warm-sand py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>Four weeks. One quiet arc.</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            A structured return to yourself,
            <span className="block text-rooted-green">unfolding one week at a time.</span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            Days unlock progressively. No skipping ahead. Each week builds on
            the last, so your nervous system has time to actually receive the
            practice, not just complete it.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-6 top-2 hidden h-full w-px bg-gradient-to-b from-soft-gold/10 via-rooted-green/40 to-soft-gold/10 md:left-1/2 md:-translate-x-1/2 md:block"
          />
          <ol className="space-y-6 md:space-y-10">
            {WEEKS.map(({ label, title, icon: Icon, unlocks, points }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className={
                  "relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10"
                }
              >
                <span
                  aria-hidden
                  className="absolute left-6 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-soft-gold ring-4 ring-warm-sand md:left-1/2 md:block"
                />

                <div
                  className={
                    i % 2 === 0
                      ? "md:order-1 md:pr-10 md:text-right"
                      : "md:order-2 md:pl-10"
                  }
                >
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-soft-gold-deep">
                    {label}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-deep-forest sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-rooted-green">
                    Unlocks: {unlocks}
                  </p>
                </div>

                <div
                  className={
                    i % 2 === 0
                      ? "md:order-2 md:pl-10"
                      : "md:order-1 md:pr-10"
                  }
                >
                  <article className="group rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-warm-sand text-rooted-green ring-1 ring-soft-gold/30">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ul className="mt-5 space-y-2 text-sm text-charcoal-ink/80">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rooted-green"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
