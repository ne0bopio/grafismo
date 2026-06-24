import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { projectsPath, projectPath } from "@/lib/routes";
import type { Lang, Project } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

export function ProjectCase({
  project,
  next,
  lang,
  dict,
}: {
  project: Project;
  next: Project;
  lang: Lang;
  dict: Dict;
}) {
  const copy = lang === "es" ? project.es : project.en;
  const nextCopy = lang === "es" ? next.es : next.en;
  const c = dict.case;

  const accent = sectorAccent(project.sector);
  const bgCover = sectorBg(project.sector);

  return (
    <main className="relative z-[2]" style={{ ["--accent" as string]: accent }}>
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: "140px max(5vw, 32px) 0" }}
      >
        <Link
          href={projectsPath(lang)}
          className="font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)] inline-flex items-center gap-3 transition-colors hover:text-[var(--accent)]"
        >
          <span className="case-back-arr transition-transform duration-300">←</span>{" "}
          {c.backToProjects}
        </Link>
      </div>

      <section
        className="max-w-[1440px] mx-auto"
        style={{ padding: "40px max(5vw, 32px) 72px" }}
      >
        <div className="flex items-center gap-4 flex-wrap font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)] mb-10">
          <span className="text-[var(--ink)]">
            {project.number} / {project.years.split("—").pop()?.trim() || project.years}
          </span>
          <span className="inline-block w-2.5 h-2.5" style={{ background: accent }} />
          <span className="font-medium" style={{ color: accent }}>
            {sectorLabel(project.sector, lang)}
          </span>
          <span className="flex-none w-12 h-px bg-[var(--ink)]" />
          <span>{copy.industry}</span>
        </div>
        <h1
          className="font-display italic font-normal text-[clamp(40px,8.6vw,152px)] leading-[0.88] tracking-[-0.038em] max-w-[13ch] rise"
          style={{ animationDelay: "0.15s" }}
        >
          {copy.title} — <em className="not-italic italic" style={{ color: accent }}>{copy.industry.toLowerCase()}</em>
        </h1>
        <p
          className="mt-9 max-w-[58ch] text-[17px] leading-[1.55] text-[var(--ink-2)] rise"
          style={{ animationDelay: "0.45s" }}
        >
          {copy.deck}
        </p>
      </section>

      <section
        className="max-w-[1440px] mx-auto rise"
        style={{ padding: "0 max(5vw, 32px)", animationDelay: "0.6s" }}
      >
        <div
          className="relative aspect-[16/9] border border-[var(--border)] overflow-hidden"
          style={{ background: bgCover }}
        >
          {project.coverImage && (
            <img
              src={project.coverImage}
              alt={copy.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <span className="absolute inset-6 border border-[rgba(14,16,20,0.14)] pointer-events-none" />
        </div>
      </section>

      <div
        className="max-w-[1440px] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-6 border-t border-[var(--ink)] border-b border-[var(--border)]"
        style={{ padding: "32px max(5vw, 32px)" }}
      >
        <MetaCell k={c.client} v={copy.client ?? copy.title} first />
        <MetaCell k={c.industry} v={copy.industry} />
        <MetaCell k={c.year} v={project.years} />
        <MetaCell k={c.role} v={c.roleVal} />
        <MetaCell k={c.scope} v={c.scopeVal} last />
      </div>

      <div className="bound">
        <section className="py-[120px] pb-[100px]">
          <SectionHead label={c.contextLabel} num={c.contextNum} />
          <div className="grid md:grid-cols-2 gap-[72px] mt-10">
            <BriefCol
              tag={c.desafio}
              title={copy.challengeTitle}
              paragraphs={copy.challenge}
              accent={accent}
            />
            <BriefCol
              tag={c.aproximacion}
              title={copy.approachTitle}
              paragraphs={copy.approach}
              accent={accent}
            />
          </div>
        </section>

        <section className="pt-10 pb-[120px]">
          <SectionHead label={c.galleryLabel} num={c.galleryNum} />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
            {copy.gallery.map((label, i) => (
              <GalleryTile
                key={i}
                label={label}
                index={i}
                tone={project.sector}
                imageSrc={project.galleryImages[i]}
              />
            ))}
          </div>
        </section>
      </div>

      <section
        className="bg-[var(--ink)] text-[var(--cream)]"
        style={{ padding: "120px max(5vw, 32px)" }}
      >
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="min-w-0 overflow-hidden">
            <span className="font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone-2)] block mb-6">
              {copy.metricLabel}
            </span>
            <div
              className="font-display italic font-normal text-[clamp(40px,8vw,140px)] leading-[0.85] tracking-[-0.04em]"
              style={{ color: accent }}
            >
              {project.metric}
            </div>
          </div>
          <div>
            <h3 className="font-display italic font-normal text-[clamp(28px,3vw,44px)] leading-[1.1] tracking-[-0.02em] text-[var(--cream)] max-w-[16ch]">
              {copy.metricStatement.split(/(\s*[—,]\s*[^.,—]+\.?$)/).length > 1 ? (
                <>{copy.metricStatement}</>
              ) : (
                copy.metricStatement
              )}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.6] text-[rgba(244,241,234,0.78)] max-w-[42ch]">
              {copy.metricBody}
            </p>
          </div>
        </div>
      </section>

      <div className="bound">
        <section className="pt-[120px] pb-20">
          <SectionHead label={c.creditsLabel} num={c.creditsNum} />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {copy.credits.map((credit, i) => (
              <div key={i} className="flex flex-col gap-2.5">
                <span className="font-mono-g text-[10px] tracking-[0.16em] uppercase text-[var(--stone)]">
                  {credit.key}
                </span>
                <span className="text-[14px] text-[var(--ink-2)] leading-[1.5]">
                  {credit.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-20 pb-40">
          <Link
            href={projectPath(lang, next.slug)}
            className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center py-10 md:py-12 border-y border-[var(--ink)] transition-all duration-500 hover:px-6 hover:bg-[var(--cream-2)]"
          >
            <span className="font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)]">
              {c.nextLabel}
            </span>
            <div>
              <h3 className="font-display italic font-normal text-[clamp(38px,5vw,80px)] leading-none tracking-[-0.03em] text-[var(--ink)]">
                {nextCopy.title}
              </h3>
              <span
                className="font-mono-g text-[10px] tracking-[0.14em] uppercase block mt-2"
                style={{ color: sectorAccent(next.sector) }}
              >
                {nextCopy.industry}
              </span>
            </div>
            <span className="text-[40px] text-[var(--ink)] transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </section>
      </div>

      <style>{`
        .bound {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 max(5vw, 32px);
        }
        a:hover .case-back-arr { transform: translateX(-4px); }
      `}</style>
    </main>
  );
}

function MetaCell({
  k,
  v,
  first,
  last,
}: {
  k: string;
  v: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2.5 pr-7 ${first ? "" : "md:pl-7"} ${last ? "border-r-0" : "md:border-r border-[var(--border)]"}`}
    >
      <span className="font-mono-g text-[10px] tracking-[0.16em] uppercase text-[var(--stone)]">
        {k}
      </span>
      <span className="font-display italic text-[24px] leading-[1.1] text-[var(--ink)]">
        {v}
      </span>
    </div>
  );
}

function BriefCol({
  tag,
  title,
  paragraphs,
  accent,
}: {
  tag: string;
  title: string;
  paragraphs: string[];
  accent: string;
}) {
  return (
    <div>
      <span
        className="inline-flex items-center gap-2.5 font-mono-g text-[10px] tracking-[0.14em] uppercase mb-4"
        style={{ color: accent }}
      >
        <span
          className="inline-block w-[22px] h-px"
          style={{ background: accent }}
        />
        {tag}
      </span>
      <h2 className="font-display italic font-normal text-[clamp(34px,3.8vw,56px)] leading-[1.02] tracking-[-0.025em] max-w-[14ch] text-[var(--ink)] mb-6">
        {title}
      </h2>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-[15.5px] leading-[1.65] text-[var(--ink-2)] ${i > 0 ? "mt-4" : ""}`}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function GalleryTile({
  label,
  index,
  tone,
  imageSrc,
}: {
  label: string;
  index: number;
  tone: "pharma" | "retail" | "corporate" | "public";
  imageSrc?: string;
}) {
  const bg = sectorBg(tone);
  const colSpan = index === 0 ? "md:col-span-8" : "md:col-span-4";
  const aspect =
    index === 0
      ? "aspect-[16/9]"
      : index === 1
        ? "aspect-[3/4]"
        : "aspect-[4/3]";
  return (
    <div className={`col-span-1 sm:col-span-2 ${colSpan} flex flex-col gap-3`}>
      <div
        className={`relative ${aspect} border border-[var(--border)] overflow-hidden`}
        style={{ background: bg }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <span className="absolute inset-[18px] border border-[rgba(14,16,20,0.12)] pointer-events-none" />
      </div>
      <span className="font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
        {label}
      </span>
    </div>
  );
}

function sectorAccent(s: "pharma" | "retail" | "corporate" | "public"): string {
  return s === "pharma"
    ? "var(--pharma)"
    : s === "retail"
      ? "var(--retail)"
      : s === "corporate"
        ? "var(--industrial)"
        : "var(--ink)";
}

function sectorBg(s: "pharma" | "retail" | "corporate" | "public"): string {
  return s === "pharma"
    ? "linear-gradient(135deg, rgba(200,50,31,0.16), rgba(200,50,31,0.02)), var(--cream-3)"
    : s === "retail"
      ? "linear-gradient(135deg, rgba(232,119,34,0.16), rgba(232,119,34,0.02)), var(--cream-3)"
      : s === "corporate"
        ? "linear-gradient(135deg, rgba(30,58,138,0.14), rgba(30,58,138,0.02)), var(--cream-3)"
        : "linear-gradient(135deg, rgba(14,16,20,0.12), rgba(14,16,20,0.02)), var(--cream-3)";
}

function sectorLabel(
  s: "pharma" | "retail" | "corporate" | "public",
  lang: Lang
): string {
  const map = {
    es: {
      pharma: "Farmacéutico",
      retail: "Retail",
      corporate: "Corporativo",
      public: "Sector público",
    },
    en: {
      pharma: "Pharmaceutical",
      retail: "Retail",
      corporate: "Corporate",
      public: "Public sector",
    },
  };
  return map[lang][s];
}
