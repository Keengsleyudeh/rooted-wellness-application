import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionEyebrow({
  children,
  className,
  tone = "light",
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
        tone === "light"
          ? "border-soft-gold/40 bg-warm-sand/60 text-rooted-green"
          : "border-soft-gold/30 bg-deep-forest-soft/40 text-soft-gold",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-rooted-green" : "bg-soft-gold"
        )}
      />
      {children}
    </span>
  );
}
