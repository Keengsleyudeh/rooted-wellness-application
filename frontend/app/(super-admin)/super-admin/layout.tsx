import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { SuperAdminShell } from "@/components/super-admin/super-admin-shell";

export const metadata: Metadata = {
  title: {
    default: `Super Admin · ${SITE_NAME}`,
    template: `%s · Super Admin · ${SITE_NAME}`,
  },
  description: "Rooted Wellness super admin console.",
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

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SuperAdminShell>{children}</SuperAdminShell>;
}
