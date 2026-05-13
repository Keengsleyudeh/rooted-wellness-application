import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";
import { Quote } from "lucide-react";

const STORIES = [
  {
    quote:
      "I came in over-functioning and exhausted. By Week 2 my evenings actually softened, and I started sleeping like a person again.",
    role: "Founder, technology",
  },
  {
    quote:
      "The morning practice is the most honest 12 minutes of my day. It is not productivity. It is permission to be steady.",
    role: "Consultant, healthcare",
  },
  {
    quote:
      "The reflection at night is the part I did not expect to love. It is quiet, accurate, and never makes me feel like a project.",
    role: "Executive, finance",
  },
];

export function TestimonialsSection() {
  return (
    <MotionSection
      id="stories"
      className="relative bg-soft-section py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="max-w-3xl">
          <SectionEyebrow>Quiet shifts, in their own words</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
            From over-functioning to
            <span className="block text-rooted-green">grounded, day by day.</span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
            Anonymous placeholders. Real stories appear here as members
            voluntarily share. Results vary.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <FadeIn key={s.role} delay={i * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-3xl border border-soft-sage/30 bg-ivory p-6 shadow-soft">
                <Quote className="h-5 w-5 text-soft-gold" aria-hidden />
                <p className="text-pretty text-sm leading-relaxed text-charcoal-ink/85 sm:text-base">
                  {s.quote}
                </p>
                <p className="mt-auto text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                  {s.role}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
