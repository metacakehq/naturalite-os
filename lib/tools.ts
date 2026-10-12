// The tool registry. Adding a tool to the OS = one entry here + its area page under app/<slug>/.
export type ToolStatus = "live" | "soon" | "later";
export type Tool = {
  slug: string;
  name: string;
  blurb: string;          // plain words, one sentence
  status: ToolStatus;
  href?: string;          // area route inside the OS
};

export const tools: Tool[] = [
  {
    slug: "video-production",
    name: "Video Production",
    blurb: "Finds the camera originals, photos and earlier edits behind each finished post. Review, then create a project folder for the editor.",
    status: "live",
    href: "/video-production",
  },
  {
    slug: "content-analysis",
    name: "Content Analysis",
    blurb: "What is working in organic posts and why. Built separately; plugs in here next.",
    status: "soon",
    href: "/content-analysis",
  },
  {
    slug: "more",
    name: "More tools",
    blurb: "Promo calendar, asset requests, reporting. Each new tool becomes an area in the menu.",
    status: "later",
  },
];
