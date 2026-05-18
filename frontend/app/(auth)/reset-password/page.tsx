import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";
import { AuthShell } from "@/components/auth/auth-shell";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export const metadata: Metadata = {
  title: `Reset password · ${SITE_NAME}`,
  description:
    "Set a new password for your Rooted Wellness account and continue your reset.",
  robots: { index: false, follow: false, nocache: true },
};

type SearchParams = {
  token?: string | string[];
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const tokenParam = sp?.token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;

  return (
    <AuthShell
      size="sm"
      eyebrow="Set a new password"
      title={
        <>
          Choose a calm,
          <span className="block text-rooted-green">strong password.</span>
        </>
      }
      description="A new password will sign you out of other sessions. You'll start fresh."
      footer={
        <span>
          Need a new link?{" "}
          <Link
            href="/forgot-password"
            className="font-semibold text-rooted-green underline-offset-4 hover:underline"
          >
            Request another reset
          </Link>
        </span>
      }
    >
      <ResetPasswordForm token={token} />
    </AuthShell>
  );
}
