import type { Lang } from "@/data/projects";

export function homePath(lang: Lang): string {
  return lang === "es" ? "/" : "/en";
}

export function projectsPath(lang: Lang): string {
  return lang === "es" ? "/proyectos" : "/en/projects";
}

export function projectPath(lang: Lang, slug: string): string {
  return lang === "es"
    ? `/proyectos/${slug}`
    : `/en/projects/${slug}`;
}

export function contactHash(lang: Lang): string {
  return lang === "es" ? "#contacto" : "#contact";
}

/**
 * Map current pathname to its opposite-language mirror.
 * Used by the LangToggle so click = navigate to same page in other lang.
 */
export function mirrorPath(pathname: string): string {
  if (pathname === "/") return "/en";
  if (pathname === "/en" || pathname === "/en/") return "/";

  if (pathname.startsWith("/en/projects/")) {
    const slug = pathname.replace("/en/projects/", "");
    return `/proyectos/${slug}`;
  }
  if (pathname === "/en/projects") return "/proyectos";

  if (pathname.startsWith("/proyectos/")) {
    const slug = pathname.replace("/proyectos/", "");
    return `/en/projects/${slug}`;
  }
  if (pathname === "/proyectos") return "/en/projects";

  if (pathname.startsWith("/en/")) return pathname.replace("/en/", "/");
  if (pathname.startsWith("/en")) return "/";

  return `/en${pathname}`;
}
