import { siteConfig } from "@/data/site";
import { lunchHours, eveningHours } from "@/data/hours";

/**
 * schema.org structured data builders, kept in one place so every page
 * produces consistent, accurate markup from the same source-of-truth data
 * files (src/data/site.ts, src/data/hours.ts). Only facts we're confident
 * about are included; see comments for anything deliberately omitted.
 */

const dayMap: Record<string, string[]> = {
  "Monday – Thursday": ["Monday", "Tuesday", "Wednesday", "Thursday"],
  "Friday – Sunday": ["Friday", "Saturday", "Sunday"],
  "Friday – Saturday": ["Friday", "Saturday"],
};

function toOpeningHoursSpecification() {
  // Only "confirmed" periods are included (and only ones with an explicit
  // start–end time), Sunday evening is deliberately left out since it isn't
  // confirmed, and lunch/evening are modelled as separate windows per day
  // since there's a gap between them (see src/data/hours.ts).
  const specs: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }> = [];

  for (const period of [...lunchHours, ...eveningHours]) {
    if (!period.confirmed) continue;
    const days = dayMap[period.days];
    if (!days || !period.time.includes("–")) continue;
    const [opens, closes] = period.time.split(" – ").map((t) => t.trim());
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    });
  }

  return specs;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    servesCuisine: ["British", "Pub food", "Manx"],
    priceRange: "££",
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.town,
      postalCode: siteConfig.address.postcode,
      addressCountry: "IM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsHref,
    openingHoursSpecification: toOpeningHoursSpecification(),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(Boolean),
    ...(siteConfig.bookingUrl ? { potentialAction: { "@type": "ReserveAction", target: siteConfig.bookingUrl } } : {}),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type Breadcrumb = { name: string; href: string };

export function breadcrumbListJsonLd(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

type ProductLike = { name: string; description: string; image: string; stock: string };

/**
 * ItemList of Products for the Merchandise page. Prices are still to be
 * confirmed (see src/data/merchandise.ts), so no Offer/price is asserted;
 * availability is mapped to schema.org's controlled vocabulary instead.
 */
export function productsJsonLd(products: ProductLike[]) {
  const availabilityMap: Record<string, string> = {
    "In Stock": "https://schema.org/InStock",
    "Limited Availability": "https://schema.org/LimitedAvailability",
    "Coming Soon": "https://schema.org/PreOrder",
  };

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `${siteConfig.url}${product.image}`,
        brand: { "@type": "Brand", name: siteConfig.shortName },
        offers: {
          "@type": "Offer",
          availability: availabilityMap[product.stock] ?? "https://schema.org/InStoreOnly",
          seller: { "@type": "Organization", name: siteConfig.name },
        },
      },
    })),
  };
}

type MenuCategoryLike = { title: string; description: string };

/**
 * schema.org/Menu for the Our Menus page. Deliberately omits prices and
 * individual dishes in structured data since we don't have a machine-
 * readable breakdown, only category-level PDFs, linking to those instead.
 */
export function menuJsonLd(categories: MenuCategoryLike[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${siteConfig.name} Menus`,
    url: `${siteConfig.url}/menus`,
    inLanguage: "en-GB",
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      description: category.description,
    })),
  };
}
