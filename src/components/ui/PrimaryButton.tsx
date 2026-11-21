import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "gold";

type PrimaryButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-cng-red text-white hover:bg-cng-red-dark focus-visible:outline-cng-gold border border-cng-red",
  outline:
    "bg-transparent text-cng-cream border border-cng-cream/60 hover:bg-cng-cream hover:text-cng-black",
  ghost:
    "bg-transparent text-cng-black border border-cng-black/20 hover:border-cng-black hover:bg-cng-black hover:text-white",
  gold: "bg-cng-gold text-cng-black border border-cng-gold hover:bg-cng-gold/85",
};

export function PrimaryButton({
  href,
  variant = "solid",
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ease-out",
    variantClasses[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
