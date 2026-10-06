import Link from "next/link";
import { pages } from "@/lib/pages";

const related = [
  { term: "Vendor assessment", text: "Evaluating a vendor’s capabilities and risk" },
  { term: "Vendor due diligence", text: "Verifying the vendor before commitment" },
  { term: "Third-party risk management", text: "The ongoing program vendor review sits inside" },
  { term: "Procurement", text: "Sourcing, commercial terms and contracting" },
  { term: "Security review", text: "Controls, access and incident readiness" },
  { term: "Privacy review", text: "Personal data handling and subprocessors" },
  { term: "Compliance review", text: "Regulatory and contractual obligations" },
];

/** HTML/CSS map of how vendor review relates to adjacent disciplines. */
export function CategoryMap() {
  return (
    <figure className="map">
      <figcaption className="map__caption">How vendor review connects to related disciplines</figcaption>
      <div className="map__root">
        <Link href={pages.whatIsVendorReview.path}>Vendor Review</Link>
      </div>
      <ul className="map__list">
        {related.map((item) => (
          <li key={item.term}>
            <span className="map__term">{item.term}</span>
            <span className="map__text">{item.text}</span>
          </li>
        ))}
      </ul>
      <p className="map__ai">
        <Link href={pages.aiVendorReview.path}>AI-assisted review</Link> supports document analysis, evidence extraction,
        risk flagging and questionnaire analysis, with people in control of decisions.
      </p>
    </figure>
  );
}
