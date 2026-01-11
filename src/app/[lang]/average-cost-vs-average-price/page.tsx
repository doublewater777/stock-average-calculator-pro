'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n } from "@/lib/i18n";
import { Scale, Info, CheckCircle2 } from "lucide-react";

export default function EduPage5() {
  const { t } = useI18n();

  return (
    <EducationLayout 
      titleKey="edu.cost-vs-price.title" 
      descKey="edu.cost-vs-price.desc"
    >
      <section className="space-y-10">
        <div className="flex gap-4 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <Scale className="text-blue-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">
            {t('edu.cost-vs-price.summary')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
              <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
                <Info size={18} className="text-blue-500" />
                Average Price
              </h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                The arithmetic average of the prices you paid for your shares. 
              </p>
              <div className="p-3 rounded-xl bg-[var(--background)] text-xs font-mono">
                (Price1 + Price2) / 2
              </div>
           </div>
           
           <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
              <h3 className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Average Cost
              </h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                Your total expenditure (Principal + Commission) divided by the number of shares. 
              </p>
              <div className="p-3 rounded-xl bg-[var(--background)] text-xs font-mono text-emerald-500">
                (Total Cost) / Total Qty
              </div>
           </div>
        </div>

        <div className="prose prose-invert max-w-none">
           <h2 className="text-2xl font-bold text-[var(--foreground)]">Why distinguishes matters?</h2>
           <p className="text-[var(--text-dim)] leading-relaxed">
              For small positions, the difference between average price and average cost is negligible. However, for active traders or large institution-sized blocks, commission fees can shift your break-even point by several cents. 
           </p>
           <p className="text-[var(--text-dim)] leading-relaxed">
              Our calculator defaults to calculating <strong>Average Cost</strong> because it's the more conservative and accurate metric for Tax and ROI tracking.
           </p>
        </div>
      </section>
    </EducationLayout>
  );
}
