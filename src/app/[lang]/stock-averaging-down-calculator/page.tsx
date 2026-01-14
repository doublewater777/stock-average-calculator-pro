'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n, getLocalizedPath } from "@/lib/i18n";
import { AlertTriangle, Target, LineChart, TrendingDown, CheckCircle2, XCircle, Calculator, HelpCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function StockAveragingDownCalculatorPage() {
  const { t, lang } = useI18n();

  return (
    <EducationLayout
      titleKey="edu.averaging-down.title"
      descKey="edu.averaging-down.desc"
    >
      <section className="space-y-10">
        {/* Risk Alert */}
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
          <AlertTriangle className="text-amber-500 shrink-0" />
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest">
              {t('edu.section.strategy')} Alert
            </h4>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              {t('edu.averaging-down.risk')}
            </p>
          </div>
        </div>

        {/* What is Averaging Down */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
            <TrendingDown className="text-blue-500" size={24} />
            {t('edu.averaging-down.what-is')}
          </h2>
          <p className="text-[var(--text-dim)] leading-relaxed">
            {t('edu.averaging-down.what-is-desc')}
          </p>
        </div>

        {/* When to Use This Strategy */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.averaging-down.when-use')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Good Scenarios */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <h3 className="font-bold text-emerald-500">{t('edu.averaging-down.good-scenario')}</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-dim)]">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.good1')}</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.good2')}</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.good3')}</span>
                </li>
              </ul>
            </div>

            {/* Risky Scenarios */}
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 space-y-4">
              <div className="flex items-center gap-2">
                <XCircle className="text-red-500" size={20} />
                <h3 className="font-bold text-red-500">{t('edu.averaging-down.bad-scenario')}</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--text-dim)]">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.bad1')}</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.bad2')}</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{t('edu.averaging-down.bad3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step by Step Guide */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.averaging-down.step-by-step')}
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">{t('edu.averaging-down.step1')}</h4>
                <p className="text-sm text-[var(--text-dim)]">{t('edu.averaging-down.step1-desc')}</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">{t('edu.averaging-down.step2')}</h4>
                <p className="text-sm text-[var(--text-dim)]">{t('edu.averaging-down.step2-desc')}</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[var(--foreground)]">{t('edu.averaging-down.step3')}</h4>
                <p className="text-sm text-[var(--text-dim)]">{t('edu.averaging-down.step3-desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Example */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
            <LineChart className="text-[var(--accent-primary)]" size={24} />
            {t('edu.averaging-down.example-scenario')}
          </h2>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-dim)]">{t('edu.averaging-down.example-initial')}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border)]">
              <span className="text-sm text-red-500">{t('edu.averaging-down.example-drop')}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border)]">
              <span className="text-sm text-blue-500">{t('edu.averaging-down.example-target')}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border)]">
              <span className="text-sm text-[var(--text-dim)]">{t('edu.averaging-down.example-calc')}</span>
            </div>
            <div className="pt-2 flex justify-between items-center">
              <span className="text-sm font-bold">{t('edu.averaging-down.example-result')}</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              {t('common.now-only-need-break-even', { target: '$85', old: '$100' })}{t('common.achievable-target')}
            </p>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" size={20} />
              {t('edu.averaging-down.pros-title')}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-dim)]">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.pro1')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.pro2')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.pro3')}</span>
              </li>
            </ul>
          </div>

          {/* Risks */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
              <AlertCircle className="text-amber-500" size={20} />
              {t('edu.averaging-down.risks-title')}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--text-dim)]">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.risk1')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.risk2')}</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>{t('edu.averaging-down.risk3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action for Calculator */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-center space-y-4">
          <Calculator className="w-12 h-12 text-blue-500 mx-auto" />
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {t('edu.section.tutorial')}
          </h3>
          <p className="text-sm text-[var(--text-dim)] max-w-lg mx-auto leading-relaxed">
            {t('common.use-averaging-down-engine')}
          </p>
          <Link
            href={getLocalizedPath('/', lang)}
            className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-blue-500 text-white font-bold hover:scale-105 active:scale-95 transition-all"
          >
            {t('common.try-calculator-now')}
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
                {t('edu.averaging-down.faq1-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.averaging-down.faq1-a')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                {t('edu.averaging-down.faq2-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.averaging-down.faq2-a')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </EducationLayout>
  );
}
