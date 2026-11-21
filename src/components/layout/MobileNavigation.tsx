"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { BookTableButton } from "@/components/ui/BookTableButton";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Open navigation menu"
        className="inline-flex items-center gap-2 text-cng-black"
      >
        <span className="text-sm font-semibold uppercase tracking-wide">Menu</span>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cng-black/15">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[60] flex flex-col bg-cng-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Image src="/white-logo.png" alt={`${siteConfig.name} logo`} width={100} height={80} style={{ width: 100, height: "auto" }} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-6">
              {primaryNav.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block border-b border-white/10 py-4 font-display text-3xl font-bold uppercase tracking-tight",
                        active ? "text-cng-red" : "text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-6">
              <BookTableButton className="w-full justify-center" />
              <a href={siteConfig.phoneHref} className="flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wide text-white/80">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wide text-white/80">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Us
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
