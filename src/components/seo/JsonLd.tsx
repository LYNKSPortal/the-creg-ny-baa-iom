type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Renders a schema.org JSON-LD script tag. Centralising this avoids
 * repeating the dangerouslySetInnerHTML boilerplate (and its eslint
 * exemptions) across every page that needs structured data.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
