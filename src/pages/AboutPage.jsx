import { palette } from '../styles/theme';

export default function AboutPage({ brand }) {
  const p = palette(brand);
  
  return (
    <div className="page" style={{ background: p.bg, color: p.fg }}>
      <div className="pageHeader">
        <div className="tag" style={{ borderColor: p.line, color: p.accent }}>About</div>
        <h1>About TALLFIT</h1>
        <p>We believe fashion should celebrate every body. TALLFIT is dedicated to creating premium apparel for tall individuals who deserve style that actually fits.</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        <h2>Our Journey</h2>
        <p>Founded in 2026, TALLFIT emerged from a simple frustration: clothes made for tall people actually worked better. We partnered with designers and manufacturers to create pieces that flatter tall frames with perfect proportions.</p>
        
        <h2>Quality Commitment</h2>
        <p>Every item in our collection is crafted using premium materials and tested for durability. We stand behind our products because we believe in building confidence, one perfect fit at a time.</p>
        
        <h2>Community</h2>
        <p>Our community of customers spans across the globe. We listen to feedback, iterate on designs, and continuously evolve to meet the needs of tall individuals everywhere.</p>
      </div>
    </div>
  );
}
