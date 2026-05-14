import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, HeartPulse, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome",
  description:
    "Your private member space for the 30-Day High Performance Reset.",
  robots: { index: false, follow: false },
};

export default function ClientAppHomePage() {
  return (
    <section className="container-rw py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/40 bg-warm-sand/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rooted-green">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Member space
        </span>
        <h1 className="mt-6 font-display text-3xl font-medium leading-tight text-deep-forest sm:text-4xl">
          Welcome to your reset.
          <span className="block text-rooted-green">
            Your nervous system has a home here.
          </span>
        </h1>
        <p className="mt-5 text-pretty text-base leading-relaxed text-charcoal-ink/75">
          This is your private app space. Daily sessions, evening trackers,
          weekly reports, and your certificate will live here. We are preparing
          your dashboard.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
        <PlaceholderCard
          icon={<Compass className="h-5 w-5" aria-hidden />}
          title="Today"
          description="Your daily reset session and gentle next step."
        />
        <PlaceholderCard
          icon={<HeartPulse className="h-5 w-5" aria-hidden />}
          title="Tracker"
          description="A calm, quick evening check-in."
        />
        <PlaceholderCard
          icon={<Sparkles className="h-5 w-5" aria-hidden />}
          title="Progress"
          description="Weekly insights and your certificate."
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-soft-sage/50 px-5 py-2.5 text-sm font-semibold text-deep-forest transition-colors hover:bg-warm-sand/70"
        >
          Back to the website
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function PlaceholderCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-soft-sage/30 bg-ivory/80 p-5 shadow-soft backdrop-blur">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-deep-forest text-soft-gold">
        {icon}
      </span>
      <h2 className="mt-4 font-display text-lg font-semibold text-deep-forest">
        {title}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-charcoal-ink/75">
        {description}
      </p>
    </div>
  );
}
