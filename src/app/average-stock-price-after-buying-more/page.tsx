'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n } from "@/lib/i18n";
import { ArrowDownRight, TrendingUp, Info } from "lucide-react";

export default function EduPage2() {
  const { t } = useI18n();

  return (
    <EducationLayout 
      titleKey="edu.buying-more.title" 
      descKey="edu.buying-more.desc"
    >
      <section className="space-y-6">
        <div className="flex gap-4 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
          <Info className="text-blue-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">
            {t('edu.buying-more.intro')}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[var(--foreground)] mt-10">{t('edu.section.strategy')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
             <ArrowDownRight className="text-red-500" />
             <h4 className="font-bold text-[var(--foreground)]">Buying the Dip</h4>
             <p className="text-xs text-[var(--text-dim)] leading-relaxed">
               Adding shares when the price is below your current average. This is the most common reason for calculating an updated cost basis.
             </p>
          </div>
          <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-3">
             <TrendingUp className="text-emerald-500" />
             <h4 className="font-bold text-[var(--foreground)]">Scaling In</h4>
             <p className="text-xs text-[var(--text-dim)] leading-relaxed">
               Entering a position in stages as the price rises. This increases your average but manages capital risk more conservatively.
             </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[var(--foreground)] pt-6">{t('edu.section.example')}</h2>
        <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
           <div className="flex justify-between items-center text-sm">
             <span className="text-[var(--text-dim)]">Initial Position</span>
             <span className="font-bold">100 @ $50.00</span>
           </div>
           <div className="flex justify-between items-center text-sm">
             <span className="text-[var(--text-dim)]">Buying More</span>
             <span className="font-bold">50 @ $40.00</span>
           </div>
           <div className="pt-4 border-t border-[var(--border)] flex justify-between items-center">
             <span className="text-sm font-bold">New Average</span>
             <span className="text-xl font-black text-[var(--accent-primary)]">$46.67</span>
           </div>
        </div>
      </section>
    </EducationLayout>
  );
}
