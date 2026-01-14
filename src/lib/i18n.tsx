"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "zh" | "hi";

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Share
  "share.title": {
    en: "Stock Average Calculator: Price After Buying More",
    zh: "股票成本均价计算器：快速计算补仓后的成本",
    hi: "स्टॉक औसत कैलकुलेटर: अधिक खरीदने के बाद कीमत",
  },
  "share.text": {
    en: "Free tool to calculate average stock price after buying more shares.",
    zh: "免费工具，用于计算加仓后的股票平均价格。",
    hi: "अधिक शेयर खरीदने के बाद औसत स्टॉक मूल्य की गणना करने के लिए मुफ़्त उपकरण।",
  },

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

  // Page 1 specific - How to Calculate
  "edu.how-to.formula_text": {
    en: "Weighted average = (Price 1 * Qty 1 + Price 2 * Qty 2) / Total Qty",
    zh: "加权平均 = (单价 1 * 数量 1 + 单价 2 * 数量 2) / 总数量",
    hi: "भारित औसत = (कीमत 1 * मात्रा 1 + कीमत 2 * मात्रा 2) / कुल मात्रा",
  },
  "edu.how-to.why-weighted": {
    en: "Why Weighted Average?",
    zh: "为什么使用加权平均？",
    hi: "भारित औसत क्यों?",
  },
  "edu.how-to.why-weighted-desc": {
    en: "A simple average treats all purchases equally, but a weighted average accounts for the quantity of shares bought at each price. This gives you an accurate cost basis for tax reporting and profit calculation.",
    zh: "简单平均将所有购买视为相等，但加权平均考虑了每个价格购买的股票数量。这为您提供了准确的成本基础，用于税务申报和利润计算。",
    hi: "एक साधारण औसत सभी खरीदारी को समान रूप से मानता है, लेकिन एक भारित औसत प्रत्येक कीमत पर खरीदे गए शेयरों की मात्रा को ध्यान में रखता है। यह आपको कर रिपोर्टिंग और लाभ गणना के लिए एक सटीक लागत आधार देता है।",
  },
  "edu.how-to.example-buy1": {
    en: "Buy #1: 10 shares @ $100",
    zh: "第1次买入：10股 @ $100",
    hi: "खरीद #1: 10 शेयर @ $100",
  },
  "edu.how-to.example-buy2": {
    en: "Buy #2: 20 shares @ $70",
    zh: "第2次买入：20股 @ $70",
    hi: "खरीद #2: 20 शेयर @ $70",
  },
  "edu.how-to.manual-calc": {
    en: "Manual Calculation Steps",
    zh: "手动计算步骤",
    hi: "मैन्युअल गणना चरण",
  },
  "edu.how-to.step1": {
    en: "Multiply Each Price by Quantity",
    zh: "将每个价格乘以数量",
    hi: "प्रत्येक मूल्य को मात्रा से गुणा करें",
  },
  "edu.how-to.step1-desc": {
    en: "For each purchase, calculate: Price × Quantity = Total Cost",
    zh: "对于每次购买，计算：价格 × 数量 = 总成本",
    hi: "प्रत्येक खरीद के लिए, गणना करें: मूल्य × मात्रा = कुल लागत",
  },
  "edu.how-to.step2": {
    en: "Sum All Total Costs",
    zh: "汇总所有总成本",
    hi: "सभी कुल लागतों को जोड़ें",
  },
  "edu.how-to.step2-desc": {
    en: "Add up all the total costs from step 1",
    zh: "将步骤1中的所有总成本相加",
    hi: "चरण 1 से सभी कुल लागतों को जोड़ें",
  },
  "edu.how-to.step3": {
    en: "Sum All Quantities",
    zh: "汇总所有数量",
    hi: "सभी मात्राओं को जोड़ें",
  },
  "edu.how-to.step3-desc": {
    en: "Add up the total number of shares purchased",
    zh: "将购买的股票总数相加",
    hi: "खरीदे गए शेयरों की कुल संख्या जोड़ें",
  },
  "edu.how-to.step4": {
    en: "Divide Total Cost by Total Shares",
    zh: "总成本除以总股数",
    hi: "कुल लागत को कुल शेयरों से विभाजित करें",
  },
  "edu.how-to.step4-desc": {
    en: "This gives you the weighted average cost per share",
    zh: "这给出了每股的加权平均成本",
    hi: "यह आपको प्रति शेयर भारित औसत लागत देता है",
  },
  "edu.how-to.common-mistakes": {
    en: "Common Mistakes to Avoid",
    zh: "要避免的常见错误",
    hi: "बचने के लिए सामान्य गलतियाँ",
  },
  "edu.how-to.mistake1": {
    en: "Using simple average instead of weighted average",
    zh: "使用简单平均而不是加权平均",
    hi: "भारित औसत के बजाय साधारण औसत का उपयोग करना",
  },
  "edu.how-to.mistake2": {
    en: "Forgetting to include commission fees in total cost",
    zh: "忘记在总成本中包括佣金费用",
    hi: "कुल लागत में कमीशन शुल्क शामिल करना भूल जाना",
  },
  "edu.how-to.mistake3": {
    en: "Not updating average after each new purchase",
    zh: "每次新购买后不更新平均值",
    hi: "प्रत्येक नई खरीद के बाद औसत अपडेट न करना",
  },
  "edu.how-to.faq1-q": {
    en: "Can I use Excel to calculate stock average?",
    zh: "我可以使用Excel计算股票平均值吗？",
    hi: "क्या मैं स्टॉक औसत की गणना के लिए Excel का उपयोग कर सकता हूँ?",
  },
  "edu.how-to.faq1-a": {
    en: "Yes! Use the formula: =SUMPRODUCT(prices, quantities) / SUM(quantities). However, our calculator is faster and handles commissions automatically.",
    zh: "是的！使用公式：=SUMPRODUCT(价格, 数量) / SUM(数量)。但是，我们的计算器更快，并自动处理佣金。",
    hi: "हाँ! सूत्र का उपयोग करें: =SUMPRODUCT(मूल्य, मात्रा) / SUM(मात्रा)। हालांकि, हमारा कैलकुलेटर तेज़ है और स्वचालित रूप से कमीशन को संभालता है।",
  },
  "edu.how-to.faq2-q": {
    en: "Do I need to recalculate every time I buy or sell?",
    zh: "每次买入或卖出时都需要重新计算吗？",
    hi: "क्या मुझे हर बार खरीदने या बेचने पर पुनर्गणना करने की आवश्यकता है?",
  },
  "edu.how-to.faq2-a": {
    en: "Yes, your average cost changes with each transaction. When you buy more, recalculate using all purchases. When you sell, your remaining shares keep the same average cost (though total investment decreases).",
    zh: "是的，您的平均成本随每笔交易而变化。当您购买更多时，使用所有购买重新计算。当您出售时，您剩余的股票保持相同的平均成本（尽管总投资减少）。",
    hi: "हाँ, आपकी औसत लागत प्रत्येक लेन-देन के साथ बदलती है। जब आप अधिक खरीदते हैं, तो सभी खरीद का उपयोग करके पुनर्गणना करें। जब आप बेचते हैं, तो आपके शेष शेयर समान औसत लागत बनाए रखते हैं (हालांकि कुल निवेश कम हो जाता है)।",
  },

  // Page 4 specific - Loss Recovery
  "edu.loss-recovery.what-is": {
    en: "What is Loss Recovery?",
    zh: "什么是亏损回本？",
    hi: "नुकसान की भरपाई क्या है?",
  },
  "edu.loss-recovery.what-is-desc": {
    en: "Loss recovery is the process of determining the exact stock price needed for your position to break even after a decline. It answers: 'At what price will my portfolio value equal my total investment?'",
    zh: "亏损回本是确定下跌后您的持仓达到盈亏平衡所需的确切股价的过程。它回答：“我的投资组合价值等于我的总投资时的价格是多少？”",
    hi: "नुकसान की भरपाई गिरावट के बाद आपकी स्थिति को ब्रेक ईवन करने के लिए आवश्यक सटीक स्टॉक मूल्य निर्धारित करने की प्रक्रिया है। यह जवाब देता है: 'किस कीमत पर मेरे पोर्टफोलियो का मूल्य मेरे कुल निवेश के बराबर होगा?'",
  },
  "edu.loss-recovery.break-even": {
    en: "Understanding Break-Even Price",
    zh: "理解盈亏平衡价格",
    hi: "ब्रेक-ईवन मूल्य को समझना",
  },
  "edu.loss-recovery.break-even-desc": {
    en: "Your break-even price is simply your average cost per share (including fees). If you bought 100 shares with a total cost of $5,000 (including commissions), your break-even is $50 per share.",
    zh: "您的盈亏平衡价格就是您的每股平均成本（包括费用）。如果您以$5,000的总成本（包括佣金）购买了100股，您的盈亏平衡点是每股$50。",
    hi: "आपका ब्रेक-ईवन मूल्य बस आपकी प्रति शेयर औसत लागत है (शुल्क सहित)। यदि आपने $5,000 की कुल लागत (कमीशन सहित) पर 100 शेयर खरीदे हैं, तो आपका ब्रेक-ईवन प्रति शेयर $50 है।",
  },
  "edu.loss-recovery.strategies": {
    en: "Recovery Strategies",
    zh: "回本策略",
    hi: "पुनर्प्राप्ति रणनीतियाँ",
  },
  "edu.loss-recovery.strategy1-title": {
    en: "Wait for Price Recovery",
    zh: "等待价格回升",
    hi: "मूल्य सुधार की प्रतीक्षा करें",
  },
  "edu.loss-recovery.strategy1-desc": {
    en: "Hold and wait for the stock to return to your break-even price",
    zh: "持有并等待股票回到您的盈亏平衡价格",
    hi: "अपने ब्रेक-ईवन मूल्य पर वापस आने के लिए स्टॉक का इंतजार करें",
  },
  "edu.loss-recovery.strategy2-title": {
    en: "Average Down",
    zh: "补仓摊薄",
    hi: "एवरेज डाउन",
  },
  "edu.loss-recovery.strategy2-desc": {
    en: "Buy more shares at a lower price to reduce your break-even point",
    zh: "以较低价格购买更多股票以降低您的盈亏平衡点",
    hi: "अपने ब्रेक-ईवन बिंदु को कम करने के लिए कम कीमत पर अधिक शेयर खरीदें",
  },
  "edu.loss-recovery.strategy3-title": {
    en: "Cut Losses",
    zh: "止损离场",
    hi: "नुकसान काटें",
  },
  "edu.loss-recovery.strategy3-desc": {
    en: "Exit the position and redeploy capital to better opportunities",
    zh: "退出持仓并将资金重新部署到更好的机会",
    hi: "स्थिति से बाहर निकलें और बेहतर अवसरों के लिए पूंजी पुनः तैनात करें",
  },
  "edu.loss-recovery.math-behind": {
    en: "The Math Behind Recovery",
    zh: "回本背后的数学",
    hi: "पुनर्प्राप्ति के पीछे का गणित",
  },
  "edu.loss-recovery.math-desc": {
    en: "If a stock drops 50%, it needs to gain 100% to recover. This asymmetry is why averaging down can be effective—it lowers the required recovery percentage.",
    zh: "如果股票下跌50％，它需要上涨100％才能恢复。这种不对称性就是为什么补仓摊薄可以有效——它降低了所需的恢复百分比。",
    hi: "यदि कोई स्टॉक 50% गिरता है, तो उसे ठीक होने के लिए 100% बढ़ने की आवश्यकता होती है। यह असमानता है कि एवरेजिंग डाउन प्रभावी क्यों हो सकता है—यह आवश्यक पुनर्प्राप्ति प्रतिशत को कम करता है।",
  },
  "edu.loss-recovery.faq1-q": {
    en: "How much does a stock need to rise to recover a 30% loss?",
    zh: "股票需要上涨多少才能弥补30％的损失？",
    hi: "30% नुकसान की भरपाई के लिए स्टॉक को कितना बढ़ना होगा?",
  },
  "edu.loss-recovery.faq1-a": {
    en: "It needs to rise approximately 42.9%. If you bought at $100 and it dropped to $70 (-30%), it needs to reach $100 again, which is a 42.9% gain from $70. Use our calculator's averaging down feature to see how buying more shares can reduce this requirement.",
    zh: "它需要上涨约42.9％。如果您以$100购买，它下跌到$70（-30％），它需要再次达到$100，这是从$70上涨42.9％。使用我们计算器的补仓功能查看购买更多股票如何降低此要求。",
    hi: "इसे लगभग 42.9% बढ़ना होगा। यदि आपने $100 पर खरीदा और यह $70 (-30%) तक गिर गया, तो इसे फिर से $100 तक पहुंचने की आवश्यकता है, जो $70 से 42.9% की वृद्धि है। देखने के लिए हमारे कैलकुलेटर की एवरेजिंग डाउन सुविधा का उपयोग करें कि अधिक शेयर खरीदना इस आवश्यकता को कैसे कम कर सकता है।",
  },
  "edu.loss-recovery.faq2-q": {
    en: "Should I always try to recover losses?",
    zh: "我应该总是试图挽回损失吗？",
    hi: "क्या मुझे हमेशा नुकसान की भरपाई करने की कोशिश करनी चाहिए?",
  },
  "edu.loss-recovery.faq2-a": {
    en: "Not necessarily. Sometimes cutting losses early and moving on is the better strategy. Only hold or average down if you still believe in the investment thesis. Don't throw good money after bad just to 'get back to even.'",
    zh: "不一定。有时提前止损并继续前进是更好的策略。只有在您仍然相信投资论点时才持有或补仓。不要仅仅为了“回到盈亏平衡“而将好钱扔在坏钱之后。",
    hi: "जरूरी नहीं। कभी-कभी नुकसान को जल्दी काटना और आगे बढ़ना बेहतर रणनीति है। केवल तभी होल्ड करें या एवरेज डाउन करें जब आप अभी भी निवेश थीसिस में विश्वास करते हैं। सिर्फ 'वापस समान होने' के लिए बुरे पैसे के बाद अच्छा पैसा न फेंकें।",
  },

  // Page 2 specific
  "edu.buying-more.intro": {
    en: "Buying more shares at a lower price reduces your overall cost basis.",
    zh: "低价加仓可以有效摊薄你的整体成本。",
    hi: "कम कीमत पर अधिक शेयर खरीदने से आपकी कुल लागत कम हो जाती है।",
  },
  "edu.buying-more.impact-title": {
    en: "How Additional Purchases Impact Your Average",
    zh: "额外购买如何影响您的平均成本",
    hi: "अतिरिक्त खरीद आपके औसत को कैसे प्रभावित करती है",
  },
  "edu.buying-more.impact-desc": {
    en: "Every time you buy more shares, your average cost per share changes based on the weighted average of all your purchases. The impact depends on both the new purchase price and quantity relative to your existing position.",
    zh: "每次您购买更多股票时，您的每股平均成本都会根据所有购买的加权平均值而变化。影响取决于相对于您现有持仓的新购买价格和数量。",
    hi: "हर बार जब आप अधिक शेयर खरीदते हैं, तो आपकी प्रति शेयर औसत लागत आपकी सभी खरीदारी के भारित औसत के आधार पर बदलती है। प्रभाव आपकी मौजूदा स्थिति के सापेक्ष नई खरीद मूल्य और मात्रा दोनों पर निर्भर करता है।",
  },
  "edu.buying-more.scale-in-title": {
    en: "Scaling In (Buying Higher)",
    zh: "逐步建仓（高价买入）",
    hi: "स्केलिंग इन (अधिक खरीदना)",
  },
  "edu.buying-more.scale-in-desc": {
    en: "Adding to a winning position as the price rises. This increases your average cost but can maximize gains if the trend continues.",
    zh: "随着价格上涨增加获胜仓位。这会增加您的平均成本，但如果趋势持续，可以最大化收益。",
    hi: "कीमत बढ़ने पर जीतने वाली स्थिति में जोड़ना। यह आपकी औसत लागत को बढ़ाता है लेकिन यदि प्रवृत्ति जारी रहती है तो लाभ को अधिकतम कर सकता है।",
  },
  "edu.buying-more.scale-down-title": {
    en: "Buying the Dip (Averaging Down)",
    zh: "逢低买入（摊薄成本）",
    hi: "गिरावट में खरीदना (औसत कम करना)",
  },
  "edu.buying-more.scale-down-desc": {
    en: "Adding shares when price drops below your current average. This lowers your break-even point but increases position size and risk.",
    zh: "当价格跌破您当前平均值时增加股票。这降低了您的盈亏平衡点，但增加了仓位规模和风险。",
    hi: "जब कीमत आपके वर्तमान औसत से नीचे गिरती है तो शेयर जोड़ना। यह आपके ब्रेक-ईवन बिंदु को कम करता है लेकिन स्थिति का आकार और जोखिम बढ़ाता है।",
  },
  "edu.buying-more.calculation-steps": {
    en: "Step-by-Step Calculation",
    zh: "逐步计算",
    hi: "चरण-दर-चरण गणना",
  },
  "edu.buying-more.step1-title": {
    en: "Calculate Current Total Cost",
    zh: "计算当前总成本",
    hi: "वर्तमान कुल लागत की गणना करें",
  },
  "edu.buying-more.step1-desc": {
    en: "Multiply your current average price by current shares held",
    zh: "将您当前的平均价格乘以当前持有的股票",
    hi: "अपनी वर्तमान औसत कीमत को वर्तमान शेयरों से गुणा करें",
  },
  "edu.buying-more.step2-title": {
    en: "Add New Purchase Cost",
    zh: "添加新购买成本",
    hi: "नई खरीद लागत जोड़ें",
  },
  "edu.buying-more.step2-desc": {
    en: "Multiply new purchase price by new quantity",
    zh: "新购买价格乘以新数量",
    hi: "नई खरीद मूल्य को नई मात्रा से गुणा करें",
  },
  "edu.buying-more.step3-title": {
    en: "Divide by Total Shares",
    zh: "除以总股数",
    hi: "कुल शेयरों से विभाजित करें",
  },
  "edu.buying-more.step3-desc": {
    en: "Total cost divided by total shares = new average",
    zh: "总成本除以总股数 = 新平均值",
    hi: "कुल लागत कुल शेयरों से विभाजित = नया औसत",
  },
  "edu.buying-more.faq1-q": {
    en: "Does buying 1 share affect my average as much as buying 100?",
    zh: "购买1股对我的平均价格的影响与购买100股一样大吗？",
    hi: "क्या 1 शेयर खरीदना मेरे औसत को 100 खरीदने जितना प्रभावित करता है?",
  },
  "edu.buying-more.faq1-a": {
    en: "No. The impact is proportional to the quantity. Buying 100 shares at a different price will shift your average much more than buying just 1 share. This is why it's called a 'weighted' average—larger quantities have more weight.",
    zh: "不。影响与数量成正比。以不同价格购买100股将比仅购买1股更大程度地改变您的平均值。这就是为什么它被称为”加权“平均值——数量越大，权重越大。",
    hi: "नहीं। प्रभाव मात्रा के समानुपाती होता है। एक अलग कीमत पर 100 शेयर खरीदना केवल 1 शेयर खरीदने की तुलना में आपके औसत को बहुत अधिक स्थानांतरित करेगा। यही कारण है कि इसे 'भारित' औसत कहा जाता है—बड़ी मात्रा का अधिक वजन होता है।",
  },
  "edu.buying-more.faq2-q": {
    en: "Should I keep buying if I'm already profitable?",
    zh: "如果我已经盈利，我应该继续购买吗？",
    hi: "यदि मैं पहले से ही लाभदायक हूं तो क्या मुझे खरीदते रहना चाहिए?",
  },
  "edu.buying-more.faq2-a": {
    en: "It depends on your conviction and position sizing rules. Many traders 'scale in' to winning positions to maximize gains, but this also increases your average cost and requires a higher exit price for the same profit margin. Always consider your total portfolio allocation and risk tolerance.",
    zh: "这取决于您的信念和仓位管理规则。许多交易者会”逐步增仓“以最大化收益，但这也会增加您的平均成本，并需要更高的退出价格才能获得相同的利润率。始终考虑您的总投资组合配置和风险承受能力。",
    hi: "यह आपके विश्वास और स्थिति आकार नियमों पर निर्भर करता है। कई व्यापारी लाभ को अधिकतम करने के लिए जीतने वाली स्थितियों में 'स्केल इन' करते हैं, लेकिन यह आपकी औसत लागत भी बढ़ाता है और समान लाभ मार्जिन के लिए एक उच्च निकास मूल्य की आवश्यकता होती है। हमेशा अपने कुल पोर्टफोलियो आवंटन और जोखिम सहिष्णुता पर विचार करें।",
  },
  "edu.buying-more.example-position": {
    en: "100 shares @ $50.00",
    zh: "100股 @ $50.00",
    hi: "100 शेयर @ $50.00",
  },
  "edu.buying-more.example-purchase": {
    en: "50 shares @ $40.00",
    zh: "50股 @ $40.00",
    hi: "50 शेयर @ $40.00",
  },

  // Page 3 specific
  "edu.averaging-down.risk": {
    en: "Averaging down can increase risk if the stock continues to drop.",
    zh: "如果股票继续下跌，补仓会增加由于仓位过重带来的风险。",
    hi: "यदि स्टॉक गिरना जारी रहता है तो औसत कम करने से जोखिम बढ़ सकता है।",
  },
  "edu.averaging-down.what-is": {
    en: "What is Averaging Down?",
    zh: "什么是补仓摊薄？",
    hi: "एवरेजिंग डाउन क्या है?",
  },
  "edu.averaging-down.what-is-desc": {
    en: "Averaging down is an investment strategy where you purchase additional shares of a stock you already own at a lower price than your initial purchase. This lowers your average cost per share, reducing the price point needed to break even or profit.",
    zh: "补仓摊薄是一种投资策略，您以低于初始购买价格的价格购买已拥有的股票的额外股份。这降低了您的每股平均成本，减少了盈亏平衡或盈利所需的价格点。",
    hi: "एवरेजिंग डाउन एक निवेश रणनीति है जहां आप पहले से ही अपने पास मौजूद स्टॉक के अतिरिक्त शेयरों को अपनी प्रारंभिक खरीद से कम कीमत पर खरीदते हैं। यह आपकी प्रति शेयर औसत लागत को कम करता है, ब्रेक ईवन या लाभ के लिए आवश्यक मूल्य बिंदु को कम करता है।",
  },
  "edu.averaging-down.when-use": {
    en: "When to Use This Strategy",
    zh: "何时使用此策略",
    hi: "इस रणनीति का उपयोग कब करें",
  },
  "edu.averaging-down.good-scenario": {
    en: "Good Scenarios",
    zh: "适合的场景",
    hi: "अच्छे परिदृश्य",
  },
  "edu.averaging-down.good1": {
    en: "Strong fundamentals with temporary price dip due to market sentiment",
    zh: "基本面强劲但因市场情绪导致暂时性价格下跌",
    hi: "बाजार की भावना के कारण अस्थायी मूल्य गिरावट के साथ मजबूत बुनियादी बातें",
  },
  "edu.averaging-down.good2": {
    en: "High conviction in long-term prospects despite short-term volatility",
    zh: "尽管短期波动，但对长期前景有高度信心",
    hi: "अल्पकालिक अस्थिरता के बावजूद दीर्घकालिक संभावनाओं में उच्च विश्वास",
  },
  "edu.averaging-down.good3": {
    en: "Dollar-cost averaging as part of a systematic investment plan",
    zh: "作为系统投资计划的一部分进行定投",
    hi: "व्यवस्थित निवेश योजना के भाग के रूप में डॉलर-लागत औसत",
  },
  "edu.averaging-down.bad-scenario": {
    en: "Risky Scenarios",
    zh: "风险场景",
    hi: "जोखिम भरे परिदृश्य",
  },
  "edu.averaging-down.bad1": {
    en: "Deteriorating company fundamentals or broken business model",
    zh: "公司基本面恶化或商业模式破裂",
    hi: "कंपनी की बुनियादी बातें खराब होना या टूटा हुआ व्यवसाय मॉडल",
  },
  "edu.averaging-down.bad2": {
    en: "Catching a falling knife without a clear support level",
    zh: "在没有明确支撑位的情况下抄底",
    hi: "स्पष्ट समर्थन स्तर के बिना गिरते चाकू को पकड़ना",
  },
  "edu.averaging-down.bad3": {
    en: "Using borrowed money or funds needed for essentials",
    zh: "使用借款或必需资金",
    hi: "उधार लिए गए पैसे या आवश्यक वस्तुओं के लिए आवश्यक धन का उपयोग",
  },
  "edu.averaging-down.step-by-step": {
    en: "How to Calculate Averaging Down",
    zh: "如何计算补仓",
    hi: "एवरेजिंग डाउन की गणना कैसे करें",
  },
  "edu.averaging-down.step1": {
    en: "Determine Your Current Position",
    zh: "确定当前持仓",
    hi: "अपनी वर्तमान स्थिति निर्धारित करें",
  },
  "edu.averaging-down.step1-desc": {
    en: "Calculate your current average cost and total shares held",
    zh: "计算您当前的平均成本和持有的总股数",
    hi: "अपनी वर्तमान औसत लागत और रखे गए कुल शेयरों की गणना करें",
  },
  "edu.averaging-down.step2": {
    en: "Set Your Target Average",
    zh: "设置目标均价",
    hi: "अपना लक्ष्य औसत निर्धारित करें",
  },
  "edu.averaging-down.step2-desc": {
    en: "Decide what average price you want to achieve",
    zh: "决定您想要达到的平均价格",
    hi: "तय करें कि आप किस औसत मूल्य को प्राप्त करना चाहते हैं",
  },
  "edu.averaging-down.step3": {
    en: "Use Our Calculator",
    zh: "使用我们的计算器",
    hi: "हमारे कैलकुलेटर का उपयोग करें",
  },
  "edu.averaging-down.step3-desc": {
    en: "Input current market price to find required shares and capital",
    zh: "输入当前市场价格以找到所需的股数和资金",
    hi: "आवश्यक शेयरों और पूंजी का पता लगाने के लिए वर्तमान बाजार मूल्य इनपुट करें",
  },
  "edu.averaging-down.example-scenario": {
    en: "Practical Example",
    zh: "实际案例",
    hi: "व्यावहारिक उदाहरण",
  },
  "edu.averaging-down.example-initial": {
    en: "Initial Position: 100 shares @ $100 = $10,000",
    zh: "初始持仓：100股 @ $100 = $10,000",
    hi: "प्रारंभिक स्थिति: 100 शेयर @ $100 = $10,000",
  },
  "edu.averaging-down.example-drop": {
    en: "Stock drops to $70 (30% loss)",
    zh: "股价跌至$70（30%亏损）",
    hi: "स्टॉक $70 तक गिरता है (30% नुकसान)",
  },
  "edu.averaging-down.example-target": {
    en: "Target Average: $85 per share",
    zh: "目标均价：每股$85",
    hi: "लक्ष्य औसत: प्रति शेयर $85",
  },
  "edu.averaging-down.example-calc": {
    en: "Required: Buy 107 more shares @ $70 = $7,490",
    zh: "需要：再买入107股 @ $70 = $7,490",
    hi: "आवश्यक: 107 और शेयर @ $70 = $7,490 खरीदें",
  },
  "edu.averaging-down.example-result": {
    en: "New Average: ($10,000 + $7,490) / 207 = $84.49",
    zh: "新均价：($10,000 + $7,490) / 207 = $84.49",
    hi: "नया औसत: ($10,000 + $7,490) / 207 = $84.49",
  },
  "edu.averaging-down.pros-title": {
    en: "Benefits of Averaging Down",
    zh: "补仓的好处",
    hi: "एवरेजिंग डाउन के लाभ",
  },
  "edu.averaging-down.pro1": {
    en: "Lower break-even point - requires less price recovery",
    zh: "降低盈亏平衡点 - 需要更少的价格恢复",
    hi: "कम ब्रेक-ईवन पॉइंट - कम मूल्य वसूली की आवश्यकता",
  },
  "edu.averaging-down.pro2": {
    en: "Increase position size in quality assets at discount",
    zh: "以折扣价增加优质资产的持仓规模",
    hi: "छूट पर गुणवत्ता संपत्तियों में स्थिति का आकार बढ़ाएं",
  },
  "edu.averaging-down.pro3": {
    en: "Psychological relief from reducing paper losses",
    zh: "通过减少账面损失获得心理安慰",
    hi: "कागजी नुकसान को कम करने से मनोवैज्ञानिक राहत",
  },
  "edu.averaging-down.risks-title": {
    en: "Risks to Consider",
    zh: "需要考虑的风险",
    hi: "विचार करने के लिए जोखिम",
  },
  "edu.averaging-down.risk1": {
    en: "Throwing good money after bad if fundamentals are weak",
    zh: "如果基本面疲弱，可能会越亏越多",
    hi: "यदि बुनियादी बातें कमजोर हैं तो बुरे के बाद अच्छा पैसा फेंकना",
  },
  "edu.averaging-down.risk2": {
    en: "Concentration risk - too much capital in one position",
    zh: "集中风险 - 一个仓位投入过多资金",
    hi: "एकाग्रता जोखिम - एक स्थिति में बहुत अधिक पूंजी",
  },
  "edu.averaging-down.risk3": {
    en: "Opportunity cost of not deploying capital elsewhere",
    zh: "未在其他地方部署资金的机会成本",
    hi: "पूंजी को कहीं और तैनात न करने की अवसर लागत",
  },
  "edu.averaging-down.faq1-q": {
    en: "How many times should I average down?",
    zh: "我应该补仓多少次？",
    hi: "मुझे कितनी बार एवरेज डाउन करना चाहिए?",
  },
  "edu.averaging-down.faq1-a": {
    en: "There's no fixed rule, but many professionals limit themselves to 2-3 averaging down events per position. Set a maximum loss threshold and stick to it. If fundamentals change, it's often better to cut losses than continue averaging down.",
    zh: "没有固定规则，但许多专业人士限制自己每个持仓补仓2-3次。设定最大损失阈值并坚持。如果基本面发生变化，通常最好止损而不是继续补仓。",
    hi: "कोई निश्चित नियम नहीं है, लेकिन कई पेशेवर खुद को प्रति स्थिति 2-3 एवरेजिंग डाउन घटनाओं तक सीमित रखते हैं। एक अधिकतम हानि सीमा निर्धारित करें और उस पर टिके रहें। यदि बुनियादी बातें बदलती हैं, तो एवरेजिंग डाउन जारी रखने की तुलना में नुकसान को कम करना बेहतर है।",
  },
  "edu.averaging-down.faq2-q": {
    en: "Should I average down in a bear market?",
    zh: "我应该在熊市中补仓吗？",
    hi: "क्या मुझे बियर मार्केट में एवरेज डाउन करना चाहिए?",
  },
  "edu.averaging-down.faq2-a": {
    en: "Bear markets can offer excellent averaging down opportunities, but be selective. Focus on companies with strong balance sheets, essential products, and proven resilience. Avoid speculative stocks or those with high debt levels during market downturns.",
    zh: "熊市可以提供出色的补仓机会，但要有选择性。专注于资产负债表强劲、产品必需且经过验证具有韧性的公司。在市场低迷时避免投机性股票或高负债水平的股票。",
    hi: "बियर मार्केट बेहतरीन एवरेजिंग डाउन अवसर प्रदान कर सकते हैं, लेकिन चयनात्मक रहें। मजबूत बैलेंस शीट, आवश्यक उत्पादों और सिद्ध लचीलेपन वाली कंपनियों पर ध्यान दें। बाजार में गिरावट के दौरान सट्टा शेयरों या उच्च ऋण स्तर वाले शेयरों से बचें।",
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
  "edu.cost-vs-price.avg-price-title": {
    en: "Average Price",
    zh: "平均价格",
    hi: "औसत मूल्य",
  },
  "edu.cost-vs-price.avg-price-desc": {
    en: "The arithmetic average of the prices you paid for your shares. It's calculated by adding all purchase prices and dividing by the number of transactions.",
    zh: "您为股票支付的价格的算术平均值。它通过将所有购买价格相加并除以交易次数来计算。",
    hi: "आपके शेयरों के लिए भुगतान की गई कीमतों का अंकगणितीय औसत। यह सभी खरीद कीमतों को जोड़कर और लेनदेन की संख्या से विभाजित करके गणना की जाती है।",
  },
  "edu.cost-vs-price.avg-price-formula": {
    en: "(Price1 + Price2 + ...) / Number of Purchases",
    zh: "(价格1 + 价格2 + ...) / 购买次数",
    hi: "(कीमत1 + कीमत2 + ...) / खरीद की संख्या",
  },
  "edu.cost-vs-price.avg-cost-title": {
    en: "Average Cost (Recommended)",
    zh: "平均成本（推荐）",
    hi: "औसत लागत (अनुशंसित)",
  },
  "edu.cost-vs-price.avg-cost-desc": {
    en: "Your total expenditure (including principal and commission fees) divided by the total number of shares. This weighted average reflects your true break-even point.",
    zh: "您的总支出（包括本金和佣金费用）除以股票总数。这个加权平均值反映了您真实的盈亏平衡点。",
    hi: "आपका कुल व्यय (मूलधन और कमीशन शुल्क सहित) कुल शेयरों की संख्या से विभाजित। यह भारित औसत आपके वास्तविक ब्रेक-ईवन बिंदु को दर्शाता है।",
  },
  "edu.cost-vs-price.avg-cost-formula": {
    en: "(Total Principal + Total Fees) / Total Shares",
    zh: "(总本金 + 总手续费) / 总股数",
    hi: "(कुल मूलधन + कुल शुल्क) / कुल शेयर",
  },
  "edu.cost-vs-price.why-matters": {
    en: "Why This Distinction Matters",
    zh: "为什么这个区别很重要",
    hi: "यह भेद क्यों मायने रखता है",
  },
  "edu.cost-vs-price.small-positions": {
    en: "For small retail positions with low commission rates, the difference between average price and average cost may only be a few cents per share. However, the gap widens significantly in these scenarios:",
    zh: "对于佣金率较低的小额散户仓位，平均价格和平均成本之间的差异可能只有每股几分钱。但是，在这些情况下差距会显著扩大：",
    hi: "कम कमीशन दरों वाली छोटी खुदरा स्थितियों के लिए, औसत मूल्य और औसत लागत के बीच का अंतर प्रति शेयर केवल कुछ सेंट हो सकता है। हालांकि, इन परिदृश्यों में अंतर काफी बढ़ जाता है:",
  },
  "edu.cost-vs-price.scenario1": {
    en: "High-frequency traders making dozens of trades per day",
    zh: "每天进行数十次交易的高频交易者",
    hi: "प्रतिदिन दर्जनों ट्रेड करने वाले उच्च-आवृत्ति व्यापारी",
  },
  "edu.cost-vs-price.scenario2": {
    en: "Institutional investors trading large blocks (10,000+ shares)",
    zh: "交易大宗股票（10,000+股）的机构投资者",
    hi: "बड़े ब्लॉक (10,000+ शेयर) का व्यापार करने वाले संस्थागत निवेशक",
  },
  "edu.cost-vs-price.scenario3": {
    en: "Brokers with high per-trade commission fees",
    zh: "每笔交易佣金费用高的经纪商",
    hi: "प्रति व्यापार उच्च कमीशन शुल्क वाले ब्रोकर",
  },
  "edu.cost-vs-price.scenario4": {
    en: "International stock purchases with currency conversion fees",
    zh: "需要货币转换费用的国际股票购买",
    hi: "मुद्रा रूपांतरण शुल्क के साथ अंतर्राष्ट्रीय स्टॉक खरीद",
  },
  "edu.cost-vs-price.why-avg-cost": {
    en: "Why We Calculate Average Cost",
    zh: "为什么我们计算平均成本",
    hi: "हम औसत लागत की गणना क्यों करते हैं",
  },
  "edu.cost-vs-price.tax-accuracy": {
    en: "Tax Reporting Accuracy",
    zh: "税务申报准确性",
    hi: "कर रिपोर्टिंग सटीकता",
  },
  "edu.cost-vs-price.tax-desc": {
    en: "Tax authorities require your cost basis to include all transaction fees. Using average price would understate your actual investment and lead to higher capital gains taxes.",
    zh: "税务机关要求您的成本基础包括所有交易费用。使用平均价格会低估您的实际投资并导致更高的资本利得税。",
    hi: "कर अधिकारियों को आपके लागत आधार में सभी लेनदेन शुल्क शामिल करने की आवश्यकता होती है। औसत मूल्य का उपयोग आपके वास्तविक निवेश को कम करेगा और उच्च पूंजीगत लाभ करों की ओर ले जाएगा।",
  },
  "edu.cost-vs-price.roi-tracking": {
    en: "True ROI Tracking",
    zh: "真实投资回报率跟踪",
    hi: "सच्ची आरओआई ट्रैकिंग",
  },
  "edu.cost-vs-price.roi-desc": {
    en: "If you invested $10,000 including $50 in fees, your break-even isn't when your shares are worth $9,950—it's when they're worth $10,000. Average cost ensures you know your real profit threshold.",
    zh: "如果您投资了$10,000包括$50的费用，您的盈亏平衡点不是当您的股票价值$9,950时——而是当它们价值$10,000时。平均成本确保您知道真实的盈利门槛。",
    hi: "यदि आपने $50 शुल्क सहित $10,000 का निवेश किया है, तो आपका ब्रेक-ईवन तब नहीं है जब आपके शेयर $9,950 के हों—यह तब है जब वे $10,000 के हों। औसत लागत सुनिश्चित करती है कि आप अपनी वास्तविक लाभ सीमा जानते हैं।",
  },
  "edu.cost-vs-price.example-title": {
    en: "Real-World Example",
    zh: "真实案例",
    hi: "वास्तविक दुनिया का उदाहरण",
  },
  "edu.cost-vs-price.example-intro": {
    en: "Let's compare both methods with a concrete example:",
    zh: "让我们用一个具体的例子来比较两种方法：",
    hi: "आइए एक ठोस उदाहरण के साथ दोनों विधियों की तुलना करें:",
  },
  "edu.cost-vs-price.example-trade1": {
    en: "Buy 100 shares @ $50.00 (Commission: $5)",
    zh: "买入100股 @ $50.00 (佣金：$5)",
    hi: "100 शेयर @ $50.00 खरीदें (कमीशन: $5)",
  },
  "edu.cost-vs-price.example-trade2": {
    en: "Buy 200 shares @ $45.00 (Commission: $7)",
    zh: "买入200股 @ $45.00 (佣金：$7)",
    hi: "200 शेयर @ $45.00 खरीदें (कमीशन: $7)",
  },
  "edu.cost-vs-price.example-avg-price": {
    en: "Average Price = ($50 + $45) / 2 = $47.50",
    zh: "平均价格 = ($50 + $45) / 2 = $47.50",
    hi: "औसत मूल्य = ($50 + $45) / 2 = $47.50",
  },
  "edu.cost-vs-price.example-avg-cost": {
    en: "Average Cost = ($5,000 + $5 + $9,000 + $7) / 300 = $47.04",
    zh: "平均成本 = ($5,000 + $5 + $9,000 + $7) / 300 = $47.04",
    hi: "औसत लागत = ($5,000 + $5 + $9,000 + $7) / 300 = $47.04",
  },
  "edu.cost-vs-price.example-note": {
    en: "Note: Average price ignores both share quantity and fees, giving you an inaccurate $47.50. The weighted average cost of $47.04 is your true break-even.",
    zh: "注意：平均价格忽略了股票数量和费用，给您一个不准确的$47.50。加权平均成本$47.04才是您真实的盈亏平衡点。",
    hi: "नोट: औसत मूल्य शेयर मात्रा और शुल्क दोनों को अनदेखा करता है, जिससे आपको एक गलत $47.50 मिलता है। $47.04 की भारित औसत लागत आपका सच्चा ब्रेक-ईवन है।",
  },
  "edu.cost-vs-price.calculator-default": {
    en: "Our calculator defaults to calculating Average Cost because it's the more conservative and accurate metric for tax reporting and ROI tracking. However, you can set commission to 0% if you only need a simple average price.",
    zh: "我们的计算器默认计算平均成本，因为它是税务申报和投资回报率跟踪的更保守和准确的指标。但是，如果您只需要简单的平均价格，可以将佣金设置为0%。",
    hi: "हमारा कैलकुलेटर डिफ़ॉल्ट रूप से औसत लागत की गणना करता है क्योंकि यह कर रिपोर्टिंग और आरओआई ट्रैकिंग के लिए अधिक रूढ़िवादी और सटीक मीट्रिक है। हालांकि, यदि आपको केवल एक साधारण औसत मूल्य की आवश्यकता है तो आप कमीशन को 0% पर सेट कर सकते हैं।",
  },
  "edu.cost-vs-price.faq1-q": {
    en: "Should I always use average cost instead of average price?",
    zh: "我应该总是使用平均成本而不是平均价格吗？",
    hi: "क्या मुझे हमेशा औसत मूल्य के बजाय औसत लागत का उपयोग करना चाहिए?",
  },
  "edu.cost-vs-price.faq1-a": {
    en: "Yes, for any financial decision-making. Average cost gives you the complete picture including all transaction costs, which is essential for accurate tax reporting and profit calculation.",
    zh: "是的，对于任何财务决策。平均成本为您提供包括所有交易成本的完整图景，这对于准确的税务申报和利润计算至关重要。",
    hi: "हां, किसी भी वित्तीय निर्णय लेने के लिए। औसत लागत आपको सभी लेनदेन लागतों सहित पूरी तस्वीर देती है, जो सटीक कर रिपोर्टिंग और लाभ गणना के लिए आवश्यक है।",
  },
  "edu.cost-vs-price.faq2-q": {
    en: "What if my broker charges zero commission?",
    zh: "如果我的经纪商收取零佣金怎么办？",
    hi: "यदि मेरा ब्रोकर शून्य कमीशन लेता है तो क्या होगा?",
  },
  "edu.cost-vs-price.faq2-a": {
    en: "In that case, average cost and weighted average price will be identical. However, remember that 'zero commission' brokers often have other costs like payment for order flow, wider spreads, or SEC fees that still affect your true cost basis.",
    zh: "在这种情况下，平均成本和加权平均价格将是相同的。但是，请记住'零佣金'经纪商通常有其他成本，如订单流支付、更宽的价差或SEC费用，这些仍然会影响您的真实成本基础。",
    hi: "उस स्थिति में, औसत लागत और भारित औसत मूल्य समान होंगे। हालांकि, याद रखें कि 'शून्य कमीशन' ब्रोकरों में अक्सर अन्य लागतें होती हैं जैसे ऑर्डर प्रवाह के लिए भुगतान, व्यापक स्प्रेड, या एसईसी शुल्क जो अभी भी आपके सच्चे लागत आधार को प्रभावित करते हैं।",
  },
  "edu.cost-vs-price.faq3-q": {
    en: "Does average cost matter for crypto trading?",
    zh: "平均成本对加密货币交易重要吗？",
    hi: "क्या क्रिप्टो ट्रेडिंग के लिए औसत लागत मायने रखती है?",
  },
  "edu.cost-vs-price.faq3-a": {
    en: "Absolutely. Cryptocurrency exchanges often charge higher fees (0.1% to 1%+ per trade), and many jurisdictions require detailed cost basis reporting for crypto taxes. Using average cost ensures compliance and accurate profit tracking.",
    zh: "绝对的。加密货币交易所通常收取更高的费用（每笔交易0.1%到1%以上），许多司法管辖区要求详细的成本基础报告用于加密税。使用平均成本确保合规性和准确的利润跟踪。",
    hi: "बिल्कुल। क्रिप्टोकरेंसी एक्सचेंज अक्सर उच्च शुल्क लेते हैं (प्रति व्यापार 0.1% से 1%+), और कई क्षेत्राधिकारों को क्रिप्टो करों के लिए विस्तृत लागत आधार रिपोर्टिंग की आवश्यकता होती है। औसत लागत का उपयोग अनुपालन और सटीक लाभ ट्रैकिंग सुनिश्चित करता है।",
  },

  // Common UI text for all pages
  "common.weighted-average-formula": {
    en: "Weighted Average Formula",
    zh: "加权平均公式",
    hi: "भारित औसत सूत्र",
  },
  "common.final-calculation": {
    en: "Final Calculation:",
    zh: "最终计算：",
    hi: "अंतिम गणना:",
  },
  "common.ready-to-calculate": {
    en: "Ready to calculate your own?",
    zh: "准备计算您自己的吗？",
    hi: "अपनी खुद की गणना करने के लिए तैयार हैं?",
  },
  "common.use-calculator-desc": {
    en: "Use our high-precision stock average calculator to get instant results including commissions and averaging down targets.",
    zh: "使用我们的高精度股票平均计算器，获得包括佣金和补仓目标在内的即时结果。",
    hi: "कमीशन और एवरेजिंग डाउन लक्ष्यों सहित तत्काल परिणाम प्राप्त करने के लिए हमारे उच्च-सटीक स्टॉक औसत कैलकुलेटर का उपयोग करें।",
  },
  "common.go-to-calculator": {
    en: "Go to Calculator",
    zh: "进入计算器",
    hi: "कैलकुलेटर पर जाएं",
  },
  "common.professional-tools": {
    en: "Professional Trading Tools",
    zh: "专业交易工具",
    hi: "पेशेवर ट्रेडिंग टूल्स",
  },
  "common.initial-principal": {
    en: "Initial principal",
    zh: "初始本金",
    hi: "प्रारंभिक मूलधन",
  },
  "common.additional-principal": {
    en: "Additional principal",
    zh: "额外本金",
    hi: "अतिरिक्त मूलधन",
  },
  "common.buy-shares-at": {
    en: "Buy ${num} shares @ ${price}",
    zh: "买入${num}股 @ ${price}",
    hi: "${num} शेयर @ ${price} खरीदें",
  },
  "common.initial-position": {
    en: "Initial Position",
    zh: "初始持仓",
    hi: "प्रारंभिक स्थिति",
  },
  "common.current-total-cost": {
    en: "Current Total Cost",
    zh: "当前总成本",
    hi: "वर्तमान कुल लागत",
  },
  "common.new-purchase": {
    en: "New Purchase",
    zh: "新购买",
    hi: "नई खरीद",
  },
  "common.additional-cost": {
    en: "Additional Cost",
    zh: "额外成本",
    hi: "अतिरिक्त लागत",
  },
  "common.try-calculator-now": {
    en: "Try Calculator Now",
    zh: "立即尝试计算器",
    hi: "अभी कैलकुलेटर आज़माएं",
  },
  "common.calculate-your-average": {
    en: "Calculate Your Average Now",
    zh: "立即计算您的平均值",
    hi: "अभी अपना औसत गणना करें",
  },
  "common.use-recovery-calculator": {
    en: "Use Recovery Calculator",
    zh: "使用回本计算器",
    hi: "रिकवरी कैलकुलेटर का उपयोग करें",
  },
  "common.eliminate-guesswork": {
    en: "Eliminate Guesswork",
    zh: "消除猜测",
    hi: "अनुमान हटाएं",
  },
  "common.stop-guessing": {
    en: "Stop guessing how many shares you need. Enter your current position and your target recovery price to get a surgical plan.",
    zh: "不要再猜测您需要多少股。输入您当前的持仓和目标回本价格，获得精确的计划。",
    hi: "अनुमान लगाना बंद करें कि आपको कितने शेयरों की आवश्यकता है। सर्जिकल योजना प्राप्त करने के लिए अपनी वर्तमान स्थिति और अपनी लक्ष्य पुनर्प्राप्ति मूल्य दर्ज करें।",
  },
  "common.break-even": {
    en: "Break-Even",
    zh: "盈亏平衡",
    hi: "ब्रेक-ईवन",
  },
  "common.shares-owned": {
    en: "Shares Owned:",
    zh: "持有股数：",
    hi: "स्वामित्व वाले शेयर:",
  },
  "common.average-cost": {
    en: "Average Cost:",
    zh: "平均成本：",
    hi: "औसत लागत:",
  },
  "common.total-invested": {
    en: "Total Invested:",
    zh: "总投资：",
    hi: "कुल निवेश:",
  },
  "common.current-price": {
    en: "Current Price:",
    zh: "当前价格：",
    hi: "वर्तमान मूल्य:",
  },
  "common.current-value": {
    en: "Current Value:",
    zh: "当前价值：",
    hi: "वर्तमान मूल्य:",
  },
  "common.unrealized-loss": {
    en: "Unrealized Loss:",
    zh: "未实现亏损：",
    hi: "अवास्तविक हानि:",
  },
  "common.your-position": {
    en: "Your Position",
    zh: "您的持仓",
    hi: "आपकी स्थिति",
  },
  "common.recovery-analysis": {
    en: "Recovery Analysis",
    zh: "回本分析",
    hi: "रिकवरी विश्लेषण",
  },
  "common.option-wait": {
    en: "Option 1: Wait",
    zh: "选项1：等待",
    hi: "विकल्प 1: प्रतीक्षा करें",
  },
  "common.option-average-down": {
    en: "Option 2: Average Down",
    zh: "选项2：补仓",
    hi: "विकल्प 2: एवरेज डाउन",
  },
  "common.stock-needs-to-rise": {
    en: "Stock needs to rise to ${price} (+${percent}%)",
    zh: "股票需要上涨至${price}（+${percent}%）",
    hi: "स्टॉक को ${price} (+${percent}%) तक बढ़ना होगा",
  },
  "common.buy-more-new-avg": {
    en: "Buy ${shares} more @ ${price} → New avg: ${newAvg}",
    zh: "再买入${shares}股 @ ${price} → 新均价：${newAvg}",
    hi: "${shares} और @ ${price} खरीदें → नया औसत: ${newAvg}",
  },
  "common.now-only-need": {
    en: "Now only need +${percent}% instead of +${oldPercent}%",
    zh: "现在只需要+${percent}%，而不是+${oldPercent}%",
    hi: "अब केवल +${percent}% की आवश्यकता है +${oldPercent}% के बजाय",
  },
  "common.initial-price": {
    en: "Initial Price:",
    zh: "初始价格：",
    hi: "प्रारंभिक मूल्य:",
  },
  "common.after-drop": {
    en: "After ${percent}% Drop:",
    zh: "${percent}%下跌后：",
    hi: "${percent}% गिरावट के बाद:",
  },
  "common.loss-scenario": {
    en: "Loss Scenario",
    zh: "亏损情景",
    hi: "हानि परिदृश्य",
  },
  "common.recovery-needed": {
    en: "Recovery Needed",
    zh: "需要的恢复",
    hi: "आवश्यक पुनर्प्राप्ति",
  },
  "common.from-to": {
    en: "From ${from} to ${to}:",
    zh: "从${from}到${to}：",
    hi: "${from} से ${to} तक:",
  },
  "common.loss-requires-gain": {
    en: "A ${loss}% loss requires a ${gain}% gain to recover!",
    zh: "${loss}%的亏损需要${gain}%的涨幅才能回本！",
    hi: "${loss}% की हानि को पुनर्प्राप्त करने के लिए ${gain}% लाभ की आवश्यकता है!",
  },
  "common.break-even-formula": {
    en: "Break-Even Formula",
    zh: "盈亏平衡公式",
    hi: "ब्रेक-ईवन सूत्र",
  },
  "common.break-even-formula-text": {
    en: "Break-Even = Total Cost / Total Shares",
    zh: "盈亏平衡点 = 总成本 / 总股数",
    hi: "ब्रेक-ईवन = कुल लागत / कुल शेयर",
  },
  "common.what-is-break-even": {
    en: "What is \"Break-Even\"?",
    zh: "什么是“盈亏平衡”？",
    hi: "\"ब्रेक-ईवन\" क्या है?",
  },
  "common.break-even-desc": {
    en: "Break-even is the price at which your portfolio value equals your total invested capital (including fees).",
    zh: "盈亏平衡是指您的投资组合价值等于您的总投资资本（包括费用）的价格。",
    hi: "ब्रेक-ईवन वह कीमत है जिस पर आपके पोर्टफोलियो का मूल्य आपकी कुल निवेशित पूंजी (शुल्क सहित) के बराबर होता है।",
  },
  "common.how-many-shares-recover": {
    en: "How many shares do I need to recover?",
    zh: "我需要多少股才能回本？",
    hi: "पुनर्प्राप्त करने के लिए मुझे कितने शेयरों की आवश्यकता है?",
  },
  "common.shares-recover-desc": {
    en: "The deeper the dip, the more shares you need to buy to move the needle. Use our calculation to find the exact number.",
    zh: "下跌越深，您需要购买的股票就越多才能改变局面。使用我们的计算来找到确切的数量。",
    hi: "जितनी गहरी गिरावट होगी, सुई को हिलाने के लिए आपको उतने ही अधिक शेयर खरीदने होंगे। सटीक संख्या खोजने के लिए हमारी गणना का उपयोग करें।",
  },
  "common.calculator-auto-recalc": {
    en: "Our calculator automatically recalculates your average every time you add a new purchase entry. Add as many transactions as you need!",
    zh: "我们的计算器会在您每次添加新购买记录时自动重新计算您的平均值。根据需要添加任意数量的交易！",
    hi: "हमारा कैलकुलेटर हर बार जब आप एक नई खरीद प्रविष्टि जोड़ते हैं तो स्वचालित रूप से आपके औसत की पुनर्गणना करता है। आवश्यकतानुसार कितने भी लेनदेन जोड़ें!",
  },
  "common.use-averaging-down-engine": {
    en: "Use the \"Averaging Down Engine\" section in our calculator to instantly find out how many shares you need to buy at the current price to reach your target average.",
    zh: "使用我们计算器中的\"补仓引擎\"部分，即时找出您需要以当前价格购买多少股才能达到目标平均值。",
    hi: "अपने लक्ष्य औसत तक पहुँचने के लिए वर्तमान कीमत पर कितने शेयर खरीदने की आवश्यकता है, यह तुरंत पता लगाने के लिए हमारे कैलकुलेटर में \"एवरेजिंग डाउन इंजन\" अनुभाग का उपयोग करें।",
  },
  "common.formula-desc-weighted": {
    en: "To calculate the total average cost, you must multiply each purchase price by the number of shares bought at that price, sum those totals, and divide by the total amount of shares held. This provides your weighted average cost basis.",
    zh: "要计算总平均成本，您必须将每个购买价格乘以该价格购买的股票数量，将这些总数相加，然后除以持有的股票总数。这提供了您的加权平均成本基础。",
    hi: "कुल औसत लागत की गणना करने के लिए, आपको प्रत्येक खरीद मूल्य को उस मूल्य पर खरीदे गए शेयरों की संख्या से गुणा करना होगा, उन योगों को जोड़ना होगा, और रखे गए शेयरों की कुल राशि से विभाजित करना होगा। यह आपकी भारित औसत लागत आधार प्रदान करता है।",
  },
  "common.new-avg-dropped": {
    en: "Your new average dropped from ${old} to ${new}—now you only need the stock to reach ${new} to break even!",
    zh: "您的新平均值从${old}降至${new}——现在您只需要股票达到${new}即可收支平衡！",
    hi: "आपका नया औसत ${old} से ${new} तक गिर गया—अब आपको केवल स्टॉक को ${new} तक पहुंचने की आवश्यकता है ताकि ब्रेक ईवन हो सके!",
  },
  "common.achievable-target": {
    en: "a much more achievable target!",
    zh: "一个更容易实现的目标！",
    hi: "एक बहुत अधिक प्राप्य लक्ष्य!",
  },
  "common.now-only-need-break-even": {
    en: "Now you only need the stock to reach ${target} instead of ${old} to break even—",
    zh: "现在您只需要股票达到${target}而不是${old}即可收支平衡——",
    hi: "अब आपको केवल स्टॉक को ${target} तक पहुंचने की आवश्यकता है ${old} के बजाय ब्रेक ईवन के लिए—",
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

// Helper function to get localized path
export function getLocalizedPath(path: string, lang: Language): string {
  // If English, no prefix needed
  if (lang === 'en') return path;

  // For other languages, add language prefix
  // Handle root path
  if (path === '/') return `/${lang}/`;

  // Handle paths with hash (anchors)
  if (path.includes('#')) {
    const [pathname, hash] = path.split('#');
    if (pathname === '/') {
      return `/${lang}/#${hash}`;
    }
    return `/${lang}${pathname}#${hash}`;
  }

  // Regular paths
  return `/${lang}${path}`;
}
