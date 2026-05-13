import { Sun, Moon, Clock, type LucideIcon } from "lucide-react";
import { MotionSection, FadeIn } from "./motion-section";
import { SectionEyebrow } from "./section-eyebrow";

export function DailyRhythm() {
  return (
    <MotionSection
      id="rhythm"
      className="relative bg-deep-forest py-20 text-ivory sm:py-24 lg:py-28"
    >
      <BackgroundOrnaments />
      <div className="container-rw relative">
        <div className="max-w-3xl">
          <SectionEyebrow tone="dark">Your daily rhythm</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-ivory sm:text-4xl md:text-[2.65rem]">
            Two quiet anchors.
            <span className="block text-soft-gold">
              One steadier life.
            </span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-ivory/75 sm:text-lg">
            The Reset works because it is small enough to keep. A short morning
            session to set your state. A short evening reflection to honour the
            day. That is the rhythm. That is the reset.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <FadeIn>
            <RhythmCard
              tone="dawn"
              eyebrow="Morning"
              icon={Sun}
              title="Set your nervous system"
              minutes="10 to 15 min"
              body="Open the app. Press play on today's somatic exercise. Watch the short lesson. Mark complete. That is your morning practice, done."
              bullets={[
                "Guided audio practice",
                "Short neuroscience lesson",
                "Mark today complete",
              ]}
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <RhythmCard
              tone="dusk"
              eyebrow="Evening"
              icon={Moon}
              title="Honour the day"
              minutes="2 to 3 min"
              body="A quiet reflection on stress, energy, sleep, focus, decision-making, and emotion. No scoring of who you are. Only honest noticing."
              bullets={[
                "Five gentle indicators",
                "One emotion tag",
                "Optional reflection note",
              ]}
            />
          </FadeIn>
        </div>
      </div>
    </MotionSection>
  );
}

function RhythmCard({
  tone,
  eyebrow,
  icon: Icon,
  title,
  minutes,
  body,
  bullets,
}: {
  tone: "dawn" | "dusk";
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  minutes: string;
  body: string;
  bullets: string[];
}) {
  return (
    <article
      className={
        "relative overflow-hidden rounded-3xl border border-ivory/10 p-7 sm:p-8 " +
        (tone === "dawn"
          ? "bg-gradient-to-br from-[#1A332A] via-[#234F3B] to-[#2F6B4F]"
          : "bg-gradient-to-br from-[#11231D] via-[#1B3328] to-[#22473A]")
      }
    >
      <div
        aria-hidden
        className={
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full " +
          (tone === "dawn"
            ? "bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.35),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.25),transparent_60%)]")
        }
      />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-deep-forest/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {eyebrow}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory/10 px-3 py-1 text-xs font-medium text-ivory/85">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {minutes}
        </span>
      </div>
      <h3 className="relative mt-6 font-display text-2xl font-semibold text-ivory sm:text-3xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-ivory/80 sm:text-base">
        {body}
      </p>
      <ul className="relative mt-6 space-y-2 text-sm text-ivory/85">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-soft-gold"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BackgroundOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-10 left-[35%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.08),transparent_60%)]" />
    </div>
  );
}
