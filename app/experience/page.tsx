import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { ResearchSection } from "@/components/profile/research-section";
import { experiences } from "@/lib/experience";
import { researchProjects } from "@/lib/research-projects";
export const metadata: Metadata = { title: "Experience", description: "Professional and research experience for Rijul Raj." };
export default function ExperiencePage() { return <div className="profile-page"><section className="page-intro" aria-labelledby="experience-page-heading"><p className="eyebrow">Experience</p><h1 id="experience-page-heading">Learning through applied work.</h1><p>Professional and research experiences that shape my approach to software development.</p></section><ExperienceTimeline items={experiences} /><ResearchSection projects={researchProjects} /></div>; }
