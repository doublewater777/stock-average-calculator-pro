'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n } from "@/lib/i18n";
import { AlertTriangle, Target, LineChart } from "lucide-react";

export default function EduPage3() {
  const { t } = useI18n();

  return (
    <EducationLayout 
      titleKey="edu.averaging-down.title" 
      descKey="edu.averaging-down.desc"
    >
      <section className="space-y-8">
        <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-4">
          <AlertTriangle className="text-amber-500 shrink-0" />
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-amber-500 uppercase tracking-widest">{t('edu.section.strategy')} Alert</h4>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              {t('edu.averaging-down.risk')} Always use stop losses and never risk more than you can afford to lose.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
           <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Setting a Target</h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                Before you buy more, decide on your <strong>target average price</strong>. Use our calculator to see exactly how many shares it takes to reach that goal.
              </p>
           </div>
           <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Analyzing Trends</h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                Averaging down works best when a stock has a strong long-term outlook but is suffering from short-term volatility.
              </p>
           </div>
        </div>

        <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)]">
           <h3 className="text-lg font-bold text-[var(--foreground)] mb-6">Why Professionals Average Down</h3>
           <ul className="space-y-4 text-sm text-[var(--text-dim)]">
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>To lower the break-even price or exit a position sooner.</span>
              </li>
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>To increase exposure to a high-conviction asset at a discount.</span>
              </li>
              <li className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                 <span>To manage psychological pressure during market dips.</span>
              </li>
           </ul>
        </div>
      </section>
    </EducationLayout>
  );
}
