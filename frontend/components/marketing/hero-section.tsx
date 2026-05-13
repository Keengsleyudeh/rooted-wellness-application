"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles, HeartPulse } from "lucide-react";
import { NervousSystemSvg } from "./nervous-system-svg";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient text-ivory">
      <HeroBackgroundImage />
      <BackgroundLines />

      <div className="container-rw relative grid gap-12 px-5 pb-20 pt-12 sm:pb-28 sm:pt-16 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-32 lg:pt-24">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-deep-forest-soft/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            The Nervous System Performance Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-premium text-ivory text-balance sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4rem]"
          >
            Rooted in your worth.
            <span className="block bg-gradient-to-r from-soft-gold via-[#F2DDA6] to-soft-gold bg-clip-text text-transparent">
              Aligned, abundant, at peace.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            A 30-day, neuroscience-informed reset for high-performing
            professionals ready to recover clarity, energy, and emotional
            steadiness without abandoning ambition. Burnout is not failure. It
            is biology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/assessment/start"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-soft-gold px-6 py-3.5 text-sm font-semibold text-deep-forest shadow-[0_10px_30px_rgba(216,183,106,0.35)] transition-all hover:bg-[#E6C77A] hover:shadow-[0_14px_40px_rgba(216,183,106,0.45)]"
            >
              Start your assessment
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="#program"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-6 py-3.5 text-sm font-semibold text-ivory backdrop-blur transition-colors hover:bg-ivory/10"
            >
              Explore the 30-Day Reset
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <Pill icon={<HeartPulse className="h-4 w-4" aria-hidden />} label="Nervous system first" />
            <Pill icon={<ShieldCheck className="h-4 w-4" aria-hidden />} label="Education, not therapy" />
            <Pill icon={<Sparkles className="h-4 w-4" aria-hidden />} label="Calm. Premium. Rooted." />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-deep-forest-soft via-rooted-green/40 to-deep-forest opacity-90" aria-hidden />
            <div className="absolute inset-0 rounded-[2.25rem] ring-1 ring-soft-gold/20" aria-hidden />
            <NervousSystemSvg className="absolute inset-0 h-full w-full" />

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -bottom-6 -left-4 w-[78%] max-w-xs rounded-3xl border border-soft-gold/20 bg-deep-forest/85 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur md:-bottom-8 md:-left-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-soft-gold/15 text-soft-gold">
                  <HeartPulse className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ivory">
                    Day 7 of 30
                  </p>
                  <p className="text-xs text-ivory/65">
                    Foundation week complete
                  </p>
                </div>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-ivory/10">
                <motion.div
                  initial={{ width: reduce ? "23%" : 0 }}
                  animate={{ width: "23%" }}
                  transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-soft-gold to-clay"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory/95" />
    </section>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-3.5 py-2 text-xs font-medium text-ivory/85 backdrop-blur">
      <span className="text-soft-gold">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function HeroBackgroundImage() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1759301252439-f4f5fb8d9f6c?fm=jpg&q=80&w=2400&auto=format&fit=crop"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep-forest/90 via-deep-forest/75 to-rooted-green/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,183,106,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 via-transparent to-deep-forest/40" />
    </div>
  );
}

function BackgroundLines() {
  return (
    <div aria-hidden className="absolute inset-0 -z-0 overflow-hidden">
      <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.18),transparent_60%)]" />
      <div className="absolute -bottom-40 left-[-15%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.18),transparent_60%)]" />
      <svg
        viewBox="0 0 1440 600"
        className="absolute inset-x-0 top-0 h-full w-full opacity-[0.15]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroLine" x1="0" x2="1">
            <stop offset="0%" stopColor="#A8BFA4" stopOpacity="0" />
            <stop offset="50%" stopColor="#A8BFA4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A8BFA4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#heroLine)" strokeWidth="1">
          <path d="M0 120 C 360 60, 720 220, 1080 140 S 1440 220, 1440 220" />
          <path d="M0 240 C 360 180, 720 340, 1080 260 S 1440 340, 1440 340" />
          <path d="M0 380 C 360 320, 720 480, 1080 400 S 1440 460, 1440 460" />
        </g>
      </svg>
    </div>
  );
}
