import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = Readonly<{ project: Project }>;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" data-project={project.slug}>
      {project.image ? (
        <figure className="project-visual has-image">
          <Image
            className="project-visual-image"
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project visual`}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 58vw"
          />
          {project.imageCaption ? <figcaption className="sr-only">{project.imageCaption}</figcaption> : null}
        </figure>
      ) : (
        <div className="project-visual" aria-hidden="true">
          <div className="project-visual-art">
            <span className="project-visual-index">0{project.id === "cmsf-net" ? "1" : project.id === "mamba-radar-tracking" ? "2" : project.id === "academic-wordpress-website" ? "3" : "4"}</span>
            <span className="project-visual-title">{project.categories[0]}</span>
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-meta">
          <ul className="category-list" aria-label="Project categories">
            {project.categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
          {project.featured ? <span className="featured-label">Featured</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <ul className="tag-list project-tags" aria-label={`${project.title} technologies`}>
          {project.technologies.slice(0, 4).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          <Link href={`/projects/${project.slug}`}>View details <span aria-hidden="true">→</span></Link>
          {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a> : null}
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
    </article>
  );
}
