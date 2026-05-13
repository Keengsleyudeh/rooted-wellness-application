import type { Metadata, Viewport } from "next";
import { Nunito, Comfortaa } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/utils";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Nervous System Regulation for Sustainable Performance`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A calm, premium wellness platform for nervous system regulation, self-trust, emotional safety, and the 30-Day High Performance Reset for high-performing professionals.",
  applicationName: SITE_NAME,
  authors: [{ name: "Rooted Wellness" }],
  generator: "Next.js",
  keywords: [
    "Rooted Wellness",
    "nervous system regulation",
    "somatic healing",
    "EFT tapping",
    "emotional wellness",
    "burnout recovery",
    "self-trust",
    "emotional safety",
    "high-performing professionals",
    "30-Day High Performance Reset",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon-192.svg", sizes: "192x192" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1F1A" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${comfortaa.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ivory text-charcoal-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-deep-forest focus:px-4 focus:py-2 focus:text-ivory focus:shadow-glow"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
