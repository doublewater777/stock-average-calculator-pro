import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Stock Average Calculator — Precision Share Cost Tracker",
  description:
    "Free weighted average price calculator for stock purchases with surgical accuracy. Professional tool for portfolio position sizing, averaging down, and break-even calculation.",
  keywords: [
    "stock average calculator",
    "average down calculator",
    "share cost calculator",
    "stock investment tools",
    "position sizing tool",
    "break even calculator stock",
  ],
  alternates: {
    canonical: "https://quantstock.io",
    languages: {
      "en-US": "https://quantstock.io",
      "zh-CN": "https://quantstock.io?lang=zh",
      "hi-IN": "https://quantstock.io?lang=hi",
    },
  },
  authors: [{ name: "QuantStock Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "QuantStock — Precision Share Cost Tracker",
    description:
      "Calculate weighted average price for stock purchases with surgical accuracy.",
    url: "https://quantstock.io",
    siteName: "QuantStock",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "QuantStock Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "QuantStock — Precision Share Cost Tracker",
    description:
      "Professional tool for portfolio position sizing and averaging down.",
    images: ["/icon.png"],
    creator: "@PanYang0203",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QuantStock Average Calculator",
  operatingSystem: "All",
  applicationCategory: "FinanceApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1024",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrains.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <I18nProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
