export const palette = (brand) => {
  if (brand === "ai") {
    return {
      bg: "#0a0a0a",
      fg: "#ffffff",
      accent: "#00d9ff",
      muted: "#888888",
      line: "rgba(255,255,255,.08)",
      card: "rgba(255,255,255,.04)"
    };
  }
  return {
    bg: "#ffffff",
    fg: "#000000",
    accent: "#ff6b35",
    muted: "#666666",
    line: "rgba(0,0,0,.08)",
    card: "rgba(0,0,0,.02)"
  };
};

export const css = `
* { box-sizing: border-box; }
html, body, #root { margin: 0; min-height: 100%; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
button, input, textarea { font: inherit; }
button { cursor: pointer; }
.app { min-height: 100vh; }
.app.tallfit { background: #ffffff; color: #000000; }
.app.ai { background: #0a0a0a; color: #ffffff; }
.nav { position: fixed; inset: 0 0 auto 0; z-index: 20; height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 0 28px; border-bottom: 1px solid; backdrop-filter: blur(16px); }
.brandBtn, .nav button { background: transparent; border: 0; }
.logo { display: flex; align-items: center; gap: 8px; font-weight: 900; letter-spacing: 0; }
.logo span { font-size: 20px; }
.logo b { font-size: 11px; border: 1px solid; border-radius: 999px; padding: 2px 7px; }
.navLinks { display: flex; align-items: center; gap: 6px; padding: 6px; border: 1px solid rgba(255,255,255,.08); border-radius: 999px; }
.navLinks button { padding: 9px 13px; border-radius: 999px; font-size: 13px; }
.navLinks .active { background: rgba(255,255,255,.08); }
.navActions { display: flex; align-items: center; gap: 10px; }
.outlineBtn, .solidBtn { min-height: 38px; padding: 0 16px; border-radius: 999px; font-size: 12px; font-weight: 800; letter-spacing: 0; border: 1px solid; }
.solidBtn { border: 0; }
.hero { padding: 136px 28px 72px; overflow: hidden; }
.heroInner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, 520px); gap: 56px; align-items: center; }
.tag { display: inline-flex; align-items: center; width: fit-content; border: 1px solid; border-radius: 999px; padding: 7px 12px; font-size: 12px; font-weight: 850; text-transform: uppercase; letter-spacing: .08em; }
h1, h2, h3, p { margin-top: 0; }
.hero h1 { max-width: 760px; margin: 20px 0 20px; font-size: clamp(52px, 8vw, 104px); line-height: .9; letter-spacing: 0; font-weight: 950; }
.hero p { max-width: 620px; font-size: 18px; line-height: 1.7; }
.heroCtas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
.cta { min-height: 48px; padding: 0 22px; border: 1px solid; border-radius: 999px; font-size: 13px; font-weight: 900; }
.heroMockup { position: relative; min-height: 560px; }
.mockupChrome { height: 42px; border: 1px solid; border-radius: 18px 18px 0 0; display: flex; gap: 8px; align-items: center; padding-left: 16px; }
.mockupChrome span { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.24); }
.mockupGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 14px; border: 1px solid rgba(255,255,255,.08); border-top: 0; border-radius: 0 0 18px 18px; }
.mockCard, .tile, .plan, .form { border: 1px solid; border-radius: 8px; }
.mockCard { min-height: 230px; padding: 12px; box-shadow: 0 30px 80px rgba(0,0,0,.24); }
.mock1 { transform: translateY(34px); }
.mock2 { transform: translateY(-18px); }
.mock3 { transform: translateY(22px); }
.productArt, .tileMedia { min-height: 134px; border-radius: 6px; display: flex; align-items: flex-start; justify-content: flex-end; padding: 12px; }
.productArt span, .tileMedia span { border: 1px solid; border-radius: 999px; padding: 5px 9px; font-size: 11px; font-weight: 800; }
.mockCard h3, .tile h3, .plan h3 { margin: 14px 0 6px; font-size: 18px; }
.mockCard p, .tile p, .plan p { line-height: 1.55; }
.strip { display: grid; grid-template-columns: repeat(3, 1fr); border-block: 1px solid; }
.strip div { min-height: 132px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-right: 1px solid rgba(255,255,255,.08); }
.strip strong { font-size: 42px; line-height: 1; }
.strip span { margin-top: 7px; font-size: 13px; text-transform: uppercase; letter-spacing: .08em; }
.section, .page { padding: 96px 28px; }
.sectionHead, .pageHeader { max-width: 1120px; margin: 0 auto 36px; }
.sectionHead { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: end; }
.sectionHead h2, .story h2, .pageHeader h1 { margin: 16px 0 0; font-size: clamp(34px, 5vw, 68px); line-height: .96; letter-spacing: 0; max-width: 780px; }
.sectionHead button { background: transparent; border: 0; font-weight: 900; }
.cards4, .catalog, .plans { max-width: 1120px; margin: 0 auto; display: grid; gap: 18px; }
.cards4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.catalog { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.plans { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.tile, .plan { padding: 14px; }
.tile.large .tileMedia { min-height: 220px; }
.tile b { display: block; margin-top: 14px; }
.story { padding: 96px 28px; display: grid; grid-template-columns: minmax(0, 520px) minmax(0, 560px); gap: 56px; justify-content: center; align-items: start; }
.storyList { display: grid; gap: 12px; }
.storyList div { border: 1px solid; border-radius: 8px; padding: 20px; }
.storyList span { font-size: 12px; font-weight: 900; }
.storyList p { margin: 8px 0 0; font-size: 18px; line-height: 1.45; }
.page { padding-top: 140px; min-height: 72vh; }
.pageHeader { text-align: center; }
.pageHeader .tag { margin: 0 auto; }
.pageHeader h1 { margin-left: auto; margin-right: auto; }
.pageHeader p { max-width: 640px; margin: 16px auto 0; line-height: 1.7; }
.form { max-width: 640px; margin: 0 auto; padding: 20px; display: grid; gap: 12px; }
.form input, .form textarea { width: 100%; border: 1px solid rgba(255,255,255,.12); border-radius: 8px; background: rgba(255,255,255,.06); color: white; padding: 15px 16px; outline: 0; }
.form textarea { min-height: 130px; resize: vertical; }
.form button { min-height: 48px; border: 0; border-radius: 999px; font-weight: 900; }
footer { border-top: 1px solid; min-height: 120px; padding: 30px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
@media (max-width: 900px) {
  .nav { height: auto; min-height: 72px; align-items: flex-start; padding: 16px; flex-wrap: wrap; }
  .navLinks { order: 3; width: 100%; overflow-x: auto; justify-content: flex-start; }
  .navActions { margin-left: auto; }
  .hero { padding-top: 164px; }
  .heroInner, .story { grid-template-columns: 1fr; }
  .hero h1 { font-size: clamp(44px, 15vw, 72px); }
  .heroMockup { min-height: auto; }
  .cards4, .catalog, .plans { grid-template-columns: 1fr 1fr; }
  .sectionHead { grid-template-columns: 1fr; }
  .strip { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .navActions { width: 100%; }
  .outlineBtn, .solidBtn { flex: 1; }
  .hero, .section, .story, .page { padding-left: 18px; padding-right: 18px; }
  .cards4, .catalog, .plans, .mockupGrid { grid-template-columns: 1fr; }
  .mock1, .mock2, .mock3 { transform: none; }
  footer { flex-direction: column; align-items: flex-start; }
}
`;
