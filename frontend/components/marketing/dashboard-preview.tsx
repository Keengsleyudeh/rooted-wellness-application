"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  HeartPulse,
  Notebook,
  Headphones,
  Award,
  Activity,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";

export function DashboardPreview() {
  const reduce = useReducedMotion();

  return (
    <section
      id="dashboard-preview"
      className="relative bg-deep-forest py-20 text-ivory sm:py-24 lg:py-28"
    >
      <BackgroundOrnaments />
      <div className="container-rw relative">
        <div className="max-w-3xl">
          <SectionEyebrow tone="dark">Inside the experience</SectionEyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-ivory sm:text-4xl md:text-[2.65rem]">
            A calm, premium space
            <span className="block text-soft-gold">designed to lower the noise.</span>
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-base text-ivory/75 sm:text-lg">
            Your dashboard guides you gently from one quiet action to the next.
            One primary thing to do at a time. No clutter, no pressure, no
            performance theatre.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          <div className="md:col-span-3 lg:col-span-3">
            <Card>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                  Today
                </span>
                <span className="text-xs text-ivory/60">Day 12 of 30</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ivory">
                Your reset for today is ready
              </h3>
              <p className="mt-2 text-sm text-ivory/75">
                Take the next 12 minutes slowly. There is no rush here.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft-gold/15 text-soft-gold">
                  <Headphones className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-medium text-ivory">
                    Build week: Rapid Reset Protocol
                  </p>
                  <p className="text-xs text-ivory/60">12 min · guided audio + lesson</p>
                </div>
              </div>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-ivory/10">
                <motion.div
                  initial={{ width: reduce ? "40%" : 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-soft-gold to-clay"
                />
              </div>
            </Card>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <Card>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                Overall progress
              </span>
              <div className="mt-4 flex items-center gap-5">
                <ProgressRing percent={40} />
                <div>
                  <p className="font-display text-2xl font-semibold text-ivory">
                    Week 2 in motion
                  </p>
                  <p className="mt-1 text-sm text-ivory/70">
                    Weeks unlock as you complete each one fully.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <Mini label="Morning" value="On track" tone="ok" />
                <Mini label="Evening tracker" value="Awaiting" tone="muted" />
                <Mini label="Streak" value="9 days" tone="ok" />
                <Mini label="Certificate" value="Locked" tone="locked" />
              </div>
            </Card>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <Card>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                Evening tracker
              </span>
              <div className="mt-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft-gold/15 text-soft-gold">
                  <Notebook className="h-4.5 w-4.5" aria-hidden />
                </span>
                <p className="text-sm text-ivory/85">
                  Two quiet minutes. Five gentle indicators.
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-xs text-ivory/75">
                {["Stress", "Energy", "Sleep", "Focus", "Decision"].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <Activity className="h-3.5 w-3.5 text-soft-sage" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <Card>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                  Weekly trend
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-sage/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-soft-sage">
                  <HeartPulse className="h-3 w-3" aria-hidden />
                  Steadier baseline
                </span>
              </div>
              <p className="mt-3 text-sm text-ivory/75">
                Stress patterns are softening. Sleep quality is gently improving.
              </p>
              <TrendChart />
            </Card>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <Card>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                Unlocked tools
              </span>
              <ul className="mt-4 space-y-3 text-sm">
                <ToolRow icon={Headphones} label="Guided somatic library" status="unlocked" />
                <ToolRow icon={Activity} label="Rapid Reset Protocol" status="unlocked" />
                <ToolRow icon={Notebook} label="EFT tapping scripts" status="locked" hint="Week 3" />
                <ToolRow icon={Award} label="Completion certificate" status="locked" hint="Day 30" />
              </ul>
            </Card>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <Card>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold">
                  Certificate
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-ivory/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/75">
                  <Lock className="h-3 w-3" aria-hidden />
                  Locked
                </span>
              </div>
              <div className="mt-4 rounded-2xl border border-soft-gold/20 bg-deep-forest-soft/40 p-5">
                <p className="font-display text-sm text-ivory/80">Certificate of Completion</p>
                <p className="mt-1 font-display text-xl font-semibold text-ivory">
                  30-Day High Performance Reset
                </p>
                <p className="mt-3 text-xs text-ivory/55">
                  Unlocks when paid, all daily sessions complete, and the ending
                  assessment is done.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full rounded-3xl border border-ivory/10 bg-deep-forest-soft/55 p-6 backdrop-blur transition-colors duration-300 hover:border-soft-gold/25 sm:p-7">
      {children}
    </div>
  );
}

function Mini({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "muted" | "locked";
}) {
  const tones: Record<typeof tone, string> = {
    ok: "border-soft-sage/30 bg-soft-sage/10 text-soft-sage",
    muted: "border-ivory/15 bg-ivory/5 text-ivory/70",
    locked: "border-ivory/15 bg-ivory/5 text-ivory/55",
  };
  return (
    <div className={`rounded-xl border px-3 py-2.5 ${tones[tone]}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-80">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium">{value}</p>
    </div>
  );
}

function ToolRow({
  icon: Icon,
  label,
  status,
  hint,
}: {
  icon: LucideIcon;
  label: string;
  status: "unlocked" | "locked";
  hint?: string;
}) {
  const unlocked = status === "unlocked";
  return (
    <li className="flex items-center justify-between gap-3 rounded-2xl border border-ivory/10 bg-deep-forest/40 px-4 py-3">
      <span className="flex items-center gap-3">
        <span
          className={
            "grid h-8 w-8 place-items-center rounded-lg " +
            (unlocked
              ? "bg-soft-gold/15 text-soft-gold"
              : "bg-ivory/5 text-ivory/55")
          }
        >
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <span className="text-sm text-ivory/90">{label}</span>
      </span>
      {unlocked ? (
        <span className="rounded-full bg-soft-sage/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-soft-sage">
          Unlocked
        </span>
      ) : (
        <span className="flex items-center gap-1.5 rounded-full bg-ivory/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
          <Lock className="h-3 w-3" aria-hidden />
          {hint ?? "Locked"}
        </span>
      )}
    </li>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const reduce = useReducedMotion();
  const r = 36;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 88 88" className="h-full w-full -rotate-90">
        <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(250,247,240,0.12)" strokeWidth="8" />
        <motion.circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="#D8B76A"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: reduce ? (1 - percent / 100) * circ : circ }}
          whileInView={{ strokeDashoffset: (1 - percent / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-display text-base font-semibold text-ivory">
        {percent}%
      </div>
    </div>
  );
}

function TrendChart() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 400 120"
      className="mt-5 h-28 w-full"
      role="img"
      aria-label="Stress and energy weekly trend, gently improving."
    >
      <defs>
        <linearGradient id="trendArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#D8B76A" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D8B76A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="rgba(250,247,240,0.08)" strokeWidth="1">
        {[20, 50, 80].map((y) => (
          <line key={y} x1="0" x2="400" y1={y} y2={y} />
        ))}
      </g>
      <motion.path
        d="M0 80 C 60 60, 100 90, 160 70 S 260 40, 320 50 S 400 30, 400 30 L 400 120 L 0 120 Z"
        fill="url(#trendArea)"
        initial={{ opacity: reduce ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
      <motion.path
        d="M0 80 C 60 60, 100 90, 160 70 S 260 40, 320 50 S 400 30, 400 30"
        fill="none"
        stroke="#D8B76A"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.path
        d="M0 50 C 60 60, 120 40, 180 50 S 280 70, 340 60 S 400 55, 400 55"
        fill="none"
        stroke="#A8BFA4"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
        initial={{ pathLength: reduce ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.35 }}
      />
    </svg>
  );
}

function BackgroundOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.12),transparent_60%)]" />
    </div>
  );
}
