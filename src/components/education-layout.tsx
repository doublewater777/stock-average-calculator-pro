'use client';

import { useI18n } from "@/lib/i18n";
import { ChevronLeft, BookOpen, Calculator, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface EducationLayoutProps {
  titleKey: string;
  descKey: string;
  children: React.ReactNode;
}

export function EducationLayout({ titleKey, descKey, children }: EducationLayoutProps) {
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
            {t(titleKey)}
          </h1>
          <p className="text-lg text-[var(--text-dim)] leading-relaxed font-medium">
            {t(descKey)}
          </p>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-12">
          {children}

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
                  className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-[var(--foreground)] text-[var(--background)] font-bold hover:scale-105 active:scale-95 transition-all outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
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
