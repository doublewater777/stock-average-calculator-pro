'use client';

import { EducationLayout } from "@/components/education-layout";
import { useI18n } from "@/lib/i18n";
import { ShieldCheck, Crosshair, HelpCircle } from "lucide-react";

export default function EduPage4() {
  const { t } = useI18n();

  return (
    <EducationLayout 
      titleKey="edu.loss-recovery.title" 
      descKey="edu.loss-recovery.desc"
    >
      <section className="space-y-10">
        <div className="flex bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 gap-4">
          <ShieldCheck className="text-emerald-500 shrink-0" />
          <p className="text-sm text-[var(--text-dim)] leading-relaxed italic">
            {t('edu.loss-recovery.target')}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">{t('faq.title')}</h2>
          <div className="space-y-6">
             <div className="space-y-2">
                <h4 className="font-bold text-[var(--foreground)]">What is "Break-Even"?</h4>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  Break-even is the price at which your portfolio value equals your total invested capital (including fees).
                </p>
             </div>
             <div className="space-y-2">
                <h4 className="font-bold text-[var(--foreground)]">How many shares do I need to recover?</h4>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  The deeper the dip, the more shares you need to buy to move the needle. Use our calculation to find the exact number.
                </p>
             </div>
          </div>
        </div>

        <div className="relative p-10 rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
           <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Crosshair size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Eliminate Guesswork</h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  Stop guessing how many shares you need. Enter your current position and your target recover price to get a surgical plan.
                </p>
              </div>
           </div>
           <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <HelpCircle size={150} />
           </div>
        </div>
      </section>
    </EducationLayout>
  );
}
