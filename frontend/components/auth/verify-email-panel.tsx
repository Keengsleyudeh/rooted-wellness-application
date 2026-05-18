"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MailCheck, RefreshCcw } from "lucide-react";
import {
  verifyEmailResendSchema,
  type VerifyEmailResendValues,
} from "@/lib/auth-schemas";
import { AuthButton, FormAlert, TextField } from "./auth-fields";

const RESEND_COOLDOWN_SECONDS = 30;

export function VerifyEmailPanel({ email }: { email?: string }) {
  const [resendAt, setResendAt] = useState<number | null>(null);
  const [now, setNow] = useState<number>(() => Date.now());
  const [sentTo, setSentTo] = useState<string | null>(null);

  useEffect(() => {
    if (resendAt === null) return;
    const t = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(t);
  }, [resendAt]);

  const remainingMs = resendAt ? Math.max(0, resendAt - now) : 0;
  const cooldownActive = remainingMs > 0;
  const remainingSeconds = Math.ceil(remainingMs / 1000);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyEmailResendValues>({
    resolver: zodResolver(verifyEmailResendSchema),
    mode: "onTouched",
    defaultValues: { email: email ?? "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((r) => setTimeout(r, 700));
    setSentTo(values.email);
    setResendAt(Date.now() + RESEND_COOLDOWN_SECONDS * 1000);
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-3 rounded-2xl border border-soft-sage/30 bg-warm-sand/50 p-5 text-sm leading-relaxed text-charcoal-ink/85">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rooted-green/15 text-rooted-green">
          <MailCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-base font-semibold text-deep-forest">
            Check your inbox.
          </p>
          <p className="mt-1">
            We would send a verification link to confirm your email. Once
            it&apos;s verified, you&apos;ll be guided into onboarding.
          </p>
        </div>
      </div>

      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          hint="Didn't receive it? Confirm the address and resend below."
          error={errors.email?.message}
          {...register("email")}
        />

        <AuthButton
          type="submit"
          loading={isSubmitting}
          disabled={cooldownActive}
          variant="secondary"
        >
          <RefreshCcw className="h-4 w-4" aria-hidden />
          {cooldownActive
            ? `Resend in ${remainingSeconds}s`
            : "Resend verification link"}
        </AuthButton>

        {sentTo ? (
          <FormAlert tone="success">
            A new link would be sent to{" "}
            <span className="font-semibold text-deep-forest">{sentTo}</span>.
            This is a UI preview, no email is sent yet.
          </FormAlert>
        ) : (
          <FormAlert tone="info">
            Preview only. No email is sent yet.
          </FormAlert>
        )}
      </form>

      <div className="flex flex-col gap-2 border-t border-soft-sage/30 pt-5 text-sm text-charcoal-ink/75 sm:flex-row sm:items-center sm:justify-between">
        <span>Already verified?</span>
        <Link
          href="/sign-in"
          className="inline-flex items-center gap-2 font-semibold text-deep-forest underline-offset-4 hover:underline"
        >
          Continue to sign in
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
