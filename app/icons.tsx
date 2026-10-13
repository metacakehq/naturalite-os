// Small line icons (24px grid, 1.8 stroke) shared by the sidebar and the home cards.
const P = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function Icon({ name }: { name: string }) {
  switch (name) {
    case "home": return <svg {...P}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /></svg>;
    case "video-production": return <svg {...P}><rect x="3" y="5" width="13" height="14" rx="3" /><path d="m16 10 5-3v10l-5-3" /></svg>;
    case "content-analysis": return <svg {...P}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
    default: return <svg {...P}><rect x="3" y="3" width="18" height="18" rx="5" /><path d="M12 8v8M8 12h8" /></svg>;
  }
}
