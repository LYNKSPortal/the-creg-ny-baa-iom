import type { Metadata } from "next";
import Image from "next/image";
import { Flag, Binoculars, Users, Wallet, Clock, Car } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EventCard } from "@/components/ui/EventCard";
import { HospitalityPackageCard } from "@/components/ui/HospitalityPackageCard";
import { ArchiveDisclosure } from "@/components/ui/ArchiveDisclosure";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { FaqSection } from "@/components/seo/FaqSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { tt2026Packages, ttViewing2026 } from "@/data/hospitality";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { tt2027Faqs } from "@/data/faqs";
import { legalNotices, siteConfig } from "@/data/site";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TT 2027 Hospitality & Race Viewing",
  description:
    "Experience the Isle of Man TT 2027 from the legendary Creg Ny Baa corner on the Mountain Road: exclusive balcony viewing, VIP hospitality, grandstand information and race-day details. Details for 2027 coming soon.",
  alternates: { canonical: "/tt-2027" },
  openGraph: pageOpenGraph("/tt-2027"),
};

const raceDayInfo = [
  {
    icon: Binoculars,
    title: "Grandstand & Balcony Viewing",
    description:
      "Our balcony sits directly above one of the most famous corners on the course, offering an unrivalled view of the racing as riders brake hard into the Creg.",
  },
  {
    icon: Users,
    title: "Free Spectator Areas",
    description:
      "Alongside our hospitality spaces, there is free public viewing around the Creg Ny Baa for spectators arriving on race day; arrive early for the best spots.",
  },
  {
    icon: Flag,
    title: "Practice Week & Race Week",
    description:
      "From practice sessions to the main race week, the Creg comes alive with fans from around the world; our kitchen and bar run throughout.",
  },
  {
    icon: Car,
    title: "Road Closures",
    description:
      "The Mountain Road closes to traffic during racing and practice sessions. Plan your journey around official road closure times, published closer to the event.",
  },
  {
    icon: Clock,
    title: "Ticket Release",
    description:
      "Hospitality and grandstand ticket details for TT 2027 will be released ahead of the event; check back here or get in touch to register your interest.",
  },
  {
    icon: Wallet,
    title: "Cash on Race Days",
    description: legalNotices.cashOnRaceDays,
  },
];

export default function TT2027Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-cng-black py-28 sm:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/tt/spectators-at-the-corner.jpg"
            alt="Spectators lining the Mountain Road at the Creg Ny Baa corner during TT race week"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/75 to-cng-black/40" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs light items={[{ name: "TT 2027", href: "/tt-2027" }]} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cng-gold">Isle of Man TT</p>
          <h1 className="mt-4 text-balance font-display text-6xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-8xl">
            TT <span className="text-cng-red">2027</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
            The world&apos;s greatest road race returns to the Mountain Road. Experience it from the
            legendary Creg Ny Baa corner. Full hospitality details for 2027 are coming soon.
          </p>
          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-sm border border-cng-gold/40 bg-cng-gold/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cng-gold">
            TT 2027 hospitality details coming soon
          </div>
        </div>
      </section>

      {/* Race day info */}
      <section className="bg-cng-black">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Race Day Guide"
              title="Everything You Need to Know"
              description="From viewing options to road closures, here's what to expect on a TT race day at the Creg Ny Baa."
              light
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {raceDayInfo.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <EventCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Historical packages — collapsed by default so it reads as archive, not current pricing */}
      <section className="border-t border-cng-black/10 bg-cng-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Not Current"
              title="2026 Hospitality Archive"
              description="TT 2027 pricing hasn't been announced. The 2026 figures below are kept purely for reference and don't apply to TT 2027."
            />
          </Reveal>
          <div className="mt-8 max-w-3xl">
            <h3 className="font-display text-2xl font-bold uppercase text-cng-black">VIP Hospitality Experience</h3>
            <p className="mt-4 leading-relaxed text-cng-grey-700">{ttViewing2026.intro}</p>
          </div>
          <Reveal delay={0.1} className="mt-10">
            <ArchiveDisclosure defaultOpen label="2026 hospitality pricing (archived, not current)">
              <div className="grid gap-6 lg:grid-cols-2">
                {tt2026Packages.map((pkg) => (
                  <HospitalityPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </ArchiveDisclosure>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-cng-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <SectionHeading
            eyebrow="2026 Viewing Guide"
            title="Grandstand & Viewing Platforms"
            description="The following prices and ticket arrangements relate to TT 2026. TT 2027 arrangements and prices are coming soon."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ttViewing2026.options.map((option) => (
              <div key={option.title} className="border border-cng-black/10 bg-cng-cream p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold uppercase text-cng-black">{option.title}</h3>
                {"price" in option && <p className="mt-3 text-xl font-semibold text-cng-red">{option.price}</p>}
                <p className="mt-4 text-sm leading-relaxed text-cng-grey-700">{option.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-cng-red pl-4 text-sm leading-relaxed text-cng-grey-700">{ttViewing2026.ownership}</p>
          <div className="mt-16 border-t border-cng-black/10 pt-10">
            <h3 className="font-display text-3xl font-bold uppercase text-cng-black">Practice Sessions: Viewing Information</h3>
            <p className="mt-3 text-sm text-cng-grey-700">2026 arrangements for reference. Please confirm arrangements for 2027 with our team.</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {ttViewing2026.practice.map((item) => (
                <div key={item.title}>
                  <h4 className="font-display text-xl font-bold uppercase text-cng-black">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-cng-grey-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-10 bg-cng-cream p-5 text-sm leading-relaxed text-cng-grey-700">For faster transactions, we recommend bringing cash due to high demand and network limitations.</p>
          <div className="mt-8">
            <p className="mb-4 text-sm text-cng-grey-700">For hospitality bookings and ticket enquiries, please email our team to discuss future availability.</p>
            <PrimaryButton href={`mailto:${siteConfig.email}`}>Email {siteConfig.email}</PrimaryButton>
          </div>
        </div>
      </section>

      <FaqSection items={tt2027Faqs} />

      <ContactCTA
        title="Register Your Interest for TT 2027"
        description="Get in touch to be among the first to hear when our TT 2027 hospitality packages and race-day details are confirmed."
        showBooking={false}
        emailSubject="TT 2027 Hospitality Enquiry"
      />
    </>
  );
}
