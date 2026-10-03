import Link from "next/link";
import { skillGroups } from "@/lib/skills";

export function SkillsPreview() {
  return <section className="home-section skills-preview" aria-labelledby="skills-preview-heading"><div className="home-section-heading"><p className="eyebrow">Technical interests</p><h2 id="skills-preview-heading">A practical, growing toolkit.</h2></div><div className="skills-preview-list">{skillGroups.slice(0, 3).map((group) => <article className="skills-preview-group" key={group.title}><h3>{group.title}</h3><p>{group.skills.slice(0, 4).join(" · ")}</p></article>)}</div><Link className="text-link" href="/about">Explore skills and background <span aria-hidden="true">→</span></Link></section>;
}
