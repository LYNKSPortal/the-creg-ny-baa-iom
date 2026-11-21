import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Dog, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MenuTabs } from "@/components/menus/MenuTabs";
import { ChristmasSection } from "@/components/menus/ChristmasSection";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { glutenFreeInfo, diningNotes } from "@/data/menus";

export const metadata: Metadata = {
  title: "Our Menus",
  description:
    "Freshly cooked traditional pub food at the Creg Ny Baa — daily specials, Sunday roasts, family and senior menus, and an extensive gluten-free offering.",
  alternates: { canonical: "/menus" },
};

export default function MenusPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cng-black py-20 text-center sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/food/sunday-roast.jpg"
            alt="A traditional Sunday roast dinner with all the trimmings at the Creg Ny Baa"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/75 to-cng-black/40" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">Food & Drink</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Our Menus
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/75">
            Freshly cooked, traditional pub favourites served in generous Manx portions — with
            something for everyone, whatever brings you to the Creg.
          </p>
        </div>
      </section>

      <section className="bg-cng-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <MenuTabs />
          </Reveal>
        </div>
      </section>

      {/* Gluten free */}
      <section className="border-t border-cng-black/10 bg-cng-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Reveal>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cng-red/10 text-cng-red">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <SectionHeading eyebrow="Dietary Care" title={glutenFreeInfo.heading} />
            <div className="mt-6 space-y-4">
              {glutenFreeInfo.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-cng-grey-700">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-cng-gold/60 pl-4 text-sm italic leading-relaxed text-cng-grey-500">
              {glutenFreeInfo.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dining notes */}
      <section className="border-t border-cng-black/10 bg-cng-grey-100">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="h-full border border-cng-black/10 bg-cng-white p-7">
              <Users className="h-6 w-6 text-cng-red" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-cng-black">Family Friendly</h3>
              <p className="mt-2 text-sm leading-relaxed text-cng-grey-700">{diningNotes.familyFriendly}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full border border-cng-black/10 bg-cng-white p-7">
              <Dog className="h-6 w-6 text-cng-red" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-cng-black">Dogs Welcome</h3>
              <p className="mt-2 text-sm leading-relaxed text-cng-grey-700">{diningNotes.dogsWelcome}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ChristmasSection />

      <ContactCTA title="Ready to Eat With Us?" description="Book a table to enjoy freshly cooked food with some of the best views on the Isle of Man." />
    </>
  );
}
