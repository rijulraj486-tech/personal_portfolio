import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectGrid } from "./project-grid";

type FeaturedProjectsProps = Readonly<{ projects: readonly Project[] }>;

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.slice(0, 4);

  if (!featuredProjects.length) return null;

  return (
    <section className="featured-projects" id="selected-work" aria-labelledby="featured-projects-heading">
      <div className="featured-projects-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured-projects-heading">Research with real-world intent.</h2>
        <p>Selected work across sensor fusion, radar tracking, LegalTech, academic publishing, and the web.</p>
      </div>
      <ProjectGrid projects={featuredProjects} />
      <Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>
    </section>
  );
}
