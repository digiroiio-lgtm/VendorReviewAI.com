import { pages, type PageKey } from "@/lib/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export type Crumb = { name: string; href: string };

const websiteId = `${absoluteUrl("/")}#website`;

/** Breadcrumb trail shared by the visible <Breadcrumbs> and the JSON-LD. */
export function breadcrumbsFor(key: PageKey): Crumb[] {
  if (key === "home") return [{ name: pages.home.breadcrumb, href: pages.home.path }];
  return [
    { name: pages.home.breadcrumb, href: pages.home.path },
    { name: pages[key].breadcrumb, href: pages[key].path },
  ];
}

function breadcrumbList(crumbs: Crumb[], pageUrl: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}

function webSite() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
  };
}

/**
 * JSON-LD graph for an indexable page. Everything emitted here is also visible
 * on the page (H1, breadcrumbs, dates); no authors, ratings or organizations
 * are asserted.
 */
export function pageGraph(key: PageKey) {
  const page = pages[key];
  const pageUrl = absoluteUrl(page.path);
  const isHome = key === "home";
  const webPageId = `${pageUrl}#webpage`;

  const webPage = {
    "@type": "WebPage",
    "@id": webPageId,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId },
    about: page.about.map((name) => ({ "@type": "Thing", name })),
    ...(isHome ? {} : { breadcrumb: { "@id": `${pageUrl}#breadcrumb` } }),
  };

  const graph: object[] = [webPage];
  if (isHome) {
    graph.unshift(webSite());
  } else {
    graph.push(breadcrumbList(breadcrumbsFor(key), pageUrl));
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: { "@id": webPageId },
      isPartOf: { "@id": websiteId },
      inLanguage: "en-US",
      image: absoluteUrl(siteConfig.ogImage.path),
      datePublished: siteConfig.contentDates.published,
      dateModified: siteConfig.contentDates.modified,
    });
    graph.unshift(webSite());
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
