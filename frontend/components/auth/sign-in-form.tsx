"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { signInSchema, type SignInValues } from "@/lib/auth-schemas";
import {
  AuthButton,
  CheckboxField,
  FormAlert,
  PasswordField,
  TextField,
} from "./auth-fields";
import { AuthDivider, GoogleSsoButton } from "./sso-buttons";

export function SignInForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = handleSubmit(async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-rooted-green/30 bg-soft-mist p-5 text-sm leading-relaxed text-deep-forest">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rooted-green/15 text-rooted-green">
          <CheckCircle2 className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-base font-semibold">Welcome back.</p>
          <p className="mt-1 text-charcoal-ink/80">
            Your sign-in details look good. Once auth is wired up, you&apos;ll
            land on your dashboard from here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <GoogleSsoButton label="Continue with Google" />
      <AuthDivider label="or sign in with email" />

      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <PasswordField
          label={
            <span className="flex items-center justify-between">
              <span>Password</span>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-rooted-green underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </span>
          }
          autoComplete="current-password"
          placeholder="Your password"
          required
          error={errors.password?.message}
          {...register("password")}
        />

        <CheckboxField
          label={
            <span>
              Keep me signed in on this device
              <span className="block text-xs text-muted-gray">
                Avoid on shared or public devices.
              </span>
            </span>
          }
          {...register("remember")}
        />

        <AuthButton type="submit" loading={isSubmitting}>
          Sign in
          {!isSubmitting ? (
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          ) : null}
        </AuthButton>

        <FormAlert tone="info">
          This is a preview screen. No credentials are sent yet.
        </FormAlert>
      </form>
    </div>
  );
}
