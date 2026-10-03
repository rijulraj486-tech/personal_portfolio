import type { Metadata } from "next";
import { GitHubRepositories } from "@/components/github/github-repositories";
import { ProjectsCatalogue } from "@/components/projects/projects-catalogue";
import { projects } from "@/lib/projects";
export const metadata: Metadata = { title: "Projects", description: "Selected projects by Rijul Raj across web development, AI/ML, research, and WordPress." };
export default function ProjectsPage() { return <div className="projects-page"><section className="page-intro" aria-labelledby="projects-heading"><p className="eyebrow">Projects</p><h1 id="projects-heading">Work across the web, AI, and research.</h1><p>Selected projects demonstrating my work across software development, web development, AI/ML, research, and related technologies.</p></section><ProjectsCatalogue projects={projects} /><GitHubRepositories /></div>; }
