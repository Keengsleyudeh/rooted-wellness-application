import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { LegalPage } from "@/components/marketing/legal-page";
import { privacyPolicyContent } from "@/content/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    "How Rooted Wellness collects, uses, protects, and manages your information when you interact with our website, programs, and digital products.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "article",
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "How we collect, use, protect, and manage your information across Rooted Wellness.",
  },
  twitter: {
    card: "summary",
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "How we collect, use, protect, and manage your information across Rooted Wellness.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage document={privacyPolicyContent} />
      <SiteFooter />
    </>
  );
}
