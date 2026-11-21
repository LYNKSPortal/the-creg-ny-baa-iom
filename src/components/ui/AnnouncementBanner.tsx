type AnnouncementBannerProps = {
  /** ISO dates (inclusive) the announcement should be shown within. */
  startDate: string;
  endDate: string;
  children: React.ReactNode;
};

/**
 * Date-aware seasonal announcement. Nothing renders outside the configured
 * window, so outdated messages (e.g. last year's Christmas menu) never
 * appear as current information.
 */
export function AnnouncementBanner({ startDate, endDate, children }: AnnouncementBannerProps) {
  // Intentional: gates a seasonal message by the current date so outdated
  // announcements never show as current.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  if (Number.isNaN(start) || Number.isNaN(end) || now < start || now > end) {
    return null;
  }

  return (
    <div role="region" aria-label="Seasonal announcement" className="border-b border-cng-gold/30 bg-cng-black text-cng-cream">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-medium">
        <span aria-hidden="true" className="text-cng-gold">
          ✦
        </span>
        {children}
      </p>
    </div>
  );
}
