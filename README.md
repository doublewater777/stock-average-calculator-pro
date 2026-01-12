# Stock Average Calculator

A professional, accessible stock average price calculator with support for multiple languages and advanced features.

🌐 **Live Demo:** [stockaveragecalculators.com](https://stockaveragecalculators.com)

## ✨ Features

- **Weighted Average Calculation** - Calculate your average stock price after multiple purchases
- **Averaging Down Engine** - Reverse-engineer how many shares needed to reach target price
- **Commission Support** - Include trading fees (percentage or flat fee) in calculations
- **Multi-language Support** - English, Chinese (中文), Hindi (हिन्दी)
- **Dark Mode** - Premium dark theme with smooth transitions
- **Fully Accessible** - WCAG 2.1 AA compliant with comprehensive ARIA support
- **Local Storage** - All data saved locally, 100% privacy-focused
- **Mobile Optimized** - Responsive design for all devices
- **SEO Optimized** - Structured data, proper heading hierarchy, meta tags

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Outfit, JetBrains Mono
- **Analytics:** Vercel Analytics & Speed Insights
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/doublewater777/stock-average-calculator-pro.git

# Navigate to project directory
cd stock-average-calculator-pro

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/
│   ├── [lang]/          # Internationalized routes
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── calculator.tsx   # Main calculator component
│   ├── navbar.tsx       # Navigation bar
│   ├── footer.tsx       # Footer
│   └── theme-provider.tsx
└── lib/
    └── i18n.tsx         # Internationalization
```

## 🌍 Internationalization

The app supports URL-based language routing:
- English: `/` or `/en`
- Chinese: `/zh`
- Hindi: `/hi`

Translations are managed in `src/lib/i18n.tsx`.

## ♿ Accessibility Features

- Semantic HTML with `<fieldset>` and `<legend>` for form groups
- Comprehensive ARIA labels and live regions
- Keyboard navigation support
- Screen reader optimized
- Proper heading hierarchy (single h1 per page)
- High contrast colors in both themes

## 📊 SEO Features

- Structured data (FAQPage, SoftwareApplication schemas)
- Proper meta tags (OpenGraph, Twitter Cards)
- Canonical URLs with hreflang
- Sitemap and robots.txt
- Optimized heading structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🔗 Links

- **Website:** [stockaveragecalculators.com](https://stockaveragecalculators.com)
- **GitHub:** [doublewater777/stock-average-calculator-pro](https://github.com/doublewater777/stock-average-calculator-pro)
- **Author:** [@PanYang0203](https://twitter.com/PanYang0203)

---

Built with ❤️ using Next.js and TypeScript
