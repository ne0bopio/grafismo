"use client";

import Link from "next/link";
import { LangToggle } from "./LangToggle";
import { GrafismoMark } from "./GrafismoMark";
import { MobileNav } from "./MobileNav";
import { useActiveSection, NavProgress } from "./ScrollSpy";
import { homePath, projectsPath, contactHash } from "@/lib/routes";
import type { Lang } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

type NavLink = { id: string; href: string; label: string };

export function CapsuleNav({ lang, dict }: { lang: Lang; dict: Dict }) {
  const home = homePath(lang);
  const projects = projectsPath(lang);
  const { active, progress } = useActiveSection();

  const links: NavLink[] = [
    { id: "projects", href: projects, label: dict.nav.projects },
    { id: "liderazgo", href: `${home}#liderazgo`, label: dict.nav.leadership },
    { id: "contacto", href: `${home}${contactHash(lang)}`, label: dict.nav.contact },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,880px)] flex justify-center">
      <nav
        className="relative flex items-center gap-4 md:gap-8 py-3 pl-4 md:pl-5 pr-3 md:pr-4 rounded-full border border-[var(--border)]"
        style={{
          backdropFilter: "saturate(180%) blur(18px)",
          WebkitBackdropFilter: "saturate(180%) blur(18px)",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.5) inset, 0 12px 40px -20px rgba(14,16,20,0.2)",
        }}
        id="capsule-nav"
      >
        <Link
          href={home}
          className="font-display italic text-[16px] sm:text-[16px] md:text-[18px] tracking-[-0.01em] leading-none whitespace-nowrap text-[var(--ink)] inline-flex items-center gap-1.5 sm:gap-2"
        >
          Grafismo
          <GrafismoMark size={14} />
          <span className="hidden sm:inline">Comunicaciones</span>
        </Link>

        <div className="hidden md:flex gap-6 text-[13px] font-medium text-[var(--ink-2)]">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className="nav-link-g relative py-1.5 transition-colors duration-300"
                style={{
                  color: isActive ? "var(--pharma)" : undefined,
                }}
              >
                {link.label}
                <span
                  className="absolute left-0 right-0 -bottom-px h-[2px] rounded-full transition-all duration-500"
                  style={{
                    background: "var(--pharma)",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: isActive ? "left" : "right",
                  }}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <LangToggle lang={lang} />
        </div>

        <MobileNav lang={lang} dict={dict} />

        <NavProgress progress={progress} />
      </nav>

      <style>{`
        #capsule-nav {
          background: rgba(244, 241, 234, 0.97);
          border-color: #C8C3B5;
          box-shadow: 0 2px 12px rgba(14, 16, 20, 0.10);
        }
        @media (min-width: 768px) {
          #capsule-nav {
            background: rgba(250, 248, 242, 0.78);
            border-color: var(--border);
            box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset, 0 12px 40px -20px rgba(14,16,20,0.2);
          }
        }
        .nav-link-g {
          position: relative;
          padding: 6px 0;
          transition: color 220ms ease;
        }
        .nav-link-g:hover { color: var(--pharma-2); }
      `}</style>
    </div>
  );
}
