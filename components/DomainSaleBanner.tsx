import { siteConfig } from "@/lib/site-config";
import { SaleLink } from "@/components/SaleLink";

/** Slim sitewide notice. Destination: NEXT_PUBLIC_DOMAIN_SALE_URL, else /domain. */
export function DomainSaleBanner() {
  return (
    <aside className="sale-banner" aria-label="Domain availability">
      <div className="container sale-banner__inner">
        <p className="sale-banner__text">
          <span className="show-desktop">{siteConfig.name} is available for acquisition</span>
          <span className="show-desktop sale-banner__sep" aria-hidden="true">
            →
          </span>
          <SaleLink className="sale-banner__link show-desktop">View Domain Details</SaleLink>
          <SaleLink className="sale-banner__link show-mobile">
            This domain is for sale <span aria-hidden="true">→</span>
          </SaleLink>
        </p>
      </div>
    </aside>
  );
}
