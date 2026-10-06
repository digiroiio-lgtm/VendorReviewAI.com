import type { Metadata } from "next";
import { domainPage, pages, type PageKey } from "@/lib/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type Entry = { path: string; title: string; description: string };

function build(entry: Entry, opts: { type: "website" | "article"; noindex?: boolean }): Metadata {
  const url = absoluteUrl(entry.path);
  const image = {
    url: absoluteUrl(siteConfig.ogImage.path),
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: siteConfig.ogImage.alt,
  };
  const article =
    opts.type === "article"
      ? {
          publishedTime: siteConfig.contentDates.published,
          modifiedTime: siteConfig.contentDates.modified,
        }
      : {};

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url },
    robots: opts.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: opts.type,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: entry.title,
      description: entry.description,
      images: [image],
      ...article,
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

/** Metadata for an indexable page from the registry. */
export function pageMetadata(key: PageKey): Metadata {
  return build(pages[key], { type: key === "home" ? "website" : "article" });
}

/** Metadata for `/domain`: noindex, follow. */
export function domainMetadata(): Metadata {
  return build(domainPage, { type: "website", noindex: true });
}
