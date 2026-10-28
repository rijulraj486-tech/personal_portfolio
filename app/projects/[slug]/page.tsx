import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectDetailPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return project ? { title: project.title, description: project.shortDescription } : {};
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="project-detail">
      <Link className="back-link" href="/projects"><span aria-hidden="true">←</span> Back to projects</Link>
      <header>
        <p className="eyebrow">{project.context ?? "Project"}</p>
        <h1>{project.title}</h1>
        <ul className="category-list" aria-label="Project categories">{project.categories.map((category) => <li key={category}>{category}</li>)}</ul>
        <p className="project-summary">{project.shortDescription}</p>
      </header>
      <section aria-labelledby="overview-heading"><h2 id="overview-heading">Overview</h2><p>{project.description}</p></section>
      <section aria-labelledby="contributions-heading"><h2 id="contributions-heading">Key contributions</h2><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></section>
      <section aria-labelledby="technologies-heading"><h2 id="technologies-heading">Technology stack</h2><ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></section>
      {project.githubUrl || project.liveUrl ? <section aria-labelledby="links-heading"><h2 id="links-heading">Relevant links</h2><div className="project-links">{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a> : null}</div></section> : null}
    </article>
  );
}
