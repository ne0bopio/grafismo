"use client";

import { useId, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";
import { clients, type Client } from "@/data/clients";

/** Fast mode multiplies the reel's CSS animation instead of swapping its
    duration: changing `animation-duration` mid-run jumps the track to a new
    position, while `playbackRate` on the running CSSAnimation keeps it where
    it is and just speeds it up. */
const FAST_RATE = 6;

/* Logos arrive in every shape and colour (Oxxo's red box, Diaco's yellow
   square, J&J's script), so they sit on cream tiles instead of straight on
   the ink band — white-silhouetting them would fill in the boxed ones. The
   tile also keeps the reel's rhythm even: every client takes the same slot.
   Full colour on purpose: grayscale washed out the pale marks (Terranum's
   copper wordmark, Thym's gold) until they disappeared into the tile. */
function LogoTile({ client }: { client: Client }) {
  return (
    <div
      className="shrink-0 w-[164px] h-[80px] md:w-[200px] md:h-[96px] rounded-[6px] bg-[var(--cream)] flex items-center justify-center px-5"
      title={client.name}
    >
      {client.logo ? (
        // Plain <img>: tiny pre-trimmed PNGs, and next/image's wrapper fights
        // the max-width/max-height fit that keeps square and wide marks level.
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          decoding="async"
          className="block max-w-full max-h-[44px] md:max-h-[54px] w-auto h-auto object-contain"
        />
      ) : (
        <span className="text-center text-[10.5px] md:text-[11.5px] leading-tight font-medium uppercase tracking-[0.1em] text-[var(--ink)] opacity-80">
          {client.name}
        </span>
      )}
    </div>
  );
}

/** One full pass of the list. */
function Run({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 pr-3 md:pr-4" aria-hidden={ariaHidden}>
      {clients.map((c) => (
        <LogoTile key={c.name} client={c} />
      ))}
    </div>
  );
}

const buttonClass =
  "shrink-0 inline-flex items-center gap-2 h-8 px-3 rounded-full border font-mono-g text-[10.5px] tracking-[0.18em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cream)]";

export function ClientLogoStrip({ dict }: { dict: Dict }) {
  const c = dict.home.clients;
  const [fast, setFast] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  function toggleFast() {
    const next = !fast;
    trackRef.current?.getAnimations().forEach((a) => {
      a.playbackRate = next ? FAST_RATE : 1;
    });
    setFast(next);
  }

  return (
    <section className="bg-[var(--ink)] text-[var(--cream)] border-y border-[var(--ink)]" aria-label={c.label}>
      {/* Phone: label and controls share the top row, the reel runs full width
          beneath. Desktop: label | reel | controls on one row. `md:contents`
          dissolves the wrapper from md up so the order-* classes can place the
          label and the controls either side of the reel. */}
      <div className="max-w-[1440px] mx-auto px-[max(5vw,32px)] py-6 md:py-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <div className="order-1 w-full md:w-auto flex flex-wrap items-center justify-between gap-3 md:contents">
          <span className="md:order-1 font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.7)] shrink-0">
            {c.label}
          </span>

          <div className="md:order-3 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleFast}
              aria-pressed={fast}
              className={`${buttonClass} motion-reduce:hidden ${
                fast
                  ? "bg-[var(--cream)] text-[var(--ink)] border-[var(--cream)]"
                  : "border-[rgba(244,241,234,0.35)] text-[var(--cream)] hover:border-[var(--cream)]"
              }`}
            >
              <span aria-hidden="true">»</span>
              {c.fast}
            </button>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              aria-controls={panelId}
              className={`${buttonClass} ${
                showAll
                  ? "bg-[var(--cream)] text-[var(--ink)] border-[var(--cream)]"
                  : "border-[rgba(244,241,234,0.35)] text-[var(--cream)] hover:border-[var(--cream)]"
              }`}
            >
              {showAll ? c.close : `${c.all} (${clients.length})`}
            </button>
          </div>
        </div>

        {/* The reel. Three identical runs slide left by exactly one run width
            (a third of the track), so when run A exits, run B is pixel-aligned
            where it started — a seamless loop with no JS measurement. One run
            of 24 tiles is ~5200px, so two would do; the third costs nothing.
            The extra runs are aria-hidden so screen readers hear the list once.
            md:basis-0 + grow lets the reel take the leftover row width instead
            of forcing its own line with its huge content size. */}
        <div className="marquee marquee-bleed order-2 w-full md:w-auto md:grow md:basis-0 min-w-0">
          <div ref={trackRef} className="marquee-track">
            <Run />
            <Run ariaHidden />
            <Run ariaHidden />
          </div>
        </div>

        {/* Every client at once, for someone who doesn't want to wait for the
            reel. Stays in the band so the page doesn't jump to a modal. */}
        <div id={panelId} hidden={!showAll} className="order-3 w-full pt-2">
          <ul className="grid grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {clients.map((cl) => (
              <li key={cl.name} className="[&>div]:w-full">
                <LogoTile client={cl} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
