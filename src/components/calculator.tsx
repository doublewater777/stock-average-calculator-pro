'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  RotateCcw, 
  TrendingUp, 
  Percent,
  Calculator as CalcIcon,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useI18n } from '@/lib/i18n';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BuyRow {
  id: string;
  price: string;
  quantity: string;
}

export default function StockCalculator() {
  const { lang, t } = useI18n();
  const [isLoaded, setIsLoaded] = useState(false);
  const [rows, setRows] = useState<BuyRow[]>([
    { id: '1', price: '120.50', quantity: '10' },
    { id: '2', price: '115.20', quantity: '15' },
  ]);
  const [commissionType, setCommissionType] = useState<'flat' | 'percent'>('percent');
  const [commissionValue, setCommissionValue] = useState('0');

  // Persistence: Hydration
  useEffect(() => {
    const saved = localStorage.getItem('stock-calc-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.rows) setRows(parsed.rows);
        if (parsed.commissionType) setCommissionType(parsed.commissionType);
        if (parsed.commissionValue) setCommissionValue(parsed.commissionValue);
      } catch (e) {
        console.error("Failed to load saved data");
      }
    }
    setIsLoaded(true);
  }, []);

  // Persistence: Save
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('stock-calc-data', JSON.stringify({ rows, commissionType, commissionValue }));
    }
  }, [rows, commissionType, commissionValue, isLoaded]);

  // Averaging Down Engine State
  const [targetPrice, setTargetPrice] = useState('');
  const [marketPrice, setMarketPrice] = useState('');

  // Core Calc Logic
  const results = useMemo(() => {
    let totalShares = 0;
    let totalPrincipal = 0;
    
    rows.forEach(row => {
      const p = parseFloat(row.price) || 0;
      const q = parseFloat(row.quantity) || 0;
      totalShares += q;
      totalPrincipal += p * q;
    });

    let totalCommission = 0;
    const comm = parseFloat(commissionValue) || 0;
    if (commissionType === 'flat') {
      totalCommission = comm;
    } else {
      totalCommission = totalPrincipal * (comm / 100);
    }

    const totalCost = totalPrincipal + totalCommission;
    const averagePrice = totalShares > 0 ? totalCost / totalShares : 0;

    // Target Price Logic: S_n = S_e * (P_e - P_t) / (P_t - P_m)
    // S_e = totalShares, P_e = averagePrice, P_t = targetPrice, P_m = marketPrice
    const tP = parseFloat(targetPrice) || 0;
    const mP = parseFloat(marketPrice) || 0;
    let requiredShares = 0;
    if (tP > 0 && mP > 0 && totalShares > 0) {
      if (tP > mP && averagePrice > tP) {
        requiredShares = (totalShares * (averagePrice - tP)) / (tP - mP);
      }
    }

    return {
      totalShares,
      totalPrincipal,
      totalCommission,
      totalCost,
      averagePrice,
      requiredShares,
      requiredCost: requiredShares * mP
    };
  }, [rows, commissionType, commissionValue, targetPrice, marketPrice]);

  const addRow = () => {
    setRows([...rows, { id: Math.random().toString(36).substr(2, 9), price: '', quantity: '' }]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter(r => r.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof BuyRow, value: string) => {
    setRows(rows.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const reset = () => {
    setRows([{ id: '1', price: '', quantity: '' }]);
    setCommissionValue('0');
    setTargetPrice('');
    setMarketPrice('');
  };

  const averagePriceStr = results.averagePrice.toLocaleString(undefined, { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 4 
  });

  if (!isLoaded) return null; // Avoid hydration mismatch for LocalStorage

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 md:py-12 relative" id="calculator">

      {/* Condensed Header for Mobile Visibility */}
      <header className="mb-6 md:mb-10 flex flex-col items-center md:items-start md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 text-center md:text-left pr-10 md:pr-0">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2 md:mb-3">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-emerald-500">{t('calc.badge')}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-1">
            {t('calc.title')} <span className="text-[var(--accent-primary)]">{t('calc.title_suffix')}</span>
          </h1>
          <p className="text-[10px] md:text-sm text-[var(--text-dim)] font-medium">
             {t('calc.subtitle')}
          </p>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 md:gap-8 items-start">
        
        {/* Left Column: Input Panel */}
        <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
          {/* Input Rows */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] md:text-xs font-bold text-[var(--text-dim)] uppercase tracking-widest flex items-center gap-2">
                <Plus size={12} className="text-blue-500" />
                {t('calc.entries_title')}
              </h3>
              <button 
                onClick={reset}
                className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] hover:text-red-500 transition-colors flex items-center gap-1 uppercase tracking-tighter"
              >
                <RotateCcw size={10} /> {t('calc.reset')}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {rows.map((row) => (
                <motion.div 
                  key={row.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative flex gap-2 md:gap-3 items-end"
                >
                  <div className="flex-1 grid grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-1 md:space-y-1.5">
                      <label className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] uppercase ml-1 group-focus-within:text-[var(--accent-primary)] transition-colors">
                        {t('calc.price')}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-[45%] text-[var(--text-dim)] text-[10px] md:text-xs font-mono select-none">$</span>
                        <input 
                          type="number" 
                          value={row.price}
                          onChange={(e) => updateRow(row.id, 'price', e.target.value)}
                          placeholder="0.00"
                          className="input-field w-full !pl-8 md:!pl-10 h-10 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 md:space-y-1.5">
                      <label className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] uppercase ml-1 group-focus-within:text-[var(--accent-primary)] transition-colors">
                        {t('calc.quantity')}
                      </label>
                      <input 
                        type="number" 
                        value={row.quantity}
                        onChange={(e) => updateRow(row.id, 'quantity', e.target.value)}
                        placeholder="0"
                        className="input-field w-full h-10 text-sm"
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => removeRow(row.id)}
                    className={cn(
                      "p-2.5 md:p-3 rounded-lg md:rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-dim)] hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20 transition-all mb-0.5",
                      rows.length === 1 && "opacity-0 pointer-events-none"
                    )}
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>

            <button 
              onClick={addRow}
              className="w-full py-3 border-2 border-dashed border-[var(--border)] rounded-xl md:rounded-2xl text-[var(--text-dim)] hover:text-[var(--foreground)] hover:border-[var(--accent-primary)]/30 hover:bg-[var(--surface-hover)] transition-all text-xs font-bold flex items-center justify-center gap-2 group"
            >
              <div className="p-0.5 md:p-1 rounded-md bg-[var(--input-bg)] group-hover:bg-[var(--accent-primary)] group-hover:text-black transition-all">
                 <Plus size={12} />
              </div>
              {t('calc.add_buy')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Commission Logic */}
            <div className="glass-card p-4 md:p-5 bg-[var(--surface-hover)]/30">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                 <h3 className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-widest flex items-center gap-1.5 md:gap-2">
                    <Percent size={10} className="text-cyan-500" />
                    {t('calc.fees')}
                 </h3>
                 <div className="flex bg-[var(--input-bg)] p-0.5 rounded-lg border border-[var(--border)]">
                    {['percent', 'flat'].map((type) => (
                      <button 
                        key={type}
                        onClick={() => setCommissionType(type as any)}
                        className={cn(
                          "px-2 py-0.5 md:py-1 rounded-md text-[8px] md:text-[9px] font-bold uppercase transition-all",
                          commissionType === type ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm border border-[var(--border)]" : "text-[var(--text-dim)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {type === 'percent' ? t('calc.percent') : t('calc.flat')}
                      </button>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <span className="absolute left-3 top-1/2 -translate-y-[45%] text-[var(--text-dim)] text-[10px] md:text-xs font-mono select-none">
                    {commissionType === 'percent' ? '%' : '$'}
                 </span>
                 <input 
                    type="number" 
                    value={commissionValue}
                    onChange={(e) => setCommissionValue(e.target.value)}
                    className="input-field w-full !pl-8 md:!pl-10 h-9 text-xs"
                    placeholder="0.00"
                 />
              </div>
            </div>

            {/* Averaging Down (Target Price) Engine */}
            <div className="glass-card p-4 md:p-5 border-blue-500/20 bg-blue-500/5">
              <h3 className="text-[9px] md:text-[10px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <CalcIcon size={12} />
                 {t('target.title')}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[9px] font-bold text-[var(--text-dim)] uppercase">{t('target.price')}</label>
                    <input 
                      type="number" 
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(e.target.value)}
                      placeholder="0.00"
                      className="input-field w-full h-8 text-[10px] !px-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[9px] font-bold text-[var(--text-dim)] uppercase">{t('target.current')}</label>
                    <input 
                      type="number" 
                      value={marketPrice}
                      onChange={(e) => setMarketPrice(e.target.value)}
                      placeholder="0.00"
                      className="input-field w-full h-8 text-[10px] !px-2"
                    />
                  </div>
              </div>
              {results.requiredShares > 0 && (
                <div className="mt-2.5 pt-2.5 border-t border-blue-500/10 flex justify-between items-center text-[10px]">
                  <div>
                    <span className="text-[var(--text-dim)]">{t('target.result_shares')}: </span>
                    <span className="font-bold text-blue-500">{Math.ceil(results.requiredShares).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-dim)]">{t('target.result_cost')}: </span>
                    <span className="font-bold text-blue-500">${results.requiredCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Results Dashboard */}
        <div className="lg:sticky lg:top-24 order-1 lg:order-2">
          {/* Results Card - The Crown Jewel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card relative border-[var(--accent-primary)]/20 bg-gradient-to-br from-[var(--surface)] to-[var(--background)] shadow-xl md:shadow-2xl shadow-emerald-500/5"
          >
            {/* Decoration Icon - Hidden on small mobile screens to save space */}
            <div className="absolute top-0 right-0 p-4 opacity-5 text-[var(--foreground)] hidden sm:block">
              <CalcIcon size={100} className="md:w-[120px] md:h-[120px]" />
            </div>
            
            <div className="p-4 md:p-6">
              <div className="text-[9px] md:text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2">
                 <TrendingUp size={10} className="text-[var(--accent-primary)]" />
                 {t('results.summary')}
              </div>
              
              <div className="flex flex-col gap-0.5 md:gap-1 mb-4 md:mb-8 overflow-hidden">
                <div className="text-[10px] md:text-xs text-[var(--text-dim)] font-medium">{t('results.avg_price')}</div>
                <div className="text-2xl md:text-4xl font-black text-[var(--foreground)] font-mono flex items-baseline gap-1.5 break-all leading-tight">
                  <span className="text-lg md:text-xl text-[var(--accent-primary)]">$</span>
                  {averagePriceStr}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-[var(--border)]">
                 <div className="space-y-0.5 md:space-y-1">
                   <div className="text-[8px] md:text-[9px] text-[var(--text-dim)] uppercase font-bold tracking-wider">{t('results.total_shares')}</div>
                   <div className="text-sm md:text-lg font-bold font-mono text-[var(--foreground)] break-all leading-tight">
                      {results.totalShares.toLocaleString()}
                   </div>
                 </div>
                 <div className="space-y-0.5 md:space-y-1">
                   <div className="text-[8px] md:text-[9px] text-[var(--text-dim)] uppercase font-bold tracking-wider">{t('results.total_invested')}</div>
                   <div className="text-sm md:text-lg font-bold font-mono text-emerald-500 dark:text-emerald-400 break-all leading-tight">
                      ${results.totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                   </div>
                 </div>
              </div>
            </div>

            <div className="bg-emerald-500/5 p-3 md:p-4 border-t border-[var(--border)] flex items-start gap-2">
              <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-[9px] md:text-[10px] text-[var(--text-dim)] italic leading-relaxed">
                 {t('results.holding_statement', { price: results.averagePrice.toFixed(2) })}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
