# Naturalite OS

One web application for every internal Naturalite tool. Each tool is an *area* with its own
menu entry, and the first area is **Video Production** (this repository).

## Areas

| Area | Status | What it does |
| --- | --- | --- |
| Home | live | Overview cards for every tool with live numbers |
| Video Production | live | Finds the camera originals, photos and earlier edits behind each finished post; review; project folders for editors |
| Content Analysis | planned | Organic post-content analysis (being built in a separate project); plugs in as the next area |
| More | later | Promo calendar, asset requests, reporting |

## How it is put together

Phase 1: the Video Production app on Modal carried a temporary home page and menu. Home,
navigation and the Video Production area live in one page (`nms/web/static/index.html`) backed by
the FastAPI routes in `nms/web/app.py`. Access is a login token in the link.

Phase 2 (this repository): the shell is a small Next.js app on Vercel that owns
sign-in (Google sign-in for team accounts), the home page and the menu. Each tool keeps its own
backend where it belongs: Video Production stays on Modal because it needs ffmpeg and parallel
workers; Content Analysis brings its own. The shell talks to each backend over its JSON API, so
the Video Production routes under `/api/...` here are already the contract.

Rules for adding an area:
1. It gets a menu entry, a home card with two or three live numbers, and a route.
2. It uses the shared look (left menu, cards, same type and colours) so the OS feels like one thing.
3. Its backend exposes a JSON API the shell calls; no tool reaches into another tool's storage.
4. Plain words in the interface: editors and marketers use it, not engineers.

## Look

Light, calm, green accent (Naturalite is a food brand). Dark left menu with the OS name, light
content area with white cards. Brand colours and the logo can replace the placeholders in the
`:root` variables and the brand block at the top of the page.
