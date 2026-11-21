import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the Creg Ny Baa in pictures: TT racing, food and dining, the venue, and private events and hospitality on the Isle of Man's Mountain Road.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cng-black py-20 text-center sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/venue/exterior-group-photo.jpg"
            alt="A group photo outside the Creg Ny Baa's balcony and traditional signage"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/75 to-cng-black/40" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center">
            <Breadcrumbs light items={[{ name: "Gallery", href: "/gallery" }]} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cng-gold">In Pictures</p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/75">
            Racing, food, the venue and our events: a real look at life at the Creg Ny Baa.
          </p>
        </div>
      </section>

      <section className="bg-cng-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <GalleryGrid />
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
