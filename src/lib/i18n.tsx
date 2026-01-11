"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh" | "hi";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Navbar
  "nav.calc": { en: "Calculator", zh: "计算器", hi: "कैलकुलेटर" },
  "nav.edu": { en: "Education", zh: "专业知识", hi: "शिक्षा" },
  "nav.faq": { en: "FAQ", zh: "常见问题", hi: "सामान्य प्रश्न" },

  // Calculator Header
  "calc.badge": {
    en: "Live Compute Active",
    zh: "实时计算引擎已激活",
    hi: "लाइव गणना सक्रिय",
  },
  "calc.title": { en: "Stock Average", zh: "股票成本均价", hi: "स्टॉक औसत" },
  "calc.title_suffix": { en: "Calculator", zh: "计算器", hi: "कैलकुलेटर" },
  "calc.subtitle": {
    en: "Free tool to calculate your average stock price after buying more shares",
    zh: "免费计算加仓后的股票平均成本",
    hi: "अधिक शेयर खरीदने के बाद अपने औसत स्टॉक मूल्य की गणना करने के लिए मुफ़्त उपकरण",
  },

  // Purchase Entries
  "calc.entries_title": {
    en: "Purchase Entries",
    zh: "买入记录",
    hi: "खरीद प्रविष्टियां",
  },
  "calc.reset": { en: "Reset", zh: "重置", hi: "रीसेट करें" },
  "calc.price": { en: "Price", zh: "买入价格", hi: "कीमत" },
  "calc.quantity": { en: "Quantity", zh: "股数", hi: "मात्रा" },
  "calc.add_buy": {
    en: "Add Another Buy",
    zh: "添加一笔买入",
    hi: "एक और खरीद जोड़ें",
  },

  // Commission
  "calc.fees": { en: "Fees", zh: "手续费/佣金", hi: "शुल्क" },
  "calc.percent": { en: "%", zh: "比例", hi: "%" },
  "calc.flat": { en: "Fee", zh: "固定金额", hi: "शुल्क" },

  // Results
  "results.summary": {
    en: "Position Summary",
    zh: "持仓概览",
    hi: "स्थिति का सारांश",
  },
  "results.avg_price": {
    en: "Weighted Average Price",
    zh: "加权平均买入价",
    hi: "भारित औसत मूल्य",
  },
  "results.total_shares": { en: "Total Shares", zh: "总股数", hi: "कुल शेयर" },
  "results.total_invested": {
    en: "Total Invested",
    zh: "累计总投入",
    hi: "कुल निवेश किया गया",
  },
  "results.holding_statement": {
    en: "Avg cost of ${price} per share.",
    zh: "每股持仓均价为 ${price}",
    hi: "प्रति शेयर ${price} की औसत लागत।",
  },

  // Averaging Down Engine
  "target.title": {
    en: "Averaging Down (Target)",
    zh: "补仓目标计算器",
    hi: "नीचे का औसत (लक्ष्य)",
  },
  "target.price": { en: "Target Average", zh: "目标均价", hi: "लक्ष्य औसत" },
  "target.current": {
    en: "Market Price",
    zh: "当前市场价",
    hi: "बाज़ार मूल्य",
  },
  "target.result_shares": {
    en: "Required Shares",
    zh: "需买入股数",
    hi: "आवश्यक शेयर",
  },
  "target.result_cost": {
    en: "Capital Needed",
    zh: "所需资金",
    hi: "आवश्यक पूंजी",
  },
  "target.hint": {
    en: "Calculates how many shares to buy to reach your target average price.",
    zh: "计算在当前市价下买入多少股可以达到你的目标成本价",
    hi: "लक्ष्य औसत मूल्य तक पहुँचने के लिए कितने शेयर खरीदने हैं, इसकी गणना करता है।",
  },

  // SEO Content Blocks
  "seo.intro.title": {
    en: "What is a Stock Average Calculator?",
    zh: "什么是股票均价计算器？",
    hi: "स्टॉक औसत कैलकुलेटर क्या है?",
  },
  "seo.intro.p1": {
    en: "The Stock Average Calculator is a professional tool designed to help investors accurately determine their weighted average share price. Whether you are averaging down on a position or scaling in, knowing your exact break-even point is crucial for effective portfolio management.",
    zh: "股票均价计算器是一款专为投资者设计的专业工具，用于精确计算持仓的加权平均成本。无论您是由于亏损进行补仓，还是分批建仓，了解准确的盈亏平衡点对于仓位管理都至关重要。",
    hi: "स्टॉक औसत कैलकुलेटर एक पेशेवर उपकरण है जिसे निवेशकों को उनके भारित औसत शेयर मूल्य को सटीक रूप से निर्धारित करने में मदद करने के लिए डिज़ाइन किया गया है। चाहे आप किसी स्थिति पर औसत कम कर रहे हों या स्केल कर रहे हों, प्रभावी पोर्टफोलियो प्रबंधन के लिए अपने सटीक ब्रेक-ईवन पॉइंट को जानना महत्वपूर्ण है।",
  },
  "seo.intro.p2": {
    en: "When you purchase shares of the same stock at different prices, understanding your 'true' cost basis can be complex. This tool simplifies the math by factoring in both price and quantity for every trade, providing a precise weighted average.",
    zh: "当您以不同的价格多次买入同一只股票时，计算“真实”的持仓成本可能会变得复杂。本工具通过综合计算每笔交易的价格和数量，为您提供毫无偏差的加权平均数据。",
    hi: "जब आप एक ही स्टॉक के शेयर अलग-अलग कीमतों पर खरीदते हैं, तो अपने 'वास्तविक' लागत आधार को समझना जटिल हो सकता है। यह उपकरण प्रत्येक व्यापार के लिए मूल्य और मात्रा दोनों को ध्यान में रखकर गणित को सरल बनाता है, एक सटीक भारित औसत प्रदान करता है।",
  },
  "seo.intro.p3": {
    en: "Beyond basic calculations, our Averaging Down Engine allows you to reverse-engineer your trades. It answers the critical question: 'How many shares do I need to buy at current market prices to bring my average down to a specific target?'",
    zh: "除了基础计算外，我们的“智能补仓引擎”允许您对交易进行反向推演。它能回答一个关键问题：“在当前市价下，我需要再买入多少股，才能将均价降低到我的目标位置？”",
    hi: "बुनियादी गणनाओं से परे, हमारा एवरेजिंग डाउन इंजन आपको अपने ट्रेडों को रिवर्स-इंजीनियर करने की अनुमति देता है। यह महत्वपूर्ण प्रश्न का उत्तर देता है: 'अपने औसत को एक विशिष्ट लक्ष्य तक लाने के लिए मुझे मौजूदा बाजार कीमतों पर कितने शेयर खरीदने की आवश्यकता है?'",
  },
  "seo.intro.p4": {
    en: "Don't let hidden fees erode your profits. This calculator optionally includes trading commissions in your average cost, giving you a crystal-clear view of your net break-even price so you can exit with confidence.",
    zh: "不要让隐形的手续费侵蚀您的利润。本计算器支持将交易佣金计入平均成本，让您清晰地看到净盈亏平衡点，从而自信地制定离场计划。",
    hi: "छिपी हुई फीस को अपने मुनाफे को कम न करने दें। यह कैलकुलेटर वैकल्पिक रूप से आपकी औसत लागत में ट्रेडिंग कमीशन को शामिल करता है, जिससे आपको अपने शुद्ध ब्रेक-ईवन मूल्य का स्पष्ट दृश्य मिलता है ताकि आप आत्मविश्वास के साथ बाहर निकल सकें।",
  },

  "seo.precision.title": {
    en: "Precision Sizing",
    zh: "精准仓位控制",
    hi: "सटीक साइजिंग",
  },
  "seo.precision.text": {
    en: "Weighted entry price is key. Know your exact break-even.",
    zh: "加权买入价格是交易的核心。精准掌握你的盈亏平衡点。",
    hi: "भारित प्रवेश मूल्य महत्वपूर्ण है। अपना सटीक ब्रेक-ईवन जानें।",
  },
  "seo.strategy.title": {
    en: "Averaging Down",
    zh: "科学补仓策略",
    hi: "औसत कम करना",
  },
  "seo.strategy.text": {
    en: "Calculate required capital for target levels without over-leveraging.",
    zh: "计算达成目标位所需的补仓资金，避免过度交易。",
    hi: "अति-उत्तोलन के बिना लक्ष्य स्तरों के लिए आवश्यक पूंजी की गणना करें।",
  },
  "seo.fees.title": {
    en: "Why Fees Matter?",
    zh: "为什么手续费很重要？",
    hi: "शुल्क क्यों मायने रखते हैं?",
  },
  "seo.fees.text": {
    en: "Small slippages erode ROI. We include commissions for accuracy.",
    zh: "微小的滑点会侵蚀收益。我们计算了佣金以确保极致精确。",
    hi: "छोटी गिरावट रिटर्न को कम करती है। हम सटीकता के लिए कमीशन शामिल करते हैं।",
  },

  // FAQ Section
  "faq.title": {
    en: "Frequently Asked Questions",
    zh: "常见问题解答",
    hi: "अक्सर पूछे जाने वाले प्रश्न",
  },
  "faq.q1": {
    en: "How is the stock average price calculated?",
    zh: "股票平均价格是如何计算的？",
    hi: "स्टॉक के औसत मूल्य की गणना कैसे की जाती है?",
  },
  "faq.a1": {
    en: "It uses the weighted average formula: (Price1 * Qty1 + Price2 * Qty2 + ...) / Total Quantity. We also factor in transaction fees to ensure the break-even is exact.",
    zh: "使用加权平均公式：(价格1 * 数量1 + 价格2 * 数量2 + ...) / 总数量。我们还会计入交易手续费，以确保盈亏平衡点完全准确。",
    hi: "यह भारित औसत सूत्र का उपयोग करता है: (कीमत1 * मात्रा1 + कीमत2 * मात्रा2 + ...) / कुल मात्रा। हम यह सुनिश्चित करने के लिए लेनदेन शुल्क को भी शामिल करते हैं कि ब्रेक-ईवन सटीक है।",
  },
  "faq.q2": {
    en: "Does this calculator save my data?",
    zh: "这个计算器会保存我的数据吗？",
    hi: "क्या यह कैलकुलेटर मेरा डेटा सहेजता है?",
  },
  "faq.a2": {
    en: "Yes, all entries are saved locally in your browser. No data is sent to any server, keeping your financial privacy 100% secure.",
    zh: "是的，所有输入都保存在浏览器的本地存储中。没有任何数据会被发送到服务器，确保您的财务隐私 100% 安全。",
    hi: "हाँ, सभी प्रविष्टियाँ आपके ब्राउज़र में स्थानीय रूप से सहेजी जाती हैं। कोई भी डेटा किसी सर्वर पर नहीं भेजा जाता है, जिससे आपकी वित्तीय गोपनीयता 100% सुरक्षित रहती है।",
  },
  "faq.q3": {
    en: 'What is the "Averaging Down" tool?',
    zh: "什么是“补仓/摊薄”功能？",
    hi: '"नीचे का औसत" टूल क्या है?',
  },
  "faq.a3": {
    en: "It calculates exactly how many shares you need to buy at the current market price to lower your average cost to a specific target level.",
    zh: "它会精确计算出在当前市价下你需要买入多少股，才能将持仓均价降低到特定的目标水平。",
    hi: "यह बिल्कुल गणना करता है कि आपको अपनी औसत लागत को एक विशिष्ट लक्ष्य स्तर तक कम करने के लिए वर्तमान बाज़ार मूल्य पर कितने शेयर खरीदने की आवश्यकता है।",
  },

  // Footer
  "footer.precision": {
    en: "Surgical Precision • Open Source • Mobile Ready",
    zh: "极简设计 • 开源透明 • 移动优先",
    hi: "सर्जिकल परिशुद्धता • ओपन सोर्स • मोबाइल तैयार",
  },
  "footer.links": { en: "Quick Links", zh: "快速链接", hi: "त्वरित लिंक" },
  "footer.legal": { en: "Legal", zh: "法律声明", hi: "कानूनी" },
  "footer.privacy": {
    en: "Privacy Policy",
    zh: "隐私政策",
    hi: "गोपनीयता नीति",
  },
  "footer.terms": {
    en: "Terms of Service",
    zh: "服务条款",
    hi: "सेवा की शर्तें",
  },
  "footer.contact": { en: "Contact", zh: "联系我们", hi: "संपर्क" },
  "footer.follow": { en: "Follow Us", zh: "关注我们", hi: "हमें फॉलो करें" },
  "footer.disclaimer": {
    en: "Disclaimer: Calculations are for informational purposes only and do not constitute financial advice. Use at your own risk.",
    zh: "免责声明：计算结果仅供参考，不构成任何财务建议。交易风险自担。",
    hi: "अस्वीकरण: गणना केवल सूचनात्मक उद्देश्यों के लिए है और वित्तीय सलाह नहीं है। अपने जोखिम पर उपयोग करें।",
  },
  "footer.copyright": {
    en: "© ${year} Stock Average Calculator. All rights reserved.",
    zh: "© ${year} Stock Average Calculator. 版权所有。",
    hi: "© ${year} Stock Average Calculator. सभी अधिकार सुरक्षित।",
  },

  // Educational Page 1: How to calculate
  "edu.how-to.title": {
    en: "How to Calculate Average Stock Price",
    zh: "如何计算股票平均价格",
    hi: "स्टॉक औसत मूल्य की गणना कैसे करें",
  },
  "edu.how-to.desc": {
    en: "Learn the formula and steps to manually calculate your weighted average share price.",
    zh: "了解手动计算加权平均股价的公式和步骤。",
    hi: "अपने भारित औसत शेयर मूल्य की मैन्युअल रूप से गणना करने के लिए सूत्र और चरण जानें।",
  },

  // Educational Page 2: After buying more
  "edu.buying-more.title": {
    en: "Average Stock Price After Buying More",
    zh: "加仓后的股票平均价计算",
    hi: "अधिक खरीदने के बाद औसत स्टॉक मूल्य",
  },
  "edu.buying-more.desc": {
    en: "Calculate how new purchases affect your overall position cost.",
    zh: "计算多次买入对你整体仓位成本的影响。",
    hi: "गणना करें कि नई खरीदारी आपकी कुल स्थिति लागत को कैसे प्रभावित करती है।",
  },

  // Educational Page 3: Averaging down
  "edu.averaging-down.title": {
    en: "Stock Averaging Down Calculator Guide",
    zh: "股票补仓摊薄均价计算指南",
    hi: "स्टॉक औसत डाउन कैलकुलेटर गाइड",
  },
  "edu.averaging-down.desc": {
    en: "A strategic guide on using averaging down to manage losing positions.",
    zh: "关于如何利用补仓管理亏损仓位的策略指南。",
    hi: "हारने वाली स्थितियों को प्रबंधित करने के लिए औसत डाउन का उपयोग करने पर एक रणनीतिक मार्गदर्शिका।",
  },

  // Educational Page 4: Loss recovery
  "edu.loss-recovery.title": {
    en: "Calculate Stock Price for Loss Recovery",
    zh: "亏损回本均价计算",
    hi: "नुकसान की भरपाई के लिए स्टॉक मूल्य की गणना करें",
  },
  "edu.loss-recovery.desc": {
    en: "Find out exactly what price you need to break even after a market dip.",
    zh: "计算市场下跌后你需要达到的回本平衡点价格。",
    hi: "पता करें कि मार्केट में गिरावट के बाद आपको ब्रेक ईवन के लिए किस कीमत की आवश्यकता है।",
  },

  // Educational Page 5: Cost vs Price
  "edu.cost-vs-price.title": {
    en: "Average Cost vs Average Price",
    zh: "平均成本与平均价格的区别",
    hi: "औसत लागत बनाम औसत मूल्य",
  },
  "edu.cost-vs-price.desc": {
    en: "Understanding the key differences in investment terminology.",
    zh: "深度理解投资术语中的关键区别。",
    hi: "निवेश शब्दावली में मुख्य अंतर को समझना।",
  },
  "edu.guides.subtitle": {
    en: "Practical guides on position management and stock math.",
    zh: "关于仓位管理和股票数学的实用指南。",
    hi: "स्थिति प्रबंधन और स्टॉक गणित पर व्यावहारिक मार्गदर्शिकाएँ।",
  },

  // Generic Article Sections
  "edu.section.formula": { en: "The Formula", zh: "计算公式", hi: "सूत्र" },
  "edu.section.example": {
    en: "Practical Example",
    zh: "实际案例",
    hi: "व्यावहारिक उदाहरण",
  },
  "edu.section.tutorial": {
    en: "How to use the tool",
    zh: "如何使用此工具",
    hi: "टूल का उपयोग कैसे करें",
  },
  "edu.section.strategy": {
    en: "Trading Strategy",
    zh: "交易策略",
    hi: "ट्रेडिंग रणनीति",
  },

  // Page 1 specific
  "edu.how-to.formula_text": {
    en: "Weighted average = (Price 1 * Qty 1 + Price 2 * Qty 2) / Total Qty",
    zh: "加权平均 = (单价 1 * 数量 1 + 单价 2 * 数量 2) / 总数量",
    hi: "भारित औसत = (कीमत 1 * मात्रा 1 + कीमत 2 * मात्रा 2) / कुल मात्रा",
  },

  // Page 2 specific
  "edu.buying-more.intro": {
    en: "Buying more shares at a lower price reduces your overall cost basis.",
    zh: "低价加仓可以有效摊薄你的整体成本。",
    hi: "कम कीमत पर अधिक शेयर खरीदने से आपकी कुल लागत कम हो जाती है।",
  },

  // Page 3 specific
  "edu.averaging-down.risk": {
    en: "Averaging down can increase risk if the stock continues to drop.",
    zh: "如果股票继续下跌，补仓会增加由于仓位过重带来的风险。",
    hi: "यदि स्टॉक गिरना जारी रहता है तो औसत कम करने से जोखिम बढ़ सकता है।",
  },

  // Page 4 specific
  "edu.loss-recovery.target": {
    en: "Knowing your break-even point helps you plan exits.",
    zh: "了解你的盈亏平衡点有助于规划离场时机。",
    hi: "अपना ब्रेक-ईवन पॉइंट जानने से आपको बाहर निकलने की योजना बनाने में मदद मिलती है।",
  },

  // Page 5 specific
  "edu.cost-vs-price.summary": {
    en: "Average cost includes fees, average price does not.",
    zh: "平均成本包含手续费，而平均价格通常仅指成交均价。",
    hi: "औसत लागत में शुल्क शामिल है, औसत मूल्य में नहीं।",
  },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang || "en");

  // Keep internal state in sync if initialLang changes (e.g. client-side nav)
  useEffect(() => {
    if (initialLang) {
      setLangState(initialLang);
    }
  }, [initialLang]);

  const setLang = (newLang: Language) => {
    // With URL routing, we should navigate instead of setting state directly
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const currentLang = currentPath.split("/")[1]; // e.g. 'en', 'zh'

      // Remove current locale from path if present, to get raw path
      let rawPath = currentPath;
      if (["zh", "hi"].includes(currentLang)) {
        // If it starts with /zh or /hi, strip it. /zh/foo -> /foo. /zh -> ""
        rawPath = currentPath.substring(currentLang.length + 1);
      }
      // If currentLang is none of those (e.g. "about" or empty), rawPath is just currentPath.
      // But wait, if path is just "/", currentLang is "". rawPath is "/".

      // Ensure rawPath starts with /
      if (!rawPath.startsWith("/")) rawPath = "/" + rawPath;

      // Construct new path
      let newPath;
      if (newLang === "en") {
        // If switching to English, we want NO prefix.
        newPath = rawPath;
      } else {
        // If switching to other, we want /lang/rawPath
        newPath = `/${newLang}${rawPath === "/" ? "" : rawPath}`;
      }

      // Final cleanup
      if (newPath === "") newPath = "/";
      // Normalize double slashes just in case
      newPath = newPath.replace("//", "/");

      window.location.href = newPath;
    }
  };

  const t = (key: string, variables?: Record<string, string>) => {
    const text = translations[key]?.[lang] || key;
    if (variables) {
      let result = text;
      Object.entries(variables).forEach(([name, value]) => {
        result = result.replace(`\${${name}}`, value);
      });
      return result;
    }
    return text;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
