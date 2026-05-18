"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from "@/lib/auth-schemas";
import { AuthButton, FormAlert, PasswordField } from "./auth-fields";
import { PasswordStrength } from "./password-strength";

export function ResetPasswordForm({ token }: { token?: string }) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
    defaultValues: { password: "", confirmPassword: "" },
  });

  const password = watch("password") ?? "";

  const onSubmit = handleSubmit(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    setDone(true);
  });

  if (done) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-rooted-green/30 bg-soft-mist p-5 text-sm leading-relaxed text-deep-forest">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rooted-green/15 text-rooted-green">
          <CheckCircle2 className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-base font-semibold">
            Password ready to be set.
          </p>
          <p className="mt-1 text-charcoal-ink/80">
            Once auth is wired up, you&apos;ll be signed in and redirected to
            your dashboard.
          </p>
        </div>
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-rooted-green underline-offset-4 hover:underline"
        >
          Continue to sign in
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      {token ? (
        <FormAlert tone="info">
          Reset session detected. Choose a new password to continue.
        </FormAlert>
      ) : (
        <FormAlert tone="info">
          Open this page from the link in your email to confirm the reset
          session. This is a UI preview.
        </FormAlert>
      )}

      <div>
        <PasswordField
          label="New password"
          autoComplete="new-password"
          placeholder="Create a calm, strong password"
          required
          error={errors.password?.message}
          hint="At least 8 characters with a mix of letters and a number."
          {...register("password")}
        />
        <PasswordStrength password={password} />
      </div>

      <PasswordField
        label="Confirm new password"
        autoComplete="new-password"
        placeholder="Type it once more"
        required
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <AuthButton type="submit" loading={isSubmitting}>
        Save new password
        {!isSubmitting ? (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        ) : null}
      </AuthButton>
    </form>
  );
}
