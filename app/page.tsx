export const dynamic = "force-dynamic"; // live numbers from the tools on every request

import { tools } from "@/lib/tools";
import { videoStatus } from "@/lib/video";

export default async function Home() {
  const s = await videoStatus();
  const vid = s?.feature_status?.video || {};
  return (
    <>
      <div className="topbar"><h1>Welcome back</h1><span className="crumb">Everything Naturalite runs on, in one place.</span></div>
      <div className="cards">
        {tools.map(t => (
          <div key={t.slug} className={"card" + (t.status === "live" ? "" : " soon")}>
            <span className={"pill" + (t.status === "live" ? "" : " grey")}>{t.status === "live" ? "Live" : t.status === "soon" ? "Coming soon" : "Later"}</span>
            <h3>{t.name}</h3>
            <p>{t.blurb}</p>
            {t.slug === "video-production" && (
              <div className="stats">
                <div><b>{s ? s.runs.length : "–"}</b><span>finished posts matched</span></div>
                <div><b>{s ? (vid.ok || 0).toLocaleString() : "–"}</b><span>videos searchable</span></div>
                <div><b>{s ? (vid.pending || 0).toLocaleString() : "–"}</b><span>videos not yet indexed</span></div>
              </div>
            )}
            {t.status === "live" && t.href && <a className="go" href={t.href}>Open</a>}
          </div>
        ))}
      </div>
    </>
  );
}
