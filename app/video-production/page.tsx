import { VIDEO_URL, VIDEO_TOKEN } from "@/lib/video";

export default function VideoProduction() {
  const ready = Boolean(VIDEO_URL && VIDEO_TOKEN);
  return (
    <>
      <div className="topbar"><h1>Video Production</h1><span className="crumb">Find the original footage behind each finished post, review it, and hand editors a project folder.</span></div>
      {ready
        ? <iframe className="frame" src="/api/tools/video/#video" title="Video Production" allow="fullscreen" />
        : <div className="notice">Set VIDEO_PRODUCTION_URL and VIDEO_PRODUCTION_TOKEN in the project's environment variables to connect this tool.</div>}
    </>
  );
}
