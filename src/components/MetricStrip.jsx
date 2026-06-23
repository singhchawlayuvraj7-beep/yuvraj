import { palette } from '../styles/theme';

export default function MetricStrip({ brand }) {
  const p = palette(brand);
  
  return (
    <div className="strip" style={{ borderColor: p.line }}>
      <div style={{ borderRightColor: p.line }}>
        <strong style={{ color: p.accent }}>50K+</strong>
        <span style={{ color: p.muted }}>Happy Customers</span>
      </div>
      <div style={{ borderRightColor: p.line }}>
        <strong style={{ color: p.accent }}>100%</strong>
        <span style={{ color: p.muted }}>Premium Quality</span>
      </div>
      <div>
        <strong style={{ color: p.accent }}>24/7</strong>
        <span style={{ color: p.muted }}>Customer Support</span>
      </div>
    </div>
  );
}
