import { palette } from '../styles/theme';

export default function ProductShelf({ brand, setPage }) {
  const p = palette(brand);
  const products = [
    { icon: '👕', name: 'Extended T-Shirts', desc: 'Comfortable fit for tall frames' },
    { icon: '👖', name: 'Long Jeans', desc: 'Perfect proportions' },
    { icon: '👟', name: 'Tall Sneakers', desc: 'Style & comfort' },
    { icon: '🧥', name: 'Premium Jackets', desc: 'Tailored for height' }
  ];
  
  return (
    <section className="section" style={{ background: p.bg, color: p.fg }}>
      <div className="sectionHead">
        <div>
          <div className="tag" style={{ borderColor: p.line, color: p.accent }}>Collections</div>
          <h2>Shop by Category</h2>
        </div>
        <button style={{ color: p.accent, fontWeight: 900 }} onClick={() => setPage('shop')}>
          View All →
        </button>
      </div>
      <div className="cards4">
        {products.map((product, i) => (
          <div key={i} className="tile" style={{ borderColor: p.line, background: p.card }}>
            <div className="tileMedia" style={{ borderColor: p.line }}>
              <span style={{ borderColor: p.line }}>{product.icon}</span>
            </div>
            <h3>{product.name}</h3>
            <p style={{ color: p.muted }}>{product.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
