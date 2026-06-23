import { palette } from '../styles/theme';

export default function Nav({ brand, page, setPage, switchBrand }) {
  const p = palette(brand);
  const navItems = ["Overview", "Shop", "About", "FAQ", "Contact"];
  
  return (
    <nav className="nav" style={{ background: p.bg, borderColor: p.line, color: p.fg }}>
      <button className="brandBtn" onClick={switchBrand} style={{ color: p.fg }}>
        <div className="logo">
          <span>📏</span>
          <b style={{ borderColor: p.line }}>TALLFIT {brand === "ai" ? "AI" : ""}</b>
        </div>
      </button>
      
      <div className="navLinks" style={{ borderColor: p.line, background: p.card }}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={page === item.toLowerCase() ? 'active' : ''}
            style={{
              color: p.fg,
              borderColor: page === item.toLowerCase() ? p.accent : 'transparent'
            }}
          >
            {item}
          </button>
        ))}
      </div>
      
      <div className="navActions">
        <button className="outlineBtn" style={{ borderColor: p.line, color: p.fg }}>
          Sign In
        </button>
        <button className="solidBtn" style={{ background: p.accent, color: p.bg }}>
          Get Started
        </button>
      </div>
    </nav>
  );
}
