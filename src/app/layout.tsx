import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBanner } from "@/components/ui/AnnouncementBanner";
import { siteConfig } from "@/data/site";
import { christmasSeason } from "@/data/christmas";

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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Isle of Man TT Pub, Restaurant & Events Venue`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cng-cream text-cng-black">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Seasonal Christmas announcement, dates/copy live in src/data/christmas.ts, update each year. */}
        <AnnouncementBanner startDate={christmasSeason.activeFrom} endDate={christmasSeason.activeUntil} href="/menus#christmas">
          Our Christmas menus are now available, {christmasSeason.availability.toLowerCase()}: view menus &amp; book your festive table.
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
