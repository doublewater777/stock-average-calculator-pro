'use client';

import { useI18n } from "@/lib/i18n";
import { ChevronLeft, BookOpen, Calculator, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EduPage1() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 selection:bg-[var(--accent-primary)] selection:text-black">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <Link 
          href="/" 
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
          {/* Section: The Formula */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-primary)] text-sm">1</span>
              {t('edu.section.formula')}
            </h2>
            <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] font-mono text-center relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="text-[var(--text-dim)] text-xs mb-4 uppercase tracking-widest font-bold">Weighted Average Formula</div>
                  <div className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                    (P₁ × Q₁) + (P₂ × Q₂) + ... / Total Qty
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />
            </div>
            <p className="text-[var(--text-dim)] leading-relaxed">
              To calculate the total average cost, you must multiply each purchase price by the number of shares bought at that price, sum those totals, and divide by the total amount of shares held. This provides your <strong>weighted average cost basis</strong>.
            </p>
          </section>

          {/* Section: Example */}
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
                    <div className="font-bold text-[var(--foreground)] mb-1">Buy #1: 10 shares @ $100</div>
                    <div className="text-[var(--text-dim)]">Initial principal: $1,000</div>
                  </div>
               </div>
               <div className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <ArrowRight size={18} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-[var(--foreground)] mb-1">Buy #2: 20 shares @ $70</div>
                    <div className="text-[var(--text-dim)]">Additional principal: $1,400</div>
                  </div>
               </div>
               <div className="mt-6 p-6 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20">
                  <div className="font-bold text-[var(--foreground)] mb-2">Final Calculation:</div>
                  <div className="text-sm leading-relaxed">
                    ($1,000 + $1,400) / (10 + 20) = <span className="text-xl font-black text-[var(--accent-primary)]">$80.00</span>
                  </div>
               </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="pt-10 border-t border-[var(--border)]">
             <div className="p-10 rounded-[3rem] bg-gradient-to-br from-[var(--surface)] to-[var(--background)] border border-[var(--border)] text-center space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent-primary)] text-black flex items-center justify-center mx-auto shadow-2xl shadow-[var(--accent-primary)]/20 mb-4">
                  <Calculator size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">Ready to calculate your own?</h3>
                <p className="text-[var(--text-dim)] max-w-md mx-auto">
                  Use our high-precision stock average calculator to get instant results including commissions and averaging down targets.
                </p>
                <Link 
                  href="/"
                  className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 active:scale-95 transition-all"
                >
                  Go to Calculator
                </Link>
             </div>
          </section>
        </div>

        {/* Footer Hint */}
        <footer className="pt-20 text-center">
           <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">
              <Lightbulb size={12} className="text-[var(--accent-primary)]" />
              Professional Trading Tools
           </div>
        </footer>
      </div>
    </div>
  );
}
