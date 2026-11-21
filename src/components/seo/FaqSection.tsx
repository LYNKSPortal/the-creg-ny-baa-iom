import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { faqPageJsonLd } from "@/lib/structuredData";
import type { Faq } from "@/data/faqs";

type FaqSectionProps = {
  items: Faq[];
  title?: string;
  eyebrow?: string;
  className?: string;
};

/**
 * Renders a visible, accessible FAQ accordion and emits matching FAQPage
 * structured data, written in natural question form so it answers the way
 * people phrase searches and AI assistant queries.
 */
export function FaqSection({ items, title = "Frequently Asked Questions", eyebrow = "Good to Know", className }: FaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className={className ?? "border-t border-cng-black/10 bg-cng-white"}>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
      <JsonLd data={faqPageJsonLd(items)} />
    </section>
  );
}
