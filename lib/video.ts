// Server-side access to the Video Production backend (Modal). Never import from client components.
export const VIDEO_URL = (process.env.VIDEO_PRODUCTION_URL || "").replace(/\/$/, "");
export const VIDEO_TOKEN = process.env.VIDEO_PRODUCTION_TOKEN || "";

export type VideoStatus = {
  assets: number;
  feature_status: Record<string, Record<string, number>>;
  snapshot: string | null;
  runs: { run_id: string; reference_name: string; created_at: number; summary: Record<string, number> }[];
};

export async function videoStatus(): Promise<VideoStatus | null> {
  if (!VIDEO_URL || !VIDEO_TOKEN) return null;
  try {
    const r = await fetch(`${VIDEO_URL}/api/status`, { headers: { "x-nms-token": VIDEO_TOKEN }, next: { revalidate: 60 } });
    if (!r.ok) return null;
    return (await r.json()) as VideoStatus;
  } catch {
    return null;
  }
}
