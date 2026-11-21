import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBanner } from "@/components/ui/AnnouncementBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, ogImage } from "@/data/site";
import { christmasSeason } from "@/data/christmas";
import { localBusinessJsonLd } from "@/lib/structuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Isle of Man TT Pub, Restaurant & Events Venue`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Creg Ny Baa",
    "Isle of Man TT",
    "Isle of Man TT hospitality",
    "TT race viewing",
    "Isle of Man pub food",
    "Mountain Road pub",
    "private functions Isle of Man",
    "Onchan restaurant",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Isle of Man TT Pub, Restaurant & Events Venue`,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Isle of Man TT Pub, Restaurant & Events Venue`,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cng-cream text-cng-black">
        <JsonLd data={localBusinessJsonLd()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Seasonal Christmas announcement, dates/copy live in src/data/christmas.ts, update each year. */}
        <AnnouncementBanner startDate={christmasSeason.activeFrom} endDate={christmasSeason.activeUntil} href="/menus#christmas">
          Christmas menus are here, {christmasSeason.dateRange}: view menus &amp; book your festive table.
        </AnnouncementBanner>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
