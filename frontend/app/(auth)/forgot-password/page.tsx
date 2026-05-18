import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: `Forgot password · ${SITE_NAME}`,
  description:
    "Reset your Rooted Wellness password and step back into your nervous system reset.",
  robots: { index: false, follow: false, nocache: true },
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      size="sm"
      eyebrow="No rush"
      title={
        <>
          Forgot your password?
          <span className="block text-rooted-green">That&apos;s perfectly okay.</span>
        </>
      }
      description="Enter the email you use with Rooted Wellness. We'll send a secure link to set a new one."
      footer={
        <span>
          Remembered it?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Back to sign in
          </Link>
        </span>
      }
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
