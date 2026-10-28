import type { Metadata } from "next";
import { EducationSection } from "@/components/profile/education-section";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { ResearchSection } from "@/components/profile/research-section";
import { SkillsSection } from "@/components/profile/skills-section";
import { education } from "@/lib/education";
import { experiences } from "@/lib/experience";
import { researchProjects } from "@/lib/research-projects";
export const metadata: Metadata = { title: "About", description: "Learn about Rijul Raj, a Computer Science postgraduate and software developer interested in web development and AI/ML." };
export default function AboutPage() { return <div className="profile-page"><section className="page-intro" aria-labelledby="about-heading"><p className="eyebrow">About me</p><h1 id="about-heading">Building reliable intelligence for real products.</h1><p>I&apos;m Rijul Raj, an M.Sc. Computer Science graduate, AI/ML engineer, and software developer. My work spans deep learning for sensor fusion, radar tracking, and computer vision, alongside database-backed web applications and API-integrated products.</p></section><EducationSection items={education} /><ExperienceTimeline items={experiences} /><ResearchSection projects={researchProjects} /><SkillsSection /><section className="career-focus" aria-labelledby="career-focus-heading"><p className="eyebrow">Career focus</p><h2 id="career-focus-heading">Applied AI with the full product in view.</h2><p>I&apos;m interested in machine learning systems, agentic and generative AI, and the web infrastructure that helps turn research into dependable, useful software.</p></section></div>; }
