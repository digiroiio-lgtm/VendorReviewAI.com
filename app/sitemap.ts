import type { MetadataRoute } from "next";
import { indexablePageKeys, pages } from "@/lib/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

/** Indexable pages only; `/domain` is deliberately excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePageKeys.map((key) => ({
    url: absoluteUrl(pages[key].path),
    lastModified: siteConfig.contentDates.modified,
  }));
}
