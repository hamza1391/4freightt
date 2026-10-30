import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Mono, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: {
    default: "4 Freight Dispatch — Truck Dispatch for Owner-Operators",
    template: "%s · 4 Freight Dispatch",
  },
  description:
    "4 Freight Dispatch books freight for semis and box trucks. No upfront fee, no forced dispatch, and no contract.",
};

export const viewport: Viewport = {
  themeColor: "#16140f",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${fraunces.variable} ${plex.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "4 Freight Dispatch",
              description: "Truck dispatch for semis and 16- to 26-foot box trucks. No upfront fee, no forced dispatch, and no contract.",
              email: "desk@4freightdispatch.com",
              areaServed: "US",
              priceRange: "6%–8% of gross freight",
            }),
          }}
        />
      </body>
    </html>
  );
}
