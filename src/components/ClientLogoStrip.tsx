"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Dict } from "@/lib/i18n";
import { clients, type Client } from "@/data/clients";

/** Drift speed while nobody touches the reel, in px per second. */
const DRIFT = 30;
/** How long the reel waits after the last touch, drag, wheel or click before
    it starts drifting again. */
const RESUME_AFTER_MS = 3500;

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
          draggable={false}
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

// No display utility here: each button sets its own, so the arrows' `hidden
// md:inline-flex` isn't overridden by a base `inline-flex` on phones.
const pillClass =
  "shrink-0 items-center justify-center h-9 rounded-full border font-mono-g text-[10.5px] tracking-[0.18em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cream)]";
const pillIdle = "border-[rgba(244,241,234,0.35)] text-[var(--cream)] hover:border-[var(--cream)]";
const pillOn = "bg-[var(--cream)] text-[var(--ink)] border-[var(--cream)]";

export function ClientLogoStrip({ dict }: { dict: Dict }) {
  const c = dict.home.clients;
  const [showAll, setShowAll] = useState(false);
  const [dragging, setDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  /** Epoch ms before which the drift stays paused. */
  const pausedUntil = useRef(0);
  const hovering = useRef(false);
  const panelId = useId();

  const hold = () => {
    pausedUntil.current = Date.now() + RESUME_AFTER_MS;
  };

  /* The reel is three identical runs in a native scroller, parked on the middle
     one. Whenever the position gets more than half a run away from the middle,
     it jumps by exactly one run — the content there is identical, so the jump
     is invisible and the list never runs out in either direction. The jump
     only happens while nobody is actively scrolling: rewriting scrollLeft
     mid-swipe would kill the phone's momentum. */
  useEffect(() => {
    const el = scrollerRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let runW = 0;
    let pos = 0; // float position; scrollLeft alone rounds away a slow drift
    let lastScrollEvent = 0;
    let lastT = performance.now();
    let raf = 0;

    const measure = () => {
      const runs = track.children as HTMLCollectionOf<HTMLElement>;
      const next = runs[1].offsetLeft - runs[0].offsetLeft;
      if (!next) return;
      const offset = runW ? el.scrollLeft - runW : 0;
      runW = next;
      el.scrollLeft = runW + offset;
      pos = el.scrollLeft;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const onScroll = () => {
      lastScrollEvent = performance.now();
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    const tick = (t: number) => {
      const dt = Math.min(t - lastT, 64) / 1000;
      lastT = t;
      const drifting =
        !reduceMotion &&
        !hovering.current &&
        Date.now() > pausedUntil.current &&
        document.visibilityState === "visible";

      if (drifting && runW) {
        // Someone scrolled since the last frame (wheel, keyboard): follow them.
        if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft;
        pos += DRIFT * dt;
        el.scrollLeft = pos;
      } else {
        pos = el.scrollLeft;
      }

      const idle = t - lastScrollEvent > 180;
      if (runW && (drifting || idle)) {
        if (pos > runW * 1.5) pos -= runW;
        else if (pos < runW * 0.5) pos += runW;
        if (Math.abs(el.scrollLeft - pos) > runW * 0.5) el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Mouse drag on desktop. Touch already scrolls natively, and trackpads send
     horizontal wheel events the scroller handles on its own. */
  const drag = useRef<{ x: number; left: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    hold();
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    hold();
  };
  const endDrag = () => {
    drag.current = null;
    setDragging(false);
    hold();
  };

  const page = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    hold();
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--ink)] text-[var(--cream)] border-y border-[var(--ink)]" aria-label={c.label}>
      {/* Phone: label and "Ver todos" share the top row, the reel runs full
          width beneath and is swiped. Desktop: label | reel | arrows + "Ver
          todos" on one row. `md:contents` dissolves the wrapper from md up so
          the order-* classes can place the label and controls around the reel. */}
      <div className="max-w-[1440px] mx-auto px-[max(5vw,32px)] py-6 md:py-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <div className="order-1 w-full md:w-auto flex items-center justify-between gap-3 md:contents">
          <span className="md:order-1 font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.7)] shrink-0">
            {c.label}
          </span>

          <div className="md:order-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => page(-1)}
              aria-label={c.prev}
              className={`${pillClass} ${pillIdle} hidden md:inline-flex w-9 text-[15px] tracking-normal`}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => page(1)}
              aria-label={c.next}
              className={`${pillClass} ${pillIdle} hidden md:inline-flex w-9 text-[15px] tracking-normal`}
            >
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              aria-controls={panelId}
              className={`${pillClass} inline-flex px-4 ${showAll ? pillOn : pillIdle}`}
            >
              {showAll ? c.close : `${c.all} (${clients.length})`}
            </button>
          </div>
        </div>

        {/* The reel. Swipe, drag, trackpad or arrow keys (it takes focus); it
            drifts on its own when left alone and holds still under the mouse.
            The two outer runs are aria-hidden so screen readers hear the list
            once. md:basis-0 + grow lets it take the leftover row width. */}
        <div
          ref={scrollerRef}
          tabIndex={0}
          aria-label={c.label}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") hovering.current = true;
          }}
          onPointerLeave={() => {
            hovering.current = false;
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={hold}
          onTouchStart={hold}
          onKeyDown={hold}
          className={`marquee marquee-bleed order-2 w-full md:w-auto md:grow md:basis-0 min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cream)] ${
            dragging ? "cursor-grabbing select-none" : "md:cursor-grab"
          }`}
        >
          <div ref={trackRef} className="marquee-track">
            <Run ariaHidden />
            <Run />
            <Run ariaHidden />
          </div>
        </div>

        {/* Every client at once, for someone who doesn't want to scroll. Stays
            in the band so the page doesn't jump to a modal. */}
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
