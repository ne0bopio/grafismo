"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { GrafismoMark } from "./GrafismoMark";
import { LangToggle } from "./LangToggle";
import { homePath, projectsPath, contactHash } from "@/lib/routes";
import type { Lang } from "@/data/projects";
import type { Dict } from "@/lib/i18n";

export function MobileNav({ lang, dict }: { lang: Lang; dict: Dict }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const home = homePath(lang);
  const projects = projectsPath(lang);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (open) {
      const y = window.scrollY;
      document.body.style.top = `-${y}px`;
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (y) window.scrollTo(0, -parseInt(y, 10));
    }
    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (y) window.scrollTo(0, -parseInt(y, 10));
    };
  }, [open]);

  const close = () => setOpen(false);

  const links = [
    { href: home, label: dict.nav.home },
    { href: projects, label: dict.nav.projects },
    { href: `${home}#liderazgo`, label: dict.nav.leadership },
    { href: `${home}#metodologia`, label: dict.nav.method },
    { href: `${home}${contactHash(lang)}`, label: dict.nav.contact },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] group"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span
          className="block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center"
          style={open ? { transform: "translateY(3.25px) rotate(45deg)" } : {}}
        />
        <span
          className="block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300"
          style={open ? { opacity: 0, transform: "scaleX(0)" } : {}}
        />
        <span
          className="block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center"
          style={open ? { transform: "translateY(-3.25px) rotate(-45deg)" } : {}}
        />
      </button>

      {/* Portal overlay to body so it escapes the capsule nav's backdropFilter stacking context */}
      {mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] md:hidden pointer-events-none"
            style={{
              opacity: open ? 1 : 0,
              transition: "opacity 400ms cubic-bezier(.2,.8,.2,1)",
              pointerEvents: open ? "auto" : "none",
            }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[var(--ink)]"
              style={{ opacity: open ? 0.12 : 0, transition: "opacity 400ms" }}
              onClick={close}
            />

            {/* Panel */}
            <div
              className="absolute top-0 right-0 h-full w-[min(85vw,340px)] bg-[var(--cream)] border-l border-[var(--border)] flex flex-col"
              style={{
                transform: open ? "translateX(0)" : "translateX(100%)",
                transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-8 pb-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-2.5">
                  <GrafismoMark size={18} />
                  <span className="font-display italic text-[16px] text-[var(--ink)]">
                    Grafismo
                  </span>
                </div>
                <LangToggle lang={lang} />
              </div>

              {/* Links */}
              <nav className="flex-1 px-7 py-8 flex flex-col gap-1">
                {links.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="mobile-nav-link group flex items-center gap-4 py-4 border-b border-[var(--border-soft)] text-[var(--ink)]"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 350ms ${100 + i * 60}ms cubic-bezier(.2,.8,.2,1), transform 350ms ${100 + i * 60}ms cubic-bezier(.2,.8,.2,1)`,
                    }}
                  >
                    <span className="font-mono-g text-[12px] tracking-[0.14em] text-[var(--stone)] w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display italic text-[22px] leading-none tracking-[-0.01em] group-hover:text-[var(--pharma)] transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-7 py-6 border-t border-[var(--border)] font-mono-g text-[12px] tracking-[0.12em] uppercase text-[var(--stone)]">
                hola@grafismobusiness.com
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
