import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  imageAlt: string;
  image?: string;
  cta?: string;
};

export function FeatureCard({ title, description, href, imageAlt, image, cta = "Learn More" }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden border border-cng-black/10 bg-cng-white transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          {image ? (
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          ) : (
            <PlaceholderImage alt={imageAlt} />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-cng-black">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cng-grey-700">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-cng-red">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
