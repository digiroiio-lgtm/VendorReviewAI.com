import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DomainSaleBanner } from "@/components/DomainSaleBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: `${siteConfig.name}: AI Vendor Review and Third-Party Risk`,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage.path),
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <DomainSaleBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
