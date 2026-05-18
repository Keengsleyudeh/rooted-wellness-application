import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type AuthShellProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  panel?: ReactNode;
  size?: "sm" | "md" | "lg";
  showDisclaimer?: boolean;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  children,
  footer,
  panel,
  size = "md",
  showDisclaimer = true,
}: AuthShellProps) {
  const maxCard =
    size === "sm"
      ? "max-w-md"
      : size === "lg"
        ? "max-w-3xl"
        : "max-w-xl";

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-soft-section">
      <BackgroundDecor />

      <header className="relative">
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
          <Link
            href="/"
            className="text-sm font-medium text-charcoal-ink/75 transition-colors hover:text-deep-forest"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main
        id="main"
        className="relative pb-16 pt-6 sm:pb-24 sm:pt-10 md:pt-14"
      >
        <div
          className={cn(
            "container-rw grid gap-10 lg:gap-14",
            panel ? "lg:grid-cols-[1fr_0.95fr] lg:items-center" : ""
          )}
        >
          <div
            className={cn(
              "mx-auto w-full",
              maxCard,
              panel ? "lg:mx-0 lg:max-w-none" : ""
            )}
          >
            <div className="rounded-[2rem] border border-soft-sage/30 bg-ivory/95 p-6 shadow-soft sm:p-8 lg:p-10">
              <header className="text-pretty">
                {eyebrow ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-rooted-green"
                    />
                    {eyebrow}
                  </span>
                ) : null}
                <h1 className="mt-5 font-display text-3xl font-medium leading-[1.1] text-deep-forest sm:text-4xl">
                  {title}
                </h1>
                {description ? (
                  <p className="mt-3 max-w-prose text-pretty text-base leading-relaxed text-charcoal-ink/75">
                    {description}
                  </p>
                ) : null}
              </header>

              <div className="mt-8">{children}</div>
            </div>

            {footer ? (
              <div className="mt-6 text-center text-sm text-charcoal-ink/75">
                {footer}
              </div>
            ) : null}

            {showDisclaimer ? (
              <div className="mt-6 flex items-start gap-2 rounded-2xl border border-soft-sage/30 bg-ivory/70 p-4 text-xs leading-relaxed text-muted-gray">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-rooted-green"
                  aria-hidden
                />
                <span>
                  Rooted Wellness offers educational nervous system support, not
                  medical care, therapy, or emergency services. Please consult a
                  qualified professional for medical or mental health concerns.
                </span>
              </div>
            ) : null}
          </div>

          {panel ? (
            <aside
              aria-hidden="false"
              className="relative hidden overflow-hidden rounded-[2rem] border border-soft-sage/30 bg-deep-forest text-ivory shadow-soft lg:block"
            >
              {panel}
            </aside>
          ) : null}
        </div>
      </main>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.18),transparent_60%)]" />
      <div className="absolute -bottom-32 left-[-15%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.22),transparent_60%)]" />
    </div>
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
          <linearGradient id="authMark" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#D8B76A" />
            <stop offset="100%" stopColor="#C98863" />
          </linearGradient>
        </defs>
        <path
          d="M16 4c0 5 3 7 6 9-3 0-6 1-6 5 0 2 1 4 2 6-3-1-5-3-6-6-1 3-3 5-6 6 1-2 2-4 2-6 0-4-3-5-6-5 3-2 6-4 6-9 0 4 2 6 4 6s4-2 4-6Z"
          fill="url(#authMark)"
        />
      </svg>
    </span>
  );
}

export function AuthSidePanel({
  title,
  body,
  highlights,
}: {
  title: ReactNode;
  body: ReactNode;
  highlights?: { label: string; description?: string }[];
}) {
  return (
    <div className="relative h-full min-h-[28rem] p-10">
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      <div className="absolute -top-24 right-[-15%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,183,106,0.22),transparent_60%)]" />
      <div className="absolute -bottom-24 left-[-15%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,191,164,0.20),transparent_60%)]" />

      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-deep-forest-soft/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-soft-gold backdrop-blur">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-soft-gold" />
            Rooted Wellness
          </span>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-premium text-ivory sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ivory/80">
            {body}
          </p>
        </div>

        {highlights ? (
          <ul role="list" className="space-y-3">
            {highlights.map((h) => (
              <li
                key={h.label}
                className="rounded-2xl border border-ivory/15 bg-ivory/5 p-4 backdrop-blur"
              >
                <p className="font-display text-sm font-semibold text-ivory">
                  {h.label}
                </p>
                {h.description ? (
                  <p className="mt-1 text-xs leading-relaxed text-ivory/70">
                    {h.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
