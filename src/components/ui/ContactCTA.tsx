import { Mail, Phone } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { BookTableButton } from "@/components/ui/BookTableButton";

type ContactCTAProps = {
  title?: string;
  description?: string;
  showBooking?: boolean;
  emailSubject?: string;
};

export function ContactCTA({
  title = "Plan Your Visit",
  description = "Whatever brings you to the Creg Ny Baa — a race day, a family meal or a private celebration — our team is on hand to help.",
  showBooking = true,
  emailSubject,
}: ContactCTAProps) {
  return (
    <section className="border-t border-cng-black/10 bg-cng-grey-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Get In Touch" title={title} description={description} align="center" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {showBooking ? <BookTableButton /> : null}
          <PrimaryButton href={`mailto:${siteConfig.email}${emailSubject ? `?subject=${encodeURIComponent(emailSubject)}` : ""}`} variant="ghost">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Us
          </PrimaryButton>
          <PrimaryButton href={siteConfig.phoneHref} variant="ghost">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
