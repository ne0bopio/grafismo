import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { ProjectCase } from "@/components/ProjectCase";
import { getProject, getNextProject, publishedProjects } from "@/data/projects";
import { es } from "@/lib/i18n";

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.es.title,
    description: project.es.deck,
    alternates: {
      canonical: `/proyectos/${slug}`,
      languages: {
        "es-CO": `/proyectos/${slug}`,
        "en-US": `/en/projects/${slug}`,
      },
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);
  return (
    <>
      <CapsuleNav lang="es" dict={es} />
      <ProjectCase project={project} next={next} lang="es" dict={es} />
      <Footer lang="es" dict={es} />
    </>
  );
}
