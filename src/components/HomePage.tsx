import Link from "next/link";
import { SectionHead } from "./SectionHead";
import { MethodSteps } from "./MethodSteps";
import { projectsPath } from "@/lib/routes";
import type { Lang } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

export function HomePage({ lang, dict }: { lang: Lang; dict: Dict }) {
  const d = dict.home;
  const projects = projectsPath(lang);

  return (
    <main className="relative z-[2]">
      {/* ============ HERO ============ */}
      <section
        className="min-h-screen grid grid-cols-1 content-between gap-16"
        style={{ padding: "160px max(5vw, 32px) 72px" }}
      >
        <div className="flex items-center gap-4 flex-wrap font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)]">
          <span className="text-[var(--ink)]">{d.eyebrow.num}</span>
          <span className="inline-flex gap-2 items-center">
            <span className="lab-mark text-[var(--pharma)]" />
            <span className="lab-mark text-[var(--retail)]" />
            <span className="lab-mark text-[var(--industrial)]" />
          </span>
          <span className="inline-flex items-center gap-[6px]">
            <span className="text-[var(--pharma)]">{d.eyebrow.sectorPharma}</span>
            <span className="text-[var(--stone-2)] font-normal">·</span>
            <span className="text-[var(--retail)]">{d.eyebrow.sectorRetail}</span>
            <span className="text-[var(--stone-2)] font-normal">·</span>
            <span className="text-[var(--industrial)]">{d.eyebrow.sectorIndustrial}</span>
          </span>
          <span className="flex-none w-12 h-px bg-[var(--ink)]" />
          <span>{d.eyebrow.location}</span>
        </div>

        <h1
          className="font-display italic font-normal text-[clamp(52px,8.2vw,136px)] leading-[0.92] tracking-[-0.035em] max-w-[14ch]"
        >
          <span className="block rise" style={{ animationDelay: "0.15s" }}>
            {d.hero.line1}
          </span>
          <span
            className="block rise pl-[0.4em] md:pl-[1.2em]"
            style={{ animationDelay: "0.3s" }}
          >
            {d.hero.line2}
          </span>
          <span className="block rise" style={{ animationDelay: "0.45s" }}>
            <span className="relative inline-block hero-accent">
              {d.hero.line3}
            </span>
            <span
              className="inline-block align-baseline bg-[var(--pharma)] rounded-full"
              style={{
                width: "0.22em",
                height: "0.22em",
                transform: "translateY(-0.04em)",
                marginLeft: "0.08em",
              }}
            />
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14 items-end">
          <p
            className="max-w-[52ch] text-[15.5px] leading-[1.55] text-[var(--ink-2)] rise"
            style={{ animationDelay: "1s" }}
          >
            {d.hero.subA}
            <span className="text-[var(--pharma)] font-medium">{d.hero.subPharma}</span>
            {d.hero.subRetailA}
            <span className="text-[var(--retail-2)] font-medium">{d.hero.subRetail}</span>
            {d.hero.subIndustrialA}
            <span className="text-[var(--industrial)] font-medium">{d.hero.subIndustrial}</span>
            {d.hero.subB}
          </p>
          <div
            className="flex flex-col items-start gap-[18px] rise"
            style={{ animationDelay: "1.15s" }}
          >
            <Link
              href="#contacto"
              className="btn-g btn-primary-g inline-flex items-center gap-3 px-[22px] py-[14px] rounded-full text-[14px] font-medium"
            >
              {d.hero.ctaPrimary} <span className="arr">→</span>
            </Link>
            <Link
              href="#metodologia"
              className="btn-g btn-ghost-g inline-block text-[14px] font-medium"
            >
              {d.hero.ctaSecondary}
            </Link>
          </div>

          <div
            className="col-span-full mt-5 pt-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-t border-[var(--border)] font-mono-g rise"
            style={{ animationDelay: "1.3s" }}
          >
            {[
              { v: d.hero.stat1Value, k: d.hero.stat1Label, c: "var(--pharma)" },
              { v: d.hero.stat2Value, k: d.hero.stat2Label, c: "var(--retail)" },
              { v: d.hero.stat3Value, k: d.hero.stat3Label, c: "var(--industrial)" },
              { v: d.hero.stat4Value, k: d.hero.stat4Label, c: "var(--ink)" },
            ].map((s, i) => (
              <div
                key={i}
                className={`px-3 md:px-5 ${i === 0 ? "pl-0" : ""} ${i === 3 ? "pr-0" : ""} ${i < 3 ? "md:border-r border-[var(--border)]" : ""}`}
              >
                <div
                  className="font-display italic font-normal text-[clamp(26px,3vw,44px)] leading-none tracking-[-0.015em]"
                  style={{ color: s.c }}
                >
                  {s.v}
                </div>
                <span className="block mt-[10px] text-[10.5px] tracking-[0.14em] uppercase text-[var(--stone)]">
                  {s.k}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bound">
        {/* ============ MENSAJE CLAVE ============ */}
        <section className="py-[120px] relative">
          <SectionHead label={d.mensaje.label} num={d.mensaje.num} />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_7fr_1fr] gap-6 mt-12">
            <blockquote
              className="md:col-start-2 font-display italic font-normal text-[clamp(28px,4.2vw,64px)] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] relative"
            >
              <span
                className="hidden md:block absolute -left-10 w-7 h-px bg-[var(--pharma)]"
                style={{ top: "0.4em" }}
              />
              {d.mensaje.quoteA}
              <em className="not-italic italic text-[var(--pharma)]">
                {d.mensaje.quoteEm}
              </em>
              {d.mensaje.quoteB}
            </blockquote>
          </div>
        </section>

        {/* ============ QUIÉNES SOMOS ============ */}
        <section className="py-12 pb-24">
          <SectionHead label={d.about.label} num={d.about.num} />
          <div className="grid md:grid-cols-[5fr_7fr] gap-14 items-end mt-12">
            <div
              className="relative aspect-[4/5] border border-[var(--border)] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,50,31,0.12), rgba(30,58,138,0.12)), var(--cream-3)",
              }}
            >
              <span className="absolute inset-6 border border-[rgba(14,16,20,0.14)] pointer-events-none" />
              <span className="absolute left-8 top-8 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
                {d.about.photoLabel}
              </span>
              <span className="absolute left-8 right-8 bottom-8 font-display italic text-[22px] text-[var(--ink)]">
                {d.about.photoTitle}
              </span>
            </div>
            <div>
              <h2 className="font-display italic font-normal text-[clamp(40px,5vw,76px)] leading-[0.95] tracking-[-0.025em] max-w-[12ch]">
                {d.about.headingA}
                <em className="not-italic italic text-[var(--pharma)]">
                  {d.about.headingEm}
                </em>
                {d.about.headingB}
              </h2>
              <p className="mt-8 text-[16px] leading-[1.55] text-[var(--ink-2)] max-w-[46ch]">
                {d.about.body}
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 font-mono-g text-[11px] tracking-[0.12em] uppercase">
                <div>
                  <span className="block text-[var(--stone)]">{d.about.meta1K}</span>
                  <span className="block mt-1.5 font-medium text-[var(--ink)]">
                    {d.about.meta1V}
                  </span>
                </div>
                <div>
                  <span className="block text-[var(--stone)]">{d.about.meta2K}</span>
                  <span className="block mt-1.5 font-medium text-[var(--ink)]">
                    {d.about.meta2V}
                  </span>
                </div>
                <div>
                  <span className="block text-[var(--stone)]">{d.about.meta3K}</span>
                  <span className="block mt-1.5 font-medium text-[var(--ink)]">
                    {d.about.meta3V}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ ÁREAS DE IMPACTO ============ */}
        <section id="sectores" className="pt-24 pb-[120px]">
          <SectionHead label={d.sectors.label} num={d.sectors.num} />
          <div className="grid md:grid-cols-2 gap-14 items-end mb-14 mt-12">
            <h2 className="font-display italic font-normal text-[clamp(44px,5.4vw,88px)] leading-[0.95] tracking-[-0.025em] max-w-[12ch]">
              {d.sectors.headingA}
              <em className="not-italic italic text-[var(--pharma)]">
                {d.sectors.headingEm}
              </em>
              {d.sectors.headingB}
            </h2>
            <p className="text-[15px] leading-[1.55] text-[var(--ink-2)] max-w-[44ch]">
              {d.sectors.note}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <SectorCard
              tone="pharma"
              tag={d.sectors.pharmaTag}
              title={d.sectors.pharmaTitle}
              body={d.sectors.pharmaBody}
              metric={d.sectors.pharmaMetric}
              photo={d.sectors.pharmaPhoto}
            />
            <SectorCard
              tone="retail"
              tag={d.sectors.retailTag}
              title={d.sectors.retailTitle}
              body={d.sectors.retailBody}
              metric={d.sectors.retailMetric}
              photo={d.sectors.retailPhoto}
            />
            <SectorCard
              tone="industrial"
              tag={d.sectors.industrialTag}
              title={d.sectors.industrialTitle}
              body={d.sectors.industrialBody}
              metric={d.sectors.industrialMetric}
              photo={d.sectors.industrialPhoto}
            />
          </div>
        </section>
      </div>

      {/* ============ LIDERAZGO ============ */}
      <section
        id="liderazgo"
        className="bg-[var(--cream-2)] py-[120px] relative border-y border-[var(--border)]"
      >
        <div className="bound">
          <SectionHead label={d.leader.label} num={d.leader.num} />
          <div className="grid md:grid-cols-[5fr_7fr] gap-[72px] items-start mt-12">
            <div
              className="relative aspect-[4/5] border border-[var(--border)]"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, rgba(30,58,138,0.18), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(200,50,31,0.12), transparent 60%), var(--cream-3)",
              }}
            >
              <span className="absolute inset-5 border border-[rgba(14,16,20,0.14)] pointer-events-none" />
              <span className="absolute top-7 left-7 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
                {d.leader.photoLabel}
              </span>
              <span className="absolute left-7 bottom-7 font-display italic text-[30px] text-[var(--ink)]">
                {d.leader.photoName}
              </span>
            </div>
            <div>
              <h2 className="font-display italic font-normal text-[clamp(40px,5vw,76px)] leading-[0.95] tracking-[-0.025em] max-w-[12ch]">
                {d.leader.headingA}
                <em className="not-italic italic text-[var(--pharma)]">
                  {d.leader.headingEm}
                </em>
                {d.leader.headingB}
              </h2>
              <p className="mt-7 text-[15.5px] leading-[1.6] text-[var(--ink-2)] max-w-[52ch]">
                {d.leader.bio}
              </p>
              <div className="mt-12 grid">
                <TimelineItem
                  year={d.leader.tl1Year}
                  role={d.leader.tl1Role}
                  tag={d.leader.tl1Tag}
                />
                <TimelineItem
                  year={d.leader.tl2Year}
                  role={d.leader.tl2Role}
                  tag={d.leader.tl2Tag}
                />
                <TimelineItem
                  year={d.leader.tl3Year}
                  role={d.leader.tl3Role}
                  tag={d.leader.tl3Tag}
                  active
                  last
                />
              </div>
              <div className="mt-9">
                <Link
                  href={projects}
                  className="btn-g btn-ghost-g inline-block text-[14px] font-medium"
                >
                  {d.leader.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bound">
        {/* ============ IMPACTO ============ */}
        <section className="py-[120px]">
          <SectionHead label={d.impact.label} num={d.impact.num} />
          <div className="mt-12">
            <h2 className="font-display italic font-normal text-[clamp(40px,5vw,76px)] leading-[0.95] tracking-[-0.025em] max-w-[14ch] mb-16">
              {d.impact.headingA}
              <em className="not-italic italic text-[var(--pharma)]">
                {d.impact.headingEm}
              </em>
              {d.impact.headingB}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-y border-[var(--ink)]">
              <ImpactItem
                k={d.impact.item1K}
                v={d.impact.item1V}
                u={d.impact.item1U}
                color="var(--pharma)"
                borderRight
              />
              <ImpactItem
                k={d.impact.item2K}
                v={d.impact.item2V}
                u={d.impact.item2U}
                color="var(--retail)"
                borderRight
              />
              <ImpactItem
                k={d.impact.item3K}
                v={d.impact.item3V}
                u={d.impact.item3U}
                color="var(--industrial)"
                borderRight
              />
              <ImpactItem
                k={d.impact.item4K}
                v={d.impact.item4V}
                u={d.impact.item4U}
                color="var(--ink)"
              />
            </div>
          </div>
        </section>

        {/* ============ METODOLOGÍA ============ */}
        <section id="metodologia" className="py-[120px]">
          <SectionHead label={d.method.label} num={d.method.num} />
          <div className="grid md:grid-cols-2 gap-14 items-end mb-[72px] mt-12">
            <h2 className="font-display italic font-normal text-[clamp(44px,5.4vw,88px)] leading-[0.95] tracking-[-0.025em] max-w-[14ch]">
              {d.method.headingA}
              <em className="not-italic italic text-[var(--pharma)]">
                {d.method.headingEm}
              </em>
              {d.method.headingB}
            </h2>
            <p className="text-[15px] leading-[1.6] text-[var(--ink-2)] max-w-[44ch]">
              {d.method.note}
            </p>
          </div>
          <MethodSteps
            steps={[
              { n: "01", title: d.method.s1T, body: d.method.s1B, tone: "pharma" },
              { n: "02", title: d.method.s2T, body: d.method.s2B },
              { n: "03", title: d.method.s3T, body: d.method.s3B },
              { n: "04", title: d.method.s4T, body: d.method.s4B },
              { n: "05", title: d.method.s5T, body: d.method.s5B, tone: "industrial" },
            ]}
          />
        </section>
      </div>

      {/* ============ VALIDACIÓN ============ */}
      <section className="bg-[var(--ink)] text-[var(--cream)] py-[120px] relative">
        <div className="bound">
          <SectionHead label={d.validate.label} num={d.validate.num} darkBg />
          <h2 className="font-display italic font-normal text-[clamp(44px,5.4vw,88px)] leading-[0.95] tracking-[-0.025em] max-w-[14ch] mb-[72px] mt-12">
            {d.validate.headingA}
            <em className="not-italic italic text-[var(--retail)]">
              {d.validate.headingEm}
            </em>
            {d.validate.headingB}
          </h2>
          <div className="grid md:grid-cols-3 gap-7">
            <ValCard
              quote={d.validate.q1}
              who={d.validate.who1}
              sector={d.validate.sector1}
              tone="pharma"
            />
            <ValCard
              quote={d.validate.q2}
              who={d.validate.who2}
              sector={d.validate.sector2}
              tone="retail"
            />
            <ValCard
              quote={d.validate.q3}
              who={d.validate.who3}
              sector={d.validate.sector3}
              tone="industrial"
            />
          </div>
        </div>
      </section>

      <div className="bound">
        {/* ============ PROYECCIÓN INTERNACIONAL ============ */}
        <section id="proyeccion" className="py-[140px] relative overflow-hidden">
          <SectionHead label={d.projection.label} num={d.projection.num} />
          <div className="grid md:grid-cols-2 gap-[72px] items-center mt-12">
            <div>
              <div className="font-mono-g text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--stone)] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--pharma)]" />
                {d.projection.eyebrow}
              </div>
              <h2 className="font-display italic font-normal text-[clamp(44px,5.4vw,92px)] leading-[0.92] tracking-[-0.03em] max-w-[14ch]">
                {d.projection.headingA}
                <em className="not-italic italic text-[var(--industrial)]">
                  {d.projection.headingEm}
                </em>
                {d.projection.headingB}
              </h2>
              <p className="mt-8 text-[16px] leading-[1.6] text-[var(--ink-2)] max-w-[48ch]">
                {d.projection.body}
              </p>
            </div>
            <div
              className="relative aspect-square border border-[var(--border)]"
              style={{
                background:
                  "radial-gradient(circle at 30% 38%, rgba(200,50,31,0.14), transparent 45%), radial-gradient(circle at 28% 72%, rgba(30,58,138,0.12), transparent 50%), var(--cream-3)",
              }}
            >
              <span className="absolute inset-5 border border-[rgba(14,16,20,0.12)] pointer-events-none" />
              <span className="absolute top-8 left-8 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
                LAT · 4.7110 N
              </span>
              <span className="absolute bottom-8 right-8 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
                LON · 74.0721 W
              </span>
              <span
                className="absolute border-l border-dashed border-[rgba(14,16,20,0.35)]"
                style={{ left: "26%", top: "32%", width: "8%", height: "28%" }}
              />
              <MapPin tone="industrial" label="US" top="28%" left="24%" />
              <MapPin tone="pharma" label="CO" top="58%" left="30%" />
            </div>
          </div>
        </section>
      </div>

      {/* ============ CONTACTO ============ */}
      <section
        id="contacto"
        className="py-[120px] bg-[var(--cream-2)] border-t border-[var(--border)]"
      >
        <div className="bound">
          <SectionHead label={d.contact.label} num={d.contact.num} />
          <div className="grid md:grid-cols-[5fr_7fr] gap-[72px] items-start mt-12">
            <div>
              <h2 className="font-display italic font-normal text-[clamp(48px,6vw,112px)] leading-[0.92] tracking-[-0.03em] max-w-[10ch]">
                {d.contact.headingA}
                <em className="not-italic italic text-[var(--pharma)]">
                  {d.contact.headingEm}
                </em>
                {d.contact.headingB}
              </h2>
              <p className="mt-7 text-[15.5px] leading-[1.6] text-[var(--ink-2)] max-w-[40ch]">
                {d.contact.lead}
              </p>
              <div className="mt-10 grid gap-4 font-mono-g text-[12px] tracking-[0.06em]">
                <ContactRow k={d.contact.kEmail} v={d.contact.vEmail} />
                <ContactRow k={d.contact.kWhats} v={d.contact.vWhats} />
                <ContactRow k={d.contact.kLoc} v={d.contact.vLoc} />
                <ContactRow k={d.contact.kHours} v={d.contact.vHours} />
              </div>
            </div>
            <ContactForm dict={dict} />
          </div>
        </div>
      </section>

      <style>{`
        .bound {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 max(5vw, 32px);
        }
        .hero-accent::after {
          content: "";
          position: absolute;
          left: -0.02em; right: -0.02em; bottom: 0.08em;
          height: 0.12em;
          background: var(--pharma);
          opacity: 0.85;
          transform-origin: left;
          transform: scaleX(0);
          animation: stretch 1.1s cubic-bezier(.2,.7,.2,1) 1.1s forwards;
        }
        @keyframes stretch { to { transform: scaleX(1); } }
        .btn-g { transition: all 260ms cubic-bezier(.2,.8,.2,1); letter-spacing: 0.01em; }
        .btn-primary-g {
          background: var(--ink);
          color: var(--cream);
          border: 1px solid var(--ink);
        }
        .btn-primary-g:hover { background: var(--pharma-2); border-color: var(--pharma-2); }
        .btn-primary-g .arr { transition: transform 260ms ease; }
        .btn-primary-g:hover .arr { transform: translateX(4px); }
        .btn-ghost-g {
          color: var(--ink);
          border-bottom: 1px solid var(--ink);
          padding: 4px 0;
        }
        .btn-ghost-g:hover { color: var(--pharma); border-bottom-color: var(--pharma); }
      `}</style>
    </main>
  );
}

