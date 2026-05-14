import Link from "next/link";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-soft-section">
      <header className="sticky top-0 z-30 border-b border-soft-sage/30 bg-ivory/85 backdrop-blur-md">
        <div className="container-rw flex h-14 items-center justify-between md:h-16">
          <Link
            href="/admin"
            className="font-display text-base font-semibold tracking-tight text-deep-forest md:text-lg"
            aria-label="Rooted Wellness admin home"
          >
            Rooted · Admin
          </Link>
          <nav
            aria-label="Admin"
            className="hidden items-center gap-1 sm:flex"
          >
            <AdminNavLink href="/admin/users">Users</AdminNavLink>
            <AdminNavLink href="/admin/progress">Progress</AdminNavLink>
            <AdminNavLink href="/admin/payments">Payments</AdminNavLink>
            <AdminNavLink href="/admin/content">Content</AdminNavLink>
            <AdminNavLink href="/admin/audit-logs">Audit</AdminNavLink>
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}

function AdminNavLink({
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
