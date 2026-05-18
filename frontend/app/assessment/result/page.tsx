import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { AssessmentResult } from "@/components/assessment/assessment-result";

export const metadata: Metadata = {
  title: `Your nervous system profile | ${SITE_NAME}`,
  description:
    "Your personalised wellness reflection based on the Rooted nervous system assessment.",
  alternates: {
    canonical: "/assessment/result",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AssessmentResultPage() {
  return (
    <>
      <SiteHeader />
      <AssessmentResult />
      <SiteFooter />
    </>
  );
}
