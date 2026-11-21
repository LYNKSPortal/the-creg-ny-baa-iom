import { Check } from "lucide-react";
import type { HospitalityPackage } from "@/data/hospitality";
import { cn } from "@/lib/utils";

export function HospitalityPackageCard({ pkg }: { pkg: HospitalityPackage }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border p-8",
        pkg.archived ? "border-cng-black/10 bg-cng-grey-100" : "border-cng-gold/50 bg-cng-black text-white",
      )}
    >
      {pkg.archived ? (
        <span className="mb-4 inline-flex w-fit items-center rounded-sm border border-cng-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-cng-grey-700">
          Archived Reference
        </span>
      ) : null}
      <h3 className={cn("font-display text-2xl font-bold uppercase tracking-tight", !pkg.archived && "text-white")}>
        {pkg.title}
      </h3>
      <p className={cn("mt-3 text-3xl font-bold", pkg.archived ? "text-cng-red" : "text-cng-gold")}>
        {pkg.price}
        {pkg.priceNote ? (
          <span className={cn("ml-2 text-sm font-normal", pkg.archived ? "text-cng-grey-700" : "text-white/60")}>
            {pkg.priceNote}
          </span>
        ) : null}
      </p>
      <p className={cn("mt-4 text-sm leading-relaxed", pkg.archived ? "text-cng-grey-700" : "text-white/75")}>
        {pkg.description}
      </p>
      <ul className="mt-6 space-y-3">
        {pkg.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <Check className={cn("mt-0.5 h-4 w-4 flex-shrink-0", pkg.archived ? "text-cng-red" : "text-cng-gold")} aria-hidden="true" />
            <span className={pkg.archived ? "text-cng-grey-700" : "text-white/85"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
