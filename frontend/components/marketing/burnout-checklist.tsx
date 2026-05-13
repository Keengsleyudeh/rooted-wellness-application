"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";
import { cn } from "@/lib/utils";

const ITEMS = [
  "I feel tired even after resting.",
  "I struggle to make decisions clearly.",
  "I feel emotionally drained after work.",
  "I am productive, but internally exhausted.",
  "My sleep quality has reduced.",
  "I feel detached, numb, or distant from myself.",
  "I rely on pressure or urgency to keep going.",
];

export function BurnoutChecklist() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const count = selected.size;
  const message = useMemo(() => {
    if (count === 0)
      return "Take a slow breath. When you're ready, tap any signals that feel true.";
    if (count <= 2)
      return "A few quiet signals. The reset can support steadier baseline regulation.";
    if (count <= 4)
      return "These patterns are common in high performers. A guided reset can help.";
    return "Your nervous system has been working hard for you. There is a softer way back.";
  }, [count]);

  return (
    <section
      id="checklist"
      className="relative bg-gradient-to-b from-ivory to-warm-sand py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <SectionEyebrow>A quiet self-check</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.5rem]">
              Recognise the signals.
              <span className="block text-rooted-green">
                Begin where you actually are.
              </span>
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
              This is not a diagnosis. It is a soft mirror. Tap what feels true.
              Then, if you are ready, the full assessment will offer a clearer
              picture of where your nervous system is right now.
            </p>

            <div className="mt-7 rounded-3xl border border-soft-sage/30 bg-ivory p-5 shadow-soft sm:p-6">
              <div className="flex items-center gap-4">
                <div
                  aria-hidden
                  className="relative h-14 w-14 shrink-0"
                  role="presentation"
                >
                  <svg viewBox="0 0 56 56" className="h-full w-full -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="#EEF3ED"
                      strokeWidth="6"
                    />
                    <motion.circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="#2F6B4F"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 24}
                      animate={{
                        strokeDashoffset:
                          (1 - count / ITEMS.length) * (2 * Math.PI * 24),
                      }}
                      transition={{
                        duration: reduce ? 0 : 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </svg>
                  <span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold text-deep-forest">
                    {count}/{ITEMS.length}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-charcoal-ink/80">
                  {message}
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/assessment/start"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-deep-forest px-5 py-3 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
                >
                  Take the free assessment
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="#science"
                  className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 px-5 py-3 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand"
                >
                  See the science
                </Link>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-gray">
                For educational, wellness-focused reflection only. Not medical,
                psychological, or diagnostic advice.
              </p>
            </div>
          </div>

          <ul
            role="list"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            aria-label="Quiet burnout self-check"
          >
            {ITEMS.map((item, idx) => {
              const isSelected = selected.has(idx);
              return (
                <li key={item}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isSelected}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-medium transition-all duration-200",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-rooted-green",
                      isSelected
                        ? "border-rooted-green/60 bg-rooted-green/10 text-deep-forest shadow-[0_8px_24px_rgba(47,107,79,0.15)]"
                        : "border-soft-sage/30 bg-ivory text-charcoal-ink/85 hover:border-rooted-green/40 hover:bg-warm-sand/60"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                        isSelected
                          ? "border-rooted-green bg-rooted-green text-ivory"
                          : "border-soft-sage/60 bg-ivory"
                      )}
                    >
                      <Check
                        className={cn(
                          "h-3.5 w-3.5 transition-opacity",
                          isSelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
