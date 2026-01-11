"use client";

import { Share2, Languages } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Stock Average Calculator: Price After Buying More",
      text: "Free tool to calculate average stock price after buying more shares.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden shadow-[0_0_15px_var(--accent-primary)] shadow-opacity-20 group-hover:scale-105 transition-transform">
            <Image
              src="/icon.png"
              alt="Stock Average Calculator Logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-black text-lg tracking-tight text-[var(--foreground)]">
            Stock Average Calculator
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#calculator"
            className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors"
          >
            {t("nav.calc")}
          </Link>
          <Link
            href="#seo-content"
            className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors"
          >
            {t("nav.edu")}
          </Link>
          <Link
            href="#faq"
            className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors"
          >
            {t("nav.faq")}
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 rounded-lg hover:bg-[var(--surface-hover)] text-[var(--text-dim)] hover:text-[var(--foreground)] transition-all"
            >
              <Languages size={18} />
            </motion.button>

            <AnimatePresence>
              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-40 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-2xl z-20"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as any);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold transition-all",
                          lang === l.code
                            ? "bg-[var(--accent-primary)] text-black"
                            : "text-[var(--text-dim)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                        )}
                      >
                        <span>{l.flag}</span>
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <ThemeToggle />

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="p-2 rounded-lg hover:bg-[var(--surface-hover)] text-[var(--text-dim)] hover:text-[var(--foreground)] transition-all"
            >
              <Share2 size={18} />
            </motion.button>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-[var(--accent-primary)] text-black text-[10px] font-black rounded uppercase tracking-widest whitespace-nowrap shadow-xl pointer-events-none"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper for class merging if not imported
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
