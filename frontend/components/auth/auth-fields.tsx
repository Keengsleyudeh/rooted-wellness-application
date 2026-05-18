"use client";

import {
  forwardRef,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import { AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldShellProps = {
  id?: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => ReactNode;
};

function FieldShell({ id, label, hint, error, required, children }: FieldShellProps) {
  const reactId = useId();
  const fieldId = id ?? `field-${reactId}`;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const invalid = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className="text-sm font-medium text-deep-forest"
      >
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-rooted-green">
            *
          </span>
        ) : null}
      </label>
      {children({ id: fieldId, describedBy, invalid })}
      {hint && !error ? (
        <p id={hintId} className="text-xs leading-relaxed text-muted-gray">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-start gap-1.5 text-xs font-medium text-error"
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

const inputClasses = (invalid: boolean) =>
  cn(
    "w-full rounded-2xl border bg-ivory px-4 py-3 text-sm text-deep-forest placeholder:text-muted-gray/70 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-rooted-green/30",
    invalid
      ? "border-error/60 focus:border-error focus:ring-error/20"
      : "border-soft-sage/40 hover:border-soft-sage/60 focus:border-rooted-green"
  );

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "size"> & {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  id?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hint, error, id, required, className, ...rest },
    ref
  ) {
    return (
      <FieldShell
        id={id}
        label={label}
        hint={hint}
        error={error}
        required={required}
      >
        {({ id: fieldId, describedBy, invalid }) => (
          <input
            ref={ref}
            id={fieldId}
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            aria-required={required || undefined}
            className={cn(inputClasses(invalid), className)}
            {...rest}
          />
        )}
      </FieldShell>
    );
  }
);

type PasswordFieldProps = Omit<TextFieldProps, "type">;

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(
    { label, hint, error, id, required, className, ...rest },
    ref
  ) {
    const [shown, setShown] = useState(false);
    return (
      <FieldShell
        id={id}
        label={label}
        hint={hint}
        error={error}
        required={required}
      >
        {({ id: fieldId, describedBy, invalid }) => (
          <div className="relative">
            <input
              ref={ref}
              id={fieldId}
              type={shown ? "text" : "password"}
              aria-invalid={invalid || undefined}
              aria-describedby={describedBy}
              aria-required={required || undefined}
              autoComplete={rest.autoComplete ?? "current-password"}
              className={cn(inputClasses(invalid), "pr-12", className)}
              {...rest}
            />
            <button
              type="button"
              onClick={() => setShown((s) => !s)}
              aria-label={shown ? "Hide password" : "Show password"}
              aria-pressed={shown}
              className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted-gray transition-colors hover:bg-warm-sand/80 hover:text-deep-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-rooted-green/40"
            >
              {shown ? (
                <EyeOff className="h-4 w-4" aria-hidden />
              ) : (
                <Eye className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        )}
      </FieldShell>
    );
  }
);

type SelectFieldProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "size"
> & {
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  id?: string;
  placeholder?: string;
  options: readonly string[] | { value: string; label: string }[];
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function SelectField(
    {
      label,
      hint,
      error,
      id,
      required,
      className,
      placeholder,
      options,
      defaultValue,
      ...rest
    },
    ref
  ) {
    const normalized = (
      options as ReadonlyArray<string | { value: string; label: string }>
    ).map((opt) =>
      typeof opt === "string" ? { value: opt, label: opt } : opt
    );

    return (
      <FieldShell
        id={id}
        label={label}
        hint={hint}
        error={error}
        required={required}
      >
        {({ id: fieldId, describedBy, invalid }) => (
          <select
            ref={ref}
            id={fieldId}
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            aria-required={required || undefined}
            defaultValue={defaultValue ?? ""}
            className={cn(inputClasses(invalid), "pr-9", className)}
            {...rest}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {normalized.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </FieldShell>
    );
  }
);

type CheckboxFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "id"> & {
  id?: string;
  label: ReactNode;
  error?: string;
};

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  function CheckboxField(
    { id, label, error, className, required, ...rest },
    ref
  ) {
    const reactId = useId();
    const fieldId = id ?? `check-${reactId}`;
    const errorId = error ? `${fieldId}-error` : undefined;
    const invalid = Boolean(error);

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={fieldId}
          className={cn(
            "group flex cursor-pointer items-start gap-3 rounded-2xl border bg-ivory px-4 py-3 text-sm text-charcoal-ink/85 transition-colors",
            invalid
              ? "border-error/60"
              : "border-soft-sage/40 hover:border-rooted-green/40 hover:bg-warm-sand/40"
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            id={fieldId}
            aria-invalid={invalid || undefined}
            aria-describedby={errorId}
            aria-required={required || undefined}
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0 rounded border-soft-sage/60 text-rooted-green focus:ring-2 focus:ring-rooted-green/30",
              className
            )}
            {...rest}
          />
          <span className="text-pretty leading-relaxed">{label}</span>
        </label>
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="flex items-start gap-1.5 text-xs font-medium text-error"
          >
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>{error}</span>
          </p>
        ) : null}
      </div>
    );
  }
);

type RadioGroupOption = { value: string; label: string; description?: string };

type RadioGroupFieldProps = {
  name: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  required?: boolean;
  options: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  columns?: 1 | 2;
};

export function RadioGroupField({
  name,
  label,
  hint,
  error,
  required,
  options,
  value,
  defaultValue,
  onChange,
  columns = 2,
}: RadioGroupFieldProps) {
  const reactId = useId();
  const groupId = `${name}-${reactId}`;
  const hintId = hint ? `${groupId}-hint` : undefined;
  const errorId = error ? `${groupId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const invalid = Boolean(error);

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-deep-forest">
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-rooted-green">
            *
          </span>
        ) : null}
      </legend>
      <div
        role="radiogroup"
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
        className={cn(
          "mt-1 grid gap-2",
          columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
        )}
      >
        {options.map((opt) => {
          const selected = value ? value === opt.value : undefined;
          const optionId = `${groupId}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={optionId}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-2xl border bg-ivory px-4 py-3 text-sm transition-colors",
                selected
                  ? "border-rooted-green/60 bg-rooted-green/5 text-deep-forest"
                  : invalid
                    ? "border-error/40"
                    : "border-soft-sage/40 text-charcoal-ink/85 hover:border-rooted-green/40 hover:bg-warm-sand/40"
              )}
            >
              <input
                type="radio"
                id={optionId}
                name={name}
                value={opt.value}
                defaultChecked={defaultValue === opt.value}
                checked={selected}
                onChange={(e) => onChange?.(e.target.value)}
                className="mt-0.5 h-4 w-4 shrink-0 border-soft-sage/60 text-rooted-green focus:ring-2 focus:ring-rooted-green/30"
              />
              <span className="flex flex-col gap-0.5">
                <span className="font-medium text-deep-forest">{opt.label}</span>
                {opt.description ? (
                  <span className="text-xs leading-relaxed text-muted-gray">
                    {opt.description}
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {hint && !error ? (
        <p id={hintId} className="text-xs leading-relaxed text-muted-gray">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-start gap-1.5 text-xs font-medium text-error"
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>{error}</span>
        </p>
      ) : null}
    </fieldset>
  );
}

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export function AuthButton({
  loading = false,
  variant = "primary",
  fullWidth = true,
  className,
  children,
  disabled,
  ...rest
}: AuthButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rooted-green/40 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-deep-forest text-ivory shadow-glow hover:bg-rooted-green hover:shadow-[0_12px_36px_rgba(47,107,79,0.28)] disabled:bg-muted-gray disabled:shadow-none",
    secondary:
      "border border-soft-sage/50 bg-ivory text-deep-forest hover:bg-warm-sand disabled:border-soft-sage/30 disabled:text-muted-gray",
    ghost:
      "text-deep-forest hover:bg-warm-sand/60 disabled:text-muted-gray",
  } as const;

  return (
    <button
      type={rest.type ?? "button"}
      disabled={disabled || loading}
      className={cn(
        base,
        variants[variant],
        fullWidth ? "w-full" : "",
        className
      )}
      {...rest}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : null}
      {children}
    </button>
  );
}

export function FormAlert({
  tone = "error",
  children,
}: {
  tone?: "error" | "success" | "info";
  children: ReactNode;
}) {
  const tones = {
    error: "border-error/30 bg-[#FBEDEB] text-error",
    success: "border-rooted-green/30 bg-soft-mist text-deep-forest",
    info: "border-soft-gold/40 bg-warm-sand/70 text-deep-forest",
  } as const;
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm leading-relaxed",
        tones[tone]
      )}
    >
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
