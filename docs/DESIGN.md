# Naturalite design language

Apple's clarity, Naturalite's warmth. The goal is calm, obvious screens: one clear title, grouped content,
quiet secondary text, and one obvious thing to do next. This applies to Naturalite OS (`naturalite-os/app/globals.css`)
and every tool inside it (for example `nms/web/static/index.html`). Both files define the same tokens; keep them in sync.

## Tokens

| Group | Token | Value | Use |
|---|---|---|---|
| Brand | `--nl-green` | `#49624d` | Titles, selected state, filled "camera take" and "High" badges, links |
| | `--nl-sage` | `#86a873` | Icons, meters, focus ring, live dot |
| | `--nl-sage-soft` / `-tint` / `-line` | `#eef4ea` / `#e3edde` / `#cfe0c6` | Selected rows and nav, default (tinted) buttons, success notes |
| | `--nl-coral` / `-hover` | `#f08154` / `#ffa986` | The single primary action on a screen. Nothing else. |
| | `--nl-coral-soft` / `-ink` | `#fdeee5` / `#b5532b` | "Most likely" badge, photo tags (data state, not action) |
| Warm neutrals | `--nl-sand` `--nl-peach` `--nl-cream` `--nl-tan` | `#f7f2ec` `#fff1df` `#ece2d0` `#fadab0` | Inset fields, chips, empty tracks, "Medium" badge |
| Surfaces | `--surface-canvas` | `#fbf9f6` | Page background (warm, never Apple grey) |
| | `--surface-panel` | `#fff` | Grouped panels and cards |
| | `--surface-hover` / `--surface-likely` | `#f8f4ee` / `#fff7ee` | Row hover, "most likely" rows |
| Text | `--nl-ink` / `--nl-body` / `--nl-muted` | `#1f2937` / `#5f6b63` / `#87918a` | Primary, secondary, captions and section labels only |
| Lines | `--nl-border` / `--nl-sep` | `#e6e9e4` / `rgba(73,98,77,.11)` | Panel outlines / 1-px separators inside panels |
| Status | info `#108474`, warn `#9a6114` on `#fdf3e1`, error `#e32c2b` on `#fdecec` | | Sound runs; gaps and "unaccounted for"; failures |
| Radius | `--r-xs 6` `--r-sm 8` `--r-md 12` `--r-lg 16` `--r-pill 999` | | Inner bits / nav and fields / media and notes / panels and cards / buttons and badges |
| Depth | `--shadow-panel`, `--shadow-raise` | | Hairline lift at rest; soft green-tinted lift on hover only |
| Focus | `--focus` | `0 0 0 3px rgba(134,168,115,.45)` | Every interactive element, via `:focus-visible` |

**Spacing:** 8-pt rhythm (4, 8, 12, 16, 24, 32, 48). Panels have 20–24 px padding with 16 px between them, and the page gutter is 32 px (16 px on phones).

**Type:** Averia Serif Libre is used *only* for the page title (34/1.15) and card titles (24). Everything else uses Figtree as the stand-in for SF:
section title 17/600, post title 20/600, body 15, data 13.5, secondary 12.5–13, captions 11–12. Section labels are 11 px uppercase with 0.08em tracking in `--nl-muted`.
Numbers use `tabular-nums`. Text never drops below 11 px, and dense data stays at 13–15 px.

## Rules

1. **One coral per screen.** Coral marks the action that finishes the job (Home: *Open*; a post: *Create project folder*).
   Everything else is a tinted sage pill (`button`) or a white hairline pill (`button.secondary`).
2. **Group, don't box.** Put content in white panels on the warm canvas. Inside a panel, separate items with 1-px `--nl-sep` lines, never heavy borders or zebra stripes.
3. **Colour means state.** Use green for structure and confirmed state, sage-soft for selection, amber for gaps, and red only for errors. Use one badge shape (20 px pill, 11.5/600) with a few tones.
4. **Hierarchy before decoration.** A large calm title sits above a one-line subtitle, sections are titled in plain words, and secondary facts are quiet. Numbered steps (1 Review, 2 Notes, 3 Project folder) show the order of work.
5. **Names stay readable.** Long file names use Finder-style middle truncation (start…end.MOV) and show the full name on hover. Posts get a human title ("Iodized Salt Walmart Edit") with the raw file name beneath.
6. **Every state is designed.** Use skeletons while loading, a friendly empty state with the sprout mark, a plain-words error with a retry, and a sticky translucent header that keeps the selected post's summary in view.
7. **Obvious interaction.** Hover tints, a 3-px sage focus ring, 32–40 px targets, and a pointer cursor only on things that act. Respect `prefers-reduced-motion`.
8. **Phones are first-class.** The sidebar becomes a top bar and the list/detail becomes push navigation ("‹ All posts"). Tables become stacked cards, and the timeline keeps its labels apart.
9. **No noise.** No gradients except a faint warm wash on the final step. No extra fonts and no frameworks: Google Fonts only, single-file tools.
