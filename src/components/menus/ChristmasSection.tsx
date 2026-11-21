import { Download, Snowflake } from "lucide-react";
import { christmasSeason } from "@/data/christmas";
import { isWithinDateWindow } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

/**
 * Festive menus and opening arrangements — only renders within the active
 * season configured in src/data/christmas.ts, so it never appears as current
 * information once the season has passed.
 */
export function ChristmasSection() {
  if (!isWithinDateWindow(christmasSeason.activeFrom, christmasSeason.activeUntil)) {
    return null;
  }

  return (
    <section id="christmas" className="border-t border-cng-black/10 bg-cng-black">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Snowflake className="h-7 w-7 text-cng-gold" aria-hidden="true" />
        <SectionHeading
          eyebrow={christmasSeason.availability}
          title="Christmas at the Creg"
          description="Festive menus, a private function room for your Christmas party, and our popular workplace Festive Brunch — all available this December."
          light
          className="mt-4"
        />

        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryButton href={christmasSeason.menuPdfHref} variant="gold">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Christmas Menus
          </PrimaryButton>
          <PrimaryButton href={christmasSeason.preOrderPdfHref} variant="outline">
            <Download className="h-4 w-4" aria-hidden="true" />
            Festive Brunch Pre-Order Form
          </PrimaryButton>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
              Festive Opening Arrangements
            </h3>
            <dl className="mt-4 space-y-4">
              {christmasSeason.openingArrangements.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-cng-gold">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-white/70">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
              Christmas Menus
            </h3>
            <ul className="mt-4 space-y-3">
              {christmasSeason.menus.map((menu) => (
                <li key={menu.title} className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
                  <span className="text-white/85">{menu.title}</span>
                  <span className="font-semibold text-cng-gold">{menu.price}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold uppercase tracking-tight text-white">
              Function Room for Christmas Parties
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{christmasSeason.functionRoom.description}</p>
            <p className="mt-2 text-sm font-semibold text-cng-gold">{christmasSeason.functionRoom.freeHire}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">Festive Brunch</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">{christmasSeason.festiveBrunch.description}</p>
          <p className="mt-2 text-sm text-white/70">
            <span className="font-semibold text-cng-gold">{christmasSeason.festiveBrunch.price}</span> — {christmasSeason.festiveBrunch.delivery}
          </p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Booking Terms</p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-white/50">
            {christmasSeason.terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
