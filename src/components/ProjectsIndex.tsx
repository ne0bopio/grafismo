import Link from "next/link";
import { publishedProjects as projects } from "@/data/projects";
import { projectPath, homePath, contactHash } from "@/lib/routes";
import type { Lang, Project, Sector } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

const sectorOrder: Sector[] = ["pharma", "retail", "corporate", "public"];

export function ProjectsIndex({ lang, dict }: { lang: Lang; dict: Dict }) {
  const d = dict.projects;
  const total = projects.length;
  const counts: Record<Sector, number> = {
    pharma: 0,
    retail: 0,
    corporate: 0,
    public: 0,
  };
  projects.forEach((p) => (counts[p.sector] += 1));

  const pad = (n: number) => n.toString().padStart(2, "0");
  const totalStr = pad(total);

  return (
    <main className="relative z-[2]">
      <header
        className="max-w-[1440px] mx-auto"
        style={{ padding: "160px max(5vw, 32px) 48px" }}
      >
        <div className="flex items-center gap-4 flex-wrap font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)] mb-8">
          <span className="text-[var(--ink)]">{d.eyebrowNum}</span>
          <span className="inline-flex gap-2 items-center">
            <span className="lab-mark text-[var(--pharma)]" />
            <span className="lab-mark text-[var(--retail)]" />
            <span className="lab-mark text-[var(--industrial)]" />
          </span>
          <span>{d.eyebrowTag}</span>
          <span className="flex-none w-12 h-px bg-[var(--ink)]" />
          <span>
            {totalStr} {d.eyebrowCount.replace(/^\d+\s*/, "")}
          </span>
        </div>
        <h1
          className="font-display italic font-normal text-[clamp(38px,8vw,136px)] leading-[0.92] tracking-[-0.035em] max-w-[14ch] text-[var(--ink)] rise"
          style={{ animationDelay: "0.15s" }}
        >
          {d.headingA}
          <em className="not-italic italic text-[var(--pharma)]">
            {d.headingEm}
          </em>
          {d.headingB}
        </h1>
        <p
          className="mt-9 max-w-[58ch] text-[16px] leading-[1.6] text-[var(--ink-2)] rise"
          style={{ animationDelay: "0.35s" }}
        >
          {d.leadA}
          <strong className="text-[var(--ink)] font-medium">{d.leadPharma}</strong>
          {", "}
          <strong className="text-[var(--ink)] font-medium">{d.leadRetail}</strong>
          {", "}
          <strong className="text-[var(--ink)] font-medium">{d.leadCorporate}</strong>
          {" · "}
          <strong className="text-[var(--ink)] font-medium">{d.leadPublic}</strong>
          {d.leadB}
        </p>
      </header>

      <div
        className="max-w-[1440px] mx-auto mt-16 mb-8 flex justify-between items-start sm:items-center gap-6 flex-wrap border-t border-[var(--border)] pt-6"
        style={{ padding: "24px max(5vw, 32px) 0" }}
      >
        <div className="flex gap-2 flex-wrap font-mono-g text-[11px] tracking-[0.12em] uppercase">
          <span className="bg-[var(--ink)] text-[var(--cream)] px-3.5 py-2 rounded-full border border-[var(--ink)] inline-flex items-center gap-2">
            {d.filterAll} · {totalStr}
          </span>
          {sectorOrder.map((s) => {
            const label =
              s === "pharma"
                ? d.filterPharma
                : s === "retail"
                  ? d.filterRetail
                  : s === "corporate"
                    ? d.filterCorporate
                    : d.filterPublic;
            const dotColor =
              s === "pharma"
                ? "var(--pharma)"
                : s === "retail"
                  ? "var(--retail)"
                  : s === "corporate"
                    ? "var(--industrial)"
                    : "var(--ink)";
            return (
              <span
                key={s}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--border)] text-[var(--ink-2)]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: dotColor }}
                />
                {label} · {pad(counts[s])}
              </span>
            );
          })}
        </div>
        <div className="font-mono-g text-[11px] tracking-[0.12em] uppercase text-[var(--stone)]">
          {d.showing}{" "}
          <strong className="text-[var(--ink)] font-medium">
            {totalStr} / {totalStr}
          </strong>
        </div>
      </div>

      <section
        className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-10 md:gap-x-6 mb-40"
        style={{ padding: "24px max(5vw, 32px) 0" }}
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            p={p}
            lang={lang}
            ctaLabel={d.cta}
            index={i}
          />
        ))}
      </section>

      <section
        className="bg-[var(--ink)] text-[var(--cream)]"
        style={{ padding: "100px max(5vw, 32px)" }}
      >
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-end">
          <h3 className="font-display italic font-normal text-[clamp(32px,5vw,80px)] leading-[0.95] tracking-[-0.025em] max-w-[12ch]">
            {d.nextCtaA}
            <em className="not-italic italic text-[var(--retail)]">
              {d.nextCtaEm}
            </em>
            {d.nextCtaB}
          </h3>
          <Link
            href={`${homePath(lang)}${contactHash(lang)}`}
            className="justify-self-start md:justify-self-end inline-flex items-center gap-3.5 px-[26px] py-4 rounded-full border border-[rgba(244,241,234,0.3)] text-[15px] font-medium text-[var(--cream)] transition-all duration-300 hover:bg-[var(--cream)] hover:text-[var(--ink)] hover:border-[var(--cream)]"
          >
            {d.nextCtaBtn} <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  p,
  lang,
  ctaLabel,
  index,
}: {
  p: Project;
  lang: Lang;
  ctaLabel: string;
  index: number;
}) {
  const copy = lang === "es" ? p.es : p.en;
  const isFeatured = index === 0;
  const isWide = index === 1 || index === 2;
  const span = isFeatured ? "md:col-span-12" : isWide ? "md:col-span-6" : "md:col-span-4";

  const tone = p.sector;
  const bg =
    tone === "pharma"
      ? "linear-gradient(135deg, rgba(200,50,31,0.16), rgba(200,50,31,0.02))"
      : tone === "retail"
        ? "linear-gradient(135deg, rgba(232,119,34,0.16), rgba(232,119,34,0.02))"
        : tone === "corporate"
          ? "linear-gradient(135deg, rgba(30,58,138,0.14), rgba(30,58,138,0.02))"
          : "linear-gradient(135deg, rgba(14,16,20,0.12), rgba(14,16,20,0.02))";
  const industryColor =
    tone === "pharma"
      ? "var(--pharma)"
      : tone === "retail"
        ? "var(--retail)"
        : tone === "corporate"
          ? "var(--industrial)"
          : "var(--ink)";

  return (
    <Link
      href={projectPath(lang, p.slug)}
      className={`${span} group relative flex ${isFeatured ? "md:flex-row flex-col gap-5 md:gap-12 md:items-stretch" : "flex-col gap-5"}`}
    >
      <div
        className={`relative border border-[var(--border)] overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 ${isFeatured ? "md:flex-[1.6] md:aspect-[16/9] aspect-[4/3]" : "aspect-[4/3]"}`}
        style={{ background: p.coverFit === "contain" ? "var(--cream-2)" : bg }}
      >
        {p.coverImage && (
          <img
            src={p.coverImage}
            alt={copy.title}
            className={`absolute inset-0 w-full h-full transition-transform duration-700 ${
              p.coverFit === "contain"
                ? "object-contain"
                : "object-cover group-hover:scale-[1.03]"
            }`}
            loading="lazy"
          />
        )}
        <span className="absolute inset-[18px] border border-[rgba(14,16,20,0.12)] pointer-events-none group-hover:border-[rgba(14,16,20,0.28)] transition-colors duration-300" />
      </div>
      <div
        className={`flex flex-col gap-3 ${isFeatured ? "md:flex-[1] md:py-6 md:gap-7" : ""}`}
      >
        <span
          className="font-mono-g text-[10.5px] font-medium tracking-[0.14em] uppercase"
          style={{ color: industryColor }}
        >
          {copy.industry}
        </span>
        <h2
          className={`font-display italic font-normal leading-[0.98] tracking-[-0.02em] text-[var(--ink)] ${isFeatured ? "text-[clamp(44px,5vw,80px)]" : "text-[clamp(26px,2.8vw,40px)]"}`}
        >
          {copy.title}
        </h2>
        {isFeatured && (
          <span className="block max-w-[42ch] text-[15px] leading-[1.55] text-[var(--ink-2)]">
            {copy.deck}
          </span>
        )}
        <div className="flex justify-between items-center pt-4 border-t border-[var(--border)] mt-2">
          <span className="inline-flex items-center gap-2.5 text-[13px] font-medium text-[var(--ink)] transition-colors">
            {ctaLabel}{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </span>
          <span className="font-mono-g text-[10px] tracking-[0.12em] text-[var(--stone)]">
            {p.number} · {p.years}
          </span>
        </div>
      </div>
    </Link>
  );
}
