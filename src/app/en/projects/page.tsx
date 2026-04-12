import type { Metadata } from "next";
import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { en } from "@/lib/i18n";
import type { Dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected cases from Grafismo Comunicaciones — work in pharmaceutical, retail, corporate communication and public sector, developed from Bogotá.",
  alternates: {
    canonical: "/en/projects",
    languages: {
      "es-CO": "/proyectos",
      "en-US": "/en/projects",
    },
  },
};

export default function Page() {
  const dict = en as unknown as Dict;
  return (
    <>
      <CapsuleNav lang="en" dict={dict} />
      <ProjectsIndex lang="en" dict={dict} />
      <Footer lang="en" dict={dict} />
    </>
  );
}
