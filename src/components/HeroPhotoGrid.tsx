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

const tileLayout = [
  "md:col-span-7 md:row-span-3",
  "md:col-span-5 md:row-span-3",
  "md:col-span-4 md:row-span-3",
  "md:col-span-4 md:row-span-3",
  "md:col-span-4 md:row-span-3",
];

export function HeroPhotoGrid({ lang }: { lang: Lang }) {
  const tiles = tileSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-6 gap-2 md:gap-2.5 w-full h-full min-h-[420px] md:min-h-[640px]"
    >
      {tiles.map((p, i) => {
        const copy = lang === "es" ? p.es : p.en;
        const swatch = sectorColor[p.sector];
        const layout = tileLayout[i] ?? "";
        return (
          <Link
            key={p.slug}
            href={projectPath(lang, p.slug)}
            className={`group relative overflow-hidden border border-[var(--border)] bg-[var(--cream-3)] ${layout} ${i >= 2 ? "aspect-[4/3] md:aspect-auto" : "aspect-[4/3] md:aspect-auto"}`}
          >
            {p.coverImage ? (
              <Image
                src={p.coverImage}
                alt={copy.title}
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                priority={i === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ) : null}

            <span
              className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,16,20,0) 50%, rgba(14,16,20,0.55) 100%)",
              }}
            />

            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono-g text-[9.5px] tracking-[0.14em] uppercase text-[var(--ink)] bg-[rgba(250,248,242,0.86)] backdrop-blur-sm px-2 py-1 border border-[var(--border)]">
              <span
                className="inline-block w-1.5 h-1.5"
                style={{ background: swatch }}
              />
              {copy.industry.split(" · ")[0]}
            </span>

            <span className="absolute top-3 right-3 font-mono-g text-[9.5px] tracking-[0.12em] text-[var(--ink)] bg-[rgba(250,248,242,0.86)] backdrop-blur-sm px-2 py-1 border border-[var(--border)]">
              {p.number}
            </span>

            <span
              className="absolute left-4 right-4 bottom-4 font-display italic text-[var(--cream)] leading-[0.95] tracking-[-0.01em] translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                fontSize: i < 2 ? "clamp(22px, 2.6vw, 34px)" : "clamp(18px, 1.6vw, 22px)",
                textShadow: "0 1px 2px rgba(14,16,20,0.4)",
              }}
            >
              {copy.title}
              <span className="ml-2 not-italic font-mono-g text-[10px] tracking-[0.12em] uppercase opacity-80">
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
