'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n, getLocalizedPath } from "@/lib/i18n";
import { ArrowDownRight, TrendingUp, Info, Calculator, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AverageStockPriceAfterBuyingMorePage() {
  const { t, lang } = useI18n();

  return (
    <EducationLayout
      titleKey="edu.buying-more.title"
      descKey="edu.buying-more.desc"
    >
      <section className="space-y-10">
        {/* Introduction */}
        <div className="flex gap-4 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <Info className="text-blue-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">
            {t('edu.buying-more.intro')}
          </p>
        </div>

        {/* Impact on Average */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.buying-more.impact-title')}
          </h2>
          <p className="text-[var(--text-dim)] leading-relaxed">
            {t('edu.buying-more.impact-desc')}
          </p>
        </div>

        {/* Strategies */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            {t('edu.section.strategy')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buying Higher */}
            <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
              <TrendingUp className="text-emerald-500" size={32} />
              <h4 className="font-bold text-[var(--foreground)] text-lg">
                {t('edu.buying-more.scale-in-title')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.buying-more.scale-in-desc')}
              </p>
            </div>

            {/* Buying Lower */}
            <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-4">
              <ArrowDownRight className="text-blue-500" size={32} />
              <h4 className="font-bold text-[var(--foreground)] text-lg">
                {t('edu.buying-more.scale-down-title')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.buying-more.scale-down-desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Step by Step Calculation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.buying-more.calculation-steps')}
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">
                  {t('edu.buying-more.step1-title')}
                </h4>
                <p className="text-sm text-[var(--text-dim)]">
                  {t('edu.buying-more.step1-desc')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">
                  {t('edu.buying-more.step2-title')}
                </h4>
                <p className="text-sm text-[var(--text-dim)]">
                  {t('edu.buying-more.step2-desc')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">
                  {t('edu.buying-more.step3-title')}
                </h4>
                <p className="text-sm text-[var(--text-dim)]">
                  {t('edu.buying-more.step3-desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Example */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            {t('edu.section.example')}
          </h2>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-6">
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                <ArrowRight size={18} />
              </div>
              <div className="text-sm">
                <div className="font-bold text-[var(--foreground)] mb-1">
                  {t('common.initial-position')}: {t('edu.buying-more.example-position')}
                </div>
                <div className="text-[var(--text-dim)]">
                  {t('common.current-total-cost')}: $5,000
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                <ArrowRight size={18} />
              </div>
              <div className="text-sm">
                <div className="font-bold text-[var(--foreground)] mb-1">
                  {t('common.new-purchase')}: {t('edu.buying-more.example-purchase')}
                </div>
                <div className="text-[var(--text-dim)]">
                  {t('common.additional-cost')}: $2,000
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
              <div className="font-bold text-[var(--foreground)] mb-2">
                {t('common.final-calculation')}
              </div>
              <div className="text-sm leading-relaxed font-mono">
                ($5,000 + $2,000) / (100 + 50) = <span className="text-xl font-black text-[var(--accent-primary)]">$46.67</span>
              </div>
              <div className="text-xs text-[var(--text-dim)] mt-3">
                {t('common.new-avg-dropped', { old: '50', new: '46.67' })}
              </div>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center space-y-4">
          <Calculator className="w-12 h-12 text-purple-500 mx-auto" />
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {t('edu.section.tutorial')}
          </h3>
          <p className="text-sm text-[var(--text-dim)] max-w-lg mx-auto leading-relaxed">
            {t('common.calculator-auto-recalc')}
          </p>
          <Link
            href={getLocalizedPath('/', lang)}
            className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-purple-500 text-white font-bold hover:scale-105 active:scale-95 transition-all"
          >
            {t('common.calculate-your-average')}
          </Link>
        </div>

        {/* FAQ */}
        <div className="space-y-6 pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
            <HelpCircle className="text-[var(--accent-primary)]" size={24} />
            {t('faq.title')}
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                {t('edu.buying-more.faq1-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.buying-more.faq1-a')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                {t('edu.buying-more.faq2-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.buying-more.faq2-a')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </EducationLayout>
  );
}