function SectorCard({
  tone,
  tag,
  title,
  body,
  metric,
  photo,
}: {
  tone: "pharma" | "retail" | "industrial";
  tag: string;
  title: string;
  body: string;
  metric: string;
  photo: string;
}) {
  const color = `var(--${tone})`;
  const bg =
    tone === "pharma"
      ? "linear-gradient(135deg, rgba(200,50,31,0.14), rgba(200,50,31,0.02))"
      : tone === "retail"
        ? "linear-gradient(135deg, rgba(232,119,34,0.15), rgba(232,119,34,0.02))"
        : "linear-gradient(135deg, rgba(30,58,138,0.14), rgba(30,58,138,0.02))";
  return (
    <article className="relative bg-[var(--cream-2)] border border-[var(--border)] flex flex-col gap-6 p-7 pt-8 pb-7 transition-transform duration-300 hover:-translate-y-1">
      <div className="font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)] flex items-center gap-2.5">
        <span
          className="inline-block w-2.5 h-2.5"
          style={{ background: color }}
        />
        {tag}
      </div>
      <div
        className="relative aspect-[4/3] border border-[var(--border)] overflow-hidden"
        style={{ background: bg }}
      >
        <span className="absolute inset-[18px] border border-[rgba(14,16,20,0.12)] pointer-events-none" />
        <span className="absolute bottom-6 left-6 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
          {photo}
        </span>
      </div>
      <h3 className="font-display italic font-normal text-[34px] leading-none tracking-[-0.02em] text-[var(--ink)]">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.55] text-[var(--ink-2)]">{body}</p>
      <div className="mt-auto pt-5 border-t border-[var(--border)] flex justify-between items-center font-mono-g text-[10px] tracking-[0.12em] uppercase text-[var(--stone)]">
        <span
          className="font-display italic text-[22px] not-mono"
          style={{ color }}
        >
          {metric}
        </span>
        <span className="text-[18px] text-[var(--ink)]">→</span>
      </div>
    </article>
  );
}

