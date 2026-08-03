# Case guide — grafismobusiness.com

How the project cases work, where everything lives, and how to change one.
Written for a future session (human or AI) picking this up cold.

**Live site:** https://grafismobusiness.com · Deploys automatically when `master`
is pushed to `github.com/ne0bopio/grafismo` (Vercel). DNS is on GoDaddy.

**Golden rules (from Juan / client feedback):**
1. **Never crop a composed sheet or a sign.** If an image has text or logos at
   its edges (case sheets, storefront signs), it must render whole — use
   `coverFit: "contain"` and/or the image's native aspect ratio.
2. **Real photography over mockups.** Óscar (the client) wants "imágenes que
   hablen por sí solas" — editorial presentation of his polished assets, not
   raw phone shots. AI-recreated scenes are allowed only if Óscar produced
   them and they stay labeled as recreations (e.g. the Ethicon training scene).
3. **Commits are authored by Juan only** (`Juan P. Moncada <pablomv97@icloud.com>`),
   never with an AI co-author line.

## Where things live

| What | Where |
| --- | --- |
| All case data + copy (ES/EN) | `src/data/projects.ts` — the single source of truth |
| Editorial story renderer | `src/components/CaseStory.tsx` |
| Case page (cover, challenge, story) | `src/components/ProjectCase.tsx` |
| Home hero carousel | `src/components/HeroShowcase.tsx` (`tileSlugs` + the `grid-cols-6` thumb strip — keep the class in sync with the tile count) |
| Home featured band outcome lines | `src/lib/i18n.ts` (`jjOutcome`, `cardinalOutcome`, `terranumOutcome`, `horowitzOutcome`) |
| Web-ready images | `public/images/projects/<slug>/` (covers) and `.../story/` (spread images) |
| Raw client assets (originals) | `reference/<case>-<date>/` — **gitignored, local-only on Juan's MacBook. Never delete; this is the provenance.** |
| Old-case redirects | `next.config.ts` (`/proyectos/proclin-pharma` → `regulatory-packaging`, 308) |

### Raw-asset folders in `reference/`

Each folder is one client drop, usually containing Óscar's brief (`.docx`),
his composed layout sheet (`hero.png` — treat as layout spec, it's usually
1024px and too small for the site), plus `por si acaso` raw photos.

- `regulatorios-usa-2026-07-01` — Regulatorio case (merged Proclin here)
- `oxxo-hero-fotos-2026-07-01` — OXXO rebuild
- `horowitz-2026-07-03` — Horowitz (incl. `nocturno.MP4` / `instalacion.MP4` video sources for night frames)
- `jj-ethicon-2026-07-06` — Ethicon (done) **and** the pending J&J corporate case (`HERO JHONSON Y FOTOS FINALES/` + `Textos Jhonson.docx` + `POR SI ACASO/`)
- `terranum-2026-07-07` — Terranum rebuild
- `oscar-polished-2026-06-30` — earlier polished batch; **contains the pending Symrise brief + assets**
- `*-client-assets-2026-06` — first-round drops (kept for provenance)

### Pending queue (as of 2026-08-01)

- **Symrise** — brief + assets staged, case copy exists but no editorial story yet.
- **J&J corporate** ("Healthcare Experience Systems") — Óscar's brief suggests a
  second J&J case (totems, señalización, activaciones). All assets staged.
- **Gobernación** — `draft: true`, hidden from the site.
- **Real testimonials** — see below. ⚠️ The three quotes live on the site today
  are placeholders, not real client voices.

## Testimonials — the Validación section

The `Validación / Validation` section (home, section 009) renders three quote
cards. **The copy currently there is invented placeholder text** with anonymous
attributions ("Director Técnico · Farmacéutico · CO"). Juan asked Óscar for real
ones on 2026-08-01; decision was to leave the placeholders up until the real
ones land, then swap in one deploy.

Everything is copy-only — no component changes needed:

