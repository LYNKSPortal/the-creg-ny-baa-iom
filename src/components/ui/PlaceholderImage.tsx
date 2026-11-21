import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  alt: string;
  label?: string;
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Stylised, non-photographic placeholder used until authentic venue
 * photography is supplied. Never presents stock/generic photography as if it
 * were a real picture of the Creg Ny Baa, the alt text describes the final
 * intended image for screen-reader users, and a small on-screen label makes
 * clear to sighted users that this is a placeholder.
 */
export function PlaceholderImage({ alt, label = "Photography coming soon", className, tone = "dark" }: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "placeholder-art relative flex h-full w-full items-end overflow-hidden",
        tone === "dark" ? "bg-cng-black" : "bg-cng-grey-100",
        className,
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 220 Q 80 160 140 200 T 260 180 T 400 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-cng-gold"
        />
        <path
          d="M0 260 Q 100 210 180 240 T 400 190"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-cng-red"
        />
      </svg>
      <span
        className={cn(
          "relative z-10 m-4 inline-flex items-center rounded-sm border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest",
          tone === "dark"
            ? "border-white/20 bg-black/40 text-white/70"
            : "border-black/10 bg-white/60 text-cng-grey-700",
        )}
      >
        {label}
      </span>
    </div>
  );
}
