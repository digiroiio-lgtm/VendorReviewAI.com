import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { HeaderNav } from "@/components/HeaderNav";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <svg className="brand__mark" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="7" fill="currentColor" />
            <path d="M9 16.5l4.5 4.5L23 11" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand__name">
            VendorReview<span className="brand__ai">AI</span>
          </span>
        </Link>
        <HeaderNav items={[...siteConfig.nav]} ctaLabel={siteConfig.cta.label} />
      </div>
    </header>
  );
}
