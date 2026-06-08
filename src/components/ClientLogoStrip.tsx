import type { Dict } from "@/lib/i18n";

const logos = [
  { name: "Ethicon", style: "italic" as const },
  { name: "DePuy Synthes", style: "regular" as const },
  { name: "Cardinal Health", style: "regular" as const },
  { name: "Aurobindo", style: "regular" as const },
  { name: "Symrise", style: "regular" as const },
];

export function ClientLogoStrip({ dict }: { dict: Dict }) {
  const c = dict.home.clients;
  return (
    <section
      className="bg-[var(--ink)] text-[var(--cream)] border-y border-[var(--ink)]"
      aria-label={c.label}
    >
      <div
        className="max-w-[1440px] mx-auto px-[max(5vw,32px)] py-7 md:py-8 flex flex-wrap items-center gap-x-10 gap-y-4 md:gap-x-14"
      >
        <span className="font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.55)] mr-2 shrink-0">
          {c.label}
        </span>
        <div className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-4 grow">
          {logos.map((l) => (
            <span
              key={l.name}
              className={`text-[14px] md:text-[15px] tracking-[0.04em] text-[var(--cream)] opacity-85 hover:opacity-100 transition-opacity ${l.style === "italic" ? "font-display italic text-[19px] md:text-[22px]" : "font-medium uppercase tracking-[0.12em]"}`}
            >
              {l.name}
            </span>
          ))}
          <span className="font-mono-g text-[10.5px] tracking-[0.18em] uppercase text-[rgba(244,241,234,0.55)] ml-auto shrink-0">
            {c.more} →
          </span>
        </div>
      </div>
    </section>
  );
}
