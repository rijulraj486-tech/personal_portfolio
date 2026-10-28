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

  const relatedProjects = projects
    .filter((candidate) => candidate.slug !== project.slug)
    .sort((first, second) => {
      const firstSharedCategories = first.categories.filter((category) => project.categories.includes(category)).length;
      const secondSharedCategories = second.categories.filter((category) => project.categories.includes(category)).length;
      return secondSharedCategories - firstSharedCategories;
    })
    .slice(0, 2);

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
      {relatedProjects.length > 0 ? <nav className="related-projects" aria-labelledby="related-projects-heading"><p className="eyebrow">Continue exploring</p><h2 id="related-projects-heading">Related projects</h2><div className="related-project-list">{relatedProjects.map((relatedProject) => <Link key={relatedProject.slug} href={`/projects/${relatedProject.slug}`}><span>{relatedProject.context ?? relatedProject.categories[0]}</span><strong>{relatedProject.title}</strong><span aria-hidden="true">→</span></Link>)}</div></nav> : null}
    </article>
  );
}
