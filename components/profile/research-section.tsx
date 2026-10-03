import type { ResearchProject } from "@/types/research-project";
import { SectionHeading } from "@/components/ui/section-heading";
type ResearchSectionProps = Readonly<{ projects: readonly ResearchProject[] }>;
export function ResearchSection({ projects }: ResearchSectionProps) { return <section className="profile-section" aria-labelledby="research-heading"><SectionHeading id="research-heading" eyebrow="Research / Projects" title="Exploring reliable intelligent systems" />{projects.map((project) => <article className="research-card" key={project.title}><h3>{project.title}</h3><p>{project.description}</p><ul className="tag-list" aria-label={`${project.title} technologies and topics`}>{project.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}</section>; }
