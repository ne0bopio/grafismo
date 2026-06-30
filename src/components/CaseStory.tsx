"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Lang, StoryBlock, StoryImage, L } from "@/data/projects";

/**
 * Editorial case-story spread — the photo-led layout Óscar asked for:
 * the work shown whole, each design piece "speaking for itself" on a
 * clean card, with section chapters and soft scroll-reveals. Renders in
 * place of the generic gallery for any project that defines `story`.
 */
export function CaseStory({
  story,
  lang,
  accent,
}: {
  story: StoryBlock[];
  lang: Lang;
  accent: string;
}) {
  const t = (l: L) => (lang === "es" ? l.es : l.en);

  return (
    <div className="bound" style={{ ["--accent" as string]: accent }}>
      <div className="flex flex-col gap-y-[clamp(72px,9vw,128px)] py-[120px]">
        {story.map((block, i) => {
          switch (block.kind) {
            case "intro":
              return (
                <Reveal key={i}>
                  <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-x-16 gap-y-10">
                    <div>
                      <Eyebrow accent={accent}>{t(block.eyebrow)}</Eyebrow>
                      <h2 className="font-display italic font-normal text-[clamp(32px,4.4vw,64px)] leading-[1.02] tracking-[-0.028em] text-[var(--ink)] max-w-[15ch] mt-5">
                        {t(block.title)}
                      </h2>
                      <p className="mt-7 max-w-[52ch] text-[16px] leading-[1.65] text-[var(--ink-2)]">
                        {t(block.lead)}
                      </p>
                    </div>
                    <div className="md:pt-3">
                      <span className="font-mono-g text-[10px] tracking-[0.16em] uppercase text-[var(--stone)]">
                        {lang === "es" ? "Servicios" : "Services"}
                      </span>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-0">
                        {(lang === "es" ? block.services.es : block.services.en).map((s, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 py-2.5 border-b border-[var(--border)] text-[14px] text-[var(--ink-2)]"
                          >
                            <span
                              className="flex-none w-1.5 h-1.5"
                              style={{ background: accent }}
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );

            case "chapter":
              return (
                <Reveal key={i}>
                  <div className="border-t border-[var(--ink)] pt-8">
                    <div className="flex items-baseline gap-5">
                      <span
                        className="font-display italic text-[clamp(28px,3vw,44px)] leading-none"
                        style={{ color: accent }}
                      >
                        {block.index}
                      </span>
                      <Eyebrow accent={accent}>{t(block.eyebrow)}</Eyebrow>
                    </div>
                    <div className="grid md:grid-cols-[1fr_1fr] gap-x-16 gap-y-5 mt-6">
                      <h2 className="font-display italic font-normal text-[clamp(28px,3.6vw,52px)] leading-[1.05] tracking-[-0.025em] text-[var(--ink)] max-w-[16ch]">
                        {t(block.title)}
                      </h2>
                      <p className="max-w-[52ch] text-[15.5px] leading-[1.65] text-[var(--ink-2)] md:pt-2">
                        {t(block.lead)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );

            case "feature":
              return (
                <Reveal key={i}>
                  <figure>
                    <Frame ratio={block.ratio} contain={block.contain}>
                      <img
                        src={block.src}
                        alt={t(block.caption)}
                        loading="lazy"
                        className={
                          block.contain
                            ? "absolute inset-0 w-full h-full object-contain"
                            : "absolute inset-0 w-full h-full object-cover"
                        }
                      />
                    </Frame>
                    <Caption accent={accent}>{t(block.caption)}</Caption>
                  </figure>
                </Reveal>
              );

            case "split":
              return (
                <Reveal key={i}>
                  <div
                    className={`grid md:grid-cols-2 gap-x-14 gap-y-8 items-center ${
                      block.flip ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    <div className={block.flip ? "md:[direction:ltr]" : ""}>
                      <figure>
                        <Frame ratio={block.ratio} contain={block.contain}>
                          <img
                            src={block.src}
                            alt={t(block.title)}
                            loading="lazy"
                            className={
                              block.contain
                                ? "absolute inset-0 w-full h-full object-contain"
                                : "absolute inset-0 w-full h-full object-cover"
                            }
                          />
                        </Frame>
                        {block.caption && (
                          <Caption accent={accent}>{t(block.caption)}</Caption>
                        )}
                      </figure>
                    </div>
                    <div className={block.flip ? "md:[direction:ltr]" : ""}>
                      <h3 className="font-display italic font-normal text-[clamp(26px,3vw,42px)] leading-[1.08] tracking-[-0.02em] text-[var(--ink)] max-w-[15ch]">
                        {t(block.title)}
                      </h3>
                      <p className="mt-5 max-w-[46ch] text-[15.5px] leading-[1.65] text-[var(--ink-2)]">
                        {t(block.body)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );

            case "grid":
              return (
                <Reveal key={i}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6">
                    {block.images.map((img, j) => (
                      <GridImage key={j} img={img} lang={lang} accent={accent} />
                    ))}
                  </div>
                </Reveal>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

function GridImage({
  img,
  lang,
  accent,
}: {
  img: StoryImage;
  lang: Lang;
  accent: string;
}) {
  const caption = lang === "es" ? img.caption.es : img.caption.en;
  const span = img.span ?? 6;
  return (
    <figure className={`col-span-1 sm:col-span-2 ${spanClass(span)}`}>
      <Frame ratio={img.ratio} contain>
        <img
          src={img.src}
          alt={caption}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </Frame>
      <Caption accent={accent}>{caption}</Caption>
    </figure>
  );
}

/** Tailwind needs whole class names present at build time — map span → md:col-span-N. */
function spanClass(span: number): string {
  const map: Record<number, string> = {
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    12: "md:col-span-12",
  };
  return map[span] ?? "md:col-span-6";
}

function Frame({
  ratio,
  contain,
  children,
}: {
  ratio?: string;
  contain?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden border border-[var(--border)]"
      style={{
        aspectRatio: ratio ?? "4 / 3",
        background: contain ? "var(--cream-2)" : "var(--cream-3)",
      }}
    >
      {children}
      {/* hairline inner key — subtle, not a heavy frame */}
      <span className="absolute inset-0 pointer-events-none border border-[var(--border-soft)]" />
    </div>
  );
}

function Caption({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <figcaption className="mt-3 flex items-center gap-2.5 font-mono-g text-[10px] tracking-[0.14em] uppercase text-[var(--stone)]">
      <span className="flex-none w-3 h-px" style={{ background: accent }} />
      {children}
    </figcaption>
  );
}

function Eyebrow({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2.5 font-mono-g text-[10px] font-medium tracking-[0.14em] uppercase"
      style={{ color: accent }}
    >
      <span className="inline-block w-[22px] h-px" style={{ background: accent }} />
      {children}
    </span>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  // Reduced-motion users get the content immediately — never gated behind a
  // scroll-triggered fade.
  if (reduce) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
