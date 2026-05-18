import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: `Account · ${SITE_NAME}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Sign in, create your account, and prepare your space for the 30-Day High Performance Reset.",
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

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
