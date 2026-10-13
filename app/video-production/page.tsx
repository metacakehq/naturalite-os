import { VIDEO_URL, VIDEO_TOKEN } from "@/lib/video";

export default function VideoProduction() {
  const ready = Boolean(VIDEO_URL && VIDEO_TOKEN);
  return (
    <>
      <div className="topbar"><h1>Video Production</h1><span className="crumb">Find the original footage behind each finished post, review it, and hand editors a project folder.</span></div>
      {ready
        ? <iframe className="frame" src="/api/tools/video/#video" title="Video Production" allow="fullscreen" />
        : <div className="notice">Set <code>VIDEO_PRODUCTION_URL</code> and <code>VIDEO_PRODUCTION_TOKEN</code> in the project&apos;s environment variables to connect this tool.</div>}
    </>
  );
}
