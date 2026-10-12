// The tool's root page (iframe src) lands here; everything deeper goes to [...path].
import { NextRequest } from "next/server";
import { VIDEO_URL, VIDEO_TOKEN } from "@/lib/video";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  if (!VIDEO_URL || !VIDEO_TOKEN) return new Response("Video Production backend not configured", { status: 503 });
  const res = await fetch(`${VIDEO_URL}/${req.nextUrl.search}`, { headers: { "x-nms-token": VIDEO_TOKEN } });
  return new Response(res.body, { status: res.status, headers: { "content-type": res.headers.get("content-type") || "text/html" } });
}
