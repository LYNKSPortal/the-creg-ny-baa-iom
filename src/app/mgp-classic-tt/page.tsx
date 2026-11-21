import type { Metadata } from "next";
import { Trophy, Binoculars, GlassWater } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HospitalityPackageCard } from "@/components/ui/HospitalityPackageCard";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { mgpClassicTt2026Packages } from "@/data/hospitality";
import { legalNotices } from "@/data/site";

export const metadata: Metadata = {
  title: "MGP & Classic TT Hospitality",
  description:
    "Manx Grand Prix and Classic TT hospitality and race viewing at the Creg Ny Baa — balcony viewing over the famous corner in a relaxed, historic racing atmosphere.",
  alternates: { canonical: "/mgp-classic-tt" },
};

const highlights = [
  {
    icon: Trophy,
    title: "A Celebration of Racing Heritage",
    description:
      "The Manx Grand Prix and Classic TT bring historic and privateer racing back to the Mountain Road — with the Creg Ny Baa right at the heart of the action.",
  },
  {
    icon: Binoculars,
    title: "Balcony Viewing",
    description:
      "Watch the racing from our balcony overlooking the Creg corner, in the relaxed, close-knit atmosphere the MGP and Classic TT are loved for.",
  },
  {
    icon: GlassWater,
    title: "Food & Bar Service",
    description:
      "Our kitchen and bar run throughout race days, serving home-cooked food and drinks to racing fans old and new.",
  },
];

export default function MgpClassicTtPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cng-black py-24 sm:py-32">
        <div className="absolute inset-0">
          <PlaceholderImage alt="Placeholder — classic racing motorcycle passing the Creg Ny Baa during the Manx Grand Prix" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/70 to-cng-black/30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">Historic Racing</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
            MGP &amp; Classic TT
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-white/80">
            Every August, the Manx Grand Prix and Classic TT bring a different, more intimate kind
            of racing to the Mountain Road. Join us at the Creg Ny Baa for a front-row view of the
            action.
          </p>
        </div>
      </section>

      <section className="bg-cng-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Why Visit" title="The MGP & Classic TT Experience" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full border border-cng-black/10 bg-cng-white p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cng-red/40 text-cng-red">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-cng-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cng-grey-700">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cng-black/10 bg-cng-grey-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Reference Only — Not Current"
              title="August 2026 Hospitality"
              description="Details below are retained from our August 2026 event as a reference and do not represent a current offering. Updated hospitality details will be published when future dates are announced."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {mgpClassicTt2026Packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <HospitalityPackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-cng-grey-500">{legalNotices.cashOnRaceDays}</p>
        </div>
      </section>

      <ContactCTA
        title="Register Your Interest"
        description="Want to hear when MGP and Classic TT hospitality details are confirmed? Get in touch and we'll keep you posted."
        showBooking={false}
        emailSubject="MGP / Classic TT Enquiry"
      />
    </>
  );
}
