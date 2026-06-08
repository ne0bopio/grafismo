import Link from "next/link";
import { GrafismoMark } from "./GrafismoMark";
import { homePath, projectsPath, contactHash } from "@/lib/routes";
import type { Lang } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

export function Footer({ lang, dict }: { lang: Lang; dict: Dict }) {
  const home = homePath(lang);
  const projects = projectsPath(lang);
  const contact = `${home}${contactHash(lang)}`;

  return (
    <footer
      className="bg-[var(--ink)] text-[var(--cream)] pt-20 pb-12 px-[max(5vw,32px)] relative"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_2fr_2fr] gap-10 md:gap-14">
        <div className="font-display italic text-[clamp(32px,5vw,84px)] leading-[0.95] tracking-[-0.02em]">
          Grafismo
          <span className="inline-flex mx-2.5">
            <GrafismoMark size={28} />
          </span>
          <em>Comunicaciones</em>
        </div>
        <div>
          <h4 className="font-mono-g text-[10px] font-medium tracking-[0.16em] uppercase text-[var(--stone-2)] mb-5">
            {dict.footer.navTitle}
          </h4>
          <ul className="list-none grid gap-3">
            <li>
              <Link href={projects} className="text-[14px] opacity-85 hover:opacity-100 transition-opacity">
                {dict.nav.projects}
              </Link>
            </li>
            <li>
              <Link href={`${home}#liderazgo`} className="text-[14px] opacity-85 hover:opacity-100 transition-opacity">
                {dict.nav.leadership}
              </Link>
            </li>
            <li>
              <Link href={contact} className="text-[14px] opacity-85 hover:opacity-100 transition-opacity">
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono-g text-[10px] font-medium tracking-[0.16em] uppercase text-[var(--stone-2)] mb-5">
            {dict.footer.sectorsTitle}
          </h4>
          <ul className="list-none grid gap-3">
            <li><span className="text-[14px] opacity-85">{dict.home.sectors.pharmaTag}</span></li>
            <li><span className="text-[14px] opacity-85">{dict.home.sectors.retailTag}</span></li>
            <li><span className="text-[14px] opacity-85">{dict.home.sectors.industrialTag}</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono-g text-[10px] font-medium tracking-[0.16em] uppercase text-[var(--stone-2)] mb-5">
            {dict.footer.contactTitle}
          </h4>
          <ul className="list-none grid gap-3">
            <li>
              <a href={`mailto:${dict.home.contact.vEmail}`} className="text-[14px] opacity-85 hover:opacity-100 transition-opacity">
                {dict.home.contact.vEmail}
              </a>
            </li>
            <li><span className="text-[14px] opacity-85">{dict.home.contact.vWhats}</span></li>
            <li><span className="text-[14px] opacity-85">{dict.home.contact.vLoc}</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-14 pt-6 border-t border-[rgba(244,241,234,0.12)] flex justify-between items-center flex-wrap gap-4 font-mono-g text-[11px] tracking-[0.1em] uppercase text-[var(--stone-2)]">
        <span>{dict.footer.rights}</span>
        <span>{dict.footer.version}</span>
      </div>
    </footer>
  );
}
