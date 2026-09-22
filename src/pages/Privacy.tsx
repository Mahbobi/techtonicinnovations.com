import { JsonLd } from "../components/JsonLd";
import { LegalDocument } from "../components/LegalDocument";
import { PRIVACY_EFFECTIVE_DATE, PRIVACY_OPERATOR, privacySections } from "../data/privacy";
import { PRIVACY_ROUTE } from "../data/routes";
import { SITE } from "../data/site";
import { useDocumentHead } from "../lib/head";
import { breadcrumbJsonLd } from "../lib/jsonld";

export function PrivacyPage() {
  useDocumentHead(PRIVACY_ROUTE.meta);

  return (
    <LegalDocument
      title="Privacy policy"
      breadcrumb="Privacy Policy"
      effectiveDate={PRIVACY_EFFECTIVE_DATE}
      operator={PRIVACY_OPERATOR}
      sections={privacySections}
    >
      <JsonLd data={breadcrumbJsonLd("Privacy Policy", "/privacy")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: PRIVACY_ROUTE.meta.title,
          description: PRIVACY_ROUTE.meta.description,
          url: PRIVACY_ROUTE.meta.canonical,
          publisher: { "@id": SITE.organizationId },
        }}
      />
    </LegalDocument>
  );
}
