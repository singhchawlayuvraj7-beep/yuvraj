import { palette } from '../styles/theme';

export default function Hero({ brand, setPage }) {
  const p = palette(brand);
  
  return (
    <section className="hero" style={{ background: p.bg, color: p.fg }}>
      <div className="heroInner">
        <div>
          <div className="tag" style={{ borderColor: p.line, color: p.accent }}>
            New Feature
          </div>
          <h1>Reach New Heights</h1>
          <p>Premium apparel and accessories designed for people who refuse to be confined by conventional sizing.</p>
          <div className="heroCtas">
            <button className="cta" style={{ borderColor: p.line, background: p.accent, color: p.bg }}
              onClick={() => setPage('shop')}>
              Shop Now
            </button>
            <button className="cta" style={{ borderColor: p.line, color: p.fg }}>
              Learn More
            </button>
          </div>
        </div>
        <div className="heroMockup">
          <div className="mockupChrome" style={{ borderColor: p.line }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mockupGrid" style={{ borderColor: p.line }}>
            <div className="mockCard mock1" style={{ borderColor: p.line, background: p.card }}>
              <div className="productArt" style={{ borderColor: p.line }}>
                <span style={{ borderColor: p.line }}>🎯</span>
              </div>
              <h3>Product 1</h3>
              <p style={{ color: p.muted }}>Premium quality</p>
            </div>
            <div className="mockCard mock2" style={{ borderColor: p.line, background: p.card }}>
              <div className="productArt" style={{ borderColor: p.line }}>
                <span style={{ borderColor: p.line }}>⭐</span>
              </div>
              <h3>Product 2</h3>
              <p style={{ color: p.muted }}>Bestseller</p>
            </div>
            <div className="mockCard mock3" style={{ borderColor: p.line, background: p.card }}>
              <div className="productArt" style={{ borderColor: p.line }}>
                <span style={{ borderColor: p.line }}>🔥</span>
              </div>
              <h3>Product 3</h3>
              <p style={{ color: p.muted }}>Trending</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
