'use client';

import { useI18n, getLocalizedPath } from "@/lib/i18n";
import { ChevronLeft, BookOpen, Calculator, ArrowRight, Lightbulb, Info, AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HowToCalculateAverageStockPricePage() {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 selection:bg-[var(--accent-primary)] selection:text-black">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <Link
          href={getLocalizedPath('/', lang)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav.calc')}
        </Link>

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] uppercase font-bold tracking-widest">
            <BookOpen size={12} />
            {t('nav.edu')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--foreground)] leading-tight tracking-tight">
            {t('edu.how-to.title')}
          </h1>
          <p className="text-lg text-[var(--text-dim)] leading-relaxed font-medium">
            {t('edu.how-to.desc')}
          </p>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-12">
          {/* Why Weighted Average */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Info className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-[var(--foreground)] m-0">
                {t('edu.how-to.why-weighted')}
              </h2>
            </div>
            <p className="text-[var(--text-dim)] leading-relaxed">
              {t('edu.how-to.why-weighted-desc')}
            </p>
          </section>

          {/* The Formula */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] text-sm">1</span>
              {t('edu.section.formula')}
            </h2>
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] font-mono text-center relative overflow-hidden group">
              <div className="relative z-10">
                <div className="text-[var(--text-dim)] text-xs mb-4 uppercase tracking-widest font-bold">{t('common.weighted-average-formula')}</div>
                <div className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  (P₁ × Q₁) + (P₂ × Q₂) + ... / Total Qty
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />
            </div>
            <p className="text-[var(--text-dim)] leading-relaxed">
              {t('common.formula-desc-weighted')}
            </p>
          </section>

          {/* Manual Calculation Steps */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              {t('edu.how-to.manual-calc')}
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[var(--foreground)]">{t('edu.how-to.step1')}</h4>
                  <p className="text-sm text-[var(--text-dim)]">{t('edu.how-to.step1-desc')}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold shrink-0">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[var(--foreground)]">{t('edu.how-to.step2')}</h4>
                  <p className="text-sm text-[var(--text-dim)]">{t('edu.how-to.step2-desc')}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold shrink-0">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[var(--foreground)]">{t('edu.how-to.step3')}</h4>
                  <p className="text-sm text-[var(--text-dim)]">{t('edu.how-to.step3-desc')}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold shrink-0">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[var(--foreground)]">{t('edu.how-to.step4')}</h4>
                  <p className="text-sm text-[var(--text-dim)]">{t('edu.how-to.step4-desc')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] text-sm">2</span>
              {t('edu.section.example')}
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <ArrowRight size={18} />
                </div>
                <div className="text-sm">
                  <div className="font-bold text-[var(--foreground)] mb-1">{t('edu.how-to.example-buy1')}</div>
                  <div className="text-[var(--text-dim)]">{t('common.initial-principal')}: $1,000</div>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <ArrowRight size={18} />
                </div>
                <div className="text-sm">
                  <div className="font-bold text-[var(--foreground)] mb-1">{t('edu.how-to.example-buy2')}</div>
                  <div className="text-[var(--text-dim)]">{t('common.additional-principal')}: $1,400</div>
                </div>
              </div>
              <div className="mt-6 p-6 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
                <div className="font-bold text-[var(--foreground)] mb-2">{t('common.final-calculation')}</div>
                <div className="text-sm leading-relaxed">
                  ($1,000 + $1,400) / (10 + 20) = <span className="text-xl font-black text-[var(--accent-primary)]">$80.00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-amber-500" size={24} />
              <h2 className="text-2xl font-bold text-[var(--foreground)] m-0">
                {t('edu.how-to.common-mistakes')}
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-[var(--text-dim)]">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.how-to.mistake1')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.how-to.mistake2')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.how-to.mistake3')}</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-6 pt-6 border-t border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <HelpCircle className="text-[var(--accent-primary)]" size={24} />
              {t('faq.title')}
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="font-bold text-[var(--foreground)] mb-2">
                  {t('edu.how-to.faq1-q')}
                </h4>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  {t('edu.how-to.faq1-a')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="font-bold text-[var(--foreground)] mb-2">
                  {t('edu.how-to.faq2-q')}
                </h4>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  {t('edu.how-to.faq2-a')}
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="pt-10 border-t border-[var(--border)]">
            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-[var(--surface)] to-[var(--background)] border border-[var(--border)] text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)] text-black flex items-center justify-center mx-auto shadow-2xl shadow-[var(--accent-primary)]/20 mb-4">
                <Calculator size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--foreground)]">{t('common.ready-to-calculate')}</h3>
              <p className="text-[var(--text-dim)] max-w-md mx-auto">
                {t('common.use-calculator-desc')}
              </p>
              <Link
                href={getLocalizedPath('/', lang)}
                className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 active:scale-95 transition-all"
              >
                {t('common.go-to-calculator')}
              </Link>
            </div>
          </section>
        </div>

        {/* Footer Hint */}
        <footer className="pt-20 text-center">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">
            <Lightbulb size={12} className="text-[var(--accent-primary)]" />
            {t('common.professional-tools')}
          </div>
        </footer>
      </div>
    </div>
  );
}