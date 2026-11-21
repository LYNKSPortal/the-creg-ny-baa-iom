import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { primaryNav } from "@/data/nav";
import { siteConfig, legalNotices } from "@/data/site";
import { lunchHours, eveningHours } from "@/data/hours";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.56c0-.86.24-1.44 1.47-1.44h1.57V4.46C16.26 4.4 15.33 4.3 14.24 4.3c-2.26 0-3.8 1.38-3.8 3.9v2.24H7.88v2.96h2.56V21h3.06z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cng-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo/logo.png"
              alt={`${siteConfig.name} logo`}
              width={100}
              height={80}
              style={{ width: 100, height: "auto" }}
            />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              An Isle of Man icon — legendary TT race corner, traditional Manx pub, home-cooked
              food and premier events venue on the Mountain Road.
            </p>
            <Image
              src="/images/awards/manx-menu-award.png"
              alt="Manx Menu Award Winner"
              width={120}
              height={120}
              className="mt-5 h-16 w-16"
            />
            <div className="mt-5 flex gap-3">
              {siteConfig.social.facebook ? (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Creg Ny Baa on Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-cng-gold hover:text-cng-gold"
                >
                  <FacebookIcon />
                </a>
              ) : null}
              {siteConfig.social.instagram ? (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Creg Ny Baa on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-cng-gold hover:text-cng-gold"
                >
                  <InstagramIcon />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cng-gold">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cng-gold">Opening Hours</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <p className="font-semibold text-white/85">Lunch</p>
                {lunchHours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-semibold text-white/85">Evening</p>
                {eveningHours.map((h) => (
                  <p key={h.days} className={!h.confirmed ? "italic text-white/50" : undefined}>
                    {h.days}: {h.time}
                    {!h.confirmed ? " *" : ""}
                  </p>
                ))}
              </div>
              <p className="pt-1 text-xs text-white/45">
                * To be confirmed. {legalNotices.mayCloseEarly}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cng-gold">Contact & Location</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cng-gold" aria-hidden="true" />
                <a href={siteConfig.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {siteConfig.address.full}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-cng-gold" aria-hidden="true" />
                <a href={siteConfig.phoneHref} className="text-white/70 hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-cng-gold" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Mountain Road, Onchan, Isle of Man</p>
        </div>
      </div>
    </footer>
  );
}
