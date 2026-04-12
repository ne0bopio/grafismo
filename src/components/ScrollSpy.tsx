"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["sectores", "liderazgo", "metodologia", "contacto"];

export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.min(scrollY / docH, 1) : 0);

      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { active, progress };
}

export function NavProgress({ progress }: { progress: number }) {
  return (
    <div
      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full overflow-hidden"
      style={{ opacity: progress > 0.02 ? 1 : 0, transition: "opacity 300ms" }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, var(--pharma), var(--retail), var(--industrial))",
          transition: "width 80ms linear",
        }}
      />
    </div>
  );
}
