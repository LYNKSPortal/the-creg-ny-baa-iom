"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
        "sticky top-0 z-50 w-full border-b border-cng-black/10 bg-cng-white transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/5",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/logo.png"
            alt={`${siteConfig.name} logo`}
            width={100}
            height={80}
            priority
            className="h-auto w-[100px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm font-semibold uppercase tracking-wide text-cng-grey-700 transition-colors hover:text-cng-black",
                  active && "text-cng-black",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-cng-red transition-transform duration-200",
                    active && "scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <BookTableButton />
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
