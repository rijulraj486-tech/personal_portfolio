import { AboutPreview } from "@/components/profile/about-preview";
import { ContactCta } from "@/components/home/contact-cta";
import { ExperiencePreview } from "@/components/home/experience-preview";
import { Hero } from "@/components/home/hero";
import { SkillsPreview } from "@/components/home/skills-preview";
import { GitHubRepositories } from "@/components/github/github-repositories";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { projects } from "@/lib/projects";

export default function Home() {
  return <><Hero /><AboutPreview /><FeaturedProjects projects={projects.filter((project) => project.featured)} /><SkillsPreview /><div className="home-section github-preview"><GitHubRepositories /></div><ExperiencePreview /><ContactCta /></>;
}
