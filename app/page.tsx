export const dynamic = "force-dynamic"; // live numbers from the tools on every request

import { tools } from "@/lib/tools";
import { videoStatus } from "@/lib/video";
import { Icon } from "./icons";

export default async function Home() {
  const s = await videoStatus();
  const vid = s?.feature_status?.video || {};
  // one per finished post (re-runs of the same post count once), matching the tool's own list
  const posts = s ? new Set(s.runs.map(r => (r as { reference_file_id?: string }).reference_file_id || r.reference_name)).size : 0;
  return (
    <>
      <div className="topbar"><h1>Welcome back</h1><span className="crumb">Everything Naturalite runs on, in one place.</span></div>
      <div className="cards">
        {tools.map(t => (
          <div key={t.slug} className={"card" + (t.status === "live" ? "" : " soon")}>
            <div className="card-top">
              <span className="icon"><Icon name={t.slug} /></span>
              <span className={"pill" + (t.status === "live" ? " live" : " grey")}>{t.status === "live" ? "Live" : t.status === "soon" ? "Coming soon" : "Later"}</span>
            </div>
            <h3>{t.name}</h3>
            <p>{t.blurb}</p>
            {t.slug === "video-production" && (
              <div className="stats">
                <div><b>{s ? posts : "–"}</b><span>finished posts matched</span></div>
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
