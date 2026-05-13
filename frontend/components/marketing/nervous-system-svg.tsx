"use client";

import { motion, useReducedMotion } from "motion/react";

export function NervousSystemSvg({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      role="img"
      aria-label="Abstract nervous system illustration for Rooted Wellness"
      viewBox="0 0 520 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="rwGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D8B76A" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#2F6B4F" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0F1F1A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rwLine" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FAF7F0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#A8BFA4" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="rwGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#D8B76A" />
          <stop offset="100%" stopColor="#C98863" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="260" r="240" fill="url(#rwGlow)" />

      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#rwLine)"
        strokeWidth="1.4"
        opacity="0.85"
      >
        <motion.path
          d="M70 260 C 140 180, 200 340, 260 260 S 380 180, 450 260"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.1 }}
        />
        <motion.path
          d="M90 320 C 160 250, 220 380, 280 320 S 400 260, 460 320"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.3 }}
          opacity="0.6"
        />
        <motion.path
          d="M100 200 C 180 130, 220 280, 280 200 S 380 130, 440 200"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.5 }}
          opacity="0.55"
        />
        <motion.path
          d="M260 60 C 220 160, 300 200, 260 260 S 220 360, 260 460"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, ease: "easeInOut", delay: 0.2 }}
          opacity="0.5"
        />
      </g>

      <g>
        {[
          { cx: 260, cy: 260, r: 6 },
          { cx: 150, cy: 240, r: 3 },
          { cx: 370, cy: 240, r: 3 },
          { cx: 200, cy: 320, r: 2.5 },
          { cx: 320, cy: 200, r: 2.5 },
          { cx: 110, cy: 280, r: 2 },
          { cx: 420, cy: 280, r: 2 },
          { cx: 260, cy: 110, r: 2.5 },
          { cx: 260, cy: 410, r: 2.5 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="url(#rwGold)"
            initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: "easeOut" }}
          />
        ))}
      </g>
    </svg>
  );
}
