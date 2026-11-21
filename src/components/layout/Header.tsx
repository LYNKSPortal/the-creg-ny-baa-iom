"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { primaryNav } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BookTableButton } from "@/components/ui/BookTableButton";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-cng-white transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt={`${siteConfig.name} logo`}
            width={100}
            height={80}
            priority
            style={{ width: 100, height: "auto" }}
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cng-grey-700 transition-colors hover:text-cng-black"
          >
            <Phone className="h-4 w-4 text-cng-red" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <BookTableButton />
        </div>

        <MobileNavigation />
      </div>

      <nav
        aria-label="Primary"
        className="hidden items-center justify-center gap-7 bg-cng-red px-4 py-3 sm:px-6 lg:flex lg:px-8"
      >
        {primaryNav.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "py-2 text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-white",
                active && "text-white",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
