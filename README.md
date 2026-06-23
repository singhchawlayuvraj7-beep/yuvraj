# TALLFIT Website

A modern React website for TALLFIT - premium apparel designed for tall individuals.

## Features

- 🎨 Dual brand themes (TALLFIT & TALLFIT AI)
- 📱 Fully responsive design
- 🛍️ Product showcase and shop pages
- 📋 FAQ, Pricing, and Contact pages
- ⚡ Built with React and Vite
- 🎯 Smooth navigation and transitions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── MetricStrip.jsx
│   ├── ProductShelf.jsx
│   └── StoryBand.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── ShopPage.jsx
│   ├── AboutPage.jsx
│   ├── PricingOrFaq.jsx
│   └── ContactPage.jsx
├── styles/             # Theme and styling
│   └── theme.js
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Brand Switching

Click the TALLFIT logo to switch between the two brand themes:
- **TALLFIT**: Clean, minimal light theme
- **TALLFIT AI**: Dark, futuristic theme

## Customization

Edit the color palettes in `src/styles/theme.js` to customize the brand colors for each theme.
