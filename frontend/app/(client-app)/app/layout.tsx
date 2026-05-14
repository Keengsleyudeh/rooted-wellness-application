import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { AppShell } from "@/components/app/app-shell";

export const metadata: Metadata = {
  title: {
    default: `Member · ${SITE_NAME}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Your private member space for the 30-Day High Performance Reset. Daily nervous system regulation, trackers, weekly reports, and certificate.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: undefined },
  openGraph: undefined,
  twitter: undefined,
};

export default function ClientAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
