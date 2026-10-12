// Same-origin proxy to the Video Production backend. The token is added here, server-side, so the
// browser never sees it. Redirects (media previews go to short-lived Dropbox links) pass through.
import { NextRequest } from "next/server";
import { VIDEO_URL, VIDEO_TOKEN } from "@/lib/video";

export const dynamic = "force-dynamic";

async function proxy(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  if (!VIDEO_URL || !VIDEO_TOKEN) return new Response("Video Production backend not configured", { status: 503 });
  const { path } = await params;
  const target = `${VIDEO_URL}/${path.join("/")}${req.nextUrl.search}`;
  const headers = new Headers();
  for (const h of ["content-type", "accept", "range"]) { const v = req.headers.get(h); if (v) headers.set(h, v); }
  headers.set("x-nms-token", VIDEO_TOKEN);
  const res = await fetch(target, {
    method: req.method, headers, redirect: "manual",
    body: req.method === "GET" || req.method === "HEAD" ? undefined : await req.arrayBuffer(),
  });
  const out = new Headers();
  for (const h of ["content-type", "location", "cache-control", "content-length", "accept-ranges", "content-range"]) { const v = res.headers.get(h); if (v) out.set(h, v); }
  return new Response(res.body, { status: res.status, headers: out });
}

export { proxy as GET, proxy as POST, proxy as PUT, proxy as DELETE };
