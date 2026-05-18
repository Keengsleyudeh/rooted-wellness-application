"use client";

import { useMemo } from "react";
import { Check, Circle } from "lucide-react";
import { estimatePasswordStrength } from "@/lib/auth-schemas";
import { cn } from "@/lib/utils";

type PasswordStrengthProps = {
  password: string;
};

const SEGMENTS = 4;

const RULES: { id: string; label: string; test: (s: string) => boolean }[] = [
  { id: "len", label: "At least 8 characters", test: (s) => s.length >= 8 },
  { id: "upper", label: "An uppercase letter", test: (s) => /[A-Z]/.test(s) },
  { id: "lower", label: "A lowercase letter", test: (s) => /[a-z]/.test(s) },
  { id: "num", label: "A number", test: (s) => /[0-9]/.test(s) },
];

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { score, label } = useMemo(
    () => estimatePasswordStrength(password),
    [password]
  );

  const filled = Math.max(0, Math.min(SEGMENTS, score));
  const tone =
    score <= 1
      ? "bg-error/70"
      : score === 2
        ? "bg-clay"
        : score === 3
          ? "bg-soft-gold"
          : "bg-rooted-green";

  const labelTone =
    score <= 1
      ? "text-error"
      : score === 2
        ? "text-clay"
        : score === 3
          ? "text-deep-forest"
          : "text-rooted-green";

  return (
    <div className="mt-1 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div
          className="flex h-1.5 flex-1 gap-1 overflow-hidden rounded-full bg-soft-mist"
          aria-hidden
        >
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-full flex-1 rounded-full transition-colors",
                i < filled ? tone : "bg-transparent"
              )}
            />
          ))}
        </div>
        <span
          className={cn(
            "min-w-[5.5rem] text-right text-xs font-semibold",
            password ? labelTone : "text-muted-gray"
          )}
          aria-live="polite"
        >
          {password ? label : "Password strength"}
        </span>
      </div>
      <ul role="list" className="grid grid-cols-2 gap-1.5 text-xs">
        {RULES.map((r) => {
          const ok = r.test(password);
          return (
            <li
              key={r.id}
              className={cn(
                "flex items-center gap-1.5",
                ok ? "text-rooted-green" : "text-muted-gray"
              )}
            >
              {ok ? (
                <Check className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <Circle className="h-3 w-3" aria-hidden />
              )}
              <span>{r.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
