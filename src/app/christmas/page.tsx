import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ChristmasSection } from "@/components/menus/ChristmasSection";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { christmasSeason } from "@/data/christmas";
import { isWithinDateWindow } from "@/lib/utils";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Christmas at the Creg | Festive Menus & Parties",
  description:
    "Celebrate Christmas at the Creg Ny Baa on the Isle of Man. Explore festive menus, Christmas parties, workplace Festive Brunch, opening arrangements and booking terms.",
  alternates: { canonical: "/christmas" },
  openGraph: pageOpenGraph("/christmas"),
};

export default function ChristmasPage() {
  const active = isWithinDateWindow(christmasSeason.activeFrom, christmasSeason.activeUntil);

  return (
    <>
      <section className="bg-cng-cream px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Christmas at the Creg", href: "/christmas" }]} />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-cng-red">Festive Celebrations</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-cng-black sm:text-6xl">Christmas at the Creg</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cng-grey-700">
            {active
              ? "Gather family, friends and colleagues for festive food and a warm welcome on the Mountain Road. Find our Christmas menus, party options and festive opening arrangements below."
              : "Our Christmas menus and packages are seasonal. Please contact our team for the latest festive plans and availability."}
          </p>
        </div>
      </section>
      <ChristmasSection />
      <ContactCTA
        title="Plan Your Christmas at the Creg"
        description="Get in touch to discuss your festive meal, Christmas party or workplace Festive Brunch."
        emailSubject="Christmas Enquiry"
      />
    </>
  );
}
