import type { Metadata } from "next";
import { EducationSection } from "@/components/profile/education-section";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { ResearchSection } from "@/components/profile/research-section";
import { SkillsSection } from "@/components/profile/skills-section";
import { education } from "@/lib/education";
import { experiences } from "@/lib/experience";
import { researchProjects } from "@/lib/research-projects";
export const metadata: Metadata = { title: "About", description: "Learn about Rijul Raj, a Computer Science postgraduate and software developer interested in web development and AI/ML." };
export default function AboutPage() { return <div className="profile-page"><section className="page-intro" aria-labelledby="about-heading"><p className="eyebrow">About me</p><h1 id="about-heading">Grounded in software, curious about what&apos;s next.</h1><p>I&apos;m Rijul Raj, a Computer Science postgraduate focused on software development. I enjoy building web applications, learning modern development practices, and exploring how AI and machine learning can support reliable, useful products.</p></section><EducationSection items={education} /><ExperienceTimeline items={experiences} /><ResearchSection projects={researchProjects} /><SkillsSection /><section className="career-focus" aria-labelledby="career-focus-heading"><p className="eyebrow">Career focus</p><h2 id="career-focus-heading">Software development with an eye on the whole product.</h2><p>I&apos;m growing across frontend and full-stack development, with a continuing interest in AI, machine learning, web development, and software engineering.</p></section></div>; }
