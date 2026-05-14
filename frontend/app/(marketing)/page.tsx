import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import { SiteHeader } from "@/components/marketing/site-header";
import { HeroSection } from "@/components/marketing/hero-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { ProblemAwareness } from "@/components/marketing/problem-awareness";
import { BurnoutChecklist } from "@/components/marketing/burnout-checklist";
import { PhilosophySection } from "@/components/marketing/philosophy-section";
import { ScienceSection } from "@/components/marketing/science-section";
import { ProgramSection } from "@/components/marketing/program-section";
import { TimelineSection } from "@/components/marketing/timeline-section";
import { DailyRhythm } from "@/components/marketing/daily-rhythm";
import { TransformationSection } from "@/components/marketing/transformation-section";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { AssessmentCta } from "@/components/marketing/assessment-cta";
import { FounderSection } from "@/components/marketing/founder-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { SiteFooter } from "@/components/marketing/site-footer";
import { HomeJsonLd } from "@/components/marketing/json-ld";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Nervous System Regulation for Sustainable Performance`,
  description:
    "A calm, premium wellness platform for nervous system regulation, self-trust, emotional safety, and the 30-Day High Performance Reset for high-performing professionals.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Nervous System Regulation for Sustainable Performance`,
    description:
      "Reset your nervous system. Return to yourself. The 30-Day High Performance Reset for high-performing professionals.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Nervous System Regulation for Sustainable Performance`,
    description:
      "Reset your nervous system. Return to yourself. The 30-Day High Performance Reset for high-performing professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <TrustStrip />
        <ProblemAwareness />
        <BurnoutChecklist />
        <PhilosophySection />
        <ScienceSection />
        <ProgramSection />
        <TimelineSection />
        <DailyRhythm />
        <TransformationSection />
        <DashboardPreview />
        <AssessmentCta />
        <FounderSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
