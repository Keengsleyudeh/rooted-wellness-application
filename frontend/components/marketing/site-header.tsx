"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#program", label: "The Reset" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#science", label: "Science" },
  { href: "#dashboard-preview", label: "Inside" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-soft-sage/30 bg-ivory/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-rw flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Rooted Wellness home"
        >
          <RootedMark />
          <span className="font-display text-lg font-semibold tracking-tight text-deep-forest md:text-xl">
            Rooted Wellness
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-charcoal-ink/80 transition-colors hover:text-deep-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-charcoal-ink/75 transition-colors hover:text-deep-forest"
          >
            Sign in
          </Link>
          <Link
            href="/assessment/start"
            className="group inline-flex items-center gap-2 rounded-full bg-deep-forest px-5 py-2.5 text-sm font-semibold text-ivory shadow-glow transition-all hover:bg-rooted-green hover:shadow-[0_12px_36px_rgba(47,107,79,0.28)]"
          >
            Start your assessment
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-soft-sage/40 bg-ivory/70 p-2.5 text-deep-forest backdrop-blur transition-colors hover:bg-warm-sand lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          "fixed inset-x-0 top-16 z-30 origin-top transform-gpu border-t border-soft-sage/30 bg-ivory/95 backdrop-blur-md transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="container-rw flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal-ink/85 transition-colors hover:bg-warm-sand/70"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-soft-sage/30 pt-4">
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="rounded-full border border-soft-sage/50 px-4 py-3 text-center text-sm font-semibold text-deep-forest hover:bg-warm-sand/70"
            >
              Sign in
            </Link>
            <Link
              href="/assessment/start"
              onClick={() => setOpen(false)}
              className="rounded-full bg-deep-forest px-4 py-3 text-center text-sm font-semibold text-ivory shadow-glow hover:bg-rooted-green"
            >
              Start your assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function RootedMark() {
  return (
    <span
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-2xl bg-deep-forest text-soft-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5">
        <defs>
          <linearGradient id="markGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#D8B76A" />
            <stop offset="100%" stopColor="#C98863" />
          </linearGradient>
        </defs>
        <path
          d="M16 4c0 5 3 7 6 9-3 0-6 1-6 5 0 2 1 4 2 6-3-1-5-3-6-6-1 3-3 5-6 6 1-2 2-4 2-6 0-4-3-5-6-5 3-2 6-4 6-9 0 4 2 6 4 6s4-2 4-6Z"
          fill="url(#markGold)"
        />
      </svg>
    </span>
  );
}
