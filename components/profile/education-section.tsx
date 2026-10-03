import type { Education } from "@/types/education";
import { SectionHeading } from "@/components/ui/section-heading";
type EducationSectionProps = Readonly<{ items: readonly Education[] }>;
export function EducationSection({ items }: EducationSectionProps) { return <section className="profile-section" aria-labelledby="education-heading"><SectionHeading id="education-heading" eyebrow="Education" title="A computer science foundation" /><div className="education-list">{items.map((item) => <article className="education-item" key={`${item.degree}-${item.institution}`}><h3>{item.degree}</h3><p>{item.institution}</p><p className="muted-text">{item.location}</p></article>)}</div></section>; }