| What | Where |
| --- | --- |
| Card markup (3 × `ValCard`) | `src/components/HomePage.tsx` (~line 319) — quote / who / sector, tones `pharma`, `retail`, `industrial` |
| ES copy | `src/lib/i18n.ts` → `es.home.validate` (`q1/who1/sector1` … `q3`) |
| EN copy | `src/lib/i18n.ts` → `en.home.validate` — same keys |

To swap:

1. Replace `q1..q3`, `who1..who3`, `sector1..sector3` in **both** `es` and `en`.
2. Óscar is expected to send **Spanish only** — the EN strings are then *our*
   translation of his client's words, not the client's own. Translate faithfully
   and keep names/roles/companies verbatim (don't localize a job title into
   something the person never said).
3. Confirm with Óscar, per quote: the person's **name, role, company, and that
   they consent to being quoted publicly**. If a client will only be attributed
   by role ("Director Técnico, farmacéutica multinacional"), that's fine — but it
   must be a real quote from a real person, not a composite.
4. If fewer than three real quotes arrive, drop the card count rather than
   padding with placeholders — the grid is `md:grid-cols-3`, so update the class
   to match (`md:grid-cols-2`) and delete the unused i18n keys.
5. Verify ES + EN, then `npx tsc --noEmit` and `npm run build` as usual.

## Home page order & the motion system

Section order is defined by JSX order in `src/components/HomePage.tsx`, and the
`00N` badges come from `num:` in `src/lib/i18n.ts` (**both** `es` and `en`).
They are not derived — reorder the JSX and you must renumber by hand.

Current order (2026-08-02): hero `001` → client reel → **Liderazgo `002`** →
**Validación `003`** → Proyectos destacados `004` → Impacto `005` →
Metodología `006` → Proyección `007` → Contacto `008`.

Liderazgo was moved directly under the hero because the hero already carries the
project carousel, so Proyectos destacados right beneath it read as the same
content twice. Leading with the person is the point — don't move it back down
without solving that repetition another way. Validación follows it so the
testimonials back the person immediately, before the work is shown.

⚠️ That places the **placeholder testimonials** in the second slot on the page.
See the testimonials section above — swapping in Óscar's real quotes is now
higher-stakes than when they sat two-thirds of the way down.

**Unrendered i18n blocks.** `about` (`004`), `sectors` (`005`) and now
`mensaje`/"Enfoque" (`003`) still carry `num:` values but render nowhere.
`sectors` feeds the footer tags; `about` and `mensaje` are unused entirely.
Their numbers are stale and some now collide with live ones — ignore them,
they are not part of the on-page sequence. The Enfoque section was cut on
2026-08-02 for being a wall of type; its strings were kept so it can be
restored, at the cost of a little dead weight in the serialized dict.

### Client reel (marquee)

`ClientLogoStrip` is a CSS-only marquee: `.marquee` / `.marquee-track` in
`globals.css`. The track holds **three identical runs** and slides left by
`-33.3333%` — exactly one run — so the loop is seamless with no JS and no
measurement.

**Keep the run count and the translate percentage in sync**: the translate must
equal `100 / <run count>`%. And do not drop to two runs — one run measures
~910px while the visible track on a 1920px display is ~940px, so two runs leave
a visible gap at the right edge at the loop point. Rule: `runWidth × (runs − 1)`
must exceed the widest possible visible track.

Only the first run is exposed to assistive tech; the duplicates are
`aria-hidden`, and under `prefers-reduced-motion: reduce` they're hidden
entirely so the strip degrades to a plain static list. Edge fade is a
`mask-image`, not a coloured gradient overlay, so it survives a background
change. Hovering pauses the reel so a name can actually be read.

### Scroll reveals — `sd-*` classes in `globals.css`

The leadership block reveals on scroll using **native CSS scroll-driven
animations** (`animation-timeline: view()`), not JS. Classes: `.sd-rise`
(fade + lift), `.sd-stagger > *` (children deal out in sequence, one timeline
each), `.sd-portrait` (frame wipes open) and `.sd-portrait-img` (image resolves
from near-grey to full colour). The page stays a server component — no
`"use client"`, no IntersectionObserver.

