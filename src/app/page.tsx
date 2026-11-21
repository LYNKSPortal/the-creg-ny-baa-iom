import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "Food & Dining",
    description:
      "Home-cooked pub classics, daily specials and a traditional Sunday roast, with an extensive gluten-free menu and dishes the whole family will enjoy.",
    href: "/menus",
    image: "/images/food/creg-ny-burger.jpg",
    imageAlt: "The Creg-ny-Burger with homemade chips and onion rings",
  },
  {
    title: "TT Racing & VIP Hospitality",
    description:
      "Watch the world's fastest road racers sweep through the famous Creg corner from our exclusive balcony viewing and hospitality suites.",
    href: "/tt-2027",
    image: "/images/tt/spectators-at-the-corner.jpg",
    imageAlt: "Spectators lining the TT course at the Creg Ny Baa corner on race day",
  },
  {
    title: "Private Functions & Events",
    description:
      "From birthdays to corporate events, our first-floor Veranda Suite offers flexible space, private bar and uninterrupted countryside views.",
    href: "/functions-events",
    image: "/images/events/function-room-set-up.jpg",
    imageAlt: "The function room set up for a private celebration at the Creg Ny Baa",
  },
  {
    title: "The Creg Experience",
    description:
      "A warm welcome, breathtaking Mountain Road views and genuine Manx hospitality — discover what makes the Creg Ny Baa unlike anywhere else.",
    href: "/gallery",
    image: "/images/venue/exterior-mountain-road.jpg",
    imageAlt: "The Creg Ny Baa exterior on the Mountain Road, Isle of Man",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: siteConfig.name,
            image: `${siteConfig.url}/og-image.jpg`,
            "@id": siteConfig.url,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            servesCuisine: "British",
            priceRange: "££",
            address: {
              "@type": "PostalAddress",
              streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
              addressLocality: siteConfig.address.town,
              postalCode: siteConfig.address.postcode,
              addressCountry: "IM",
            },
          }),
        }}
      />

      <Hero />

      {/* Introduction */}
      <section className="bg-cng-cream">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-red">Welcome to the Creg</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cng-black sm:text-5xl">
              Perched on the Mountain Road, at the heart of TT history
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-relaxed text-cng-grey-700">
              Standing proudly on the A18 Mountain Road, the Creg Ny Baa is one of the most
              recognisable corners on the entire Isle of Man TT course — a place where
              generations of racing fans have gathered to watch history unfold. But it&apos;s far more
              than a grandstand: it&apos;s a genuine Manx pub and restaurant, open to everyone, with
              breathtaking countryside views, a warm traditional atmosphere and freshly cooked
              food served every day of the year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-t border-cng-black/10 bg-cng-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="Four Reasons to Visit"
              description="Whether you&apos;re here for a pint and a plate of fish and chips, a trackside view of the TT, or a private celebration, the Creg Ny Baa has a place for you."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial: TT heritage */}
      <section className="border-t border-white/10 bg-cng-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/venue/exterior-bikes-lined-up.jpg"
                alt="Motorcycles lined up outside the Creg Ny Baa during TT race week"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">TT Course Corner</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              A front-row seat to the greatest road race on Earth
            </h2>
            <p className="mt-6 text-balance text-base leading-relaxed text-white/75 sm:text-lg">
              For over a century, the Creg Ny Baa has watched the TT course&apos;s fastest, most
              skilled riders sweep through its famous bend. Today, our balcony and hospitality
              spaces offer one of the best vantage points on the entire 37&frac34; mile course —
              combined with the comfort, food and hospitality of a proper Manx pub.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/tt-2027" variant="gold">
                TT 2027
              </PrimaryButton>
              <PrimaryButton href="/mgp-classic-tt" variant="outline">
                MGP / Classic TT
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cng-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/venue/bar-drinks.jpg"
                alt="Drinks ready to serve at the Creg Ny Baa bar"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-red">What Visitors Say</p>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cng-black sm:text-5xl">
              Kind Words From Our Guests
            </h2>
            <div className="mt-8">
              <TestimonialCarousel align="left" />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
