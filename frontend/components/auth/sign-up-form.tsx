"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MailCheck } from "lucide-react";
import { signUpSchema, type SignUpValues } from "@/lib/auth-schemas";
import {
  AuthButton,
  CheckboxField,
  FormAlert,
  PasswordField,
  TextField,
} from "./auth-fields";
import { PasswordStrength } from "./password-strength";
import { AuthDivider, GoogleSsoButton } from "./sso-buttons";

export function SignUpForm() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false as unknown as true,
    },
  });

  const password = watch("password") ?? "";

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmittedEmail(values.email);
  });

  if (submittedEmail) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-rooted-green/30 bg-soft-mist p-5 text-sm leading-relaxed text-deep-forest">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rooted-green/15 text-rooted-green">
          <MailCheck className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-base font-semibold">
            Almost there. Check your email.
          </p>
          <p className="mt-1 text-charcoal-ink/80">
            We would send a verification link to{" "}
            <span className="font-semibold text-deep-forest">
              {submittedEmail}
            </span>
            . Once email is wired up, the link will activate your account.
          </p>
        </div>
        <Link
          href="/verify-email"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-rooted-green underline-offset-4 hover:underline"
        >
          Go to verify email
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <GoogleSsoButton label="Sign up with Google" />
      <AuthDivider label="or use your email" />

      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
        <TextField
          label="Full name"
          autoComplete="name"
          placeholder="Your full name"
          required
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />

        <div>
          <PasswordField
            label="Password"
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
          label="Confirm password"
          autoComplete="new-password"
          placeholder="Type it once more"
          required
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        <CheckboxField
          label={
            <span>
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-rooted-green underline-offset-4 hover:underline"
              >
                terms
              </Link>
              ,{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-rooted-green underline-offset-4 hover:underline"
              >
                privacy policy
              </Link>
              , and the wellness disclaimer. Rooted Wellness is educational,
              not medical care.
            </span>
          }
          error={errors.agreeToTerms?.message}
          {...register("agreeToTerms")}
        />

        <AuthButton type="submit" loading={isSubmitting}>
          Create account
          {!isSubmitting ? (
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          ) : null}
        </AuthButton>

        <FormAlert tone="info">
          Preview only. Your details are not stored or transmitted yet.
        </FormAlert>
      </form>
    </div>
  );
}
