import type { Metadata } from "next";
import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { es } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Casos seleccionados de Grafismo Comunicaciones — trabajos en farmacéutica, retail, comunicación corporativa y sector público desarrollados desde Bogotá.",
  alternates: {
    canonical: "/proyectos",
    languages: {
      "es-CO": "/proyectos",
      "en-US": "/en/projects",
    },
  },
};

export default function Page() {
  return (
    <>
      <CapsuleNav lang="es" dict={es} />
      <ProjectsIndex lang="es" dict={es} />
      <Footer lang="es" dict={es} />
    </>
  );
}
