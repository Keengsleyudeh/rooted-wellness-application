import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-soft-section px-6 py-16">
      <div className="mx-auto max-w-md text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rooted-green" />
          You are offline
        </span>
        <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-deep-forest sm:text-4xl">
          A quiet pause.
          <span className="block text-rooted-green">Take a slow breath.</span>
        </h1>
        <p className="mt-5 text-pretty text-base leading-relaxed text-charcoal-ink/75">
          We could not reach the network. Your Reset will be here when you
          return. In the meantime, soften your shoulders, exhale gently, and
          come back whenever you are ready.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-deep-forest px-5 py-3 text-sm font-semibold text-ivory shadow-glow transition-colors hover:bg-rooted-green"
        >
          Try again
        </Link>
      </div>
    </main>
  );
}
