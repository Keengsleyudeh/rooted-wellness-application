import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell, AuthSidePanel } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: `Create your account · ${SITE_NAME}`,
  description:
    "Create your Rooted Wellness account to begin the 30-Day High Performance Reset.",
  robots: { index: false, follow: false, nocache: true },
};

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Begin gently"
      title={
        <>
          Make a quiet space
          <span className="block text-rooted-green">for your nervous system.</span>
        </>
      }
      description="Create your Rooted account. It only takes a moment, and there is no pressure once you arrive."
      footer={
        <span>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </span>
      }
      panel={
        <AuthSidePanel
          title={
            <>
              A 30-day rhythm
              <span className="block bg-gradient-to-r from-soft-gold via-[#F2DDA6] to-soft-gold bg-clip-text text-transparent">
                you can actually keep.
              </span>
            </>
          }
          body="Mornings for somatic regulation. Evenings for a 60-second tracker. Weekly insight. A real certificate at the end."
          highlights={[
            {
              label: "Built for high performers",
              description: "Founders, clinicians, executives, consultants.",
            },
            {
              label: "Education, not therapy",
              description: "Wellness support that respects clinical care.",
            },
          ]}
        />
      }
    >
      <SignUpForm />
    </AuthShell>
  );
}
