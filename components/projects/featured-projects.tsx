import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectGrid } from "./project-grid";

type FeaturedProjectsProps = Readonly<{ projects: readonly Project[] }>;

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  if (!featuredProjects.length) return null;

  return (
    <section className="featured-projects" aria-labelledby="featured-projects-heading">
      <div className="featured-projects-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured-projects-heading">Featured projects</h2>
        <p>A selection of research and web work grounded in the projects documented here.</p>
      </div>
      <ProjectGrid projects={featuredProjects} />
      <Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>
    </section>
  );
}
