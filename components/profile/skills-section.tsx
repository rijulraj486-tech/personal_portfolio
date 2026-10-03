import { skillGroups } from "@/lib/skills";
import { SectionHeading } from "@/components/ui/section-heading";
export function SkillsSection() { return <section className="profile-section" aria-labelledby="skills-heading"><SectionHeading id="skills-heading" eyebrow="Technical interests" title="Tools I work with" /><div className="skills-grid">{skillGroups.map((group) => <section className="skill-group" key={group.title}><h3>{group.title}</h3><ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></section>)}</div></section>; }
