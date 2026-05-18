import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell } from "@/components/auth/auth-shell";
import { VerifyEmailPanel } from "@/components/auth/verify-email-panel";

export const metadata: Metadata = {
  title: `Verify your email · ${SITE_NAME}`,
  description:
    "Confirm your email to activate your Rooted Wellness account and start your reset.",
  robots: { index: false, follow: false, nocache: true },
};

type SearchParams = {
  email?: string | string[];
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const emailParam = sp?.email;
  const email = Array.isArray(emailParam) ? emailParam[0] : emailParam;

  return (
    <AuthShell
      size="sm"
      eyebrow="One last step"
      title={
        <>
          Verify your email
          <span className="block text-rooted-green">to begin your reset.</span>
        </>
      }
      description="We use email verification to keep your account safe and your space private."
      footer={
        <span>
          Wrong email?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Start sign up again
          </Link>
        </span>
      }
    >
      <VerifyEmailPanel email={email} />
    </AuthShell>
  );
}
