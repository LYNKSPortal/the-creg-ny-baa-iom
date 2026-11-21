import Link from "next/link";
import { isWithinDateWindow } from "@/lib/utils";

type AnnouncementBannerProps = {
  /** ISO dates (inclusive) the announcement should be shown within. */
  startDate: string;
  endDate: string;
  href?: string;
  children: React.ReactNode;
};

/**
 * Date-aware seasonal announcement. Nothing renders outside the configured
 * window, so outdated messages (e.g. last year's Christmas menu) never
 * appear as current information.
 */
export function AnnouncementBanner({ startDate, endDate, href, children }: AnnouncementBannerProps) {
  if (!isWithinDateWindow(startDate, endDate)) {
    return null;
  }

  const content = (
    <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-medium">
      <span aria-hidden="true" className="text-cng-gold">
        ✦
      </span>
      {children}
    </p>
  );

  return (
    <div role="region" aria-label="Seasonal announcement" className="border-b border-cng-gold/30 bg-cng-black text-cng-cream">
      {href ? (
        <Link href={href} className="block hover:bg-white/5">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
