import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const PUBLIC_ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/30-day-high-performance-reset", priority: 0.9 },
  { path: "/burnout-assessment", priority: 0.85 },
  { path: "/pricing", priority: 0.85 },
  { path: "/faq", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/nervous-system-regulation", priority: 0.75 },
  { path: "/burnout-for-professionals", priority: 0.75 },
  { path: "/terms", priority: 0.4 },
  { path: "/privacy-policy", priority: 0.4 },
  { path: "/medical-disclaimer", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PUBLIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
