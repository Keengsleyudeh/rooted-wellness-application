import { Sprout, Leaf, Compass, Sun } from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

const PILLARS = [
  {
    icon: Sprout,
    title: "Rooted",
    body: "Grounded in truth, self-awareness, and emotional safety.",
  },
  {
    icon: Leaf,
    title: "Nourished",
    body: "Honouring the body, mind, and nervous system with care and intention.",
  },
  {
    icon: Compass,
    title: "Aligned",
    body: "Moving with clarity, self-trust, and calm authority.",
  },
  {
    icon: Sun,
    title: "Expanding",
    body: "Creating room for growth, abundance, softness, and possibility.",
  },
];

export function PhilosophySection() {
  return (
    <MotionSection
      id="philosophy"
      className="relative bg-deep-forest py-20 text-ivory sm:py-24 lg:py-28"
    >
      <BackgroundOrnaments />
      <div className="container-rw relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionEyebrow tone="dark">Our philosophy</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-ivory sm:text-4xl md:text-[2.65rem]">
              True wellness is not chasing worthiness.
              <span className="block text-soft-gold">
                It is remembering it.
              </span>
            </h2>
          </div>
          <p className="text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
            Rooted Wellness is a sanctuary for people ready to return to
            themselves, where nervous system healing, self-trust, emotional
            safety, and expansion coexist. Here, abundance is calm. Luxury is
            softness. Power is grounded. Healing becomes a return to your
            natural state.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-ivory/10 bg-deep-forest-soft/60 p-6 backdrop-blur transition-all duration-300 hover:border-soft-gold/30 hover:bg-deep-forest-soft/80">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-soft-gold/15 text-soft-gold ring-1 ring-soft-gold/25">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ivory">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">
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

function BackgroundOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.15),transparent_60%)]" />
      <div className="absolute -bottom-32 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.12),transparent_60%)]" />
    </div>
  );
}
