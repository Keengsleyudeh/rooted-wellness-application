import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  title: {
    default: `Admin · ${SITE_NAME}`,
    template: `%s · Admin · ${SITE_NAME}`,
  },
  description: "Rooted Wellness admin console.",
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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
