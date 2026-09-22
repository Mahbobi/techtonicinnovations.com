import { JsonLd } from "../components/JsonLd";
import { LegalDocument } from "../components/LegalDocument";
import { TERMS_ROUTE } from "../data/routes";
import { SITE } from "../data/site";
import { TERMS_EFFECTIVE_DATE, TERMS_OPERATOR, termsIntro, termsSections } from "../data/terms";
import { useDocumentHead } from "../lib/head";
import { breadcrumbJsonLd } from "../lib/jsonld";

export function TermsPage() {
  useDocumentHead(TERMS_ROUTE.meta);

  return (
    <LegalDocument
      title="Terms of service"
      breadcrumb="Terms of Service"
      effectiveDate={TERMS_EFFECTIVE_DATE}
      operator={TERMS_OPERATOR}
      intro={termsIntro}
      sections={termsSections}
    >
      <JsonLd data={breadcrumbJsonLd("Terms of Service", "/terms")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TERMS_ROUTE.meta.title,
          description: TERMS_ROUTE.meta.description,
          url: TERMS_ROUTE.meta.canonical,
          publisher: { "@id": SITE.organizationId },
        }}
      />
    </LegalDocument>
  );
}
