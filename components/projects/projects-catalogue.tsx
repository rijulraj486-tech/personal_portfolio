"use client";

import { useMemo, useState } from "react";
import { projectCategories, type Project, type ProjectCategory } from "@/types/project";
import { ProjectGrid } from "./project-grid";

type ProjectsCatalogueProps = Readonly<{ projects: readonly Project[] }>;
type ProjectFilter = "All" | ProjectCategory;

export function ProjectsCatalogue({ projects }: ProjectsCatalogueProps) {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [query, setQuery] = useState("");
  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.categories.includes(filter);
      const matchesQuery = !normalizedQuery || [project.title, project.shortDescription, project.description, ...project.technologies].some((value) => value.toLowerCase().includes(normalizedQuery));
      return matchesCategory && matchesQuery;
    });
  }, [filter, projects, query]);
  return (
    <section className="projects-catalogue" aria-labelledby="project-grid-heading">
      <div className="catalogue-controls">
        <div className="filter-list" role="group" aria-label="Filter projects by category">
          {(["All", ...projectCategories] as const).map((category) => (
            <button type="button" className={filter === category ? "filter-button is-active" : "filter-button" onClick={() => setFilter(category)} aria-pressed={filter === category} key={category}>{category}</button>
          ))}
        </div>
        <label className="project-search"><span className="visually-hidden">Search projects</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects..." /></label>
      </div>
      <h2 className="visually-hidden" id="project-grid-heading">Project grid</h2>
      {visibleProjects.length ? <ProjectGrid projects={visibleProjects} /> : <div className="empty-projects" role="status"><h3>No projects found.</h3><p>Try a different search or category.</p></div>}
    </section>
  );
}
