import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Overview",
  description: "Rooted Wellness admin overview.",
  robots: { index: false, follow: false },
};

export default function AdminHomePage() {
  return (
    <section className="container-rw py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
          Admin · restricted
        </span>
        <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-deep-forest sm:text-4xl">
          Admin console
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-charcoal-ink/75">
          Operational tools for users, progress, payments, content, and audit
          logs will live here. Every action is gated server-side and recorded
          to the audit log.
        </p>
      </div>
    </section>
  );
}
