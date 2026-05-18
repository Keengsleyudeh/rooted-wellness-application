import { z } from "zod";

const emailField = z
  .string()
  .min(1, "Please enter your email address.")
  .email("That email doesn't look quite right.")
  .max(254, "Email is too long.");

const passwordField = z
  .string()
  .min(8, "Use at least 8 characters.")
  .max(128, "Password is too long.")
  .regex(/[A-Z]/, "Include at least one uppercase letter.")
  .regex(/[a-z]/, "Include at least one lowercase letter.")
  .regex(/[0-9]/, "Include at least one number.");

const nameField = z
  .string()
  .trim()
  .min(2, "Please share your full name.")
  .max(80, "Name is too long.")
  .regex(/^[\p{L}'\-\s]+$/u, "Letters, spaces, hyphens, and apostrophes only.");

export const signInSchema = z.object({
  email: emailField,
  password: z.string().min(1, "Please enter your password."),
  remember: z.boolean().optional(),
});

export type SignInValues = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    fullName: nameField,
    email: emailField,
    password: passwordField,
    confirmPassword: z.string().min(1, "Please confirm your password."),
    agreeToTerms: z.literal(true, {
      message: "Please acknowledge the terms and wellness disclaimer.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: emailField,
});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: passwordField,
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const verifyEmailResendSchema = z.object({
  email: emailField,
});

export type VerifyEmailResendValues = z.infer<typeof verifyEmailResendSchema>;

export const PROFESSIONAL_ROLES = [
  "Founder or executive",
  "Healthcare professional",
  "Consultant or advisor",
  "NGO or nonprofit leader",
  "Remote knowledge worker",
  "Other high-responsibility role",
] as const;

export const PRIMARY_GOALS = [
  "Recover from burnout",
  "Steady my energy",
  "Improve focus and clarity",
  "Sleep better",
  "Regulate stress responses",
  "Sustain long-term performance",
] as const;

export const REMINDER_RHYTHMS = ["morning", "evening", "both", "none"] as const;

export const onboardingSchema = z.object({
  preferredName: z
    .string()
    .trim()
    .min(1, "Please tell us what to call you.")
    .max(40, "Preferred name is too long."),
  role: z.enum(PROFESSIONAL_ROLES, {
    message: "Please choose the closest match.",
  }),
  primaryGoal: z.enum(PRIMARY_GOALS, {
    message: "Please choose a primary intention.",
  }),
  reminders: z.enum(REMINDER_RHYTHMS, {
    message: "Please choose a reminder rhythm.",
  }),
  acknowledgeWellness: z.literal(true, {
    message: "Please acknowledge the wellness disclaimer.",
  }),
});

export type OnboardingValues = z.infer<typeof onboardingSchema>;

/**
 * Lightweight password strength estimate for UX feedback only.
 * The server is the source of truth for any real auth flow.
 */
export function estimatePasswordStrength(password: string): {
  score: 0 | 1 | 2 | 3 | 4;
  label: "Empty" | "Too short" | "Weak" | "Fair" | "Strong" | "Excellent";
} {
  if (!password) return { score: 0, label: "Empty" };
  if (password.length < 8) return { score: 1, label: "Too short" };

  let score = 0;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  if (password.length >= 12) score += 1;

  if (score <= 2) return { score: 1, label: "Weak" };
  if (score === 3) return { score: 2, label: "Fair" };
  if (score === 4) return { score: 3, label: "Strong" };
  return { score: 4, label: "Excellent" };
}
