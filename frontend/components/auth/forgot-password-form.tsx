"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MailCheck } from "lucide-react";
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from "@/lib/auth-schemas";
import { AuthButton, FormAlert, TextField } from "./auth-fields";

export function ForgotPasswordForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((r) => setTimeout(r, 900));
    setSentTo(values.email);
    reset({ email: values.email });
  });

  if (sentTo) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3 rounded-2xl border border-rooted-green/30 bg-soft-mist p-5 text-sm leading-relaxed text-deep-forest">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rooted-green/15 text-rooted-green">
            <MailCheck className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-display text-base font-semibold">
              If that email exists, a reset link is on its way.
            </p>
            <p className="mt-1 text-charcoal-ink/80">
              We would send a secure reset link to{" "}
              <span className="font-semibold text-deep-forest">{sentTo}</span>
              . The link will expire after a short time for your safety.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setSentTo(null)}
            className="text-sm font-medium text-rooted-green underline-offset-4 hover:underline"
          >
            Use a different email
          </button>
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-2 text-sm font-semibold text-deep-forest underline-offset-4 hover:underline"
          >
            Back to sign in
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      <TextField
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        hint="We will send a secure link to reset your password."
        error={errors.email?.message}
        {...register("email")}
      />

      <AuthButton type="submit" loading={isSubmitting}>
        Send reset link
        {!isSubmitting ? (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        ) : null}
      </AuthButton>

      <FormAlert tone="info">
        Preview only. No reset email is sent yet.
      </FormAlert>
    </form>
  );
}
