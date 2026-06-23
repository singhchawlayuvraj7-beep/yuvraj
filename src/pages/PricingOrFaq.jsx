import { palette } from '../styles/theme';

export default function PricingOrFaq({ brand, page }) {
  const p = palette(brand);
  
  if (page === 'pricing') {
    const plans = [
      { name: 'Basic', price: '$29/mo', features: ['Core catalog', 'Free shipping', 'Email support'] },
      { name: 'Pro', price: '$79/mo', features: ['Full catalog', 'Priority shipping', '24/7 support', 'Early access'] },
      { name: 'Premium', price: '$199/mo', features: ['Everything', 'Personal stylist', 'VIP events', 'Custom orders'] }
    ];
    
    return (
      <div className="page" style={{ background: p.bg, color: p.fg }}>
        <div className="pageHeader">
          <div className="tag" style={{ borderColor: p.line, color: p.accent }}>Pricing</div>
          <h1>Simple, Transparent Pricing</h1>
        </div>
        <div className="plans">
          {plans.map((plan, i) => (
            <div key={i} className="plan" style={{ borderColor: p.line, background: p.card }}>
              <h3>{plan.name}</h3>
              <b style={{ color: p.accent, fontSize: '24px' }}>{plan.price}</b>
              <ul style={{ margin: '16px 0', paddingLeft: '20px', color: p.muted }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ margin: '8px 0' }}>{f}</li>
                ))}
              </ul>
              <button className="cta" style={{ borderColor: p.line, background: p.accent, color: p.bg, width: '100%' }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const faqs = [
    { q: 'What is TALLFIT?', a: 'TALLFIT is a fashion brand dedicated to creating premium apparel specifically designed for tall individuals.' },
    { q: 'How do I find my size?', a: 'We offer detailed sizing guides for each product. You can also chat with our style consultants for personalized recommendations.' },
    { q: 'Do you offer international shipping?', a: 'Yes! We ship to over 100 countries with competitive rates and fast delivery.' },
    { q: 'What is your return policy?', a: 'We offer 30-day returns on all unworn items. Free return shipping on orders over $100.' }
  ];
  
  return (
    <div className="page" style={{ background: p.bg, color: p.fg }}>
      <div className="pageHeader">
        <div className="tag" style={{ borderColor: p.line, color: p.accent }}>FAQ</div>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${p.line}`, padding: '24px 0' }}>
            <h3 style={{ margin: '0 0 12px', color: p.accent }}>{faq.q}</h3>
            <p style={{ margin: '0', color: p.muted, lineHeight: '1.6' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
