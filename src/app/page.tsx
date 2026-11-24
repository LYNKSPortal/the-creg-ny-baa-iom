import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FaqSection } from "@/components/seo/FaqSection";
import { homeFaqs } from "@/data/faqs";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Isle of Man TT Pub, Restaurant & Race-Day Hospitality | The Famous Creg Ny Baa",
  description:
    "The Famous Creg Ny Baa: a legendary Isle of Man TT corner, traditional Manx pub and restaurant on the Mountain Road, Onchan. Home-cooked food, gluten-free menu, private functions and race-day hospitality.",
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph("/"),
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
      "A warm welcome, breathtaking Mountain Road views and genuine Manx hospitality, discover what makes the Creg Ny Baa unlike anywhere else.",
    href: "/gallery",
    image: "/images/venue/exterior-mountain-road.jpg",
    imageAlt: "The Creg Ny Baa exterior on the Mountain Road, Isle of Man",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section aria-labelledby="creg-updates-heading" className="border-b border-cng-black/10 bg-cng-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="border-l-4 border-cng-red pl-6 sm:pl-8">
              <h2 id="creg-updates-heading" className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cng-black sm:text-5xl">
                Creg Updates
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cng-grey-700">
                News, events and the latest from the Creg Ny Baa.
              </p>
            </div>
          </Reveal>
          <article className="mt-10 overflow-hidden border border-cng-black/10 bg-cng-cream">
            <header className="relative isolate overflow-hidden bg-cng-black px-6 py-12 text-white sm:px-10 sm:py-14">
              <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 240" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="christmas-bauble-red" cx="35%" cy="25%">
                    <stop offset="0" stopColor="#f16b65" />
                    <stop offset="0.45" stopColor="#b51f31" />
                    <stop offset="1" stopColor="#510c1c" />
                  </radialGradient>
                  <radialGradient id="christmas-bauble-gold" cx="35%" cy="25%">
                    <stop offset="0" stopColor="#fff0b9" />
                    <stop offset="0.5" stopColor="#caa65b" />
                    <stop offset="1" stopColor="#715220" />
                  </radialGradient>
                  <radialGradient id="christmas-light">
                    <stop offset="0" stopColor="#fff4cb" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#e8bb62" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path d="M-20 0 Q150 90 300 10 T600 10 T900 10 T1220 0" fill="none" stroke="#264d3a" strokeWidth="18" />
                <path d="M-20 0 Q150 90 300 10 T600 10 T900 10 T1220 0" fill="none" stroke="#497155" strokeWidth="26" strokeDasharray="2 9" />
                <path d="M-20 18 Q150 110 300 28 T600 28 T900 28 T1220 18" fill="none" stroke="#aa8950" strokeWidth="1" />
                {Array.from({ length: 25 }, (_, i) => {
                  const x = i * 50;
                  const y = 25 + Math.sin((x / 300) * Math.PI) * 32;
                  return (
                    <g key={`light-${i}`}>
                      <circle cx={x} cy={y} r="19" fill="url(#christmas-light)" />
                      <circle cx={x} cy={y} r="3" fill="#ffe5a2" />
                    </g>
                  );
                })}
                {[35, 125, 255, 405, 565, 735, 850, 965, 1085, 1170].map((x, i) => {
                  const y = 65 + (i % 3) * 32;
                  const r = 12 + (i % 3) * 5;
                  return (
                    <g key={`bauble-${x}`}>
                      <path d={`M${x} 0V${y}`} stroke="#caa65b" strokeWidth="1" />
                      <rect x={x - 4} y={y - 5} width="8" height="7" rx="1" fill="#d2b474" />
                      <circle cx={x} cy={y + r} r={r} fill={`url(#christmas-bauble-${i % 2 ? "gold" : "red"})`} />
                      <path d={`M${x - r + 3} ${y + r}h${r * 2 - 6}`} stroke="#ffe0a0" strokeOpacity="0.45" strokeWidth="2" />
                    </g>
                  );
                })}
                {[70, 195, 335, 495, 660, 790, 910, 1030, 1140].map((x, i) => (
                  <g key={`star-${x}`} transform={`translate(${x} ${155 + (i % 3) * 25})`} fill="#e4c886" opacity="0.7">
                    <path d="M0-8 2-2 8 0 2 2 0 8-2 2-8 0-2-2Z" />
                  </g>
                ))}
              </svg>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cng-black/95 via-cng-black/75 to-transparent" />
              <div className="relative max-w-2xl">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">Christmas at The Creg</h3>
                <p className="mt-3 leading-relaxed text-white/90">Celebrate the festive season with family, friends and a warm welcome at The Creg.</p>
              </div>
            </header>
            <div className="grid divide-y divide-cng-black/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              <div className="flex flex-col p-6 sm:p-10">
                <h4 className="font-display text-2xl font-bold uppercase text-cng-black">Book Your Christmas Meal</h4>
                <p className="mt-4 leading-relaxed text-cng-grey-700">We have a menu for everyone, from children to senior citizens, including gluten-free and vegan options.</p>
                <p className="mt-4 leading-relaxed text-cng-grey-700">Explore our Christmas menus and plan your festive get-together.</p>
                <p className="mt-6 border-l-2 border-cng-red pl-4 font-semibold leading-relaxed text-cng-black">Booking is essential and a pre-order is required.</p>
                <div className="mt-auto pt-8">
                  <PrimaryButton href="/christmas">Explore Christmas at the Creg</PrimaryButton>
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <h4 className="font-display text-2xl font-bold uppercase text-cng-black">Enjoy a Festive Pub Lunch</h4>
                <p className="mt-4 leading-relaxed text-cng-grey-700">Get together with family and friends over our main menu and specials board, with no set menu on these days.</p>
                <h5 className="mt-6 text-xs font-semibold uppercase tracking-widest text-cng-red">Festive Food Serving Times</h5>
                <dl className="mt-3 divide-y divide-cng-black/10 text-sm sm:text-base">
                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3"><dt className="font-medium text-cng-black">Christmas Eve</dt><dd className="text-cng-grey-700">12pm – 4.30pm</dd></div>
                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3"><dt className="font-medium text-cng-black">New Year&apos;s Eve</dt><dd className="text-cng-grey-700">12pm – 4.30pm</dd></div>
                  <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3"><dt className="font-medium text-cng-black">New Year&apos;s Day</dt><dd className="text-cng-grey-700">12pm – 3.30pm</dd></div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-cng-grey-700">Dogs are welcome in our bar area.</p>
              </div>
            </div>
            <div className="grid gap-4 border-t border-cng-black/10 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_2fr] lg:gap-10">
              <div>
                <h4 className="font-display text-xl font-bold uppercase text-cng-black">Christmas Opening Hours</h4>
                <p className="mt-2 font-semibold text-cng-red">Closed Christmas Day &amp; Boxing Day</p>
              </div>
              <p className="leading-relaxed text-cng-grey-700">We are open throughout the rest of the festive period. Booking is recommended. We may close early during quieter periods, so please call ahead to check.</p>
            </div>
            <footer className="border-t border-cng-black/10 px-6 py-6 text-center sm:px-10">
              <p className="font-display text-xl font-bold uppercase text-cng-red">Merry Christmas!</p>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-cng-grey-700">From everyone at The Creg, we wish all our customers, old and new, a very Merry Christmas and a Happy New Year!</p>
            </footer>
          </article>
        </div>
      </section>

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
              recognisable corners on the entire Isle of Man TT course, a place where
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
              spaces offer one of the best vantage points on the entire 37&frac34; mile course,
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

      <FaqSection items={homeFaqs} title="Frequently Asked Questions" eyebrow="Good to Know" />

      <ContactCTA />
    </>
  );
}
