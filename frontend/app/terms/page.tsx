import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { LegalPage } from "@/components/marketing/legal-page";
import { termsContent } from "@/content/legal";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${SITE_NAME}`,
  description:
    "The terms and conditions that govern your use of the Rooted Wellness website, programs, digital products, and related services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "article",
    title: `Terms and Conditions | ${SITE_NAME}`,
    description:
      "The agreement that governs your use of Rooted Wellness products and services.",
  },
  twitter: {
    card: "summary",
    title: `Terms and Conditions | ${SITE_NAME}`,
    description:
      "The agreement that governs your use of Rooted Wellness products and services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage document={termsContent} />
      <SiteFooter />
    </>
  );
}
