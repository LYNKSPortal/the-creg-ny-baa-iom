import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { products, merchandiseNote } from "@/data/merchandise";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Merchandise",
  description: "Creg Ny Baa branded merchandise — enquire by email to purchase or check availability.",
  alternates: { canonical: "/merchandise" },
};

export default function MerchandisePage() {
  return (
    <>
      <section className="bg-cng-black py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">Shop</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Merchandise
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/75">
            Take a piece of the legendary Creg Ny Baa home with you.
          </p>
        </div>
      </section>

      <section className="bg-cng-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <p className="mx-auto max-w-2xl rounded-sm border border-dashed border-cng-black/20 bg-cng-white p-5 text-center text-sm text-cng-grey-700">
              {merchandiseNote}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.06}>
                <div className="flex h-full flex-col overflow-hidden border border-cng-black/10 bg-cng-white">
                  <div className="relative aspect-square">
                    <PlaceholderImage alt={`Placeholder — ${product.name} product photo`} tone="light" />
                    <span
                      className={cn(
                        "absolute left-3 top-3 z-10 rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest",
                        product.stock === "In Stock" && "bg-cng-black/80 text-white",
                        product.stock === "Limited Availability" && "bg-cng-gold text-cng-black",
                        product.stock === "Coming Soon" && "bg-cng-grey-500 text-white",
                      )}
                    >
                      {product.stock}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-cng-black">{product.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-cng-grey-700">{product.description}</p>
                    <p className="mt-4 text-lg font-bold text-cng-red">{product.price}</p>
                    <PrimaryButton
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Merchandise Enquiry — ${product.name}`)}`}
                      variant="ghost"
                      className="mt-4 w-full justify-center"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Enquire to Purchase
                    </PrimaryButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Looking for Something Specific?"
        description="Email our team and we'll let you know what's currently available and how to arrange collection or postage."
        showBooking={false}
        emailSubject="Merchandise Enquiry"
      />
    </>
  );
}
