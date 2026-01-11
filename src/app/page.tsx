"use client";

import StockCalculator from "@/components/calculator";
import {
  Target,
  Zap,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function Home() {
  const { t } = useI18n();

  const eduPages = [
    {
      slug: "how-to-calculate-average-stock-price",
      title: t("edu.how-to.title"),
      desc: t("edu.how-to.desc"),
    },
    {
      slug: "average-stock-price-after-buying-more",
      title: t("edu.buying-more.title"),
      desc: t("edu.buying-more.desc"),
    },
    {
      slug: "stock-averaging-down-calculator",
      title: t("edu.averaging-down.title"),
      desc: t("edu.averaging-down.desc"),
    },
    {
      slug: "calculate-average-stock-price-for-loss-recovery",
      title: t("edu.loss-recovery.title"),
      desc: t("edu.loss-recovery.desc"),
    },
    {
      slug: "average-cost-vs-average-price",
      title: t("edu.cost-vs-price.title"),
      desc: t("edu.cost-vs-price.desc"),
    },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen selection:bg-[var(--accent-primary)] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        <StockCalculator />

        {/* SEO Content Section - Product Value & Education */}
        <section
          id="seo-content"
          className="max-w-xl mx-auto px-4 pb-20 mt-12 border-t border-[var(--border)] pt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] flex items-center justify-center text-[var(--accent-primary)] mx-auto md:mx-0">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-bold text-[var(--foreground)] leading-tight">
                {t("seo.precision.title")}
              </h2>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t("seo.precision.text")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] flex items-center justify-center text-cyan-500 dark:text-cyan-400 mx-auto md:mx-0">
                <Zap size={20} />
              </div>
              <h2 className="text-xl font-bold text-[var(--foreground)] leading-tight">
                {t("seo.strategy.title")}
              </h2>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t("seo.strategy.text")}
              </p>
            </div>
          </div>

          {/* Education / Resource Center Section */}
          <div className="mt-32 space-y-12">
            <div className="text-center md:text-left space-y-3">
              <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center justify-center md:justify-start gap-3">
                <BookOpen className="text-blue-500" />
                {t("nav.edu")}
              </h2>
              <p className="text-sm text-[var(--text-dim)]">
                {t("edu.guides.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {eduPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all gap-4"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-xs text-[var(--text-dim)]">
                      {page.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[var(--text-dim)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--foreground)]/[0.02] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 shrink-0 mx-auto md:mx-0">
                <ShieldCheck size={32} />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[var(--foreground)] text-center md:text-left">
                  {t("seo.fees.title")}
                </h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed text-center md:text-left">
                  {t("seo.fees.text")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-xl mx-auto px-4 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2 flex items-center justify-center gap-3">
              <HelpCircle className="text-[var(--accent-primary)]" />
              {t("faq.title")}
            </h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