function TimelineItem({
  year,
  role,
  tag,
  active,
  last,
}: {
  year: string;
  role: string;
  tag: string;
  active?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr_auto] gap-x-4 sm:gap-6 gap-y-1 py-5 border-t border-[var(--border)] items-baseline ${last ? "border-b" : ""}`}
    >
      <span
        className="font-mono-g text-[11px] tracking-[0.1em]"
        style={{
          color: active ? "var(--pharma)" : "var(--stone)",
          fontWeight: active ? 500 : 400,
        }}
      >
        {year}
      </span>
      <span
        className="font-display italic text-[22px]"
        style={{ color: active ? "var(--pharma)" : "var(--ink)" }}
      >
        {role}
      </span>
      <span className="col-span-full sm:col-span-1 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
        {tag}
      </span>
    </div>
  );
}

function ImpactItem({
  k,
  v,
  u,
  color,
  borderRight,
}: {
  k: string;
  v: string;
  u: string;
  color: string;
  borderRight?: boolean;
}) {
  return (
    <div
      className={`px-4 sm:px-7 pt-8 sm:pt-12 pb-7 sm:pb-10 flex flex-col gap-3 sm:gap-4 ${borderRight ? "sm:border-r md:border-r border-[var(--border)]" : ""}`}
    >
      <span className="font-mono-g text-[10.5px] tracking-[0.14em] uppercase text-[var(--stone)]">
        {k}
      </span>
      <span
        className="font-display italic font-normal text-[clamp(32px,5vw,72px)] leading-[0.9] tracking-[-0.03em] whitespace-nowrap"
        style={{ color }}
      >
        {v}
      </span>
      <span className="text-[12px] text-[var(--ink-2)]">{u}</span>
    </div>
  );
}

function Step({
  n,
  title,
  body,
  tone,
}: {
  n: string;
  title: string;
  body: string;
  tone?: "pharma" | "industrial";
}) {
  const borderColor =
    tone === "pharma"
      ? "var(--pharma)"
      : tone === "industrial"
        ? "var(--industrial)"
        : "var(--ink)";
  const textColor =
    tone === "pharma"
      ? "var(--pharma)"
      : tone === "industrial"
        ? "var(--industrial)"
        : "var(--ink)";
  return (
    <div className="relative z-[1]">
      <div
        className="w-16 h-16 rounded-full bg-[var(--cream)] border flex items-center justify-center font-mono-g text-[13px] font-medium mb-6 transition-all duration-300"
        style={{ borderColor, color: textColor }}
      >
        {n}
      </div>
      <h3 className="font-display italic font-normal text-[22px] leading-[1.1] text-[var(--ink)] mb-3">
        {title}
      </h3>
      <p className="text-[13px] leading-[1.5] text-[var(--ink-2)]">{body}</p>
    </div>
  );
}

function ValCard({
  quote,
  who,
  sector,
  tone,
}: {
  quote: string;
  who: string;
  sector: string;
  tone: "pharma" | "retail" | "industrial";
}) {
  const sectorColor = `var(--${tone})`;
  return (
    <div className="p-9 px-7 border border-[rgba(244,241,234,0.14)] bg-[rgba(244,241,234,0.02)] flex flex-col gap-6 transition-all duration-300 hover:border-[rgba(244,241,234,0.3)] hover:bg-[rgba(244,241,234,0.04)]">
      <p className="font-display italic font-normal text-[20px] leading-[1.35] text-[var(--cream)]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto pt-6 border-t border-[rgba(244,241,234,0.14)] grid gap-1">
        <span className="text-[13px] font-medium text-[var(--cream)]">{who}</span>
        <span
          className="font-mono-g text-[10px] tracking-[0.14em] uppercase"
          style={{ color: sectorColor }}
        >
          {sector}
        </span>
      </div>
    </div>
  );
}

function MapPin({
  tone,
  label,
  top,
  left,
}: {
  tone: "pharma" | "industrial";
  label: string;
  top: string;
  left: string;
}) {
  const color = `var(--${tone})`;
  return (
    <div
      className="absolute flex flex-col items-center gap-1.5 font-mono-g text-[10px] tracking-[0.14em] uppercase"
      style={{ top, left, color }}
    >
      <span
        className="w-3 h-3 rounded-full"
        style={{ background: color }}
      />
      <span>{label}</span>
    </div>
  );
}

function ContactRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-4 py-2.5 border-b border-[var(--border)]">
      <span className="text-[var(--stone)] uppercase tracking-[0.14em] text-[10px]">
        {k}
      </span>
      <span className="text-[var(--ink)]">{v}</span>
    </div>
  );
}

function ContactForm({ dict }: { dict: Dict }) {
  const c = dict.home.contact;
  return (
    <form className="grid gap-[18px]" action="/api/contact" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={c.fName}>
          <input
            type="text"
            name="name"
            placeholder={c.fNamePh}
            className="form-input-g"
            required
          />
        </Field>
        <Field label={c.fCompany}>
          <input
            type="text"
            name="company"
            placeholder={c.fCompanyPh}
            className="form-input-g"
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={c.fEmail}>
          <input
            type="email"
            name="email"
            placeholder={c.fEmailPh}
            className="form-input-g"
            required
          />
        </Field>
        <Field label={c.fSector}>
          <select name="sector" className="form-input-g" defaultValue="">
            {c.fSectorOpts.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label={c.fProject}>
        <textarea
          name="project"
          placeholder={c.fProjectPh}
          className="form-input-g min-h-[90px] resize-y"
          required
        />
      </Field>
      <div className="mt-[18px] flex justify-between items-center flex-wrap gap-4">
        <button
          type="submit"
          className="btn-g btn-primary-g inline-flex items-center gap-3 px-[22px] py-[14px] rounded-full text-[14px] font-medium"
        >
          {c.submit} <span className="arr">→</span>
        </button>
        <a
          href="#"
          className="btn-g btn-ghost-g inline-block text-[14px] font-medium"
        >
          {c.whatsCta}
        </a>
      </div>
      <style>{`
        .form-input-g {
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--ink);
          padding: 14px 0;
          font: inherit;
          font-size: 16px;
          color: var(--ink);
          outline: 0;
          transition: border-color 220ms ease;
          width: 100%;
        }
        .form-input-g:focus { border-color: var(--pharma); }
        .form-input-g::placeholder { color: var(--stone-2); }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label className="font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
        {label}
      </label>
      {children}
    </div>
  );
}
