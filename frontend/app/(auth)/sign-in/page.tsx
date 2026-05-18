import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell, AuthSidePanel } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: `Sign in · ${SITE_NAME}`,
  description:
    "Sign in to your Rooted Wellness member space to continue your 30-Day High Performance Reset.",
  robots: { index: false, follow: false, nocache: true },
};

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title={
        <>
          Step back in.
          <span className="block text-rooted-green">Quietly. Whenever you need.</span>
        </>
      }
      description="Your nervous system reset is exactly where you left it. Sign in to continue at your own pace."
      footer={
        <span>
          New to Rooted Wellness?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </span>
      }
      panel={
        <AuthSidePanel
          title={
            <>
              Burnout is not failure.
              <span className="block bg-gradient-to-r from-soft-gold via-[#F2DDA6] to-soft-gold bg-clip-text text-transparent">
                It is biology.
              </span>
            </>
          }
          body="Sign in to revisit your guided somatic exercises, evening tracker, and weekly insight."
          highlights={[
            {
              label: "Calm by design",
              description: "Low cognitive load. One steady next step.",
            },
            {
              label: "Private by default",
              description: "Reflections stay with you. No diagnosis here.",
            },
          ]}
        />
      }
    >
      <SignInForm />
    </AuthShell>
  );
}
