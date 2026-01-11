"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t("nav.calc"), href: "/#calculator" },
    { name: t("nav.edu"), href: "/#seo-content" },
    { name: t("nav.faq"), href: "/#faq" },
  ];

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="QuantStock Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-xl tracking-tighter text-[var(--foreground)] uppercase">
                Quant<span className="text-[var(--accent-primary)]">Stock</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed font-medium">
              {t("calc.subtitle")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/PanYang0203"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all group"
              >
                <Twitter
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="mailto:return_panyang@163.com"
                className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all group"
              >
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--foreground)]">
              {t("footer.links")}
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors inline-flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--foreground)]">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:return_panyang@163.com"
                className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors flex flex-col gap-1"
              >
                <span className="font-bold text-[var(--foreground)]">
                  Enquiries
                </span>
                return_panyang@163.com
              </a>
              <a
                href="https://x.com/PanYang0203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-dim)] hover:text-[var(--accent-primary)] transition-colors flex flex-col gap-1"
              >
                <span className="font-bold text-[var(--foreground)]">
                  Twitter / X
                </span>
                @PanYang0203
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)]">
              {t("footer.copyright", { year: currentYear.toString() })}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Surgical Precision
              </span>
            </div>
          </div>
          <p className="text-[10px] text-center md:text-left text-[var(--text-dim)] leading-loose max-w-2xl font-medium opacity-60">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
