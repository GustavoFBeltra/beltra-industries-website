import type { MetadataRoute } from "next";
import { platforms } from "@/lib/platforms";

const BASE = "https://beltraindustries.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/platforms",
    "/technology",
    "/industries",
    "/about",
    "/trust",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const platformRoutes = platforms.map((p) => ({
    url: `${BASE}/platforms/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...platformRoutes];
}
