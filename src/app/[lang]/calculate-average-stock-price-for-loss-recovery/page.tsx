'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n, getLocalizedPath } from "@/lib/i18n";
import { ShieldCheck, Crosshair, HelpCircle, TrendingUp, Target, AlertTriangle, Calculator } from "lucide-react";
import Link from "next/link";

export default function CalculateAverageStockPriceForLossRecoveryPage() {
  const { t, lang } = useI18n();

  return (
    <EducationLayout
      titleKey="edu.loss-recovery.title"
      descKey="edu.loss-recovery.desc"
    >
      <section className="space-y-10">
        {/* Target Message */}
        <div className="flex bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 gap-4">
          <ShieldCheck className="text-emerald-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed italic">
            {t('edu.loss-recovery.target')}
          </p>
        </div>

        {/* What is Loss Recovery */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
            <Target className="text-blue-500" size={24} />
            {t('edu.loss-recovery.what-is')}
          </h2>
          <p className="text-[var(--text-dim)] leading-relaxed">
            {t('edu.loss-recovery.what-is-desc')}
          </p>
        </div>

        {/* Understanding Break-Even */}
        <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {t('edu.loss-recovery.break-even')}
          </h3>
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">
            {t('edu.loss-recovery.break-even-desc')}
          </p>
          <div className="p-4 rounded-xl bg-[var(--background)] border border-[var(--border)]">
            <div className="text-xs font-bold text-[var(--text-dim)] mb-2 uppercase tracking-wider">
              {t('common.break-even-formula')}
            </div>
            <div className="font-mono text-lg text-[var(--foreground)]">
              {t('common.break-even-formula-text')}
            </div>
          </div>
        </div>

        {/* Recovery Strategies */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.loss-recovery.strategies')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 space-y-3">
              <TrendingUp className="text-blue-500" size={28} />
              <h4 className="font-bold text-[var(--foreground)]">
                {t('edu.loss-recovery.strategy1-title')}
              </h4>
              <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                {t('edu.loss-recovery.strategy1-desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
              <Target className="text-emerald-500" size={28} />
              <h4 className="font-bold text-[var(--foreground)]">
                {t('edu.loss-recovery.strategy2-title')}
              </h4>
              <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                {t('edu.loss-recovery.strategy2-desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-3">
              <AlertTriangle className="text-amber-500" size={28} />
              <h4 className="font-bold text-[var(--foreground)]">
                {t('edu.loss-recovery.strategy3-title')}
              </h4>
              <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                {t('edu.loss-recovery.strategy3-desc')}
              </p>
            </div>
          </div>
        </div>

        {/* The Math Behind Recovery */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.loss-recovery.math-behind')}
          </h2>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-red-500/10 border border-amber-500/20">
            <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-6">
              {t('edu.loss-recovery.math-desc')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-xs font-bold text-red-500 mb-3 uppercase tracking-wider">
                  {t('common.loss-scenario')}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-dim)]">{t('common.initial-price')}</span>
                    <span className="font-mono text-[var(--foreground)]">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-dim)]">{t('common.after-drop', { percent: '50%' })}</span>
                    <span className="font-mono text-red-500">$50</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-xs font-bold text-emerald-500 mb-3 uppercase tracking-wider">
                  {t('common.recovery-needed')}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-dim)]">{t('common.from-to', { from: '$50', to: '$100' })}</span>
                    <span className="font-mono text-emerald-500">+100%</span>
                  </div>
                  <div className="text-xs text-[var(--text-dim)] mt-2">
                    {t('common.loss-requires-gain', { loss: '50', gain: '100' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {t('edu.section.example')}
          </h2>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-dim)] mb-4 uppercase tracking-wider">
                  {t('common.your-position')}
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-dim)]">{t('common.shares-owned')}</span>
                    <span className="font-mono text-[var(--foreground)]">200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-dim)]">{t('common.average-cost')}</span>
                    <span className="font-mono text-[var(--foreground)]">$80.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-dim)]">{t('common.total-invested')}</span>
                    <span className="font-mono text-[var(--foreground)]">$16,000</span>
                  </div>
                  <div className="flex justify-between text-sm pt-3 border-t border-[var(--border)]">
                    <span className="text-[var(--text-dim)]">{t('common.current-price')}</span>
                    <span className="font-mono text-red-500">$60.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-dim)]">{t('common.current-value')}</span>
                    <span className="font-mono text-red-500">$12,000</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-red-500">{t('common.unrealized-loss')}</span>
                    <span className="font-mono text-red-500">-$4,000 (-25%)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--text-dim)] mb-4 uppercase tracking-wider">
                  {t('common.recovery-analysis')}
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-xs text-blue-500 mb-1 font-bold">{t('common.option-wait')}</div>
                    <div className="text-sm text-[var(--text-dim)]">
                      {t('common.stock-needs-to-rise', { price: '$80', percent: '33.3%' })}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-xs text-emerald-500 mb-1 font-bold">{t('common.option-average-down')}</div>
                    <div className="text-sm text-[var(--text-dim)]">
                      {t('common.buy-more-new-avg', { shares: '100', price: '60', newAvg: '73.33' })}
                    </div>
                    <div className="text-xs text-[var(--text-dim)] mt-2">
                      {t('common.now-only-need-break-even', { target: '73.33', old: '80' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tool CTA */}
        <div className="relative p-10 rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <Crosshair size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{t('common.eliminate-guesswork')}</h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-4">
                {t('common.stop-guessing')}
              </p>
              <Link
                href={getLocalizedPath('/how-to-calculate-average-stock-price', lang)}
                className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-cyan-500 text-white font-bold hover:scale-105 active:scale-95 transition-all"
              >
                {t('common.use-recovery-calculator')}
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Calculator size={150} />
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
            <HelpCircle className="text-[var(--accent-primary)]" size={24} />
            {t('faq.title')}
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                {t('edu.loss-recovery.faq1-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.loss-recovery.faq1-a')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">
                {t('edu.loss-recovery.faq2-q')}
              </h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.loss-recovery.faq2-a')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">{t('common.what-is-break-even')}</h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('common.break-even-desc')}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="font-bold text-[var(--foreground)] mb-2">{t('common.how-many-shares-recover')}</h4>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('common.shares-recover-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </EducationLayout>
  );
}