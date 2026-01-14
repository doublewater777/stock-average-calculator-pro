'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n } from "@/lib/i18n";
import { Scale, Info, CheckCircle2, AlertCircle, TrendingUp, FileText, DollarSign, HelpCircle } from "lucide-react";

export default function AverageCostVsAveragePricePage() {
  const { t } = useI18n();

  return (
    <EducationLayout
      titleKey="edu.cost-vs-price.title"
      descKey="edu.cost-vs-price.desc"
    >
      <section className="space-y-10">
        {/* Summary Alert */}
        <div className="flex gap-4 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <Scale className="text-blue-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">
            {t('edu.cost-vs-price.summary')}
          </p>
        </div>

        {/* Key Concepts Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
              <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
                <Info size={18} className="text-blue-500" />
                {t('edu.cost-vs-price.avg-price-title')}
              </h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.cost-vs-price.avg-price-desc')}
              </p>
              <div className="p-3 rounded-xl bg-[var(--background)] text-xs font-mono">
                {t('edu.cost-vs-price.avg-price-formula')}
              </div>
           </div>

           <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
              <h3 className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                <CheckCircle2 size={18} />
                {t('edu.cost-vs-price.avg-cost-title')}
              </h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                {t('edu.cost-vs-price.avg-cost-desc')}
              </p>
              <div className="p-3 rounded-xl bg-[var(--background)] text-xs font-mono text-emerald-500">
                {t('edu.cost-vs-price.avg-cost-formula')}
              </div>
           </div>
        </div>

        {/* Why This Matters */}
        <div className="prose prose-invert max-w-none">
           <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <AlertCircle className="text-amber-500" size={24} />
              {t('edu.cost-vs-price.why-matters')}
           </h2>
           <p className="text-[var(--text-dim)] leading-relaxed">
              {t('edu.cost-vs-price.small-positions')}
           </p>
           <ul className="space-y-3 text-sm text-[var(--text-dim)] mt-4">
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>{t('edu.cost-vs-price.scenario1')}</span>
              </li>
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>{t('edu.cost-vs-price.scenario2')}</span>
              </li>
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>{t('edu.cost-vs-price.scenario3')}</span>
              </li>
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>{t('edu.cost-vs-price.scenario4')}</span>
              </li>
           </ul>
        </div>

        {/* Why We Calculate Average Cost */}
        <div className="space-y-6">
           <h2 className="text-2xl font-bold text-[var(--foreground)]">
              {t('edu.cost-vs-price.why-avg-cost')}
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
                 <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <FileText className="text-blue-500" size={24} />
                 </div>
                 <h4 className="font-bold text-[var(--foreground)]">{t('edu.cost-vs-price.tax-accuracy')}</h4>
                 <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                    {t('edu.cost-vs-price.tax-desc')}
                 </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
                 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <TrendingUp className="text-emerald-500" size={24} />
                 </div>
                 <h4 className="font-bold text-[var(--foreground)]">{t('edu.cost-vs-price.roi-tracking')}</h4>
                 <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                    {t('edu.cost-vs-price.roi-desc')}
                 </p>
              </div>
           </div>
        </div>

        {/* Real-World Example */}
        <div className="space-y-6">
           <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <DollarSign className="text-[var(--accent-primary)]" size={24} />
              {t('edu.cost-vs-price.example-title')}
           </h2>
           <p className="text-sm text-[var(--text-dim)]">{t('edu.cost-vs-price.example-intro')}</p>

           <div className="space-y-4">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
                 <div className="text-sm font-mono text-[var(--foreground)]">
                    {t('edu.cost-vs-price.example-trade1')}
                 </div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
                 <div className="text-sm font-mono text-[var(--foreground)]">
                    {t('edu.cost-vs-price.example-trade2')}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                 <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-wider">
                       {t('edu.cost-vs-price.avg-price-title')}
                    </div>
                    <div className="text-sm font-mono text-[var(--foreground)]">
                       {t('edu.cost-vs-price.example-avg-price')}
                    </div>
                 </div>

                 <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-xs font-bold text-emerald-500 mb-2 uppercase tracking-wider">
                       {t('edu.cost-vs-price.avg-cost-title')}
                    </div>
                    <div className="text-sm font-mono text-[var(--foreground)]">
                       {t('edu.cost-vs-price.example-avg-cost')}
                    </div>
                 </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                 <p className="text-xs text-[var(--text-dim)] italic leading-relaxed">
                    {t('edu.cost-vs-price.example-note')}
                 </p>
              </div>
           </div>
        </div>

        {/* Calculator Default Explanation */}
        <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
           <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              {t('edu.cost-vs-price.calculator-default')}
           </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6 pt-6 border-t border-[var(--border)]">
           <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <HelpCircle className="text-[var(--accent-primary)]" size={24} />
              {t('faq.title')}
           </h2>

           <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                 <h4 className="font-bold text-[var(--foreground)] mb-2">
                    {t('edu.cost-vs-price.faq1-q')}
                 </h4>
                 <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                    {t('edu.cost-vs-price.faq1-a')}
                 </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                 <h4 className="font-bold text-[var(--foreground)] mb-2">
                    {t('edu.cost-vs-price.faq2-q')}
                 </h4>
                 <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                    {t('edu.cost-vs-price.faq2-a')}
                 </p>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                 <h4 className="font-bold text-[var(--foreground)] mb-2">
                    {t('edu.cost-vs-price.faq3-q')}
                 </h4>
                 <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                    {t('edu.cost-vs-price.faq3-a')}
                 </p>
              </div>
           </div>
        </div>
      </section>
    </EducationLayout>
  );
}
