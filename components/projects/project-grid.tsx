import type { Project } from "@/types/project";
import { ProjectCard } from "./project-card";
type ProjectGridProps = Readonly<{ projects: readonly Project[] }>;
export function ProjectGrid({ projects }: ProjectGridProps) { return <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>; }
