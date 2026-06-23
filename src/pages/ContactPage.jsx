import { useState } from 'react';
import { palette } from '../styles/theme';

export default function ContactPage({ brand }) {
  const p = palette(brand);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="page" style={{ background: p.bg, color: p.fg }}>
      <div className="pageHeader">
        <div className="tag" style={{ borderColor: p.line, color: p.accent }}>Contact</div>
        <h1>Get in Touch</h1>
        <p>Have questions? We would love to hear from you. Send us a message!</p>
      </div>
      <form className="form" style={{ borderColor: p.line, background: p.card }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ borderColor: p.line, background: `rgba(255,255,255,.06)`, color: p.fg }}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ borderColor: p.line, background: `rgba(255,255,255,.06)`, color: p.fg }}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ borderColor: p.line, background: `rgba(255,255,255,.06)`, color: p.fg }}
          required
        />
        <button
          type="submit"
          style={{ background: p.accent, color: p.bg, fontWeight: 900 }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
