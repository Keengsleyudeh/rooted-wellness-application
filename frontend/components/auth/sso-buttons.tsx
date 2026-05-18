"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type GoogleSsoButtonProps = {
  label?: string;
  className?: string;
  onClick?: () => void | Promise<void>;
};

export function GoogleSsoButton({
  label = "Continue with Google",
  className,
  onClick,
}: GoogleSsoButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    try {
      if (onClick) {
        await onClick();
      } else {
        // UI preview only — real OAuth wiring lives on the server.
        await new Promise((r) => setTimeout(r, 700));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-busy={loading || undefined}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-3 rounded-full border border-soft-sage/40 bg-ivory px-6 py-3 text-sm font-semibold text-deep-forest transition-all",
        "hover:border-soft-sage/60 hover:bg-warm-sand/60",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-rooted-green/40",
        "disabled:cursor-not-allowed disabled:text-muted-gray",
        className
      )}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <GoogleGlyph />
      )}
      <span>{label}</span>
    </button>
  );
}

export function AuthDivider({ label = "or" }: { label?: string }) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-gray"
    >
      <span aria-hidden className="h-px flex-1 bg-soft-sage/40" />
      <span>{label}</span>
      <span aria-hidden className="h-px flex-1 bg-soft-sage/40" />
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg
      viewBox="0 0 18 18"
      className="h-[18px] w-[18px]"
      aria-hidden
      focusable="false"
    >
      <path
        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9082c1.7018-1.5668 2.6841-3.874 2.6841-6.6154z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.258c-.806.54-1.8368.8595-3.0482.8595-2.3441 0-4.3282-1.5832-5.0359-3.7104H.9573v2.3318C2.4382 15.9832 5.4818 18 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.9641 10.71c-.18-.54-.2823-1.1168-.2823-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.9641 10.71z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.9641 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
        fill="#EA4335"
      />
    </svg>
  );
}
