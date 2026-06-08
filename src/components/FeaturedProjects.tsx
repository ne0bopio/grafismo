import Link from "next/link";
import Image from "next/image";
import { SectionHead } from "./SectionHead";
import { getFeaturedProjects } from "@/data/projects";
import { projectPath, projectsPath } from "@/lib/routes";
import type { Lang, Project, Sector } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

const sectorColor: Record<Sector, string> = {
  pharma: "var(--pharma)",
  retail: "var(--retail)",
  corporate: "var(--industrial)",
  public: "var(--ink)",
};

const outcomeKeyBySlug: Record<string, "jjOutcome" | "cardinalOutcome" | "terranumOutcome" | "horowitzOutcome"> = {
  "johnson-johnson": "jjOutcome",
  "cardinal-health": "cardinalOutcome",
  terranum: "terranumOutcome",
  "horowitz-pharmacy": "horowitzOutcome",
};

export function FeaturedProjects({ lang, dict }: { lang: Lang; dict: Dict }) {
  const f = dict.home.featured;
  const items = getFeaturedProjects();

  return (
    <section id="proyectos-destacados" className="py-[120px]">
      <SectionHead label={f.label} num={f.num} />
      <div className="grid md:grid-cols-2 gap-14 items-end mb-14 mt-12">
        <h2 className="font-display italic font-normal text-[clamp(44px,5.4vw,88px)] leading-[0.95] tracking-[-0.025em] max-w-[14ch]">
          {f.headingA}
          <em className="not-italic italic text-[var(--pharma)]">{f.headingEm}</em>
          {f.headingB}
        </h2>
        <p className="text-[15px] leading-[1.6] text-[var(--ink-2)] max-w-[44ch]">
          {f.note}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <FeaturedCard
            key={p.slug}
            p={p}
            lang={lang}
            ctaLabel={f.cta}
            outcome={f[outcomeKeyBySlug[p.slug]]}
            priority={i === 0}
          />
        ))}
      </div>

      <div className="mt-12 flex">
        <Link
          href={projectsPath(lang)}
          className="btn-g btn-ghost-g inline-block text-[14px] font-medium"
        >
          {f.ctaAll} →
        </Link>
      </div>
    </section>
  );
}

function FeaturedCard({
  p,
  lang,
  ctaLabel,
  outcome,
  priority,
}: {
  p: Project;
  lang: Lang;
  ctaLabel: string;
  outcome: string;
  priority?: boolean;
}) {
  const copy = lang === "es" ? p.es : p.en;
  const swatch = sectorColor[p.sector];

  return (
    <Link
      href={projectPath(lang, p.slug)}
      className="group flex flex-col gap-5 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] border border-[var(--border)] overflow-hidden bg-[var(--cream-3)]">
        {p.coverImage && (
          <Image
            src={p.coverImage}
            alt={copy.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--ink)] bg-[rgba(250,248,242,0.88)] backdrop-blur-sm px-2.5 py-1.5 border border-[var(--border)]">
          <span
            className="inline-block w-1.5 h-1.5"
            style={{ background: swatch }}
          />
          {copy.industry}
        </span>
        <span className="absolute top-4 right-4 font-mono-g text-[10px] tracking-[0.12em] text-[var(--ink)] bg-[rgba(250,248,242,0.88)] backdrop-blur-sm px-2 py-1.5 border border-[var(--border)]">
          {p.number}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3
          className="font-display italic font-normal text-[clamp(28px,2.6vw,38px)] leading-[1] tracking-[-0.02em] text-[var(--ink)]"
        >
          {copy.title}
        </h3>
        <p className="text-[14px] leading-[1.55] text-[var(--ink-2)] max-w-[42ch]">
          {outcome}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-[var(--border)] mt-1">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--ink)]">
            {ctaLabel}{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </span>
          <span className="font-mono-g text-[10px] tracking-[0.12em] text-[var(--stone)]">
            {p.years}
          </span>
        </div>
      </div>
    </Link>
  );
}
