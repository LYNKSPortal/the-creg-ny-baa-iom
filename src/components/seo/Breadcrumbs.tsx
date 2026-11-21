import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbListJsonLd, type Breadcrumb } from "@/lib/structuredData";

export function Breadcrumbs({ items, light = false }: { items: Breadcrumb[]; light?: boolean }) {
  const full: Breadcrumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="relative z-10">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-wide">
          {full.map((item, index) => {
            const isLast = index === full.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRight className={light ? "h-3 w-3 text-white/40" : "h-3 w-3 text-cng-grey-500"} aria-hidden="true" />
                ) : null}
                {isLast ? (
                  <span aria-current="page" className={light ? "text-white/70" : "text-cng-grey-500"}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={light ? "text-white/70 hover:text-white" : "text-cng-grey-500 hover:text-cng-black"}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbListJsonLd(full)} />
    </>
  );
}
