import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/data/site";
import { BookTableButton } from "@/components/ui/BookTableButton";

type ContactCTAProps = {
  title?: string;
  description?: string;
  showBooking?: boolean;
  emailSubject?: string;
};

const infoChips = [
  { icon: MapPin, label: "Mountain Road, Onchan" },
  { icon: Clock, label: "Lunch & evening, 7 days" },
];

export function ContactCTA({
  title = "Plan Your Visit",
  description = "Whatever brings you to the Creg Ny Baa: a race day, a family meal or a private celebration, our team is on hand to help.",
  showBooking = true,
  emailSubject,
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-cng-red">
      <div
        className="placeholder-art absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Get In Touch</p>
        <h2 className="mt-4 text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
          {description}
        </p>

        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {infoChips.map((chip) => (
            <span key={chip.label} className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
              <chip.icon className="h-4 w-4 text-white" aria-hidden="true" />
              {chip.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {showBooking ? <BookTableButton variant="white" /> : null}
          <PrimaryButton
            href={`mailto:${siteConfig.email}${emailSubject ? `?subject=${encodeURIComponent(emailSubject)}` : ""}`}
            variant="outline"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Us
          </PrimaryButton>
          <PrimaryButton href={siteConfig.phoneHref} variant="outline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
