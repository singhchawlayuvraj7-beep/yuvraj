import { palette } from '../styles/theme';

export default function ShopPage({ brand }) {
  const p = palette(brand);
  const products = [
    { name: 'Tall Fit T-Shirt', price: '$39.99' },
    { name: 'Extended Length Jeans', price: '$89.99' },
    { name: 'Premium Hoodie', price: '$64.99' },
    { name: 'Casual Sneakers', price: '$129.99' },
    { name: 'Dress Shirt', price: '$74.99' },
    { name: 'Athletic Wear', price: '$54.99' }
  ];
  
  return (
    <div className="page" style={{ background: p.bg, color: p.fg }}>
      <div className="pageHeader">
        <div className="tag" style={{ borderColor: p.line, color: p.accent }}>Shop</div>
        <h1>All Products</h1>
        <p>Carefully curated collections designed specifically for tall individuals.</p>
      </div>
      <div className="catalog">
        {products.map((product, i) => (
          <div key={i} className="tile" style={{ borderColor: p.line, background: p.card }}>
            <div className="tileMedia" style={{ borderColor: p.line }}>
              <span style={{ borderColor: p.line }}>📦</span>
            </div>
            <h3>{product.name}</h3>
            <b style={{ color: p.accent }}>{product.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
