import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectGrid } from "./project-grid";
type FeaturedProjectsProps = Readonly<{ projects: readonly Project[] }>;
export function FeaturedProjects({ projects }: FeaturedProjectsProps) { return <section className="featured-projects" aria-labelledby="featured-projects-heading"><div className="featured-projects-heading"><p className="eyebrow">Selected work</p><h2 id="featured-projects-heading">Featured projects</h2></div><ProjectGrid projects={projects} /><Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link></section>; }
