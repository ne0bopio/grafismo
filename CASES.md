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

### Pending queue (as of 2026-07-07)

- **Symrise** — brief + assets staged, case copy exists but no editorial story yet.
- **J&J corporate** ("Healthcare Experience Systems") — Óscar's brief suggests a
  second J&J case (totems, señalización, activaciones). All assets staged.
- **Gobernación** — `draft: true`, hidden from the site.

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
