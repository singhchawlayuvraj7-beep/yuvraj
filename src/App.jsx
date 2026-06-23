import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import PricingOrFaq from './pages/PricingOrFaq';
import ContactPage from './pages/ContactPage';
import { palette, css } from './styles/theme';

function Footer({ brand }) {
  const p = palette(brand);
  return (
    <footer style={{ background: p.bg, color: p.muted, borderColor: p.line }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, letterSpacing: 0 }}>
        <span style={{ fontSize: '20px' }}>📏</span>
        <b style={{ fontSize: '11px', border: '1px solid', borderRadius: '999px', padding: '2px 7px' }}>TALLFIT</b>
      </div>
      <span>© 2026 {brand === "tallfit" ? "TALLFIT" : "TALLFIT AI"}</span>
      <span style={{ color: p.accent }}>Built tall. Built confident.</span>
    </footer>
  );
}

export default function App() {
  const [brand, setBrand] = useState("tallfit");
  const [page, setPageState] = useState("home");

  function setPage(next) {
    setPageState(next === "overview" ? "home" : next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchBrand() {
    setBrand((current) => current === "tallfit" ? "ai" : "tallfit");
    setPageState("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const isAI = brand === "ai";
  const normalized = page === "features" ? "shop" : page;
  const content = normalized === "shop"
    ? <ShopPage brand={brand} />
    : normalized === "about" || normalized === "use cases"
      ? <AboutPage brand={brand} />
      : normalized === "faq" || normalized === "pricing"
        ? <PricingOrFaq brand={brand} page={normalized} setPage={setPage} />
        : normalized === "contact"
          ? <ContactPage brand={brand} />
          : <Home brand={brand} setPage={setPage} />;

  return (
    <div className={isAI ? "app ai" : "app tallfit"}>
      <style>{css}</style>
      <Nav brand={brand} page={isAI && page === "home" ? "overview" : page} setPage={setPage} switchBrand={switchBrand} />
      {content}
      <Footer brand={brand} />
    </div>
  );
}
