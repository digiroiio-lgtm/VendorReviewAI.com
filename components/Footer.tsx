import Link from "next/link";
import { indexablePageKeys, pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site-config";
import { SaleLink } from "@/components/SaleLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">{siteConfig.name}</p>
            <p>{siteConfig.statusNote}</p>
          </div>
          <nav aria-label="Guides">
            <h2 className="site-footer__heading">Guides</h2>
            <ul>
              {indexablePageKeys
                .filter((key) => key !== "home")
                .map((key) => (
                  <li key={key}>
                    <Link href={pages[key].path}>{pages[key].breadcrumb}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          <nav aria-label="Domain">
            <h2 className="site-footer__heading">Domain</h2>
            <ul>
              <li>
                <SaleLink>{siteConfig.cta.label}</SaleLink>
              </li>
              <li>
                <Link href={siteConfig.sale.domainPagePath}>Domain details</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="site-footer__disclaimer">{siteConfig.disclaimer}</p>
        <p className="site-footer__legal">© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
