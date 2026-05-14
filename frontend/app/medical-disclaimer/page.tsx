import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { LegalPage } from "@/components/marketing/legal-page";
import { medicalDisclaimerContent } from "@/content/legal";

export const metadata: Metadata = {
  title: `Medical Disclaimer | ${SITE_NAME}`,
  description:
    "Rooted Wellness is a wellness and educational platform. Read our medical disclaimer to understand the wellness boundary and how our content should be used.",
  alternates: {
    canonical: "/medical-disclaimer",
  },
  openGraph: {
    type: "article",
    title: `Medical Disclaimer | ${SITE_NAME}`,
    description:
      "The wellness boundary for Rooted Wellness. Our content is educational and does not provide medical care, diagnosis, therapy, or emergency support.",
  },
  twitter: {
    card: "summary",
    title: `Medical Disclaimer | ${SITE_NAME}`,
    description:
      "The wellness boundary for Rooted Wellness. Educational content only.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <LegalPage document={medicalDisclaimerContent} />
      <SiteFooter />
    </>
  );
}
