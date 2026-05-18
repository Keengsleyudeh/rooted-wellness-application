"use client";

import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  PRIMARY_GOALS,
  PROFESSIONAL_ROLES,
  REMINDER_RHYTHMS,
  onboardingSchema,
  type OnboardingValues,
} from "@/lib/auth-schemas";
import {
  AuthButton,
  CheckboxField,
  FormAlert,
  RadioGroupField,
  SelectField,
  TextField,
} from "./auth-fields";

const REMINDER_OPTIONS: { value: (typeof REMINDER_RHYTHMS)[number]; label: string; description: string }[] = [
  {
    value: "morning",
    label: "Morning only",
    description: "A gentle nudge for the daily reset.",
  },
  {
    value: "evening",
    label: "Evening only",
    description: "A quiet reminder for the tracker.",
  },
  {
    value: "both",
    label: "Morning and evening",
    description: "Two soft cues to anchor the rhythm.",
  },
  {
    value: "none",
    label: "No reminders for now",
    description: "I'll check in on my own.",
  },
];

export function OnboardingForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingValues>({
    resolver: zodResolver(onboardingSchema),
    mode: "onTouched",
    defaultValues: {
      preferredName: "",
      role: undefined,
      primaryGoal: undefined,
      reminders: "morning",
      acknowledgeWellness: false as unknown as true,
    },
  });

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
            Your space is being prepared.
          </p>
          <p className="mt-1 text-charcoal-ink/80">
            Once payment and enrollment are wired up, this is where you&apos;ll
            arrive on your dashboard with Day 1 ready.
          </p>
        </div>
        <Link
          href="/app"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-rooted-green underline-offset-4 hover:underline"
        >
          Preview member space
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      <TextField
        label="Preferred name"
        autoComplete="given-name"
        placeholder="What should we call you?"
        required
        error={errors.preferredName?.message}
        hint="This shows up in your dashboard and reminders."
        {...register("preferredName")}
      />

      <SelectField
        label="What best describes your work?"
        placeholder="Select your closest role"
        required
        options={PROFESSIONAL_ROLES}
        error={errors.role?.message}
        {...register("role")}
      />

      <SelectField
        label="Your primary intention"
        placeholder="What matters most right now?"
        required
        options={PRIMARY_GOALS}
        error={errors.primaryGoal?.message}
        {...register("primaryGoal")}
      />

      <Controller
        control={control}
        name="reminders"
        render={({ field }) => (
          <RadioGroupField
            name={field.name}
            label="Daily reminder rhythm"
            hint="You can change this anytime in settings."
            required
            options={REMINDER_OPTIONS}
            value={field.value}
            onChange={field.onChange}
            error={errors.reminders?.message}
          />
        )}
      />

      <CheckboxField
        label={
          <span>
            I understand Rooted Wellness offers educational nervous system
            support and is not medical care, therapy, or emergency support. I
            will consult a qualified professional for clinical needs.
          </span>
        }
        error={errors.acknowledgeWellness?.message}
        {...register("acknowledgeWellness")}
      />

      <AuthButton type="submit" loading={isSubmitting}>
        Enter my Rooted space
        {!isSubmitting ? (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        ) : null}
      </AuthButton>

      <FormAlert tone="info">
        Preview only. Your preferences are not stored yet.
      </FormAlert>
    </form>
  );
}
