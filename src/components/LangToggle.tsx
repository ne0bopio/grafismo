"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mirrorPath } from "@/lib/routes";
import type { Lang } from "@/data/projects";

export function LangToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const mirror = mirrorPath(pathname);
  const isEs = lang === "es";

  return (
    <div className="relative flex items-center font-mono-g text-[11px] tracking-[0.08em] select-none">
      <Link
        href={isEs ? pathname : mirror}
        scroll={false}
        className={`relative z-[1] px-2 py-1 transition-colors duration-250 ${
          isEs
            ? "text-[var(--ink)] font-medium"
            : "text-[var(--stone-2)] hover:text-[var(--ink)]"
        }`}
      >
        ES
      </Link>
      <span className="w-px h-[10px] bg-[var(--border)]" />
      <Link
        href={!isEs ? pathname : mirror}
        scroll={false}
        className={`relative z-[1] px-2 py-1 transition-colors duration-250 ${
          !isEs
            ? "text-[var(--ink)] font-medium"
            : "text-[var(--stone-2)] hover:text-[var(--ink)]"
        }`}
      >
        EN
      </Link>
      {/* sliding indicator */}
      <span
        className="absolute bottom-0 h-[1.5px] rounded-full transition-all duration-350 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          left: isEs ? 4 : "calc(50% + 4px)",
          width: "calc(50% - 8px)",
          background: isEs ? "var(--pharma)" : "var(--retail)",
        }}
      />
    </div>
  );
}
