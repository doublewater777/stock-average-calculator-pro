import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "../../app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const baseUrl = "https://stockaveragecalculators.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Stock Average Calculator: Price After Buying More",
    description:
      "Free tool to calculate average stock price after buying more shares. Perfect for position sizing, averaging down, and break-even analysis.",
    keywords: [
      "stock average calculator",
      "average down calculator",
      "share cost calculator",
      "stock investment tools",
      "position sizing tool",
      "break even calculator stock",
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: lang === "en" ? "/" : `/${lang}`,
      languages: {
        en: "/",
        zh: "/zh",
        hi: "/hi",
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
      title: "Stock Average Calculator: Price After Buying More",
      description:
        "Free tool to calculate average stock price after buying more shares. Weighted average calculator for portfolio position sizing.",
      url: baseUrl,
      siteName: "QuantStock",
      images: [
        {
          url: "/icon.png",
          width: 512,
          height: 512,
          alt: "QuantStock Logo",
        },
      ],
      locale: lang === "zh" ? "zh_CN" : lang === "hi" ? "hi_IN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      site: "@PanYang0203",
      title: "Calculate Average Stock Price After Buying More",
      description:
        "Free tool to calculate your average stock price after buying more shares.",
      images: ["/icon.png"],
      creator: "@PanYang0203",
    },
  };
}

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${jetbrains.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <I18nProvider initialLang={lang as any}>
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
