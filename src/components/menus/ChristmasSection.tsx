import { Download, Snowflake } from "lucide-react";
import { christmasSeason } from "@/data/christmas";
import { isWithinDateWindow } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

/**
 * Festive menus and opening arrangements, only renders within the active
 * season configured in src/data/christmas.ts, so it never appears as current
 * information once the season has passed.
 */
export function ChristmasSection() {
  if (!isWithinDateWindow(christmasSeason.activeFrom, christmasSeason.activeUntil)) {
    return null;
  }

  return (
    <section id="christmas" className="relative isolate overflow-hidden border-t border-cng-black/10 bg-cng-black">
      <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-x-0 top-0 h-80 w-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMin slice">
        <defs>
          <radialGradient id="festive-section-red" cx="35%" cy="25%">
            <stop offset="0" stopColor="#f16b65" /><stop offset="0.45" stopColor="#b51f31" /><stop offset="1" stopColor="#510c1c" />
          </radialGradient>
          <radialGradient id="festive-section-gold" cx="35%" cy="25%">
            <stop offset="0" stopColor="#fff0b9" /><stop offset="0.5" stopColor="#caa65b" /><stop offset="1" stopColor="#715220" />
          </radialGradient>
          <radialGradient id="festive-section-glow">
            <stop offset="0" stopColor="#fff4cb" stopOpacity="0.8" /><stop offset="1" stopColor="#e8bb62" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M-20 0 Q150 90 300 10 T600 10 T900 10 T1220 0" fill="none" stroke="#264d3a" strokeWidth="18" />
        <path d="M-20 0 Q150 90 300 10 T600 10 T900 10 T1220 0" fill="none" stroke="#497155" strokeWidth="26" strokeDasharray="2 9" />
        <path d="M-20 18 Q150 110 300 28 T600 28 T900 28 T1220 18" fill="none" stroke="#aa8950" strokeWidth="1" />
        {Array.from({ length: 25 }, (_, i) => {
          const x = i * 50;
          const y = 25 + Math.sin((x / 300) * Math.PI) * 32;
          return <g key={`light-${i}`}><circle cx={x} cy={y} r="19" fill="url(#festive-section-glow)" /><circle cx={x} cy={y} r="3" fill="#ffe5a2" /></g>;
        })}
        {[35, 125, 255, 405, 565, 735, 850, 965, 1085, 1170].map((x, i) => {
          const y = 65 + (i % 3) * 32;
          const r = 12 + (i % 3) * 5;
          return (
            <g key={`bauble-${x}`}>
              <path d={`M${x} 0V${y}`} stroke="#caa65b" strokeWidth="1" />
              <rect x={x - 4} y={y - 5} width="8" height="7" rx="1" fill="#d2b474" />
              <circle cx={x} cy={y + r} r={r} fill={`url(#festive-section-${i % 2 ? "gold" : "red"})`} />
              <path d={`M${x - r + 3} ${y + r}h${r * 2 - 6}`} stroke="#ffe0a0" strokeOpacity="0.45" strokeWidth="2" />
            </g>
          );
        })}
        {[70, 195, 335, 495, 660, 790, 910, 1030, 1140].map((x, i) => (
          <path key={`star-${x}`} transform={`translate(${x} ${185 + (i % 3) * 30})`} d="M0-8 2-2 8 0 2 2 0 8-2 2-8 0-2-2Z" fill="#e4c886" opacity="0.65" />
        ))}
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-transparent via-cng-black/70 to-cng-black" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Snowflake className="h-7 w-7 text-cng-gold" aria-hidden="true" />
        <SectionHeading
          eyebrow={christmasSeason.availability}
          title="Christmas at the Creg"
          description="Festive menus, a private function room for your Christmas party, and our popular workplace Festive Brunch, all available this December."
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
            <span className="font-semibold text-cng-gold">{christmasSeason.festiveBrunch.price}</span>: {christmasSeason.festiveBrunch.delivery}
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
