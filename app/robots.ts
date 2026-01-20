import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sended", "/error"],
    },
    sitemap: "https://junlab.es/sitemap.xml",
  };
}
