"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { SectionEyebrow } from "./section-eyebrow";
import { FAQ_ITEMS } from "@/content/faq";

export function FaqSection() {
  const reduce = useReducedMotion();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-warm-sand to-ivory py-20 sm:py-24 lg:py-28"
    >
      <div className="container-rw">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionEyebrow>Honest answers</SectionEyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-deep-forest sm:text-4xl md:text-[2.65rem]">
              Questions, gently answered.
            </h2>
            <p className="mt-5 max-w-prose text-pretty text-base text-charcoal-ink/75 sm:text-lg">
              If something here does not answer your question, our help page and
              support team are quiet, kind, and responsive.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-soft-sage/30 bg-ivory shadow-soft">
            <ul role="list" className="divide-y divide-soft-sage/25">
              {FAQ_ITEMS.map((item, idx) => {
                const open = idx === openIdx;
                const buttonId = `faq-btn-${idx}`;
                const panelId = `faq-panel-${idx}`;
                return (
                  <li key={item.q}>
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIdx(open ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-deep-forest transition-colors hover:bg-warm-sand/50 sm:px-7 sm:text-lg"
                      >
                        <span className="text-pretty">{item.q}</span>
                        <span
                          aria-hidden
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-warm-sand text-rooted-green ring-1 ring-soft-gold/30"
                        >
                          {open ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: reduce ? "auto" : 0, opacity: reduce ? 1 : 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: reduce ? "auto" : 0, opacity: reduce ? 1 : 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-6 text-sm leading-relaxed text-charcoal-ink/80 sm:px-7 sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
