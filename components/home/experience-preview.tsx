import Link from "next/link";
import { experiences } from "@/lib/experience";

export function ExperiencePreview() {
  const experience = experiences[0];
  if (!experience) return null;
  return <section className="home-section experience-preview" aria-labelledby="experience-preview-heading"><div className="home-section-heading"><p className="eyebrow">Experience</p><h2 id="experience-preview-heading">Applied work that informs my approach.</h2></div><article className="experience-preview-card"><p className="experience-period">{experience.period}</p><h3>{experience.role}</h3><p className="experience-organization">{experience.organization}</p><p className="muted-text">{experience.organizationDetail}</p></article><Link className="text-link" href="/experience">View experience <span aria-hidden="true">→</span></Link></section>;
}
