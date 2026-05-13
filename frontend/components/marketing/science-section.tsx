import { Brain, Activity, Repeat, BookOpen } from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

const POINTS = [
  {
    icon: Brain,
    title: "Regulation is a learned capacity",
    body: "The nervous system adapts. With repetition, it learns to leave high alert and return to a calm baseline.",
  },
  {
    icon: Activity,
    title: "Dysregulation affects performance",
    body: "Chronic stress can shape clarity, sleep, mood, and energy. Performance becomes harder, not because of who you are, but because of state.",
  },
  {
    icon: Repeat,
    title: "Small, daily practice changes the baseline",
    body: "Brief somatic, breath, and reflection practices done consistently can support steadier emotional and cognitive function.",
  },
  {
    icon: BookOpen,
    title: "Education, not treatment",
    body: "Rooted Wellness offers wellness education and self-regulation tools. It is not therapy, diagnosis, or medical care.",
  },
];

export function ScienceSection() {
  return (
    <MotionSection
      id="science"
      className="relative bg-soft-section py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>The science, gently explained</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            What you are feeling has a name.
            <span className="block text-rooted-green">
              And a way back.
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            Burnout often reflects a nervous system that has been asked to
            perform without enough recovery, for a long time. With structured,
            gentle practice, regulation can be restored. This is wellness
            education, not a clinical claim.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {POINTS.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <article className="flex h-full gap-4 rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft md:gap-5 md:p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-warm-sand text-rooted-green ring-1 ring-soft-gold/30">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-deep-forest">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-ink/75">
                    {body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
