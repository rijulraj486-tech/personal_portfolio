import { AboutPreview } from "@/components/profile/about-preview";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { projects } from "@/lib/projects";
import Link from "next/link";
export default function Home() { return <><section className="hero" aria-labelledby="home-heading"><p className="eyebrow">Software Developer</p><h1 id="home-heading">Building thoughtful digital products.</h1><p className="hero-copy">I&apos;m Rijul Raj, a developer interested in web development, AI, machine learning, and research-led problem solving.</p><Link className="text-link" href="/projects">Explore selected work <span aria-hidden="true">→</span></Link></section><AboutPreview /><FeaturedProjects projects={projects.filter((project) => project.featured)} /></>; }
