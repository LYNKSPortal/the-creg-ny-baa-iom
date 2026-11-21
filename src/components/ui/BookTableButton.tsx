import { CalendarCheck } from "lucide-react";
import { PrimaryButton, type ButtonVariant } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/data/site";

type BookTableButtonProps = {
  variant?: ButtonVariant;
  className?: string;
};

/**
 * Directs guests to the venue's existing Dazzler booking service once a
 * verified URL is supplied in `src/data/site.ts`. Until then, it falls back
 * to a phone link rather than inventing or guessing a booking URL.
 */
export function BookTableButton({ variant = "solid", className }: BookTableButtonProps) {
  if (siteConfig.bookingUrl) {
    return (
      <PrimaryButton href={siteConfig.bookingUrl} variant={variant} className={className}>
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        Book a Table
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton href={siteConfig.phoneHref} variant={variant} className={className}>
      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
      Call to Book
    </PrimaryButton>
  );
}
