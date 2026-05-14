import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const PUBLIC_ROUTES = [
  { path: "/", priority: 1.0 },
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
