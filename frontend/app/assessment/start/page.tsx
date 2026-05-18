import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { AssessmentForm } from "@/components/assessment/assessment-form";

export const metadata: Metadata = {
  title: `Start the assessment | ${SITE_NAME}`,
  description:
    "Begin the Rooted nervous system assessment. Twenty short, wellness-focused reflections across five domains.",
  alternates: {
    canonical: "/assessment/start",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AssessmentStartPage() {
  return (
    <>
      <SiteHeader />
      <AssessmentForm />
      <SiteFooter />
    </>
  );
}
