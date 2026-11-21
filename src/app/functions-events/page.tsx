import type { Metadata } from "next";
import { Check, AlertTriangle, Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { veranda, funeralWakes, meetingPackages } from "@/data/hospitality";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Functions, Events & Funeral Wakes",
  description:
    "Private functions, celebrations, corporate meetings and funeral wakes at the Creg Ny Baa's first-floor Veranda Suite, overlooking the Isle of Man TT course.",
  alternates: { canonical: "/functions-events" },
};

export default function FunctionsEventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cng-black py-24 sm:py-32">
        <div className="absolute inset-0">
          <PlaceholderImage alt="Placeholder — the Veranda Suite set up for a private function, with balcony doors open to the countryside" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/70 to-cng-black/30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">Functions, Events &amp; Wakes</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Celebrate, Gather &amp; Remember at the Creg
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
            Our first-floor Veranda Suite offers a private bar, balconies over the TT course and
            flexible space for every kind of occasion — from birthdays and christenings to
            corporate events and family celebrations.
          </p>
        </div>
      </section>

      {/* Veranda Suite */}
      <section className="bg-cng-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading eyebrow="Our Function Space" title={veranda.name} description={veranda.description} />
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border border-cng-black/10 bg-cng-white p-5">
                  <p className="font-display text-4xl font-bold text-cng-red">{veranda.standingCapacity}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-cng-grey-700">Standing Guests</p>
                </div>
                <div className="border border-cng-black/10 bg-cng-white p-5">
                  <p className="font-display text-4xl font-bold text-cng-red">{veranda.seatedCapacity}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-cng-grey-700">Recommended Seated</p>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {veranda.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-cng-grey-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cng-red" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 border border-cng-gold/40 bg-cng-gold/10 p-4 text-sm text-cng-grey-700">
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cng-gold" aria-hidden="true" />
                <p>{veranda.accessibilityNote}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <PlaceholderImage alt="Placeholder — view from the Veranda Suite balcony over the TT course" />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-cng-black">Perfect For</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {veranda.suitableFor.map((item) => (
                <span key={item} className="rounded-sm bg-cng-white border border-cng-black/10 px-4 py-2 text-sm font-medium text-cng-grey-700">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meetings & conferences */}
      <section className="border-t border-cng-black/10 bg-cng-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Business & Meetings"
              title="Meetings & Conferences"
              description="A refreshing change of scene for your next meeting — natural light, Mountain Road views and everything you need to present with confidence."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {["Presentation facilities", "Wi-Fi throughout", "Natural light & countryside views", "Free parking"].map((f) => (
                <li key={f} className="flex items-center gap-2 rounded-sm bg-cng-grey-100 px-4 py-2.5 text-sm font-medium text-cng-grey-700">
                  <Check className="h-4 w-4 text-cng-red" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {meetingPackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={0.1 * i}>
                <div className="border border-cng-black/10 bg-cng-grey-100 p-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-cng-black">{pkg.title}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-cng-grey-500">{pkg.capacity}</p>
                  <p className="mt-4 text-3xl font-bold text-cng-red">
                    {pkg.price}
                    <span className="ml-2 text-sm font-normal text-cng-grey-700">{pkg.priceNote}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-xs text-cng-grey-500">Prices shown are indicative and may be updated — please confirm current rates when enquiring.</p>
        </div>
      </section>

      {/* Funeral wakes */}
      <section className="border-t border-cng-black/10 bg-cng-grey-100">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="With Care & Compassion" title="Funeral Wakes & Celebrations of Life" />
            <p className="mt-6 text-balance text-base leading-relaxed text-cng-grey-700 sm:text-lg">
              {funeralWakes.intro}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full border border-cng-black/10 bg-cng-white p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-cng-black">{funeralWakes.topBar.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-cng-grey-500">{funeralWakes.topBar.capacity}</p>
                <p className="mt-4 text-sm leading-relaxed text-cng-grey-700">{funeralWakes.topBar.description}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full border border-cng-black/10 bg-cng-white p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-cng-black">{funeralWakes.restaurant.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-cng-grey-500">{funeralWakes.restaurant.capacity}</p>
                <p className="mt-4 text-sm leading-relaxed text-cng-grey-700">{funeralWakes.restaurant.description}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 text-sm leading-relaxed text-cng-grey-700">{funeralWakes.largerSpaces}</p>
            <ul className="mt-6 space-y-3">
              {funeralWakes.extras.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-cng-grey-700">
                  <ImageIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-cng-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Funeral Wake Enquiry")}`}>
              Enquire With Care
            </PrimaryButton>
            <PrimaryButton href={siteConfig.phoneHref} variant="ghost">
              Call {siteConfig.phone}
            </PrimaryButton>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Start Planning Your Event"
        description="Tell us about your occasion and we'll help you find the right space, catering and timings for your event at the Creg Ny Baa."
        showBooking={false}
        emailSubject="Function & Events Enquiry"
      />
    </>
  );
}
