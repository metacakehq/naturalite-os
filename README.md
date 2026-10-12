# Naturalite OS

One web application for every internal Naturalite tool. This repository is the shell: the home
page, the menu, and (later) sign-in. Each tool keeps its own repository and backend; the OS gives
it an area and talks to it over its JSON routes.

| Area | Status | Where it lives |
| --- | --- | --- |
| Video Production | live | [naturalite-media-system](https://github.com/metacakehq/naturalite-media-system) on Modal |
| Content Analysis | coming soon | separate project |

## Run it

```bash
npm install
cp .env.example .env.local     # fill in the Video Production URL and token
npm run dev                    # http://localhost:3000
```

Deploy: import this repository into Vercel, set the two environment variables, done. Turn on
Vercel's deployment protection (team sign-in) until proper sign-in is added to the shell.

## Adding a tool

1. Add an entry to `lib/tools.ts` (name, one-sentence blurb, status, route).
2. Add `app/<slug>/page.tsx`. Embed the tool through a same-origin proxy under `app/api/tools/<slug>/`
   like Video Production does, so its token stays server-side, or build the screens here against
   its JSON API.
3. Keep the shared look (left menu, cards, same type and colours) and plain words: editors and
   marketers use this, not engineers.

See `docs/OS.md` for the longer plan.
