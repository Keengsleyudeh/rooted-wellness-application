import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell, AuthSidePanel } from "@/components/auth/auth-shell";
import { OnboardingForm } from "@/components/auth/onboarding-form";

export const metadata: Metadata = {
  title: `Onboarding · ${SITE_NAME}`,
  description:
    "Prepare your Rooted Wellness space before stepping into the 30-Day High Performance Reset.",
  robots: { index: false, follow: false, nocache: true },
};

export default function OnboardingPage() {
  return (
    <AuthShell
      size="lg"
      eyebrow="Prepare your space"
      title={
        <>
          A few quiet questions
          <span className="block text-rooted-green">before Day 1.</span>
        </>
      }
      description="These shape your dashboard and the rhythm of your reminders. Nothing here is shared. You can change every answer in settings."
      footer={
        <span>
          Not ready yet?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Save and continue later
          </Link>
        </span>
      }
      panel={
        <AuthSidePanel
          title={
            <>
              Step in slowly.
              <span className="block bg-gradient-to-r from-soft-gold via-[#F2DDA6] to-soft-gold bg-clip-text text-transparent">
                Stay for thirty days.
              </span>
            </>
          }
          body="Your nervous system has carried you here. The next 30 days are about gentle, structured regulation, one day at a time."
          highlights={[
            {
              label: "Day 1 unlocks after onboarding",
              description: "A short morning practice and a 60-second tracker.",
            },
            {
              label: "Weeks unlock with consistency",
              description: "Week 2 opens after Week 1 reaches 100 percent.",
            },
            {
              label: "A real certificate",
              description: "Awarded once you complete all 30 days.",
            },
          ]}
        />
      }
    >
      <OnboardingForm />
    </AuthShell>
  );
}
