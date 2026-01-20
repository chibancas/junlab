import type { MetadataRoute } from "next";

const siteUrl = "https://junlab.es";

const routes = ["", "/projects", "/studies", "/hobbies", "/contact", "/sended"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path, index) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
