import Link from "next/link";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Program",
    links: [
      { href: "/30-day-high-performance-reset", label: "30-Day High Performance Reset" },
      { href: "/burnout-assessment", label: "Burnout assessment" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/nervous-system-regulation", label: "Nervous system regulation" },
      { href: "/burnout-for-professionals", label: "Burnout for professionals" },
      { href: "/blog", label: "Journal" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/sign-in", label: "Sign in" },
      { href: "/sign-up", label: "Create account" },
      { href: "/dashboard", label: "Member dashboard" },
      { href: "/dashboard/help", label: "Help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy policy" },
      { href: "/terms", label: "Terms and conditions" },
      { href: "/medical-disclaimer", label: "Medical disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-warm-sand pt-16">
      <div className="container-rw">
        <div className="grid gap-10 border-b border-soft-sage/30 pb-12 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-deep-forest text-soft-gold">
                <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
                  <defs>
                    <linearGradient id="footerMark" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#D8B76A" />
                      <stop offset="100%" stopColor="#C98863" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 4c0 5 3 7 6 9-3 0-6 1-6 5 0 2 1 4 2 6-3-1-5-3-6-6-1 3-3 5-6 6 1-2 2-4 2-6 0-4-3-5-6-5 3-2 6-4 6-9 0 4 2 6 4 6s4-2 4-6Z"
                    fill="url(#footerMark)"
                  />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-deep-forest">
                Rooted Wellness
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-ink/75">
              The Nervous System Performance Company. A calm, premium platform
              for nervous system regulation and the 30-Day High Performance
              Reset.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray">
                {col.title}
              </h3>
              <ul role="list" className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-charcoal-ink/80 transition-colors hover:text-deep-forest"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-muted-gray sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Rooted Wellness. All rights
            reserved.
          </p>
          <p className="max-w-2xl text-pretty leading-relaxed sm:text-right">
            Rooted Wellness provides educational wellness resources and
            self-regulation practices. It does not provide medical diagnosis,
            treatment, therapy, or emergency care. Please consult a qualified
            professional for medical or mental health concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
