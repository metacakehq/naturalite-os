import type { NextConfig } from "next";
const nextConfig: NextConfig = { reactStrictMode: true, skipTrailingSlashRedirect: true };  // the embedded tool lives at /api/tools/video/ (slash matters for its relative URLs)
export default nextConfig;
