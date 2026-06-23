import { palette } from '../styles/theme';

export default function StoryBand({ brand }) {
  const p = palette(brand);
  const stories = [
    { title: 'Mission', desc: 'Empowering tall individuals with fashion that fits perfectly and looks incredible.' },
    { title: 'Vision', desc: 'A world where being tall is celebrated and every wardrobe choice is confident.' },
    { title: 'Values', desc: 'Quality, inclusivity, and the belief that fashion should work for everyone.' }
  ];
  
  return (
    <section className="story" style={{ background: p.bg, color: p.fg }}>
      <div>
        <div className="tag" style={{ borderColor: p.line, color: p.accent }}>Our Story</div>
        <h2>Built for the Tall</h2>
      </div>
      <div className="storyList">
        {stories.map((story, i) => (
          <div key={i} style={{ borderColor: p.line }}>
            <span style={{ color: p.accent }}>{story.title}</span>
            <p>{story.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
