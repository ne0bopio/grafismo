import type { Dict } from "@/lib/i18n";

const logos = [
  { name: "Ethicon", style: "italic" as const },
  { name: "DePuy Synthes", style: "regular" as const },
  { name: "Cardinal Health", style: "regular" as const },
  { name: "Aurobindo", style: "regular" as const },
  { name: "Symrise", style: "regular" as const },
];

function LogoItem({ name, style }: { name: string; style: "italic" | "regular" }) {
  return (
    <span
      className={`shrink-0 text-[14px] md:text-[15px] tracking-[0.04em] text-[var(--cream)] opacity-85 ${
        style === "italic"
          ? "font-display italic text-[19px] md:text-[22px]"
          : "font-medium uppercase tracking-[0.12em]"
      }`}
    >
      {name}
    </span>
  );
}

/** One full pass of the list plus the separator that trails it. */
function Run({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex items-center gap-x-10 md:gap-x-14 pr-10 md:pr-14"
      aria-hidden={ariaHidden}
    >
      {logos.map((l) => (
        <LogoItem key={l.name} name={l.name} style={l.style} />
      ))}
      <span className="shrink-0 w-1 h-1 rounded-full bg-[rgba(244,241,234,0.3)]" />
    </div>
  );
}

export function ClientLogoStrip({ dict }: { dict: Dict }) {
  const c = dict.home.clients;
  return (
    <section
      className="bg-[var(--ink)] text-[var(--cream)] border-y border-[var(--ink)]"
      aria-label={c.label}
    >
      {/* Phone: the label and "y más" share one row and the reel runs full
          width beneath them — inline, the label ate ~180px of a 390px screen
          and left the names in a slot barely one word wide. Desktop keeps the
          single inline row. Order + flex-wrap does this with one set of
          elements, so nothing is duplicated for screen readers. */}
      <div className="max-w-[1440px] mx-auto px-[max(5vw,32px)] py-6 md:py-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        {/* On phones this wrapper is the top row: label and "y más" sit
            together at the left. `md:contents` dissolves it from md up, so both
            spans become direct flex children of the strip again and the
            order-* classes put them either side of the reel.

            Keep them packed left on mobile. Both `ml-auto` and
            `justify-between` were tried to push "y más" to the right edge, and
            both dropped it out of the paint on a real top-level 390px viewport
            while still measuring as visible inside a same-size iframe — so it
            looked fine in the probe and was missing on an actual phone. Any
            right-edge placement here has to be screenshot-verified in a direct
            render, not just measured. */}
        <div className="order-1 flex items-center gap-3 md:contents">
          <span className="md:order-1 font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.55)] shrink-0">
            {c.label}
          </span>

          <span className="md:order-3 font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.55)] shrink-0">
            {c.more} →
          </span>
        </div>

        {/* The reel. Three identical runs slide left by exactly one run width
            (a third of the track), so when run A exits, run B is pixel-aligned
            where it started — a seamless loop with no JS and no measurement.
            Three rather than two: one run measures ~910px, and on a 1920px
            display the visible track is ~940px, so with only two runs a gap
            would open at the right edge at the loop point. The extra runs are
            aria-hidden so screen readers hear the client list once. */}
        {/* md:basis-0 matters: the track is ~2730px of content, so with an
            auto basis the reel's base size forces its own line in a wrapping
            flex row. Zero basis + grow lets it take whatever is left instead. */}
        <div className="marquee marquee-bleed order-2 md:order-2 w-full md:w-auto md:grow md:basis-0 min-w-0">
          <div className="marquee-track">
            <Run />
            <Run ariaHidden />
            <Run ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
