import type { LucideIcon } from "lucide-react";

type EventCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function EventCard({ icon: Icon, title, description }: EventCardProps) {
  return (
    <div className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cng-gold/40 text-cng-gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
