import Link from "next/link";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-soft-section">
      <header className="sticky top-0 z-30 border-b border-soft-sage/30 bg-ivory/85 backdrop-blur-md">
        <div className="container-rw flex h-14 items-center justify-between md:h-16">
          <Link
            href="/app"
            className="font-display text-base font-semibold tracking-tight text-deep-forest md:text-lg"
            aria-label="Rooted Wellness member home"
          >
            Rooted · Member
          </Link>
          <nav
            aria-label="Member"
            className="hidden items-center gap-1 sm:flex"
          >
            <AppNavLink href="/app">Today</AppNavLink>
            <AppNavLink href="/app/program">Program</AppNavLink>
            <AppNavLink href="/app/tracker">Tracker</AppNavLink>
            <AppNavLink href="/app/reports">Reports</AppNavLink>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}

function AppNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-full px-3.5 py-2 text-sm font-medium text-charcoal-ink/80 transition-colors hover:text-deep-forest"
    >
      {children}
    </Link>
  );
}