Applied across the whole page, not just one section: `.sd-line` on every
SectionHead hairline (the connective pulse), `.sd-wipe-up` on every display
heading, `.sd-stagger` on the card grids (featured, validación, impacto), and
`.sd-rise` on supporting copy and CTAs.

Five traps, all already handled — don't undo them:

1. **Lightning CSS silently drops the block if `@keyframes` sit inside
   `@media` + `@supports`.** Keyframes must stay at the top level and the
   at-rules must not nest. The failure is invisible: the build succeeds, the
   compiled chunk just has no rule. Verify with
   `curl -s localhost:3000/_next/static/chunks/<hash>.css | grep sd-rise`.
2. **The base classes carry no starting state** (no bare `opacity: 0`). Firefox
   has no `animation-timeline` support yet, so it simply never matches the
   `@supports` block and gets the finished page. Adding `opacity: 0` to the
   base class would leave the whole section invisible there.
3. `@media (prefers-reduced-motion: reduce)` kills the animations; safe for the
   same reason as (2).
4. **Every `animation-range` is written as bare percentages** (`8% 34%`), which
   are relative to the whole cover range. Do not use the `entry`/`cover`
   keyword forms: Lightning CSS rewrites them and changes their meaning.
   Observed concretely — `entry 0% cover 12%` was minified to the mixed form
   `entry cover 12%`, and `entry 30% entry 100%` was collapsed to `entry 30%`,
   which silently moves the end to the full timeline. Bare percentages survive
   minification untouched. Check with
   `curl -s <css-url> | grep -oE "animation-range:[^;]*"`.
5. **Short elements need cover-relative ranges.** An `entry`-relative range on a
   1px hairline spans 1px of scroll, so the animation completes instantly and
   looks like nothing happened. This is why `.sd-line` reveals over `0% 12%`
   of cover (~110px of scroll) instead. The same bit us on the contact info
   rows, which is why they use a single `.sd-rise` on the container rather than
   `.sd-stagger` over ~20px-tall children.

### Verifying motion (the Browser pane can't)

The in-app Browser pane runs at **zero viewport height when hidden**, which makes
every `ViewTimeline` inactive (`currentTime: null`) and returns blank
screenshots. Scroll-driven work cannot be verified there. Use headless Chrome:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --hide-scrollbars --window-size=1280,9000 \
  --virtual-time-budget=25000 --screenshot=full.png http://localhost:3000/
