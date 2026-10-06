/**
 * External sources cited in page content. Only primary or standards-body
 * references are listed; pages cite them where an external factual claim is
 * made.
 */

export type Source = {
  title: string;
  publisher: string;
  url: string;
};

export const sources = {
  nist80016: {
    title: "Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations (SP 800-161 Rev. 1)",
    publisher: "NIST",
    url: "https://csrc.nist.gov/pubs/sp/800/161/r1/final",
  },
  nistAiRmf: {
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    publisher: "NIST",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  interagencyGuidance: {
    title: "Interagency Guidance on Third-Party Relationships: Risk Management",
    publisher: "Federal Reserve, FDIC and OCC (Federal Register, June 2023)",
    url: "https://www.federalregister.gov/documents/2023/06/09/2023-12340/interagency-guidance-on-third-party-relationships-risk-management",
  },
  dora: {
    title: "Regulation (EU) 2022/2554 on digital operational resilience for the financial sector (DORA)",
    publisher: "EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
  },
  gdpr: {
    title: "Regulation (EU) 2016/679 (General Data Protection Regulation), Article 28 on processors",
    publisher: "EUR-Lex",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  iso27001: {
    title: "ISO/IEC 27001: Information security management systems",
    publisher: "ISO",
    url: "https://www.iso.org/standard/27001",
  },
} as const satisfies Record<string, Source>;

export type SourceKey = keyof typeof sources;
