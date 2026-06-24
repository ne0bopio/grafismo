"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { projectPath } from "@/lib/routes";
import type { Lang, Sector } from "@/data/projects";

const tileSlugs = [
  "johnson-johnson",
  "terranum",
  "cardinal-health",
  "proclin-pharma",
  "oxxo",
] as const;

const sectorColor: Record<Sector, string> = {
  pharma: "var(--pharma)",
  retail: "var(--retail)",
  corporate: "var(--industrial)",
  public: "var(--ink)",
};

const DWELL_MS = 5000;

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}

export function HeroShowcase({ lang }: { lang: Lang }) {
  const tiles = tileSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const reduce = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = tiles.length;

  // Auto-advance. `active` is in the deps so the timer restarts on every
  // change — a manual click gives the chosen image a full dwell.
  useEffect(() => {
    if (paused || reduce || count <= 1) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % count),
      DWELL_MS,
    );
    return () => clearInterval(id);
  }, [paused, reduce, count, active]);

  const current = tiles[active];
  if (!current) return null;

  const copy = lang === "es" ? current.es : current.en;
  const accent = sectorColor[current.sector];
  const viewLabel = lang === "es" ? "Ver proyecto" : "View project";

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ---- Featured image ---- */}
      <Link
        href={projectPath(lang, current.slug)}
        aria-label={`${viewLabel}: ${copy.title}`}
        className="group block relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--cream-3)]"
      >
        {/* Slides stay stacked; cross-fade by opacity so exactly one shows. */}
        {tiles.map((t, i) => {
          const tcopy = lang === "es" ? t.es : t.en;
          const isActive = i === active;
          return (
            <div
              key={t.slug}
              className="absolute inset-0 transition-opacity duration-[600ms] ease-in-out"
              style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
            >
              <div
                className={`absolute inset-0 ${isActive && !reduce ? "hero-kenburns" : ""}`}
              >
                {t.coverImage && (
                  <Image
                    src={t.coverImage}
                    alt={tcopy.title}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    priority={i === 0}
                    // Eager-load the non-priority slides so each is decoded
                    // before the carousel cross-fades to it (no blank frame).
                    {...(i !== 0 ? { loading: "eager" as const } : {})}
                    // Serve the raw files (no on-the-fly optimization). The image
                    // optimizer intermittently emits a broken large variant for
                    // some sources (e.g. the portrait Terranum cover), leaving the
                    // featured frame blank at wide viewports. Covers are web-sized.
                    unoptimized
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* hover gradient + cue */}
        <span
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,16,20,0) 55%, rgba(14,16,20,0.5) 100%)",
          }}
        />
        <span className="absolute right-4 bottom-4 z-10 font-mono-g text-[11px] tracking-[0.12em] uppercase text-[var(--cream)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
          {viewLabel} →
        </span>

        {/* inset frame (brand chrome) */}
        <span className="absolute inset-[14px] z-10 border border-[rgba(14,16,20,0.14)] pointer-events-none" />

        {/* auto-advance progress bar — keyed to `active` so it restarts each change */}
        {!reduce && count > 1 && (
          <span
            key={active}
            className="hero-progress absolute left-0 bottom-0 z-10 h-[3px] w-full"
            style={{
              background: accent,
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        )}
      </Link>

      {/* ---- Caption (below image, not overlaid) ---- */}
      <div className="mt-4 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <span
            className="inline-flex items-center gap-2 font-mono-g text-[10px] font-medium tracking-[0.14em] uppercase"
            style={{ color: accent }}
          >
            <span
              className="inline-block w-1.5 h-1.5"
              style={{ background: accent }}
            />
            {copy.industry.split(" · ")[0]}
          </span>
          <div className="font-display italic text-[clamp(24px,2.4vw,34px)] leading-[1] tracking-[-0.02em] text-[var(--ink)] mt-1.5 truncate">
            {copy.title}
          </div>
        </div>
        <span className="flex-none font-mono-g text-[10px] tracking-[0.12em] text-[var(--stone)] pb-1">
          {current.number} · {current.years}
        </span>
      </div>

      {/* ---- Thumbnail strip ---- */}
      <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-2.5">
        {tiles.map((p, i) => {
          const tcopy = lang === "es" ? p.es : p.en;
          const isActive = i === active;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-label={tcopy.title}
              aria-current={isActive}
              className="group relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--cream-3)] focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: sectorColor[p.sector] }}
            >
              {p.coverImage && (
                <Image
                  src={p.coverImage}
                  alt={tcopy.title}
                  fill
                  sizes="120px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* dim inactive thumbs */}
              <span
                className="absolute inset-0 transition-colors duration-300"
                style={{
                  background: isActive ? "transparent" : "rgba(242,241,236,0.5)",
                }}
              />
              {/* active underline */}
              <span
                className="absolute left-0 right-0 bottom-0 h-[3px] transition-opacity duration-300"
                style={{
                  background: sectorColor[p.sector],
                  opacity: isActive ? 1 : 0,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