```

**A tall window is NOT a valid resolved-state check for cover-relative ranges.**
With a 9000px window the page never scrolls, so an element low on the page sits
at only ~20% of its cover range and renders mid-animation — the contact heading
showed up permanently clipped to one line this way, with nothing actually wrong.
Tall windows were fine back when the ranges were `entry`-relative; they are not
now. Verify at a real 900px viewport, scrolled.

To scroll the real page headlessly, drop a throwaway `public/__probe.html` that
iframes `/` at 1280x900 and scrolls `contentWindow` (same-origin, so it can
drive the page), then screenshot the probe. **Delete it when done** — it is
served publicly. Do not trust `--dump-dom` for animation state: it reports
pre-scroll `getComputedTiming()` values (elements far above the viewport
reporting `progress: 0`). Screenshots force a paint and are truthful.

Also: **check motion against `npm run build` + `next start`, not `next dev`.**
`MethodSteps` starts at `opacity: 0` and reveals via IntersectionObserver after
hydration; in dev the headless snapshot regularly beats hydration and the five
steps look missing. They render fine in a production build.

## Óscar's LinkedIn

Profile URL is a single constant, `OSCAR_LINKEDIN` in `src/lib/routes.ts`.
Change it there and all three uses follow:

- Leadership section CTA ("Perfil completo en LinkedIn →" / "Full profile on
  LinkedIn →") — `src/components/HomePage.tsx`. This CTA used to point at the
  projects index; it now goes to the profile, which is what the label promised.
- Footer contact column — `src/components/Footer.tsx`, glyph + label
  (`dict.footer.linkedin`).

Both use `src/components/LinkedInMark.tsx` — one shared glyph, `currentColor`
so it works on cream and on the ink footer without a variant, `aria-hidden`
because the adjacent text already names the destination. Add the mark from
there rather than pasting the path a third time.
- JSON-LD `Person.sameAs` — `src/app/layout.tsx`, so search engines tie the
  profile to the site.

## Anatomy of a case (`src/data/projects.ts`)

Key `Project` fields beyond the copy:

- `coverImage` — case cover + listing/featured tiles.
- `coverRatio` — aspect of the case-page cover frame (e.g. `"3 / 2"`); defaults 16:9.
- `coverFit: "contain"` — renders the cover uncropped on a cream card
  everywhere (case page, hero tile, projects index, featured band). Use for
  composed sheets (Cardinal, Terranum).
- `heroImage` — optional hero-carousel override when the cover shouldn't be
  the carousel tile (OXXO uses it).
- `story: StoryBlock[]` — the editorial spread. **When present it replaces the
  generic gallery** (`galleryImages` stays in the file but is not rendered).
  Block kinds: `intro` (eyebrow/title/lead/services), `chapter`
  (index/eyebrow/title/lead), `feature` (full-width image), `split`
  (image + text column, `flip` swaps sides), `grid` (cells with `span` of 12
  and per-cell `ratio`). All copy is bilingual `{ es, en }`.
- Grid/feature frames crop with `object-cover` at the given `ratio` —
  center-crop. So: give croppable photos any ratio, but give signs/sheets
  their **native ratio** so nothing is cut (see Horowitz `install-mounting`
  at 16:9, comment in file).

## Image pipeline (ImageMagick, installed via brew)

- Photos: `magick in.jpg -auto-orient -resize 1600x -quality 78 out.jpg`
  (portraits ~1100–1200w, features ~1800–1900w). Always `-auto-orient` —
  many client photos carry EXIF rotation.
- Transparent cutouts → white product cards (speck-safe):
  `magick in.png \( +clone -alpha extract -morphology Open Disk:10 \) -compose CopyOpacity -composite -compose Over -background white -flatten -fuzz 4% -trim +repage -bordercolor white -border 8% -gravity center -background white -extent "%[fx:max(w,h*4/3)]x%[fx:max(h,w*3/4)]" -resize 1200x900 -quality 82 out.jpg`
  (the `-compose Over` reset matters — without it `-flatten` inherits CopyOpacity and the output breaks).
- Video frames: `ffmpeg -ss <t> -i in.MP4 -frames:v 1 -q:v 2 out.jpg`, then scan
  timestamps until the *whole* sign/subject is in frame (see golden rule 1).
- CMYK print files render wrong on the web — convert via PNG intermediate or
  `sips --deleteColorManagementProperties`.

## Changing a case, start to finish

1. Unzip the client drop; read Óscar's `.docx` brief first (it defines the
   chapter structure), then eyeball every image (`sips`/`magick` thumbnails).
2. Copy the drop into `reference/<case>-<YYYY-MM-DD>/`.
3. Process web-ready images into `public/images/projects/<slug>/story/`.
4. Edit the project entry in `src/data/projects.ts` (story + copy, ES and EN).
   If the case enters/leaves the hero, update `tileSlugs` and the
   `grid-cols-N` class in `HeroShowcase.tsx`; if featured-band copy changes,
   update the outcome line in `src/lib/i18n.ts`.
5. Verify: `npx tsc --noEmit`, then preview via `.claude/launch.json`
   (server name `grafismo`, port 3000) — check ES + ES→EN routes, that every
   story image loads, no console errors, and screenshots of anything with
   text at the edges. Then `npm run build`.
6. Commit as Juan (rule 3), push `master` — Vercel deploys.

## Known kept-but-unused files (not junk, don't re-add references)

- `public/images/projects/{oxxo,terranum,horowitz-pharmacy}/cover.jpg` — old
  covers superseded by the 2026-07 rebuilds; kept so nothing external 404s.
- `public/images/grafismo-{icon,full}.svg` — brand vector masters.
- `galleryImages` arrays + `gallery` copy labels — unrendered when a `story`
  exists; kept as fallback data.
