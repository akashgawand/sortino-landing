import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sortino by Pareto Solutions - Performance Marketing Agency",
  description:
    "PERFORMANCE MARKETING // SEO // ANALYTICS - Sortino coalesced the best marketing brains in the industry, blending experience and function for results. We've already made millions in net profits for our clients, and we have the availability to provide similar results for your business.",
  keywords: [
    "performance marketing",
    "SEO",
    "analytics",
    "digital marketing",
    "marketing agency",
  ],
  authors: [{ name: "Sortino" }],
  openGraph: {
    title: "Sortino by Pareto Solutions - Performance Marketing Agency",
    description: "PERFORMANCE MARKETING // SEO // ANALYTICS",
    type: "website",
    locale: "en_US",
    siteName: "Sortino",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
