import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { ProjectCase } from "@/components/ProjectCase";
import { getProject, getNextProject, projects } from "@/data/projects";
import { en } from "@/lib/i18n";
import type { Dict } from "@/lib/i18n";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
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
    title: project.en.title,
    description: project.en.deck,
    alternates: {
      canonical: `/en/projects/${slug}`,
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
  const dict = en as unknown as Dict;
  return (
    <>
      <CapsuleNav lang="en" dict={dict} />
      <ProjectCase project={project} next={next} lang="en" dict={dict} />
      <Footer lang="en" dict={dict} />
    </>
  );
}
