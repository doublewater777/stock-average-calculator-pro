import StockCalculator from "@/components/calculator";
import { Info, Target, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[var(--accent-primary)] selection:text-black">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        <StockCalculator />

        {/* SEO Content Section - Product Value & Education */}
        <section className="max-w-xl mx-auto px-4 pb-32 mt-12 border-t border-[var(--border)] pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
               <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] flex items-center justify-center text-[var(--accent-primary)]">
                  <Target size={20} />
               </div>
               <h2 className="text-xl font-bold text-[var(--foreground)] leading-tight">Precision Position Sizing</h2>
               <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                 Managing your weighted entry price is the difference between a controlled trade and a lucky guess. Our engine provides real-time computation for multiple buy-ins, ensuring you know your exact break-even point.
               </p>
            </div>

            <div className="space-y-4">
               <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <Zap size={20} />
               </div>
               <h2 className="text-xl font-bold text-[var(--foreground)] leading-tight">Averaging Down Strategy</h2>
               <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                 When the market dips, your strategy needs to be calculated. Visualize how much capital is required to lower your average price to a target level without over-leveraging your portfolio.
               </p>
            </div>
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--foreground)]/[0.02] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500 shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Why accuracy matters in stock math?</h3>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                  Most stock calculators ignore the impact of transaction fees (commissions). Over time, these small slippages erode your ROI. Our tool allows for both percentage-based and flat-fee commission adjustments, giving you the most accurate weighted average possible.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {['No Page Reloads', 'Unlimited Buy Entries', 'Mobile First Interface', 'Instant Calculation'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[var(--text-dim)]">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
