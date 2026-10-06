import type { Metadata } from "next";
import Link from "next/link";
import { indexablePageKeys, pages } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Page Not Found | VendorReviewAI.com",
  description: "The page you requested could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container center-page">
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has moved. These guides may help:</p>
      <ul>
        {indexablePageKeys.map((key) => (
          <li key={key}>
            <Link href={pages[key].path}>{pages[key].breadcrumb}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
