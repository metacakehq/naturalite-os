export const dynamic = "force-dynamic"; // live numbers from the tools on every request

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { tools } from "@/lib/tools";
import { videoStatus } from "@/lib/video";
import { NavItem } from "./nav-item";

export const metadata: Metadata = { title: "Naturalite OS", description: "Every internal Naturalite tool in one place." };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const s = await videoStatus();
  const vid = s?.feature_status?.video || {};
  const img = s?.feature_status?.image || {};
  const foot = s
    ? `Library: ${s.assets.toLocaleString()} files\n${(vid.ok || 0).toLocaleString()} videos, ${(img.ok || 0).toLocaleString()} images searchable`
    : "Video Production backend not connected";
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <nav>
            <Link className="brand" href="/"><img src="/marks/promise-cream.svg" alt="" /><span><span className="name">Naturalite OS</span><small>Internal tools</small></span></Link>
            <NavItem href="/" label="Home" />
            <div className="group">Tools</div>
            {tools.filter(t => t.href).map(t => <NavItem key={t.slug} href={t.href!} label={t.name} soon={t.status !== "live"} />)}
            <div className="foot">{foot}</div>
          </nav>
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
